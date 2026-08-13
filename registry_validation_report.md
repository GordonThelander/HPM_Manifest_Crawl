# Registry validation report

- Snapshot: `2026-08-13T01:34:04Z`
- HPM repositories in master list: **216**
- Repositories fetched successfully: **214**
- Packages indexed: **899**
- Source-definition pass completed: **false**
- Cache used: Yes - 1 cache hits, 1115 network fetches; cached objects used were between 0.01 and 0.01 hours old.
- Recorded fetch/parse errors: **4**

## A. Dead rules

Known Rule Machine canary (`appName contains "Rule Machine"`): **DETECTED**.
Live-HPM note: this rule currently matches `Rule Machine Manager` by substring, so it is not a zero-hit dead rule in the HPM identity index. That is itself evidence the rule is unsafe for identifying Hubitat's built-in Rule Machine app (`Rule-5.1`).

| Entry ID | Entry | Rule | Field | Operator | Registry value |
| --- | --- | --- | --- | --- | --- |
| hubitat-hue-native | Hue Bridge Integration | 1 | appName | equals | Hue Bridge Integration |
| hubitat-hue-native | Hue Bridge Integration | 2 | parentAppName | equals | Hue Bridge Integration |
| cocohue | CoCoHue | 4 | namespace | contains | cocohue |
| lifx-native | LIFX Integration | 1 | appName | equals | LIFX Integration |
| lifx-native | LIFX Integration | 2 | parentAppName | equals | LIFX Integration |
| kasa-native | Kasa Integration | 1 | appName | contains | Kasa Integration |
| kasa-native | Kasa Integration | 2 | parentAppName | contains | Kasa Integration |
| kasa-native | Kasa Integration | 3 | driverName | contains | Kasa |
| tapo-community | Tapo Integration | 2 | driverName | contains | Tapo |
| shelly-device-manager | Shelly Device Manager | 1 | appName | contains | Shelly Device Manager |
| shelly-device-manager | Shelly Device Manager | 2 | parentAppName | contains | Shelly Device Manager |
| tuya-cloud | Tuya Cloud Integration | 1 | appName | contains | Tuya Cloud |
| tuya-cloud | Tuya Cloud Integration | 2 | appName | contains | Tuya Integration |
| tuya-cloud | Tuya Cloud Integration | 3 | driverName | contains | Tuya Cloud |
| tuya-local | Tuya Local Integration | 1 | appName | contains | Tuya Local |
| tuya-local | Tuya Local Integration | 2 | driverName | contains | Tuya Local |
| meross-msg100 | Meross MSG100 Garage Door | 1 | appName | contains | Meross |
| meross-msg100 | Meross MSG100 Garage Door | 3 | driverName | contains | MSG100 |
| ecobee-local-hap | Ecobee No Cloud HAP Thermostat | 1 | appName | contains | Ecobee No Cloud |
| ecobee-local-hap | Ecobee No Cloud HAP Thermostat | 2 | driverName | contains | Ecobee No Cloud |
| ecowitt | EcoWitt / Wittboy Integration | 1 | appName | contains | EcoWitt |
| ecowitt | EcoWitt / Wittboy Integration | 2 | appName | contains | Ecowitt |
| ecowitt | EcoWitt / Wittboy Integration | 3 | driverName | contains | EcoWitt |
| ecowitt | EcoWitt / Wittboy Integration | 4 | driverName | contains | Wittboy |
| sensorpush | SensorPush Gateway | 2 | appName | contains | SensorPush |
| sure-petcare | Sure PetCare Integration | 3 | driverName | contains | SurePet |
| lutron-native | Lutron Integrator | 1 | appName | contains | Lutron Integrator |
| lutron-native | Lutron Integrator | 2 | parentAppName | contains | Lutron |
| bond | Bond Integration | 1 | appName | contains | Bond |
| bond | Bond Integration | 2 | driverName | contains | Bond |
| sonos-native | Sonos Integration | 1 | appName | contains | Sonos Integration |
| home-assistant-hadb | Home Assistant Device Bridge | 2 | appName | contains | HADB |
| home-assistant-makerapi | Home Assistant via Maker API | 1 | appName | equals | Maker API |
| homebridge-makerapi | Homebridge via Maker API | 1 | appName | equals | Maker API |
| hubconnect | HubConnect | 1 | appName | contains | HubConnect |
| hubconnect | HubConnect | 2 | driverName | contains | HubConnect |
| hub-mesh | Hub Mesh | 2 | driverName | contains | Hub Mesh |
| maker-api | Maker API | 1 | appName | equals | Maker API |
| mqtt-link | MQTT Link | 1 | appName | contains | MQTT Link |
| mqtt-link | MQTT Link | 2 | driverName | contains | MQTT Link |
| simple-mqtt-client | Simple MQTT Client | 1 | appName | contains | Simple MQTT |
| simple-mqtt-client | Simple MQTT Client | 2 | driverName | contains | Simple MQTT |
| node-red | Node-RED | 1 | appName | contains | Node-RED |
| esphome | ESPHome Integration | 1 | appName | contains | ESPHome |
| homekit-controller | HomeKit Controller | 1 | appName | contains | HomeKit Controller |
| homekit-controller | HomeKit Controller | 2 | parentAppName | contains | HomeKit Controller |
| homekit-import | HomeKit Import | 1 | appName | contains | HomeKit Import |
| homekit-import | HomeKit Import | 2 | driverName | contains | HomeKit Accessory |
| homekit-bridge | HomeKit Bridge | 1 | appName | equals | HomeKit Bridge |
| amazon-echo-skill | Amazon Echo Skill | 1 | appName | contains | Amazon Echo Skill |
| unifi-network | UniFi Network Integration | 1 | appName | contains | UniFi Network |
| unifi-network | UniFi Network Integration | 2 | driverName | contains | UniFi Network |
| unifi-protect | UniFi Protect Integration | 1 | appName | contains | UniFi Protect |
| konnected | Konnected Integration | 1 | appName | contains | Konnected |
| insteon | Insteon Integration | 1 | appName | contains | Insteon |
| insteon | Insteon Integration | 2 | driverName | contains | Insteon |
| honeywell-tcc | Honeywell Total Connect Comfort | 1 | appName | contains | Total Connect Comfort |
| honeywell-tcc | Honeywell Total Connect Comfort | 2 | driverName | contains | Honeywell TCC |
| honeywell-tcc | Honeywell Total Connect Comfort | 3 | driverName | contains | Total Connect Comfort |
| weatherflow | WeatherFlow Integration | 1 | appName | contains | WeatherFlow |
| volvo-cars | Volvo Cars Integration | 1 | appName | contains | Volvo |
| volvo-cars | Volvo Cars Integration | 2 | driverName | contains | Volvo |
| webcore | webCoRE | 2 | namespace | contains | webcore |
| sharp-tools | SharpTools | 1 | appName | contains | SharpTools |
| sharp-tools | SharpTools | 2 | driverName | contains | SharpTools |
| ifttt | IFTTT Integration | 1 | appName | contains | IFTTT |
| gmail-notification-gateway | Gmail Notification Gateway | 1 | appName | contains | Gmail Notification Gateway |
| bom-weather-alerts | AU BOM Weather Alerts | 1 | appName | contains | BOM Weather |
| bom-weather-alerts | AU BOM Weather Alerts | 2 | appName | contains | Bureau of Meteorology |
| alarm-bridge | Alarm Bridge | 4 | driverName | contains | Networx |
| alarm-bridge | Alarm Bridge | 5 | driverName | contains | Elk |
| mdns-discovery | mDNS Discovery | 1 | appName | contains | mDNS |
| mdns-discovery | mDNS Discovery | 2 | appName | contains | Chromecast Discovery |
| basic-rules | Basic Rules | 1 | appName | equals | Basic Rules |
| basic-rules | Basic Rules | 2 | parentAppName | equals | Basic Rules |
| simple-automation-rules | Simple Automation Rules | 1 | appName | contains | Simple Automation Rules |
| simple-automation-rules | Simple Automation Rules | 2 | parentAppName | contains | Simple Automation Rules |
| visual-rules-builder | Visual Rules Builder | 1 | appName | contains | Visual Rules Builder |
| room-lighting | Room Lighting | 1 | appName | contains | Room Lighting |
| room-lighting | Room Lighting | 2 | parentAppName | contains | Room Lighting |
| motion-lighting | Motion Lighting | 1 | appName | contains | Motion Lighting |
| motion-lighting | Motion Lighting | 2 | parentAppName | contains | Motion Lighting |
| notifications | Notifications | 1 | appName | equals | Notifications |
| notifications | Notifications | 2 | parentAppName | equals | Notifications |
| thermostat-scheduler | Thermostat Scheduler | 1 | appName | contains | Thermostat Scheduler |
| thermostat-scheduler | Thermostat Scheduler | 2 | parentAppName | contains | Thermostat Scheduler |
| power-energy-manager | Power and Energy Manager | 1 | appName | contains | Power and Energy Manager |
| zone-motion-controller | Zone Motion Controllers | 1 | appName | contains | Zone Motion |
| zone-motion-controller | Zone Motion Controllers | 2 | parentAppName | contains | Zone Motion |
| mode-manager | Mode Manager | 1 | appName | contains | Mode Manager |
| hubitat-safety-monitor | Hubitat Safety Monitor | 1 | appName | contains | Hubitat Safety Monitor |
| hubitat-safety-monitor | Hubitat Safety Monitor | 2 | appName | equals | HSM |
| groups-scenes | Groups and Scenes | 1 | appName | contains | Groups and Scenes |
| groups-scenes | Groups and Scenes | 3 | appName | contains | Scene |
| hubitat-dashboard | Hubitat Dashboard | 1 | appName | contains | Hubitat Dashboard |
| easy-dashboard | Easy Dashboard | 1 | appName | contains | Easy Dashboard |
| webcore-native | webCoRE | 2 | namespace | contains | webcore |
| lock-code-manager | Lock Code Manager | 1 | appName | contains | Lock Code Manager |
| ai-mcp-connector | AI (MCP) Connector Integration | 1 | appName | contains | AI (MCP) Connector |
| ai-mcp-connector | AI (MCP) Connector Integration | 2 | appName | contains | MCP Connector |
| bluetooth-integration | Bluetooth Integration | 1 | appName | contains | Bluetooth Integration |
| rtsp-camera-integration | RTSP Camera Integration | 1 | appName | contains | RTSP Camera Integration |
| govee-lan-native | Govee LAN Integration | 1 | appName | contains | Govee LAN Integration |
| govee-lan-native | Govee LAN Integration | 2 | parentAppName | contains | Govee LAN Integration |
| unifi-network-native | UniFi Network Integration | 1 | appName | contains | UniFi Network Integration |
| unifi-protect-native | UniFi Protect Integration | 1 | appName | contains | UniFi Protect Integration |
| homekit-controller-native | HomeKit Controller Integration | 1 | appName | contains | HomeKit Controller Integration |
| homekit-controller-native | HomeKit Controller Integration | 2 | parentAppName | contains | HomeKit Controller |
| mqtt-export-native | MQTT Export Integration | 1 | appName | contains | MQTT Export Integration |
| mqtt-import-native | MQTT Import Integration | 1 | appName | contains | MQTT Import Integration |
| sharptools-native | SharpTools | 1 | appName | contains | SharpTools |
| hub-link-native | Hub Link | 1 | appName | equals | Hub Link |
| hub-link-native | Hub Link | 2 | appName | contains | Hub Link |
| link-to-hub-native | Link to Hub | 1 | appName | equals | Link to Hub |
| link-to-hub-native | Link to Hub | 2 | appName | contains | Link to Hub |

