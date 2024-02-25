const DEBUG = {
    modes : [
        {text: "NONE"},
        {text: "CYCLETIME"},
        {text: "BATTERY"},
        {text: "GYRO_FILTERED"},
        {text: "ACCELEROMETER"},
        {text: "PIDLOOP"},
        {text: "GYRO_SCALED"},
        {text: "RC_INTERPOLATION"},
        {text: "ANGLERATE"},
        {text: "ESC_SENSOR"},
        {text: "SCHEDULER"},
        {text: "STACK"},
        {text: "ESC_SENSOR_RPM"},
        {text: "ESC_SENSOR_TMP"},
        {text: "ALTITUDE"},
        {text: "FFT"},
        {text: "FFT_TIME"},
        {text: "FFT_FREQ"},
        {text: "RX_FRSKY_SPI"},
        {text: "RX_SFHSS_SPI"},
        {text: "GYRO_RAW"},
        {text: "DUAL_GYRO_RAW"},
        {text: "DUAL_GYRO_DIFF"},
        {text: "MAX7456_SIGNAL"},
        {text: "MAX7456_SPICLOCK"},
        {text: "SBUS"},
        {text: "FPORT"},
        {text: "RANGEFINDER"},
        {text: "RANGEFINDER_QUALITY"},
        {text: "LIDAR_TF"},
        {text: "ADC_INTERNAL"},
        {text: "RUNAWAY_TAKEOFF"},
        {text: "SDIO"},
        {text: "CURRENT_SENSOR"},
        {text: "USB"},
        {text: "SMARTAUDIO"},
        {text: "RTH"},
        {text: "ITERM_RELAX"},
        {text: "ACRO_TRAINER"},
        {text: "RC_SMOOTHING"},
        {text: "RX_SIGNAL_LOSS"},
        {text: "RC_SMOOTHING_RATE"},
        {text: "ANTI_GRAVITY"},
        {text: "DYN_LPF"},
        {text: "RX_SPEKTRUM_SPI"},
        {text: "DSHOT_RPM_TELEMETRY"},
        {text: "RPM_FILTER"},
        {text: "D_MIN"},
        {text: "AC_CORRECTION"},
        {text: "AC_ERROR"},
        {text: "DUAL_GYRO_SCALED"},
        {text: "DSHOT_RPM_ERRORS"},
        {text: "CRSF_LINK_STATISTICS_UPLINK"},
        {text: "CRSF_LINK_STATISTICS_PWR"},
        {text: "CRSF_LINK_STATISTICS_DOWN"},
        {text: "BARO"},
        {text: "GPS_RESCUE_THROTTLE_PID"},
        {text: "DYN_IDLE"},
        {text: "FEEDFORWARD_LIMIT"},
        {text: "FEEDFORWARD"},
        {text: "BLACKBOX_OUTPUT"},
        {text: "GYRO_SAMPLE"},
        {text: "RX_TIMING"},
        {text: "D_LPF"},
        {text: "VTX_TRAMP"},
        {text: "GHST"},
        {text: "GHST_MSP"},
        {text: "SCHEDULER_DETERMINISM"},
        {text: "TIMING_ACCURACY"},
        {text: "RX_EXPRESSLRS_SPI"},
        {text: "RX_EXPRESSLRS_PHASELOCK"},
        {text: "RX_STATE_TIME"},
        {text: "GPS_RESCUE_VELOCITY"},
        {text: "GPS_RESCUE_HEADING"},
        {text: "GPS_RESCUE_TRACKING"},
        {text: "GPS_CONNECTION"},
        {text: "ATTITUDE"},
        {text: "VTX_MSP"},
        {text: "GPS_DOP"},
        {text: "FAILSAFE"},
        {text: "GYRO_CALIBRATION"},
        {text: "ANGLE_MODE"},
        {text: "ANGLE_TARGET"},
        {text: "CURRENT_ANGLE"},
        {text: "DSHOT_TELEMETRY_COUNTS"},
        {text: "RPM_LIMIT"},
        {text: "RC_STATS"},
        {text: "MAG_CALIB"},
        {text: "MAG_TASK_RATE"},
        {text: "EZLANDING"},
    ],

    fieldNames : {
        'NONE' : {
            'debug[all]':'Debug [all]',
            'debug[0]':'Debug [0]',
            'debug[1]':'Debug [1]',
            'debug[2]':'Debug [2]',
            'debug[3]':'Debug [3]',
            'debug[4]':'Debug [4]',
            'debug[5]':'Debug [5]',
            'debug[6]':'Debug [6]',
            'debug[7]':'Debug [7]',
        },
        'CYCLETIME' : {
            'debug[all]':'Debug Cycle Time',
            'debug[0]':'Cycle Time',
            'debug[1]':'CPU Load',
            'debug[2]':'Motor Update',
            'debug[3]':'Motor Deviation',
        },
        'BATTERY' : {
            'debug[all]':'Debug Battery',
            'debug[0]':'Battery Volt ADC',
            'debug[1]':'Battery Volt',
        },
        'GYRO' : {
            'debug[all]':'Debug Gyro',
            'debug[0]':'Gyro Raw [X]',
            'debug[1]':'Gyro Raw [Y]',
            'debug[2]':'Gyro Raw [Z]',
        },
        'GYRO_FILTERED' : {
            'debug[all]':'Debug Gyro Filtered',
            'debug[0]':'Gyro Filtered [X]',
            'debug[1]':'Gyro Filtered [Y]',
            'debug[2]':'Gyro Filtered [Z]',
        },
        'ACCELEROMETER' : {
            'debug[all]':'Debug Accel.',
            'debug[0]':'Accel. Raw [X]',
            'debug[1]':'Accel. Raw [Y]',
            'debug[2]':'Accel. Raw [Z]',
        },
        'MIXER' : {
            'debug[all]':'Debug Mixer',
            'debug[0]':'Roll-Pitch-Yaw Mix [0]',
            'debug[1]':'Roll-Pitch-Yaw Mix [1]',
            'debug[2]':'Roll-Pitch-Yaw Mix [2]',
            'debug[3]':'Roll-Pitch-Yaw Mix [3]',
        },
        'PIDLOOP' : {
            'debug[all]':'Debug PID',
            'debug[0]':'Wait Time',
            'debug[1]':'Sub Update Time',
            'debug[2]':'PID Update Time',
            'debug[3]':'Motor Update Time',
        },
        'NOTCH' : {
            'debug[all]':'Debug Notch',
            'debug[0]':'Gyro Pre-Notch [roll]',
            'debug[1]':'Gyro Pre-Notch [pitch]',
            'debug[2]':'Gyro Pre-Notch [yaw]',
        },
        'GYRO_SCALED' : {
            'debug[all]':'Debug Gyro Scaled',
            'debug[0]':'Gyro Scaled [roll]',
            'debug[1]':'Gyro Scaled [pitch]',
            'debug[2]':'Gyro Scaled [yaw]',
        },
        'RC_INTERPOLATION' : {
            'debug[all]':'Debug RC Interpolation',
            'debug[0]':'Raw RC Command [roll]',
            'debug[1]':'Current RX Refresh Rate',
            'debug[2]':'Interpolation Step Count',
            'debug[3]':'RC Setpoint [roll]',
        },
        'DTERM_FILTER' : {
            'debug[all]':'Debug Filter',
            'debug[0]':'DTerm Filter [roll]',
            'debug[1]':'DTerm Filter [pitch]',
        },
        'ANGLERATE' : {
            'debug[all]':'Debug Angle Rate',
            'debug[0]':'Angle Rate[roll]',
            'debug[1]':'Angle Rate[pitch]',
            'debug[2]':'Angle Rate[yaw]',
        },
        'ESC_SENSOR' : {
            'debug[all]':'ESC Sensor',
            'debug[0]':'Motor Index',
            'debug[1]':'Timeouts',
            'debug[2]':'CNC errors',
            'debug[3]':'Data age',
        },
        'SCHEDULER' : {
            'debug[all]':'Scheduler',
            'debug[2]':'Schedule Time',
            'debug[3]':'Function Exec Time',
        },
        'STACK' : {
            'debug[all]':'Stack',
            'debug[0]':'Stack High Mem',
            'debug[1]':'Stack Low Mem',
            'debug[2]':'Stack Current',
            'debug[3]':'Stack p',
        },
        'ESC_SENSOR_RPM' : {
            'debug[all]':'ESC Sensor RPM',
            'debug[0]':'Motor 1',
            'debug[1]':'Motor 2',
            'debug[2]':'Motor 3',
            'debug[3]':'Motor 4',
        },
        'ESC_SENSOR_TMP' : {
            'debug[all]':'ESC Sensor Temp',
            'debug[0]':'Motor 1',
            'debug[1]':'Motor 2',
            'debug[2]':'Motor 3',
            'debug[3]':'Motor 4',
        },
        'ALTITUDE' : {
            'debug[all]':'Altitude',
            'debug[0]':'GPS Trust * 100',
            'debug[1]':'Baro Altitude',
            'debug[2]':'GPS Altitude',
            'debug[3]':'Vario',
        },
        'FFT' : {
            'debug[all]':'Debug FFT',
            'debug[0]':'Gyro Pre Dyn Notch [dbg-axis]',
            'debug[1]':'Gyro Post Dyn Notch [dbg-axis]',
            'debug[2]':'Gyro Downsampled [dbg-axis]',
        },
        'FFT_TIME' : {
            'debug[all]':'Debug FFT TIME',
            'debug[0]':'Active calc step',
            'debug[1]':'Step duration',
        },
        'FFT_FREQ' : {
            'debug[all]':'Debug FFT FREQ',
            'debug[0]':'Notch 1 Center Freq [dbg-axis]',
            'debug[1]':'Notch 2 Center Freq [dbg-axis]',
            'debug[2]':'Notch 3 Center Freq [dbg-axis]',
            'debug[3]':'Gyro Pre Dyn Notch [dbg-axis]',
        },
        'RX_FRSKY_SPI' : {
            'debug[all]':'FrSky SPI Rx',
            'debug[0]':'Looptime',
            'debug[1]':'Packet',
            'debug[2]':'Missing Packets',
            'debug[3]':'State',
        },
        'RX_SFHSS_SPI' : {
            'debug[all]':'SFHSS SPI Rx',
            'debug[0]':'State',
            'debug[1]':'Missing Frame',
            'debug[2]':'Offset Max',
            'debug[3]':'Offset Min',
        },
        'GYRO_RAW' : {
            'debug[all]':'Debug Gyro Raw',
            'debug[0]':'Gyro Raw [X]',
            'debug[1]':'Gyro Raw [Y]',
            'debug[2]':'Gyro Raw [Z]',
        },
        'DUAL_GYRO' : {
            'debug[all]':'Debug Dual Gyro',
            'debug[0]':'Gyro 1 Filtered [roll]',
            'debug[1]':'Gyro 1 Filtered [pitch]',
            'debug[2]':'Gyro 2 Filtered [roll]',
            'debug[3]':'Gyro 2 Filtered [pitch]',
        },
        'DUAL_GYRO_RAW': {
            'debug[all]':'Debug Dual Gyro Raw',
            'debug[0]':'Gyro 1 Raw [roll]',
            'debug[1]':'Gyro 1 Raw [pitch]',
            'debug[2]':'Gyro 2 Raw [roll]',
            'debug[3]':'Gyro 2 Raw [pitch]',
        },
        'DUAL_GYRO_COMBINED': {
            'debug[all]':'Debug Dual Combined',
            'debug[0]':'Not Used',
            'debug[1]':'Gyro Filtered [roll]',
            'debug[2]':'Gyro Filtered [pitch]',
        },
        'DUAL_GYRO_DIFF': {
            'debug[all]':'Debug Dual Gyro Diff',
            'debug[0]':'Gyro Diff [roll]',
            'debug[1]':'Gyro Diff [pitch]',
            'debug[2]':'Gyro Diff [yaw]',
        },
        'MAX7456_SIGNAL' : {
            'debug[all]':'Max7456 Signal',
            'debug[0]':'Mode Reg',
            'debug[1]':'Sense',
            'debug[2]':'ReInit',
            'debug[3]':'Rows',
        },
        'MAX7456_SPICLOCK' : {
            'debug[all]':'Max7456 SPI Clock',
            'debug[0]':'Overclock',
            'debug[1]':'DevType',
            'debug[2]':'Divisor',
        },
        'SBUS' : {
            'debug[all]':'SBus Rx',
            'debug[0]':'Frame Flags',
            'debug[1]':'State Flags',
            'debug[2]':'Frame Time',
        },
        'FPORT' : {
            'debug[all]':'FPort Rx',
            'debug[0]':'Frame Interval',
            'debug[1]':'Frame Errors',
            'debug[2]':'Last Error',
            'debug[3]':'Telemetry Interval',
        },
        'RANGEFINDER' : {
            'debug[all]':'Rangefinder',
            'debug[0]':'not used',
            'debug[1]':'Raw Altitude',
            'debug[2]':'Calc Altituded',
            'debug[3]':'SNR',
        },
        'RANGEFINDER_QUALITY' : {
            'debug[all]':'Rangefinder Quality',
            'debug[0]':'Raw Altitude',
            'debug[1]':'SNR Threshold Reached',
            'debug[2]':'Dyn Distance Threshold',
            'debug[3]':'Is Surface Altitude Valid',
        },
        'LIDAR_TF' : {
            'debug[all]':'Lidar TF',
            'debug[0]':'Distance',
            'debug[1]':'Strength',
            'debug[2]':'TF Frame (4)',
            'debug[3]':'TF Frame (5)',
        },
        'ADC_INTERNAL' : {
            'debug[all]':'ADC Internal',
            'debug[0]':'Core Temp',
            'debug[1]':'VRef Internal Sample',
            'debug[2]':'Temp Sensor Sample',
            'debug[3]':'Vref mV',
        },
        'RUNAWAY_TAKEOFF' : {
            'debug[all]':'Runaway Takeoff',
            'debug[0]':'Enabled',
            'debug[1]':'Activating Delay',
            'debug[2]':'Deactivating Delay',
            'debug[3]':'Deactivating Time',
        },
        'CURRENT_SENSOR' : {
            'debug[all]':'Current Sensor',
            'debug[0]':'milliVolts',
            'debug[1]':'centiAmps',
            'debug[2]':'Amps Latest',
            'debug[3]':'mAh Drawn',
        },
        'USB' : {
            'debug[all]':'USB',
            'debug[0]':'Cable In',
            'debug[1]':'VCP Connected',
        },
        'SMART AUDIO' : {
            'debug[all]':'Smart Audio VTx',
            'debug[0]':'Device + Version',
            'debug[1]':'Channel',
            'debug[2]':'Frequency',
            'debug[3]':'Power',
        },
        'RTH' : {
            'debug[all]':'RTH Rescue codes',
            'debug[0]':'Pitch angle, deg',
            'debug[1]':'Rescue Phase',
            'debug[2]':'Failure code',
            'debug[3]':'Failure timers',
        },
        'ITERM_RELAX' : {
            'debug[all]':'I-term Relax',
            'debug[0]':'Setpoint HPF [roll]',
            'debug[1]':'I Relax Factor [roll]',
            'debug[2]':'Relaxed I Error [roll]',
            'debug[3]':'Axis Error [roll]',
        },
        'ACRO_TRAINER' : {
            'debug[all]':'Acro Trainer (a_t_axis)',
            'debug[0]':'Current Angle * 10 [deg]',
            'debug[1]':'Axis State',
            'debug[2]':'Correction amount',
            'debug[3]':'Projected Angle * 10 [deg]',
        },
        'RC_SMOOTHING' : {
            'debug[all]':'Debug RC Smoothing',
            'debug[0]':'Raw RC Command',
            'debug[1]':'Raw RC Derivative',
            'debug[2]':'Smoothed RC Derivative',
            'debug[3]':'RX Refresh Rate',
        },
        'RX_SIGNAL_LOSS' : {
            'debug[all]':'Rx Signal Loss',
            'debug[0]':'Signal Received',
            'debug[1]':'Failsafe',
            'debug[2]':'Not used',
            'debug[3]':'Throttle',
        },
        'RC_SMOOTHING_RATE' : {
            'debug[all]':'Debug RC Smoothing Rate',
            'debug[0]':'Current RX Refresh Rate',
            'debug[1]':'Training Step Count',
            'debug[2]':'Average RX Refresh Rate',
            'debug[3]':'Sampling State',
        },
        'ANTI_GRAVITY' : {
            'debug[all]':'I-term Relax',
            'debug[0]':'Base I gain * 1000',
            'debug[1]':'Final I gain * 1000',
            'debug[2]':'P gain [roll] * 1000',
            'debug[3]':'P gain [pitch] * 1000',
        },
        'DYN_LPF' : {
            'debug[all]':'Debug Dyn LPF',
            'debug[0]':'Gyro Scaled [dbg-axis]',
            'debug[1]':'Notch Center [roll]',
            'debug[2]':'Lowpass Cutoff',
            'debug[3]':'Gyro Pre-Dyn [dbg-axis]',
        },
        'DSHOT_RPM_TELEMETRY' : {
            'debug[all]':'DShot Telemetry RPM',
            'debug[0]':'Motor 1 - DShot',
            'debug[1]':'Motor 2 - DShot',
            'debug[2]':'Motor 3 - DShot',
            'debug[3]':'Motor 4 - DShot',
            'debug[4]':'Motor 5 - DShot',
            'debug[5]':'Motor 6 - DShot',
            'debug[6]':'Motor 7 - DShot',
            'debug[7]':'Motor 8 - DShot',
        },
        'RPM_FILTER' : {
            'debug[all]':'RPM Filter',
            'debug[0]':'Motor 1 - rpmFilter',
            'debug[1]':'Motor 2 - rpmFilter',
            'debug[2]':'Motor 3 - rpmFilter',
            'debug[3]':'Motor 4 - rpmFilter',
        },
        'D_MIN' : {
            'debug[all]':'D_MIN',
            'debug[0]':'Gyro Factor [roll]',
            'debug[1]':'Setpoint Factor [roll]',
            'debug[2]':'Actual D [roll]',
            'debug[3]':'Actual D [pitch]',
        },
        'AC_CORRECTION' : {
            'debug[all]':'AC Correction',
            'debug[0]':'AC Correction [roll]',
            'debug[1]':'AC Correction [pitch]',
            'debug[2]':'AC Correction [yaw]',
        },
        'AC_ERROR' : {
            'debug[all]':'AC Error',
            'debug[0]':'AC Error [roll]',
            'debug[1]':'AC Error [pitch]',
            'debug[2]':'AC Error [yaw]',
        },
        'DUAL_GYRO_SCALED' : {
            'debug[all]':'Dual Gyro Scaled',
            'debug[0]':'Gyro 1 [roll]',
            'debug[1]':'Gyro 1 [pitch]',
            'debug[2]':'Gyro 2 [roll]',
            'debug[3]':'Gyro 2 [pitch]',
        },
        'DSHOT_RPM_ERRORS' : {
            'debug[all]':'DSHOT RPM Error',
            'debug[0]':'DSHOT RPM Error [1]',
            'debug[1]':'DSHOT RPM Error [2]',
            'debug[2]':'DSHOT RPM Error [3]',
            'debug[3]':'DSHOT RPM Error [4]',
        },
        'CRSF_LINK_STATISTICS_UPLINK' : {
            'debug[all]':'CRSF Stats Uplink',
            'debug[0]':'Uplink RSSI 1',
            'debug[1]':'Uplink RSSI 2',
            'debug[2]':'Uplink Link Quality',
            'debug[3]':'RF Mode',
        },
        'CRSF_LINK_STATISTICS_PWR' : {
            'debug[all]':'CRSF Stats Power',
            'debug[0]':'Antenna',
            'debug[1]':'SNR',
            'debug[2]':'TX Power',
        },
        'CRSF_LINK_STATISTICS_DOWN' : {
            'debug[all]':'CRSF Stats Downlink',
            'debug[0]':'Downlink RSSI',
            'debug[1]':'Downlink Link Quality',
            'debug[2]':'Downlink SNR',
        },
        'BARO' : {
            'debug[all]':'Debug Barometer',
            'debug[0]':'Baro State',
            'debug[1]':'Baro Pressure',
            'debug[2]':'Baro Temperature',
            'debug[3]':'Baro Altitude',
        },
        'GPS_RESCUE_THROTTLE_PID' : {
            'debug[all]':'GPS Rescue throttle PIDs',
            'debug[0]':'Throttle P',
            'debug[1]':'Throttle D',
            'debug[2]':'Altitude',
            'debug[3]':'Target altitude',
        },
        'DYN_IDLE' : {
            'debug[all]':'Dyn Idle',
            'debug[0]':'Dyn Idle P [roll]',
            'debug[1]':'Dyn Idle I [roll]',
            'debug[2]':'Dyn Idle D [roll]',
            'debug[3]':'Min RPM',
        },
        'FEEDFORWARD' : {
            'debug[all]':'Feedforward [roll]',
            'debug[0]':'Setpoint, un-smoothed [roll]',
            'debug[1]':'Delta, smoothed [roll]',
            'debug[2]':'Boost, smoothed [roll]',
            'debug[3]':'rcCommand Delta [roll]',
        },
        'FEEDFORWARD_LIMIT' : {
            'debug[all]':'Feedforward Limit [roll]',
            'debug[0]':'Feedforward input [roll]',
            'debug[1]':'Feedforward input [pitch]',
            'debug[2]':'Feedforward limited [roll]',
        },
        'FF_INTERPOLATED' : {
            'debug[all]':'Feedforward [roll]',
            'debug[0]':'Setpoint Delta [roll]',
            'debug[1]':'Acceleration [roll]',
            'debug[2]':'Acceleration, clipped [roll]',
            'debug[3]':'Duplicate Counter [roll]',
        },
        'BLACKBOX_OUTPUT' : {
            'debug[all]':'Blackbox Output',
            'debug[0]':'Blackbox Rate',
            'debug[1]':'Blackbox Max Rate',
            'debug[2]':'Dropouts',
            'debug[3]':'Tx Bytes Free',
        },
        'GYRO_SAMPLE' : {
            'debug[all]':'Gyro Sample',
            'debug[0]':'Before downsampling',
            'debug[1]':'After downsampling',
            'debug[2]':'After RPM',
            'debug[3]':'After all but Dyn Notch',
        },
        'RX_TIMING' : {
            'debug[all]':'Receiver Timing (us)',
            'debug[0]':'Frame Delta',
            'debug[1]':'Frame Age',
        },
        'D_LPF' : {
            'debug[all]':'D-Term [D_LPF]',
            'debug[0]':'Unfiltered D [roll]',
            'debug[1]':'Unfiltered D [pitch]',
            'debug[2]':'Filtered, with DMax [roll]',
            'debug[3]':'Filtered, with DMax [pitch]',
        },
        'VTX_TRAMP' : {
            'debug[all]':'Tramp VTx',
            'debug[0]':'Status',
            'debug[1]':'Reply Code',
            'debug[2]':'Pit Mode',
            'debug[3]':'Retry Count',
        },
        'GHST' : {
            'debug[all]':'Ghost Rx',
            'debug[0]':'CRC Error Count',
            'debug[1]':'Unknown Frame Count',
            'debug[2]':'RSSI',
            'debug[3]':'Link Quality',
        },
        'GHST_MSP' : {
            'debug[all]':'Ghost MSP',
            'debug[0]':'MSP Frame Count',
            'debug[1]':'MSP Frame Counter',
        },
        'SCHEDULER_DETERMINISM' : {
            'debug[all]':'Scheduler Determinism',
            'debug[0]':'Cycle Start time',
            'debug[1]':'ID of Late Task',
            'debug[2]':'Task Delay Time',
            'debug[3]':'Gyro Clock Skew',
            'debug[4]':'Minimum Gyro period in 100th of a us',
            'debug[5]':'Maximum Gyro period in 100th of a us',
            'debug[6]':'Span of Gyro period in 100th of a us',
            'debug[7]':'Gyro cycle deviation in 100th of a us',
        },
        'TIMING_ACCURACY' : {
            'debug[all]':'Timing Accuracy',
            'debug[0]':'CPU Busy',
            'debug[1]':'Late Tasks per second',
            'debug[2]':'Total delay in last second',
            'debug[3]':'Total Tasks per second',
            'debug[4]':'Late Tasks per thousand',
        },
        'RX_EXPRESSLRS_SPI' : {
            'debug[all]':'ExpressLRS SPI Rx',
            'debug[0]':'Lost Connection Count',
            'debug[1]':'RSSI',
            'debug[2]':'SNR',
            'debug[3]':'Uplink LQ',
        },
        'RX_EXPRESSLRS_PHASELOCK' : {
            'debug[all]':'ExpressLRS SPI Phaselock',
            'debug[0]':'Phase offset',
            'debug[1]':'Filtered phase offset',
            'debug[2]':'Frequency Offset',
            'debug[3]':'Phase Shift',
        },
        'RX_STATE_TIME' : {
            'debug[all]':'Rx State Time',
            'debug[0]':'Time 0',
            'debug[1]':'Time 1',
            'debug[2]':'Time 2',
            'debug[3]':'Time 3',
        },
        'GPS_RESCUE_VELOCITY' : {
            'debug[all]':'GPS Rescue Velocity',
            'debug[0]':'Velocity P',
            'debug[1]':'Velocity D',
            'debug[2]':'Velocity to Home',
            'debug[3]':'Target Velocity',
        },
        'GPS_RESCUE_HEADING' : {
            'debug[all]':'GPS Rescue Heading',
            'debug[0]':'Ground Speed',
            'debug[1]':'GPS Heading',
            'debug[2]':'IMU Attitude',
            'debug[3]':'Angle to home',
            'debug[4]':'magYaw',
            'debug[5]':'Roll MixAtt',
            'debug[6]':'Roll Added',
            'debug[7]':'Rescue Yaw Rate',
        },
        'GPS_RESCUE_TRACKING' : {
            'debug[all]':'GPS Rescue Tracking',
            'debug[0]':'Velocity to home',
            'debug[1]':'Target velocity',
            'debug[2]':'Altitude',
            'debug[3]':'Target altitude',
        },
        'GPS_CONNECTION' : {
            'debug[all]':'GPS Connection',
            'debug[0]':'Nav Model',
            'debug[1]':'GPS Nav interval',
            'debug[2]':'Task timer',
            'debug[3]':'Baud Rate / FC interval',
            'debug[4]':'State*100 +SubState',
            'debug[5]':'ExecuteTime',
            'debug[6]':'Ack State',
            'debug[7]':'Rx buffer size',
        },
        'ATTITUDE' : {
            'debug[all]':'Attitude',
            'debug[0]':'accADC X',
            'debug[1]':'accADC Y',
            'debug[2]':'Setpoint Roll',
            'debug[3]':'Setpoint Pitch',
        },
        'VTX_MSP' : {
            'debug[all]': 'VTX MSP',
            'debug[0]': 'packetCounter',
            'debug[1]': 'isCrsfPortConfig',
            'debug[2]': 'isLowPowerDisarmed',
            'debug[3]': 'mspTelemetryDescriptor',
        },
        'GPS_DOP' : {
            'debug[all]': 'GPS Dilution of Precision',
            'debug[0]': 'Number of Satellites',
            'debug[1]': 'pDOP (positional - 3D)',
            'debug[2]': 'hDOP (horizontal - 2D)',
            'debug[3]': 'vDOP (vertical - 1D)',
        },
        'FAILSAFE' : {
            'debug[all]': 'Failsafe',
            'debug[0]': 'Failsafe Phase switch',
            'debug[1]': 'Failsafe State',
            'debug[2]': 'Receiving data from Rx',
            'debug[3]': 'Failsafe Phase',
        },
        'GYRO_CALIBRATION' : {
            'debug[all]': 'Gyro Calibration',
            'debug[0]': 'Gyro Calibration X',
            'debug[1]': 'Gyro Calibration Y',
            'debug[2]': 'Gyro Calibration Z',
            'debug[3]': 'Calibration Cycles remaining',
        },
        'ANGLE_MODE' : {
            'debug[all]': 'Angle Mode',
            'debug[0]': 'Angle Target',
            'debug[1]': 'Angle Error',
            'debug[2]': 'Angle Feedforward',
            'debug[3]': 'Angle Current',
        },
        'ANGLE_TARGET' : {
            'debug[all]': 'Angle Target',
            'debug[0]': 'Angle Target',
            'debug[1]': 'Sin Angle',
            'debug[2]': 'Current PID Setpoint',
            'debug[3]': 'Angle Current',
        },
        'CURRENT_ANGLE' : {
            'debug[all]': 'Current Angle',
            'debug[0]': 'Current Angle X',
            'debug[1]': 'Current Angle Y',
            'debug[2]': 'Current Angle Z',
        },
        'DSHOT_TELEMETRY_COUNTS' : {
            'debug[all]': 'DShot Telemetry Counts',
            'debug[0]': 'DShot Telemetry Debug[0] + 1',
            'debug[1]': 'DShot Telemetry Debug[1] + 1',
            'debug[2]': 'DShot Telemetry Debug[2] + 1',
            'debug[3]': 'Preamble Skip',
        },
        'RPM_LIMIT' : {
            'debug[all]': 'RPM Limit',
            'debug[0]': 'Average RPM',
            'debug[1]': 'Average RPM (unsmoothed)',
            'debug[2]': 'RPM Limit throttle scale',
            'debug[3]': 'Throttle',
            'debug[4]': 'Error',
            'debug[5]': 'Proportional',
            'debug[6]': 'Integral',
            'debug[7]': 'Derivative',
        },
        'RC_STATS' : {
            'debug[all]': 'RC Stats',
            'debug[0]': 'Average Throttle',
        },
        'MAG_CALIB' : {
            'debug[all]': 'Mag Calibration',
            'debug[0]': 'Mag X',
            'debug[1]': 'Mag Y',
            'debug[2]': 'Mag Z',
            'debug[3]': 'Norm / Length of magADC',
            'debug[4]': 'Estimated Mag Bias X',
            'debug[5]': 'Estimated Mag Bias Y',
            'debug[6]': 'Estimated Mag Bias Z',
            'debug[7]': 'Mag Bias Estimator',
        },
        'MAG_TASK_RATE' : {
            'debug[all]': 'Mag Task Rate',
            'debug[0]': 'Task Rate (Hz)',
            'debug[1]': 'Actual Data Rate (Hz)',
            'debug[2]': 'Data Interval (Us)',
            'debug[3]': 'Execute Time (Us)',
            'debug[4]': 'Bus Busy',
            'debug[5]': 'Read State',
            'debug[6]': 'Task Time (Us)',
        },
        'EZLANDING' : {
            'debug[all]': 'EZ Landing',
            'debug[0]': 'EZ Land Factor',
            'debug[1]': 'Adjusted Throttle',
            'debug[2]': 'Upper Limit',
            'debug[3]': 'EZ Land Limit',
        },
    },

    enableFields : [
        { text: "PID" },
        { text: "RC Commands" },
        { text: "Setpoint" },
        { text: "Battery" },
        { text: "Magnetometer" },
        { text: "Altitude" },
        { text: "RSSI" },
        { text: "Gyro" },
        { text: "Accelerometer" },
        { text: "Debug Log" },
        { text: "Motor" },
        { text: "GPS" },
        { text: "RPM" },
        { text: "Unfiltered Gyro"},
    ],
};

export default DEBUG;
