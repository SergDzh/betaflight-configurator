'use strict';

class PresetsDetailedDialog {
    constructor(domDialog, pickedPresetList, onPresetPickedCallback) {
        this._domDialog = domDialog;
        this._pickedPresetList = pickedPresetList;
        this._finalDialogYesNoSettings = {};
        this._onPresetPickedCallback = onPresetPickedCallback;
        this._openPromiseResolve = undefined;
    }

    load() {
        return new Promise(resolve => {
            this._domDialog.load("./tabs/presets/DetailedDialog/PresetsDetailedDialog.html", () => {
                this._setupdialog();
                resolve();
            });
        });
    }

    open(preset, presetsRepo) {
        this._presetsRepo = presetsRepo;
        this._preset = preset;
        this._setLoadingState(true);
        this._domDialog[0].showModal();

        this._presetsRepo.loadPreset(this._preset)
            .then(() => {
                this._loadPresetUi();
                this._setLoadingState(false);
                this._setFinalYesNoDialogSettings();
            })
            .catch(err => {
                console.error(err);
                const msg = i18n.getMessage("presetsLoadError");
                this._showError(msg);
            });

        return new Promise(resolve => this._openPromiseResolve = resolve);
    }

    _setFinalYesNoDialogSettings() {
        this._finalDialogYesNoSettings = {
            title: i18n.getMessage("presetsWarningDialogTitle"),
            text: GUI.escapeHtml(this._preset.completeWarning),
            buttonYesText: i18n.getMessage("presetsWarningDialogYesButton"),
            buttonNoText: i18n.getMessage("presetsWarningDialogNoButton"),
            buttonYesCallback: () => this._pickPresetFwVersionCheck(),
            buttonNoCallback: null,
        };
    }

    _getFinalCliText() {
        const optionsToInclude = this._domOptionsSelect.multipleSelect("getSelects", "text");
        return this._presetsRepo.removeUncheckedOptions(this._preset.originalPresetCliStrings, optionsToInclude);
    }

    _loadPresetUi() {
        this._domDescription.text(this._preset.description?.join("\n"));

        this._domGitHubLink.attr("href", this._presetsRepo.getPresetOnlineLink(this._preset));

        if (this._preset.discussion) {
            this._domDiscussionLink.removeClass(GUI.buttonDisabledClass);
            this._domDiscussionLink.attr("href", this._preset.discussion);
        } else{
            this._domDiscussionLink.addClass(GUI.buttonDisabledClass);
        }

        this._titlePanel.empty();
        const titlePanel = new PresetTitlePanel(this._titlePanel, this._preset, false, () => this._setLoadingState(false));
        titlePanel.load();
        this._loadOptionsSelect();
        this._updateFinalCliText();
        this._showCliText(false);
    }

    _updateFinalCliText() {
        this._domCliText.text(this._getFinalCliText().join("\n"));
    }

    _setLoadingState(isLoading) {
        this._domProperties.toggle(!isLoading);
        this._domLoading.toggle(isLoading);
        this._domError.toggle(false);

        if (isLoading) {
            this._domButtonApply.addClass(GUI.buttonDisabledClass);
        } else {
            this._domButtonApply.removeClass(GUI.buttonDisabledClass);
        }
    }

    _showError(msg) {
        this._domError.toggle(true);
        this._domError.text(msg);
        this._domProperties.toggle(false);
        this._domLoading.toggle(false);
        this._domButtonApply.addClass(GUI.buttonDisabledClass);
    }

    _readDom() {
        this._domButtonApply = $('#presets_detailed_dialog_applybtn');
        this._domButtonCancel = $('#presets_detailed_dialog_closebtn');
        this._domLoading = $('#presets_detailed_dialog_loading');
        this._domError = $('#presets_detailed_dialog_error');
        this._domProperties = $('#presets_detailed_dialog_properties');
        this._titlePanel = $('.preset_detailed_dialog_title_panel');
        this._domDescription = $('#presets_detailed_dialog_text_description');
        this._domCliText = $('#presets_detailed_dialog_text_cli');
        this._domGitHubLink = this._domDialog.find('#presets_open_online');
        this._domDiscussionLink = this._domDialog.find('#presets_open_discussion');
        this._domOptionsSelect = $('#presets_options_select');
        this._domOptionsSelectPanel = $('#presets_options_panel');
        this._domButtonCliShow = $('#presets_cli_show');
        this._domButtonCliHide = $('#presets_cli_hide');
    }