## B. Near misses

| Entry ID | Field | Operator | Registry value | Index value |
| --- | --- | --- | --- | --- |
| kasa-native | driverName | contains | Kasa | kasaCameraFixed |
| kasa-native | driverName | contains | Kasa | kasaCameraPtz |
| kasa-native | driverName | contains | Kasa | kasaDoorbell |
| ecowitt | driverName | contains | EcoWitt | AmbientEcowittWeather |
| ecowitt | driverName | contains | EcoWitt | Ecowitt RF Sensor |
| ecowitt | driverName | contains | EcoWitt | Ecowitt WiFi Gateway |
| bond | appName | contains | Bond | BOND Home Integration |
| bond | driverName | contains | Bond | BOND Fan |
| bond | driverName | contains | Bond | BOND Fan Dimmable Light |
| bond | driverName | contains | Bond | BOND Fan Light |
| bond | driverName | contains | Bond | BOND Fan Timer Light |
| bond | driverName | contains | Bond | BOND Fan With Direction |
| bond | driverName | contains | Bond | BOND Fireplace |
| bond | driverName | contains | Bond | BOND Fireplace Fan |
| bond | driverName | contains | Bond | BOND Fireplace Light |
| bond | driverName | contains | Bond | BOND Generic Device |
| bond | driverName | contains | Bond | BOND Motorized Shade |

## C. Over-broad rules

| Entry ID | Entry | Field | Contains value | Packages matched |
| --- | --- | --- | --- | --- |
| shelly-native | Shelly Integration | driverName | Shelly | 7 |
| shelly-mqtt | Shelly MQTT Variant | driverName | Shelly | 7 |
| shelly-mqtt | Shelly MQTT Variant | driverName | MQTT | 11 |
| ring | Ring Integration | driverName | Ring | 8 |
| groups-scenes | Groups and Scenes | appName | Group | 7 |

## D. Entries with no dependencies

Count: **19**

| Entry ID | Entry | Origin | Status |
| --- | --- | --- | --- |
| webcore | webCoRE | COMMUNITY | VERIFIED_COMMUNITY |
| basic-rules | Basic Rules | HUBITAT_NATIVE | OFFICIAL_DOC_VERIFIED |
| simple-automation-rules | Simple Automation Rules | HUBITAT_NATIVE | OFFICIAL_DOC_VERIFIED |
| rule-machine | Rule Machine | HUBITAT_NATIVE | OFFICIAL_DOC_VERIFIED |
| visual-rules-builder | Visual Rules Builder | HUBITAT_NATIVE | OFFICIAL_DOC_VERIFIED |
| room-lighting | Room Lighting | HUBITAT_NATIVE | OFFICIAL_DOC_VERIFIED |
| motion-lighting | Motion Lighting | HUBITAT_NATIVE | OFFICIAL_LEGACY_BUILTIN |
| button-controller | Button Controller | HUBITAT_NATIVE | OFFICIAL_DOC_VERIFIED |
| notifications | Notifications | HUBITAT_NATIVE | OFFICIAL_DOC_VERIFIED |
| thermostat-scheduler | Thermostat Scheduler | HUBITAT_NATIVE | OFFICIAL_DOC_VERIFIED |
| power-energy-manager | Power and Energy Manager | HUBITAT_NATIVE | OFFICIAL_DOC_VERIFIED |
| zone-motion-controller | Zone Motion Controllers | HUBITAT_NATIVE | BUILTIN_SEED_VERIFY_RUNTIME |
| mode-manager | Mode Manager | HUBITAT_NATIVE | OFFICIAL_DOC_VERIFIED |
| hubitat-safety-monitor | Hubitat Safety Monitor | HUBITAT_NATIVE | OFFICIAL_DOC_VERIFIED |
| groups-scenes | Groups and Scenes | HUBITAT_NATIVE | OFFICIAL_DOC_VERIFIED |
| hubitat-dashboard | Hubitat Dashboard | HUBITAT_NATIVE | OFFICIAL_DOC_VERIFIED |
| easy-dashboard | Easy Dashboard | HUBITAT_NATIVE | OFFICIAL_DOC_VERIFIED |
| webcore-native | webCoRE | HUBITAT_NATIVE | OFFICIAL_DOC_BUILTIN |
| lock-code-manager | Lock Code Manager | HUBITAT_NATIVE | BUILTIN_SEED_VERIFY_RUNTIME |

## E. Schema defects

| Defect | Location | Value |
| --- | --- | --- |
| dependency.class | govee-v2[1] | EXTERNAL_OR_LOCAL_SERVICE |
| dependency.class | reolink[1] | LOCAL_DEVICE_OR_BRIDGE |
| dependency.class | weatherflow[1] | LOCAL_OR_EXTERNAL_SERVICE |
| dependency.class | owntracks[1] | EXTERNAL_OR_LOCAL_SERVICE |
| dependency.class | reolink-camera[1] | LOCAL_DEVICE_OR_BRIDGE |
| entry.class | mode-manager | PLATFORM_UTILITY |
| entry.class | hubitat-safety-monitor | SECURITY_ORCHESTRATOR |
| entry.class | groups-scenes | VIRTUALISATION_ORCHESTRATOR |
| entry.class | hubitat-dashboard | DASHBOARD |
| entry.class | easy-dashboard | DASHBOARD |
| entry.class | lock-code-manager | PLATFORM_UTILITY |
| dependency.class | rtsp-camera-integration[1] | LOCAL_DEVICE_OR_BRIDGE |

## F. Duplicate identifiers and genuine overlaps

### Duplicate identifiers

| ID | Count |
| --- | --- |
| None |  |

### Genuine package overlaps

Only pairs where both complete entries evaluate to MATCH under their own `matchMode` are listed.

| Entry A | Entry B | Package count | Example packages |
| --- | --- | --- | --- |
| chromecast-native | chromecast-plus | 1 | Google Chromecast+ |
| govee-v2 | matter-bridge | 1 | Govee Matter Drivers |
| reolink | reolink-camera | 3 | Reolink Floodlight Camera, Reolink Integration, Reolink IP Camera |
| webcore | webcore-native | 1 | webCoRE |

Maker API three-entry false-collision canary: **PASS** if neither `home-assistant-makerapi` nor `homebridge-makerapi` appears above solely from the unevaluable `userMapping` rule.

## G. Unrepresented packages

Total packages not matched by any registry entry: **809**

Candidate subset below is limited to category `Integrations` or tags containing `LAN` or `Cloud`, as specified.

