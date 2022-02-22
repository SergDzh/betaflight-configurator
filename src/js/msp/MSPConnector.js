'use strict';

const MSPConnectorImpl = function () {
    this.baud = undefined;
    this.port = undefined;
    this.onConnectCallback = undefined;
    this.onTimeoutCallback = undefined;
    this.onDisconnectCallback = undefined;
};

MSPConnectorImpl.prototype.connect = function (port, baud, onConnectCallback, onTimeoutCallback, onFailureCallback) {

    const self = this;
    self.port = port;
    self.baud = baud;
    self.onConnectCallback = onConnectCallback;
    self.onTimeoutCallback = onTimeoutCallback;
    self.onFailureCallback = onFailureCallback;

    serial.connect(self.port, {bitrate: self.baud}, function (openInfo) {
        if (openInfo) {
            const disconnectAndCleanup = function() {
                serial.disconnect(function(result) {
                    console.log(`MSP request for serial disconnection, result: ${result}`);

                    MSP.clearListeners();

                    self.onTimeoutCallback();
                });

                MSP.disconnect_cleanup();
            };

            FC.resetState();

            // disconnect after 10 seconds with error if we don't get IDENT data
            GUI.timeout_add('msp_connector', function () {
                if (!CONFIGURATOR.connectionValid) {
                    GUI.log(i18n.getMessage('noConfigurationReceived'));
                    console.log('MSP disconnecting, no valid connection within 10s');
                    disconnectAndCleanup();
                }
            }, 10000);

            serial.onReceive.addListener(read_serial);

            const mspHelper = new MspHelper();
            MSP.listen(mspHelper.process_data.bind(mspHelper));

            MSP.send_message(MSPCodes.MSP_API_VERSION, false, false, function () {
                CONFIGURATOR.connectionValid = true;

                GUI.timeout_remove('msp_connector');
                console.log('MSP has valid serial connection');

                self.onConnectCallback();
            });
        } else {
            GUI.log(i18n.getMessage('serialPortOpenFail'));
            console.log('MSP failed to open a serial connection');
            self.onFailureCallback();
        }
    });
};

MSPConnectorImpl.prototype.disconnect = function(onDisconnectCallback) {
    self.onDisconnectCallback = onDisconnectCallback;

    serial.disconnect(function (result) {
        MSP.clearListeners();
        console.log(`MSP Serial disconnection ${result}`);

        self.onDisconnectCallback(result);
    });

    MSP.disconnect_cleanup();
};