    _showCliText(value) {
        this._domDescription.toggle(!value);
        this._domCliText.toggle(value);
        this._domButtonCliShow.toggle(!value);
        this._domButtonCliHide.toggle(value);
    }

    _createOptionsSelect(options) {
        options.forEach(option => {
            let selectedString = "selected=\"selected\"";
            if (!option.checked) {
                selectedString = "";
            }

            this._domOptionsSelect.append(`<option value="${option.name}" ${selectedString}>${option.name}</option>`);
        });

        this._domOptionsSelect.multipleSelect({
            placeholder: i18n.getMessage("dropDownAll"),
            formatSelectAll () { return i18n.getMessage("dropDownSelectAll"); },
            formatAllSelected() { return i18n.getMessage("dropDownAll"); },
            onClick: () => this._optionsSelectionChanged(),
            onCheckAll: () => this._optionsSelectionChanged(),
            onUncheckAll: () => this._optionsSelectionChanged(),
        });
    }

    _optionsSelectionChanged() {
        this._updateFinalCliText();
    }

    _destroyOptionsSelect() {
        this._domOptionsSelect.multipleSelect('destroy');
    }

    _loadOptionsSelect() {

        const optionsVisible = 0 !== this._preset.options.length;
        this._domOptionsSelect.empty();
        this._domOptionsSelectPanel.toggle(optionsVisible);

        if (optionsVisible) {
            this._createOptionsSelect(this._preset.options);
        }

        this._domOptionsSelect.multipleSelect('refresh');
    }

    _setupdialog() {
        i18n.localizePage();
        this._readDom();

        this._domButtonApply.on("click", () => this._onApplyButtonClicked());
        this._domButtonCancel.on("click", () => this._onCancelButtonClicked(false));
        this._domButtonCliShow.on("click", () => this._showCliText(true));
        this._domButtonCliHide.on("click", () => this._showCliText(false));
    }

    _onApplyButtonClicked() {
        if (!this._preset.completeWarning) {
            this._pickPresetFwVersionCheck();
        } else {
            GUI.showYesNoDialog(this._finalDialogYesNoSettings);
        }
    }

    _pickPreset() {
        const cliStrings = this._getFinalCliText();
        const pickedPreset = new PickedPreset(this._preset, cliStrings);
        this._pickedPresetList.push(pickedPreset);
        this._onPresetPickedCallback?.();
        this._onCancelButtonClicked(true);
    }

    _pickPresetFwVersionCheck() {
        let compatitable = false;

        for (const fw of this._preset.firmware_version) {
            if (FC.CONFIG.flightControllerVersion.startsWith(fw)) {
                compatitable = true;
                break;
            }
        }

        if (compatitable) {
            this._pickPreset();
        } else {
            const dialogSettings = {
                title: i18n.getMessage("presetsWarningDialogTitle"),
                text: i18n.getMessage("presetsWarningWrongVersionConfirmation", [this._preset.firmware_version, FC.CONFIG.flightControllerVersion]),
                buttonYesText: i18n.getMessage("presetsWarningDialogYesButton"),
                buttonNoText: i18n.getMessage("presetsWarningDialogNoButton"),
                buttonYesCallback: () => this._pickPreset(),
                buttonNoCallback: null,
            };
            GUI.showYesNoDialog(dialogSettings);
        }
    }

    _onCancelButtonClicked(isPresetPicked) {
        this._destroyOptionsSelect();
        this._domDialog[0].close();
        this._openPromiseResolve?.(isPresetPicked);
    }
}