| Repo | Package | Category | Tags | Manifest |
| --- | --- | --- | --- | --- |
| AaronW | iRobot Scheduler | Integrations |  | https://raw.githubusercontent.com/PrayerfulDrop/Hubitat/master/Roomba/packageManifest.json |
| Adrian Caramaliu | Aroma-Link Integration | Integrations | Climate Control | https://raw.githubusercontent.com/ady624/hubitat-aroma-link/master/packageManifest.json |
| Adrian Caramaliu | Freestyle Libre Integration | Integrations | Health & Fitness | https://raw.githubusercontent.com/ady624/hubitat-freestyle-libre/master/packageManifest.json |
| Albert Mulder | INTECULAR™ MQTT Connector | Integrations | MQTT, Misc. Devices | https://raw.githubusercontent.com/almulder/Hubitat-Drivers/main/hpm/InvisOutlet.json |
| Amos Yuen | Eight Sleep (Connect) | Integrations | Climate Control, Misc. Devices, Presence & Location, Sleep | https://raw.githubusercontent.com/amosyuen/hubitat/main/eightsleep/packageManifest.json |
| Amos Yuen | Epson Projector | Integrations | LAN, Misc. Devices, Multimedia | https://raw.githubusercontent.com/amosyuen/hubitat/main/epson/packageManifest.json |
| Andrew Webster | Philips Hue Tap Dial Drivers | Integrations | Buttons | https://raw.githubusercontent.com/Andywebs/hubitat/main/packageManifest.json |
| Art Ardolino | BLE Gateway Manager | Integrations | Presence & Location | https://raw.githubusercontent.com/ajardolino3/hubitat-ble-gateway/main/packageManifest.json |
| Ben Deitch (@xap) | Miele Integration | Integrations | Appliances, Cloud | https://raw.githubusercontent.com/xap-code/hubitat/master/miele/packageManifest.json |
| Ben Deitch (@xap) | Squeezebox Connect | Integrations | LAN, Multimedia, Speakers | https://raw.githubusercontent.com/xap-code/hubitat/master/squeezebox/packageManifest.json |
| Ben Jansen | PJLink Projector Driver | Control | Multimedia, LAN | https://bitbucket.org/aogail/hubitat-pjlink/raw/v1.0.0/packageManifest.json |
| Bloodtick Jones | Bose Soundbar Integration | Integrations | Automations & Groups, Cloud, Tools & Utilities | https://raw.githubusercontent.com/bloodtick/Hubitat/main/hubitat-packages/manifests/manifestBoseSoundbarIntegration.json |
| Bloodtick Jones | Cudy Router R700 | Integrations | Monitoring, LAN, Notifications, Tools & Utilities | https://raw.githubusercontent.com/bloodtick/Hubitat/main/hubitat-packages/manifests/manifestCudyRouterR700.json |
| Bloodtick Jones | Roborock Robot Vacuum | Integrations | Automations & Groups, Cloud | https://raw.githubusercontent.com/bloodtick/Hubitat/main/hubitat-packages/manifests/manifestRoborockRobotVacuum.json |
| Botched1 | GE Enbrighten Z-Wave Plus Dimmer | Integrations | Lights & Switches | https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Enbrighten-Z-Wave-Plus-Dimmer.json |
| Botched1 | GE Enbrighten Z-Wave Plus Switch | Integrations | Lights & Switches | https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Enbrighten-Z-Wave-Plus-Switch.json |
| Botched1 | GE Z-Wave Plus Dimmer | Integrations | Lights & Switches | https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Dimmer.json |
| Botched1 | GE Z-Wave Plus Motion Dimmer | Integrations | Lights & Switches | https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Motion-Dimmer.json |
| Botched1 | GE Z-Wave Plus Motion Dimmer Combo Driver | Integrations | Lights & Switches | https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Motion-Dimmer-Combo-Driver.json |
| Botched1 | GE Z-Wave Plus Motion Dimmer Component | Integrations | Lights & Switches | https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Motion-Dimmer-Component.json |
| Botched1 | GE Z-Wave Plus Motion Switch | Integrations | Lights & Switches | https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Motion-Switch.json |
| Botched1 | GE Z-Wave Plus Motion Switch Combo Driver | Integrations | Lights & Switches | https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Motion-Switch-Combo-Driver.json |
| Botched1 | GE Z-Wave Plus Motion Switch Component | Integrations | Lights & Switches | https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Motion-Switch-Component.json |
| Botched1 | GE Z-Wave Plus Switch | Integrations | Lights & Switches | https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Switch.json |
| Botched1 | Haozee Zwave 700 Multisensor | Integrations | Multi Sensors | https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/Haozee-Zwave-700-Multisensor.json |
| Botched1 | Vivint CT200 Thermostat | Integrations | Climate Control | https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/Vivint-CT200-Thermostat.json |
| Brian Wilson (@brianwilson) | Camect Connect | Convenience | Motion Control, Monitoring, Safety & Security, LAN | https://raw.githubusercontent.com/bdwilson/hubitat/master/Camect/packageManifest.json |
| Brian Wilson (@brianwilson) | WaterGuru Integration | Integrations | Pools & Spas, Temperature & Humidity | https://raw.githubusercontent.com/bdwilson/hubitat/master/WaterGuru/packageManifest.json |
| CSteele | Air Quality from AirNow |  | Temperature & Humidity, Cloud | https://raw.githubusercontent.com/HubitatCommunity/AirQuality-AirNow/main/docs/AirQuality-AirNow.json |
| CSteele | EtherRain |  | Irrigation, LAN, Timers, Valves, Water, Cloud | https://raw.githubusercontent.com/csteele-PD/Hubitat-public/master/EtherRain/packageManifest.json |
| CSteele | Honeywell Thermo Parent |  | Temperature & Humidity, Cloud | https://raw.githubusercontent.com/HubitatCommunity/HoneywellThermoParent/main/docs/HoneywellThermoParent.json |
| CSteele | HoneywellThermo-TCC Driver |  | Temperature & Humidity, Cloud | https://raw.githubusercontent.com/HubitatCommunity/HoneywellThermo-TCC/master/docs/HoneywellThermo-TCC.json |
| CSteele | Hubitat-BetterLaundryMonitor |  | Energy Monitoring, Monitoring, Appliances, LAN | https://raw.githubusercontent.com/HubitatCommunity/Hubitat-BetterLaundryMonitor/master/docs/Hubitat-BetterLaundryMonitor.json |
| Community Code | InfluxDB-Logger | Integrations | Tools & Utilities | https://raw.githubusercontent.com/HubitatCommunity/InfluxDB-Logger/master/PackageManifest.json |
| Community Code | MyQ Garage Door Integration 2023 | Integrations | Cloud, Doors & Windows, Garage Doors | https://www.hubitatcommunity.com/MyQ/packageManifest.json |
| Community Code | WLED Driver | Integrations | LAN, Lights & Switches, Automations & Groups | https://www.hubitatcommunity.com/hpm/WLEDDriver/packageManifest.json |
| Dale Coghlan (@dcoghlan) | Actron Connect Integration | Integrations | Cloud, Temperature & Humidity, Climate Control | https://raw.githubusercontent.com/dcoghlan/hubitat/main/Actron_Connect_Integration/packageManifest.json |
| Dan Cox (level99) | Levoit Air Purifiers, Humidifiers, and Fans | Integrations | Cloud, Air Quality, Humidifier, Air Purifier, Fan | https://raw.githubusercontent.com/level99/Hubitat-VeSync/main/levoitManifest.json |
| Dan Danache | EMS-ESP Gateway | Utility | Climate Control, LAN | https://codeberg.org/dan-danache/hubitat/raw/branch/main/ems-esp-driver/packageManifest.json |
| Dan Danache | LGTV with webOS | Utility | Appliances, LAN, Multimedia | https://codeberg.org/dan-danache/hubitat/raw/branch/main/lgtv-drivers/packageManifest.json |
| Dan Healy (TheDanHealy) | Rental Automator | Integrations | Alarm Systems, Automations & Groups, Locks, Tools & Utilities | https://raw.githubusercontent.com/TheDanHealy/hubitat-rental-automator/main/packageManifest.json |
| Daniel Winks | Gemini Text Rewriter | Utilities | Tools & Utilities, Cloud | https://raw.githubusercontent.com/DanielWinks/Hubitat-Public/main/PackageManifests/GeminiTextRewriter/packageManifest.json |
| DarwinsDen | Tesla Powerwall Manager | Integrations | Energy Monitoring | https://raw.githubusercontent.com/DarwinsDen/Tesla-Powerwall-Manager/main/packageManifest.json |
| Dave Gutheinz(DavGut) | Kasa Camera | Utility | LAN, Security, Monitoring | https://raw.githubusercontent.com/DaveGut/kasaCam_Hubitat/refs/heads/main/packageManifest.json |
| Dave Gutheinz(DavGut) | Samsung TV Remote | Utility | LAN, Multimedia | https://raw.githubusercontent.com/DaveGut/HubitatActive/master/SamsungTvRemote/packageManifest.json |
| David LaPorte | AcuRite Weather Station | Integrations |  | https://raw.githubusercontent.com/dlaporte/Hubitat/main/AcuRite/packageManifest.json |
| David LaPorte | Radon Fan Sensor | Integrations |  | https://raw.githubusercontent.com/dlaporte/Hubitat/main/RadonFanSensor/packageManifest.json |
| David LaPorte | Smart Oil Gauge | Integrations |  | https://raw.githubusercontent.com/dlaporte/Hubitat/main/SmartOilGauge/packageManifest.json |
| Eduardo Simioni | Fully Kiosk Browser Controller | Control | Dashboards, Tools & Utilities, Notifications, LAN | https://raw.githubusercontent.com/esimioni/fullykioskbrowser-hubitat-driver/master/manifest.json |
| Eliot Stocker | Ikea Trådfri RGBW Bulb driver | Integrations | Lights & Switches, Zigbee | https://raw.githubusercontent.com/eliotstocker/hubitat-ikea-rgbw/main/package-manifest.json |
| Eliot Stocker | Warmup Connect | Integrations | Climate Control, Temperature & Humidity | https://raw.githubusercontent.com/eliotstocker/hubitat-warmup-connect/main/package-manifest.json |
| Ernie Miller (@ernie) | Leviton Decora Smart Z-Wave Dimmer | Integrations | Lights & Switches, ZWave | https://raw.githubusercontent.com/ernie/hubitat/main/drivers/package-manifests/leviton-decora-dimmer.json |
| Ernie Miller (@ernie) | Leviton Decora Smart Z-Wave Plug-In Dimmer | Integrations | Lights & Switches, ZWave | https://raw.githubusercontent.com/ernie/hubitat/main/drivers/package-manifests/leviton-decora-plug-in-dimmer.json |
| Ernie Miller (@ernie) | Virtual Motion Sensor with Switch | Integrations | Lights & Switches | https://raw.githubusercontent.com/ernie/hubitat/main/drivers/package-manifests/virtual-motion-sensor-with-switch.json |
| Ernie Miller (@ernie) | Zooz Power Switch w/State | Integrations | Appliances, Energy Monitoring, Lights & Switches, ZWave | https://raw.githubusercontent.com/ernie/hubitat/main/drivers/package-manifests/zooz-power-switch-with-state.json |
| Gary J. Milne | Precipitation and Weather Monitor for NWS Data | Integrations | Irrigation, Weather, Temperature & Humidity, Water | https://raw.githubusercontent.com/GaryMilne/Hubitat-Apps/main/packageManifestApps.json |
| HERMES Automation | HERMES Home Dispatch Solution | Security | Alarm Systems, Safety & Security, Monitoring, Cloud, Automations & Groups, Notifications | https://hermes-automation.com/app-code/home-dispatch/hubitat/manifests/hermes-home-dispatch-package.json |
| Hugo Haas | Internet Connection Monitor | Utility | Cloud, Monitoring | https://raw.githubusercontent.com/hugoh/hubitat-internet-monitor/master/packageManifest.json |
| Hugo Haas | Samsung Tizen TV Control | Integrations | LAN | https://raw.githubusercontent.com/hugoh/samsung-tizen-tv-control/main/hubitat/packageManifest.json |
| Hugo Haas | T-Mobile Home Internet Gateway Driver | Integrations | Misc. Devices, LAN | https://raw.githubusercontent.com/hugoh/hubitat-tmo-gateway/master/packageManifest.json |
| Jaime Botero | Flair Vents | Integrations |  | https://raw.githubusercontent.com/ljbotero/hubitat-flair-vents/main/packageManifest.json |
| Jdthomas24 | Device Health Monitor | Utility | ZWave, Zigbee, Matter, LAN | https://raw.githubusercontent.com/jdthomas24/Hubitat-Apps-Drivers/refs/heads/main/Device%20Health%20Monitor/packageManifest.json |
| Jean Bilodeau | Canadian Hyundai Bluelink | Integrations | Vehicles & Transportation | https://raw.githubusercontent.com/jbilodea/Hubitat/main/Canadian_Hyundai_Bluelink/packageManifest.json |
| Jean P. May, Jr. | Dashboard Variable Device | Integrations | Misc. Devices | https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/dashVariableManifest.json |
| Jean P. May, Jr. | File Manager for Extended Character Sets | Integrations |  | https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/fmExtManifest.json |
| Jean P. May, Jr. | Hubitat Ping Device | Integrations | Misc. Devices | https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/hubPingManifest.json |
| JoKneeMo | AdGuard Home DNS Manager (Unofficial) | Integrations |  | https://raw.githubusercontent.com/JoKneeMo/hubitat/main/adguardhome/packageManifest.json |
| Joe Page | Google Photos Cloud | Utility | Cloud, Dashboards, Multimedia | https://raw.githubusercontent.com/jpage4500/hubitat-drivers/master/google-photos-cloud/packageManifest.json |
| Joe Page | HD+ Companion App | Integrations | Presence & Location, Notifications, Voice Assistants | https://raw.githubusercontent.com/jpage4500/hubitat-drivers/master/hd-device/packageManifest.json |
| Joe Page | HD+ Tile | Integrations |  | https://raw.githubusercontent.com/jpage4500/hubitat-drivers/master/hd-tile/packageManifest.json |
| Joe Page | Life360+ | Integrations | Presence & Location | https://raw.githubusercontent.com/jpage4500/hubitat-drivers/master/life360/packageManifest.json |
| Joe Page | Orbit Bhyve+ | Integrations | Irrigation, Water, Valves | https://raw.githubusercontent.com/jpage4500/hubitat-drivers/master/orbit-bhyve/packageManifest.json |
| Joe Page | go2rtc | Integrations | Security & Safety, Multimedia, Dashboards | https://raw.githubusercontent.com/jpage4500/hubitat-drivers/master/go2rtc/packageManifest.json |
| Jonathan Bradshaw | Tuya IoT Platform (Cloud) | Integrations | Cloud | https://raw.githubusercontent.com/bradsjm/hubitat-public/main/Tuya/packageManifest.json |
| Jonathan Fields | WyzeHub (Updated to Use API Key) | Integrations | Cloud, Lights & Switches, Multimedia | https://raw.githubusercontent.com/fieldsjm/Hubitat-2/master/WyzeHub/packageManifest.json |
| Joseph Kregloh | Solaredge Monitor | Integrations |  | https://raw.githubusercontent.com/funzie19/hubitat-solaredge/master/packageManifest.json |
| Justin Walker (augoisms) | Rainforest Eagle |  | LAN, Energy Monitoring | https://raw.githubusercontent.com/augoisms/hubitat/master/rainforest-eagle/packageManifest.json |
| KTriponis | Elgato Integrations | Integrations | Lights & Switches | https://raw.githubusercontent.com/ktriponis/hubitat-elgato/main/packageManifest.json |
| Kevin Kahl (@kahlkevin) | Inovelli Dimmer White Series VTM31-SN | Integrations | Energy Monitoring, Lights & Switches, Matter | https://raw.githubusercontent.com/kahlkevin/hpm-repo/main/inovelli_vtm31sn.json |
| Kurt Sanders (kurtsanders) | BWA Spa Manager - Cloud Control | Integrations | Monitoring, Pools & Spas, Temperature & Humidity, Water | https://raw.githubusercontent.com/KurtSanders/HBBWASpaManager/refs/heads/master/Cloud-Control/packageManifest.json |
| Kurt Sanders (kurtsanders) | BWA Spa Manager - Local TCP Direct Connection Device Driver | Integrations | Monitoring, Pools & Spas, Temperature & Humidity, Water | https://raw.githubusercontent.com/KurtSanders/HBBWASpaManager/refs/heads/master/Local-Control/packageManifest.json |
| Kurt Sanders (kurtsanders) | Battery Level Watcher | Integrations | Monitoring | https://raw.githubusercontent.com/KurtSanders/HubitatPackages/refs/heads/master/resources/apps/Battery%20Level%20Watcher/packageManifest.json |
| Kurt Sanders (kurtsanders) | Dywarmic Towel Warmer Integration | Integrations | Monitoring, Bathroom, Pools & Spas, Temperature & Humidity | https://raw.githubusercontent.com/KurtSanders/Hubitat-Dywarmic-Integration/refs/heads/main/packageManifest.json |
| Kurt Sanders (kurtsanders) | EZsalt Tank Monitoring & Integration | Integrations | Monitoring, Misc. Devices | https://raw.githubusercontent.com/KurtSanders/HubitatPackages/refs/heads/master/resources/apps/EZSalt/packageManifest.json |
| Kurt Sanders (kurtsanders) | Hubitat on Apple Menubar | Integrations | Monitoring, Tools & Utilities | https://raw.githubusercontent.com/KurtSanders/Hubitat-Xbar/main/packageManifest.json |
| Kurt Sanders (kurtsanders) | Weight Guru Bathroom Scale Integration | Integrations | Monitoring, Scales, Health & Fitness, Multi Sensors, Bathroom | https://raw.githubusercontent.com/KurtSanders/HubitatPackages/refs/heads/master/resources/apps/Weight-Guru/packageManifest.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Advanced Zwave Dimmer Device Handler | Integrations | Lights & Switches | https://raw.githubusercontent.com/lgkahn/hubitat/master/AdvancedZwaveDimmerV2.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Aeon SmartStrip | Integrations | Lights & Switches | https://raw.githubusercontent.com/lgkahn/hubitat/master/AeonSmartStrip.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Ct100 Thermastat Device Handler | Integrations | Climate Control | https://raw.githubusercontent.com/lgkahn/hubitat/master/MyCT100.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Dim with Me | Integrations | Lights & Switches | https://raw.githubusercontent.com/lgkahn/hubitat/master/DimWithMe.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | EZMulti aka hsm200 device handler | Integrations | Lights & Switches | https://raw.githubusercontent.com/lgkahn/hubitat/master/EzMultiNew.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Enerwave ZW15SM high amperage switch device handler | Integrations | Lights & Switches, Energy Monitoring | https://raw.githubusercontent.com/lgkahn/hubitat/master/ZW15SM.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Eversource ST814 Temp and humidity device handler | Integrations | Monitoring, Multi Sensors, Temperature & Humidity | https://raw.githubusercontent.com/lgkahn/hubitat/master/ST814.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Homi Heiman Natural Gas Sensor Device Handler | Integrations | Monitoring, Safety & Security | https://raw.githubusercontent.com/lgkahn/hubitat/master/HomiHeimanGas.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Honeywell Total Comfort API | Integrations | Climate Control | https://raw.githubusercontent.com/lgkahn/hubitat/master/TotalComfort.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Keen Vent LGK | Integrations | Climate Control | https://raw.githubusercontent.com/lgkahn/hubitat/master/KeenVentLGK.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | LGK Virtual Garage Door APP | Integrations | Garage Doors | https://raw.githubusercontent.com/lgkahn/hubitat/master/LGKVirtualGarageDoorApp.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Link 2 Switches | Integrations | Lights & Switches | https://raw.githubusercontent.com/lgkahn/hubitat/master/Link2Switches.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Qubino Weather Station | Integrations | Temperature & Humidity | https://raw.githubusercontent.com/lgkahn/hubitat/master/QubinoWeatherStation.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | RF9500 Switch Handler | Integrations | Lights & Switches | https://raw.githubusercontent.com/lgkahn/hubitat/master/CooperEatonRF9500.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Roof Coil Controller | Integrations | Lights & Switches, Safety & Security, Climate Control | https://raw.githubusercontent.com/lgkahn/hubitat/master/RoofCoilController.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Spruce Controller | Integrations | Valves, Irrigation | https://raw.githubusercontent.com/lgkahn/hubitat/master/SpruceController.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Stock Zwave Garage Door Handler with switch capability added | Integrations | Garage Doors | https://raw.githubusercontent.com/lgkahn/hubitat/master/GarageDoorLGK.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Tesla App and Driver (DEPRECATED Get V3 of the app) | Integrations | Monitoring, Presence & Location | https://raw.githubusercontent.com/lgkahn/hubitat/master/Tesla.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Tesla V3 App and Driver | Integrations |  | https://raw.githubusercontent.com/lgkahn/hubitat/master/TeslaV3.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Tesla vehicle status and control via Tessie - App and Driver | Integrations |  | https://raw.githubusercontent.com/lgkahn/hubitat/master/tesla_tessie.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | UtilTech Siren Device Handler | Integrations | Safety & Security | https://raw.githubusercontent.com/lgkahn/hubitat/master/MyUtilTechSiren.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Zigbee White Color Temp Device Handler | Integrations | Lights & Switches | https://raw.githubusercontent.com/lgkahn/hubitat/master/ZigbeeWhiteColorTemp.json |
| LGKApps kahn@lgk.com lgkahn-hubitat | Zwave water Valve device handler | Integrations | Valves, Safety & Security | https://raw.githubusercontent.com/lgkahn/hubitat/master/WaterValve.json |
| MHedish | UniFi Presence Drivers | Utility | LAN, Monitoring, Presence & Location, Tools & Utilities | https://raw.githubusercontent.com/MHedish/Hubitat/main/Drivers/UniFi-Presence-Sensor/packageManifest.json |
| Mads Kristensen | Mads Kristensen — Hubitat Drivers | Integrations |  | https://raw.githubusercontent.com/madskristensen/hubitat-drivers/main/packageManifest.json |
| Marco Felicio (maffpt@gmail.com) | Nuki Smart Lock Integration | Integrations |  | https://raw.githubusercontent.com/MAFFPT/Hubitat/master/Nuki%20Smart%20Lock/packageManifest.json |
| Markus (@markus) | Aqara Smart Curtain Motor | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-aqara-smart-curtain-motor.json |
| Markus (@markus) | Aqara Water Leak Sensor | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-aqara-water-leak-sensor.json |
| Markus (@markus) | Generic Device Toolbox | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-generic-device-toolbox.json |
| Markus (@markus) | Generic Dimmer (with Presence) | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-generic-dimmer.json |
| Markus (@markus) | Generic Outlet (with Presence) | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-generic-outlet.json |
| Markus (@markus) | Generic Repeater (with Presence) | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-generic-repeater.json |
| Markus (@markus) | Generic Switch (with Presence) | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-generic-switch.json |
| Markus (@markus) | NOT WORKING IKEA Tradfri On/Off Switch | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-ikea-tradfri-on-off-switch.json |
| Markus (@markus) | Sonoff Button | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-sonoff-button.json |
| Markus (@markus) | Sonoff Contact Sensor | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-sonoff-contact-sensor.json |
| Markus (@markus) | Sonoff Motion Sensor | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-sonoff-motion-sensor.json |
| Markus (@markus) | Sonoff Temperature & Humidity Sensor | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-sonoff-temperature-humidity-sensor.json |
| Markus (@markus) | Tuya Alarm | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-tuya-alarm.json |
| Markus (@markus) | Tuya Valve | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-tuya-valve.json |
| Markus (@markus) | Xiaomi Mijia Smart Light Sensor (Zigbee 3.0) | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-xiaomi-mijia-smart-light-sensor.json |
| Markus (@markus) | Xiaomi/Aqara Contact Sensor | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-xiaomi-aqara-contact-sensor.json |
| Markus (@markus) | Xiaomi/Aqara Motion Sensor | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-xiaomi-aqara-motion-sensor.json |
| Markus (@markus) | Xiaomi/Aqara Plug/Outlet | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-xiaomi-aqara-plug-outlet.json |
| Markus (@markus) | Xiaomi/Aqara Temperature & Humidity Sensor | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-xiaomi-aqara-temperature-humidity.json |
| Markus (@markus) | Xiaomi/Aqara/Opple Button/Switch/Remote | Integrations |  | https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-xiaomi-aqara-opple-button-switch-remote.json |
| Mathew Beall | Hubitat Resideo T10 Integration | Integrations | Cloud, HVAC, Thermostats, Resideo, Honeywell | https://raw.githubusercontent.com/mathewbeall/hubitat-resideo_T10-integration/main/packageManifest.json |
| Mathew Beall | X-Sense Smoke/CO Detector Integration | Integrations | Cloud, Safety, Smoke Detector, CO Detector, X-Sense | https://raw.githubusercontent.com/mathewbeall/hubitat-xsense-integration/main/packageManifest.json |
| Matthew (@scottma61) | DarkSky.net-Weather-Driver | Integrations | Weather | https://raw.githubusercontent.com/Scottma61/Hubitat/master/docs/DS_packageManifest.json |
| Matthew (@scottma61) | OpenWeatherMap-Alerts Weather Driver | Integrations | Weather | https://raw.githubusercontent.com/Scottma61/Hubitat/master/docs/OWN-Alerts_packageManifest.json |
| Matthew (@scottma61) | Weather-Display With DarkSky.net Forecast Driver | Integrations | Weather | https://raw.githubusercontent.com/Scottma61/Hubitat/master/docs/WD_packageManifest.json |
| Matthew (@scottma61) | Weather-Display With OWM-Alerts Forecast Driver | Integrations | Weather | https://raw.githubusercontent.com/Scottma61/Hubitat/master/docs/WDOWMAlerts_packageManifest.json |
| Matthew Petro | Garage Door Opener | Integrations | Garage Doors | https://raw.githubusercontent.com/matthewpetro/hubitat-projects/main/garage-door/package-manifest.json |
| Mavrrick | Air Gradient Universal driver | Convenience | Misc. Devices, Cloud, Integrations | https://raw.githubusercontent.com/Mavrrick/Hubitat-by-Mavrrick/main/AirGradient/packageManifest.json |
| Mavrrick | Unifi Integration Manager | Convenience | Misc. Devices, Cloud, Lights & Switches, Appliances, Integrations | https://raw.githubusercontent.com/Mavrrick/Hubitat-by-Mavrrick/refs/heads/main/UniFi/packageManifest.json |
| Maxime Boissonneault | MeteoMatics | Integrations | Weather, Cloud | https://raw.githubusercontent.com/mboisson/Hubitat-MeteoMatics/main/packageManifest.json |
| Mike Bishop | TeslaMate | Integrations | Vehicles & Transportation | https://raw.githubusercontent.com/MikeBishop/hpm-intermediate/main/teslamate.json |
| Mike Bishop | iCOMM for Hubitat | Integrations | Water Heater | https://raw.githubusercontent.com/MikeBishop/hpm-intermediate/main/icomm.json |
| Minoston (sky-nie) | Package Evalogik | Integrations | Lights & Switches | https://raw.githubusercontent.com/sky-nie/hubitat/main/evalogik/packageManifest.json |
| Minoston (sky-nie) | Package Minoston | Integrations | Doors & Windows, Temperature & Humidity, Lights & Switches, Energy Monitoring | https://raw.githubusercontent.com/sky-nie/hubitat/main/minoston/packageManifest.json |
| Minoston (sky-nie) | Package NewOne | Integrations | Temperature & Humidity, Lights & Switches, Energy Monitoring | https://raw.githubusercontent.com/sky-nie/hubitat/main/newone/packageManifest.json |
| Neil Jackson | Personal Logger | Convenience | Cloud, Health & Fitness, Tools & Utilities, Voice Assistants | https://raw.githubusercontent.com/neiljackson1984/SmartThingsNeil/master/packages/personal-logger/build/package_manifest.json |
| Patrick Wogan | WogaLWRF Lightwave Integration | Integrations | Cloud, Lights & Switches | https://raw.githubusercontent.com/wogapat/HubitatApps/main/WogaLWRF/PackageManifest.json |
| Paul Harrison | Unfolded Circle Remote 3 Integration | Integrations | IR & RF, Multimedia | https://raw.githubusercontent.com/pharrison5/Hubitat/refs/heads/main/UnfoldedCircleIntegration/packageManifest.json |
| Paul Hutton | myenergi Integration | Integrations |  | https://raw.githubusercontent.com/VeloWulf/myenergiIntegration/main/packageManifest.json |
| Pedro Andrade | Hubitat Linktap MQTT Driver | Integrations | Irrigation, Water, Valves | https://raw.githubusercontent.com/pedroandrade1977/Hubitat-LinktapMQTT/main/packageManifest.json |
| Pentalingual | SolArk Inverter | Integrations | Energy Monitoring, Cloud | https://raw.githubusercontent.com/pentalingual/Hubitat/main/Solar/packageManifest.json |
| Pentalingual | Windows Battery Driver | Integrations | Energy Monitoring, Misc. Devices, LAN | https://raw.githubusercontent.com/pentalingual/Hubitat/main/Windows/packageManifest.json |
| PositionGuard | PositionGuard | Integrations |  | https://raw.githubusercontent.com/positionguard/positionguard-hubitat/main/packageManifest.json |
| Ramdev Shallem | PC Controller | Control | Multimedia, Misc. Devices, LAN, Tools & Utilities | https://raw.githubusercontent.com/gilshallem/Hubitat/main/HPM/cc_package.json |
| Ramdev Shallem | WakeOnLan | Control | Multimedia, Misc. Devices, LAN, Tools & Utilities | https://raw.githubusercontent.com/gilshallem/Hubitat/main/HPM/wol_package.json |
| Rangner FG (@rfg81) | Sinope Neviweb Hub GT125 | Integrations | Climate Control | https://raw.githubusercontent.com/claudegel/Hubitat-sinope-GT125/main/packageManifest.json |
| Raul Martin Rodriguez (luarmr) | Virtual ip presence sensor | Utility | Cloud, LAN, Monitoring, Presence & Location | https://raw.githubusercontent.com/luarmr/hubitat/main/drivers/virtual_ip_presence_sensor/packageManifest.json |
| Rene Boer | Aeotec Home Energy Meter 8 (3 clamp) Driver | Integrations | Energy Monitoring, ZWave | https://raw.githubusercontent.com/reneboer/Hubitat/main/Aeotec/packageManifestHEM8.json |
| Rene Boer | Aeotec Smart Switch 7 EU version Driver | Integrations | Lights & Switches, ZWave | https://raw.githubusercontent.com/reneboer/Hubitat/main/Aeotec/packageManifest.json |
| Rene Boer | Heatit ZM Dimmer 250W Driver | Integrations | Lights & Switches, ZWave | https://raw.githubusercontent.com/reneboer/Hubitat/main/Heatit/packageManifest.json |
| Rene Boer | Qubino DIN Dimmer Driver | Integrations | Lights & Switches, ZWave | https://raw.githubusercontent.com/reneboer/Hubitat/main/Qubino/dinDimManifest.json |
| Rene Boer | Qubino Smart Plug 16A Driver | Integrations | Lights & Switches, ZWave | https://raw.githubusercontent.com/reneboer/Hubitat/main/Qubino/smartPlugManifest.json |
| Rene Boer | Remotec / ZVIDAR Z-Wave Thermostat Radiator Valve Driver | Integrations | Climate Control, ZWave | https://raw.githubusercontent.com/reneboer/Hubitat/main/ZVIDAR/packageManifest.json |
| Rob Heyes | LIFX Master app and drivers | Integrations | Lights & Switches, LAN | https://raw.githubusercontent.com/robheyes/lifxcode/master/packageManifest.json |
| Rory Jaffe | XBee3 | Integrations | Repeaters & Extenders, Zigbee | https://raw.githubusercontent.com/rsjaffe/Hubitat/master/Xbee3/packageManifest.json |
| Russ Vrolyk | Sleep Number Controller | Integrations |  | https://raw.githubusercontent.com/rvrolyk/SleepNumberController/master/packageManifest.json |
| SORS | Zigbee Driver for Sinope SW2500ZB | Integrations | Energy Monitoring, Switch, Zigbee | https://raw.githubusercontent.com/sorsme/sinope-switch/main/src/packageManifest.json |
| Samuel C Auclair | Zigbee Driver for Sinope device | Integrations | Climate Control, Energy Monitoring, Repeaters & Extenders, Zigbee | https://raw.githubusercontent.com/sacua/SinopeDriverHubitat/main/drivers/packageManifest.json |
| Schwark Satyavolu | Hubitat Alarm.com Panel | Integrations |  | https://raw.githubusercontent.com/schwark/hubitatADC/master/packageManifest.json |
| Schwark Satyavolu | Hunter Douglas Platinum Shades | Integrations |  | https://raw.githubusercontent.com/schwark/hubitat-hunterdouglasplatinum/main/PackageManifest.json |
| Schwark Satyavolu | Kidde HomeSafe | Integrations |  | https://raw.githubusercontent.com/schwark/hubitat-kidde/main/PackageManifest.json |
| Schwark Satyavolu | Nest Doorbell via Starling Hub | Integrations |  | https://raw.githubusercontent.com/schwark/hubitat-starling/main/PackageManifest.json |
| Schwark Satyavolu | Schlage WiFi Locks | Integrations |  | https://raw.githubusercontent.com/schwark/hubitat-schlage/main/PackageManifest.json |
| Scott Barton (sab0276) | Universal Virtual Device Switch uDTH - For Alexa, IFTTT, WebHooks, HSM, and other integrations | Integrations | Alarm Systems, Buttons, Cloud, Lights & Switches, Locks, Misc. Devices, Motion Control, Presence & Location, Safety & Security, Sleep, Valves, Water | https://raw.githubusercontent.com/sab0276/Hubitat/main/packageManifest.json |
| Sebastian YEPES (syepes) | Eurotronic Air Quality Sensor | Integrations | ZWave, Temperature & Humidity | https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Eurotronic/Eurotronic%20Air%20Quality%20Sensor.json |
| Sebastian YEPES (syepes) | LG WebOS TV | Integrations | LAN, Multimedia | https://raw.githubusercontent.com/syepes/Hubitat/master/Apps/LG/LG%20WebOS%20TV%20Discovery.json |
| Sebastian YEPES (syepes) | LokiLogLogger | Integrations | LAN, Monitoring, Tools & Utilities | https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Loki/LokiLogLogger.json |
| Sebastian YEPES (syepes) | LokiZWaveLogger | Integrations | LAN, ZWave, Monitoring, Tools & Utilities | https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Loki/LokiZWaveLogger.json |
| Sebastian YEPES (syepes) | LokiZigbeeLogger | Integrations | LAN, Zigbee, Monitoring, Tools & Utilities | https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Loki/LokiZigbeeLogger.json |
| Sebastian YEPES (syepes) | MetricLogger | Integrations | LAN, Monitoring, Tools & Utilities | https://raw.githubusercontent.com/syepes/Hubitat/master/Apps/VictoriaMetrics/MetricLogger.json |
| Sebastian YEPES (syepes) | Netatmo | Integrations | LAN, Cloud, Safety & Security | https://raw.githubusercontent.com/syepes/Hubitat/master/Apps/Netatmo/Netatmo.json |
| Sebastian YEPES (syepes) | Netatmo - Velux | Integrations | LAN, Cloud, Safety & Security, Doors & Windows | https://raw.githubusercontent.com/syepes/Hubitat/master/Apps/Netatmo/Netatmo%20-%20Velux.json |
| Sebastian YEPES (syepes) | Panasonic - Comfort Cloud | Integrations | LAN, Cloud, Climate Control, Temperature & Humidity | https://raw.githubusercontent.com/syepes/Hubitat/master/Apps/PanasonicComfortCloud/Panasonic%20-%20Comfort%20Cloud.json |
| Sebastian YEPES (syepes) | Sonoff RF Bridge | Integrations | LAN, IR & RF, Window Coverings, Lights & Switches | https://raw.githubusercontent.com/syepes/Hubitat/master/Apps/Sonoff/Sonoff%20RF%20Bridge.json |
| Sebastian YEPES (syepes) | Warmup - Cloud | Integrations | LAN, Cloud, Climate Control, Climate Control, Temperature & Humidity | https://raw.githubusercontent.com/syepes/Hubitat/master/Apps/Warmup/Warmup%20-%20Cloud.json |
| Sebastian YEPES (syepes) | Xiaomi Mijia | Integrations | LAN, Temperature & Humidity | https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Xiaomi/Xiaomi%20Mijia.json |
| Simon Burke (Scruffy-Sjb) | Aeotec Eurotronic Spirit eTRV Driver | Integrations | ZWave, Climate Control, Temperature & Humidity | https://raw.githubusercontent.com/scruffy-sjb/Hubitat_HPM/main/Aeotec/packageManifest.json |
| Simon Burke (Scruffy-Sjb) | Fakro Window Driver | Integrations | ZWave, Doors & Windows | https://raw.githubusercontent.com/scruffy-sjb/Hubitat_HPM/main/Fakro/packageManifest.json |
| Simon Burke (Scruffy-Sjb) | Heiman Z-Wave Smoke Detector Driver | Integrations | ZWave, Alarm Systems, Monitoring, Safety & Security | https://raw.githubusercontent.com/scruffy-sjb/Hubitat_HPM/main/Heiman/Zwave_Smoke/packageManifest.json |
| Simon Burke (Scruffy-Sjb) | Heiman Zigbee CO Detector Driver | Integrations | Zigbee, Alarm Systems, Monitoring, Safety & Security | https://raw.githubusercontent.com/scruffy-sjb/Hubitat_HPM/main/Heiman/Zigbee_CO/packageManifest.json |
| Simon Burke (Scruffy-Sjb) | Heiman Zigbee Smoke Detector Driver | Integrations | Zigbee, Alarm Systems, Monitoring, Safety & Security | https://raw.githubusercontent.com/scruffy-sjb/Hubitat_HPM/main/Heiman/Zigbee_Smoke/packageManifest.json |
| Simon Burke (Scruffy-Sjb) | Secure SRT321 Thermostat | Integrations | ZWave, Climate Control, Temperature & Humidity | https://raw.githubusercontent.com/scruffy-sjb/Hubitat_HPM/main/repository.json |
| Simon Burke (sburke781) | BoM Radar Images Data File | Integrations | Weather | https://raw.githubusercontent.com/sburke781/hubitat/master/BoMWeather/RadarImages/packageManifest.json |
| Simon Burke (sburke781) | Ecowitt WiFi Gateway | Integrations | Monitoring, Irrigation, LAN, Temperature & Humidity, Water, Weather | https://raw.githubusercontent.com/sburke781/ecowitt/main/packageManifest.json |
| Simon Burke (sburke781) | Unified Thermostat | Integrations | Climate Control, Temperature & Humidity, Cloud, LAN | https://raw.githubusercontent.com/sburke781/hubitat/master/UnifiedThermostat/packageManifest.json |
| Snell | Ambient Ecowitt Weather | Integrations | Cloud, LAN, Monitoring, Temperature & Humidity, Weather | https://www.drdsnell.com/projects/hubitat/drivers/AmbientEcowittWeather.json |
| Snell | Blink Drivers | Integrations | Cameras, Cloud, Misc. Devices, Monitoring, Safety & Security | https://www.drdsnell.com/projects/hubitat/drivers/BlinkManifest.json |
| Snell | FireBoard | Integrations | Cloud, Monitoring, Temperature & Humidity | https://www.drdsnell.com/projects/hubitat/drivers/FireBoard.json |
| Snell | Grizzl-ECharger | Integrations | Energy Monitoring, LAN, Misc. Devices, Monitoring, Vehicles & Transportation | https://www.drdsnell.com/projects/hubitat/drivers/Grizzl-EChargerManifest.json |
| Snell | Neptune Systems Apex | Integrations | LAN, Lights & Switches, Monitoring, Misc. Devices, Pets & Animals, Temperature & Humidity, Valves, Water | https://www.drdsnell.com/projects/hubitat/drivers/NeptuneSystemsApexManifest.json |
| Snell | Neurio | Integrations | Energy Monitoring, LAN, Misc. Devices, Monitoring | https://www.drdsnell.com/projects/hubitat/drivers/Neurio.json |
| Snell | Tesla Drivers | Integrations | Energy Monitoring, LAN, Monitoring | https://www.drdsnell.com/projects/hubitat/drivers/TeslaManifest.json |
| Snell | Unifi Drivers | Integrations | LAN, Lights & Switches, Misc. Devices, Monitoring, Multi Sensors | https://www.drdsnell.com/projects/hubitat/drivers/UnifiManifest.json |
| Snell | Unifi Protect Drivers | Integrations | Cameras, LAN, Misc. Devices, Monitoring, Multi Sensors, Safety & Security, Temperature & Humidity | https://www.drdsnell.com/projects/hubitat/drivers/UnifiProtectManifest.json |
| Snell | UnifiConnectAPI | Integrations | LAN, Misc. Devices, Monitoring | https://www.drdsnell.com/projects/hubitat/drivers/UnifiConnectManifest.json |
| Snell | WSM4Hubitat | Integrations | Cloud, Monitoring, Temperature & Humidity, Weather | https://www.drdsnell.com/projects/hubitat/drivers/WSM4Hubitat.json |
| StarkTemplar | SolArk Inverter | Integrations | Energy Monitoring, Cloud | https://raw.githubusercontent.com/StarkTemplar/Hubitat/refs/heads/main/Solar/packageManifest.json |
| StarkTemplar | Solcast_dual | Integrations | Energy Monitoring, Cloud | https://raw.githubusercontent.com/StarkTemplar/Solcast_dual/refs/heads/main/packageManifest.json |
| Steven Dale | Yale Home | Integrations |  | https://raw.githubusercontent.com/tmleafs/hubitat-packages/main/packages/yalehomeManifest.json |
| Taylor Brown (@thecloudtaylor) | Honeywell Home - Lyric and T Series | Integrations | Temperature & Humidity, Climate Control | https://raw.githubusercontent.com/thecloudtaylor/hubitat-packages/main/packages/honeywellManifest.json |
| TheMaster | HTTP Presence Sensor with schedule | Control | Tools & Utilities, LAN, Misc. Devices, Monitoring, Presence & Location | https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/http_presence_sensor.json |
| Tim Dodd | AcuRite Temperature Sensor Mqtt Driver | Integrations |  | https://raw.githubusercontent.com/timothydodd/hubitat-acurite-mqtt/main/packageManifest.json |
| Tim Dodd | WLED MQTT LED Driver Plus | Integrations |  | https://raw.githubusercontent.com/timothydodd/hubitat-wled-mqtt/master/packageManifest.json |
| Tom Schmidt | Hikvision Camera Controller | Integrations | Alarm Systems, Cameras, Monitoring, Motion Control, Safety & Security | https://raw.githubusercontent.com/tr-systems/hubpub/code/pkghcc.json |
| Vincent van Didden (@Vincentiano) | Silvercrest Doorbell HG06668 | Integrations | Buttons | https://raw.githubusercontent.com/Vincentiano/Hubitat-Silvercrest_Doorbell_HG06668/main/packageManifest.json |
| Vyrolan | iAqualink Driver | Integrations | Pools & Spas | https://raw.githubusercontent.com/Vyrolan/VyrolanHomeAutomation/main/Hubitat/Drivers/iAqualink/packageManifest.json |
| WalksOnAir | Pi-hole Virtual Switch | Integrations | LAN, Monitoring, Tools & Utilities, Cloud | https://raw.githubusercontent.com/walksonair/Hubitat-Pi-hole-Virtual-Switch/main/packageManifest.json |
| WindowWasher | Honeywell Home Integration Lyric and T Series Devices (cloud) | Integrations | Temperature & Humidity, Climate Control, Cloud | https://raw.githubusercontent.com/tyuhl/Hubitat-Packages/refs/heads/main/packages/HoneywellManifest.json |
| WindowWasher | Hyundai Bluelink Integration for Hubitat | Convenience | Vehicles & Transportation, Cloud | https://raw.githubusercontent.com/tyuhl/Hubitat-Packages/refs/heads/main/packages/BluelinkManifest.json |
| Yonatan Striem Amit | Anthem MRX x40 Driver | Integrations |  | https://raw.githubusercontent.com/yonatan-mitmit/HubitatAnthem/main/packageManifest.json |
| ZRanger1 | HubitatPixelblazeDriver | Integrations | Lights & Switches | https://raw.githubusercontent.com/zranger1/hubitatpixelblazedriver/master/packageManifest.json |
| ZRanger1 | HubitatWizLightDriver | Integrations | Lights & Switches | https://raw.githubusercontent.com/ZRanger1/HubitatWizLightDriver/master/packageManifest.json |
| ajones | Sony Audio Control | Integrations |  | https://raw.githubusercontent.com/jonesalexr/hubitat/master/Drivers/SonyAudio/packageManifest.json |
| ajones | Sony Bravia TV Rest Control | Integrations |  | https://raw.githubusercontent.com/jonesalexr/hubitat/master/Drivers/SonyBravia/packageManifest.json |
| aniva | IKEA DIRIGERA Bridge | Integrations | Matter, Bridge, IKEA, Hub | https://raw.githubusercontent.com/aniva/hubitat01/master/DirigeraBridge/packageManifest.json |
| aniva | Vindstyrka Air Quality Tile | Integrations | Monitoring, Air Quality, Dashboard | https://raw.githubusercontent.com/aniva/hubitat01/master/VindstyrkaTile/packageManifest.json |
| aniva | WiMeter Cloud Bridge Driver | Integrations | Monitoring, Energy | https://raw.githubusercontent.com/aniva/hubitat01/master/WimeterDriver/packageManifest.json |
| apwelsh | Roku TV Integration | Integrations | Multimedia, LAN | https://raw.githubusercontent.com/apwelsh/hubitat/master/roku/packageManifest.json |
| apwelsh | Simple Reverse Proxy Service | Integrations | Security, LAN, Remote Access | https://raw.githubusercontent.com/apwelsh/hubitat/master/revproxy/packageManifest.json |
| apwelsh | iopool EcO Pool/Spa Monitor | Integrations | Cloud, LAN, Monitoring, Multi Sensors, Pools & Spas, Water | https://raw.githubusercontent.com/apwelsh/hubitat/master/iopool/packageManifest.json |
| bchubitat | Hubitat Powerley | Integrations | Climate Control, Energy Monitoring, ZWave | https://raw.githubusercontent.com/bcastellucci/hubitat/main/powerley/packageManifest.json |
| bcopeland | Aeotec Range Extender 7 | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/aeotecRangeExtender7.json |
| bcopeland | Aeotec Water Sensor 6 | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/aeotecWaterSensor6.json |
| bcopeland | GoControl Thermostat | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/gocontrolThermostat.json |
| bcopeland | HomeSeer HS-FLS100+ Floodlight Sensor | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/HS-FLS100.json |
| bcopeland | HomeSeer HSM200 Multi Sensor | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/HSM200.json |
| bcopeland | Honeywell T6 Pro Thermostat | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/honeywellT6Pro.json |
| bcopeland | Inovelli 4-in-1 Sensor | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/inovelli4in1.json |
| bcopeland | Inovelli Multi-Color Bulb | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/inovelliLZW42Bulb.json |
| bcopeland | Inovelli Multi-White Bulb | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/inovelliLZW41Bulb.json |
| bcopeland | RGBGenie Z-Wave LED Controller | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/rgbgenieLEDController.json |
| bcopeland | RGBGenie Z-Wave Micro Controller | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/rgbgenieMicroController.json |
| bcopeland | RGBGenie Z-Wave Touch Panel | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/rgbgenieTouchPanel.json |
| bcopeland | Remotec ZXT-120 | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/remotecZXT120.json |
| bcopeland | Zooz Zen21 Switch | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/zoozZen21.json |
| bcopeland | Zooz Zen22 Dimmer | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/zoozZen22.json |
| bcopeland | Zooz Zen23 Switch | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/zoozZen23.json |
| bcopeland | Zooz Zen24 Dimmer | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/zoozZen24.json |
| bcopeland | Zooz Zen26 Switch | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/zoozZen26.json |
| bcopeland | Zooz Zen27 Dimmer | Integrations |  | https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/zoozZen27.json |
| brossow | BirdWeather PUC | Integrations | Pets & Animals, Cloud, Monitoring | https://raw.githubusercontent.com/brossow/hubitat-drivers/main/birdweather/packageManifest.json |
| brossow | Netatmo Weather Station Connect | Integrations | Cloud, Weather, Temperature & Humidity | https://raw.githubusercontent.com/brossow/hubitat-drivers/main/netatmo-weather-station/packageManifest.json |
| brossow | Rheem EcoNet | Integrations | Cloud, Climate Control, Temperature & Humidity, Water Heater | https://raw.githubusercontent.com/brossow/hubitat-drivers/main/rheem-econet/packageManifest.json |
| bsileo | Pool Controller | Integrations | Pools & Spas | https://raw.githubusercontent.com/bsileo/hubitat_poolcontroller/master/packageManifest.json |
| bsileo | Rain Machine | Integrations | Irrigation | https://raw.githubusercontent.com/bsileo/Hubitat_RainMachine/master/packageManifest.json |
| bsileo | Shinobi | Integrations | Integrations, Monitoring, Motion Control, Safety & Security | https://raw.githubusercontent.com/bsileo/hubitat_shinobi/master/packageManifest.json |
| christi999 | Fibaro Smart Implant FGBS-222 | Integrations |  | https://raw.githubusercontent.com/muchu999/Hubitat/master/packageManifest.json |
| classic-dave | Dreo Integration | Integrations | Climate Control, Appliances, Cloud | https://raw.githubusercontent.com/classic-dave/hubitat-dreo/main/packageManifest.json |
| craigde | Traeger WiFire Grill Integration | Integrations | Cloud, Thermostat | https://raw.githubusercontent.com/craigde/hubitat-traeger/main/packageManifest.json |
| curtiside | Oelo Lights | Integrations |  | https://raw.githubusercontent.com/curtiside/oelo-lights-hubitat/main/packageManifest.json |
| dJOS | Amber Electric Integration for Hubitat | Integrations | Energy Monitoring, Cloud | https://raw.githubusercontent.com/dJOS1475/Amber-Electric---Hubitat-Driver/main/packageManifest.json |
| dJOS | Enhanced Weather Underground Driver | Integrations | Weather, Cloud | https://raw.githubusercontent.com/dJOS1475/Hubitat_WU_Driver/main/packageManifest.json |
| dJOS | Fronius Solar Inverter Driver for Hubitat | Integrations | Energy Monitoring | https://raw.githubusercontent.com/dJOS1475/Fronius_Inverter_Driver_Hubitat/main/packageManifest.json |
| dJOS | Netatmo (Connect) - Weather Station | Integrations | Weather, Temperature & Humidity, Dashboards, Multi Sensors, Cloud | https://raw.githubusercontent.com/dJOS1475/Hubitat_Netatmo/main/packageManifest.json |
| dJOS | Sofabaton X Series Driver | Integrations | Utility, LAN, IR & RF | https://raw.githubusercontent.com/dJOS1475/Hubitat-Sofabaton-X-Series/refs/heads/main/PackageManifest.json |
| dJOS | Synology SRM Router Integration | Integrations | Utility, Presence & Location, Repeaters & Extenders, LAN | https://raw.githubusercontent.com/dJOS1475/Synology-SRM-Integration/refs/heads/main/packageManifest.json |
| dacmanj | FordPass Connect | Integrations | Vehicle, Integrations | https://raw.githubusercontent.com/dacmanj/hubitat/main/FordPass/packageManifest.json |
| dacmanj | Moen FLO Device Manager | Integrations | Water, Monitoring | https://raw.githubusercontent.com/dacmanj/hubitat/main/MoenFloManager/packageManifest.json |
| dacmanj | Moen Flo Smart Shutoff | Integrations | Water, Monitoring | https://raw.githubusercontent.com/dacmanj/hubitat/main/MoenFloStandalone/packageManifest.json |
| dan.t | NTP Client | Integrations | LAN, Tools & Utilities | https://raw.githubusercontent.com/danTapps/Hubitat/master/Drivers/NTP%20Client/packageManifest.json |
| dennypage | Aeotec Range Extender 7 | Integrations | Repeaters & Extenders, ZWave | https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/aeotec-re7.json |
| dennypage | GoControl Garage Door Opener | Integrations | Garage Doors, ZWave | https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/gocontrol.json |
| dennypage | Multi-Relay Door/Shade Controller | Integrations | Doors & Windows, Window Coverings | https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/multi-relay-door-shade-controller.json |
| dennypage | NUT ups monitor (upsmon) | Integrations | Tools & Utilities, LAN | https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/nut-upsmon.json |
| dennypage | Philio PAT02 Flood / Temperature / Humidity sensors | Integrations | Temperature & Humidity, ZWave | https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/pat02.json |
| dennypage | Philio PAT02-B Temperature / Humidity sensor | Integrations | Temperature & Humidity, ZWave | https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/pat02-b.json |
| dennypage | Somfy Z-Wave to RTS Interface II (ZRTSII) | Integrations | Window Coverings, ZWave | https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/zrtsii.json |
| dennypage | WeeWX (weather station) to Hubitat driver | Integrations | Weather, LAN | https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/weewx.json |
| dennypage | Zooz Temperature / Humidity XS Sensor ZSE44 | Integrations | Temperature & Humidity, ZWave | https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/zse44.json |
| dennypage | Zooz Water Leak XS Sensor ZSE42 | Integrations | Water, ZWave | https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/zse42.json |
| dkilgore90 | Google Photos Slideshow | Integrations | Cloud, Dashboards, Multimedia | https://raw.githubusercontent.com/dkilgore90/google-photos/master/packageManifest.json |
| dkilgore90 | Google SDM API - Nest Integration | Integrations | Temperature & Humidity, Safety & Security, Motion Control, Cloud | https://raw.githubusercontent.com/dkilgore90/google-sdm-api/master/packageManifest.json |
| dkilgore90 | LIFX Enhanced Drivers | Control | LAN, Lights & Switches | https://raw.githubusercontent.com/dkilgore90/lifx-hubitat/main/packageManifest.json |
| dkilgore90 | iRobot Scheduler | Integrations | Cleaning Devices | https://raw.githubusercontent.com/dkilgore90/iRobot/master/Roomba/packageManifest.json |
| dman2306 | AlarmDecoder Integration | Integrations | LAN, Safety & Security, Alarm Systems | https://raw.githubusercontent.com/dcmeglio/alarmdecoder-smartthings/master/packageManifest.json |
| dman2306 | BOND Home Integration | Integrations | LAN, IR & RF | https://raw.githubusercontent.com/dcmeglio/hubitat-bond/master/packageManifest.json |
| dman2306 | Denon HEOS Integration | Integrations | LAN, Speakers, Multimedia | https://raw.githubusercontent.com/dcmeglio/hubitat-heos/master/packageManifest.json |
| dman2306 | Holiday Switcher | Utility | Cloud, Automations & Groups | https://raw.githubusercontent.com/dcmeglio/hubitat-holidayswitcher/master/packageManifest.json |
| dman2306 | Kevo Plus Integration | Integrations | Cloud, Locks | https://raw.githubusercontent.com/dcmeglio/hubitat-kevo/master/packageManifest.json |
| dman2306 | Kohler DTV+ Integration | Integrations | LAN, Shower, Bathroom | https://raw.githubusercontent.com/dcmeglio/hubitat-kohlerdtv/master/packageManifest.json |
| dman2306 | LG ThinQ Integration | Integrations | Cloud, Appliances | https://raw.githubusercontent.com/dcmeglio/hubitat-thinq/master/packageManifest.json |
| dman2306 | Litter Robot Integration | Integrations | Cloud, Pets & Animals | https://raw.githubusercontent.com/dcmeglio/hubitat-litterrobot/master/packageManifest.json |
| dman2306 | MyQ Garage Door Integration | Integrations | Cloud, Doors & Windows, Garage Doors | https://raw.githubusercontent.com/dcmeglio/hubitat-myq/master/packageManifest.json |
| dman2306 | Orbit BHyve Integration | Integrations | Cloud, Irrigation, Valves | https://raw.githubusercontent.com/dcmeglio/hubitat-orbitbhyve/master/packageManifest.json |
| dman2306 | Petnet SmartFeeder Integration | Integrations | Cloud, Pets & Animals | https://raw.githubusercontent.com/dcmeglio/hubitat-petnet/master/packageManifest.json |
| dman2306 | Petsafe SmartFeeder Integration | Integrations | Cloud, Pets & Animals | https://raw.githubusercontent.com/dcmeglio/hubitat-petsafe/master/packageManifest.json |
| dman2306 | Rheem EcoNet Integration | Integrations | Cloud, Water Heater | https://raw.githubusercontent.com/dcmeglio/hubitat-rheem/master/packageManifest.json |
| dman2306 | Withings Integration | Integrations | Cloud, Health & Fitness, Scales, Sleep | https://raw.githubusercontent.com/dcmeglio/hubitat-withings/master/packageManifest.json |
| edasque | ratgo (MQTT firware) | Integrations |  | https://raw.githubusercontent.com/edasque/hubitat/main/devicehandlers/ratgdoMQTT/packageManifest.json |
| evdev | Modern Dashboard | Convenience | Cloud, Dashboards, Lights & Switches, Climate Control, Temperature & Humidity, Multimedia | https://raw.githubusercontent.com/evdev/hubitat-modern-dashboard/master/hubitat/packageManifest.json |
| jdc72 | Oppo Disc Player | Control | LAN, Misc. Devices, Multimedia | https://raw.githubusercontent.com/jdc72/Hubitat/main/oppo_disc_player/packageManifest.json |
| jedbro | Initial State Event Streamer | Integrations | Dashboards | https://raw.githubusercontent.com/jedbro/initialstate-smartapp/master/packageManifest.json |
| jlupien | Hatch Connect | Integrations | Hatch, Rest, Rest+, Baby, Nursery, Sound Machine, Night Light, Sleep | https://raw.githubusercontent.com/jlupien/hubitat-drivers/master/hatch/packageManifest.json |
| jlupien | Rivian Connect | Integrations | Vehicle, Car, EV, Presence, Rivian, R1S, R1T | https://raw.githubusercontent.com/jlupien/hubitat-drivers/master/rivian-connect/packageManifest.json |
| jonozzz | LG ThinQ Connect Integration | Integrations | Cloud, Appliances | https://raw.githubusercontent.com/jonozzz/hubitat-thinqconnect/refs/heads/main/packageManifest.json |
| jrfarrar | Garadget MQTT Driver | Integrations |  | https://raw.githubusercontent.com/jrfarrar/hubitat/master/devicehandlers/garadgetMQTT/garadgetmqtt.json |
| jschlackman | Pollen Virtual Sensor | Integrations | Weather | https://raw.githubusercontent.com/jschlackman/Hubitat/main/Pollen/packageManifest.json |
| kaimyn | Tailwind Garage Door Controller | Integrations | Garage Doors | https://raw.githubusercontent.com/kaimyn/Hubitat/main/Tailwind/packageManifest.json |
| ke7lvb | Emporia Vue v2 - Hubitat | Integrations | Energy Monitoring | https://raw.githubusercontent.com/ke7lvb/Emporia-Vue-Hubitat/refs/heads/main/packageManifest.json |
| ke7lvb | Solcast | Integrations | Energy Monitoring, Weather | https://raw.githubusercontent.com/ke7lvb/Solcast/refs/heads/main/packageManifest.json |
| ke7lvb | Sonnen Battery - Hubitat | Integrations | Energy Monitoring, LAN | https://raw.githubusercontent.com/ke7lvb/sonnen_battery/refs/heads/main/packageManifest.json |
| kingpanther13 | MCP Rule Server | Integrations |  | https://raw.githubusercontent.com/kingpanther13/Hubitat-local-MCP-server/main/packageManifest.json |
| kkossev | ESPHome Apollo Automation Drivers | Integrations | Climate Control, LAN, Monitoring, Motion Control, Multi Sensors, Temperature & Humidity | https://raw.githubusercontent.com/kkossev/Hubitat-ESPHome-Apollo/main/apolloManifest.json |
| kkossev | Matter Advanced Bridge | Integrations | Tools & Utilities, Matter | https://raw.githubusercontent.com/kkossev/Hubitat---Matter-Advanced-Bridge/main/packageManifest.json |
| kkossev | Tuya Zigbee Control Screen Panel | Integrations | Buttons, Misc. Devices, Zigbee | https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Tuya%20Zigbee%20Control%20Screen%20Panel/packageManifest.json |
| mbarone | SABnzbd | Integrations | LAN, Multimedia, Tools & Utilities | https://raw.githubusercontent.com/michaelbarone/hubitat/master/packagemanager/SABnzbd.json |
| mbarone | iFrameAdvanced | Integrations | LAN, Multimedia, Tools & Utilities | https://raw.githubusercontent.com/michaelbarone/hubitat/master/packagemanager/iFrameAdvanced.json |
| mikec85 | Aqualink-Driver | Integrations | Tools & Utilities, Monitoring, Notifications | https://raw.githubusercontent.com/mikec85/hubitatdrivers/master/aqualink/packageManifest.json |
| mikec85 | OctoPrint | Integrations | Tools & Utilities, Monitoring, Notifications | https://github.com/mikec85/hubitatdrivers/raw/master/octoprint/packageManifest.json |
| mikec85 | PublicIPTracker | Utility | LAN, Tools & Utilities, Monitoring | https://github.com/mikec85/hubitatdrivers/raw/master/publiciptracker/packageManifest.json |
| mikec85 | UniFi-Driver | Integrations | LAN, Tools & Utilities, Monitoring, Notifications | https://raw.githubusercontent.com/mikec85/hubitatdrivers/master/unifi/packageManifest.json |
| n3! | Channels DVR | Integrations | LAN | https://raw.githubusercontent.com/dmike3/Hubitat/master/hpm/channels_dvr/packageManifest.json |
| n3! | Weather Canada (OWM3.0-EC) | Integrations | Weather | https://raw.githubusercontent.com/dmike3/Hubitat/master/hpm/weather%20canada%20(owm-ec)/packageManifest.json |
| nh.schottfam | Enphase Solar | Integrations | Energy Monitoring, LAN, Monitoring | https://raw.githubusercontent.com/imnotbob/EnvoyHE/master/packageManager.json |
| nh.schottfam | Husqvarna AutoMower Manager | Integrations | Automations & Groups, LAN, Misc. Devices, Tools & Utilities | https://raw.githubusercontent.com/imnotbob/AutoMower/master/HE/packageManager.json |
| nh.schottfam | NOAA Weather Alerts (Latest) | Convenience | Weather, LAN, Safety & Security, Tools & Utilities | https://raw.githubusercontent.com/imnotbob/Hubitat-4/master/NOAA/packageManifest.json |
| nh.schottfam | NuHeat | Integrations | Climate Control, LAN | https://raw.githubusercontent.com/imnotbob/Hubitat-NuHeat/master/packageManager.json |
| nh.schottfam | TankUtility | Integrations | Energy Monitoring, LAN, Monitoring | https://raw.githubusercontent.com/imnotbob/tankUtility/master/packageManager.json |
| nh.schottfam | Vacation Lighting Director | Security | Automations & Groups, LAN, Safety & Security, Tools & Utilities | https://raw.githubusercontent.com/imnotbob/vacation-lighting-director/beta/packageManager.json |
| ogiewon | IoTaWatt Parent | Integrations | Energy Monitoring, Monitoring, LAN | https://raw.githubusercontent.com/ogiewon/Hubitat/refs/heads/master/Drivers/iotawatt-parent.src/iotawatt-parent.json |
| ogiewon | Logitech Harmony Hub Parent | Control | IR & RF, Multimedia, LAN | https://raw.githubusercontent.com/ogiewon/Hubitat/refs/heads/master/Drivers/logitech-harmony-hub-parent.src/logitech-harmony-hub-parent.json |
| rbyrbt | Lennox iComfort | Integrations | Climate Control, Temperature & Humidity, Cloud, LAN | https://raw.githubusercontent.com/rbyrbt/Hubitat/main/LennoxiComfort/packageManifest.json |
| rbyrbt | PetSafe Smart Feeder | Integrations | Pets & Animals, Cloud | https://raw.githubusercontent.com/rbyrbt/Hubitat/main/PetSafeSmartFeeder/packageManifest.json |
| rbyrbt | Winix Air Purifiers | Integrations | Climate Control, Temperature & Humidity, Cloud | https://raw.githubusercontent.com/rbyrbt/Hubitat/main/WinixAirPurifiers/packageManifest.json |
| ritchierich | Plivo SMS and Voice Notifications | Integrations | LAN, Notifications | https://raw.githubusercontent.com/mlritchie/Hubitat/master/Drivers/Plivo%20SMS/packageManifest.json |
| ritchierich | Textbelt SMS Notifications | Integrations | LAN, Notifications | https://raw.githubusercontent.com/mlritchie/Hubitat/refs/heads/master/Drivers/Textbelt%20SMS/packageManifest.json |
| ritchierich | Twilio SMS and Voice Notifications | Integrations | LAN, Notifications | https://raw.githubusercontent.com/mlritchie/Hubitat/master/Drivers/Twilio%20SMS/packageManifest.json |
| storageaanarchy (SANdood) | MeteoBridge Weather Station | Integrations |  | https://raw.githubusercontent.com/SANdood/MeteoWeather/master/packageManifest.json |
| storageaanarchy (SANdood) | PurpleAir Air Quality Station | Integrations |  | https://raw.githubusercontent.com/SANdood/PurpleAirStation/master/packageManifest.json |
| tinkorswim | Neptune Apex Bridge (A3 Series) | Integrations | Pets & Animals | https://raw.githubusercontent.com/tinkorswim/hubitat-neptuneapex/main/hpmManifest.json |
| tomw | hubitat_boseSoundTouch | Integrations | Speakers | https://raw.githubusercontent.com/tomwpublic/hubitat_boseSoundTouch/master/packageManifest.json |
| tomw | hubitat_flume | Integrations | Water | https://raw.githubusercontent.com/tomwpublic/hubitat_flume/main/packageManifest.json |
| tomw | hubitat_juiceBox | Integrations | Vehicles & Transportation | https://raw.githubusercontent.com/tomwpublic/hubitat_juiceBox/main/packageManifest.json |
| tomw | hubitat_midea | Integrations | Appliances, Climate Control, Temperature & Humidity | https://raw.githubusercontent.com/tomwpublic/hubitat_midea/main/packageManifest.json |
| tomw | hubitat_myLeviton | Integrations | Lights & Switches | https://raw.githubusercontent.com/tomwpublic/hubitat_myLeviton/master/packageManifest.json |
| tomw | hubitat_sonosButtons | Integrations | Buttons, Speakers | https://raw.githubusercontent.com/tomwpublic/hubitat_sonosButtons/main/packageManifest.json |
| tomw | hubitat_unifiEvents | Integrations | LAN, Presence & Location | https://raw.githubusercontent.com/tomwpublic/hubitat_unifiEvents/main/packageManifest.json |
| truittchris | Hubitat Alexa Routine Trigger | Integrations | Integrations, Amazon Alexa | https://raw.githubusercontent.com/truittchris/hubitat_alexa_routine_trigger/main/hpm/packageManifest.json |
| truittchris | Hubitat Alexa Routine Trigger (Driver Only) | Integrations | Integrations, Amazon Alexa | https://raw.githubusercontent.com/truittchris/hubitat_alexa_routine_trigger_driver_only/main/hpm/packageManifest.json |
| vision9074 | Mila Air Integration | Integrations | Cloud, Appliances, Temperature & Humidity, Monitoring | https://raw.githubusercontent.com/vision9074/hubitat-mila-air/main/packageManifest.json |
| vpsupun | Envoy Local Data | Integrations | Energy Monitoring, LAN | https://raw.githubusercontent.com/vpsupun/hubitat/master/EnvoyLocalData/packageManifest.json |
| vpsupun | Itho NRG | Integrations | Climate Control, Temperature & Humidity, LAN, Misc. Devices | https://raw.githubusercontent.com/vpsupun/hubitat/master/IthoNRG/packageManifest.json |
| vpsupun | Nuki Web API | Integrations | Locks, Safety & Security, Doors & Windows, LAN | https://raw.githubusercontent.com/vpsupun/hubitat/master/NukiWebAPI/packageManifest.json |
| vpsupun | Rituals Perfume Genie | Integrations | Appliances, Misc. Devices | https://raw.githubusercontent.com/vpsupun/hubitat/master/RitualsPerfumeGenie/packageManifest.json |

## Fetch and parse errors

| Level | URL | Reason |
| --- | --- | --- |
| manifest | https://raw.githubusercontent.com/GaryMilne/Hubitat-TileBuilder/main/packageManifestTileBuilder.json | JSON parse error: JSONDecodeError: Expecting property name enclosed in double quotes: line 62 column 5 (char 3127) |
| manifest | https://raw.githubusercontent.com/HubitatCommunity/Hubitat-BetterLaundryMonitor/master/docs/Hubitat-BetterLaundryMonitor.json | JSON parse error: JSONDecodeError: Invalid control character at: line 3 column 89 (char 139) |
| repository | http://hubconnect.hubitatcommunity.com/HPM/HubConnectManifest.json | non-HTTPS URL rejected: http://hubconnect.hubitatcommunity.com/HPM/HubConnectManifest.json |
| repository | https://raw.githubusercontent.com/heidrickla/Hubitat/main/Docs/repository.json | HTTP 404 |

## Summary

| Section | Count |
| --- | --- |
| A. Dead rules | 115 |
| B. Near misses | 17 |
| C. Over-broad rules | 5 |
| D. Entries with no dependencies | 19 |
| E. Schema defects | 12 |
| F1. Duplicate identifiers | 0 |
| F2. Genuine overlap pairs | 4 |
| G. Unrepresented packages | 809 |
| G candidate subset | 356 |
