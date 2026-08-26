window.NETWORK_EVIDENCE = {
  "counts": {
    "BOTH": 181,
    "CLOUD": 257,
    "INSUFFICIENT": 300,
    "LAN": 168
  },
  "dataset": "network-evidence-guide",
  "method": {
    "absenceMeans": "insufficient evidence, not offline or local-only",
    "declared": "HPM publisher-supplied LAN and Cloud tags",
    "documented": "official documentation links attached to reviewed Automation Map entries",
    "observed": "literal external hosts after a source definition and Hubitat LAN primitives found by bounded static analysis",
    "reviewed": "Automation Map dependency conclusions matched using its reviewed rules"
  },
  "packageCount": 906,
  "packages": [
    {
      "author": "Jo Rhett",
      "category": "Security",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Realtime management and tracking of an Abode Alarm system.",
      "documentationUrl": null,
      "id": "hpm:25b25014-eebb-4b5d-a21f-231848f8f20a",
      "manifestUrl": "https://raw.githubusercontent.com/jorhett/hubitat-abode/master/packageManifest.json",
      "name": "Abode Alarm",
      "observed": {
        "externalHosts": [
          "my.goabode.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Monitoring",
        "Safety & Security"
      ]
    },
    {
      "author": "Eric Meddaugh",
      "category": "Security",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Realtime management and tracking of an Abode Alarm system (2024 update) with child devices.",
      "documentationUrl": null,
      "id": "hpm:667d0b76-5e14-4d0b-903c-0c34f2c9389c",
      "manifestUrl": "https://raw.githubusercontent.com/x86cpu/hubitat-abode/master/packageManifest.json",
      "name": "Abode Alarm 2024",
      "observed": {
        "externalHosts": [
          "my.goabode.com",
          "tomeko.net"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 8,
        "urlLiteralCount": 35
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Monitoring",
        "Safety & Security"
      ]
    },
    {
      "author": "Dale Coghlan",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integration for Actron Connect",
      "documentationUrl": "https://github.com/dcoghlan/hubitat/tree/main/Actron_Connect_Integration",
      "id": "hpm:b64c73ae-f3c7-4b08-bdce-55bdf7fc0b3d",
      "manifestUrl": "https://raw.githubusercontent.com/dcoghlan/hubitat/main/Actron_Connect_Integration/packageManifest.json",
      "name": "Actron Connect Integration",
      "observed": {
        "externalHosts": [
          "que.actronair.com.au"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 20
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Cloud",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "RamSet",
      "category": "Weather",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Weather driver for polling Acuparse JSON data with capability integration, timestamp parsing, and optional extra fields.",
      "documentationUrl": null,
      "id": "manifest:ccb3b8fe90cb62af1ff6",
      "manifestUrl": "https://raw.githubusercontent.com/RamSet/hubitat/refs/heads/main/manifest-acuparse.json",
      "name": "Acuparse Weather Station",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Tim Dodd",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A device driver that integrates Acurite sensors via MQTT and RTL_433. It provides real-time temperature and humidity readings using MQTT.",
      "documentationUrl": null,
      "id": "hpm:9c85b00b-b57f-47e8-bf3a-8b01692a0377",
      "manifestUrl": "https://raw.githubusercontent.com/timothydodd/hubitat-acurite-mqtt/main/packageManifest.json",
      "name": "AcuRite Temperature Sensor Mqtt Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "David LaPorte",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Access to AcuRite sensor data via myacurite.com",
      "documentationUrl": null,
      "id": "manifest:622252f2ca0343ac6ae6",
      "manifestUrl": "https://raw.githubusercontent.com/dlaporte/Hubitat/main/AcuRite/packageManifest.json",
      "name": "AcuRite Weather Station",
      "observed": {
        "externalHosts": [
          "marapi.myacurite.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "JoKneeMo <https://github.com/JoKneeMo>",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-adguard-home-dns-server-and-client-manager",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "App and Driver to control AdGuard Home DNS Servers and Clients",
      "documentationUrl": "https://github.com/JoKneeMo/hubitat/blob/main/adguardhome/README.md",
      "id": "hpm:dfb3d284-d3d3-48b7-b2d7-99260d533332",
      "manifestUrl": "https://raw.githubusercontent.com/JoKneeMo/hubitat/main/adguardhome/packageManifest.json",
      "name": "AdGuard Home DNS Manager (Unofficial)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Azfar Khandoker",
      "category": "Notifications",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-adhan-player-app/36321",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Plays the Adhan on the selected speaker(s) at the appropriate prayer times.",
      "documentationUrl": "https://github.com/akhandok/adhanPlayer/blob/master/README.md",
      "id": "hpm:88e24638-10e6-4cd7-b7a3-64344fdc1366",
      "manifestUrl": "https://raw.githubusercontent.com/akhandok/adhanPlayer/master/packageManifest.json",
      "name": "Adhan Player",
      "observed": {
        "externalHosts": [
          "azfarandnusrat.com",
          "docs.smartthings.com",
          "www.webexhibits.org",
          "youtu.be"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Speakers"
      ]
    },
    {
      "author": "Maxime Boissonneault",
      "category": "Convenience",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Combine power monitors and IR Broadlink remotes to turn dumb appliances into smart ones",
      "documentationUrl": null,
      "id": "hpm:30dec819-a613-458f-b722-eaaf9280ceba",
      "manifestUrl": "https://raw.githubusercontent.com/mboisson/Hubitat-Advanced-Broadlink-Remote/main/packageManifest.json",
      "name": "Advanced Broadlink Remote",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 21
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Broadlink RM Device",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN"
            }
          ],
          "documentation": [],
          "id": "broadlink",
          "name": "Broadlink IR/RF Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Appliances",
        "Cleaning Devices",
        "IR & RF",
        "Misc. Devices",
        "Multimedia"
      ]
    },
    {
      "author": "Dan Ogorchock",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/advanced-button-controller-abc/",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Advanced Button Controller (ABC) App",
      "documentationUrl": "https://github.com/ogiewon/Hubitat/blob/master/Apps/Advanced%20Button%20Controller%20(ABC)/README.md",
      "id": "manifest:d29e15ff19fea3e02666",
      "manifestUrl": "https://raw.githubusercontent.com/ogiewon/Hubitat/refs/heads/master/Apps/Advanced%20Button%20Controller%20(ABC)/advanced-button-controller.json",
      "name": "Advanced Button Controller (ABC)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 17
      },
      "reviewed": [
        {
          "dependencies": [],
          "documentation": [],
          "id": "button-controller",
          "name": "Button Controller",
          "status": "OFFICIAL_DOC_VERIFIED"
        }
      ],
      "tags": [
        "Buttons"
      ]
    },
    {
      "author": "Electrified-Home",
      "category": "Automation",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Sun position tracking app/driver suite with configurable sky regions.",
      "documentationUrl": "https://github.com/Electrified-Home/Hubitat-Advanced-Heliotrope/blob/main/docs/README.md",
      "id": "hpm:advanced-heliotrope",
      "manifestUrl": "https://raw.githubusercontent.com/Electrified-Home/Hubitat-Advanced-Heliotrope/main/packageManifest.json",
      "name": "Advanced Heliotrope",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Advanced driver for the Honeywell T6 Pro Z-Wave thermostat - the baseline code is from v1.2 bcopeland driver.  Provides access to all 42 device parameters, Clock synchronization, and Power Source Monitoring, in addition to the standard thermostat functions",
      "documentationUrl": null,
      "id": "hpm:1acee6d9-61fb-4640-82eb-02f7537d78e8",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/honeywellT6PManifest.json",
      "name": "Advanced Honeywell T6 Pro",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Armand Welsh",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-advanced-hue-bridge-integration/51420",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Add support to Hubitat for Hue Groups, Bulbs, and Scenes.  This integration differs from the built-in Hue integration, because this one allows you to import Hue scenes which can be added to any Hubitat scene/group to be turned on.  This was created specifically to satisfy a need the Hubitat could not.  With this driver, it is possible to smoothly transition hue scenes for any Hue group.  I plan to add management of Hue scenes at a later time, as well as a capture state, similar to Hubitat's scene manager.",
      "documentationUrl": "https://github.com/apwelsh/hubitat/tree/master/hue",
      "id": "hpm:236c1937-ef40-4afb-a571-3cb54bce5723",
      "manifestUrl": "https://raw.githubusercontent.com/apwelsh/hubitat/master/hue/packageManifest.json",
      "name": "Advanced Hue Hub Integration",
      "observed": {
        "externalHosts": [
          "developers.meethue.com",
          "img.shields.io",
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 9,
        "urlLiteralCount": 26
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Philips Hue Bridge",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "advanced-hue-bridge",
          "name": "Advanced Hue Bridge Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "LAN",
        "Lights & Switches"
      ]
    },
    {
      "author": "Nelson Clark",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Advanced vThermostat is a Hubitat Device Type Handler that will help create a proper virtual thermostat device.",
      "documentationUrl": null,
      "id": "hpm:595c9c05-47ce-4ed9-8038-d4fdc3116e60",
      "manifestUrl": "https://raw.githubusercontent.com/NelsonClark/Hubitat/main/Apps/Advanced_vThermostat/packageManifest.json",
      "name": "Advanced vThermostat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 13
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Temperature & Humidity",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "an Advanced Switch device handler that adds dimming and color control even if the switch does not have these capabilities. It allows switches hooked up without a load to control color bulbs from a dashboard or app",
      "documentationUrl": null,
      "id": "hpm:e6999bcb-bb44-40f9-b02d-da734e7fd6cd",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/AdvancedZwaveDimmerV2.json",
      "name": "Advanced Zwave Dimmer Device Handler",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Laundry Monitor via Aeon Home Energy Probes, set watt levels and turns on a switch when washer or dryer is done. You put one probe on washer circuit, one od dryer.",
      "documentationUrl": null,
      "id": "hpm:68432d3d-c967-41f9-8d54-10a8c8f402f0",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/AeonLaundry.json",
      "name": "Aeon Laundry",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Monitoring"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Aeon SmartStrip Device Handler",
      "documentationUrl": null,
      "id": "hpm:e2d98e4f-3397-46b3-9da6-4b7a5bd587d1",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/AeonSmartStrip.json",
      "name": "Aeon SmartStrip",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Scruffy-SJB",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Aeotec Eurotronic Spirit eTRV Driver",
      "documentationUrl": null,
      "id": "hpm:93ad2c86-f6ae-4564-b160-0d68b5ee2327",
      "manifestUrl": "https://raw.githubusercontent.com/scruffy-sjb/Hubitat_HPM/main/Aeotec/packageManifest.json",
      "name": "Aeotec Eurotronic Spirit eTRV Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Temperature & Humidity",
        "ZWave"
      ]
    },
    {
      "author": "Brent Rossow",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Maintained fork with bug fixes for the Aeotec Heavy Duty Smart Switch (ZW078) Z-Wave switch with power metering.",
      "documentationUrl": "https://github.com/brossow/hubitat-drivers/tree/main/aeotec/heavy-duty-switch",
      "id": "hpm:2219f951-b195-4f65-bf33-4d822c133d11",
      "manifestUrl": "https://raw.githubusercontent.com/brossow/hubitat-drivers/main/aeotec/heavy-duty-switch/packageManifest.json",
      "name": "Aeotec Heavy Duty Smart Switch",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Switch",
        "Z-Wave"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-aeotec-heavy-duty-smart-switch/32951/1",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:948c03e6b8e11a90cc44",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Aeotec/Aeotec%20Heavy%20Duty%20Smart%20Switch.json",
      "name": "Aeotec Heavy Duty Smart Switch",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Rene Boer",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/driver-aeotec-home-energy-meter-8-3-clamp-zwa046/157194",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Aeotec Home Energy Meter 8 (3 clamp) version by Aeotec.",
      "documentationUrl": "reneboer",
      "id": "manifest:97525e2352bf122ebbe8",
      "manifestUrl": "https://raw.githubusercontent.com/reneboer/Hubitat/main/Aeotec/packageManifestHEM8.json",
      "name": "Aeotec Home Energy Meter 8 (3 clamp) Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "ZWave"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-aeotec-heavy-duty-smart-switch/32951/1",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:3faa7b5f468375a81e6e",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Aeotec/Aeotec%20MultiSensor%206.json",
      "name": "Aeotec MultiSensor 6",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Multi Sensors",
        "ZWave"
      ]
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-aeotec-range-extender-7-driver/37775?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Aeotec Range Extender 7 Driver",
      "documentationUrl": null,
      "id": "manifest:564feb74493ceffcad37",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/aeotecRangeExtender7.json",
      "name": "Aeotec Range Extender 7",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Denny Page",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-aeotec-range-extender-7/45303",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for the Aeotec Range Extender 7",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/drivers/aeotec-re7",
      "id": "manifest:e08f15bb23c24cae4c37",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/aeotec-re7.json",
      "name": "Aeotec Range Extender 7",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Repeaters & Extenders",
        "ZWave"
      ]
    },
    {
      "author": "Rene Boer",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-aeotec-smart-switch-driver-7-eu-version/130862",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Smart Switch 7 EU version by Aeotec.",
      "documentationUrl": "https://github.com/reneboer/Hubitat/blob/main/Aeotec/README.md",
      "id": "manifest:924c8d51c18d54012764",
      "manifestUrl": "https://raw.githubusercontent.com/reneboer/Hubitat/main/Aeotec/packageManifest.json",
      "name": "Aeotec Smart Switch 7 EU version Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Boguslaw Wojcik (@bogus.wojcik)",
      "category": "Security",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-aeotec-trisensor-8-community-driver/154427",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Aeotec TriSensor 8 multi-sensor driver with parameters and S2 support.",
      "documentationUrl": "https://community.hubitat.com/t/release-aeotec-trisensor-8-community-driver/154427",
      "id": "hpm:23079191-661c-49e7-b304-53269c7cbbc7",
      "manifestUrl": "https://raw.githubusercontent.com/boguslaw-wojcik/hubitat/main/manifests/aeotec_trisensor_8.json",
      "name": "Aeotec TriSensor 8",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Motion Control",
        "Safety & Security",
        "Temperature & Humidity",
        "ZWave"
      ]
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-aeotec-water-sensor-6-w-dock/39292?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Aeotec Water Sensor 6 Driver",
      "documentationUrl": null,
      "id": "manifest:7ba18bc79bc526a76838",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/aeotecWaterSensor6.json",
      "name": "Aeotec Water Sensor 6",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-aeotec-water-sensor-6/34269/1",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:e82a6e8e704507f07e1f",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Aeotec/Aeotec%20Water%20Sensor%206.json",
      "name": "Aeotec Water Sensor 6",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Multi Sensors",
        "ZWave"
      ]
    },
    {
      "author": "viertaxa",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/beta-release-aeotec-hem-gen5-2-phase-driver/60053",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A more preference filled alternative driver.",
      "documentationUrl": "https://community.hubitat.com/t/beta-release-aeotec-hem-gen5-2-phase-driver/60053",
      "id": "manifest:fb392e51fc95c0669c3c",
      "manifestUrl": "https://www.hubitatcommunity.com/hpm/AeotecHEMGen5.json",
      "name": "AeotecHEMGen5 Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "CSteele",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/aeotec-multisensor-6/1204/20",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A more preference filled alternative to the Built-In driver.",
      "documentationUrl": "https://github.com/HubitatCommunity/AeotecMultiSensor6/blob/master/README.md",
      "id": "hpm:602887ed-0715-463f-bccf-76e96199e41f",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/AeotecMultiSensor6/master/docs/AeotecMultiSensor6.json",
      "name": "AeotecMultiSensor6 Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Mavrrick",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Air Gradient Universal driver",
      "documentationUrl": null,
      "id": "hpm:258bbd07-300b-4a45-a4c9-622f1f06ccb3",
      "manifestUrl": "https://raw.githubusercontent.com/Mavrrick/Hubitat-by-Mavrrick/main/AirGradient/packageManifest.json",
      "name": "Air Gradient Universal driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Integrations",
        "Misc. Devices"
      ]
    },
    {
      "author": "cSteele",
      "category": null,
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Yet Another Air Quality Index from AirNow",
      "documentationUrl": "https://github.com/HubitatCommunity/AirQuality-AirNow/blob/main/README.md",
      "id": "hpm:045731d0-372c-4fd9-8944-b20129dd31a1",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/AirQuality-AirNow/main/docs/AirQuality-AirNow.json",
      "name": "Air Quality from AirNow",
      "observed": {
        "externalHosts": [
          "www.airnowapi.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "RamSet",
      "category": "Air Quality",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Notifies when windows/doors are open and the outdoor air quality is bad, naming every open sensor; holds alerts while the range hood or microwave fan is exhausting cooking fumes.",
      "documentationUrl": null,
      "id": "manifest:a5ba9b852d2823b7d55e",
      "manifestUrl": "https://raw.githubusercontent.com/RamSet/hubitat/refs/heads/main/manifest-aq-window-alerts.json",
      "name": "Air Quality Window Alerts",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/air-things-view-plus/94434",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Provides the interface and device(s) to integrate the Air Things (aka AirThings) View Plus hub and sensors with Hubitat(TM).",
      "documentationUrl": "https://github.com/thebearmay/hubitat/blob/main/airthings/README.md",
      "id": "hpm:edc910d9-34f5-4f08-b584-4574598f9834",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/airThingsManifest.json",
      "name": "Air Things View Plus API Integration",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Rob Alfonso",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Speaker Drivers for the Airfoil Api",
      "documentationUrl": null,
      "id": "hpm:86a6a243-0c93-4a1f-be47-461d23d96f41",
      "manifestUrl": "https://raw.githubusercontent.com/rob121/hubitat/master/drivers/airfoil/packageManifest.json",
      "name": "Airfoil Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 14
      },
      "reviewed": [],
      "tags": [
        "Speakers"
      ]
    },
    {
      "author": "Jamie Curnow",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/airtouch-5-drivers-for-controller-and-zones/163437",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Monitoring and controlling your Airtouch 5 AC Controller directly from your home automation platform",
      "documentationUrl": "https://github.com/jc21/hubitat-airtouch5",
      "id": "hpm:7903d589-53f7-407e-9654-2a486183b412",
      "manifestUrl": "https://raw.githubusercontent.com/jc21/hubitat-airtouch5/refs/tags/v1.0.0/packageManifest.json",
      "name": "AirTouch 5 Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Climate Control",
        "Monitoring",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "VH",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Gateway Alamo for Heated Floors",
      "documentationUrl": "https://github.com/hhorigian/hubitat_gateway_alamo",
      "id": "hpm:13eb514e-940a-4cc8-8ec2-77f078131a2f",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_gateway_alamo/refs/heads/main/packageManifest.json",
      "name": "Alamo V3 Gateway - HTTP",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "cjcharles0",
      "category": null,
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-visonic-interlogix-networx-elk-alarm-bridge/55040",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Alarm Bridge integration for Visonic, Elk and GE/Networx",
      "documentationUrl": "https://github.com/cjcharles0/Hubitat/drivers/alarm-bridge",
      "id": "manifest:e210ab83719f7a764a79",
      "manifestUrl": "https://raw.githubusercontent.com/cjcharles0/Hubitat/master/packages/alarm-bridge-package.json",
      "name": "Alarm Bridge",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Alarm Panel / Bridge",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_OR_SERIAL_GATEWAY"
            }
          ],
          "documentation": [],
          "id": "alarm-bridge",
          "name": "Alarm Bridge",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Alarm Systems",
        "Safety & Security"
      ]
    },
    {
      "author": "Konnected Inc.",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integrate the Konnected Alarm Panel and Alarm Panel Pro (on new ESPHome firmware)",
      "documentationUrl": null,
      "id": "hpm:cbeff4ef-d214-4389-8944-0dc2ba3a1ec4",
      "manifestUrl": "https://raw.githubusercontent.com/konnected-io/konnected-hubitat/refs/heads/master/package-alarm-panel.json",
      "name": "Alarm Panel (universal)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 3
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Konnected Panel",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "konnected",
          "name": "Konnected Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Alarm Systems",
        "Doors & Windows",
        "Monitoring",
        "Safety & Security"
      ]
    },
    {
      "author": "Nu Tech Software Solutions, Inc. & Dominick Meglio",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Integrates an AlarmDecoder (AD2Pi) with your Hubitat system so you can control Ademco and DSC alarm systems.",
      "documentationUrl": null,
      "id": "hpm:54e396bd-6eb7-433d-8e54-86a430a119b5",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/alarmdecoder-smartthings/master/packageManifest.json",
      "name": "AlarmDecoder Integration",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com",
          "www.alarmdecoder.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 9,
        "urlLiteralCount": 24
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "LAN",
        "Safety & Security"
      ]
    },
    {
      "author": "Simon Burke (sburke781)",
      "category": null,
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/project-album-art-tasker-and-musicbrainz-and-cover-art-archive/80416",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Allows for the displays of an album cover image on a dashboard tile by looking up a artist and album name on the MusicBrainz and Cover Art Archive online services",
      "documentationUrl": null,
      "id": "manifest:7eb9f73000e9f363d621",
      "manifestUrl": "https://raw.githubusercontent.com/sburke781/hubitat/master/AlbumArtTile/packageManifest.json",
      "name": "Album Art Tile",
      "observed": {
        "externalHosts": [
          "ia600900.us.archive.org",
          "musicbrainz.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Multimedia",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Andrew Davison",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for devices based upon the original AlertMe / Iris V1 platform.",
      "documentationUrl": "https://github.com/birdslikewires/hubitat/tree/main/alertme",
      "id": "hpm:a6589963-c0f9-47b7-98ee-8312f4f1bbaf",
      "manifestUrl": "https://raw.githubusercontent.com/birdslikewires/hubitat/main/alertme/packageManifest.json",
      "name": "AlertMe Drivers from BirdsLikeWires",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 9,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Doors & Windows",
        "Energy Monitoring",
        "Lights & Switches",
        "Monitoring",
        "Presence & Location",
        "Repeaters & Extenders",
        "Safety & Security",
        "Temperature & Humidity",
        "Zigbee"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Notifications",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Alexa Voice TTS. not Written by me, but modified to add messages on cookie renew success or failure and setVolume Control",
      "documentationUrl": null,
      "id": "hpm:241afec3-cdb3-4819-8b5f-c9849a01ebc8",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/AlexaATT.json",
      "name": "Alexa TTS APP and Driver w volume",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Notifications",
        "Voice Assistants"
      ]
    },
    {
      "author": "Derek Osborn",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-amber-electric-integration-for-hubitat-designed-for-the-new-api/137698?u=djos",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Hubitat Driver for Aussie Amber Electric customers",
      "documentationUrl": null,
      "id": "manifest:fd7d1f01d9c8f697f29d",
      "manifestUrl": "https://raw.githubusercontent.com/dJOS1475/Amber-Electric---Hubitat-Driver/main/packageManifest.json",
      "name": "Amber Electric Integration for Hubitat",
      "observed": {
        "externalHosts": [
          "api.amber.com.au"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Energy Monitoring"
      ]
    },
    {
      "author": "David Snell",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": true
      },
      "description": "Drivers for using the Ambient API, Ambient Local, and Ecowitt methods of getting weather station data",
      "documentationUrl": null,
      "id": "hpm:5e3b3afa-399f-4e6e-82a4-a914309d4f42",
      "manifestUrl": "https://www.drdsnell.com/projects/hubitat/drivers/AmbientEcowittWeather.json",
      "name": "Ambient Ecowitt Weather",
      "observed": {
        "externalHosts": [
          "api.ambientweather.net",
          "www.drdsnell.com"
        ],
        "lanPrimitives": [
          "PARSE_LAN_MESSAGE"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 11
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Ecowitt Gateway",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_HTTP"
            }
          ],
          "documentation": [],
          "id": "ecowitt",
          "name": "EcoWitt / Wittboy Integration",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Cloud",
        "LAN",
        "Monitoring",
        "Temperature & Humidity",
        "Weather"
      ]
    },
    {
      "author": "Kurt Sanders",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integrates your Internet connected Ambient Weather Station system into the Hubitat environment.",
      "documentationUrl": "https://github.com/KurtSanders/STAmbientWeather/blob/master/README.md",
      "id": "hpm:e2e6903b-cfa3-463c-901f-ed9364212df2",
      "manifestUrl": "https://raw.githubusercontent.com/KurtSanders/STAmbientWeather/master/hubitat/packageManifest.json",
      "name": "Ambient Weather Station",
      "observed": {
        "externalHosts": [
          "ambientweather.net",
          "api.ambientweather.net",
          "api.pushover.net",
          "dashboard.ambientweather.net"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 14
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ambient Weather Platform",
              "runtimeCriticality": "RUNTIME",
              "transport": "HTTPS_API"
            }
          ],
          "documentation": [],
          "id": "ambient-weather",
          "name": "Ambient Weather Integration",
          "status": "VERIFIED_REPO"
        }
      ],
      "tags": [
        "Monitoring",
        "Pools & Spas",
        "Temperature & Humidity",
        "Weather"
      ]
    },
    {
      "author": "David LaPorte",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Light controls for Amcrest ASH26 outdoor security camera",
      "documentationUrl": null,
      "id": "manifest:4d5414b319c79ad9a652",
      "manifestUrl": "https://raw.githubusercontent.com/dlaporte/Hubitat/main/ASH26/packageManifest.json",
      "name": "Amcrest ASH26",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Dahua / Amcrest Camera",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "dahua-amcrest",
          "name": "Dahua / Amcrest Integration",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": []
    },
    {
      "author": "Dominick Meglio & Eric Maycock",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-andersen-verilock-translator-driver/40912",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integrate your Andersen Verilocks using a Verilock Translation with your Hubitat system for both contact and lock monitoring.",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-verilock/blob/master/README.md",
      "id": "hpm:e15217ad-b9c5-4b61-b352-dc0caad72161",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-verilock/master/packageManifest.json",
      "name": "Andersen Verilock Translator",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Doors & Windows",
        "ZWave"
      ]
    },
    {
      "author": "Yonatan Striem Amit",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Anthem MRX x40 Receivers",
      "documentationUrl": null,
      "id": "manifest:a541a0b4eca4acd11fd1",
      "manifestUrl": "https://raw.githubusercontent.com/yonatan-mitmit/HubitatAnthem/main/packageManifest.json",
      "name": "Anthem MRX x40 Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Marc Hedish",
      "category": "Utility",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-apc-smartups-status-driver/158899",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat driver for monitoring and managing APC Smart-UPS systems - providing reliable runtime statistics, event emission, and control for APC devices.",
      "documentationUrl": "https://github.com/MHedish/Hubitat/blob/main/Drivers/APC-SmartUPS/README.md",
      "id": "hpm:4e5c389d-a3d5-4214-b24f-971b975cf7ae",
      "manifestUrl": "https://raw.githubusercontent.com/MHedish/Hubitat/main/Drivers/APC-SmartUPS/packageManifest.json",
      "name": "APC SmartUPS Status",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "APC",
        "Monitoring",
        "Smart-UPS",
        "UPS"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "App and Device ID Logger. Application creates and updates a log of all app and device IDs and retains their entries after the app/device is removed; this allows for a quick lookup that can be used to trace the 'Hub received a request for an unknown app' messages.",
      "documentationUrl": null,
      "id": "hpm:cc60b61f-0bda-4c83-a19d-5ce589ce6202",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/refs/heads/main/manifests/appDevIdManifest.json",
      "name": "App and Device ID Logger",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Simon Burke (sburke781)",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Produce a JSON string with a listing of Apps installed on the local HE hub, including parent / child relationships",
      "documentationUrl": null,
      "id": "manifest:f45655e6af1bca273425",
      "manifestUrl": "https://raw.githubusercontent.com/sburke781/hubitat/master/AppList/packageManifest.json",
      "name": "App List (Beta)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Convenience"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-aqara-cube-t1-pro-mfczq12lm-is-fun/121604",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Aqara Cube T1 Pro (MFCZQ12LM) is fun!",
      "documentationUrl": "https://community.hubitat.com/t/release-aqara-cube-t1-pro-mfczq12lm-is-fun/121604",
      "id": "hpm:fc13f97d-e5a8-4d5e-bf84-1c9b712f9568",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Aqara%20Cube%20T1%20Pro/packageManifest.json",
      "name": "Aqara Cube T1 Pro",
      "observed": {
        "externalHosts": [
          "homekitnews.com",
          "sensirion.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 16
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Misc. Devices",
        "Zigbee"
      ]
    },
    {
      "author": "Dan Ogorchock",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-dedicated-aqara-fp300-presence-multi-sensor-zigbee-driver/162353?u=ogiewon",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Dedicated Aqara FP300 Presence Milti-Sensor Hubitat Zigbee Driver",
      "documentationUrl": null,
      "id": "manifest:cbd47775d17bd4e7964e",
      "manifestUrl": "https://raw.githubusercontent.com/ogiewon/Hubitat/refs/heads/master/Drivers/aqara-fp300.src/aqara-fp300.json",
      "name": "Aqara FP300 Presence Multi-Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Motion Control",
        "Multi Sensors",
        "Zigbee"
      ]
    },
    {
      "author": "Jonathan Bradshaw",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Aqara Human Presence Sensor FP1",
      "documentationUrl": "https://github.com/bradsjm/hubitat-drivers/blob/main/Aqara/README.md",
      "id": "hpm:7659C2C1-44A7-41C2-B1C2-7949A86B24AA",
      "manifestUrl": "https://raw.githubusercontent.com/bradsjm/hubitat-public/main/Aqara/packageManifest.json",
      "name": "Aqara Human Presence Sensor FP1",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/aqara-p1-motion-sensor/92987/63?u=kkossev",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with Aqara P1 Motion Sensor RTCGQ14LM, Aqara FP1 Human Presence Detector RTCZCGQ11LM, Aqara FP1E Human Presence Detector RTCZCGQ13LM, FP300, RTCGQ13LM, GZCGQ11LM, GZCGQ01LM, RTCGQ01LM, RTCGQ11LM, RTCGQ15LM",
      "documentationUrl": "https://github.com/kkossev/Hubitat/blob/main/Drivers/Aqara%20P1%20Motion%20Sensor/README.MD",
      "id": "hpm:7f55f65d-dc8e-4742-a2e2-bc74582613b3",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/development/Drivers/Aqara%20P1%20Motion%20Sensor/packageManifest.json",
      "name": "Aqara P1 Motion Sensor",
      "observed": {
        "externalHosts": [
          "zigbee.blakadder.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 16
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-aqara-multi-state-sensor-p100-zigbee-driver-c8-only/163540",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Aqara P100 Multi-State Sensor (DWZTCGQ11LM) driver for Hubitat Elevation hub - vibration, movement, orientation, triple-tap and fall detection in object mode, or contact open/closed in door/window mode",
      "documentationUrl": "https://github.com/kkossev/Hubitat/blob/development/Drivers/Aqara%20P100%20Multi-State%20Sensor/README.md",
      "id": "hpm:7e8d3951-8550-470b-84a8-21e9d07acdec",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/development/Drivers/Aqara%20P100%20Multi-State%20Sensor/packageManifest.json",
      "name": "Aqara P100 Multi-State Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with models ZNCLDJ11LM & ZNCLDJ12LM.",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-aqara-smart-curtain-motor",
      "id": "manifest:751e09f9eb5a8ceffdc2",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-aqara-smart-curtain-motor.json",
      "name": "Aqara Smart Curtain Motor",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with model SJCGQ11LM.",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-aqara-water-leak-sensor",
      "id": "manifest:414ef511b2dd12ba718b",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-aqara-water-leak-sensor.json",
      "name": "Aqara Water Leak Sensor",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Mike Coffey",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/pool-iaqualink-driver/27585",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Aqualink Integration for Controlling your Pool Equipment",
      "documentationUrl": null,
      "id": "manifest:95cfc89888485661f76f",
      "manifestUrl": "https://raw.githubusercontent.com/mikec85/hubitatdrivers/master/aqualink/packageManifest.json",
      "name": "Aqualink-Driver",
      "observed": {
        "externalHosts": [
          "p-api.iaqualink.net",
          "prod.zodiac-io.com",
          "r-api.iaqualink.net",
          "support.iaqualink.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Notifications",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Adrian Caramaliu",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Aroma-Link Integration",
      "documentationUrl": null,
      "id": "hpm:bd93af04-b657-49f2-8228-6a2f2a4b7584",
      "manifestUrl": "https://raw.githubusercontent.com/ady624/hubitat-aroma-link/master/packageManifest.json",
      "name": "Aroma-Link Integration",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Climate Control"
      ]
    },
    {
      "author": "James Shimota",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "I used the meteorological seasons but wanted higher accuracy like Farmers Almanac.  Along came Ai and got me there. Now the user can choose which Seasons type. Hemisphere and and selectable autumn/fall.  It creates a useable tile, variables for Rules and other nice features as well.",
      "documentationUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/astro_meteor_seasons/README.md",
      "id": "manifest:e10d3c6a081517fa751e",
      "manifestUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/astro_meteor_seasons/packageManifest.json",
      "name": "Astro-Meteor Seasons",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Monitoring",
        "Timers",
        "Weather"
      ]
    },
    {
      "author": "Taylor Brown(@thecloudtaylor)",
      "category": "Security",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "App and Driver for August Home",
      "documentationUrl": null,
      "id": "hpm:e853ea30-0aa7-4c81-94c8-f154b234aa2d",
      "manifestUrl": "https://raw.githubusercontent.com/thecloudtaylor/hubitat-packages/main/packages/augustManifest.json",
      "name": "August Home",
      "observed": {
        "externalHosts": [
          "medium.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Locks"
      ]
    },
    {
      "author": "Andrew Davison",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for Aurora devices.",
      "documentationUrl": "https://github.com/birdslikewires/hubitat/tree/main/aurora",
      "id": "hpm:8fc85585-cb27-446f-ab26-e8e288df1711",
      "manifestUrl": "https://raw.githubusercontent.com/birdslikewires/hubitat/main/aurora/packageManifest.json",
      "name": "Aurora Drivers from BirdsLikeWires",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Lights & Switches",
        "Repeaters & Extenders",
        "Zigbee"
      ]
    },
    {
      "author": "Chris Sader",
      "category": "Security",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Automatically locks a specific door after X minutes when closed and unlocks it when open after X seconds.",
      "documentationUrl": null,
      "id": "manifest:a738a97e009aefe4a8ef",
      "manifestUrl": "https://raw.githubusercontent.com/csader/AutoLockDoor/master/packageManifest.json",
      "name": "Auto Lock Door",
      "observed": {
        "externalHosts": [
          "www.gharexpert.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Locks",
        "Safety & Security"
      ]
    },
    {
      "author": "Mattias Fornander (@mfornander)",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-auto-off-automatically-turn-off-devices-after-set-amount-of-time-on/41535",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Automatically turn off/on devices after set amount of time on/off",
      "documentationUrl": null,
      "id": "manifest:f23a9b9f7cbe569e217c",
      "manifestUrl": "https://raw.githubusercontent.com/MFornander/Hubitat/master/apps/AutoOff/packageManifest.json",
      "name": "Auto Off",
      "observed": {
        "externalHosts": [
          "semver.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Ephrayim",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Detect room names in device labels, create missing rooms, and sort unassigned devices into them.",
      "documentationUrl": "https://github.com/evdev/Hubitat_auto_device-room_sorter",
      "id": "hpm:c8d158db-ad11-437c-a533-f90fa2cfc696",
      "manifestUrl": "https://raw.githubusercontent.com/evdev/Hubitat_auto_device-room_sorter/main/packageManifest.json",
      "name": "Auto Room Sorter",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Joel Wetzel",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Automatically control smartblinds and shades, by integrating with a light sensor.",
      "documentationUrl": "https://github.com/joelwetzel/Hubitat-Auto-Shades",
      "id": "manifest:e088f6eb90d53b458798",
      "manifestUrl": "https://raw.githubusercontent.com/joelwetzel/Hubitat-Auto-Shades/master/packageManifest.json",
      "name": "Auto Shades",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Window Coverings"
      ]
    },
    {
      "author": "csteele",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-auto-off-another-choice-to-automatically-turn-off-devices-after-set-amount-of-time-on/52905",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Automatically turn Off a switch after a delay.",
      "documentationUrl": "https://github.com/HubitatCommunity/Auto_Off/blob/main/README.md",
      "id": "hpm:7ff58c4c-4ee9-4089-a2ff-a178e248bdc2",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/Auto_Off/main/docs/Auto_Off.json",
      "name": "Auto_Off",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Tools & Utilities"
      ]
    },
    {
      "author": "csteele",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-auto-off-another-choice-to-automatically-turn-off-devices-after-set-amount-of-time-on/52905",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Automatically turn Off a switch after a delay.",
      "documentationUrl": "https://github.com/HubitatCommunity/Auto_Off/blob/main/README.md",
      "id": "hpm:130db2f2-69b0-45a6-b27f-1416ea30ee33",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/Auto_Off/main/docs/Auto_OffBundle.json",
      "name": "Auto_Off Bundle",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Evan Callia",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-automatic-timer-app-w-override/134049",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "This app is designed to be used as a timer to automatically turn on/off a switch after a configurable amount of time. Optionally, you may configure an override switch which prevents the timer from running.",
      "documentationUrl": "https://github.com/evcallia/hubitat/blob/main/apps/automatic-timer/README.md",
      "id": "hpm:8df6e5ba-3ccc-485d-8f98-6da9b96c74c6",
      "manifestUrl": "https://raw.githubusercontent.com/evcallia/hubitat/refs/heads/main/apps/automatic-timer/hpm-packageManifest.json",
      "name": "Automatic Timer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Timers"
      ]
    },
    {
      "author": "Gordon Thelander",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-hubitat-automation-map/165524",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Maps which apps use which devices and in what role, with flowcharts of Rule Machine rules and detection of devices controlled by more than one app.",
      "documentationUrl": "https://github.com/GordonThelander/hubitat-automation-map/blob/main/README.md",
      "id": "hpm:09e55dc6-79f7-4c6e-91e6-48ca516b83bf",
      "manifestUrl": "https://raw.githubusercontent.com/GordonThelander/hubitat-automation-map/main/packageManifest.json",
      "name": "Automation Map",
      "observed": {
        "externalHosts": [
          "cdn.jsdelivr.net",
          "cdnjs.cloudflare.com",
          "gordonthelander.github.io",
          "unpkg.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Tools & Utilities"
      ]
    },
    {
      "author": "csteele",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Calculates a Rolling Average of Illuminance, Temperature and Relative Humidity from a set of Omni Sensors into a virtual sensor of your choice.",
      "documentationUrl": "https://github.com/HubitatCommunity/AverageThis/blob/master/README.md",
      "id": "hpm:245d904c-d8a4-4c35-8788-6fb5f8962335",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/AverageThis/master/docs/AverageThis.json",
      "name": "AverageThis",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Energy Monitoring",
        "Monitoring"
      ]
    },
    {
      "author": "Ryan Elliott",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A driver for integrating Bambu Labs 3D printers.",
      "documentationUrl": null,
      "id": "hpm:90f358a4-0d61-48fc-9f74-89e46659c161",
      "manifestUrl": "https://raw.githubusercontent.com/FriedCheese2006/BambuLabs/main/BambuLabsIntegration.json",
      "name": "Bambu Labs Printers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Jamie Curnow",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/bambuddy-driver-for-bambu-3d-printers/163752",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "For monitoring and controlling your Bambu 3D printers through BamBuddy directly from your home automation platform",
      "documentationUrl": "https://github.com/jc21/hubitat-bambuddy",
      "id": "hpm:0903d289-53f7-407a-9654-2a483183b412",
      "manifestUrl": "https://raw.githubusercontent.com/jc21/hubitat-bambuddy/refs/tags/v0.0.3/packageManifest.json",
      "name": "BamBuddy Printers Driver",
      "observed": {
        "externalHosts": [
          "bambuddy.cool",
          "bambuddy.example.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Monitoring"
      ]
    },
    {
      "author": "Mike Maxwell",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Set Device Parameters, manually.",
      "documentationUrl": null,
      "id": "manifest:78cfd13a636721fec87d",
      "manifestUrl": "https://www.hubitatcommunity.com/hpm/BasicZwaveTool.json",
      "name": "Basic Z-Wave tool",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Craig Romei",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Controls a Bathroom Fan Based on humidity and/or time",
      "documentationUrl": null,
      "id": "manifest:5c4dced02fd3a1950244",
      "manifestUrl": "https://raw.githubusercontent.com/napalmcsr/Hubitat_Napalmcsr/master/docs/BathHumidityManifest.json",
      "name": "Bathroom Humidity Fan",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Bathroom",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Kurt Sanders",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Monitors devices with a battery capability and provides a dashboard and alert thresholds.",
      "documentationUrl": "https://github.com/KurtSanders/HubitatPackages/tree/master/resources/apps/Battery%20Level%20Watchert#readme",
      "id": "hpm:49511ba9-436d-4db4-b5ef-fa70a04b7217",
      "manifestUrl": "https://raw.githubusercontent.com/KurtSanders/HubitatPackages/refs/heads/master/resources/apps/Battery%20Level%20Watcher/packageManifest.json",
      "name": "Battery Level Watcher",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Monitoring"
      ]
    },
    {
      "author": "Jdthomas24",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Advanced Hubitat battery monitoring with analytics, trends, and replacement tracking. Auto-discover devices, monitor battery health, track replacements, and receive daily reports.",
      "documentationUrl": null,
      "id": "manifest:ec6c3d0850f41d09b25f",
      "manifestUrl": "https://raw.githubusercontent.com/jdthomas24/Hubitat-Apps/refs/heads/main/Battery%20Monitor%202.0/packageManifest.json",
      "name": "Battery Monitor 2.0",
      "observed": {
        "externalHosts": [
          "cdn.datatables.net",
          "paypal.me"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Monitoring"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Nightly Battery Report",
      "documentationUrl": null,
      "id": "hpm:043333a5-e26b-4ecf-b9d1-bfa1150547a9",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/BatteryMonitor.json",
      "name": "Battery Monitor APP",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Notifications"
      ]
    },
    {
      "author": "Brent Rossow",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-birdweather-puc-driver/163303",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Live bird detection data from a BirdWeather PUC station, exposed as Hubitat device attributes and automation events.",
      "documentationUrl": "https://github.com/brossow/hubitat-drivers/tree/main/birdweather",
      "id": "hpm:16ea4e31-70a2-4ba1-a7cf-498ded5a69f8",
      "manifestUrl": "https://raw.githubusercontent.com/brossow/hubitat-drivers/main/birdweather/packageManifest.json",
      "name": "BirdWeather PUC",
      "observed": {
        "externalHosts": [
          "app.birdweather.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Monitoring",
        "Pets & Animals"
      ]
    },
    {
      "author": "Art Ardolino",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Processes incoming bluetooth beacon data for home automation using a BLE gateway",
      "documentationUrl": null,
      "id": "hpm:7c961c0f-0505-4094-8aa1-519bedcf0bf7",
      "manifestUrl": "https://raw.githubusercontent.com/ajardolino3/hubitat-ble-gateway/main/packageManifest.json",
      "name": "BLE Gateway Manager",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Presence & Location"
      ]
    },
    {
      "author": "RamSet",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Lowers a room's blind at dusk, waits for an open window to close first (with an optional delay), and turns on the room light when occupied. One instance per room.",
      "documentationUrl": null,
      "id": "manifest:9ff118ecc814f5e277dd",
      "manifestUrl": "https://raw.githubusercontent.com/RamSet/hubitat/refs/heads/main/manifest-blinds-dusk.json",
      "name": "Blinds Dusk Automation",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "David Snell",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "This is a set of drivers to use with the Blink API",
      "documentationUrl": null,
      "id": "hpm:a5d111d0-a2be-4c6c-b55a-27cd00fb4666",
      "manifestUrl": "https://www.drdsnell.com/projects/hubitat/drivers/BlinkManifest.json",
      "name": "Blink Drivers",
      "observed": {
        "externalHosts": [
          "api.oauth.blink.com",
          "rest-prod.immedia-semi.com",
          "www.drdsnell.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 9,
        "urlLiteralCount": 133
      },
      "reviewed": [],
      "tags": [
        "Cameras",
        "Cloud",
        "Misc. Devices",
        "Monitoring",
        "Safety & Security"
      ]
    },
    {
      "author": "Simon Burke (sburke781)",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-australian-bureau-of-meteorology-data-radar-images-data-file/82637",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Australia Bureau of Metereology Rain Radar Images Data File",
      "documentationUrl": null,
      "id": "manifest:8a40e3711267025a93fc",
      "manifestUrl": "https://raw.githubusercontent.com/sburke781/hubitat/master/BoMWeather/RadarImages/packageManifest.json",
      "name": "BoM Radar Images Data File",
      "observed": {
        "externalHosts": [
          "ajax.googleapis.com",
          "reg.bom.gov.au"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Weather"
      ]
    },
    {
      "author": "Dominick Meglio",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/support-for-bond-hub/19141",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Allows you to integrate a BOND Home device into your Hubitat system",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-bond/blob/master/README.md",
      "id": "hpm:b25495ec-1f66-4aba-8206-cd9bc754b718",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-bond/master/packageManifest.json",
      "name": "BOND Home Integration",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com",
          "www.paypal.com",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 11,
        "urlLiteralCount": 26
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Bond Bridge",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "bond",
          "name": "Bond Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "IR & RF",
        "LAN"
      ]
    },
    {
      "author": "Andrew Davison",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for Bosch Smart Home devices connected via Zigbee2MQTT Routing.",
      "documentationUrl": "https://github.com/birdslikewires/hubitat/tree/main/bosch",
      "id": "hpm:ec81f802-219f-43dc-adbd-1c86491276ba",
      "manifestUrl": "https://raw.githubusercontent.com/birdslikewires/hubitat/main/bosch/packageManifest.json",
      "name": "Bosch Drivers via Zigbee2MQTT from BirdsLikeWires",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "MQTT",
        "Multi Sensors",
        "Safety & Security",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Bloodtick Jones",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-bose-soundbar-not-soundtouch/159590",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Hubitat Application and Driver to connect your Bose Soundbar Speakers (not SoundTouch) to Hubitat",
      "documentationUrl": null,
      "id": "hpm:04729cda-ca68-4ccd-b520-b700d7580d9b",
      "manifestUrl": "https://raw.githubusercontent.com/bloodtick/Hubitat/main/hubitat-packages/manifests/manifestBoseSoundbarIntegration.json",
      "name": "Bose Soundbar Integration",
      "observed": {
        "externalHosts": [
          "cdn.pixabay.com",
          "www.bose.de",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 15
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups",
        "Cloud",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Rob Alfonso",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Populate all your commands as button devices from the broadlinkgo system",
      "documentationUrl": null,
      "id": "hpm:c5866e67-e888-4ece-9f1c-703032bd4a06",
      "manifestUrl": "https://raw.githubusercontent.com/rob121/hubitat/master/drivers/broadlinkgo/packageManifest.json",
      "name": "Broadlinkgo Multi Device System",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 0
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Broadlink RM Device",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN"
            }
          ],
          "documentation": [],
          "id": "broadlink",
          "name": "Broadlink IR/RF Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "IR & RF"
      ]
    },
    {
      "author": "Kurt Sanders",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-hb-bwa-spamanager/128842",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integrates your internet connected Hot Tub/Spa system with Balboa Cloud Spa Controller into the Hubitat environment.  Use this app/driver version if your SPA can only connect to the cloud based BWA Spa Control app.",
      "documentationUrl": "https://github.com/KurtSanders/HBBWASpaManager/blob/master/README.md",
      "id": "hpm:1c28d98d-56ab-4c54-8346-76cf62844b6e",
      "manifestUrl": "https://raw.githubusercontent.com/KurtSanders/HBBWASpaManager/refs/heads/master/Cloud-Control/packageManifest.json",
      "name": "BWA Spa Manager - Cloud Control",
      "observed": {
        "externalHosts": [
          "www.balboawatergroup.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Pools & Spas",
        "Temperature & Humidity",
        "Water"
      ]
    },
    {
      "author": "Kurt Sanders",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-new-bwa-spa-manager-cloud-control-direct-local-tcp/151421",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integrates your locally connected (Hubitat Hub and SPA must be on the same home network) connected Hot Tub/Spa system (Balboa WiFi controller) into the Hubitat environment.  Use this Hubitat device driver only version to directly TCP connect to the SPA WiFi controller.",
      "documentationUrl": "https://github.com/KurtSanders/HBBWASpaManager/blob/master/README.md",
      "id": "hpm:ebb61aa6-f4d7-47f7-98df-b66bd1a319fc",
      "manifestUrl": "https://raw.githubusercontent.com/KurtSanders/HBBWASpaManager/refs/heads/master/Local-Control/packageManifest.json",
      "name": "BWA Spa Manager - Local TCP Direct Connection Device Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Pools & Spas",
        "Temperature & Humidity",
        "Water"
      ]
    },
    {
      "author": "Brian Wilson",
      "category": "Convenience",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-camect-connect/43837",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Allows you to connect and sync HSM and virtual motion devices with your Camect NVR",
      "documentationUrl": "https://github.com/bdwilson/hubitat/tree/master/Camect/README.md",
      "id": "manifest:1e926794f27111afefd6",
      "manifestUrl": "https://raw.githubusercontent.com/bdwilson/hubitat/master/Camect/packageManifest.json",
      "name": "Camect Connect",
      "observed": {
        "externalHosts": [
          "home.camect.com",
          "local.home.camect.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 14
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Monitoring",
        "Motion Control",
        "Safety & Security"
      ]
    },
    {
      "author": "Jean Bilodeau",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-hyundai-bluelink-remote-start-lock-support-beta/79044",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "This is the package to use the Canadian Hyundai Bluelink facility with Hubitat",
      "documentationUrl": "https://github.com/jbilodea/Hubitat/blob/main/Canadian_Hyundai_Bluelink/README.md",
      "id": "hpm:708fc3a2-bca5-4c6d-a5e0-7f4bd41e3d7e",
      "manifestUrl": "https://raw.githubusercontent.com/jbilodea/Hubitat/main/Canadian_Hyundai_Bluelink/packageManifest.json",
      "name": "Canadian Hyundai Bluelink",
      "observed": {
        "externalHosts": [
          "mybluelink.ca"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 22
      },
      "reviewed": [],
      "tags": [
        "Vehicles & Transportation"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "CentraLite Motion Sensor with presence. CentraLite Model:3326-L,3325,3305,3325-S,3305-S (not for motionv4 motionv5)",
      "documentationUrl": null,
      "id": "manifest:0e158770d6872bbafab3",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/CentraLite_motion_detector.json",
      "name": "CentraLite Motion Detector",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Lights & Switches",
        "Motion Control",
        "Presence & Location",
        "Safety & Security",
        "Temperature & Humidity",
        "Zigbee"
      ]
    },
    {
      "author": "James Shimota",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-centralite-pearl-aka-model-3157100-zigbee-thermostat/164420",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A Zigbee Thermostat driver specific to the Centralite Pearl Thermostat device, (aka Centralite model 3157100). Driver includes FanCirculate feature and accounts for thermostat hardware lack of Auto mode",
      "documentationUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/centralite_pearl_thermostat/README.md",
      "id": "manifest:3e874b873da2ba4628cc",
      "manifestUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/centralite_pearl_thermostat/packageManifest.json",
      "name": "Centralite Pearl Zigbee Thermostat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Dashboards",
        "Driver",
        "Monitoring",
        "Temperature & Humidity",
        "Thermostat",
        "Zigbee"
      ]
    },
    {
      "author": "n3!",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "This driver works with Channels DVR clients. It allows remote control features such as On/Off, Pause, Resume, Stop, Play Channel, mute, etc...",
      "documentationUrl": null,
      "id": "manifest:89d6db3d554553dc04b1",
      "manifestUrl": "https://raw.githubusercontent.com/dmike3/Hubitat/master/hpm/channels_dvr/packageManifest.json",
      "name": "Channels DVR",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "LAN"
      ]
    },
    {
      "author": "Graf Technology, LLC",
      "category": "Notifications",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A Hubitat driver that sends SMS notifications via the ClearlyIP Unity SMS API.",
      "documentationUrl": "https://github.com/graftechnology/hubitat-clearlyip-sms-notification-driver",
      "id": "hpm:53a1d07e-6e24-4637-b5d1-7782f38076d0",
      "manifestUrl": "https://raw.githubusercontent.com/graftechnology/hubitat-clearlyip-sms-notification-driver/main/packageManifest.json",
      "name": "ClearlyIP SMS Notification Driver",
      "observed": {
        "externalHosts": [
          "unity.clearlyip.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Notifications"
      ]
    },
    {
      "author": "Robert Morris",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-cocohue-hue-bridge-integration-including-scenes/27978",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Community-created Hue Bridge inegration for lights, groups, and scenes",
      "documentationUrl": null,
      "id": "manifest:36111776ff7d14f571dd",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/CoCoHue/master/packageManifest.json",
      "name": "CoCoHue (Hue Bridge Integration)",
      "observed": {
        "externalHosts": [
          "developers.meethue.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 11,
        "urlLiteralCount": 38
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Philips Hue Bridge",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "cocohue",
          "name": "CoCoHue",
          "status": "VERIFIED_CORE"
        }
      ],
      "tags": [
        "LAN",
        "Lights & Switches"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Monitors Weather and alerts various types of Alerts via different color lights",
      "documentationUrl": null,
      "id": "hpm:559a5ccc-d003-4a76-babb-bd565d6fa983",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/ColorCastWeather.json",
      "name": "Color Cast Weather",
      "observed": {
        "externalHosts": [
          "api.forecast.io",
          "api.openweathermap.org",
          "apps.shiftedpixel.com",
          "openweathermap.org",
          "www.washingtonpost.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Notifications"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Coordinates color changes from one switch to other switches",
      "documentationUrl": null,
      "id": "hpm:e0399d63-5dc9-479a-a78d-e88ef39155d7",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/ColorCoord.json",
      "name": "Color Coordinator",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Joel Wetzel",
      "category": "Security",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-combined-presence",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Combine two or more presence sensors to control an output Virtual Presence Sensor.",
      "documentationUrl": "https://github.com/joelwetzel/Hubitat-Combined-Presence",
      "id": "manifest:9ee83d4219dc409631fb",
      "manifestUrl": "https://raw.githubusercontent.com/joelwetzel/Hubitat-Combined-Presence/master/packageManifest.json",
      "name": "Combined Presence",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Presence & Location",
        "Safety & Security"
      ]
    },
    {
      "author": "Ephrayim (evdev)",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Expose a switch-controlled maglock or electric strike as a Hubitat lock.",
      "documentationUrl": "https://github.com/evdev/hubitat-commercial-lock",
      "id": "hpm:4182ea59-5bb0-4145-b1b5-aa21de765a76",
      "manifestUrl": "https://raw.githubusercontent.com/evdev/hubitat-commercial-lock/main/packageManifest.json",
      "name": "Commercial Lock",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Doors & Windows",
        "Locks"
      ]
    },
    {
      "author": "Ernie Miller",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-companion-cube-toy-app-for-aqara-cube/56924",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Improve your quality of life with a faithful Companion (Aqara) Cube!",
      "documentationUrl": null,
      "id": "hpm:1e9d34f4-4408-48f9-a1b3-03769637c581",
      "manifestUrl": "https://raw.githubusercontent.com/ernie/hubitat/main/apps/companion-cube/packageManifest.json",
      "name": "Companion Cube",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Lights & Switches",
        "Misc Devices",
        "Multimedia",
        "Zigbee"
      ]
    },
    {
      "author": "jlslate",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Pools one or more real devices of the same type (water, lock, door, window, smoke, motion, garage door, temperature, humidity, or illuminance) into a single virtual device. By jlslate.",
      "documentationUrl": "https://github.com/jlslate/Composite-Device",
      "id": "manifest:b61559bca5e77eb38c28",
      "manifestUrl": "https://raw.githubusercontent.com/jlslate/Composite-Device/main/packageManifest.json",
      "name": "Composite Device",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Multi Sensors"
      ]
    },
    {
      "author": "Justin Leonard",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Serve images from hub based upon conditions",
      "documentationUrl": null,
      "id": "manifest:cdc959eb77d4f41d4e90",
      "manifestUrl": "https://raw.githubusercontent.com/lnjustin/Conditional-Image-Server/master/packageManifest.json",
      "name": "Conditional Image Server",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Multimedia",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Dale Coghlan",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Mirrors a contact sensor to a virtual motion sensor",
      "documentationUrl": "https://github.com/dcoghlan/hubitat/tree/main/Contact2Motion",
      "id": "hpm:b35ea802-435c-41f7-b9de-9ec0a02a312a",
      "manifestUrl": "https://raw.githubusercontent.com/dcoghlan/hubitat/main/Contact2Motion/packageManifest.json",
      "name": "Contact2Motion",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Monitoring",
        "Motion Control",
        "Multi Sensors"
      ]
    },
    {
      "author": "Mike Bishop",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Combines motion sensors, contact sensors that define a boundary, and contact sensors that reflect presence to power a virtual motion sensor.",
      "documentationUrl": null,
      "id": "hpm:1c64629d-03f7-4550-87a2-117aa0202cf2",
      "manifestUrl": "https://raw.githubusercontent.com/MikeBishop/hpm-intermediate/main/contained-motion.json",
      "name": "Contained Motion Zones",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Motion Control"
      ]
    },
    {
      "author": "VH",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "ControlID - Driver to Control the SecBox of ControlID, and functions to operate remotely the ControlID device",
      "documentationUrl": null,
      "id": "hpm:5d70a1ee-59e5-492f-9203-c8cd00752558",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_ControlID/refs/heads/master/packageManifest.json",
      "name": "Control ID - Controller",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Doors & Windows",
        "Garage Doors",
        "Locks"
      ]
    },
    {
      "author": "VH",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Controlart - 7Port - AC via IRWeb usando o banco de dados IR.",
      "documentationUrl": "https://github.com/hhorigian/hubitat_Controlart_7Port/tree/main/AC/IRWeb%20Version",
      "id": "hpm:5cf48c43-5376-495c-ae92-ba62e5f54374",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_Controlart_7Port/refs/heads/main/AC/IRWeb%20Version/packageManifest.json",
      "name": "Controlart - 7Port AC (irweb)",
      "observed": {
        "externalHosts": [
          "ir.molsmart.com.br"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "VH",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Controlart - 7Port - TV via IRWeb usando o banco de dados IR.",
      "documentationUrl": null,
      "id": "hpm:54e8eb3b-d49e-4dd9-9b9e-0fb352a69a6a",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_Controlart_7Port/refs/heads/main/TV%20e%20Som/IRWeb%20Version/packageManifest.json",
      "name": "Controlart - 7Port TV (irweb)",
      "observed": {
        "externalHosts": [
          "ir.molsmart.com.br"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "IR & RF",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "TRATO",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Controlart - Ethernet Relay Module Drivers (10 outputs, 12 inputs)",
      "documentationUrl": "https://github.com/hhorigian/Controlart_Relays",
      "id": "hpm:e89badd6-2f68-4fd3-b5af-44b6e72d56b3",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/Controlart_Relays/main/packageManifest.json",
      "name": "Controlart - Ethernet Relay Module",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Joel Wetzel",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-cooper-eaton-aspire-rfwc5-keypad-driver-for-hubitat",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for the Cooper Aspire RFWC5 Scene Controller.",
      "documentationUrl": "https://github.com/joelwetzel/Hubitat-Cooper-Aspire-Scene-Controller",
      "id": "manifest:ca561de958c6571a48f9",
      "manifestUrl": "https://raw.githubusercontent.com/joelwetzel/Hubitat-Cooper-Aspire-Scene-Controller/master/packageManifest.json",
      "name": "Cooper Aspire RFWC5 Scene Controller Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Lights & Switches"
      ]
    },
    {
      "author": "Armand Welsh",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A simple countdown timer device that is designed to integrate well with SharpTools",
      "documentationUrl": null,
      "id": "hpm:7ca01f5b-02b5-4ce4-a77c-0067661eb91a",
      "manifestUrl": "https://raw.githubusercontent.com/apwelsh/hubitat/master/devices/packageManifest.json",
      "name": "Countdown Timer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Timers"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "CSV Visualization - Local graphing of CSV files uitlizing the chart.js library",
      "documentationUrl": null,
      "id": "hpm:e4856d8f-faa8-4d85-9772-72901167fef6",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/csvVisualManifest.json",
      "name": "CSV Visualization",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "My ct100 Thermatat device handler originally written for smartthings",
      "documentationUrl": null,
      "id": "hpm:cb0d39b6-8296-47ed-b12f-ca52a053a652",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/MyCT100.json",
      "name": "Ct100 Thermastat Device Handler",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Climate Control"
      ]
    },
    {
      "author": "Bloodtick Jones",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/run-dual-internet-providers-at-home/149109",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Hubitat Driver to integrate with Cudy Router R700. Runs local but will query internet for external IPv4",
      "documentationUrl": null,
      "id": "hpm:ce86d253-f10a-4d12-b430-778e6768c2bf",
      "manifestUrl": "https://raw.githubusercontent.com/bloodtick/Hubitat/main/hubitat-packages/manifests/manifestCudyRouterR700.json",
      "name": "Cudy Router R700",
      "observed": {
        "externalHosts": [
          "checkip.amazonaws.com",
          "en.wikipedia.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Monitoring",
        "Notifications",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Application allows for the addition of custom notes to devices in the Data section under the Device Details on the device page.",
      "documentationUrl": null,
      "id": "hpm:be3bd1e2-30c4-4b11-a276-5ea0c166f5f0",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/custDevNoteManifest.json",
      "name": "Custom Device Note",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "mclass",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": null,
      "documentationUrl": "https://github.com/Mclass294/Hubitat-Daikin-BRP084/blob/main/README.md",
      "id": "manifest:1ab0adb179210443a10c",
      "manifestUrl": "https://raw.githubusercontent.com/Mclass294/Hubitat-Daikin-BRP084/main/packageManifest.json",
      "name": "Daikin BRP084 Local Controller",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "App uses a simple text file as input to generate daily reminder notices.",
      "documentationUrl": null,
      "id": "hpm:20ec27d1-afff-4736-be9f-837e0913c7a2",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/dlyReminderManifest.json",
      "name": "Daily Reminder",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "jlslate",
      "category": "Security",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for the Zigbee Danalock V3-BTZB/V3-BTZBE. Hubitat ships a Danalock driver for Z-Wave but none for Zigbee, so the Zigbee model falls back to Generic Zigbee Lock (no keypad), which decodes the Door Lock cluster's Operating Event Notification backwards and reports every manual turn as its opposite. By jlslate.",
      "documentationUrl": "https://github.com/jlslate/Hubitat-Danalock-Zigbee",
      "id": "hpm:FAC18257-5A9B-4327-9CD8-75AB28E94CB1",
      "manifestUrl": "https://raw.githubusercontent.com/jlslate/Hubitat-Danalock-Zigbee/main/packageManifest.json",
      "name": "Danalock V3-BTZB Zigbee Lock",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "jlslate",
        "Locks",
        "Safety & Security",
        "Zigbee"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Provides integration with the Danfoss Ally Thermostats and Room Sensors.",
      "documentationUrl": null,
      "id": "hpm:b81ff898-9642-45e0-a750-36ce50a43ce6",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/danfossAllyManifest.json",
      "name": "Danfoss Ally Master",
      "observed": {
        "externalHosts": [
          "api.danfoss.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Matthew Scott",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-darksky-net-weather-driver-no-pws-required/22699",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "DarkSky.net-Weather-Driver",
      "documentationUrl": "https://github.com/HubitatCommunity/DarkSky.net-Weather-Driver/wiki/Welcome-to-the-DarkSky.net-Weather-Driver-wiki!",
      "id": "manifest:fdb430237f436bf1f3c0",
      "manifestUrl": "https://raw.githubusercontent.com/Scottma61/Hubitat/master/docs/DS_packageManifest.json",
      "name": "DarkSky.net-Weather-Driver",
      "observed": {
        "externalHosts": [
          "alerts.weather.gov",
          "api.darksky.net",
          "api.sunrise-sunset.org",
          "darksky.net",
          "hubitatcommunity.github.io",
          "tinyurl.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 27
      },
      "reviewed": [],
      "tags": [
        "Weather"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "This is a psuedo Global Variable Connector that works with RM or webCoRE to provide a bi-directional interface to the Variable Tile.  Was written primarily to give webCoRE users a method of working with the variable tile without requiring the creation of an RM global variable and connector.",
      "documentationUrl": null,
      "id": "hpm:92d8e87a-595e-479c-8dca-59a9d0925eb6",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/dashVariableManifest.json",
      "name": "Dashboard Variable Device",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Misc. Devices"
      ]
    },
    {
      "author": "Dan Danache (@agamemnon.dandanache)",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/zigbee-visual-render-for-getchildandrouteinfo/119074",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Allows you to add custom widgets to Hubitat dashboards.",
      "documentationUrl": "https://codeberg.org/dan-danache/hubitat/src/branch/main/dashboard-widgets-driver/README.md",
      "id": "hpm:4e07f242-914a-41c3-914d-3aba4fcc4540",
      "manifestUrl": "https://codeberg.org/dan-danache/hubitat/raw/branch/main/dashboard-widgets-driver/packageManifest.json",
      "name": "Dashboard Widgets",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Tools & Utilities"
      ]
    },
    {
      "author": "James Shimota",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/alpha-release-date-time-parser-driver/87756/9",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A virtual device driver that seperates out date and time components into chunks.  Useful for check day of the week, hour of the day etc. in rules",
      "documentationUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/datetime_parser/README.md",
      "id": "manifest:9c0af0518852b6565165",
      "manifestUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/datetime_parser/packageManifest.json",
      "name": "Date & Time Parser",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Date",
        "Misc. Devices",
        "Timers",
        "Virtual"
      ]
    },
    {
      "author": "Neil Jackson",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A driver for your dd-wrt router, to perform reboot.",
      "documentationUrl": null,
      "id": "hpm:4176830c-0477-4693-a06d-e0f4e77dd08a",
      "manifestUrl": "https://raw.githubusercontent.com/neiljackson1984/SmartThingsNeil/master/packages/ddwrt-router-driver/build/package_manifest.json",
      "name": "ddwrt-router-driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "pentalingual",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Use the weather to schedule your irrigation",
      "documentationUrl": null,
      "id": "hpm:b8331bb0-8fc8-4a17-a5ef-e3e79cf4e157",
      "manifestUrl": "https://raw.githubusercontent.com/pentalingual/Hubitat/master/Irrigation/packageManifest.json",
      "name": "Degree Days Irrigation Timer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Irrigation",
        "Water",
        "Weather"
      ]
    },
    {
      "author": "DarwinsDen",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Electricity demand management for those with utility companies that levy demand charges. Monitor 30/60 minute demand usage and control devices to reduce peak peak demand costs.",
      "documentationUrl": "https://darwinsden.com/demand/",
      "id": "manifest:e71f6127313d4bf6c1a0",
      "manifestUrl": "https://raw.githubusercontent.com/DarwinsDen/Demand-Manager/main/packageManifest.json",
      "name": "Demand Manager",
      "observed": {
        "externalHosts": [
          "app.gogriddy.com",
          "cdn.device-icons.smartthings.com",
          "darwinsden.com",
          "hourlypricing.comed.com",
          "rawgit.com",
          "www.paypal.com",
          "www.paypalobjects.com",
          "www.surveymonkey.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 40
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Energy Monitoring"
      ]
    },
    {
      "author": "Dominick Meglio",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-denon-heos-integration/32710",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Integrates Denon HEOS Speakers into your Hubitat system",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-heos/blob/master/README.md",
      "id": "hpm:675bd4a8-4f4d-43e8-9cae-9c2d4f096da7",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-heos/master/packageManifest.json",
      "name": "Denon HEOS Integration",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com",
          "www.paypal.com",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Multimedia",
        "Speakers"
      ]
    },
    {
      "author": "Robert Morris",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Configure automatic notifications for inactive (no activity within specified period) devices",
      "documentationUrl": null,
      "id": "manifest:0ce8c1e1e2186983c649",
      "manifestUrl": "https://raw.githubusercontent.com/RMoRobert/Hubitat/master/apps/DeviceActivityCheck/packageManifest.json",
      "name": "Device Activity Check",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Notifications",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/early-beta-device-attribute-iterative-storage-rrd/139786",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Maintains a set number of iterations of attribute and computed min/max/avg values in the Hubitat Local File Manager.",
      "documentationUrl": null,
      "id": "hpm:dbafc780-234d-4ef8-b01e-62b639559bd1",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/devAttIterStoManifest.json",
      "name": "Device Attribute Iterative Storage",
      "observed": {
        "externalHosts": [
          "code.iconify.design"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Quick Editor for the items in the Data area on the Device Page.  Also permits the addition of new items into the data section.",
      "documentationUrl": null,
      "id": "hpm:5666d457-3fe4-4b56-aff7-b0b42a18e6c7",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/devDataEdtManifest.json",
      "name": "Device Data Editor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Provides a mechanism for displaying data item values across multiple devices.",
      "documentationUrl": null,
      "id": "hpm:a00635c2-21fe-41f5-bb8a-5cf146f0b129",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/devDatDManifest.json",
      "name": "Device Data Item Display",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Simple application that displays the capabilities, attributes (summary and detail, commands (summary and detail) and device data for devices selected.  Allows for the quick comparison of multiple devices.",
      "documentationUrl": null,
      "id": "hpm:70b5f419-c511-4614-811d-f90b302a3d8a",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/devCharManifest.json",
      "name": "Device Details Display",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Misc. Devices"
      ]
    },
    {
      "author": "Dominick Meglio",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Allows you to group contact sensors into a single device",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-contactgroups/blob/master/README.md",
      "id": "hpm:7b6fa6d3-c746-436f-a3cf-a85336e1f1be",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-contactgroups/master/packageManifest.json",
      "name": "Device Groups",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com",
          "www.paypal.com",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 28
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups"
      ]
    },
    {
      "author": "Jdthomas24",
      "category": "Utility",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Monitor device check-in health across Zigbee, Z-Wave, Matter, Hub Mesh, LAN, Virtual and Hub Variable - learns each device's normal pattern and alerts you when something goes quiet.",
      "documentationUrl": null,
      "id": "manifest:b02e9c2e9e6f56c819a0",
      "manifestUrl": "https://raw.githubusercontent.com/jdthomas24/Hubitat-Apps-Drivers/refs/heads/main/Device%20Health%20Monitor/packageManifest.json",
      "name": "Device Health Monitor",
      "observed": {
        "externalHosts": [
          "cdn.datatables.net",
          "paypal.me"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Matter",
        "Zigbee",
        "ZWave"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/project-alpha-device-health-status/111817",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Device Health Status - app for Hubitat Elevation hub",
      "documentationUrl": "https://community.hubitat.com/t/project-alpha-device-health-status/111817/3?u=kkossev",
      "id": "hpm:8c11f83d-3fa8-4843-bf02-d7652089c952",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Apps/packageManifest_DeviceHealthStatus.json",
      "name": "Device Health Status",
      "observed": {
        "externalHosts": [
          "cdn.datatables.net",
          "code.iconify.design"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Terrel Allen",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-device-mirror-plus/80314",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Replicate device commands not only for Switches, but also  Motion, Contact, Humidity, and Temperature Sensors",
      "documentationUrl": "https://github.com/terrelsa13/Device-Mirror-Plus/blob/master/README.md",
      "id": "hpm:ac1efd83-9d77-49ff-9336-6040658cd7a0",
      "manifestUrl": "https://raw.githubusercontent.com/terrelsa13/Device-Mirror-Plus/master/packageManifest.json",
      "name": "Device Mirror Plus",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Doors & Windows",
        "Multi Sensors",
        "Presence & Location",
        "Temperature & Humidity",
        "Tools & Utilities",
        "Zigbee",
        "ZWave"
      ]
    },
    {
      "author": "Robert Morris",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Receive TTS announcements or notifications for devices (locks, contact sensors, etc.) in undesired states at specifc time or on demand",
      "documentationUrl": null,
      "id": "manifest:995622bf5e9c99234f17",
      "manifestUrl": "https://raw.githubusercontent.com/RMoRobert/Hubitat/master/apps/DeviceStatusAnnouncer/packageManifest.json",
      "name": "Device Status Announcer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Doors & Windows",
        "Locks",
        "Monitoring",
        "Notifications",
        "Safety & Security",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Scott Wade",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Keep an eye on device temperature reporting",
      "documentationUrl": null,
      "id": "hpm:94cf3239-d2e8-46a6-802f-567b53305802",
      "manifestUrl": "https://raw.githubusercontent.com/DolFan81/hubitat-packages/refs/heads/main/dtcManifest.json",
      "name": "Device Temperature Check",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Notifications",
        "Temperature & Humidity",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "App to make multiple dimmers follow one main dimmer",
      "documentationUrl": null,
      "id": "hpm:6c8fd90c-82f6-443a-bbe4-0b62631d6b57",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/DimWithMe.json",
      "name": "Dim with Me",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with most dimable led and CT Bulbs",
      "documentationUrl": null,
      "id": "manifest:d7e63a62e9959c70884c",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/dimable_ct_bulbs.json",
      "name": "Dimable CT Bulb driver - Zigbee",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Misc. Devices",
        "Presence & Location",
        "Zigbee"
      ]
    },
    {
      "author": "Robert Morris",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Easily configure button devices to control bulbs/dimmers",
      "documentationUrl": null,
      "id": "manifest:57f914089aaaaf51ec95",
      "manifestUrl": "https://raw.githubusercontent.com/RMoRobert/Hubitat/master/apps/DimmerButtonController/packageManifest.json",
      "name": "Dimmer Button Controller",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [
        {
          "dependencies": [],
          "documentation": [],
          "id": "button-controller",
          "name": "Button Controller",
          "status": "OFFICIAL_DOC_VERIFIED"
        }
      ],
      "tags": [
        "Buttons",
        "Lights & Switches"
      ]
    },
    {
      "author": "Joel Wetzel",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-dimmer-minimums",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Enforce minimum dimming levels for smart dimmers that don't support it natively in their firmware.",
      "documentationUrl": "https://github.com/joelwetzel/Hubitat-Dimmer-Minimums",
      "id": "manifest:de59c69873525a766a8d",
      "manifestUrl": "https://raw.githubusercontent.com/joelwetzel/Hubitat-Dimmer-Minimums/master/packageManifest.json",
      "name": "Dimmer Minimums",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "rnoia",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Local direct IP-based control of DirecTV Genie-based DVR and receivers",
      "documentationUrl": "https://github.com/rnoia/DirecTV-IP-Control-for-Hubitat/blob/main/README.md",
      "id": "hpm:cd499347-96ed-4866-82ee-46bf4334c616",
      "manifestUrl": "https://raw.githubusercontent.com/rnoia/DirecTV-IP-Control-for-Hubitat/main/PackageManifest.json",
      "name": "DirecTV IP-based control",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Multimedia"
      ]
    },
    {
      "author": "Chris Ogden",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Sends scheduled heartbeat pings to Dead Man's Snitch to confirm that the Hubitat hub and internet connection are alive.",
      "documentationUrl": null,
      "id": "manifest:85fe16067661b343a851",
      "manifestUrl": "https://raw.githubusercontent.com/spinrag/hubitat/main/dmsMonitor/packageManifest.json",
      "name": "DMS Monitor (Dead Man's Snitch)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Chris Ogden",
      "category": null,
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Updates a DNS Made Easy A record with your public IP using Hubitat.",
      "documentationUrl": null,
      "id": "manifest:12830ce1364c3298546e",
      "manifestUrl": "https://raw.githubusercontent.com/spinrag/hubitat/main/dnsMadeEasyUpdater/packageManifest.json",
      "name": "DNS Made Easy Updater",
      "observed": {
        "externalHosts": [
          "api.ipify.org",
          "cp.dnsmadeeasy.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Andrew Nunes",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Set up custom sounds to trigger when doors are opened; anytime, only during certain Modes, or based on HSM Status",
      "documentationUrl": null,
      "id": "hpm:77d70c86-930d-4bdb-82d9-94147168d089",
      "manifestUrl": "https://raw.githubusercontent.com/pentalingual/Hubitat/main/Chime/packageManifest.json",
      "name": "Door Chime",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Doors & Windows",
        "Notifications"
      ]
    },
    {
      "author": "Joel Wetzel",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Double tap on your dimmers to bring them to max/min brightness.",
      "documentationUrl": "https://github.com/joelwetzel/DoubleTapToTheMax",
      "id": "manifest:ef5cbde037060d910b10",
      "manifestUrl": "https://raw.githubusercontent.com/joelwetzel/DoubleTapToTheMax/main/packageManifest.json",
      "name": "Double Tap to the Max",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "classic-dave",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/beta-dreo-fan-integration-cloud/165215",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Cloud control of Dreo fans, air circulators, air purifiers, ceiling fans and humidifiers. Installs the Dreo Integration app plus a minimal driver that works with any Dreo device; tick the optional drivers for the devices you actually own.",
      "documentationUrl": "https://github.com/classic-dave/hubitat-dreo/blob/main/README.md",
      "id": "manifest:02c0627b6271b0d05383",
      "manifestUrl": "https://raw.githubusercontent.com/classic-dave/hubitat-dreo/main/packageManifest.json",
      "name": "Dreo Integration",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Climate Control",
        "Cloud"
      ]
    },
    {
      "author": "Justin Leonard",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Switch Dashboard Background Image based on configured conditions",
      "documentationUrl": null,
      "id": "manifest:65f70376bec886d69e80",
      "manifestUrl": "https://raw.githubusercontent.com/lnjustin/Dynamic-Image-Switcher/main/packageManifest.json",
      "name": "Dynamic Image Switcher",
      "observed": {
        "externalHosts": [
          "calendarific.com",
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Multimedia",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Kurt Sanders",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Provides local network WiFi integration to a Dywarmic Towel Warmer.",
      "documentationUrl": "https://github.com/KurtSanders/Hubitat-Dywarmic-Integration/tree/main?tab=readme-ov-file#hubitat-dywarmic-integration",
      "id": "hpm:ea1bd527-214b-4a03-ac9e-8ef3c6e6fb34",
      "manifestUrl": "https://raw.githubusercontent.com/KurtSanders/Hubitat-Dywarmic-Integration/refs/heads/main/packageManifest.json",
      "name": "Dywarmic Towel Warmer Integration",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Bathroom",
        "Monitoring",
        "Pools & Spas",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Anthony S.",
      "category": "Notifications",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-echo-speaks-v4/68843",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integrate your Amazon Echo devices into your Hubitat environment to create virtual Echo Devices. These virtual devices will allow you to speak text, make announcements, control media playback including volume, and many other Alexa features.",
      "documentationUrl": "https://tonesto7.github.io/echo-speaks-docs",
      "id": "manifest:3da27e450b5f29fb2f9a",
      "manifestUrl": "https://raw.githubusercontent.com/tonesto7/echo-speaks/master/packageManifest.json",
      "name": "Echo Speaks",
      "observed": {
        "externalHosts": [
          "cdn.jsdelivr.net",
          "cdnjs.cloudflare.com",
          "dashboard.heroku.com",
          "developer.amazon.com",
          "echo-speaks-metrics.firebaseio.com",
          "echospeaks-config.firebaseio.com",
          "fonts.googleapis.com",
          "heroku.com",
          "m.media-amazon.com",
          "maxcdn.bootstrapcdn.com",
          "s3.amazonaws.com",
          "tonesto7.github.io",
          "topvoiceapps.com",
          "use.fontawesome.com",
          "www.herokucdn.com",
          "www.paypal.com",
          "www.youtube.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 109
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Amazon Alexa Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "echo-speaks",
          "name": "Echo Speaks",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Automations & Groups",
        "Integrations",
        "Misc. Devices",
        "Multimedia",
        "Notifications",
        "Safety & Security",
        "Speakers",
        "Timers",
        "Tools & Utilities",
        "Voice Assistants"
      ]
    },
    {
      "author": "Anthony S.",
      "category": "Notifications",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/beta-echo-speaks-v4/66503",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integrate your Amazon Echo devices into your Hubitat environment to create virtual Echo Devices. These virtual devices will allow you to speak text, make announcements, control media playback including volume, and many other Alexa features.",
      "documentationUrl": "https://tonesto7.github.io/echo-speaks-docs",
      "id": "manifest:13cb0158dbbd753102d5",
      "manifestUrl": "https://raw.githubusercontent.com/tonesto7/echo-speaks/beta/packageManifestBeta.json",
      "name": "Echo Speaks (BETA)",
      "observed": {
        "externalHosts": [
          "cdn.jsdelivr.net",
          "cdnjs.cloudflare.com",
          "dashboard.heroku.com",
          "developer.amazon.com",
          "echo-speaks-metrics.firebaseio.com",
          "echospeaks-config.firebaseio.com",
          "fonts.googleapis.com",
          "heroku.com",
          "m.media-amazon.com",
          "maxcdn.bootstrapcdn.com",
          "s3.amazonaws.com",
          "tonesto7.github.io",
          "topvoiceapps.com",
          "use.fontawesome.com",
          "www.herokucdn.com",
          "www.paypal.com",
          "www.youtube.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 109
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Amazon Alexa Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "echo-speaks",
          "name": "Echo Speaks",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Automations & Groups",
        "Integrations",
        "Misc. Devices",
        "Multimedia",
        "Notifications",
        "Safety & Security",
        "Speakers",
        "Timers",
        "Tools & Utilities",
        "Voice Assistants"
      ]
    },
    {
      "author": "RamSet",
      "category": "Thermostats",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control an ecobee thermostat 100% locally over the HomeKit Accessory Protocol (HAP) - no cloud, no Apple hardware, no bridge. In-driver pairing, mode/setpoints/humidity/operating state, remote room sensors as child devices, and real-time HomeKit event push.",
      "documentationUrl": null,
      "id": "manifest:fb397ab77d315ceda3b2",
      "manifestUrl": "https://raw.githubusercontent.com/RamSet/hubitat/refs/heads/main/manifest-ecobee-hap.json",
      "name": "Ecobee HAP Thermostat (Local)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "ecobee Thermostat",
              "runtimeCriticality": "RUNTIME",
              "transport": "HOMEKIT_HAP_LAN"
            }
          ],
          "documentation": [],
          "id": "ecobee-local-hap",
          "name": "Ecobee No Cloud HAP Thermostat",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": []
    },
    {
      "author": "Barry A. Burke",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-universal-ecobee-suite-version-1-8-01/34839/796",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Ecobee Suite integrates Ecobee thermostats and sensors with Hubitat (and SmartThings)",
      "documentationUrl": null,
      "id": "manifest:cbfcd88075ab8eede0e6",
      "manifestUrl": "https://raw.githubusercontent.com/SANdood/Ecobee-Suite/master/packageManifest.json",
      "name": "Ecobee Suite",
      "observed": {
        "externalHosts": [
          "api.ecobee.com",
          "cloud.hubitat.com",
          "developer.ecobee.com",
          "en.wikipedia.org",
          "getsatisfaction.com",
          "s3.amazonaws.com",
          "www.paypal.com",
          "www.wunderground.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 17,
        "urlLiteralCount": 202
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "ecobee Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "HTTPS_API"
            }
          ],
          "documentation": [],
          "id": "ecobee-suite",
          "name": "Ecobee Suite Manager",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": []
    },
    {
      "author": "Aaron Ward",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Swaps Open/Close messages in the driver.",
      "documentationUrl": null,
      "id": "manifest:939609c8e3cc8ad9b9dd",
      "manifestUrl": "https://raw.githubusercontent.com/PrayerfulDrop/Hubitat/master/drivers/eco.json",
      "name": "EcoLink Contact Sensor Custom",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Simon Burke",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/re-release-ecowitt-gateway-drivers/78492",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Ecowitt Wifi Gateway driver for Hubitat Elevation",
      "documentationUrl": "https://github.com/sburke781/ecowitt/blob/main/readme.md",
      "id": "manifest:e8ac11575c661d3fe28d",
      "manifestUrl": "https://raw.githubusercontent.com/sburke781/ecowitt/main/packageManifest.json",
      "name": "Ecowitt WiFi Gateway",
      "observed": {
        "externalHosts": [
          "8.8.8.8",
          "carnotcycle.wordpress.com",
          "en.wikipedia.org",
          "keisan.casio.com",
          "web.archive.org",
          "www.advancedconverter.com",
          "www.vcalc.com"
        ],
        "lanPrimitives": [
          "PARSE_LAN_MESSAGE"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 25
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Ecowitt Gateway",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_HTTP"
            }
          ],
          "documentation": [],
          "id": "ecowitt",
          "name": "EcoWitt / Wittboy Integration",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Irrigation",
        "LAN",
        "Monitoring",
        "Temperature & Humidity",
        "Water",
        "Weather"
      ]
    },
    {
      "author": "Amos Yuen",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-eight-sleep-community/60913/18",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Connect your Eight Sleep Mattress",
      "documentationUrl": "https://github.com/amosyuen/hubitat/blob/main/eightsleep/README.md",
      "id": "manifest:f9809086fb716e794c70",
      "manifestUrl": "https://raw.githubusercontent.com/amosyuen/hubitat/main/eightsleep/packageManifest.json",
      "name": "Eight Sleep (Connect)",
      "observed": {
        "externalHosts": [
          "client-api.8slp.net"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Misc. Devices",
        "Presence & Location",
        "Sleep"
      ]
    },
    {
      "author": "Kestutis Triponis",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Allows integrating Elgato devices into your Hubitat system",
      "documentationUrl": null,
      "id": "hpm:43a40f32-0133-4c2f-8207-41365a083dda",
      "manifestUrl": "https://raw.githubusercontent.com/ktriponis/hubitat-elgato/main/packageManifest.json",
      "name": "Elgato Integrations",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "ke7lvb",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat driver for Emporia Vue energy meter",
      "documentationUrl": null,
      "id": "hpm:7a8cd4f2-0eef-4f17-a8d7-b84d0b72069c",
      "manifestUrl": "https://raw.githubusercontent.com/ke7lvb/Emporia-Vue-Hubitat/refs/heads/main/packageManifest.json",
      "name": "Emporia Vue v2 - Hubitat",
      "observed": {
        "externalHosts": [
          "api.emporiaenergy.com",
          "cognito-idp.us-east-2.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring"
      ]
    },
    {
      "author": "Dan Danache (@dandanache)",
      "category": "Utility",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-ems-esp-gateway/150098",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Control your boiler using an EMS-ESP Gateway.",
      "documentationUrl": "https://codeberg.org/dan-danache/hubitat/src/branch/main/ems-esp-driver/README.md",
      "id": "hpm:f59b9884-f802-4eff-9aaf-e018e9ee55ed",
      "manifestUrl": "https://codeberg.org/dan-danache/hubitat/raw/branch/main/ems-esp-driver/packageManifest.json",
      "name": "EMS-ESP Gateway",
      "observed": {
        "externalHosts": [
          "codeberg.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 15
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "LAN"
      ]
    },
    {
      "author": "Ryan Elliott",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-energy-calculator-plus/108660",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "An app for calculating energy costs",
      "documentationUrl": null,
      "id": "hpm:2a37cfa8-606b-4858-942c-aa72938dfa84",
      "manifestUrl": "https://raw.githubusercontent.com/FriedCheese2006/EnergyCalculatorPlus/main/EnergyCalculatorPlus.json",
      "name": "Energy Cost Calculator",
      "observed": {
        "externalHosts": [
          "cdn.datatables.net",
          "code.iconify.design"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Monitoring",
        "Tools & Utilities",
        "Utility"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Enerwave Zw15sm zwave and zwave plus high amp energy monitoring switch device handler",
      "documentationUrl": null,
      "id": "hpm:abfa31aa-1322-42b2-82e1-908b7407d589",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/ZW15SM.json",
      "name": "Enerwave ZW15SM high amperage switch device handler",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Energy Monitoring",
        "Lights & Switches"
      ]
    },
    {
      "author": "Derek Osborn",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-enhanced-weather-underground-driver/54141",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Enhanced Wunderground Driver with auto switching of the detailed forecast from Day to Night, Web hosted Weather Icons and more data fields for your automations",
      "documentationUrl": null,
      "id": "manifest:1e9ce8adf69c8e2dba37",
      "manifestUrl": "https://raw.githubusercontent.com/dJOS1475/Hubitat_WU_Driver/main/packageManifest.json",
      "name": "Enhanced Weather Underground Driver",
      "observed": {
        "externalHosts": [
          "api.weather.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Weather"
      ]
    },
    {
      "author": "nh.schottfam",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/enphase-solar-monitoring/6241/8",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Monitor enPhase Solar Production for Hubitat",
      "documentationUrl": null,
      "id": "manifest:596fe525858de797502d",
      "manifestUrl": "https://raw.githubusercontent.com/imnotbob/EnvoyHE/master/packageManager.json",
      "name": "Enphase Solar",
      "observed": {
        "externalHosts": [
          "cdn.jsdelivr.net",
          "cdn.rawgit.com",
          "cdnjs.cloudflare.com",
          "fonts.googleapis.com",
          "maxcdn.bootstrapcdn.com",
          "use.fontawesome.com",
          "www.gstatic.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 23
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "LAN",
        "Monitoring"
      ]
    },
    {
      "author": "Doug Beard/Brian Wilson",
      "category": "Security",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-envisalink-app-driver-for-vista-ademco-honeywell-alarm-via-smartthings-nodeproxy/9726",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Native Hubitat support for Vista Ademco/20p via Envisalink - unsupported at this time",
      "documentationUrl": "https://github.com/bdwilson/hubitat_envisalink",
      "id": "manifest:e8191ecaa47c6df6bfbe",
      "manifestUrl": "https://raw.githubusercontent.com/bdwilson/hubitat_envisalink/master/packageManifest.json",
      "name": "Envisalink for Vista Ademco/20p Alarm System",
      "observed": {
        "externalHosts": [
          "dougbeardrdiag.file.core.windows.net",
          "www.eyezon.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 17
      },
      "reviewed": [],
      "tags": [
        "Safety & Security"
      ]
    },
    {
      "author": "Supun Vidana Pathiranage",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Get production & consumption data from Enphase Envoy-S (metered) locally",
      "documentationUrl": null,
      "id": "hpm:924c7849-b28d-470f-80eb-5c9146ee65ac",
      "manifestUrl": "https://raw.githubusercontent.com/vpsupun/hubitat/master/EnvoyLocalData/packageManifest.json",
      "name": "Envoy Local Data",
      "observed": {
        "externalHosts": [
          "enlighten.enphaseenergy.com",
          "entrez.enphaseenergy.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "LAN"
      ]
    },
    {
      "author": "Amos Yuen",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-epson-projector-driver",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Epson Projector Driver",
      "documentationUrl": "https://github.com/amosyuen/hubitat/blob/main/epson/README.md",
      "id": "manifest:e0df77724e4646810479",
      "manifestUrl": "https://raw.githubusercontent.com/amosyuen/hubitat/main/epson/packageManifest.json",
      "name": "Epson Projector",
      "observed": {
        "externalHosts": [
          "support.atlona.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Misc. Devices",
        "Multimedia"
      ]
    },
    {
      "author": "CSteele",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MQTT driver and optional dashboard publisher for the ESP32 Wall Keypad.",
      "documentationUrl": "https://csteele-pd.github.io/Hubitat-public/ESP32-Wall-Keypad/install/",
      "id": "manifest:0aab44543b1218f89d7f",
      "manifestUrl": "https://raw.githubusercontent.com/csteele-PD/Hubitat-public/refs/heads/master/ESP32-Wall-Keypad/packageManifest.json",
      "name": "ESP32 Wall Keypad",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "MQTT",
        "Safety & Security"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/esphome-hubitat/68341",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "ESPHome Apollo Automation Drivers",
      "documentationUrl": "https://github.com/kkossev/Hubitat-ESPHome-Apollo/blob/main/README.md",
      "id": "hpm:9df87cc8-f25f-4437-969c-e225c338dd30",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat-ESPHome-Apollo/main/apolloManifest.json",
      "name": "ESPHome Apollo Automation Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "LAN",
        "Monitoring",
        "Motion Control",
        "Multi Sensors",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Jonathan Bradshaw",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/esphome-hubitat/68341",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Library and example drivers for ESPHome devices using the Native (Home Assistant) API",
      "documentationUrl": "https://github.com/bradsjm/hubitat-drivers/blob/main/ESPHome/README.md",
      "id": "hpm:939ef90a-dff1-42f4-ae58-0a6709c83af7",
      "manifestUrl": "https://raw.githubusercontent.com/bradsjm/hubitat-public/main/ESPHome/packageManifest.json",
      "name": "ESPHome Integration Library and Example Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 16,
        "urlLiteralCount": 16
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "ESPHome Node",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_NATIVE_API"
            }
          ],
          "documentation": [],
          "id": "esphome",
          "name": "ESPHome Integration",
          "status": "VERIFIED_COMMUNITY"
        },
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "LAN"
      ]
    },
    {
      "author": "csteele",
      "category": null,
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": true
      },
      "description": "EtherRain Sprinkler Controller and child Driver",
      "documentationUrl": "http://www.quicksmart.com/qs_etherrain.html",
      "id": "hpm:026cd1b9-b963-4852-80a5-07328d34d4d7",
      "manifestUrl": "https://raw.githubusercontent.com/csteele-PD/Hubitat-public/master/EtherRain/packageManifest.json",
      "name": "EtherRain",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 14
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Irrigation",
        "LAN",
        "Timers",
        "Valves",
        "Water"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-eurotronic-air-quality-sensor-humidity-dewpoint-co2-voc/68482/1",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:a91a38c470b7f36bf6c8",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Eurotronic/Eurotronic%20Air%20Quality%20Sensor.json",
      "name": "Eurotronic Air Quality Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Temperature & Humidity",
        "ZWave"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Device driver creates a virtual switch that is set on/off based on whether the day of the year is even or odd. To handle end of year processing the driver can optionally switch the even/odd on/off to ensure that the every other day on/off is maintained.",
      "documentationUrl": null,
      "id": "hpm:4da817ab-24c2-4d67-90f6-58d6247aef38",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/evenDaySwitchManifest.json",
      "name": "Even Day Switch",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A custom device handler for the Eversource st814 temp/humidity device. The only one I know temp rated to go in freezers. It has 3 AA Batteries",
      "documentationUrl": null,
      "id": "hpm:ac0fd99d-cc6c-4d52-96d7-7b69dfcbf1e7",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/ST814.json",
      "name": "Eversource ST814 Temp and humidity device handler",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Monitoring",
        "Multi Sensors",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Motion Sensor - Temperature - Light level - Color Indicator LED - Z-Wave Range Extender - Wall Powered, Features missing in stock device handler",
      "documentationUrl": null,
      "id": "hpm:756047d0-3a16-408c-8a3b-2c8d8b2eaf41",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/EzMultiNew.json",
      "name": "EZMulti aka hsm200 device handler",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Kurt Sanders",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Provides a custom device driver to access to your EZsalt tank data.",
      "documentationUrl": "https://github.com/KurtSanders/HubitatPackages/tree/master/resources/apps/EZSalt#readme",
      "id": "hpm:3a1f5145-0c95-476b-bf68-bfd7b26a7066",
      "manifestUrl": "https://raw.githubusercontent.com/KurtSanders/HubitatPackages/refs/heads/master/resources/apps/EZSalt/packageManifest.json",
      "name": "EZsalt Tank Monitoring & Integration",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Misc. Devices",
        "Monitoring"
      ]
    },
    {
      "author": "Scruffy-SJB",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Fakro Z-Wave Window Driver",
      "documentationUrl": null,
      "id": "hpm:b029908a-cac9-4b73-9fde-de4bc8f0d18e",
      "manifestUrl": "https://raw.githubusercontent.com/scruffy-sjb/Hubitat_HPM/main/Fakro/packageManifest.json",
      "name": "Fakro Window Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Doors & Windows",
        "ZWave"
      ]
    },
    {
      "author": "Miles Budnek",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-fan-thermostat-with-manual-override/34554",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "This package allows you to create virtual thermostat devices to control ceiling fans based on temperature",
      "documentationUrl": "https://github.com/mbudnek/hubitat-fan-thermostat/blob/master/README.md",
      "id": "manifest:cc5434403bcadc4ad757",
      "manifestUrl": "https://raw.githubusercontent.com/mbudnek/hubitat-fan-thermostat/master/packageManifest.json",
      "name": "Fan Thermostat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "RamSet",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Run a fan for a set time from virtual switches, with an optional power-triggered run and a maximum runtime backstop.",
      "documentationUrl": null,
      "id": "manifest:5b416ad3d882a023798f",
      "manifestUrl": "https://raw.githubusercontent.com/RamSet/hubitat/refs/heads/main/manifest-fan-timer.json",
      "name": "Fan Timer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "lnjustin",
      "category": "Integration",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Fantasy Football Integration",
      "documentationUrl": null,
      "id": "manifest:c4048b41adf4d1887e69",
      "manifestUrl": "https://raw.githubusercontent.com/lnjustin/FFL/refs/heads/main/packageManifest.json",
      "name": "FFL",
      "observed": {
        "externalHosts": [
          "a.espncdn.com",
          "lm-api-reads.fantasy.espn.com",
          "s3.amazonaws.com",
          "site.api.espn.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 30
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Integration",
        "Misc. Devices"
      ]
    },
    {
      "author": "cjcharles0",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/best-fibaro-dimmer-2-driver/19706/66",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Fibaro Dimmer 2 Module, with support for nightmode brightness",
      "documentationUrl": "https://github.com/cjcharles0/Hubitat/drivers/fibaro-fgd-212",
      "id": "manifest:9654b6dbe16d13594fd2",
      "manifestUrl": "https://raw.githubusercontent.com/cjcharles0/Hubitat/master/packages/fibaro-fgd-212-package.json",
      "name": "Fibaro Dimmer 2 FGD-212",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "cjcharles0",
      "category": null,
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/fibaro-fgs-224/59108",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Fibaro Double Smart Module with support for secure mode and FGS-214",
      "documentationUrl": "https://github.com/cjcharles0/Hubitat/drivers/fibaro-fgs-224",
      "id": "manifest:ffdf1b1a208e1a88f7b6",
      "manifestUrl": "https://raw.githubusercontent.com/cjcharles0/Hubitat/master/packages/fibaro-fgs-224-package.json",
      "name": "Fibaro Double Smart FGS-224",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "cjcharles0",
      "category": null,
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/fibaro-fgs-224/59108",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Fibaro Double Relay Module",
      "documentationUrl": "https://github.com/cjcharles0/Hubitat/drivers/fibaro-fgs-222",
      "id": "manifest:a97568297e6a0544d52f",
      "manifestUrl": "https://raw.githubusercontent.com/cjcharles0/Hubitat/master/packages/fibaro-fgs-222-package.json",
      "name": "Fibaro Double Switch FGS-222",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "cjcharles0",
      "category": null,
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-fibaro-fgs-224-fgs-223-and-fgs-222/59108",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Fibaro Double Switch 2 Module",
      "documentationUrl": "https://github.com/cjcharles0/Hubitat/drivers/fibaro-fgs-223",
      "id": "manifest:b4acf26d187298358a13",
      "manifestUrl": "https://raw.githubusercontent.com/cjcharles0/Hubitat/master/packages/fibaro-fgs-223-package.json",
      "name": "Fibaro Double Switch FGS-223",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "christi999",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Fibaro Smart Implant FGBS-222",
      "documentationUrl": null,
      "id": "manifest:f11bab91e20213144dcc",
      "manifestUrl": "https://raw.githubusercontent.com/muchu999/Hubitat/master/packageManifest.json",
      "name": "Fibaro Smart Implant FGBS-222",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 6,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Utility",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-fibaro-smoke-sensor/32953/1",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:9955260ac25548076b28",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Fibaro/Fibaro%20Smoke%20Sensor.json",
      "name": "Fibaro Smoke Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Safety & Security",
        "ZWave"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Allows for the creation and restore of a compressed backup of all files contained in the Hub's local File Manager",
      "documentationUrl": null,
      "id": "hpm:f75a7ab6-64b1-46b7-9c6c-662b0be9b015",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/fmBckResManifest.json",
      "name": "File Manager Backup & Restore",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Device Driver to allow reading, writing, and appending of text based files in Hubitat\\'s Local File Manager.",
      "documentationUrl": null,
      "id": "hpm:dba69af4-3215-4b19-a344-735488b348f0",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/fileMgrManifest.json",
      "name": "File Manager Device",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Provides File Manager support for text files containing extended character sets.",
      "documentationUrl": null,
      "id": "hpm:4e5e5aa6-2495-4826-b4d5-43543b30922d",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/fmExtManifest.json",
      "name": "File Manager for Extended Character Sets",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Allows the creation and editting of small text files inside of File Manager",
      "documentationUrl": null,
      "id": "hpm:da4f6cac-1522-4e1c-8ebb-e21d22a1bf79",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/refs/heads/main/manifests/fmNotepadManifest.json",
      "name": "File Manager Notepad",
      "observed": {
        "externalHosts": [
          "code.iconify.design"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Joe Page",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/file-manager-beta/156586",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "File Manager with multiple file uploads, folders and more",
      "documentationUrl": null,
      "id": "hpm:4c7902e3-c9e2-4d3c-aea0-94e046ca5545",
      "manifestUrl": "https://raw.githubusercontent.com/jpage4500/hubitat-drivers/master/file-manager-app/packageManifest.json",
      "name": "File Manager+",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Mike Bishop",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/beta-filtered-device-mirror/96940",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Create a virtual device that reflects a single capability of a more complex device",
      "documentationUrl": null,
      "id": "hpm:c83e98d2-f163-4ec6-a08c-cd8e2d6d01e0",
      "manifestUrl": "https://raw.githubusercontent.com/MikeBishop/hpm-intermediate/main/filtered-mirror.json",
      "name": "Filtered Device Mirror",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "David Snell",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Drivers for integrating FireBoard devices using the FireBoard Cloud API",
      "documentationUrl": null,
      "id": "hpm:3855cfb7-c514-49c8-afad-0701de76d712",
      "manifestUrl": "https://www.drdsnell.com/projects/hubitat/drivers/FireBoard.json",
      "name": "FireBoard",
      "observed": {
        "externalHosts": [
          "fireboard.io",
          "www.drdsnell.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Monitoring",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Jaime Botero",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/new-control-flair-vents-with-hubitat-free-open-source-app-and-driver/132728",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control Flair Smart Vents in Hubitat and add Dynamic Airflow Balancing",
      "documentationUrl": "https://github.com/ljbotero/hubitat-flair-vents/blob/main/README.md",
      "id": "hpm:f2f5af6b-3729-41a2-8292-48d36b485b52",
      "manifestUrl": "https://raw.githubusercontent.com/ljbotero/hubitat-flair-vents/main/packageManifest.json",
      "name": "Flair Vents",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "David Manuel",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat port of marq24/ha-fordpass. Connect Ford and Lincoln vehicles: lock/unlock, remote start, guard mode, preconditioning, door/window/tire status, GPS presence, and optional ABRP (A Better Route Planner) live telemetry push.",
      "documentationUrl": "https://github.com/dacmanj/hubitat/tree/main/FordPass#readme",
      "id": "hpm:2cc0fb5a-d325-4904-8831-7b049562a965",
      "manifestUrl": "https://raw.githubusercontent.com/dacmanj/hubitat/main/FordPass/packageManifest.json",
      "name": "FordPass Connect",
      "observed": {
        "externalHosts": [
          "accounts.autonomic.ai",
          "api.autonomic.ai",
          "api.foundational.ford.com",
          "api.mps.ford.com",
          "api.vehicle.ford.com",
          "login.ford.co.uk",
          "login.ford.com",
          "login.ford.de",
          "login.ford.no",
          "login.lincoln.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 25
      },
      "reviewed": [],
      "tags": [
        "Integrations",
        "Vehicle"
      ]
    },
    {
      "author": "Adrian Caramaliu",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Freestyle Libre Integration",
      "documentationUrl": null,
      "id": "hpm:fdb2973d-e0f4-4082-a6dd-dd0590b17f9a",
      "manifestUrl": "https://raw.githubusercontent.com/ady624/hubitat-freestyle-libre/master/packageManifest.json",
      "name": "Freestyle Libre Integration",
      "observed": {
        "externalHosts": [
          "www.hubitatcommunity.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Health & Fitness"
      ]
    },
    {
      "author": "Derek Osborn",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/re-release-fronius-solar-inverter-driver-for-hubitat/138555?u=djos",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Fronius Solar Inverter Driver for Hubitat",
      "documentationUrl": null,
      "id": "manifest:357d50e7a74097a0f327",
      "manifestUrl": "https://raw.githubusercontent.com/dJOS1475/Fronius_Inverter_Driver_Hubitat/main/packageManifest.json",
      "name": "Fronius Solar Inverter Driver for Hubitat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring"
      ]
    },
    {
      "author": "Eduardo Simioni",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Driver to control Fully Kiosk Browser from Hubitat.",
      "documentationUrl": null,
      "id": "hpm:9bd2dd4b-ba93-44b3-b673-e6892c71247c",
      "manifestUrl": "https://raw.githubusercontent.com/esimioni/fullykioskbrowser-hubitat-driver/master/manifest.json",
      "name": "Fully Kiosk Browser Controller",
      "observed": {
        "externalHosts": [
          "docs.oracle.com"
        ],
        "lanPrimitives": [
          "PARSE_LAN_MESSAGE"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "LAN",
        "Notifications",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Kurt Sanders",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/pre-release-new-hubitat-fun-api-response-app-idioms-jokes-trivia-poems-quotes-riddles/153331",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Generates fun & educational random responses on several selectable categories (e.g. Idioms, Jokes, Trivia, Poems, Quotes & Riddles) that are suitable for TTS output.",
      "documentationUrl": "https://github.com/KurtSanders/Hubitat-Fun-Api-Responses/tree/main?tab=readme-ov-file#hubitat-fun-api-responses-app",
      "id": "hpm:fc591262-b4f6-43ad-9f22-6f3ac349227d",
      "manifestUrl": "https://raw.githubusercontent.com/KurtSanders/Hubitat-Fun-Api-Responses/refs/heads/main/packageManifest.json",
      "name": "Fun Api Responses",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Misc. Devices",
        "Notifications",
        "Tools & Utilities",
        "Voice Assistants"
      ]
    },
    {
      "author": "Justin Leonard",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Follow and automate based on the schedules of your favorite college and professional sports teams",
      "documentationUrl": null,
      "id": "manifest:aa131c9ae6a1c33a5730",
      "manifestUrl": "https://raw.githubusercontent.com/lnjustin/GameTime/main/packageManifest.json",
      "name": "GameTime",
      "observed": {
        "externalHosts": [
          "api.sportsdata.io",
          "s3.amazonaws.com",
          "sportsdata.io"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 29
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Health & Fitness",
        "Multimedia"
      ]
    },
    {
      "author": "J.R. Farrar",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-garadget-mqtt-device-handler/43377",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MQTT Device Handler for Garadget",
      "documentationUrl": null,
      "id": "manifest:08a6c5602410bb5f6921",
      "manifestUrl": "https://raw.githubusercontent.com/jrfarrar/hubitat/master/devicehandlers/garadgetMQTT/garadgetmqtt.json",
      "name": "Garadget MQTT Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Matthew Petro (@matthewpetro)",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "An app and driver that can combine a switch/relay and one or two contact/tilt sensors to create a garage door control device.",
      "documentationUrl": "https://github.com/matthewpetro/hubitat-projects/blob/main/garage-door/README.md",
      "id": "hpm:96595e37-6aa2-4742-bec1-df3f2c9bd217",
      "manifestUrl": "https://raw.githubusercontent.com/matthewpetro/hubitat-projects/main/garage-door/package-manifest.json",
      "name": "Garage Door Opener",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Garage Doors"
      ]
    },
    {
      "author": "Konnected Inc.",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integrate the Konnected GDO White (GDOv1-S)",
      "documentationUrl": null,
      "id": "hpm:e10c4a5b-23c2-4941-9770-0dff27d73a50",
      "manifestUrl": "https://raw.githubusercontent.com/konnected-io/konnected-hubitat/master/package-gdov1s.json",
      "name": "Garage Door Opener v1 (GDOv1-S)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Konnected Panel",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "konnected",
          "name": "Konnected Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Garage Doors"
      ]
    },
    {
      "author": "Konnected Inc.",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integrate the Konnected GDO White (GDOv2-S)",
      "documentationUrl": null,
      "id": "hpm:01ab08a8-1ad3-44ea-ae68-47482773940e",
      "manifestUrl": "https://raw.githubusercontent.com/konnected-io/konnected-hubitat/master/package-gdov2s.json",
      "name": "Garage Door Opener White (GDOv2-S)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Konnected Panel",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "konnected",
          "name": "Konnected Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Garage Doors"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "App originally written for Lightify Garden spots to allow color cycling and user selectable times, comes on automatically as sunset etc. but works with any color lights, can also set colors for holidays",
      "documentationUrl": null,
      "id": "hpm:26f75101-0fb5-4cce-95e1-1b95f29c4493",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/GardenHue.json",
      "name": "Garden Hue Smartapp",
      "observed": {
        "externalHosts": [
          "mail.lgk.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Konnected Inc.",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integrate the Konnected GDO blaQ (GDOv2-Q)",
      "documentationUrl": null,
      "id": "hpm:9f9d9a0c-ee29-4e5d-8c52-48d5b3fc8e0f",
      "manifestUrl": "https://raw.githubusercontent.com/konnected-io/konnected-hubitat/master/package-gdov2q.json",
      "name": "Garge Door Opener blaQ (GDOv2-Q)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Konnected Panel",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "konnected",
          "name": "Konnected Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Garage Doors"
      ]
    },
    {
      "author": "Botched1 (Jason Bottjen)",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for S2 capable GE Enbrighten Dimmer",
      "documentationUrl": null,
      "id": "hpm:2254dcab-8d6b-42c7-8c9a-454daa7d1f6a",
      "manifestUrl": "https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Enbrighten-Z-Wave-Plus-Dimmer.json",
      "name": "GE Enbrighten Z-Wave Plus Dimmer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Botched1 (Jason Bottjen)",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for S2 capable GE Enbrighten Switch",
      "documentationUrl": null,
      "id": "hpm:0c139a4a-edfa-43b3-835a-600e65b55c26",
      "manifestUrl": "https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Enbrighten-Z-Wave-Plus-Switch.json",
      "name": "GE Enbrighten Z-Wave Plus Switch",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Botched1 (Jason Bottjen)",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for non-S2 GE Z-Wave Plus Dimmer",
      "documentationUrl": null,
      "id": "hpm:0b63b474-aa2f-4e9f-899b-f08ff6615374",
      "manifestUrl": "https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Dimmer.json",
      "name": "GE Z-Wave Plus Dimmer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Botched1 (Jason Bottjen)",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for GE Motion Dimmer",
      "documentationUrl": null,
      "id": "hpm:4c26a059-aba3-49f7-93af-fbdfd2f64ef2",
      "manifestUrl": "https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Motion-Dimmer.json",
      "name": "GE Z-Wave Plus Motion Dimmer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Botched1 (Jason Bottjen)",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Combo Driver for GE Z-Wavbe Plus Motion Dimmer",
      "documentationUrl": null,
      "id": "hpm:cf32b271-faab-47bf-8193-7255cf9fb245",
      "manifestUrl": "https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Motion-Dimmer-Combo-Driver.json",
      "name": "GE Z-Wave Plus Motion Dimmer Combo Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Botched1 (Jason Bottjen)",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for GE Motion Dimmer that creates separate child deivces for motion and dimmer",
      "documentationUrl": null,
      "id": "hpm:06585949-c19b-4187-9481-126f71ee5d14",
      "manifestUrl": "https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Motion-Dimmer-Component.json",
      "name": "GE Z-Wave Plus Motion Dimmer Component",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Botched1 (Jason Bottjen)",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for GE Motion Switch",
      "documentationUrl": null,
      "id": "hpm:5dc468df-d4bb-4c5d-b66d-201c68e0c303",
      "manifestUrl": "https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Motion-Switch.json",
      "name": "GE Z-Wave Plus Motion Switch",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Botched1 (Jason Bottjen)",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Combo Driver for GE Z-Wavbe Plus Motion Switch",
      "documentationUrl": null,
      "id": "hpm:3b207ae8-96a2-464d-ae63-8cd76bf07972",
      "manifestUrl": "https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Motion-Switch-Combo-Driver.json",
      "name": "GE Z-Wave Plus Motion Switch Combo Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Botched1 (Jason Bottjen)",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for GE Motion Switch that creates separate child deivces for motion and switch",
      "documentationUrl": null,
      "id": "hpm:cf4c5556-54fe-49ea-be21-71f761f541b2",
      "manifestUrl": "https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Motion-Switch-Component.json",
      "name": "GE Z-Wave Plus Motion Switch Component",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Botched1 (Jason Bottjen)",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for non-S2 GE Z-Wave Plus Switch",
      "documentationUrl": null,
      "id": "hpm:04503ff2-a484-4481-9a9d-560fd1161883",
      "manifestUrl": "https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/GE-Z-Wave-Plus-Switch.json",
      "name": "GE Z-Wave Plus Switch",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Daniel Winks",
      "category": "Utilities",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Use Google Gemini API to rewrite text with various styles (improve, shorten, lengthen, formalize, casual, simplify).",
      "documentationUrl": "https://github.com/DanielWinks/Hubitat-Public/blob/main/Readme/GeminiTextRewriter-README.md",
      "id": "manifest:ff829401277e59a5ae23",
      "manifestUrl": "https://raw.githubusercontent.com/DanielWinks/Hubitat-Public/main/PackageManifests/GeminiTextRewriter/packageManifest.json",
      "name": "Gemini Text Rewriter",
      "observed": {
        "externalHosts": [
          "aistudio.google.com",
          "generativelanguage.googleapis.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Andrew Davison",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Virtual Switchable Presence and other utility drivers.",
      "documentationUrl": "https://github.com/birdslikewires/hubitat/tree/main/general",
      "id": "hpm:071ec430-411e-4321-886a-5785d0b29e4c",
      "manifestUrl": "https://raw.githubusercontent.com/birdslikewires/hubitat/main/general/packageManifest.json",
      "name": "General Drivers from BirdsLikeWires",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Used to clean device data and get Zigbee device fingerprints",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-generic-device-toolbox",
      "id": "manifest:4f13b1522521438caa7d",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-generic-device-toolbox.json",
      "name": "Generic Device Toolbox",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with Generic Dimmers (only tested with the Nue Dimmer, might need changes for other devices. Please report your fingerprints and progress.)",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-generic-dimmer",
      "id": "manifest:f0efa2c0796b945b2a3c",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-generic-dimmer.json",
      "name": "Generic Dimmer (with Presence)",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "csteele",
      "category": null,
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Test a Matter Tag with HPM",
      "documentationUrl": null,
      "id": "hpm:026cd1b9-b963-4852-80a5-07328e34d4d7",
      "manifestUrl": "https://raw.githubusercontent.com/csteele-PD/Hubitat-public/refs/heads/master/GenericMatterOutlet/packageManifest.json",
      "name": "Generic Matter Outlet",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Matter Fabric / Bridge",
              "runtimeCriticality": "RUNTIME",
              "transport": "MATTER_IP"
            }
          ],
          "documentation": [],
          "id": "matter-bridge",
          "name": "Matter Bridge / Controller",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Lights & Switches",
        "Matter"
      ]
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with Generic Outlets (please report your fingerprints)",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-generic-outlet",
      "id": "manifest:e7adad1e608638bb2b03",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-generic-outlet.json",
      "name": "Generic Outlet (with Presence)",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with most repeater-only devices (Xbee with Send Type set to Bind)",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-generic-repeater",
      "id": "manifest:7f58fa35ce73297cc97b",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-generic-repeater.json",
      "name": "Generic Repeater (with Presence)",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with Generic Switches (this includes many multi-relay ones, like Nue. Please report your fingerprints)",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-generic-switch",
      "id": "manifest:adccaeab2d9d40ba849d",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-generic-switch.json",
      "name": "Generic Switch (with Presence)",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Brian Wilson",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/genmon-generator-monitor/164362",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control your generator via Genmon using Hubitat",
      "documentationUrl": "https://github.com/bdwilson/hubitat/tree/master/Genmon",
      "id": "manifest:924cfa250ee409a87aae",
      "manifestUrl": "https://raw.githubusercontent.com/bdwilson/hubitat/master/Genmon/packageManifest.json",
      "name": "Genmon Generator Monitor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Monitoring",
        "Safety & Security"
      ]
    },
    {
      "author": "Brian Wilson",
      "category": "Security",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-geofency-presence/22788",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Set presence based on Geofency iOS App",
      "documentationUrl": "https://github.com/bdwilson/hubitat/tree/master/Geofency-Presence",
      "id": "manifest:f11fdc6c0df7bac0ad7f",
      "manifestUrl": "https://raw.githubusercontent.com/bdwilson/hubitat/master/Geofency-Presence/packageManifest.json",
      "name": "Geofency Presence",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com",
          "www.geofency.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Presence & Location",
        "Safety & Security"
      ]
    },
    {
      "author": "csteele",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Display a device's Capabilities, Attributes and Commands.",
      "documentationUrl": "https://github.com/HubitatCommunity/GetAttributeApp/blob/master/README.md",
      "id": "hpm:1d32f650-bbe7-4700-9596-83dff854e698",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/GetAttributeApp/master/docs/GetAttributeApp.json",
      "name": "GetAttributeApp",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Gordon Thelander",
      "category": "Notifications",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/gmail-notification-gateway/164723",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Sends Hubitat notifications as Gmail messages through a Google Apps Script webhook, with no paid messaging service and no Google Cloud project. Recipient addresses stay in Apps Script, so the hub only ever sends a group name. Requires a one-time Google Apps Script setup in your own Google account, described in the documentation.",
      "documentationUrl": "https://github.com/GordonThelander/hubitat-gmail-notification-gateway/blob/main/README.md",
      "id": "hpm:d94eea6f-1314-4921-9f87-04971b3f9279",
      "manifestUrl": "https://raw.githubusercontent.com/GordonThelander/hubitat-gmail-notification-gateway/main/packageManifest.json",
      "name": "Gmail Notification Gateway",
      "observed": {
        "externalHosts": [
          "script.google.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Google Apps Script",
              "runtimeCriticality": "RUNTIME",
              "transport": "HTTPS"
            },
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Gmail",
              "runtimeCriticality": "RUNTIME",
              "transport": "GOOGLE_SERVICE"
            }
          ],
          "documentation": [],
          "id": "gmail-notification-gateway",
          "name": "Gmail Notification Gateway",
          "status": "VERIFIED_OWNER_REPO"
        }
      ],
      "tags": [
        "Cloud",
        "Notifications"
      ]
    },
    {
      "author": "Joe Page",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-hd-android-dashboard/41674",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Turn go2rtc camera streams into Hubitat devices (still image + RTSP)",
      "documentationUrl": null,
      "id": "hpm:b1d8f3a2-7c4e-4a9b-8e21-3f6c5d0a9e47",
      "manifestUrl": "https://raw.githubusercontent.com/jpage4500/hubitat-drivers/master/go2rtc/packageManifest.json",
      "name": "go2rtc",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Multimedia",
        "Security & Safety"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-gocontrol-garage-door-opener/128029",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for GoControl Garage Door Openers",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/drivers/gocontrol",
      "id": "manifest:6aee568c1872568f7afe",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/gocontrol.json",
      "name": "GoControl Garage Door Opener",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Garage Doors",
        "ZWave"
      ]
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-advanced-gocontrol-gc-tbz48-thermostat-driver/37868?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Advanced GoControl GC-TBZ48 Thermostat Driver",
      "documentationUrl": null,
      "id": "manifest:b3f31385260e955f652b",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/gocontrolThermostat.json",
      "name": "GoControl Thermostat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "ritchierich",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-google-calendar-search/71397",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Google Calendar, Task, and Gmail Search integrates Hubitat Elevation with Google for automations based on items found.  Included Gmail Notification Device provides Gmail email notifications from Hubitat Elevation.",
      "documentationUrl": "https://github.com/HubitatCommunity/Google_Calendar_Search/blob/main/README.md",
      "id": "manifest:23b1f128a5cb39e43fde",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/Google_Calendar_Search/main/packageManifest.json",
      "name": "Google Calendar, Task, and Gmail Search and Gmail Notification Device",
      "observed": {
        "externalHosts": [
          "accounts.google.com",
          "cdn.shopify.com",
          "code.iconify.design",
          "console.cloud.google.com",
          "docs.hubitat.com",
          "docs.oracle.com",
          "gmail.googleapis.com",
          "issuetracker.google.com",
          "mail.google.com",
          "oauth2.googleapis.com",
          "support.google.com",
          "tasks.googleapis.com",
          "www.freeformatter.com",
          "www.googleapis.com",
          "www.googleguide.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 64
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Google Apps Script",
              "runtimeCriticality": "RUNTIME",
              "transport": "HTTPS"
            },
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Gmail",
              "runtimeCriticality": "RUNTIME",
              "transport": "GOOGLE_SERVICE"
            }
          ],
          "documentation": [],
          "id": "gmail-notification-gateway",
          "name": "Gmail Notification Gateway",
          "status": "VERIFIED_OWNER_REPO"
        }
      ],
      "tags": [
        "LAN",
        "Lights & Switches",
        "Notifications"
      ]
    },
    {
      "author": "Joe Page",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-hd-android-dashboard/41674",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Google Chromecast integration for Hubitat dashboards",
      "documentationUrl": null,
      "id": "hpm:4a095de5-dab8-4462-9c15-0910b0a2dd3c",
      "manifestUrl": "https://raw.githubusercontent.com/jpage4500/hubitat-drivers/master/google-chromecast-plus/packageManifest.json",
      "name": "Google Chromecast+",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 4
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Google Cast Device",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_CAST"
            }
          ],
          "documentation": [],
          "id": "chromecast-native",
          "name": "Chromecast Integration",
          "status": "VERIFIED_CORE"
        },
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Google Cast Devices",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_CAST"
            }
          ],
          "documentation": [],
          "id": "chromecast-plus",
          "name": "Google Chromecast+",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Multimedia",
        "Speakers"
      ]
    },
    {
      "author": "Miles Budnek",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/alpha-community-maintained-google-home-integration/34957",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A community-maintained, full-featured, and highly configurable integration between Hubitat Elevation and Google Home.",
      "documentationUrl": "https://github.com/mbudnek/google-home-hubitat-community/blob/master/README.md",
      "id": "manifest:c77dab80dc2f9819b61b",
      "manifestUrl": "https://raw.githubusercontent.com/mbudnek/google-home-hubitat-community/master/packageManifest.json",
      "name": "Google Home Community",
      "observed": {
        "externalHosts": [
          "accounts.google.com",
          "console.cloud.google.com",
          "console.developers.google.com",
          "homegraph.googleapis.com",
          "oauth2.googleapis.com",
          "www.googleapis.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 9
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_PLATFORM",
              "name": "Google Home / Assistant Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [
            {
              "sourceType": "HUBITAT_OFFICIAL_DOC",
              "title": "Google Home",
              "url": "https://docs2.hubitat.com/en/apps/google-home"
            }
          ],
          "id": "google-home",
          "name": "Google Home",
          "status": "VERIFIED_CORE"
        }
      ],
      "tags": []
    },
    {
      "author": "Joe Page",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Google Photos slideshow for Hubitat dashboards (Picker + app-created albums)",
      "documentationUrl": null,
      "id": "hpm:c0e73f14-24eb-4822-a493-2475fdc913c5",
      "manifestUrl": "https://raw.githubusercontent.com/jpage4500/hubitat-drivers/master/google-photos-cloud/packageManifest.json",
      "name": "Google Photos Cloud",
      "observed": {
        "externalHosts": [
          "accounts.google.com",
          "cloud.hubitat.com",
          "joe-page-software.gitbook.io",
          "photoslibrary.googleapis.com",
          "photospicker.googleapis.com",
          "www.googleapis.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 14
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Dashboards",
        "Multimedia"
      ]
    },
    {
      "author": "David Kilgore",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/project-google-photos-integration-for-dashboard-image-slide-show/72686",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Google Photos Slideshow is an app/driver combo to display a slideshow of images from an album your Google Photos library on a Hubitat dashboard",
      "documentationUrl": "https://github.com/dkilgore90/google-photos/blob/master/README.md",
      "id": "hpm:1023181e-1da3-4800-a87f-e38d5eeece07",
      "manifestUrl": "https://raw.githubusercontent.com/dkilgore90/google-photos/master/packageManifest.json",
      "name": "Google Photos Slideshow",
      "observed": {
        "externalHosts": [
          "accounts.google.com",
          "cloud.hubitat.com",
          "photoslibrary.googleapis.com",
          "www.googleapis.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Dashboards",
        "Multimedia"
      ]
    },
    {
      "author": "David Kilgore",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/pre-release-google-sdm-api-nest-integration/52226",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "An app with coordinating drivers for monitoring and controlling Nest devices from Hubitat Elevation",
      "documentationUrl": "https://github.com/dkilgore90/google-sdm-api/blob/master/README.md",
      "id": "hpm:70828165-4744-4077-9f9c-092f89bb0d38",
      "manifestUrl": "https://raw.githubusercontent.com/dkilgore90/google-sdm-api/master/packageManifest.json",
      "name": "Google SDM API - Nest Integration",
      "observed": {
        "externalHosts": [
          "cloud.hubitat.com",
          "drive.google.com",
          "nestservices.google.com",
          "pubsub.googleapis.com",
          "smartdevicemanagement.googleapis.com",
          "www.googleapis.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 6,
        "urlLiteralCount": 37
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Motion Control",
        "Safety & Security",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Govee Effects Player",
      "documentationUrl": "https://community.hubitat.com/t/govee-effect-player/147382",
      "id": "hpm:879b6db7-00c3-4a85-b66d-36c8d9b57d69",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/refs/heads/main/manifests/gEffectsManifest.json",
      "name": "Govee Effect Player",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Mavrrick",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "This will provide Govee integration",
      "documentationUrl": null,
      "id": "hpm:8564baba-9ede-42fe-adff-743c4a6722b0",
      "manifestUrl": "https://raw.githubusercontent.com/Mavrrick/Hubitat-by-Mavrrick/main/Govee/packageManifest.json",
      "name": "Govee Integration v1",
      "observed": {
        "externalHosts": [
          "app2.govee.com",
          "community-api.govee.com",
          "developer-api.govee.com",
          "lh4.googleusercontent.com",
          "www.paypal.me"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "SEND_HUB_COMMAND",
          "UDP_PROTOCOL"
        ],
        "sourceFilesAnalysed": 10,
        "urlLiteralCount": 22
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Govee Platform",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_OR_HTTPS"
            }
          ],
          "documentation": [],
          "id": "govee-v2",
          "name": "Govee Integration V2",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Appliances",
        "Cloud",
        "Integrations",
        "Lights & Switches",
        "Misc. Devices"
      ]
    },
    {
      "author": "Mavrrick",
      "category": "Convenience",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Govee integration using Govee Development Platform",
      "documentationUrl": null,
      "id": "hpm:035a80c2-9cc2-482c-b174-79142ca19768:ffb5957ea8140dbb936a",
      "manifestUrl": "https://raw.githubusercontent.com/Mavrrick/Hubitat-by-Mavrrick/main/Govee/packageManifest2.json",
      "name": "Govee Integration v2",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "SEND_HUB_COMMAND",
          "UDP_PROTOCOL"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 1
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Govee Platform",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_OR_HTTPS"
            }
          ],
          "documentation": [],
          "id": "govee-v2",
          "name": "Govee Integration V2",
          "status": "COMMUNITY_SEED"
        },
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Matter Fabric / Bridge",
              "runtimeCriticality": "RUNTIME",
              "transport": "MATTER_IP"
            }
          ],
          "documentation": [],
          "id": "matter-bridge",
          "name": "Matter Bridge / Controller",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Appliances",
        "Cloud",
        "Integrations",
        "Lights & Switches",
        "Misc. Devices"
      ]
    },
    {
      "author": "Mavrrick",
      "category": "Convenience",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Matter Drivers for Govee Devices",
      "documentationUrl": null,
      "id": "hpm:035a80c2-9cc2-482c-b174-79142ca19768:5f03bcbf794ed8d56f2c",
      "manifestUrl": "https://raw.githubusercontent.com/Mavrrick/Hubitat-by-Mavrrick/main/Govee/packageManifest3.json",
      "name": "Govee Matter Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "SEND_HUB_COMMAND",
          "UDP_PROTOCOL"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 1
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Govee Platform",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_OR_HTTPS"
            }
          ],
          "documentation": [],
          "id": "govee-v2",
          "name": "Govee Integration V2",
          "status": "COMMUNITY_SEED"
        },
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Matter Fabric / Bridge",
              "runtimeCriticality": "RUNTIME",
              "transport": "MATTER_IP"
            }
          ],
          "documentation": [],
          "id": "matter-bridge",
          "name": "Matter Bridge / Controller",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Appliances",
        "Cloud",
        "Integrations",
        "Lights & Switches",
        "Misc. Devices"
      ]
    },
    {
      "author": "Joe Page",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-hd-android-dashboard/41674",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Temperature from a GoveeLife Smart Pool Thermometer (unsupported by Govee's official API)",
      "documentationUrl": null,
      "id": "hpm:72c56cd5-3783-4d7e-989b-6261a828709e",
      "manifestUrl": "https://raw.githubusercontent.com/jpage4500/hubitat-drivers/master/govee/packageManifest.json",
      "name": "Govee Pool Thermostat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Govee Platform",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_OR_HTTPS"
            }
          ],
          "documentation": [],
          "id": "govee-v2",
          "name": "Govee Integration V2",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Cloud",
        "Pools & Spas",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Tim Yuhl (@WindowWasher)",
      "category": "Convenience",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-graber-virtual-cord-shade-driver-beta/77095",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Graber Shades, including battery reporting and setting date batteries replaced",
      "documentationUrl": "https://github.com/tyuhl/GraberShade/blob/main/README.md",
      "id": "hpm:393df368-462b-4585-a28c-44f713ede1c7",
      "manifestUrl": "https://raw.githubusercontent.com/tyuhl/Hubitat-Packages/refs/heads/main/packages/GraberManifest.json",
      "name": "Graber Shade Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Window Coverings",
        "ZWave"
      ]
    },
    {
      "author": "David Snell",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Monitor Grizzl-E charger.",
      "documentationUrl": null,
      "id": "hpm:f974d0cb-edb6-4792-b61b-07cfcd9137d6",
      "manifestUrl": "https://www.drdsnell.com/projects/hubitat/drivers/Grizzl-EChargerManifest.json",
      "name": "Grizzl-ECharger",
      "observed": {
        "externalHosts": [
          "www.drdsnell.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "LAN",
        "Misc. Devices",
        "Monitoring",
        "Vehicles & Transportation"
      ]
    },
    {
      "author": "Mike Bishop",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/beta-groupthink/123883/",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Enforces consistency between a group activator and its groupState",
      "documentationUrl": null,
      "id": "hpm:73df6e0c-d77f-46be-9af2-7914c1d639b7",
      "manifestUrl": "https://raw.githubusercontent.com/MikeBishop/hpm-intermediate/main/groupthink.json",
      "name": "Groupthink",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Botched1 (Jason Bottjen)",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Haozee Zwave 700 Multisensor",
      "documentationUrl": null,
      "id": "hpm:e1ccd97c-3188-4798-bf3b-f23ec1715584",
      "manifestUrl": "https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/Haozee-Zwave-700-Multisensor.json",
      "name": "Haozee Zwave 700 Multisensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Multi Sensors"
      ]
    },
    {
      "author": "Jeff Lupien",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control Hatch Rest+ devices - light, sound, and favorites",
      "documentationUrl": "https://github.com/jlupien/hubitat-drivers/tree/master/hatch#readme",
      "id": "manifest:63ab0e07867ceca918a0",
      "manifestUrl": "https://raw.githubusercontent.com/jlupien/hubitat-drivers/master/hatch/packageManifest.json",
      "name": "Hatch Connect",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Baby",
        "Hatch",
        "Night Light",
        "Nursery",
        "Rest",
        "Rest+",
        "Sleep",
        "Sound Machine"
      ]
    },
    {
      "author": "Joe Page",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-hd-android-dashboard/41674",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Companion Hubitat app/driver for HD+ Android app",
      "documentationUrl": null,
      "id": "hpm:5fbc9b5b-d241-49df-bd94-d8729a7909d2",
      "manifestUrl": "https://raw.githubusercontent.com/jpage4500/hubitat-drivers/master/hd-device/packageManifest.json",
      "name": "HD+ Companion App",
      "observed": {
        "externalHosts": [
          "accounts.google.com",
          "cloud.hubitat.com",
          "fcm.googleapis.com",
          "joe-page-software.gitbook.io",
          "www.googleapis.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 15
      },
      "reviewed": [],
      "tags": [
        "Notifications",
        "Presence & Location",
        "Voice Assistants"
      ]
    },
    {
      "author": "Joe Page",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-hd-android-dashboard/41674",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Quick way to create virtual HD+ Tiles (ie: image/video/calendar)",
      "documentationUrl": null,
      "id": "hpm:369f7089-5cb4-4502-aaaf-e8a68ce1d632",
      "manifestUrl": "https://raw.githubusercontent.com/jpage4500/hubitat-drivers/master/hd-tile/packageManifest.json",
      "name": "HD+ Tile",
      "observed": {
        "externalHosts": [
          "finnhub.io",
          "joe-page-software.gitbook.io"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A lightweight UI shell for the HE environment featuring multiple draggable, resizeable regions running the  hub's apps/devices/utilities",
      "documentationUrl": null,
      "id": "hpm:69830b8a-efb7-43a7-8424-a98cc541564d",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/refs/heads/main/manifests/heRegionsShellManifest.json",
      "name": "HE Regions Shell - UI",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Awth Wathje",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A Hubitat driver for HeatIt Z-Push Button 8 control device",
      "documentationUrl": null,
      "id": "hpm:66b33bc5-7c1c-4f36-9f34-c3150fddd69b",
      "manifestUrl": "https://raw.githubusercontent.com/awthwathje/hubitat-heatit-z-push-button-8-driver/main/packageManifest.json",
      "name": "HeatIt Z-Push Button 8 driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Utility",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-heatit-z-temp-2-thermostat/49430/1",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:717769cd5519b741742d",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Heatit/Heatit%20Z-Temp2.json",
      "name": "Heatit Z-Temp2",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Temperature & Humidity",
        "ZWave"
      ]
    },
    {
      "author": "Rene Boer",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-heatit-zm-dimmer-250w-with-secure-s2-support/128066",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for ZM Dimmer 250W by Heatit.",
      "documentationUrl": "https://github.com/reneboer/Hubitat/blob/main/Heatit/README.MD",
      "id": "manifest:48af44755934f8cddb23",
      "manifestUrl": "https://raw.githubusercontent.com/reneboer/Hubitat/main/Heatit/packageManifest.json",
      "name": "Heatit ZM Dimmer 250W Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "cjcharles0",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-heatmiser-neostat-neoplug-integration/55041",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Heatmiser Neostat integration for all Neostat devices",
      "documentationUrl": "https://github.com/cjcharles0/Hubitat/drivers/heatmiser-neostat",
      "id": "manifest:4aaf27175c54eaee3b9c",
      "manifestUrl": "https://raw.githubusercontent.com/cjcharles0/Hubitat/master/packages/heatmiser-neostat-package.json",
      "name": "Heatmiser Neostat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Scruffy-SJB",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Heiman Z-Wave Smoke Detector Driver",
      "documentationUrl": null,
      "id": "hpm:e790ca78-28b8-43e5-b2ae-88a2e0d7376b",
      "manifestUrl": "https://raw.githubusercontent.com/scruffy-sjb/Hubitat_HPM/main/Heiman/Zwave_Smoke/packageManifest.json",
      "name": "Heiman Z-Wave Smoke Detector Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Monitoring",
        "Safety & Security",
        "ZWave"
      ]
    },
    {
      "author": "Scruffy-SJB",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Heiman Zigbee CO Detector Driver",
      "documentationUrl": null,
      "id": "hpm:60e9db16-52e1-4714-8494-6e3d9b627d6d",
      "manifestUrl": "https://raw.githubusercontent.com/scruffy-sjb/Hubitat_HPM/main/Heiman/Zigbee_CO/packageManifest.json",
      "name": "Heiman Zigbee CO Detector Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Monitoring",
        "Safety & Security",
        "Zigbee"
      ]
    },
    {
      "author": "Scruffy-SJB",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Heiman Zigbee Smoke Detector Driver",
      "documentationUrl": null,
      "id": "hpm:a9d81226-d811-4c35-b854-75aed93e35d2",
      "manifestUrl": "https://raw.githubusercontent.com/scruffy-sjb/Hubitat_HPM/main/Heiman/Zigbee_Smoke/packageManifest.json",
      "name": "Heiman Zigbee Smoke Detector Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Monitoring",
        "Safety & Security",
        "Zigbee"
      ]
    },
    {
      "author": "HERMES Automation",
      "category": "Security",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Powered by Noonlight, HERMES enables your Hubitat hub to request emergency services and optionally share household details to improve response. Supported alarm types: Police (intrusion), Fire, Medical, Water, and Non-emergency. Optional information may include medical notes, pets, entry instructions, and sensor details.",
      "documentationUrl": "https://hermes-automation.com/",
      "id": "manifest:5656df40e4704e53829f",
      "manifestUrl": "https://hermes-automation.com/app-code/home-dispatch/hubitat/manifests/hermes-home-dispatch-package.json",
      "name": "HERMES Home Dispatch Solution",
      "observed": {
        "externalHosts": [
          "api.hermes-automation.com",
          "hermes-automation.com",
          "www.youtube.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Automations & Groups",
        "Cloud",
        "Monitoring",
        "Notifications",
        "Safety & Security"
      ]
    },
    {
      "author": "Haven",
      "category": null,
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hestia™ smart home dashboard for Hubitat Elevation with Artemis™ security module.",
      "documentationUrl": "https://github.com/h4ven88/hestia-dashboard/blob/main/README.md",
      "id": "manifest:8ba1b8bf77dda34dc96e",
      "manifestUrl": "https://raw.githubusercontent.com/h4ven88/hestia-dashboard/main/packageManifest.json",
      "name": "Hestia Dashboard",
      "observed": {
        "externalHosts": [
          "hestari.com",
          "www.hestari.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Alarm",
        "Dashboard",
        "Lighting",
        "Security",
        "Utility"
      ]
    },
    {
      "author": "null",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hikvision - Driver to Control Door of HikVision, and functions to operate remotely (open/close/restart)",
      "documentationUrl": null,
      "id": "hpm:d2cecf77-f5ec-4387-ae6f-da453a4bc2c2",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_Hikvision/refs/heads/master/packageManifest.json",
      "name": "Hikvision - Controller",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Doors & Windows",
        "Garage Doors",
        "Locks"
      ]
    },
    {
      "author": "TR-Systems",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hikvision Camera Controller and Alarm Server",
      "documentationUrl": "https://tr-systems.github.io/web/HCC_UserGuide.html",
      "id": "manifest:f7cf2f371f0cacd499a3",
      "manifestUrl": "https://raw.githubusercontent.com/tr-systems/hubpub/code/pkghcc.json",
      "name": "Hikvision Camera Controller",
      "observed": {
        "externalHosts": [
          "www.hikvision.com"
        ],
        "lanPrimitives": [
          "PARSE_LAN_MESSAGE"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Cameras",
        "Monitoring",
        "Motion Control",
        "Safety & Security"
      ]
    },
    {
      "author": "Andrew Davison",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for Hildebrand's Consumer Access Device for SMETS1 and SMETS2 smart meters in the UK.",
      "documentationUrl": "https://github.com/birdslikewires/hubitat/tree/main/hildebrand",
      "id": "hpm:33379680-6ab1-4e5d-8efc-a5bc0343ea82",
      "manifestUrl": "https://raw.githubusercontent.com/birdslikewires/hubitat/main/hildebrand/packageManifest.json",
      "name": "Hildebrand Glow Drivers from BirdsLikeWires",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "MQTT"
      ]
    },
    {
      "author": "Andrew Davison",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for Hive devices.",
      "documentationUrl": "https://github.com/birdslikewires/hubitat/tree/main/hive",
      "id": "hpm:A7ECBF4E-634F-4B5B-BF6B-1D511B830F21",
      "manifestUrl": "https://raw.githubusercontent.com/birdslikewires/hubitat/main/hive/packageManifest.json",
      "name": "Hive Drivers from BirdsLikeWires",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Presence & Location",
        "Safety & Security",
        "Temperature & Humidity",
        "Water Heater",
        "Zigbee"
      ]
    },
    {
      "author": "RamSet",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Seasonal decoration schedules with shared wind and rain protection, darkness sensing, and a security-state veto.",
      "documentationUrl": null,
      "id": "manifest:3fbc6b95ca19fb88636b",
      "manifestUrl": "https://raw.githubusercontent.com/RamSet/hubitat/refs/heads/main/manifest-holiday-decorations.json",
      "name": "Holiday Decorations",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Mike Bishop",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/beta-holiday-lighting/96396",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Themed light shows on RGB lights on holidays",
      "documentationUrl": null,
      "id": "hpm:55aa9e8a-8c19-4b86-a0c5-ee71a8dc60da",
      "manifestUrl": "https://raw.githubusercontent.com/MikeBishop/hpm-intermediate/main/holiday.json",
      "name": "Holiday Lighting",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Dominick Meglio",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-holiday-switcher/26136",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Turn on a switch when it's a holiday and off when it isn't",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-holidayswitcher/blob/master/README.md",
      "id": "hpm:d45cac3e-384b-4d79-8b3f-7bd40b1721f2",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-holidayswitcher/master/packageManifest.json",
      "name": "Holiday Switcher",
      "observed": {
        "externalHosts": [
          "calendarific.com",
          "s3.amazonaws.com",
          "www.paypal.com",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups",
        "Cloud"
      ]
    },
    {
      "author": "ymerj",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/beta-home-assistant-device-bridge/67109",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Utilize your existing Home Assistant devices in Hubitat Elevation automations.",
      "documentationUrl": "https://community.hubitat.com/t/beta-home-assistant-device-bridge/67109",
      "id": "manifest:65dc5b60d9fd11e8b97b",
      "manifestUrl": "https://raw.githubusercontent.com/ymerj/HE-HA-control/main/packageManifest.json",
      "name": "Home Assistant Device Bridge",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 36,
        "urlLiteralCount": 74
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_PLATFORM",
              "name": "Home Assistant",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "home-assistant-hadb",
          "name": "Home Assistant Device Bridge",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Doors & Windows",
        "Garage Doors",
        "Lights & Switches",
        "Misc. Devices",
        "Temperature & Humidity",
        "Tools & Utilities",
        "Water"
      ]
    },
    {
      "author": "Craig Dewar",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-home-connect-integration-control-bosch-siemens-thermador-and-more/160748",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integration for Home Connect appliances (Bosch, Thermador, Siemens, Gaggenau, and Neff). A complete rewrite with enhanced reliability and features.",
      "documentationUrl": "https://github.com/craigde/hubitat-homeconnect-v3/blob/main/README.md",
      "id": "hpm:b7e9c4a2-8d3f-4b1e-a5c6-9f0e2d1a3b8c",
      "manifestUrl": "https://raw.githubusercontent.com/craigde/hubitat-homeconnect-v3/main/packageManifest.json",
      "name": "Home Connect Integration V3",
      "observed": {
        "externalHosts": [
          "api.home-connect.com",
          "cloud.hubitat.com",
          "developer.home-connect.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 14,
        "urlLiteralCount": 20
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Home Connect Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "OAUTH_HTTPS"
            }
          ],
          "documentation": [],
          "id": "home-connect",
          "name": "Home Connect Integration",
          "status": "VERIFIED_REPO"
        }
      ],
      "tags": [
        "Appliances",
        "Cloud"
      ]
    },
    {
      "author": "Jeffrey Zimmerman",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Aggregates temperature, humidity, and other sensor data across rooms, calculates floor averages, and provides environmental logic. It also monitors specific areas for humidity spikes and controls an exhaust fan to normalize humidity within tolerance.",
      "documentationUrl": null,
      "id": "manifest:cb13ffc11ac978dfac2a",
      "manifestUrl": "https://raw.githubusercontent.com/JeffreyZimms/Home-Environment-Aggregator/main/packageManifest.json",
      "name": "Home Environment Aggregator and Logic",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Environment",
        "Humidity Control",
        "Sensors"
      ]
    },
    {
      "author": "Anthony S.",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-homebridge-hubitat-v2-0/54056",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Provides the API interface between Homebridge (HomeKit) and Hubitat.",
      "documentationUrl": "https://github.com/tonesto7/homebridge-hubitat-tonesto7#readme",
      "id": "manifest:62c32310a9fedf4bc6e0",
      "manifestUrl": "https://raw.githubusercontent.com/tonesto7/homebridge-hubitat-tonesto7/master/packageManifest.json",
      "name": "Homebridge v2.0",
      "observed": {
        "externalHosts": [
          "www.howtogeek.com",
          "www.paypal.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 24
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups",
        "HomeKit",
        "Integrations",
        "Misc. Devices",
        "Notifications",
        "Safety & Security",
        "Tools & Utilities",
        "Voice Assistants"
      ]
    },
    {
      "author": "RamSet",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Import any LAN/Wi-Fi HomeKit (HAP) accessory into Hubitat - pair with a setup code and the driver auto-maps the accessory to a Hubitat device. No cloud, no Apple hardware, no Homebridge. Runs on any hub (C5/C7/C8).",
      "documentationUrl": null,
      "id": "manifest:a4b3d4dcbc077e6e0fa0",
      "manifestUrl": "https://raw.githubusercontent.com/RamSet/hubitat/refs/heads/main/manifest-homekit-import.json",
      "name": "HomeKit Import (Local)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 17,
        "urlLiteralCount": 18
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "ecobee Thermostat",
              "runtimeCriticality": "RUNTIME",
              "transport": "HOMEKIT_HAP_LAN"
            }
          ],
          "documentation": [],
          "id": "ecobee-local-hap",
          "name": "Ecobee No Cloud HAP Thermostat",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": []
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-hs-fls100-floodlight-sensor/39283?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "HomeSeer HS-FLS100+ Floodlight Sensor Driver",
      "documentationUrl": null,
      "id": "manifest:dc1ba8c803f9de4d0502",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/HS-FLS100.json",
      "name": "HomeSeer HS-FLS100+ Floodlight Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-homeseer-hsm200-multi-sensor/39899?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "HomeSeer HSM200 Multi Sensor Driver",
      "documentationUrl": null,
      "id": "manifest:ac1555a4a3b249dcc52f",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/HSM200.json",
      "name": "HomeSeer HSM200 Multi Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Zac Shenker",
      "category": "Sensors",
      "classification": "LAN",
      "communityUrl": "https://docs.homeseer.com/products/ps100",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Z-Wave Plus driver for the HomeSeer PS100 24 GHz mmWave presence sensor. Reports presence and motion and exposes per-range sensitivity, no-motion timeout, and LED configuration.",
      "documentationUrl": "https://github.com/zshenker/hubitat-homeseer-ps100/blob/main/README.md",
      "id": "manifest:032557792977cfdffe7b",
      "manifestUrl": "https://raw.githubusercontent.com/zshenker/hubitat-homeseer-ps100/main/packageManifest.json",
      "name": "HomeSeer PS100 mmWave Presence Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Motion",
        "Presence",
        "Sensors",
        "Z-Wave"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Homi Heiman Gas sensor device handler, alerts as standard smoke as Hubitat has no natural gas capability",
      "documentationUrl": null,
      "id": "hpm:eb737e97-7622-44e8-9fcd-64941c07646d",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/HomiHeimanGas.json",
      "name": "Homi Heiman Natural Gas Sensor Device Handler",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Safety & Security"
      ]
    },
    {
      "author": "Taylor Brown(@thecloudtaylor)",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Honeywell Home Intergraion Lyric and T Series Devices (cloud)",
      "documentationUrl": null,
      "id": "hpm:0e3754b1-ab43-4a29-a995-017ffd106f99",
      "manifestUrl": "https://raw.githubusercontent.com/thecloudtaylor/hubitat-packages/main/packages/honeywellManifest.json",
      "name": "Honeywell Home - Lyric and T Series",
      "observed": {
        "externalHosts": [
          "cloud.hubitat.com",
          "developer.honeywellhome.com",
          "www.bing.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Tim Yuhl (@WindowWasher)",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-beta-1-version-of-honeywell-home-thermostats-lyric-etc/57066/355",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Fork of thecloudtaylor's original app/drivers for ongoing maintenance",
      "documentationUrl": "https://github.com/tyuhl/hubitat-honeywell-Maintenance/blob/main/README.md",
      "id": "hpm:bc1eb165-cecc-4813-ab16-efd02d7b2e27",
      "manifestUrl": "https://raw.githubusercontent.com/tyuhl/Hubitat-Packages/refs/heads/main/packages/HoneywellManifest.json",
      "name": "Honeywell Home Integration Lyric and T Series Devices (cloud)",
      "observed": {
        "externalHosts": [
          "cloud.hubitat.com",
          "developer.honeywellhome.com",
          "www.bing.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Cloud",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Brian Wilson",
      "category": "Security",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-envisalink-app-driver-for-vista-ademco-honeywell-alarm-via-smartthings-nodeproxy/9726",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integration with Honeywell Vista/Envisalink Alarm Systems (requires external node-proxy server)",
      "documentationUrl": "https://github.com/bdwilson/hubitat/tree/master/Honeywell",
      "id": "manifest:bf9c809aeff026e9ef89",
      "manifestUrl": "https://raw.githubusercontent.com/bdwilson/hubitat/master/Honeywell/packageManifest.json",
      "name": "Honeywell Security",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 7,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Safety & Security"
      ]
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-advanced-honeywell-t6-pro-z-wave-thermostat-driver/38305?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Advanced Honeywell T6 Pro Thermostat Driver",
      "documentationUrl": null,
      "id": "manifest:c14c2c003fda8d2902ab",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/honeywellT6Pro.json",
      "name": "Honeywell T6 Pro Thermostat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "CSteele",
      "category": null,
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "A Parent/child version of the original",
      "documentationUrl": null,
      "id": "hpm:75e88544-33e9-467b-9064-9954b2646ef3",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/HoneywellThermoParent/main/docs/HoneywellThermoParent.json",
      "name": "Honeywell Thermo Parent",
      "observed": {
        "externalHosts": [
          "www.hubitatcommunity.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 15
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "The older version of the honeywell API total control Thermastat driver (non child device handler) Newer one is not working for me",
      "documentationUrl": null,
      "id": "hpm:fd94e448-3f2d-47a9-adbf-40268c7e6636",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/TotalComfort.json",
      "name": "Honeywell Total Comfort API",
      "observed": {
        "externalHosts": [
          "hubitatcommunity.github.io"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 13
      },
      "reviewed": [],
      "tags": [
        "Climate Control"
      ]
    },
    {
      "author": "Brian Wilson",
      "category": "Security",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-envisalink-app-driver-for-vista-ademco-honeywell-alarm-via-smartthings-nodeproxy/9726",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integration with Honeywell Vista/Envisalink Alarm Systems (Native)",
      "documentationUrl": "https://github.com/bdwilson/hubitat/tree/master/Envisalink",
      "id": "manifest:964cbb68c7d575e6b3da",
      "manifestUrl": "https://raw.githubusercontent.com/bdwilson/hubitat/master/Envisalink/packageManifest.json",
      "name": "Honeywell Vista Envisalink TPI Alarm Integration",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 8,
        "urlLiteralCount": 16
      },
      "reviewed": [],
      "tags": [
        "Safety & Security"
      ]
    },
    {
      "author": "csteele",
      "category": null,
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integrate Honeywell's Total Comfort Control for your WiFi Thermostat.",
      "documentationUrl": null,
      "id": "hpm:05dde39b-e9a8-4589-8d43-77e7556a20fe",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/HoneywellThermo-TCC/master/docs/HoneywellThermo-TCC.json",
      "name": "HoneywellThermo-TCC Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Ken Washington",
      "category": "Utility",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Highly flexible dashboard with HE and ISY hub support and an integrated rule engine",
      "documentationUrl": null,
      "id": "manifest:9047f7cf7e3315935519",
      "manifestUrl": "https://raw.githubusercontent.com/kewashi/HousePanel/master/packageManifest.json",
      "name": "HousePanel",
      "observed": {
        "externalHosts": [
          "www.gnu.org"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Dashboards"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Developers utility that automates the generation of an HPM Manifest, and the merge entry for the Repository.",
      "documentationUrl": null,
      "id": "hpm:6ebe30ae-0cfd-42cb-bfac-dc13309eb914",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/hpmManGenManifest.json",
      "name": "HPM Manifest Generator",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Rob Alfonso",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "HTTP Url's on a multi button virtual device",
      "documentationUrl": null,
      "id": "hpm:475496e8-ad15-4a2b-9a79-77ea0b6523c8",
      "manifestUrl": "https://raw.githubusercontent.com/rob121/hubitat/master/drivers/httpbuttonpad/packageManifest.json",
      "name": "HTTP Button Pad Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Buttons"
      ]
    },
    {
      "author": "Daniel Winks",
      "category": "Presence & Location",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "HTTP Presence Helper App. Provides local and cloud endpoints for present/not present updates of presence/",
      "documentationUrl": null,
      "id": "hpm:5810284c-4abc-4e79-a9f4-fd21d9f90fb4",
      "manifestUrl": "https://raw.githubusercontent.com/DanielWinks/Hubitat-Public/main/PackageManifests/PresenceHelpers/packageManifest.json",
      "name": "HTTP Presence Helper",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Presence & Location",
        "Utility"
      ]
    },
    {
      "author": "Joel Wetzel",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/updated-http-presence-sensor",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A virtual presence sensor that determines its state by trying to contact a device on your network.",
      "documentationUrl": "https://github.com/joelwetzel/Hubitat-HTTP-Presence-Sensor",
      "id": "manifest:f7391117187dfe68cbfe",
      "manifestUrl": "https://raw.githubusercontent.com/joelwetzel/Hubitat-HTTP-Presence-Sensor/master/packageManifest.json",
      "name": "HTTP Presence Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Presence & Location"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Improved HTTP Presence sensor with  adjustable chron schedule. detects 404 file not found and 401 password, for IP cameras asking for a password",
      "documentationUrl": null,
      "id": "manifest:868f025a91532259bf37",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/http_presence_sensor.json",
      "name": "HTTP Presence Sensor with schedule",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Misc. Devices",
        "Monitoring",
        "Presence & Location",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hub Detailed Information Display - An app to combine the Hub Details page with information collected by the Hub Information Driver v3",
      "documentationUrl": null,
      "id": "hpm:4079be7f-a66d-4fea-bca8-6027ceb18ada",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/refs/heads/main/manifests/hubInfoDispManifest.json",
      "name": "Hub Detailed Information Display",
      "observed": {
        "externalHosts": [
          "embed.windy.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/beta-hub-failover-aka-an-opportunity-to-protect-or-destroy-your-environment/103879",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat® Elevation Higher Availability (HE-Ha)  For homes where automation of the environment has become the expected condition it is highly disruptive when a key component fails. In the Hubitat® environment, the loss of the hub is significant, and while the Hub Protection service provides for a replacement hub and permits restoration of the hub’s data and radios there is a delay before the restoration can occur due to shipping. In the ideal world, a secondary hub would be on hot standby and would automatically assume control of the environment if it detected a failure (loss of communication in the primary hub).",
      "documentationUrl": "https://github.com/thebearmay/hubitat/tree/main/heHa#readme",
      "id": "hpm:b08d7f15-470a-442e-86ce-0f9408c1c6bf",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/hubFailoverManifest.json",
      "name": "Hub Failover Manager",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Safety & Security",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Serves files from the hub File Manager, thus permitting images and text files on the hub to be viewed//referenced via the cloud interface.",
      "documentationUrl": null,
      "id": "hpm:d20fd665-34ca-42f6-bbc9-866eb862cfca",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/hubProxyManifest.json",
      "name": "Hub Image Proxy",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/coming-soon-hub-information-driver-v3/109902",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Rewrite of the original Hub Information Driver.  Driver includes 40+ attributes related to the operation and general fitness of the hub.",
      "documentationUrl": "https://htmlpreview.github.io/?https://github.com/thebearmay/hubitat/blob/main/hubInfoQuickRef3.html",
      "id": "hpm:b2af0b32-74c4-473a-ac91-69b95a9d3307",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/hubInfoV3Manifest.json",
      "name": "Hub Information Driver v3",
      "observed": {
        "externalHosts": [
          "api.ipify.org",
          "cloud.aws.hubitat.com",
          "cloud.hubitat.com",
          "htmlpreview.github.io"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 49
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Misc. Devices",
        "Monitoring",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Application allows monitoring of multiple instances of the Hub Information Driver, and will generate notifications for temperature, database size, free memory and IP address changes.",
      "documentationUrl": null,
      "id": "hpm:1e09b985-03b7-4cdc-96dc-2b2e6586a8df",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/hubMonitorManifest.json",
      "name": "Hub Monitor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Monitoring"
      ]
    },
    {
      "author": "Dominick Meglio",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-hub-rebooter-app/30310",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Reboot your hub on a schedule to resolve performance issues",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-rebooter/blob/master/README.md",
      "id": "hpm:cc1ab500-dd35-4929-acaf-763ff98f77d8",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-rebooter/master/packageManifest.json",
      "name": "Hub Rebooter",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com",
          "www.paypal.com",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hub Updater v2 creates a virtual device that allows a single button push to request HE firmware updates for multiple HubMeshed hubs.",
      "documentationUrl": null,
      "id": "hpm:4c231540-9ff4-4a64-b067-8df2c0781f3c",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/hubUpdaterV2Manifest.json",
      "name": "Hub Updater v2",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "PARSE_LAN_MESSAGE"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Misc. Devices"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Application allows the synchronization of hub variables across multiple hubs.",
      "documentationUrl": null,
      "id": "hpm:14eb07f4-b7e6-4d4d-82f8-120290661d46",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/hubVarSyncManifest.json",
      "name": "Hub Variable Sync",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Dan Danache (@dandanache)",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-hub-a-dashery-app/134375",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "View dashboards for your Hubitat hub metrics.",
      "documentationUrl": "https://codeberg.org/dan-danache/hubitat/src/branch/main/hub-a-dashery-app/README.md",
      "id": "hpm:e33f5425-15a2-48f5-8abb-887a3a41b3d6",
      "manifestUrl": "https://codeberg.org/dan-danache/hubitat/raw/branch/main/hub-a-dashery-app/packageManifest.json",
      "name": "Hub-a-Dashery",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Thomas Howard",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "All your graphing needs, hosted locally on your hub!",
      "documentationUrl": null,
      "id": "manifest:8b867723c4046f5dfab0",
      "manifestUrl": "https://raw.githubusercontent.com/tchoward/Hubitat/master/packageManifest.json",
      "name": "HubiGraphs",
      "observed": {
        "externalHosts": [
          "ajax.googleapis.com",
          "api.openweathermap.org",
          "cdn.jsdelivr.net",
          "cdnjs.cloudflare.com",
          "code.getmdl.io",
          "code.jquery.com",
          "embed.windy.com",
          "fonts.googleapis.com",
          "maxcdn.bootstrapcdn.com",
          "s3.amazonaws.com",
          "unpkg.com",
          "www.google.com",
          "www.gstatic.com",
          "www.shareicon.net"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 15,
        "urlLiteralCount": 117
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Victor Santana",
      "category": "Security",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integration with DSC IT-100/Envisalink or Honeywell Vista/Envisalink Alarm Systems (requires SBC or Raspberry Pi). For more information https://github.com/Welasco/HubitatAlarm",
      "documentationUrl": null,
      "id": "manifest:9f609748e34297d087cd",
      "manifestUrl": "https://raw.githubusercontent.com/Welasco/HubitatAlarm/master/packageManifest.json",
      "name": "Hubitat Alarm",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "PARSE_LAN_MESSAGE"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Monitoring",
        "Safety & Security"
      ]
    },
    {
      "author": "J M Pierce / Schwark Satyavolu",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-alarm-com-app/42136",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Alarm.com Panel implementation for Hubitat",
      "documentationUrl": "https://github.com/schwark/hubitatADC",
      "id": "manifest:150bbc8d33cbc7e2122a",
      "manifestUrl": "https://raw.githubusercontent.com/schwark/hubitatADC/master/packageManifest.json",
      "name": "Hubitat Alarm.com Panel",
      "observed": {
        "externalHosts": [
          "images-na.ssl-images-amazon.com",
          "www.alarm.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Chris Truitt",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Trigger Alexa routines from Hubitat using virtual contact sensors (app + drivers).",
      "documentationUrl": "https://github.com/truittchris/hubitat_alexa_routine_trigger#readme",
      "id": "hpm:1102bbe4-20f3-4171-bc97-1020e9931df5",
      "manifestUrl": "https://raw.githubusercontent.com/truittchris/hubitat_alexa_routine_trigger/main/hpm/packageManifest.json",
      "name": "Hubitat Alexa Routine Trigger",
      "observed": {
        "externalHosts": [
          "christruitt.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 14
      },
      "reviewed": [],
      "tags": [
        "Amazon Alexa",
        "Integrations"
      ]
    },
    {
      "author": "Chris Truitt",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver-only variant for triggering Alexa routines without the companion app.",
      "documentationUrl": "https://github.com/truittchris/hubitat_alexa_routine_trigger_driver_only#readme",
      "id": "hpm:48550134-7c44-49dd-8f3e-7941667568f7",
      "manifestUrl": "https://raw.githubusercontent.com/truittchris/hubitat_alexa_routine_trigger_driver_only/main/hpm/packageManifest.json",
      "name": "Hubitat Alexa Routine Trigger (Driver Only)",
      "observed": {
        "externalHosts": [
          "christruitt.com",
          "www.christruitt.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Amazon Alexa",
        "Integrations"
      ]
    },
    {
      "author": "Chris Truitt",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Calendar switch integration for Google and Microsoft/Outlook calendars.",
      "documentationUrl": "https://github.com/truittchris/hubitat_calendar_switch_for_google_and_outlook#readme",
      "id": "hpm:f6195c2c-062a-4d3e-9ae4-4195847bbbf7",
      "manifestUrl": "https://raw.githubusercontent.com/truittchris/hubitat_calendar_switch_for_google_and_outlook/main/hpm/packageManifest.json",
      "name": "Hubitat Calendar Switch (Google and Outlook)",
      "observed": {
        "externalHosts": [
          "accounts.google.com",
          "christruitt.com",
          "cloud.hubitat.com",
          "graph.microsoft.com",
          "login.microsoftonline.com",
          "oauth2.googleapis.com",
          "www.googleapis.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 20
      },
      "reviewed": [],
      "tags": [
        "Calendar",
        "Convenience"
      ]
    },
    {
      "author": "mrmikeface",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Adjust CT when using homekit",
      "documentationUrl": null,
      "id": "hpm:11173a5e-1c12-4679-a6b2-4b363f193000",
      "manifestUrl": "https://raw.githubusercontent.com/mrmikeface/hubitat-homekit-ct-corrector/main/packageManifest.json",
      "name": "Hubitat CT Corrector",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Dan Danache (@dandanache)",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-nodon-zigbee-drivers/141365",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for the following NodOn devices: SIN-4-1-20, SIN-4-1-21, SIN-4-2-20, SIN-4-FP-21, SIN-4-RS-20.",
      "documentationUrl": "https://codeberg.org/dan-danache/hubitat/src/branch/main/nodon-drivers/README.md",
      "id": "hpm:8a5cfb88-1fda-4082-978f-fcaa1e680741",
      "manifestUrl": "https://codeberg.org/dan-danache/hubitat/raw/branch/main/nodon-drivers/packageManifest.json",
      "name": "Hubitat drivers for NodOn smart devices.",
      "observed": {
        "externalHosts": [
          "codeberg.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 6,
        "urlLiteralCount": 27
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Brian Blank",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat Hayward AquaConnect integration (v0.0.2)",
      "documentationUrl": null,
      "id": "hpm:e02cfbd2-7e5b-4d5b-820f-a6b4ce3f3407",
      "manifestUrl": "https://raw.githubusercontent.com/brianblank/HubitatHaywardAquaConnect/main/hpm/packageManifest.json",
      "name": "Hubitat Hayward AquaConnect",
      "observed": {
        "externalHosts": [
          "venmo.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Pools & Spas"
      ]
    },
    {
      "author": "Dominick Meglio",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-hubitat-hub-controller/42074",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control your Hubitat Hub with actions such as shutdown and reboot.",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-hubcontroller/blob/master/README.md",
      "id": "hpm:847ef689-5949-4d8c-a860-f4a3466d1f7c",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-hubcontroller/master/packageManifest.json",
      "name": "Hubitat Hub Controller",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Application allows multiple instances of the Hub Information Driver to be displayed in one space. Also permits the creation of a customized html attribute that can be displayed on a dashboard attribute tile.",
      "documentationUrl": null,
      "id": "hpm:4375e6be-7dc0-4770-8779-ef3420823db4",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/hubInfoAggManifest.json",
      "name": "Hubitat Hub Information Driver Aggregation",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Chris Truitt",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Maps iCal/ICS calendar activity to a Hubitat virtual switch.",
      "documentationUrl": "https://github.com/truittchris/hubitat_calendar_switch_ical#readme",
      "id": "hpm:4ecc5e26-193e-44ab-b9ae-025098480c2a",
      "manifestUrl": "https://raw.githubusercontent.com/truittchris/hubitat_calendar_switch_ical/main/hpm/packageManifest.json",
      "name": "Hubitat iCal Switch",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Calendar",
        "Convenience"
      ]
    },
    {
      "author": "corinuss",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-intellifire-driver/125053",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat interface for controlling Intellifire fireplaces",
      "documentationUrl": "https://github.com/corinuss/Hubitat_IntelliFire/blob/main/README.md",
      "id": "hpm:7cd64587-d285-416d-8363-6eaebc4fd0fe",
      "manifestUrl": "https://raw.githubusercontent.com/corinuss/Hubitat_IntelliFire/main/packageManifest.json",
      "name": "Hubitat IntelliFire",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Climate Control",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Pedro Andrade",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-linktap-driver-for-hubitat-local-integration-through-mqtt/87225",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat driver for smart watering devices from Linktap with local network integration through the use of a MQTT broker",
      "documentationUrl": "https://github.com/pedroandrade1977/Hubitat-LinktapMQTT/blob/main/README.md",
      "id": "hpm:19043f66-ad34-40e6-bbdb-28849b2991e3",
      "manifestUrl": "https://raw.githubusercontent.com/pedroandrade1977/Hubitat-LinktapMQTT/main/packageManifest.json",
      "name": "Hubitat Linktap MQTT Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Irrigation",
        "Valves",
        "Water"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Notifications",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Creates a dashboard tile to display Hubitat Log information",
      "documentationUrl": null,
      "id": "hpm:69a499bc-f667-4092-a1dd-ec210cb221e6",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/logTileManifest.json",
      "name": "Hubitat Log Display Tile",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Dashboards"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Notifications",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Sendmail implemented natively in Hubitat, with or without authentication, uses internal telnet",
      "documentationUrl": null,
      "id": "hpm:305a4180-c9e0-4951-bf40-fc9a7be8caf6",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/LGKSendMailV3.json",
      "name": "Hubitat Native SendMail implementation",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Notifications",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Kurt Sanders",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Monitor and control Hubitat devices, sensors, Hubitat Safety Monitor and Modes quickly from the Apple Menu Bar.  Requires freeware Xbar 2.17-Beta, Python3 v3.11+, Apple macOS v13+",
      "documentationUrl": "https://github.com/KurtSanders/Hubitat-Xbar#hubitat--xbar-for-use-with-hubitat-elevation--apple",
      "id": "hpm:c2e721d7-a207-452c-b7f6-e77634e3d59b",
      "manifestUrl": "https://raw.githubusercontent.com/KurtSanders/Hubitat-Xbar/main/packageManifest.json",
      "name": "Hubitat on Apple Menubar",
      "observed": {
        "externalHosts": [
          "emojipedia.org",
          "github-emoji-picker.vercel.app",
          "upload.wikimedia.org",
          "www.paypal.com",
          "www.webpagefx.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 18
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Device driver that provides a wrapper for the Hubitat Ping endpoint.  sendPing command accepts an IPv4 sring and will send it to the hub, which will do 5 ICMP requests.  Optionally, can be set through the preferences to repeat the ping command on a specified interval.  Returns: percentLoss, avg, min, max, mdev, pingReturn, and presence.  Implements capabilities Acutator, Configuration, and Presence.",
      "documentationUrl": null,
      "id": "hpm:dc44dda5-e732-4c3d-9eea-f4efec8f7d3f",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/hubPingManifest.json",
      "name": "Hubitat Ping Device",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Misc. Devices"
      ]
    },
    {
      "author": "Ben Castellucci",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-powerley-thermostat-and-energy-bridge-driver/54248",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for Powerley devices",
      "documentationUrl": "https://github.com/bcastellucci/hubitat/blob/main/powerley/README.md",
      "id": "hpm:3185fd0e-d5a4-4e94-b178-f57eb95752f7",
      "manifestUrl": "https://raw.githubusercontent.com/bcastellucci/hubitat/main/powerley/packageManifest.json",
      "name": "Hubitat Powerley",
      "observed": {
        "externalHosts": [
          "docs.hubitat.com",
          "opensmarthouse.org",
          "powerley.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 15
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Energy Monitoring",
        "ZWave"
      ]
    },
    {
      "author": "Mathew Beall",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://github.com/mathewbeall/hubitat-resideo_T10-integration",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Complete Hubitat integration for Resideo T10 smart thermostats with OAuth authentication, real-time status updates, and full HVAC control including temperature setpoints, mode changes, and fan control.",
      "documentationUrl": "https://github.com/mathewbeall/hubitat-resideo_T10-integration/blob/main/README.md",
      "id": "manifest:3f03c9f7557d03f0b29a",
      "manifestUrl": "https://raw.githubusercontent.com/mathewbeall/hubitat-resideo_T10-integration/main/packageManifest.json",
      "name": "Hubitat Resideo T10 Integration",
      "observed": {
        "externalHosts": [
          "api.honeywellhome.com",
          "developer.honeywellhome.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 15
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Honeywell",
        "HVAC",
        "Resideo",
        "Thermostats"
      ]
    },
    {
      "author": "codahq",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Unofficial Ring integration for Hubitat",
      "documentationUrl": "https://github.com/HubitatCommunity/hubitat_ring_integration/blob/v0.5.9/README.md",
      "id": "hpm:8d484da8-b7b1-4996-a52d-f8b5028aefa8",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/hubitat_ring_integration/master/packageManifest.json",
      "name": "Hubitat Ring Integration (Unofficial)",
      "observed": {
        "externalHosts": [
          "api.ring.com",
          "cloud.hubitat.com",
          "ifttt.com",
          "oauth.ring.com",
          "paypal.me",
          "prd-api-us.prd.rings.solutions",
          "shop.ring.com",
          "www.w3.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 26,
        "urlLiteralCount": 38
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": []
    },
    {
      "author": "Larry Kahn",
      "category": "Notifications",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A Special notication device for hubitat that gets preformated strings for various alerts and allows you to use its attributes on tiles",
      "documentationUrl": null,
      "id": "hpm:8ab6a7b4-ced7-4ad0-a097-8c061aaf60b2",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/HubitatSmartAlarm.json",
      "name": "Hubitat Smart Alarm",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Notifications",
        "Safety & Security"
      ]
    },
    {
      "author": "dbadge",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A device driver for Tailwind IQ3 Garage Door controller that enables local API based control on the Hubitat Elevation.  This requires official firmware version 9.95 or higher.",
      "documentationUrl": null,
      "id": "hpm:0799679f-a932-4d25-a932-b3c28076e265",
      "manifestUrl": "https://raw.githubusercontent.com/Gelix/HubitatTailwind/main/packageManifest.json",
      "name": "Hubitat Tailwind Garage Door Controller",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Garage Doors"
      ]
    },
    {
      "author": "Tony Fleisher",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/a-z-wave-mesh-tool-c7-only/57054",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A Tool to provide a way to explore Z-Wave Mesh Details. This tool can answer questions like:\n\nWhich devices are acting as repeaters?\nHow many devices are routing through a particular device?\nWhich and How many devices are in a FAILED state?\nWhat devices are neighbors for a given device?",
      "documentationUrl": null,
      "id": "hpm:891046ee-56d2-4b07-bd6b-ad3d75612930",
      "manifestUrl": "https://raw.githubusercontent.com/TonyFleisher/tonyfleisher-hubitat/beta/Apps/mesh-details/packageManifest.json",
      "name": "Hubitat Z-Wave Mesh Details",
      "observed": {
        "externalHosts": [
          "cdn.datatables.net",
          "cdn.jsdelivr.net",
          "cdnjs.cloudflare.com",
          "datatables.net",
          "www.jsdelivr.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Tools & Utilities",
        "ZWave"
      ]
    },
    {
      "author": "Tony Fleisher",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/beta-a-z-wave-mesh-tool-c7-and-2-2-4-only/57054",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Archived version of Z-Wave Mesh Details (v0.9.1.1)",
      "documentationUrl": null,
      "id": "hpm:891046ee-56d2-4b07-bd6b-ad3d75612999",
      "manifestUrl": "https://raw.githubusercontent.com/TonyFleisher/tonyfleisher-hubitat/beta/Apps/mesh-details/archive/packageManifest.json",
      "name": "Hubitat Z-Wave Mesh Details (v0.9.1.1 - ARCHIVED)",
      "observed": {
        "externalHosts": [
          "ajax.googleapis.com",
          "cdn.datatables.net",
          "unpkg.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Tools & Utilities",
        "ZWave"
      ]
    },
    {
      "author": null,
      "category": null,
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Create alerts for your Laundry being done.",
      "documentationUrl": null,
      "id": "hpm:1f21770b-3beb-44e8-b518-0dd6873aef55",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/Hubitat-BetterLaundryMonitor/master/docs/Hubitat-BetterLaundryMonitor.json",
      "name": "Hubitat-BetterLaundryMonitor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Energy Monitoring",
        "LAN",
        "Monitoring"
      ]
    },
    {
      "author": "tomw",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/bose-soundtouch-support/17549/8",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat driver integration for Bose SoundTouch speakers",
      "documentationUrl": "https://github.com/tomwpublic/hubitat_boseSoundTouch/blob/master/README.md",
      "id": "manifest:0420d8d935a85621ae6a",
      "manifestUrl": "https://raw.githubusercontent.com/tomwpublic/hubitat_boseSoundTouch/master/packageManifest.json",
      "name": "hubitat_boseSoundTouch",
      "observed": {
        "externalHosts": [
          "developer.bose.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Speakers"
      ]
    },
    {
      "author": "tomw",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/broadlink-ir-rf-remotes-integration-rm3-mini-rm-pro-rm4-mini-rm4-pro-etc/98827",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat local-only integration for Broadlink universal remote controls.  Supports RM3 Mini, RM Pro, RM4 Mini, RM4 Pro, and other devices.",
      "documentationUrl": "https://github.com/tomwpublic/hubitat_broadlink/blob/main/README.md",
      "id": "manifest:e62f8f536d7c19821407",
      "manifestUrl": "https://raw.githubusercontent.com/tomwpublic/hubitat_broadlink/main/packageManifest.json",
      "name": "hubitat_broadlink",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND",
          "UDP_PROTOCOL"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 10
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Broadlink RM Device",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN"
            }
          ],
          "documentation": [],
          "id": "broadlink",
          "name": "Broadlink IR/RF Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Appliances",
        "Buttons",
        "Climate Control",
        "IR & RF",
        "Misc. Devices"
      ]
    },
    {
      "author": "tomw",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/dahua-and-amcrest-integration-for-cameras-and-doorbells/109047",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat integration for Dahua branded and Dahua-supplied cameras and doorbells.  Supports Dahua, Amcrest, and possibly other brands.",
      "documentationUrl": "https://github.com/tomwpublic/hubitat_dahua/blob/main/README.md",
      "id": "manifest:8cd7bae2fcc361e6d424",
      "manifestUrl": "https://raw.githubusercontent.com/tomwpublic/hubitat_dahua/main/packageManifest.json",
      "name": "hubitat_dahua",
      "observed": {
        "externalHosts": [
          "stackoverflow.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 12
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Dahua / Amcrest Camera",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "dahua-amcrest",
          "name": "Dahua / Amcrest Integration",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Doors & Windows",
        "Monitoring",
        "Presence & Location",
        "Safety & Security"
      ]
    },
    {
      "author": "tomw",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/flume-integration/19149/36",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat integration for Flume water meter devices.  Reports usage by minute, hour, day, week, and month.  Also reports Smart Leak alerts.",
      "documentationUrl": "https://github.com/tomwpublic/hubitat_flume/blob/main/README.md",
      "id": "manifest:626d1ff17d241adf9a30",
      "manifestUrl": "https://raw.githubusercontent.com/tomwpublic/hubitat_flume/main/packageManifest.json",
      "name": "hubitat_flume",
      "observed": {
        "externalHosts": [
          "api.flumewater.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Water"
      ]
    },
    {
      "author": "tomw",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Companion image server app for hubitat_unifiProtect and hubitat_dahua camera integrations.  Hosts snapshot images for dashboards and sends Pushover notifications.",
      "documentationUrl": "https://github.com/tomwpublic/hubitat_imageServer/blob/main/README.md",
      "id": "manifest:0b9c515cf0b21f923a60",
      "manifestUrl": "https://raw.githubusercontent.com/tomwpublic/hubitat_imageServer/main/packageManifest.json",
      "name": "hubitat_imageServer",
      "observed": {
        "externalHosts": [
          "api.pushover.net"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Monitoring",
        "Notifications",
        "Tools & Utilities"
      ]
    },
    {
      "author": "tomw",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/u/tomw/summary",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat integration for the JuiceNet API for JuiceBox EVSE.  Reports charging status, voltage, and power and energy delivery.",
      "documentationUrl": "https://github.com/tomwpublic/hubitat_juiceBox/blob/main/README.md",
      "id": "manifest:1cc0878456a1a81467dd",
      "manifestUrl": "https://raw.githubusercontent.com/tomwpublic/hubitat_juiceBox/main/packageManifest.json",
      "name": "hubitat_juiceBox",
      "observed": {
        "externalHosts": [
          "jbv1-api.emotorwerks.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Vehicles & Transportation"
      ]
    },
    {
      "author": "tomw",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/midea-mini-split-wifi-support/78838/11",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat integration for Midea branded and Midea-supplied air conditioning units.  Provides local LAN control of compatible AC units.",
      "documentationUrl": "https://github.com/tomwpublic/hubitat_midea/blob/main/README.md",
      "id": "manifest:b99a1cd64e4011535f58",
      "manifestUrl": "https://raw.githubusercontent.com/tomwpublic/hubitat_midea/main/packageManifest.json",
      "name": "hubitat_midea",
      "observed": {
        "externalHosts": [
          "www.java2s.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Climate Control",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "tomw",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/leviton-wifi-switches-dimmers/49793/11",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat driver integration for My Leviton Wi-Fi enabled switches and dimmers",
      "documentationUrl": "https://github.com/tomwpublic/hubitat_myLeviton/blob/master/README.md",
      "id": "manifest:754d89cb367256ca2093",
      "manifestUrl": "https://raw.githubusercontent.com/tomwpublic/hubitat_myLeviton/master/packageManifest.json",
      "name": "hubitat_myLeviton",
      "observed": {
        "externalHosts": [
          "my.leviton.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "tomw",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/support-for-ge-appliances-smarthq/85930/12",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat integration for SmartHQ appliances.  Provides updates for common attributes as well as automated control.",
      "documentationUrl": "https://github.com/tomwpublic/hubitat_SmartHQ/blob/main/README.md",
      "id": "manifest:8f3c1fb34dab651e762f",
      "manifestUrl": "https://raw.githubusercontent.com/tomwpublic/hubitat_SmartHQ/main/packageManifest.json",
      "name": "hubitat_SmartHQ",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 10,
        "urlLiteralCount": 10
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "SmartHQ Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "smarthq",
          "name": "GE Appliances SmartHQ",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Appliances",
        "Misc. Devices"
      ]
    },
    {
      "author": "tomw",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/sonos-grouping/18027/37",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat integration for node-sonos-http-api.  Intended as companion functionality for the native Sonos integration on Hubitat.  Supports grouping, album art, and custom actions.",
      "documentationUrl": "https://github.com/tomwpublic/hubitat_sonosButtons/blob/main/README.md",
      "id": "manifest:96b67e26eb4ce575f2bd",
      "manifestUrl": "https://raw.githubusercontent.com/tomwpublic/hubitat_sonosButtons/main/packageManifest.json",
      "name": "hubitat_sonosButtons",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "PARSE_LAN_MESSAGE"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Speakers"
      ]
    },
    {
      "author": "tomw",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/switchbot-gets-an-open-api/61217/17",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat driver integration for SwitchBot devices using the cloud-based SwitchBotAPI, including humidity/temperature sensor, bot, curtain, smart lock, contact sensor, motion sensor, and hub IR functionality",
      "documentationUrl": "https://github.com/tomwpublic/hubitat_switchbot/blob/main/README.md",
      "id": "manifest:a3dcf9453c4af34047de",
      "manifestUrl": "https://raw.githubusercontent.com/tomwpublic/hubitat_switchbot/main/packageManifest.json",
      "name": "hubitat_switchbot",
      "observed": {
        "externalHosts": [
          "api.switch-bot.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 13,
        "urlLiteralCount": 19
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "SwitchBot Cloud or Hub",
              "runtimeCriticality": "RUNTIME",
              "transport": "HTTPS_API"
            }
          ],
          "documentation": [],
          "id": "switchbot",
          "name": "SwitchBot Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Buttons",
        "IR & RF",
        "Lights & Switches",
        "Misc. Devices",
        "Monitoring",
        "Multi Sensors",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "tomw",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/u/tomw/summary",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Hubitat driver integration for UniFi controllers that provides client status without polling",
      "documentationUrl": "https://github.com/tomwpublic/hubitat_unifiEvents/blob/main/README.md",
      "id": "manifest:fcee002916eaceeab391",
      "manifestUrl": "https://raw.githubusercontent.com/tomwpublic/hubitat_unifiEvents/main/packageManifest.json",
      "name": "hubitat_unifiEvents",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Presence & Location"
      ]
    },
    {
      "author": "tomw",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/ubiquiti-unifi-protect-cameras/17624/37",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat driver integration for UniFi Protect controllers, cameras, doorbells, and lights",
      "documentationUrl": "https://github.com/tomwpublic/hubitat_unifiProtect/blob/main/README.md",
      "id": "manifest:303ade72aa6e7d0a49dc",
      "manifestUrl": "https://raw.githubusercontent.com/tomwpublic/hubitat_unifiProtect/main/packageManifest.json",
      "name": "hubitat_unifiProtect",
      "observed": {
        "externalHosts": [
          "dzone.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 6,
        "urlLiteralCount": 10
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_SERVICE",
              "name": "UniFi Protect Controller",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "unifi-protect",
          "name": "UniFi Protect Integration",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Doors & Windows",
        "Monitoring",
        "Presence & Location",
        "Safety & Security"
      ]
    },
    {
      "author": "ZRanger1(JEM)",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-pixelblaze-addressable-led-controller-driver-v1-00/20035",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Device handler for the Pixelblaze addressable LED controller",
      "documentationUrl": "https://github.com/zranger1/hubitatpixelblazedriver/blob/master/README.md",
      "id": "hpm:ecd49978-439b-46ac-95d2-f2c7c2bba0a8",
      "manifestUrl": "https://raw.githubusercontent.com/zranger1/hubitatpixelblazedriver/master/packageManifest.json",
      "name": "HubitatPixelblazeDriver",
      "observed": {
        "externalHosts": [
          "discover.electromage.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "ZRanger1(JEM)",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-philips-wiz-color-light-driver-v1-01/31818",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Device handler for Philips Wiz Color Bulbs",
      "documentationUrl": "https://raw.githubusercontent.com/zranger1/HubitatWizLightDriver/master/README.md",
      "id": "hpm:588f54ce-1cef-4f3a-a481-025909bcba8d",
      "manifestUrl": "https://raw.githubusercontent.com/ZRanger1/HubitatWizLightDriver/master/packageManifest.json",
      "name": "HubitatWizLightDriver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "SEND_HUB_COMMAND",
          "UDP_PROTOCOL"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Bloodtick Jones",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-hubithings-replica/107976",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Hubitat Application to manage SmartThings Devices allowing real-time bi-direction updates between devices, modes and scenes utilizing the SmartThings OAuth Cloud API. Includes the ability to have multiple ST locations with multiple ST hubs replicated to a single Hubitat hub. It is not a requirement to have a ST hub to operate mirror functions to cloud native ST devices.",
      "documentationUrl": null,
      "id": "hpm:4611a36f-d271-4e2b-ab89-55a41a5ab133",
      "manifestUrl": "https://raw.githubusercontent.com/bloodtick/Hubitat/main/hubitat-packages/manifests/manifestHubiThings.json",
      "name": "HubiThings Replica",
      "observed": {
        "externalHosts": [
          "account.smartthings.com",
          "api.smartthings.com",
          "cloud.hubitat.com",
          "community.sharptools.io",
          "community.smartthings.com",
          "datatables.net",
          "developer.smartthings.com",
          "fontawesomeicons.com",
          "gist.github.com",
          "js-naturalsort.googlecode.com",
          "schemas.xmlsoap.org",
          "weather.com",
          "wiki.webcore.co",
          "www.airnow.gov",
          "www.paypal.com",
          "www.paypalobjects.com",
          "www.svgrepo.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 27,
        "urlLiteralCount": 119
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_PLATFORM",
              "name": "SmartThings Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "OAUTH_HTTPS"
            }
          ],
          "documentation": [],
          "id": "hubithings-replica",
          "name": "HubiThings Replica",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Automations & Groups",
        "Cloud",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Schwark Satyavolu",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-hunter-douglas-platinum-gateway-support/122761",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat Implementation for Hunter Douglas Platinum Shades",
      "documentationUrl": "https://github.com/schwark/hubitat-hunterdouglasplatinum",
      "id": "manifest:0e90a01b8497d83c7116",
      "manifestUrl": "https://raw.githubusercontent.com/schwark/hubitat-hunterdouglasplatinum/main/PackageManifest.json",
      "name": "Hunter Douglas Platinum Shades",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "imnot_bob",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/husqvarna-automower-integration/76550",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "AutoMower Integration for Hubitat - control and monitor your Husqvarna AutoMower on your Hubitat system",
      "documentationUrl": "https://wiki.webcore.co",
      "id": "manifest:367e5783c26d38475ab4",
      "manifestUrl": "https://raw.githubusercontent.com/imnotbob/AutoMower/master/HE/packageManager.json",
      "name": "Husqvarna AutoMower Manager",
      "observed": {
        "externalHosts": [
          "api.amc.husqvarna.dev",
          "api.authentication.husqvarnagroup.dev",
          "cloud.hubitat.com",
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 30
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups",
        "LAN",
        "Misc. Devices",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Reid Baldwin",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "HVAC Equipment and Zoning Control",
      "documentationUrl": null,
      "id": "manifest:f1783bc47c82940e71cc",
      "manifestUrl": "https://raw.githubusercontent.com/rbaldwi3/HVAC/master/HVACZoneManifest.json",
      "name": "HVAC Zoning",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Nelson Clark",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Fully automate Hydro Quebec's Winter Events for all available programs they offer as of winter 2024-2025",
      "documentationUrl": null,
      "id": "hpm:41d4d3de-5113-4844-97e3-058a9b0723cc",
      "manifestUrl": "https://raw.githubusercontent.com/NelsonClark/Hubitat/refs/heads/main/Apps/Hydro-Quebec_Dynamic_Pricing/packageManifest.json",
      "name": "Hydro-Quebec Dynamic Pricing",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Tim Yuhl (@WindowWasher)",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-hyundai-bluelink-remote-start-lock-support-beta/79044",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Hyundai Bluelink Integration for Remote Climate Start/Stop/Lock/Unlock",
      "documentationUrl": "https://github.com/tyuhl/Hyundai-Bluelink/blob/main/README.md",
      "id": "hpm:82dbcc8f-1503-4ef4-8668-c3a99055bcd0",
      "manifestUrl": "https://raw.githubusercontent.com/tyuhl/Hubitat-Packages/refs/heads/main/packages/BluelinkManifest.json",
      "name": "Hyundai Bluelink Integration for Hubitat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Vehicles & Transportation"
      ]
    },
    {
      "author": "Vyrolan",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-iaqualink-pool-spa-driver/94010",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "iAqualink driver to integrate pool/spa control into Hubitat",
      "documentationUrl": "https://github.com/Vyrolan/VyrolanHomeAutomation/blob/main/Hubitat/Drivers/iAqualink/README.md",
      "id": "manifest:b62421f197ff4cb9df89",
      "manifestUrl": "https://raw.githubusercontent.com/Vyrolan/VyrolanHomeAutomation/main/Hubitat/Drivers/iAqualink/packageManifest.json",
      "name": "iAqualink Driver",
      "observed": {
        "externalHosts": [
          "p-api.iaqualink.net",
          "prod.zodiac-io.com",
          "r-api.iaqualink.net"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Pools & Spas"
      ]
    },
    {
      "author": "Mike Bishop",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integrates Hubitat with the iCOMM service for State and A.O. Smith hybrid water heaters.",
      "documentationUrl": null,
      "id": "hpm:9058016b-46bf-4e01-91b0-a3dfd026174f",
      "manifestUrl": "https://raw.githubusercontent.com/MikeBishop/hpm-intermediate/main/icomm.json",
      "name": "iCOMM for Hubitat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Water Heater"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-idle-node-refresher/56613",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Application to refresh nodes that have not been used for an extended period of time",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/applications/idle-node-refresher",
      "id": "manifest:ad9cf8e1a9507e118036",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/idle-node-refresher.json",
      "name": "Idle Node Refresher",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities",
        "ZWave"
      ]
    },
    {
      "author": "mbarone",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Use iFrame content several ways on your dashboards",
      "documentationUrl": null,
      "id": "hpm:bz26a894-gd10-44c6-96a1-38ac0daab22f",
      "manifestUrl": "https://raw.githubusercontent.com/michaelbarone/hubitat/master/packagemanager/iFrameAdvanced.json",
      "name": "iFrameAdvanced",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Multimedia",
        "Tools & Utilities"
      ]
    },
    {
      "author": "RamSet",
      "category": "Air Quality",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Publishes IKEA Vindstyrka (E2112) PM2.5, air quality, temperature, and humidity into Hub Variables for indoor and outdoor sensors.",
      "documentationUrl": null,
      "id": "manifest:ac975c8d0035f58978cb",
      "manifestUrl": "https://raw.githubusercontent.com/RamSet/hubitat/refs/heads/main/manifest-ikea-aqi.json",
      "name": "IKEA Air Quality to Hub Variables",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Aniva",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Custom Matter Bridge driver for IKEA DIRIGERA Hub to access Zigbee devices added to the Hub.",
      "documentationUrl": "https://github.com/aniva/hubitat01/blob/master/DirigeraBridge/README.md",
      "id": "manifest:89379e8cc8b2a6d37714",
      "manifestUrl": "https://raw.githubusercontent.com/aniva/hubitat01/master/DirigeraBridge/packageManifest.json",
      "name": "IKEA DIRIGERA Bridge",
      "observed": {
        "externalHosts": [
          "encrypted-tbn0.gstatic.com",
          "paypal.me"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Bridge",
        "Hub",
        "IKEA",
        "Matter"
      ]
    },
    {
      "author": "Andrew Davison",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for IKEA devices connected via Zigbee2MQTT Routing.",
      "documentationUrl": "https://github.com/birdslikewires/hubitat/tree/main/ikea",
      "id": "hpm:e1083647-4e18-4f5f-9bc8-fe987922dcb1",
      "manifestUrl": "https://raw.githubusercontent.com/birdslikewires/hubitat/main/ikea/packageManifest.json",
      "name": "IKEA Drivers via Zigbee2MQTT from BirdsLikeWires",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "MQTT",
        "Repeaters & Extenders"
      ]
    },
    {
      "author": "Aniva",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Dedicated DIRIGERA hub driver for IKEA PARASOLL Door/Window sensor.",
      "documentationUrl": "https://github.com/aniva/hubitat01/blob/master/IkeaParasoll/README.md",
      "id": "manifest:8e8fdc3e51458d6cc408",
      "manifestUrl": "https://raw.githubusercontent.com/aniva/hubitat01/master/IkeaParasoll/packageManifest.json",
      "name": "IKEA PARASOLL Matter Zigbee Sensor",
      "observed": {
        "externalHosts": [
          "paypal.me",
          "www.ikea.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Contact",
        "IKEA",
        "Matter",
        "Sensor",
        "Zigbee"
      ]
    },
    {
      "author": "Aniva",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Dedicated Matter driver for IKEA TIMMERFLOTTE Temp & Humidity sensor.",
      "documentationUrl": "https://github.com/aniva/hubitat01/blob/master/IkeaTimmerflotte/README.md",
      "id": "manifest:037887a8cbfd2c5ea1ff",
      "manifestUrl": "https://raw.githubusercontent.com/aniva/hubitat01/master/IkeaTimmerflotte/packageManifest.json",
      "name": "IKEA TIMMERFLOTTE Matter Sensor",
      "observed": {
        "externalHosts": [
          "paypal.me"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Matter Fabric / Bridge",
              "runtimeCriticality": "RUNTIME",
              "transport": "MATTER_IP"
            }
          ],
          "documentation": [],
          "id": "matter-bridge",
          "name": "Matter Bridge / Controller",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "IKEA",
        "Matter",
        "Sensor"
      ]
    },
    {
      "author": "Joel Wetzel",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-ikea-tradfri-puck-driver",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A driver for the IKEA puck device.",
      "documentationUrl": "https://github.com/joelwetzel/Hubitat-IKEA-Tradfri",
      "id": "manifest:958317301bf31dddd9c3",
      "manifestUrl": "https://raw.githubusercontent.com/joelwetzel/Hubitat-IKEA-Tradfri/master/packageManifest.json",
      "name": "IKEA Trådfri Puck Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Eliot Stocker",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/tradfri-led-rgb-bulb/5524/82",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A fully functional Hubitat RGBW driver for Ikea Bulbs",
      "documentationUrl": "https://github.com/eliotstocker/hubitat-ikea-rgbw/blob/main/README.md",
      "id": "manifest:6994ef9a298c812559c5",
      "manifestUrl": "https://raw.githubusercontent.com/eliotstocker/hubitat-ikea-rgbw/main/package-manifest.json",
      "name": "Ikea Trådfri RGBW Bulb driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Zigbee"
      ]
    },
    {
      "author": "Dan Danache (@dandanache)",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-ikea-zigbee-drivers/123853",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for most of the IKEA Zigbee smart devices including TRADFRI lights.",
      "documentationUrl": "https://codeberg.org/dan-danache/hubitat/src/branch/main/ikea-zigbee-drivers/README.md",
      "id": "hpm:a3f40cb1-ae2d-4a93-9e0c-f831634651c3",
      "manifestUrl": "https://codeberg.org/dan-danache/hubitat/raw/branch/main/ikea-zigbee-drivers/packageManifest.json",
      "name": "IKEA Zigbee drivers",
      "observed": {
        "externalHosts": [
          "codeberg.org",
          "en.wikipedia.org",
          "www.urbandictionary.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 23,
        "urlLiteralCount": 139
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Lights & Switches",
        "Zigbee"
      ]
    },
    {
      "author": "Simon Burke (sburke781)",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/project-image-cycle-tile-e-g-weather-radar/79742",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Cycles images using a locally stored HTML file and listing of image URLs in local JSON file",
      "documentationUrl": null,
      "id": "manifest:8a9f44216bb7dca87c34",
      "manifestUrl": "https://raw.githubusercontent.com/sburke781/hubitat/master/ImageCycle/packageManifest.json",
      "name": "Image Cycle",
      "observed": {
        "externalHosts": [
          "ajax.googleapis.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Denny Page",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/influxdb-logger/110548",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Log Hubitat device states to an InfluxDB database",
      "documentationUrl": null,
      "id": "manifest:7abc25a79ef01d4588a9",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/InfluxDB-Logger/master/PackageManifest.json",
      "name": "InfluxDB-Logger",
      "observed": {
        "externalHosts": [
          "docs.influxdata.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Jed Brown",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A Hubitat App to allow Hubitat Evolution events to be viewable inside an Initial State Event Bucket in your https://www.initialstate.com account.",
      "documentationUrl": null,
      "id": "manifest:dc9c74f67506d323d493",
      "manifestUrl": "https://raw.githubusercontent.com/jedbro/initialstate-smartapp/master/packageManifest.json",
      "name": "Initial State Event Streamer",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com",
          "www.initialstate.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Dashboards"
      ]
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-improved-lzw-60-inovelli-4-in-1-sensor-driver/37744?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Inovelli 4-in-1 Sensor Driver",
      "documentationUrl": null,
      "id": "manifest:2ad0c8c5b0632d543796",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/inovelli4in1.json",
      "name": "Inovelli 4-in-1 Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Kevin Kahl",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-inovelli-white-series-vtm31-sn-matter-community-driver/165102",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver package for Inovelli Dimmer White Series VTM31-SN. Supports full parameter and LED notification bar configuration.",
      "documentationUrl": null,
      "id": "hpm:810329c5-4b25-47e3-a067-d7496a6608a6",
      "manifestUrl": "https://raw.githubusercontent.com/kahlkevin/hpm-repo/main/inovelli_vtm31sn.json",
      "name": "Inovelli Dimmer White Series VTM31-SN",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Lights & Switches",
        "Matter"
      ]
    },
    {
      "author": "Eric Maycock",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers provided by Inovelli",
      "documentationUrl": null,
      "id": "manifest:010c04e29e8ffc724f02",
      "manifestUrl": "https://raw.githubusercontent.com/InovelliUSA/Hubitat/master/Drivers/driversG1.json",
      "name": "Inovelli Drivers (Gen 1)",
      "observed": {
        "externalHosts": [
          "inovelli.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 11,
        "urlLiteralCount": 40
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Eric Maycock",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers provided by Inovelli",
      "documentationUrl": "https://support.inovelli.com/portal/en/kb/inovelli",
      "id": "manifest:f6ec99d8234b760c1891",
      "manifestUrl": "https://raw.githubusercontent.com/InovelliUSA/Hubitat/master/Drivers/driversG2.json",
      "name": "Inovelli Drivers (Gen 2)",
      "observed": {
        "externalHosts": [
          "community-assets.home-assistant.io",
          "community.inovelli.com",
          "inov.li",
          "inovelli-my.sharepoint.com",
          "nathanfiscus.github.io"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 18,
        "urlLiteralCount": 70
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-inovelli-bulbs-drivers-lzw41-lzw42/30922?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Inovelli LZW42 Multi-Color Bulb Driver",
      "documentationUrl": null,
      "id": "manifest:826b51f2791d15c4f265",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/inovelliLZW42Bulb.json",
      "name": "Inovelli Multi-Color Bulb",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-inovelli-bulbs-drivers-lzw41-lzw42/30922?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Inovelli LZW41 Multi-White Bulb Driver",
      "documentationUrl": null,
      "id": "manifest:f0b24419cf6ea5d3ba90",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/inovelliLZW41Bulb.json",
      "name": "Inovelli Multi-White Bulb",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Albert Mulder",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/intecular-invisoutlet-hubitat-mqtt-app-drivers-beta/165173",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "InvisOutlet integration. App + MQTT required; device drivers optional/selectable.",
      "documentationUrl": "https://github.com/almulder/Hubitat-Drivers/tree/main/Intecular",
      "id": "manifest:6a2d378eec411ada0c63",
      "manifestUrl": "https://raw.githubusercontent.com/almulder/Hubitat-Drivers/main/hpm/InvisOutlet.json",
      "name": "INTECULAR™ MQTT Connector",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Misc. Devices",
        "MQTT"
      ]
    },
    {
      "author": "Hugo Haas",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-internet-connection-monitor/119585",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Hubitat driver to monitor internet connection",
      "documentationUrl": "https://github.com/hugoh/hubitat-internet-monitor/blob/master/README.md",
      "id": "hpm:7B07EA71-775D-489C-B28B-26A93BBE4930",
      "manifestUrl": "https://raw.githubusercontent.com/hugoh/hubitat-internet-monitor/master/packageManifest.json",
      "name": "Internet Connection Monitor",
      "observed": {
        "externalHosts": [
          "detectportal.firefox.com",
          "www.gstatic.com",
          "www.msftncsi.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Monitoring"
      ]
    },
    {
      "author": "nh.schottfam",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/intesishome-integration/41142",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "intesisHome Thermostat for Hubitat",
      "documentationUrl": null,
      "id": "manifest:b1cdf2031ae6595fa109",
      "manifestUrl": "https://raw.githubusercontent.com/imnotbob/Hubitat-Intesis/master/packageManager.json",
      "name": "IntesisHome",
      "observed": {
        "externalHosts": [
          "user.intesishome.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 7
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Home Connect Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "OAUTH_HTTPS"
            }
          ],
          "documentation": [],
          "id": "home-connect",
          "name": "Home Connect Integration",
          "status": "VERIFIED_REPO"
        }
      ],
      "tags": [
        "Climate Control",
        "LAN"
      ]
    },
    {
      "author": "James Shimota",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-inverse-link-two-switches/125687",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A Parent App with children to set two switches to always be inversed to each other.  Can be disabled with its own switch.  Useful for folks who hate boolean!",
      "documentationUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Apps/inverse_link/README.md",
      "id": "manifest:2d0ae38b16be57dc0674",
      "manifestUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Apps/inverse_link/packageManifest.json",
      "name": "Inverse Link Two Switches",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "AutoOn",
        "Dashboards",
        "Lights & Switches",
        "Misc. Devices",
        "Monitoring",
        "Open/Closed",
        "Presence",
        "Virtual"
      ]
    },
    {
      "author": "Armand Welsh",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": true
      },
      "description": "Add support to Hubitat for iopool's EcO pool / spa water quality monitor.  iopool can also be used breath new life into the no-longer support pHin pool monitor.  The iopool EcO is used to track water pH, Oxidation-reduction potential (ora), and temperature.",
      "documentationUrl": "https://raw.githubusercontent.com/apwelsh/hubitat/master/iopool/README.md",
      "id": "hpm:1fb918e8-21aa-419c-a98d-828673b174dc",
      "manifestUrl": "https://raw.githubusercontent.com/apwelsh/hubitat/master/iopool/packageManifest.json",
      "name": "iopool EcO Pool/Spa Monitor",
      "observed": {
        "externalHosts": [
          "api.iopool.com",
          "img.shields.io",
          "www.paypal.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "LAN",
        "Monitoring",
        "Multi Sensors",
        "Pools & Spas",
        "Water"
      ]
    },
    {
      "author": "Dan Ogorchock",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-iotawatt-power-monitor-driver/7488?u=ogiewon",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "IoTaWatt whole home energy monitoring system driver.",
      "documentationUrl": "https://github.com/ogiewon/Hubitat/blob/master/Drivers/iotawatt-parent.src/README.md",
      "id": "manifest:368afda6e35d05c80b2c",
      "manifestUrl": "https://raw.githubusercontent.com/ogiewon/Hubitat/refs/heads/master/Drivers/iotawatt-parent.src/iotawatt-parent.json",
      "name": "IoTaWatt Parent",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "LAN",
        "Monitoring"
      ]
    },
    {
      "author": "Ryan Elliott",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "An driver for integrating IoTaWatt into Hubitat.",
      "documentationUrl": null,
      "id": "hpm:6f7e9d2f-bfc2-42ff-b733-6b609214584f",
      "manifestUrl": "https://raw.githubusercontent.com/FriedCheese2006/IoTaWattPlus/main/IoTaWatt%2B.json",
      "name": "IoTaWatt+",
      "observed": {
        "externalHosts": [
          "friedcheese2006.gateway.scarf.sh"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Monitoring",
        "Tools & Utilities",
        "Utility"
      ]
    },
    {
      "author": "Joel Wetzel",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/updated-iphone-wifi-presence-sensor",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Detect presence of either an iPhone or an Android smartphone.  It detects that they have connected to your home network.",
      "documentationUrl": "https://github.com/joelwetzel/Hubitat-iPhone-Presence-Sensor",
      "id": "manifest:039e512fcf6379e05bcd",
      "manifestUrl": "https://raw.githubusercontent.com/joelwetzel/Hubitat-iPhone-Presence-Sensor/master/packageManifest.json",
      "name": "iPhone WiFi Presence Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Presence & Location"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Improved Iris CentraLite Samjin Smartthings water Sensor with Presence,Tamper for Centralite and better drop out detection,battery support",
      "documentationUrl": null,
      "id": "manifest:3cf17f2562593e85cdfa",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/centralite-water-sensor.json",
      "name": "Iris CentraLite Samjin Smartthings water Sensor",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Safety & Security",
        "Water",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Security",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Verifies state after turn and off. No more refusing to turn off,Presence,Auto dead bat detection, Auto time off timmer that works.",
      "documentationUrl": null,
      "id": "manifest:c84626f58936b4b2029c",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/iris-utilitech-siren.json",
      "name": "Iris Utilitech Siren driver",
      "observed": {
        "externalHosts": [
          "products.z-wavealliance.org",
          "www.paypal.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Misc. Devices",
        "Safety & Security",
        "ZWave"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Security",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "IRIS v1 button with improved battery reports and Presence. Auto dead bat detection. 3 Button support for easer scripts. pressed,held,held longer, button 1 pressed button 2 held button 3 held longer",
      "documentationUrl": null,
      "id": "manifest:01c04d48ceec732a8f0d",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/iris-v1-button.json",
      "name": "iris v1 button",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Presence & Location",
        "Safety & Security",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Security",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Iris v1 Contact Sensor custom. With presence and proper battery support. No more negative battery readings. Includes option to use as a mains detection swith with a relay.Note relay must have time delay so it renergised after hub has powered up.",
      "documentationUrl": null,
      "id": "manifest:8a8e0bc9aaf988d740d9",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/iris-v1-contact.json",
      "name": "Iris v1 Contact Sensor-custom",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Buttons",
        "Doors & Windows",
        "Presence & Location",
        "Safety & Security",
        "Temperature & Humidity",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Rewritten Iris v1 kefob. Supports holdable buttons , presence recovery no more false no presence toggles. and adjustable timeout. New battery support no negative voltage readings. Also supports custom mode AWAY/HOME",
      "documentationUrl": null,
      "id": "manifest:b02b11578799450c019e",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/iris-v1-keyfob.json",
      "name": "Iris v1 keyfob custom",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Presence & Location",
        "Safety & Security",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Security",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-iris-v1-keypad-driver/80247",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "IRIS v1 keypad driver.Provides arm disarm and button remapping. 15 digit pins supported. Keypad supports 13 diffrent chimes under play command. Option for Silent arming. Many setup options, Info,debug,trace logs. Use as chimes or alarms, Bad pin can set tamper, Unlike newer keypads it can cancel a safety alarm if the alarm is disarmed. Supports arming with or without a valid PIN. Supports Remapping ON PART # * buttons as armaway armhome armnight as you see fit.",
      "documentationUrl": "http://www.winnfreenet.com/wp/2021/09/iris-v1-keyboard-driver-for-hubitat/",
      "id": "manifest:6042178cc7d0f666b5e9",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/irisv1keypad.json",
      "name": "Iris v1 Keypad",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Buttons",
        "Lights & Switches",
        "Locks",
        "Misc. Devices",
        "Presence & Location",
        "Safety & Security",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Iris v1 Motion Sensor. With presence and proper battery support. No more negative battery readings",
      "documentationUrl": null,
      "id": "manifest:6fb2ece627bb27f3fc2b",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/iris_v1_motion_sensor.json",
      "name": "Iris v1 Motion Detector Custom",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Lights & Switches",
        "Motion Control",
        "Presence & Location",
        "Safety & Security",
        "Temperature & Humidity",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Iris v1 extender driver. Supports battery and presence. Zigbee side",
      "documentationUrl": null,
      "id": "manifest:64e0a477fc2b8e0c6fcf",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/iris_v1_repeator_zigbee.json",
      "name": "Iris v1 Repeator Zigbe",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Repeaters & Extenders",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Security",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-iris-v1-senior-care-pendant-driver/81814",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Simulates IRIS v1 pay care level system. Pressing button triggers alarm on dashboard and beeps red until dashboard alarm is turned off this notifies pendant holder by beeping green. Requires yuo add it to dashboard as a switch and as presence. Option to use as a straight Keyfob",
      "documentationUrl": null,
      "id": "manifest:89ffacc3e3d6084e290b",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/Iris_v1_Senior_Care_Pendant.json",
      "name": "Iris v1 Senior Care Pendant",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Buttons",
        "Monitoring",
        "Presence & Location",
        "Safety & Security",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Iris v1 Smart Plug driver With power monitoring watts and kwh, presence. Old version for compatability same as no alarm",
      "documentationUrl": "http://www.winnfreenet.com/wp/2021/09/iris-alertme-smart-plug-driver-for-hubitat/",
      "id": "manifest:a5eb6db7aeaff36b91ef",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/irisv1-smart-plug.json",
      "name": "Iris v1 Smart Plug custom",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Energy Monitoring",
        "Lights & Switches",
        "Misc. Devices",
        "Presence & Location",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Iris v1 Smart Plug driver With power monitoring watts and kwh, presence",
      "documentationUrl": "http://www.winnfreenet.com/wp/2021/09/iris-alertme-smart-plug-driver-for-hubitat/",
      "id": "manifest:3bd0f4737937fc714714",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/irisv1-smart-plug2.json",
      "name": "Iris v1 Smart Plug custom No alarm",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Energy Monitoring",
        "Lights & Switches",
        "Misc. Devices",
        "Presence & Location",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Iris v1 Smart Plug driver With power monitoring watts and kwh, presence and support for using as a alarm or strobe using low cost strobes and sirens",
      "documentationUrl": "http://www.winnfreenet.com/wp/2021/09/iris-alertme-smart-plug-driver-for-hubitat/",
      "id": "manifest:c2b35d5a3c5200f1fc97",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/irisv1-smart-plug3.json",
      "name": "Iris v1 Smart Plug custom With Alarm",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Buttons",
        "Energy Monitoring",
        "Lights & Switches",
        "Misc. Devices",
        "Presence & Location",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Security",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Iris v2 contact sensor with presence. Automatic bad battery detection presence, iMagic by GreatStar 1116-S & CentraLite 3320-L",
      "documentationUrl": null,
      "id": "manifest:72f88b33c6ce20d2e239",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/iris-v2-contact.json",
      "name": "Iris v2 Contact Sensor",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Buttons",
        "Doors & Windows",
        "Presence & Location",
        "Safety & Security",
        "Temperature & Humidity",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Iris v2 Motion Sensor with presence. CentraLite Model:3326-L",
      "documentationUrl": null,
      "id": "manifest:8deb2f80f69af417372f",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/iris-v2-motion-sensor.json",
      "name": "Iris v2 Motion Detector",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Lights & Switches",
        "Motion Control",
        "Presence & Location",
        "Safety & Security",
        "Temperature & Humidity",
        "Zigbee"
      ]
    },
    {
      "author": "Aaron Ward",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-irobot-scheduler/22873",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "iRobot Scheduler is an application and device that enables local execution and scheduling of Roomba and Brava cleaning tasks in assistance with a Raspberry Pi running Dorita980 and Rest980. This application and device works with ALL WiFi enabled Roomba and Braava devices.",
      "documentationUrl": "https://github.com/PrayerfulDrop/Hubitat/blob/master/Roomba/README.md",
      "id": "manifest:04806a5fdfc03856e681",
      "manifestUrl": "https://raw.githubusercontent.com/PrayerfulDrop/Hubitat/master/Roomba/packageManifest.json",
      "name": "iRobot Scheduler",
      "observed": {
        "externalHosts": [
          "paypal.me",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 16
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "David Kilgore",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-irobot-scheduler/22873",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "iRobot Scheduler is an application and device that enables local execution and scheduling of Roomba and Brava cleaning tasks in assistance with a Raspberry Pi running Dorita980 and Rest980. This application and device works with ALL WiFi enabled Roomba and Braava devices.",
      "documentationUrl": "https://github.com/dkilgore90/iRobot/blob/master/Roomba/README.md",
      "id": "hpm:7021a020-026c-4923-b2f0-63390c242a68",
      "manifestUrl": "https://raw.githubusercontent.com/dkilgore90/iRobot/master/Roomba/packageManifest.json",
      "name": "iRobot Scheduler",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Cleaning Devices"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Notifications",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "An App ported from smartthings that checks various door windows etc on mode change and alerts if secure or open, and will try to re-lock doors if unlocked.",
      "documentationUrl": null,
      "id": "hpm:a7f7ba47-a636-4a49-8b53-805d41f87a8b",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/IsMyHomeSecure.json",
      "name": "Is My Home Secure",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Safety & Security"
      ]
    },
    {
      "author": "Supun Vidana Pathiranage",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Itho (NRG) Wi-Fi Controller. Control your Itho (NRG) fan",
      "documentationUrl": null,
      "id": "hpm:9846bb55-a6de-4bfa-8857-6ac323f0e54b",
      "manifestUrl": "https://raw.githubusercontent.com/vpsupun/hubitat/master/IthoNRG/packageManifest.json",
      "name": "Itho NRG",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "LAN",
        "Misc. Devices",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "David Gutheinz",
      "category": "Utility",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-kasa-camera-integration/118182",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Kasa Camera / Doorbell Integration",
      "documentationUrl": "https://github.com/DaveGut/kasaCam_Hubitat/blob/main/README.md",
      "id": "manifest:10c51900de6c429c1014",
      "manifestUrl": "https://raw.githubusercontent.com/DaveGut/kasaCam_Hubitat/refs/heads/main/packageManifest.json",
      "name": "Kasa Camera",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND",
          "UDP_PROTOCOL"
        ],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 17
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "TP-Link Kasa Devices",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN"
            }
          ],
          "documentation": [
            {
              "sourceType": "HUBITAT_OFFICIAL_DOC",
              "title": "Kasa Integration",
              "url": "https://docs2.hubitat.com/en/apps/kasa-integration"
            }
          ],
          "id": "kasa-native",
          "name": "Kasa Integration",
          "status": "VERIFIED_CORE"
        }
      ],
      "tags": [
        "LAN",
        "Monitoring",
        "Security"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Keen Smart Vent Device Handler that adds temp. and pressure monitoring not in the stock device handler, also adds switch, contact and door capabilities",
      "documentationUrl": null,
      "id": "hpm:0b16800d-2d53-4fa1-b6fe-a11cf7aa8a77",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/KeenVentLGK.json",
      "name": "Keen Vent LGK",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Climate Control"
      ]
    },
    {
      "author": "napalmcsr",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Controls Keen Vents using temp sensors",
      "documentationUrl": null,
      "id": "manifest:8935fad8d49df3c9f089",
      "manifestUrl": "https://raw.githubusercontent.com/napalmcsr/Hubitat_Napalmcsr/master/docs/keenectManifest.json",
      "name": "Keenect Lite",
      "observed": {
        "externalHosts": [
          "somedomain.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Dominick Meglio",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integrates Kevo Plus locks into your Hubitat system",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-kevo/blob/master/README.md",
      "id": "hpm:4ab2b5cb-a018-418a-9671-c18f2f0d2323",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-kevo/master/packageManifest.json",
      "name": "Kevo Plus Integration",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com",
          "www.mykevo.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Locks"
      ]
    },
    {
      "author": "Schwark Satyavolu",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Kidde HomeSafe for Hubitat",
      "documentationUrl": null,
      "id": "manifest:c43306ad08dab8599be2",
      "manifestUrl": "https://raw.githubusercontent.com/schwark/hubitat-kidde/main/PackageManifest.json",
      "name": "Kidde HomeSafe",
      "observed": {
        "externalHosts": [
          "play-lh.googleusercontent.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Aaron Ward",
      "category": "Security",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "The Kiddie relay enables you to connect a wired fire alarm system to pretty much anything.",
      "documentationUrl": null,
      "id": "manifest:aa98466a69722abe2b97",
      "manifestUrl": "https://raw.githubusercontent.com/PrayerfulDrop/Hubitat/master/drivers/kiddie.json",
      "name": "Kiddie Fire Alarm Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Dominick Meglio",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Integrates Kohler DTV+ showers into your Hubitat system",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-kohlerdtv/blob/master/README.md",
      "id": "hpm:f2465c91-0eab-43d5-8099-566812a10585",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-kohlerdtv/master/packageManifest.json",
      "name": "Kohler DTV+ Integration",
      "observed": {
        "externalHosts": [
          "connect.kohler.io",
          "konnectkohler.b2clogin.com",
          "konnectkohler.onmicrosoft.com",
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 7,
        "urlLiteralCount": 20
      },
      "reviewed": [],
      "tags": [
        "Bathroom",
        "LAN",
        "Shower"
      ]
    },
    {
      "author": "Justin Walker (augoisms)",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-laundry-manager/30614",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Monitors the power consumption of a washer & dryer and alerts you upon cycle completion",
      "documentationUrl": null,
      "id": "manifest:fa7e7a50324e3f1d7dbf",
      "manifestUrl": "https://raw.githubusercontent.com/augoisms/hubitat/master/laundry-manager/packageManifest.json",
      "name": "Laundry Manager",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Energy Monitoring",
        "Notifications"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Improved LeakSmart driver (Zigbee) better battery support, mains detection ,better logging ,Stuck valve detection, fix for valves with broken mains detection firmware, Works with IRIS version also,Supports contact,switch & wet dry with info debug and trace logs",
      "documentationUrl": "http://www.winnfreenet.com/wp/2021/09/everspring-utilitech-water-sensor-driver-for-hubitat/",
      "id": "manifest:a9b18182109f9815fc46",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/LeakSmart_Water_Valve.json",
      "name": "LeakSmart Water Valve",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 16
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Misc. Devices",
        "Monitoring",
        "Safety & Security",
        "Valves",
        "Water",
        "Zigbee"
      ]
    },
    {
      "author": "Jonathan Bradshaw",
      "category": "Notifications",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/switch-dashboard-and-switch-notifications/104986",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "This application allows easy linking of Hubitat device, variables and HSM states to LEDs of your Inovelli switches",
      "documentationUrl": "https://github.com/bradsjm/hubitat-public/blob/main/SwitchLedDashboard/README.md",
      "id": "hpm:44d4b107-afa8-404d-ac50-ea79501f0f24",
      "manifestUrl": "https://raw.githubusercontent.com/bradsjm/hubitat-public/main/LedMiniDashboard/packageManifest.json",
      "name": "LED Mini-Dashboards for Inovelli Switches",
      "observed": {
        "externalHosts": [
          "community-assets.home-assistant.io",
          "nathanfiscus.github.io"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Lights & Switches",
        "Monitoring",
        "Notifications"
      ]
    },
    {
      "author": "rbyrbt",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-lennox-icomfort-s30/162305",
      "declared": {
        "cloudTag": true,
        "lanTag": true
      },
      "description": "Manage Lennox iComfort S30/E30/S40/M30 thermostats",
      "documentationUrl": "https://github.com/rbyrbt/Hubitat/blob/main/LennoxiComfort/README.md",
      "id": "manifest:d29e7bd8d58f0965df61",
      "manifestUrl": "https://raw.githubusercontent.com/rbyrbt/Hubitat/main/LennoxiComfort/packageManifest.json",
      "name": "Lennox iComfort",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 6,
        "urlLiteralCount": 25
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Cloud",
        "LAN",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Ernie Miller",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with DZ6HD and DZ1KD switches",
      "documentationUrl": null,
      "id": "hpm:9f195165-1853-4f29-89f1-0913c08d2ab2",
      "manifestUrl": "https://raw.githubusercontent.com/ernie/hubitat/main/drivers/package-manifests/leviton-decora-dimmer.json",
      "name": "Leviton Decora Smart Z-Wave Dimmer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Ernie Miller",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with DZPD3-2BW outlet",
      "documentationUrl": null,
      "id": "hpm:9dc35e2f-4cf9-44a7-9e45-406afc1eb1d4",
      "manifestUrl": "https://raw.githubusercontent.com/ernie/hubitat/main/drivers/package-manifests/leviton-decora-plug-in-dimmer.json",
      "name": "Leviton Decora Smart Z-Wave Plug-In Dimmer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Ernie Miller",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-leviton-zw4sf-driver/53690",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Leviton 4-Speed Fan Controller (ZW4SF)",
      "documentationUrl": null,
      "id": "hpm:6f635b37-9de2-4066-8d95-1dde85730b8c",
      "manifestUrl": "https://raw.githubusercontent.com/ernie/hubitat/main/drivers/package-manifests/leviton-zw4sf.json",
      "name": "Leviton ZW4SF Fan Controller",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Dan Cox (level99 fork); Niklas Gustafsson (original upstream)",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-levoit-air-purifiers-humidifiers-and-fans/163499",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Hubitat drivers for Levoit smart devices via VeSync cloud API. Supports air purifiers (Core 200S/300S/400S/600S, Vital 100S/200S, Sprout Air, EverestAir), humidifiers (Classic 200S/300S, Superior 6000S, OasisMist 450S/1000S, LV600S, LV600S Hub Connect, Dual 200S, Sprout), and fans (Tower, Pedestal). EU region support.",
      "documentationUrl": "https://github.com/level99/Hubitat-VeSync/blob/main/Drivers/Levoit/readme.md",
      "id": "hpm:b2207a87-1e6b-4e6a-9184-0807b4e2b8c3",
      "manifestUrl": "https://raw.githubusercontent.com/level99/Hubitat-VeSync/main/levoitManifest.json",
      "name": "Levoit Air Purifiers, Humidifiers, and Fans",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 23,
        "urlLiteralCount": 113
      },
      "reviewed": [],
      "tags": [
        "Air Purifier",
        "Air Quality",
        "Cloud",
        "Fan",
        "Humidifier"
      ]
    },
    {
      "author": "Ionut Turturica",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "This is a new Hubitat integration for LG ThinQ devices using the official LG ThinQ Connect API with PAT (Personal Access Token) authentication.",
      "documentationUrl": null,
      "id": "hpm:22c5a53b-f44f-4aeb-aa3f-f29ee64876c3",
      "manifestUrl": "https://raw.githubusercontent.com/jonozzz/hubitat-thinqconnect/refs/heads/main/packageManifest.json",
      "name": "LG ThinQ Connect Integration",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com",
          "smartsolution.developer.lge.com",
          "www.amazontrust.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 10,
        "urlLiteralCount": 15
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Cloud"
      ]
    },
    {
      "author": "Dominick Meglio",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/my-god-anyone-attempted-an-lg-thinq-integration/51925",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integrate your L:G ThinQ devices with Hubitat.",
      "documentationUrl": null,
      "id": "hpm:36283e74-4651-4111-8ac9-65f4a4cc923a",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-thinq/master/packageManifest.json",
      "name": "LG ThinQ Integration",
      "observed": {
        "externalHosts": [
          "aic-service.lgthinq.com",
          "common.lgthinq.com",
          "kr.m.lgaccount.com",
          "lgthinq.azurewebsites.net",
          "route.lgthinq.com",
          "s3.amazonaws.com",
          "www.amazontrust.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 6,
        "urlLiteralCount": 14
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Cloud"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:309ab19e9e3518653e09",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Apps/LG/LG%20WebOS%20TV%20Discovery.json",
      "name": "LG WebOS TV",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Multimedia"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Notifications",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A Device handler to connect direct to APC Smart UPS's ie smt1500 with network cards via telnet, reports on battery level, runtime, temp. and whether on battery or power, can be use to automate shutdowns when runtime/battery is low",
      "documentationUrl": null,
      "id": "hpm:f0e38304-c3e4-4a8a-a29e-418668814039",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/LGKSmartUPSStatus.json",
      "name": "LGK APC Smart UPS Status",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Notifications",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Port of the original app from smartthings to link a switch/relay and contact/tilt sensor together and make it look like a standard garage door control device. Includes app and drivers",
      "documentationUrl": null,
      "id": "hpm:f6a75b90-9d9e-4a08-b1cc-a53fd174875e",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/LGKVirtualGarageDoorApp.json",
      "name": "LGK Virtual Garage Door APP",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Garage Doors"
      ]
    },
    {
      "author": "lgkahn",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Check the hubitat zwave vs devices and zigbee vs devices databases for inconsistancies and ghosts.",
      "documentationUrl": null,
      "id": "hpm:bff52925-48ac-4b4d-9c3a-a70510564b99",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/refs/heads/master/hubitatdbchecker.json",
      "name": "LGK Zwave zigbee database table/devices comparison and ghost finder.",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Dan Danache (@dandanache)",
      "category": "Utility",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-lgtv-with-webos/148892",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Control your LG webOS TV.",
      "documentationUrl": "https://codeberg.org/dan-danache/hubitat/src/branch/main/lgtv-drivers/README.md",
      "id": "hpm:832237ca-d029-4c3f-8a4b-9933efd00f21",
      "manifestUrl": "https://codeberg.org/dan-danache/hubitat/raw/branch/main/lgtv-drivers/packageManifest.json",
      "name": "LGTV with webOS",
      "observed": {
        "externalHosts": [
          "codeberg.org",
          "gist.github.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 13
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "LAN",
        "Multimedia"
      ]
    },
    {
      "author": "Andrew Davison",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for devices based on Lidl's SilverCrest platform.",
      "documentationUrl": "https://github.com/birdslikewires/hubitat/tree/main/lidl",
      "id": "hpm:5d733f43-0047-4da9-9266-144968a1a936",
      "manifestUrl": "https://raw.githubusercontent.com/birdslikewires/hubitat/main/lidl/packageManifest.json",
      "name": "Lidl Drivers from BirdsLikeWires",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Repeaters & Extenders",
        "Zigbee"
      ]
    },
    {
      "author": "Joe Page",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-life360/118544",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Life360 app that exposes more details than the built-in driver",
      "documentationUrl": null,
      "id": "hpm:7562796d-dd9f-42d1-a2ce-cd8caaf1533e",
      "manifestUrl": "https://raw.githubusercontent.com/jpage4500/hubitat-drivers/master/life360/packageManifest.json",
      "name": "Life360+",
      "observed": {
        "externalHosts": [
          "joe-page-software.gitbook.io",
          "maps.googleapis.com",
          "tile.openstreetmap.org",
          "unpkg.com",
          "www.google.com",
          "www.openstreetmap.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 25
      },
      "reviewed": [],
      "tags": [
        "Presence & Location"
      ]
    },
    {
      "author": "Justin Leonard",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Follow and automate based on the Space-X launch schedule",
      "documentationUrl": null,
      "id": "manifest:8c4ae05fa7baaedb5398",
      "manifestUrl": "https://raw.githubusercontent.com/lnjustin/Lift-Off/main/packageManifest.json",
      "name": "Lift Off",
      "observed": {
        "externalHosts": [
          "ll.thespacedevs.com",
          "lldev.thespacedevs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Multimedia",
        "Tools & Utilities"
      ]
    },
    {
      "author": "David Kilgore",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/beta-lifx-enhanced-drivers/92816",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "LIFX Enhanced Drivers utilize the built-in LIFX support in Hubitat, providing additional capabilities",
      "documentationUrl": "https://github.com/dkilgore90/lifx-hubitat/blob/main/README.md",
      "id": "hpm:4609bb08-df88-4275-b271-540c7c8553db",
      "manifestUrl": "https://raw.githubusercontent.com/dkilgore90/lifx-hubitat/main/packageManifest.json",
      "name": "LIFX Enhanced Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Lights & Switches"
      ]
    },
    {
      "author": "Gordon Thelander",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Discovers, creates and locally controls LIFX lights, combining LIFX Cloud metadata with local LAN discovery and control.",
      "documentationUrl": null,
      "id": "manifest:39dad940d5c0acdc5e19",
      "manifestUrl": "https://raw.githubusercontent.com/GordonThelander/hubitat-LIFX-Light-Manager/main/packageManifest.json",
      "name": "LIFX Light Manager",
      "observed": {
        "externalHosts": [
          "api.lifx.com",
          "cloud.lifx.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "SEND_HUB_COMMAND",
          "UDP_PROTOCOL"
        ],
        "sourceFilesAnalysed": 6,
        "urlLiteralCount": 5
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "LIFX Cloud",
              "runtimeCriticality": "MANAGEMENT",
              "transport": "HTTPS"
            },
            {
              "class": "LOCAL_DEVICE",
              "name": "LIFX LAN Devices",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_UDP"
            }
          ],
          "documentation": [],
          "id": "lifx-light-manager",
          "name": "LIFX Light Manager",
          "status": "VERIFIED_OWNER_REPO"
        }
      ],
      "tags": [
        "LAN",
        "Lights & Switches"
      ]
    },
    {
      "author": "Robert Alan Heyes",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "LIFX Lan Protocol app and drivers for Hubitat Elevation",
      "documentationUrl": null,
      "id": "hpm:345605ee-d6c8-4170-8262-9cca6134020e",
      "manifestUrl": "https://raw.githubusercontent.com/robheyes/lifxcode/master/packageManifest.json",
      "name": "LIFX Master app and drivers",
      "observed": {
        "externalHosts": [
          "css-tricks.com",
          "encycolorpedia.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "SEND_HUB_COMMAND",
          "UDP_PROTOCOL"
        ],
        "sourceFilesAnalysed": 10,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Lights & Switches"
      ]
    },
    {
      "author": "Mavrrick",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tools to help Group and Automoate Lights with the Light Effects Capability",
      "documentationUrl": null,
      "id": "hpm:fa5676a8-2af7-4d37-95a9-75936bb52850",
      "manifestUrl": "https://raw.githubusercontent.com/Mavrrick/Hubitat-by-Mavrrick/refs/heads/main/LightEffectTools/packageManifest.json",
      "name": "Light Effects Tools",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "WarlockWeary + Claude AI + ChatGPT + Grok",
      "category": "Safety & Security",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Monitors locks & sensors, controls bulbs, sends notifications, daily reports, and integrates with EZ Dashboard.",
      "documentationUrl": null,
      "id": "manifest:6b895a7add3def275728",
      "manifestUrl": "https://raw.githubusercontent.com/Warlock-Weary/Light.Security.Monitor/main/packageManifest.json",
      "name": "Light Security Monitor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Dashboard",
        "Monitoring",
        "Notifications",
        "Security"
      ]
    },
    {
      "author": "Matt Hammond",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-lighting-schedules-app/60448",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Schedule on/off timings for groups of switches/lights by simply typing in the timings",
      "documentationUrl": "https://github.com/matt-hammond-001/hubitat-code/blob/master/apps/lighting%20schedules/README.md",
      "id": "hpm:7c119a75-ecec-43a1-94d3-29cee369c2c4",
      "manifestUrl": "https://raw.githubusercontent.com/matt-hammond-001/hubitat-code/master/apps/lighting%20schedules/hpm-manifest.json",
      "name": "Lighting Schedules",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Timers",
        "Zigbee"
      ]
    },
    {
      "author": "Robert Morris",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-lights-on-motion-plus-dim-before-off-remember-individual-bulb-states-etc/7178",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Turn on/off lights with motion; optionally dim before turning off. Per-mode configuration and other settings available.",
      "documentationUrl": null,
      "id": "manifest:4f05908f120a191c7245",
      "manifestUrl": "https://raw.githubusercontent.com/RMoRobert/Hubitat/master/apps/LightsOnMotionPlus/packageManifest.json",
      "name": "Lights on Motion Plus",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Motion Control"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "An App that Makes one switch follow another",
      "documentationUrl": null,
      "id": "hpm:89b2fe88-6f3b-4e63-b245-8fcb70ef14df",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/Link2Switches.json",
      "name": "Link 2 Switches",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Jeffrey D. Chapman",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Convenient labeling of linked devices (to avoid the 'on Hub' display names)",
      "documentationUrl": "https://github.com/jdc72/Hubitat/blob/main/linked_device_labeler/README.md",
      "id": "hpm:d89bb74f-a40d-4c16-9712-369d26e86f82",
      "manifestUrl": "https://raw.githubusercontent.com/jdc72/Hubitat/main/linked_device_labeler/packageManifest.json",
      "name": "Linked Device Labeler",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Misc. Devices",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Linptech 24Ghz Presence Sensor ES1",
      "documentationUrl": null,
      "id": "hpm:82ffb549-c33e-4d1a-927b-a4921692718f",
      "manifestUrl": "https://raw.githubusercontent.com/csteele-PD/Hubitat-public/master/dev/Linptech-ES1.json",
      "name": "Linptech 24Ghz Presence Sensor ES1",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Presence & Location",
        "Zigbee"
      ]
    },
    {
      "author": "Nathan Spencer & Dominick Meglio",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integrates Litter Robot cat boxes into your Hubitat system",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-litterrobot/blob/master/README.md",
      "id": "hpm:e94967fd-6f75-4d09-9416-2ec65abaa3c6",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-litterrobot/master/packageManifest.json",
      "name": "Litter Robot Integration",
      "observed": {
        "externalHosts": [
          "autopets.sso.iothings.site",
          "v2.api.whisker.iothings.site"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Pets & Animals"
      ]
    },
    {
      "author": "RamSet",
      "category": "Thermostats",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Offline helper apps for the Ecobee HAP Thermostat (Local): per-room vent control, open-contact HVAC pause with notifications, and humidifier control. Add as many helpers as needed under one parent.",
      "documentationUrl": null,
      "id": "manifest:e6319d46a6052ce7b5c0",
      "manifestUrl": "https://raw.githubusercontent.com/RamSet/hubitat/refs/heads/main/manifest-ecobee-helpers.json",
      "name": "Local Ecobee Helpers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-lock-button-monitor-arm-hsm-from-outside-door-lock/98010",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Lock button monitor. works with most Schlage and Vale locks. Create a virtual button and then set this app to that button and your lock. The buttons will be assigned the outside lock button inside knob and unlock codes. This is a beta version it only supports one lock.",
      "documentationUrl": "https://community.hubitat.com/t/release-lock-button-monitor-arm-hsm-from-outside-door-lock/98010",
      "id": "manifest:f6f02791da1a6ee62a2a",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/lock_button_monitor.json",
      "name": "Lock Button Monitor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Locks",
        "Misc. Devices",
        "Monitoring",
        "Safety & Security"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-lock-button-monitor-arm-hsm-from-outside-door-lock/98010",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Lock button monitor2. for second lock, works with most Schlage and Vale locks. Create a virtual button and then set this app to that button and your lock. The buttons will be assigned the outside lock button inside knob and unlock codes. This is a beta version it only supports one lock.",
      "documentationUrl": null,
      "id": "manifest:aea83b9efc9b358fd41d",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/lock_button_monitor2.json",
      "name": "Lock Button Monitor2",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Locks",
        "Misc. Devices",
        "Monitoring",
        "Safety & Security"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Displays lock use history and allows the use of alternate names for lock codes (useful for fingerprint devices that report unknown) and lock device names",
      "documentationUrl": null,
      "id": "hpm:593eb15c-367e-4987-b47b-817a5f00757d",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/refs/heads/main/manifests/lockHistManifest.json",
      "name": "Lock History",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Joel Wetzel",
      "category": "Security",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-lockdown",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Reliably lock all the doors in your house when a specified switch is triggered.",
      "documentationUrl": "https://github.com/joelwetzel/Hubitat-Lockdown",
      "id": "manifest:bfbba37464ba084b47ce",
      "manifestUrl": "https://raw.githubusercontent.com/joelwetzel/Hubitat-Lockdown/master/packageManifest.json",
      "name": "Lockdown",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Locks",
        "Safety & Security"
      ]
    },
    {
      "author": "Eliot Stocker",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/beta-release-lockshare-simply-share-access-to-smart-locks-with-complete-control/64981",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Share your locks with guests, family and service worker easily!",
      "documentationUrl": "https://locksha.re/",
      "id": "manifest:330b960358569a773988",
      "manifestUrl": "https://raw.githubusercontent.com/eliotstocker/hubitat-lockshare/main/package-manifest.json",
      "name": "LockShare",
      "observed": {
        "externalHosts": [
          "chart.googleapis.com",
          "locksha.re",
          "play.google.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Doors & Windows",
        "Locks",
        "Monitoring"
      ]
    },
    {
      "author": "Dan Ogorchock",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-logitech-harmony-hub-driver/7618?u=ogiewon",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Logitech Harmony Hub Parent driver, all local LAN communications.",
      "documentationUrl": "https://github.com/ogiewon/Hubitat/blob/master/Drivers/logitech-harmony-hub-parent.src/README.md",
      "id": "manifest:847455ab9d1bda9db3c8",
      "manifestUrl": "https://raw.githubusercontent.com/ogiewon/Hubitat/refs/heads/master/Drivers/logitech-harmony-hub-parent.src/logitech-harmony-hub-parent.json",
      "name": "Logitech Harmony Hub Parent",
      "observed": {
        "externalHosts": [
          "sl.dhg.myharmony.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "IR & RF",
        "LAN",
        "Multimedia"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:6925faec2468b92750f0",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Loki/LokiLogLogger.json",
      "name": "LokiLogLogger",
      "observed": {
        "externalHosts": [
          "logs-prod-eu-west-0.grafana.net"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Monitoring",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:8b22da897d08e96232f3",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Loki/LokiZigbeeLogger.json",
      "name": "LokiZigbeeLogger",
      "observed": {
        "externalHosts": [
          "logs-prod-eu-west-0.grafana.net"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Monitoring",
        "Tools & Utilities",
        "Zigbee"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:4498ac75ef6dabbc882a",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Loki/LokiZWaveLogger.json",
      "name": "LokiZWaveLogger",
      "observed": {
        "externalHosts": [
          "logs-prod-eu-west-0.grafana.net"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Monitoring",
        "Tools & Utilities",
        "ZWave"
      ]
    },
    {
      "author": "VH",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Loud Audio - 4 AP 100 Amplifier",
      "documentationUrl": "https://github.com/hhorigian/hubitat_loud_4ap100",
      "id": "hpm:ac6ef493-a55e-44d3-a4e2-e3c2702d813c",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_loud_4ap100/refs/heads/main/packageManifest.json",
      "name": "Loud Audio - 4 AP 100 Amplifier (HTTP)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Speakers"
      ]
    },
    {
      "author": "Dan Danache",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-zigbee-map-app/133888",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control lights using motion and contact sensors.",
      "documentationUrl": "https://codeberg.org/dan-danache/hubitat/src/branch/main/lumos-app/README.md",
      "id": "hpm:23b507e6-22ac-4a4e-bcda-f1969c174cd6",
      "manifestUrl": "https://codeberg.org/dan-danache/hubitat/raw/branch/main/lumos-app/packageManifest.json",
      "name": "Lumos",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Doors & Windows",
        "Lights & Switches",
        "Motion Control"
      ]
    },
    {
      "author": "Eduardo Simioni",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A driver for the Lutron Aurora Dimmer, with extended and improved features.",
      "documentationUrl": null,
      "id": "hpm:31137b30-cda4-4154-39a7-42ca22b51088",
      "manifestUrl": "https://raw.githubusercontent.com/esimioni/lutron-aurora-hubitat/main/hpm/manifest.json",
      "name": "Lutron Aurora Dimmer - Custom",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Lights & Switches",
        "Zigbee"
      ]
    },
    {
      "author": "Russell Goldin",
      "category": "Convenience",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "An app and device drivers to control Luxor Lighting Controllers (LXZD, LXZDC, LXTWO)",
      "documentationUrl": null,
      "id": "hpm:3a200646-4801-4cc3-80c4-d8c244c59a1a",
      "manifestUrl": "https://raw.githubusercontent.com/tagyoureit/hubitat-luxor/master/packageManifest.json",
      "name": "Luxor Lighting Controller",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Mads Kristensen",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat drivers and apps by Mads Kristensen.",
      "documentationUrl": "https://raw.githubusercontent.com/madskristensen/hubitat-drivers/main/README.md",
      "id": "manifest:33696c6eab931553929b",
      "manifestUrl": "https://raw.githubusercontent.com/madskristensen/hubitat-drivers/main/packageManifest.json",
      "name": "Mads Kristensen - Hubitat Drivers",
      "observed": {
        "externalHosts": [
          "api.purpleair.com",
          "cfpub.epa.gov",
          "develop.purpleair.com",
          "github.githubassets.com",
          "www.airnow.gov",
          "www.lrapa.org",
          "www.movable-type.co.uk"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 17,
        "urlLiteralCount": 57
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Krassimir Kossev",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-matter-advanced-bridge-limited-device-support/135252",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Matter Advanced Bridge - brings to HE the Tuya, Aqara, Hue, Switchbot Zigbee devices via Matter",
      "documentationUrl": null,
      "id": "hpm:7f4e2c19-5159-44bd-a2bf-afb8432c3de4",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat---Matter-Advanced-Bridge/main/packageManifest.json",
      "name": "Matter Advanced Bridge",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Matter",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Bloodtick Jones",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/determine-device-matter-status/153638",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat Driver to provide event updates for Matter devices. Runs local and queries the native Hubitat REST API for updates",
      "documentationUrl": null,
      "id": "hpm:53555efe-4333-4072-8128-f322ec43b407",
      "manifestUrl": "https://raw.githubusercontent.com/bloodtick/Hubitat/main/hubitat-packages/manifests/manifestMatterDeviceMonitor.json",
      "name": "Matter Device Monitor",
      "observed": {
        "externalHosts": [
          "en.wikipedia.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Matter Fabric / Bridge",
              "runtimeCriticality": "RUNTIME",
              "transport": "MATTER_IP"
            }
          ],
          "documentation": [],
          "id": "matter-bridge",
          "name": "Matter Bridge / Controller",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Matter",
        "Monitoring",
        "Notifications",
        "Tools & Utilities"
      ]
    },
    {
      "author": "kingpanther13",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Native MCP server for Hubitat with built-in rule engine. Control devices and create automations via Claude AI or other MCP clients.",
      "documentationUrl": "https://github.com/kingpanther13/Hubitat-local-MCP-server/blob/main/README.md",
      "id": "manifest:7afca99889f23291349b",
      "manifestUrl": "https://raw.githubusercontent.com/kingpanther13/Hubitat-local-MCP-server/main/packageManifest.json",
      "name": "MCP Rule Server",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Justin Leonard",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Meater Temperature Probes.",
      "documentationUrl": null,
      "id": "manifest:b582eb12a4a5d5a3ea29",
      "manifestUrl": "https://raw.githubusercontent.com/lnjustin/Meater/main/packageManifest.json",
      "name": "Meater",
      "observed": {
        "externalHosts": [
          "public-api.cloud.meater.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Derek Osborn",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-memory-monitor-auto-reboot-application/160272",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Monitors hub memory usage and automatically reboots when free memory falls below a configured threshold during a specified time window",
      "documentationUrl": null,
      "id": "manifest:dab3b5729280a7da2247",
      "manifestUrl": "https://raw.githubusercontent.com/dJOS1475/Hubitat-Memory-Monitor-Auto-Reboot/refs/heads/main/packageManifest.json",
      "name": "Memory Monitor & Auto Reboot",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Utility"
      ]
    },
    {
      "author": "Chris Truitt",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Local LAN control driver for compatible Meross mini plugs.",
      "documentationUrl": "https://github.com/truittchris/hubitat_meross_mini_plug_driver#readme",
      "id": "hpm:b2d0a466-6bfd-4d06-80ca-c7e38874ec7d",
      "manifestUrl": "https://raw.githubusercontent.com/truittchris/hubitat_meross_mini_plug_driver/main/hpm/packageManifest.json",
      "name": "Meross Mini Plug Driver",
      "observed": {
        "externalHosts": [
          "christruitt.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "PARSE_LAN_MESSAGE"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 9
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Meross Cloud",
              "runtimeCriticality": "SETUP_ONLY",
              "transport": "HTTPS"
            },
            {
              "class": "LOCAL_DEVICE",
              "name": "Meross MSG100",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_HTTP"
            }
          ],
          "documentation": [],
          "id": "meross-msg100",
          "name": "Meross MSG100 Garage Door",
          "status": "VERIFIED_OWNER_REPO"
        }
      ],
      "tags": [
        "LAN",
        "Switches"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/needed-an-app-to-display-multiple-alerts-in-a-common-dashboard-tile/92885",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Message Rotator Tile device allows for multiple messages to be stored via RM, webCoRE, manually, etc. and then rotated to display on an attribute tile.",
      "documentationUrl": null,
      "id": "hpm:a0251230-0a94-4a13-8e71-fb120d9b6788",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/msgRotateManifest.json",
      "name": "Message Rotator Tile Device",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Dashboards"
      ]
    },
    {
      "author": "Barry A. Burke",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-free-meteobridge-weatherbridge-weather-station-v-1-1/12635",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Weather Station using MeteoBridge/WeatherBridge via Local Connection (hubAction) for Hubitat & SmartThings",
      "documentationUrl": "https://github.com/SANdood/MeteoWeather/blob/master/README.md",
      "id": "manifest:c309a440118e9ddbabbf",
      "manifestUrl": "https://raw.githubusercontent.com/SANdood/MeteoWeather/master/packageManifest.json",
      "name": "MeteoBridge Weather Station",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 234
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Maxime Boissonneault",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Driver for the MeteoMatics API",
      "documentationUrl": null,
      "id": "hpm:8cc4674f-ebc4-4edd-8118-2ac1e8f451a5",
      "manifestUrl": "https://raw.githubusercontent.com/mboisson/Hubitat-MeteoMatics/main/packageManifest.json",
      "name": "MeteoMatics",
      "observed": {
        "externalHosts": [
          "api.meteomatics.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Weather"
      ]
    },
    {
      "author": "James Shimota",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/meteorological-seasons-driver/80450",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A need developed for me to be able to set Rules and automations within my Hubitat environment that would allow me to gain control seasonally.  Meteorological Seasons is a driver that provides, when installed correctly on a Hubitat platform, a selectable device driver. This driver, when used during creation of a virtual device, creates a clean way to bridge seasons to dashboard tiles, variables for Rules and other nice features  as well.  Now useful for both hemispheres!",
      "documentationUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/meteorological_seasons/README.md",
      "id": "manifest:f1dbd298ab3204c18ca8",
      "manifestUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/meteorological_seasons/packageManifest.json",
      "name": "Meteorological Seasons",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Monitoring",
        "Timers",
        "Weather"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:32a79d046b1be9d90580",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Apps/VictoriaMetrics/MetricLogger.json",
      "name": "MetricLogger",
      "observed": {
        "externalHosts": [
          "docs.influxdata.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Monitoring",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Ben Deitch",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-miele-integration/110159",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integrates Miele@home devices into Hubitat.",
      "documentationUrl": "https://github.com/xap-code/hubitat/blob/master/miele/README.md",
      "id": "hpm:e2d7113d-849d-4cd9-888b-53ac86db1f76",
      "manifestUrl": "https://raw.githubusercontent.com/xap-code/hubitat/master/miele/packageManifest.json",
      "name": "Miele Integration",
      "observed": {
        "externalHosts": [
          "api.mcs3.miele.com",
          "cloud.hubitat.com",
          "developer.miele.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 6,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Cloud"
      ]
    },
    {
      "author": "vision9074",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Connect Mila air purifiers to Hubitat via the Mila cloud API. Exposes air quality, temperature, humidity, CO2, CO, VOC and particulate sensors, plus fan control and Mila's smart modes.",
      "documentationUrl": "https://github.com/vision9074/hubitat-mila-air",
      "id": "hpm:bec9fd1e-8388-456c-bbf5-addcd5fca776",
      "manifestUrl": "https://raw.githubusercontent.com/vision9074/hubitat-mila-air/main/packageManifest.json",
      "name": "Mila Air Integration",
      "observed": {
        "externalHosts": [
          "graph-api.milacares.com",
          "id.milacares.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Cloud",
        "Monitoring",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Ryan DeShone",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Miscellaneous drivers for Hubitat",
      "documentationUrl": null,
      "id": "hpm:816f1542-02d4-4395-b20f-5b156e4d9630",
      "manifestUrl": "https://raw.githubusercontent.com/ardichoke/hubitat-repo/master/miscDrivers.json",
      "name": "Miscellaneous Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Misc. Devices",
        "ZWave"
      ]
    },
    {
      "author": "evdev",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://github.com/evdev/mitsubishi-comfort-hubitat/issues",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Cloud integration for Mitsubishi Comfort / Kumo Cloud V3 HVAC zones, thermostats, sensors, and profile-based setpoint limits.",
      "documentationUrl": "https://github.com/evdev/mitsubishi-comfort-hubitat#readme",
      "id": "hpm:bae8a9d3-407c-41b0-9749-3ad0a1aca6af",
      "manifestUrl": "https://raw.githubusercontent.com/evdev/mitsubishi-comfort-hubitat/main/packageManifest.json",
      "name": "Mitsubishi Comfort Cloud",
      "observed": {
        "externalHosts": [
          "app-prod.kumocloud.com",
          "geo-c.kumocloud.com",
          "socket-prod.kumocloud.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 6,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Cloud",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Randall Norviel",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver designed to work with SwiCago's library",
      "documentationUrl": null,
      "id": "hpm:3c923f60-8205-4056-83a8-625cddcf97e9",
      "manifestUrl": "https://raw.githubusercontent.com/randalln/hubitat-mitsubishi-mqtt/main/packageManifest.json",
      "name": "Mitsubishi Heat Pump Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Climate Control"
      ]
    },
    {
      "author": "Randall Norviel",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Companion app for sethkinast's driver for Mitsubishi heat pumps",
      "documentationUrl": null,
      "id": "hpm:444fc700-7556-4983-9e43-907e3ab76a3b",
      "manifestUrl": "https://raw.githubusercontent.com/randalln/hubitat-mitsubishi-mqtt-remote-app/main/packageManifest.json",
      "name": "Mitsubishi Heat Pump Remote Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Climate Control"
      ]
    },
    {
      "author": "Simon Burke (sburke781)",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Send and receive information and between your HE hub and mobile devices such as phones and tablets, along with initiating commands.  Currently only Android devices are supported, using Tasker and associated Tasker plugins.",
      "documentationUrl": "https://github.com/sburke781/MobileController",
      "id": "manifest:6a8a597ef2c25207c59f",
      "manifestUrl": "https://github.com/sburke781/MobileController/raw/master/hubitat/packageManifest.json",
      "name": "Mobile Controller",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Convenience"
      ]
    },
    {
      "author": "Ephrayim (evdev)",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-modern-dashboard-mdash-minimal-setup-pwa-with-built-in-scheduler-runs-entirely-on-your-hub/165028",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Control-first Hubitat dashboard: select your devices and you're done. Optimized for acting on devices - bulk room/house lights, multi-thermostat control. Installable PWA, built-in remote scheduler (no Hubitat login), runs entirely on your hub.",
      "documentationUrl": "https://github.com/evdev/hubitat-modern-dashboard#readme",
      "id": "hpm:e8f4a1c2-3b5d-4e9f-a7c6-1d2e3f4a5b6c",
      "manifestUrl": "https://raw.githubusercontent.com/evdev/hubitat-modern-dashboard/master/hubitat/packageManifest.json",
      "name": "Modern Dashboard",
      "observed": {
        "externalHosts": [
          "cloud.hubitat.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Cloud",
        "Dashboards",
        "Lights & Switches",
        "Multimedia",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "David Manuel",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/moen-flo-virtual-device/9677",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "The device manager enables quick-setup and shared credentials for all your Moen FLO devices.<br>Hubitat Integration for the Moen Flo Devices (Smart Shutoff and Smart Shutoff Valve). See readme at https://dcmanjr.com/flo",
      "documentationUrl": "https://github.com/dacmanj/hubitat/tree/main/MoenFloManager#readme",
      "id": "hpm:5c9ae717-9ef9-4ced-af94-380cf98aefa8",
      "manifestUrl": "https://raw.githubusercontent.com/dacmanj/hubitat/main/MoenFloManager/packageManifest.json",
      "name": "Moen FLO Device Manager",
      "observed": {
        "externalHosts": [
          "api-gw.meetflo.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 7,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Water"
      ]
    },
    {
      "author": "David Manuel",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/moen-flo-virtual-device/9677",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "LEGACY: Hubitat Integration for the Moen Flo Smart Shutoff. This is the original single-file driver. Updates will on be made to fix issues. New features will only be added to the Moen FLO Device Manager. This is NOT required for the Moen FLO Device Manager package",
      "documentationUrl": "https://github.com/dacmanj/hubitat#readme",
      "id": "hpm:0bd3c02f-347f-4395-9b5d-431b918a2c8a",
      "manifestUrl": "https://raw.githubusercontent.com/dacmanj/hubitat/main/MoenFloStandalone/packageManifest.json",
      "name": "Moen Flo Smart Shutoff",
      "observed": {
        "externalHosts": [
          "api-gw.meetflo.com",
          "api.meetflo.com",
          "user.meetflo.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 13
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Water"
      ]
    },
    {
      "author": "Martin Kura, kkossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/re-release-moes-zigbee-wall-switch-1-2-3-gang-tuya-ts0601-switches/138120/1",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Martin's popular Moes ZigBee Wall Switch 1/2/3-Gang driver. Works with Tuya switches model TS0601",
      "documentationUrl": null,
      "id": "hpm:c08c4f41-3a84-49e0-8c67-37e847427a9b",
      "manifestUrl": "https://raw.githubusercontent.com/martinkura-svk/Hubitat/main/packageManifest.json",
      "name": "Moes ZigBee Wall Switch 1/2/3-Gang",
      "observed": {
        "externalHosts": [
          "www.aliexpress.com",
          "www.novadigitalsmart.com.br"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 13
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Moes ZSS-ZK-THL illuminance, temperature, humidity sensor model TS0222 (_TYZB01_kvwjujy9) driver for Hubitat",
      "documentationUrl": null,
      "id": "hpm:e6eedb98-4f18-404a-9f46-42ce5e9612db",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Moes_ZSS-ZK-THL_TS0222/packageManifest.json",
      "name": "Moes ZSS-ZK-THL_TS0222",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "VH",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - Input Board 12+4",
      "documentationUrl": "https://github.com/hhorigian/hubitat_MolSmart_InputBoard/tree/main",
      "id": "hpm:cd919dff-7f79-498b-98ec-ea6914e02d89",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_InputBoard/refs/heads/main/packageManifest.json",
      "name": "MolSmart - 12+4 Input Board",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Lights & Switches",
        "Monitoring",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Vartan Horigian",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - Drivers for the 6CH Dimmer Module",
      "documentationUrl": null,
      "id": "hpm:d43f59e9-a596-4453-a729-c2cd286c0873",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_Dimmer/main/packageManifest.json",
      "name": "MolSmart - Dimmer 6CH (TCP)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "VH",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - GW3 - IR - Drivers for AC IR Remote Controls Created at website ir.molsmart.com.br.",
      "documentationUrl": "https://github.com/hhorigian/hubitat_MolSmart_GW3_Remotes",
      "id": "hpm:d9ee5d6c-e08d-4760-996f-c1288fcc8549",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_GW3_Remotes/main/AC/packageManifest.json",
      "name": "MolSmart - GW3 - AC (irweb)",
      "observed": {
        "externalHosts": [
          "ir.molsmart.com.br"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "IR & RF"
      ]
    },
    {
      "author": "TRATO",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - Drivers for the GW3 IP/RF Gateway. Driver for AC Devices created and learned in iDoor APP",
      "documentationUrl": "https://github.com/hhorigian/hubitat_MolSmart_GW3_IR/tree/main",
      "id": "hpm:15bb12f4-af8e-4126-9f26-643726196285",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_GW3_IR/main/AC/Idoor/packageManifest.json",
      "name": "MolSmart - GW3 - IR AC (idoor device)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "IR & RF"
      ]
    },
    {
      "author": "TRATO",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - Drivers for the GW3 IP/RF Gateway. Driver for Universal Learning AC and learned in iDoor APP",
      "documentationUrl": "https://github.com/hhorigian/hubitat_MolSmart_GW3_IR/tree/main/AC",
      "id": "hpm:628029f7-d11a-40fe-a56c-f6247ae9ecf4",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_GW3_IR/main/AC/Learning/packageManifest.json",
      "name": "MolSmart - GW3 - IR AC (idoor Universal Learning)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "IR & RF"
      ]
    },
    {
      "author": "TRATO",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - Drivers for the GW3 IP/RF Gateway. Driver for Universal Remotes Learned created and learned in iDoor APP",
      "documentationUrl": "https://github.com/hhorigian/hubitat_MolSmart_GW3_IR/tree/main/Universal",
      "id": "hpm:dab2249b-8e1e-49c7-8cff-097de1cc13c0",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_GW3_IR/main/Universal/packageManifest.json",
      "name": "MolSmart - GW3 - IR Universal (iDoor Universal Learning)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Garage Doors",
        "IR & RF",
        "Speakers"
      ]
    },
    {
      "author": "VH",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - Drivers for the GW3 IP/RF Gateway. Driver for RF control of motor curtains.",
      "documentationUrl": null,
      "id": "hpm:207bab30-c169-4356-90b3-1bba35dac913",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_GW3_RF/main/packageManifest.json",
      "name": "MolSmart - GW3 - RF",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Doors & Windows",
        "Garage Doors",
        "IR & RF"
      ]
    },
    {
      "author": "VH",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - Drivers for the GW3 IP/RF Gateway.  Driver for TV, Sound created and learned in iDoor APP",
      "documentationUrl": "https://github.com/hhorigian/hubitat_MolSmart_GW3_IR/tree/main/TV/iDoor",
      "id": "hpm:74e253d8-339d-4c86-b95e-6a3c969b8eeb",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_GW3_IR/main/TV/iDoor/packageManifest.json",
      "name": "MolSmart - GW3 - TV e SOM (iDoor device)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "IR & RF",
        "Speakers"
      ]
    },
    {
      "author": "VH",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - GW3 - IR - Drivers for TV IR Remote Controls Created at website ir.molsmart.com.br.",
      "documentationUrl": "https://github.com/hhorigian/hubitat_MolSmart_GW3_Remotes",
      "id": "hpm:1501a293-6c99-4be4-a79e-b3a380d4848f",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_GW3_Remotes/main/TV/packageManifest.json",
      "name": "MolSmart - GW3 - TV e SOM (irweb)",
      "observed": {
        "externalHosts": [
          "ir.molsmart.com.br"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "IR & RF"
      ]
    },
    {
      "author": "VH",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - Drivers for using the AC Codes learned in GW8 Website",
      "documentationUrl": null,
      "id": "hpm:d43f59e9-a591-9433-a329-c2cd286c0879",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_GW8/refs/heads/main/IR/AC(Learning)/packageManifest.json",
      "name": "MolSmart - GW8 - AC (learning)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "VH",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - GW8 - IR - Drivers for AC - IR Remote Controls Created at website ir.molsmart.com.br.",
      "documentationUrl": null,
      "id": "hpm:fc157f48-5e69-4d83-b450-b00ec3551c7c",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_GW8/refs/heads/main/IR/AC(irweb)/packageManifest.json",
      "name": "MolSmart - GW8 - AC(irweb)",
      "observed": {
        "externalHosts": [
          "ir.molsmart.com.br",
          "molsmart-integration.web.app"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "IR & RF",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "VH",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - GW8 - IR - IR Remote Controls Created at GW8 Buttons Website",
      "documentationUrl": null,
      "id": "hpm:070fd73c-4487-49e2-bd13-1672b9c4ae19",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_GW8/refs/heads/main/IR/Learning/packageManifest.json",
      "name": "MolSmart - GW8 - Learning",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "IR & RF",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "VH",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - GW8 - Driver para controle de RF",
      "documentationUrl": null,
      "id": "hpm:c4faf41a-1722-479c-945e-5909edaaeacf",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_GW8/refs/heads/main/RF/packageManifest.json",
      "name": "MolSmart - GW8 - RF",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Doors & Windows",
        "Garage Doors",
        "Locks"
      ]
    },
    {
      "author": "VH",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - GW8 - IR - Drivers for TV and Audio - IR Remote Controls Created at website ir.molsmart.com.br.",
      "documentationUrl": null,
      "id": "hpm:60372a48-4843-4f74-9989-cd16da17f009",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_GW8/refs/heads/main/IR/TV-Audio(irweb)/packageManifest.json",
      "name": "MolSmart - GW8 - TV e Audio(irweb)",
      "observed": {
        "externalHosts": [
          "ir.molsmart.com.br",
          "molsmart-integration.web.app"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "IR & RF",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Vartan Horigian",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - Drivers for the 2/4/8/16/32 Relay Modules",
      "documentationUrl": null,
      "id": "hpm:4b59e05b-eb32-4679-9369-1f79b4b169a7",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_Relays/main/TCP/packageManifest.json",
      "name": "MolSmart - Relay 4/8/16/32CH (TCP)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Vartan Horigian",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MolSmart - Drivers for the 8CH 0-10V Dimmer Module",
      "documentationUrl": null,
      "id": "hpm:d43f59e9-a596-9453-a729-c2cd286c0879",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_MolSmart_Dimmer_0-10/refs/heads/main/packageManifest.json",
      "name": "MolSmart DIMMER-010",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Device driver to calculate the moon phase for a given or current date/time.  Attributes include a moon phase text string, the a moon phase number (percentage, in decimal format, that the given time/date is through the lunar cycle, and a generated tile string.  Driver optionally will automatically update the attributes at 1 second past midnight to keep the phase current, and allows for an path to an alternate set of tile icons (i.e. hub file system - http://hubIpAddress/local/).",
      "documentationUrl": null,
      "id": "hpm:6c2681e0-747f-45fc-8c14-1ccb86111f93",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/moonPhaseManifest.json",
      "name": "Moon Phase Device",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jdthomas24",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat driver for Moonraker/Klipper 3D printers. Monitor print status, temperatures, and progress via live dashboard tiles. Start, pause, resume, and cancel prints directly from Hubitat or any automation rule. Supports Sonicpad multi-printer setups and standard Raspberry Pi/BTT installs.",
      "documentationUrl": null,
      "id": "manifest:65b677bc95189011628d",
      "manifestUrl": "https://raw.githubusercontent.com/jdthomas24/Hubitat-Apps-Drivers/refs/heads/main/Moonraker%20Klipper%203D%20Printer/packageManifest.json",
      "name": "Moonraker Klipper Printer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups",
        "Notifications",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Amos Yuen",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Create a motion sensor that is triggered active after X motion events in Y seconds",
      "documentationUrl": "https://github.com/amosyuen/hubitat/blob/main/motion/README.md",
      "id": "manifest:f675f86221274be42ece",
      "manifestUrl": "https://raw.githubusercontent.com/amosyuen/hubitat/main/motion/packageManifest.json",
      "name": "Motion in Window",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Motion Control"
      ]
    },
    {
      "author": "Dale Coghlan",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Mirrors a motion sensor to a contact sensor",
      "documentationUrl": "https://github.com/dcoghlan/hubitat/tree/main/Motion2Contact",
      "id": "hpm:fb03de9f-209a-4e8c-a689-a43c3c9981fb",
      "manifestUrl": "https://raw.githubusercontent.com/dcoghlan/hubitat/main/Motion2Contact/packageManifest.json",
      "name": "Motion2Contact",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Monitoring",
        "Motion Control",
        "Multi Sensors"
      ]
    },
    {
      "author": "Justin Leonard",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tame your robot mower.",
      "documentationUrl": null,
      "id": "manifest:e67cc478f1e87c5bc044",
      "manifestUrl": "https://raw.githubusercontent.com/lnjustin/MowBot-Tamer/main/packageManifest.json",
      "name": "MowBot Tamer",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Control",
        "Convenience",
        "Mowers",
        "Tools & Utilities",
        "weather"
      ]
    },
    {
      "author": "Justin Leonard",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Automate based on current traffic conditions from Google Traffic. Use a single dashboard tile to represent your location, no matter where you are.",
      "documentationUrl": null,
      "id": "manifest:8636489a12752efcf0a4",
      "manifestUrl": "https://raw.githubusercontent.com/lnjustin/Multi-Place/master/packageManifest.json",
      "name": "Multi-Place",
      "observed": {
        "externalHosts": [
          "avatarmaker.com",
          "developers.google.com",
          "maps.googleapis.com",
          "run.sharptools.app",
          "www.flaticon.com",
          "www.w3.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 28
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Presence & Location",
        "Sleep",
        "Vehicles & Transportation"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-multi-relay-door-shade-controller/52793",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Application and driver for a Multi-Relay Door/Shade Controller",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/applications/multi-relay-door-shade-controller",
      "id": "manifest:ad00dd90f632211f57bd",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/multi-relay-door-shade-controller.json",
      "name": "Multi-Relay Door/Shade Controller",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Doors & Windows",
        "Window Coverings"
      ]
    },
    {
      "author": "Mark Weninger/Joe Page",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "User Location driver for use with HD+",
      "documentationUrl": null,
      "id": "hpm:4a02b53d-cb1c-4227-ad15-c823861a3bc0",
      "manifestUrl": "https://raw.githubusercontent.com/wecoyote5/hubitat-MyProjects/main/packageManifest.json",
      "name": "My Location",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Presence & Location"
      ]
    },
    {
      "author": "Paul Hutton",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integration with the myenergi line of solar control products",
      "documentationUrl": null,
      "id": "hpm:1f34c41b-9a74-4859-bd3f-4a6b6afe2914",
      "manifestUrl": "https://raw.githubusercontent.com/VeloWulf/myenergiIntegration/main/packageManifest.json",
      "name": "myenergi Integration",
      "observed": {
        "externalHosts": [
          "director.myenergi.net",
          "en.wikipedia.org",
          "support.myenergi.com",
          "www.paypal.com",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jason Mok/Brian Beaird/Barry Burke/RBoy Apps/Dominick Meglio",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/updated-myq-lite-application/31318",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integrates MyQ garage doors into your Hubitat system",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-myq/blob/master/README.md",
      "id": "hpm:6171d49f-2b63-4cd9-91e6-0c978e979dea:a1ac809b3bc1401c750b",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-myq/master/packageManifest.json",
      "name": "MyQ Garage Door Integration",
      "observed": {
        "externalHosts": [
          "accounts.myq-cloud.com",
          "devices.myq-cloud.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 13
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Doors & Windows",
        "Garage Doors"
      ]
    },
    {
      "author": "Jason Mok/Brian Beaird/Barry Burke/RBoy Apps/Dominick Meglio",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/updated-myq-lite-application/31318",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integrates MyQ garage doors into your Hubitat system",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-myq/blob/master/README.md",
      "id": "hpm:6171d49f-2b63-4cd9-91e6-0c978e979dea:efb824fecf01cac6e3aa",
      "manifestUrl": "https://www.hubitatcommunity.com/MyQ/packageManifest.json",
      "name": "MyQ Garage Door Integration 2023",
      "observed": {
        "externalHosts": [
          "accounts.myq-cloud.com",
          "devices.myq-cloud.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 13
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Doors & Windows",
        "Garage Doors"
      ]
    },
    {
      "author": "Craig Dewar",
      "category": "Climate Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integrates Mysa smart thermostats with Hubitat via real-time MQTT. Supports V1, V2, V2 Lite, and In-Floor models.",
      "documentationUrl": "https://github.com/craigde/hubitat-mysa/blob/main/README.md",
      "id": "hpm:3f4e8a2b-1c5d-4e6f-9a8b-7c2d1e0f3a4b",
      "manifestUrl": "https://raw.githubusercontent.com/craigde/hubitat-mysa/main/packageManifest.json",
      "name": "Mysa Thermostat Integration",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 6
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "INFRASTRUCTURE",
              "name": "MQTT Broker",
              "runtimeCriticality": "RUNTIME",
              "transport": "MQTT"
            }
          ],
          "documentation": [],
          "id": "mqtt-native",
          "name": "Hubitat MQTT Integration",
          "status": "VERIFIED_CORE"
        }
      ],
      "tags": [
        "Climate Control",
        "Thermostat"
      ]
    },
    {
      "author": "jlslate",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Links your MySubaru STARLINK-connected Subaru to Hubitat: lock/unlock, horn/lights, remote start/stop, locate, EV charge-now, and vehicle status. By jlslate.",
      "documentationUrl": "https://github.com/jlslate/Hubitat-MySubaru",
      "id": "hpm:8f1bcd77-0466-4942-8810-ef38f6e7d528",
      "manifestUrl": "https://raw.githubusercontent.com/jlslate/Hubitat-MySubaru/main/packageManifest.json",
      "name": "MySubaru",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Convenience",
        "jlslate",
        "Subaru"
      ]
    },
    {
      "author": "jlslate",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Links a Navien tankless water heater or combi boiler to Hubitat through the NaviLink cloud service: power, hot water setpoint, on-demand recirculation, inlet and outlet temperature, flow rate and gas usage. No local wiring or bridge required. By jlslate.",
      "documentationUrl": "https://github.com/jlslate/hubitat-navien/blob/main/README.md",
      "id": "hpm:fbbff389-cb61-4720-9fca-8c0796752482",
      "manifestUrl": "https://raw.githubusercontent.com/jlslate/hubitat-navien/main/packageManifest.json",
      "name": "Navien NaviLink (Cloud)",
      "observed": {
        "externalHosts": [
          "nlus.naviensmartcontrol.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Energy Monitoring",
        "jlslate",
        "MQTT",
        "Water Heater"
      ]
    },
    {
      "author": "Brian Wilson",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/neo-smart-controller-for-blinds/26391",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control your NeoSmart blinds (requires Neosmart hub)",
      "documentationUrl": "https://github.com/bdwilson/hubitat/tree/master/NeoSmart",
      "id": "manifest:a18206212ef18719ea5d",
      "manifestUrl": "https://raw.githubusercontent.com/bdwilson/hubitat/master/NeoSmart/packageManifest.json",
      "name": "Neosmart Blinds",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Doors & Windows"
      ]
    },
    {
      "author": "tinkorswim",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Monitor and control a Neptune Systems Apex aquarium controller",
      "documentationUrl": null,
      "id": "manifest:cdd25106540356605cd1",
      "manifestUrl": "https://raw.githubusercontent.com/tinkorswim/hubitat-neptuneapex/main/hpmManifest.json",
      "name": "Neptune Apex Bridge (A3 Series)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Pets & Animals"
      ]
    },
    {
      "author": "Snell",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Drivers for monitoring a Neptune Systems Apex aquarium controller",
      "documentationUrl": null,
      "id": "hpm:948d8bae-78c6-4440-95bb-3f5bd08f6c71",
      "manifestUrl": "https://www.drdsnell.com/projects/hubitat/drivers/NeptuneSystemsApexManifest.json",
      "name": "Neptune Systems Apex",
      "observed": {
        "externalHosts": [
          "www.drdsnell.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 31,
        "urlLiteralCount": 95
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Lights & Switches",
        "Misc. Devices",
        "Monitoring",
        "Pets & Animals",
        "Temperature & Humidity",
        "Valves",
        "Water"
      ]
    },
    {
      "author": "Schwark Satyavolu",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-nest-doorbell-support-via-starling-hub/122705",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Starling Hub Support for Hubitat",
      "documentationUrl": "https://github.com/schwark/hubitat-starling",
      "id": "manifest:c49f5ee8e1e845d5ac92",
      "manifestUrl": "https://raw.githubusercontent.com/schwark/hubitat-starling/main/PackageManifest.json",
      "name": "Nest Doorbell via Starling Hub",
      "observed": {
        "externalHosts": [
          "is5-ssl.mzstatic.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-netatmo/32958/1",
      "declared": {
        "cloudTag": true,
        "lanTag": true
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:88cafa22bde71ccc0d3f",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Apps/Netatmo/Netatmo.json",
      "name": "Netatmo",
      "observed": {
        "externalHosts": [
          "cdn.shopify.com",
          "dev.netatmo.com",
          "pbs.twimg.com",
          "s3.amazonaws.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 7,
        "urlLiteralCount": 31
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "LAN",
        "Safety & Security"
      ]
    },
    {
      "author": "Derek Osborn",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/re-release-netatmo-connect-weather-station/97788",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Netatmo (Connect) - Weather Station Application and Drivers for all modules. Includes Dashboard tiles, Presense detection and Signal Strength Monitoring.",
      "documentationUrl": null,
      "id": "manifest:e15a1fbd81c133c591bd",
      "manifestUrl": "https://raw.githubusercontent.com/dJOS1475/Hubitat_Netatmo/main/packageManifest.json",
      "name": "Netatmo (Connect) - Weather Station",
      "observed": {
        "externalHosts": [
          "cdn.shopify.com",
          "dev.netatmo.com",
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 6,
        "urlLiteralCount": 24
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Dashboards",
        "Multi Sensors",
        "Temperature & Humidity",
        "Weather"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-velux-active-with-netatmo/100499",
      "declared": {
        "cloudTag": true,
        "lanTag": true
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:7bc2ac95bc3d95f5a7e4",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Apps/Netatmo/Netatmo%20-%20Velux.json",
      "name": "Netatmo - Velux",
      "observed": {
        "externalHosts": [
          "app.velux-active.com",
          "pbs.twimg.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 9,
        "urlLiteralCount": 29
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Doors & Windows",
        "LAN",
        "Safety & Security"
      ]
    },
    {
      "author": "Brent Rossow",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-new-netatmo-weather-station-integration/163479",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "A Hubitat integration for Netatmo Weather Station base stations and modules, including outdoor, indoor, rain, and wind modules.",
      "documentationUrl": "https://github.com/brossow/hubitat-drivers/tree/main/netatmo-weather-station",
      "id": "hpm:a1144b49-00b4-44e4-8987-b4bc4e035dfb",
      "manifestUrl": "https://raw.githubusercontent.com/brossow/hubitat-drivers/main/netatmo-weather-station/packageManifest.json",
      "name": "Netatmo Weather Station Connect",
      "observed": {
        "externalHosts": [
          "api.netatmo.com",
          "dev.netatmo.com",
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 6,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Temperature & Humidity",
        "Weather"
      ]
    },
    {
      "author": "RamSet",
      "category": "Monitoring",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Network health check driver to monitor device availability via ping and status reporting.",
      "documentationUrl": null,
      "id": "manifest:826b189c01fa872ea281",
      "manifestUrl": "https://raw.githubusercontent.com/RamSet/hubitat/refs/heads/main/manifest-networkmonitor.json",
      "name": "Network Monitor Health Check",
      "observed": {
        "externalHosts": [
          "www.google.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Michael van Dam",
      "category": null,
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/interlogix-networx-alarm-with-leef-automation-alarm-system-bridge/31927",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Alarm bridge integration for Networx/GE/Interlogix alarms",
      "documentationUrl": "https://raw.githubusercontent.com/michaelvandam/Hubitat/master/Networx-Alarm-System-Bridge/README.md",
      "id": "manifest:3498d7a912053d8de437",
      "manifestUrl": "https://raw.githubusercontent.com/michaelvandam/Hubitat/master/Networx-Alarm-System-Bridge/package/networkx-alarm-system-bridge-package.json",
      "name": "Networx Alarm System Bridge",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION"
        ],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Safety & Security"
      ]
    },
    {
      "author": "David Snell",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Driver for getting data directly from a Neurio energy monitor",
      "documentationUrl": null,
      "id": "hpm:5aba2c98-a662-4539-b1a7-d9f82943852b",
      "manifestUrl": "https://www.drdsnell.com/projects/hubitat/drivers/Neurio.json",
      "name": "Neurio",
      "observed": {
        "externalHosts": [
          "www.drdsnell.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "LAN",
        "Misc. Devices",
        "Monitoring"
      ]
    },
    {
      "author": "Boguslaw Wojcik (@bogus.wojcik)",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-nice-ibt4zwave-community-driver/146932",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Nice IBT4ZWAVE gate/garage door actuator driver.",
      "documentationUrl": "https://community.hubitat.com/t/release-nice-ibt4zwave-community-driver/146932",
      "id": "hpm:349ceb4b-29d2-41f4-a496-839a76f83823",
      "manifestUrl": "https://raw.githubusercontent.com/boguslaw-wojcik/hubitat/main/manifests/nice_ibt4zwave.json",
      "name": "Nice IBT4ZWAVE",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Garage Doors",
        "ZWave"
      ]
    },
    {
      "author": "Aaron Ward",
      "category": "Convenience",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-noaa-weather-alerts/50588",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "NOAA Weather Alerts provides weather alert notifications for USA based users through TTS using any or all Music devices, Echo Speaks devices, Google/Speech devices, PushOver Notifications devices, Hubitat app, and Dashboard tiles. NOAA provides granular customization to enable users to watch for specific events, severity, urgency while also using global variables to customize alert notification messages.",
      "documentationUrl": "https://github.com/imnotbob/Hubitat-4/blob/master/NOAA/README.md",
      "id": "manifest:6e92340ec72d137608b7",
      "manifestUrl": "https://raw.githubusercontent.com/imnotbob/Hubitat-4/master/NOAA/packageManifest.json",
      "name": "NOAA Weather Alerts (Latest)",
      "observed": {
        "externalHosts": [
          "api.weather.gov",
          "s3.amazonaws.com",
          "www.weather.gov"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 17
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Safety & Security",
        "Tools & Utilities",
        "Weather"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Node Red Server Information Driver creates a virtual device to accept and store input from node-red-contrib-device-stat, node-red-contrib-cpu.",
      "documentationUrl": null,
      "id": "hpm:6fcd0f87-848b-4fc7-a0e4-209cf0fb7762",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/nrServerInfoManifest.json",
      "name": "Node Red Server Information Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Misc. Devices"
      ]
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with model E1743.",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-ikea-tradfri-on-off-switch",
      "id": "manifest:d85ef453793deccf197f",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-ikea-tradfri-on-off-switch.json",
      "name": "NOT WORKING IKEA Tradfri On/Off Switch",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Device driver that can serve as a destination for notifications. Formats the notifications for display on an attribute tile.",
      "documentationUrl": null,
      "id": "hpm:812cb3c9-3b67-47f4-aac2-05dc85e0e505",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/notifyTileManifest.json",
      "name": "Notification Tile Device",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Misc. Devices"
      ]
    },
    {
      "author": "Graf Technology, LLC",
      "category": "Notifications",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A comprehensive Hubitat driver for NTFY notifications (ntfy.sh or self-hosted). Features connection testing, enhanced error handling, input validation, state management, tags/emojis, click actions, attachments, custom icons, markdown formatting, and message scheduling.",
      "documentationUrl": "https://github.com/graftechnology/hubitat-ntfy-notification-driver",
      "id": "hpm:b6670762-37bb-4af0-b563-969f470d58bf",
      "manifestUrl": "https://raw.githubusercontent.com/graftechnology/hubitat-ntfy-notification-driver/main/packageManifest.json",
      "name": "NTFY Notifier Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Notifications",
        "NTFY",
        "Push"
      ]
    },
    {
      "author": "dan.t",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "NTP Client to get time from local NTP Server",
      "documentationUrl": null,
      "id": "manifest:6f25d63fea4d721f71d5",
      "manifestUrl": "https://raw.githubusercontent.com/danTapps/Hubitat/master/Drivers/NTP%20Client/packageManifest.json",
      "name": "NTP Client",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND",
          "UDP_PROTOCOL"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Tools & Utilities"
      ]
    },
    {
      "author": "nh.schottfam",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/nuheat-signature-integration/41148",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "nuHeat Signature Thermostat for Hubitat",
      "documentationUrl": null,
      "id": "manifest:9e9bc75897ac309d63a1",
      "manifestUrl": "https://raw.githubusercontent.com/imnotbob/Hubitat-NuHeat/master/packageManager.json",
      "name": "NuHeat",
      "observed": {
        "externalHosts": [
          "www.mynuheat.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "LAN"
      ]
    },
    {
      "author": "Marco Felicio (maffpt@gmail.com)",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/beta-nuki-smart-lock-2-0-3-0-4-0/40654",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "App & drivers for integration of Nuki Smart Lock to Hubitat Elevation (using Nuki Bridge only)",
      "documentationUrl": "https://github.com/MAFFPT/Hubitat/wiki",
      "id": "manifest:8d471765042c125a4560",
      "manifestUrl": "https://raw.githubusercontent.com/MAFFPT/Hubitat/master/Nuki%20Smart%20Lock/packageManifest.json",
      "name": "Nuki Smart Lock Integration",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "PARSE_LAN_MESSAGE"
        ],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 15
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Supun Vidana Pathiranage",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Nuki Smart Lock web API driver. Control your Nuki smart locks without the hub",
      "documentationUrl": null,
      "id": "hpm:ce32ea21-b113-4257-a46e-ef5f30cfef57",
      "manifestUrl": "https://raw.githubusercontent.com/vpsupun/hubitat/master/NukiWebAPI/packageManifest.json",
      "name": "Nuki Web API",
      "observed": {
        "externalHosts": [
          "api.nuki.io"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Doors & Windows",
        "LAN",
        "Locks",
        "Safety & Security"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-network-ups-tools-nut-monitor-and-shutdown-controller-upsmon/115483",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "UPS monitor and shutdown controller for use with Network UPS Tools (NUT)",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/drivers/nut-upsmon",
      "id": "manifest:7e225873920df5902b73",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/nut-upsmon.json",
      "name": "NUT ups monitor (upsmon)",
      "observed": {
        "externalHosts": [
          "networkupstools.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Arn Burkhoff",
      "category": "Security",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-nyckelharpa-an-hsm-extension/15062",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Nyckelharpa is a user created Hubitat Home Security Monitor (HSM) extension. \n Under user control allows HSM to arm with an Open Contact sensor.\n Additionally, optionally sets Mode when HSM status changes,\n and simplifies setting up security related TTS and notification messaging",
      "documentationUrl": "https://github.com/arnbme/nyckelharpa/blob/master/README.md",
      "id": "manifest:5d719e8c17b7b5b40de2",
      "manifestUrl": "https://raw.githubusercontent.com/arnbme/nyckelharpa/master/packageManifest.json",
      "name": "Nyckelharpa HSM Extension",
      "observed": {
        "externalHosts": [
          "www.arnb.org",
          "www.google.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 37
      },
      "reviewed": [],
      "tags": [
        "Safety & Security"
      ]
    },
    {
      "author": "Mike Coffey",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "OctoPrint 3d Printing Integration",
      "documentationUrl": null,
      "id": "manifest:7845ef0fbdbd32071002",
      "manifestUrl": "https://github.com/mikec85/hubitatdrivers/raw/master/octoprint/packageManifest.json",
      "name": "OctoPrint",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Notifications",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Curtis Ide",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Oelo permanent outdoor lighting",
      "documentationUrl": null,
      "id": "manifest:7fb9bbcc37d7bf0cfabb",
      "manifestUrl": "https://raw.githubusercontent.com/curtiside/oelo-lights-hubitat/main/packageManifest.json",
      "name": "Oelo Lights",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Robert Morris",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Allows you to select a group of switches and have others turned off when one is turned on (so only one can be on at a time)",
      "documentationUrl": null,
      "id": "manifest:a4fa7839b5dabc33ca69",
      "manifestUrl": "https://raw.githubusercontent.com/RMoRobert/Hubitat/master/apps/OneSwitchAtATime/packageManifest.json",
      "name": "One Switch at a Time",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Tools & Utilities"
      ]
    },
    {
      "author": "James Shimota",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-openweathermap-multi-api-weather-driver/165312",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A virtual device driver for weather. Includes multiple tiles, including Alerts and Moon Phase.  Has detailed Sun Altitude and Azimuth and Illuminance for use with blinds. High precision temp, barometer, rainfall and UVI. Forecasted weather data included for next 3 days",
      "documentationUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/owm_multi-API_weather/README.md",
      "id": "manifest:369cb29ec5aec5f3001d",
      "manifestUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/owm_multi-API_weather/packageManifest.json",
      "name": "OpenWeatherMap Multi-API Weather Driver",
      "observed": {
        "externalHosts": [
          "api.openweathermap.org",
          "openweathermap.org",
          "tinyurl.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 16
      },
      "reviewed": [],
      "tags": [
        "Misc. Devices",
        "Virtual",
        "Weather"
      ]
    },
    {
      "author": "Scottma61 (Original) / Aniva (Patch)",
      "category": "Weather",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Patched version of OpenWeatherMap-Alerts driver with fixed icon hosting.",
      "documentationUrl": "https://github.com/aniva/hubitat01/blob/master/OpenWeatherMap/README.md",
      "id": "manifest:e552e30db05c3f904f5c",
      "manifestUrl": "https://raw.githubusercontent.com/aniva/hubitat01/master/OpenWeatherMap/packageManifest.json",
      "name": "OpenWeatherMap-Alerts (Icon Fix)",
      "observed": {
        "externalHosts": [
          "api.openweathermap.org",
          "api.weather.gov",
          "hubitatcommunity.github.io",
          "openweathermap.org",
          "tinyurl.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 29
      },
      "reviewed": [],
      "tags": [
        "Driver",
        "Icons",
        "Weather"
      ]
    },
    {
      "author": "Matthew Scott",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/openweathermap-alerts-weather-driver/38249",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "OpenWeatherMap-Alerts Weather Driver",
      "documentationUrl": "https://github.com/HubitatCommunity/OpenWeatherMap-Alerts-Weather-Driver/wiki/OpenWeatherMap-Alerts-Weather-Driver-wiki!",
      "id": "manifest:b873e859214436ea0c50",
      "manifestUrl": "https://raw.githubusercontent.com/Scottma61/Hubitat/master/docs/OWN-Alerts_packageManifest.json",
      "name": "OpenWeatherMap-Alerts Weather Driver",
      "observed": {
        "externalHosts": [
          "api.openweathermap.org",
          "api.weather.gov",
          "forecast.weather.gov",
          "hubitatcommunity.github.io",
          "openweathermap.org",
          "tinyurl.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 33
      },
      "reviewed": [],
      "tags": [
        "Weather"
      ]
    },
    {
      "author": "Jeffrey D. Chapman",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Oppo Disc Player driver",
      "documentationUrl": "https://github.com/jdc72/Hubitat/blob/main/oppo_disc_player/README.md",
      "id": "hpm:ae5928e5-c244-4e2e-8545-b168bb3e2340",
      "manifestUrl": "https://raw.githubusercontent.com/jdc72/Hubitat/main/oppo_disc_player/packageManifest.json",
      "name": "Oppo Disc Player",
      "observed": {
        "externalHosts": [
          "musicbrainz.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Misc. Devices",
        "Multimedia"
      ]
    },
    {
      "author": "Kurt Sanders & Dominick Meglio",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-orbit-bhyve-integration/48194",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integrate your Orbit BHyve devices with Hubitat.",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-orbitbhyve/blob/master/README.md",
      "id": "hpm:bd673a2e-e9e8-4363-87e1-c4d9344f2f9b",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-orbitbhyve/master/packageManifest.json",
      "name": "Orbit BHyve Integration",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Irrigation",
        "Valves"
      ]
    },
    {
      "author": "Joe Page",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-orbit-bhyve/119349",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Orbit Bhyve Integration",
      "documentationUrl": null,
      "id": "hpm:d35cca76-eea2-4c3d-9843-0e5e2f806893",
      "manifestUrl": "https://raw.githubusercontent.com/jpage4500/hubitat-drivers/master/orbit-bhyve/packageManifest.json",
      "name": "Orbit Bhyve+",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Irrigation",
        "Valves",
        "Water"
      ]
    },
    {
      "author": "Lyle Pakula",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-owntracks/130821",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Connects OwnTracks mobile app to Hubitat",
      "documentationUrl": "https://github.com/wir3z/hubitat/blob/main/owntracks-hubitat/README.md",
      "id": "hpm:01ae3fea-6b6a-4c58-8981-10140b1fefc8",
      "manifestUrl": "https://raw.githubusercontent.com/wir3z/hubitat/main/owntracks-hubitat/packageManifest.json",
      "name": "OwnTracks",
      "observed": {
        "externalHosts": [
          "avanc.github.io",
          "console.cloud.google.com",
          "enter.your.recorder.ip",
          "maps.google.com",
          "maps.googleapis.com",
          "owntracks.org",
          "www.w3schools.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 44
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "OwnTracks Endpoint / MQTT Broker",
              "runtimeCriticality": "RUNTIME",
              "transport": "HTTP_OR_MQTT"
            }
          ],
          "documentation": [],
          "id": "owntracks",
          "name": "OwnTracks Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Automations & Groups",
        "Monitoring",
        "Presence & Location",
        "Safety & Security"
      ]
    },
    {
      "author": "Brian Wilson",
      "category": "Security",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-owntracks-presence/53419",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Set presence based on OwnTracks iOS/Android App",
      "documentationUrl": "https://github.com/bdwilson/hubitat/tree/master/OwnTracks-Presence",
      "id": "manifest:930aa025cdd43813f295",
      "manifestUrl": "https://raw.githubusercontent.com/bdwilson/hubitat/master/OwnTracks-Presence/packageManifest.json",
      "name": "OwnTracks Presence",
      "observed": {
        "externalHosts": [
          "owntracks.org",
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 11
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "OwnTracks Endpoint / MQTT Broker",
              "runtimeCriticality": "RUNTIME",
              "transport": "HTTP_OR_MQTT"
            }
          ],
          "documentation": [],
          "id": "owntracks",
          "name": "OwnTracks Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Presence & Location",
        "Safety & Security"
      ]
    },
    {
      "author": "winnie",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Package for Evalogik",
      "documentationUrl": null,
      "id": "hpm:d11ec74f-df79-47de-aa08-64758a5ce7de",
      "manifestUrl": "https://raw.githubusercontent.com/sky-nie/hubitat/main/evalogik/packageManifest.json",
      "name": "Package Evalogik",
      "observed": {
        "externalHosts": [
          "inovelli.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 7,
        "urlLiteralCount": 23
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "winnie",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Package for Minoston",
      "documentationUrl": null,
      "id": "hpm:4b99cbf4-58b9-42dd-9177-e4a751717b81",
      "manifestUrl": "https://raw.githubusercontent.com/sky-nie/hubitat/main/minoston/packageManifest.json",
      "name": "Package Minoston",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 12,
        "urlLiteralCount": 37
      },
      "reviewed": [],
      "tags": [
        "Doors & Windows",
        "Energy Monitoring",
        "Lights & Switches",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "winnie",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Package for NewOne",
      "documentationUrl": null,
      "id": "hpm:8a293313-9136-4edb-811d-1d851f502b92",
      "manifestUrl": "https://raw.githubusercontent.com/sky-nie/hubitat/main/newone/packageManifest.json",
      "name": "Package NewOne",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Lights & Switches",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Mike Bishop",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https: //community.hubitat.com/t/beta-palette-scenes/106335",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "RGB light displays",
      "documentationUrl": null,
      "id": "hpm:ed1f09a6-2463-4b6e-9c60-690fe78c6a63",
      "manifestUrl": "https://raw.githubusercontent.com/MikeBishop/hpm-intermediate/main/palette.json",
      "name": "Palette Scenes",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-panasonic-ac-comfort-cloud/100503",
      "declared": {
        "cloudTag": true,
        "lanTag": true
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:0c955418bea7700a2efb",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Apps/PanasonicComfortCloud/Panasonic%20-%20Comfort%20Cloud.json",
      "name": "Panasonic - Comfort Cloud",
      "observed": {
        "externalHosts": [
          "play-lh.googleusercontent.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Cloud",
        "LAN",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Ramdev Shallem",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Send Commands to your windows pc and get events from the pc. Uses a windows software called EventGhost",
      "documentationUrl": null,
      "id": "manifest:6ac8ff7d6b9a636a4ce7",
      "manifestUrl": "https://raw.githubusercontent.com/gilshallem/Hubitat/main/HPM/cc_package.json",
      "name": "PC Controller",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "SEND_HUB_COMMAND",
          "UDP_PROTOCOL"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Misc. Devices",
        "Multimedia",
        "Tools & Utilities"
      ]
    },
    {
      "author": "jdthomas24",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-pentair-intellicenter-controller-beta/162876/31",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Pentair Intellicenter Controller",
      "documentationUrl": null,
      "id": "manifest:e7e7cbfa755e1aea230d",
      "manifestUrl": "https://raw.githubusercontent.com/jdthomas24/Hubitat-Apps-Drivers/refs/heads/main/Pentair%20Intellicenter%20Control/packagemanifest.json",
      "name": "Pentair Intellicenter Controller",
      "observed": {
        "externalHosts": [
          "paypal.me"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Pools & Spas"
      ]
    },
    {
      "author": "Neil Jackson",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Log Personal Events",
      "documentationUrl": null,
      "id": "hpm:58d8c4ca-c19c-4f79-a9e4-573c81b4e886",
      "manifestUrl": "https://raw.githubusercontent.com/neiljackson1984/SmartThingsNeil/master/packages/personal-logger/build/package_manifest.json",
      "name": "Personal Logger",
      "observed": {
        "externalHosts": [
          "wp.josh.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Health & Fitness",
        "Tools & Utilities",
        "Voice Assistants"
      ]
    },
    {
      "author": "Dominick Meglio",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integrates Petnet SmartFeeders into your Hubitat system",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-petnet/blob/master/README.md",
      "id": "hpm:8483f5b7-3b2f-466d-92bb-3c5c0fc4d9dd",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-petnet/master/packageManifest.json",
      "name": "Petnet SmartFeeder Integration",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Pets & Animals"
      ]
    },
    {
      "author": "rbyrbt",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Manage PetSafe Smart Feed devices",
      "documentationUrl": "https://github.com/rbyrbt/Hubitat/blob/main/PetSafeSmartFeeder/README.md",
      "id": "manifest:9db087fae464aa244678",
      "manifestUrl": "https://raw.githubusercontent.com/rbyrbt/Hubitat/main/PetSafeSmartFeeder/packageManifest.json",
      "name": "PetSafe Smart Feeder",
      "observed": {
        "externalHosts": [
          "cognito-idp.us-east-1.amazonaws.com",
          "platform.cloud.petsafe.net"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Pets & Animals"
      ]
    },
    {
      "author": "Dominick Meglio",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-petsafe-smart-feeder-integration/44268",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integrates Petsafe Smart Feeders into your Hubitat system",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-petsafe/blob/master/README.md",
      "id": "hpm:e41fbb47-1fb6-4bf7-a5d1-75e73d1c5aed",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-petsafe/master/packageManifest.json",
      "name": "Petsafe SmartFeeder Integration",
      "observed": {
        "externalHosts": [
          "directory.cloud.petsafe.net",
          "platform.cloud.petsafe.net",
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Pets & Animals"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-philip-pat02-flood-temperature-humidity-driver/94644",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for the PAT02-A/B/C Flood / Temperature / Humidity sensors made by Philio (also Zipato, Safe Grow, etc.)",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/drivers/pat02",
      "id": "manifest:eb77daec88ce4cd96781",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/pat02.json",
      "name": "Philio PAT02 Flood / Temperature / Humidity sensors",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Temperature & Humidity",
        "ZWave"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/philio-pat02-b-temperature-humidity-driver/43039",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for the PAT02-B Temperature / Humidity sensor made by Philio (also Zipato, Safe Grow, etc.)",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/drivers/pat02-b",
      "id": "manifest:520004b5da75a1604d09",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/pat02-b.json",
      "name": "Philio PAT02-B Temperature / Humidity sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Temperature & Humidity",
        "ZWave"
      ]
    },
    {
      "author": "Andrew Webster",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for Hubitat, hue bulbs, etcs",
      "documentationUrl": null,
      "id": "hpm:e64ed82a-e7ef-46f4-a3a4-4d416f46f766",
      "manifestUrl": "https://raw.githubusercontent.com/Andywebs/hubitat/main/packageManifest.json",
      "name": "Philips Hue Tap Dial Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Buttons"
      ]
    },
    {
      "author": "Jonathan Bradshaw",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/beta-philips-hue-rgbw-zigbee-direct-driver/111695",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Enhanced support for Philips Hue devices that are connected via Zigbee (not using the bridge)",
      "documentationUrl": "https://raw.githubusercontent.com/bradsjm/hubitat-public/main/PhilipsHue/README.md",
      "id": "hpm:55e9b3ed-3d1a-4a8c-9d2b-4244a9104470",
      "manifestUrl": "https://raw.githubusercontent.com/bradsjm/hubitat-public/main/PhilipsHue/packageManifest.json",
      "name": "Philips Hue Zigbee Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Zigbee"
      ]
    },
    {
      "author": "Eliot Stocker",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-lighting-group-controller/66682",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A hubitat app for easily setting up physical buttons to control a group of lights",
      "documentationUrl": "https://github.com/eliotstocker/hubitat-physical-light-control/blob/main/README.md",
      "id": "manifest:2996895cb00ef6cfbc76",
      "manifestUrl": "https://raw.githubusercontent.com/eliotstocker/hubitat-physical-light-control/main/package-manifest.json",
      "name": "Physical Light Control",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups",
        "Buttons",
        "Lights & Switches"
      ]
    },
    {
      "author": "WalksOnAir",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": true
      },
      "description": "A virtual switch for controlling Pi-hole ad-blocking from Hubitat.",
      "documentationUrl": null,
      "id": "hpm:3b141d3b-36fb-492e-9766-8867256478de",
      "manifestUrl": "https://raw.githubusercontent.com/walksonair/Hubitat-Pi-hole-Virtual-Switch/main/packageManifest.json",
      "name": "Pi-hole Virtual Switch",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "LAN",
        "Monitoring",
        "Tools & Utilities"
      ]
    },
    {
      "author": "vision9074",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Monitor and control one or more Pihole (Pi-hole) v6 DNS ad blockers from Hubitat. Exposes query, client, blocklist and host-health statistics, turns ad blocking on and off with an optional auto-expiring timer, and can drive every Pihole at once from a single group device.",
      "documentationUrl": "https://github.com/vision9074/hubitat-pihole-integration",
      "id": "hpm:200683c6-4df8-4f80-9b4c-74542f560930",
      "manifestUrl": "https://raw.githubusercontent.com/vision9074/hubitat-pihole-integration/main/packageManifest.json",
      "name": "Pihole Integration",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Monitoring"
      ]
    },
    {
      "author": "signal15",
      "category": "Climate Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://github.com/signal15/tuya-minisplit-hubitat/issues",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Native local control of Pioneer WYT (Diamante) mini-splits via Tuya protocol. No bridge required.",
      "documentationUrl": "https://github.com/signal15/tuya-minisplit-hubitat#readme",
      "id": "manifest:bb3685eeb0a01c8f6c29",
      "manifestUrl": "https://raw.githubusercontent.com/signal15/tuya-minisplit-hubitat/main/hubitat/packageManifest.json",
      "name": "Pioneer Mini-Split Local",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Raul Martin Rodriguez",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver to use pixela from hubitat, and easy access to the graphs on dashboard",
      "documentationUrl": null,
      "id": "hpm:549b9d03-35dd-4e92-a06b-752c7b4f72d8",
      "manifestUrl": "https://raw.githubusercontent.com/luarmr/hubitat/main/drivers/pixela_driver/packageManifest.json",
      "name": "Pixela Driver",
      "observed": {
        "externalHosts": [
          "pixe.la"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Dashboard",
        "Graph",
        "Tracking"
      ]
    },
    {
      "author": "Ben Jansen",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Driver for PJLink-compatible projectors",
      "documentationUrl": "https://bitbucket.org/aogail/hubitat-pjlink/src/master/README.md",
      "id": "hpm:e4ecab3c-e0be-45ae-8778-078dc808f745",
      "manifestUrl": "https://bitbucket.org/aogail/hubitat-pjlink/raw/v1.0.0/packageManifest.json",
      "name": "PJLink Projector Driver",
      "observed": {
        "externalHosts": [
          "bitbucket.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Multimedia"
      ]
    },
    {
      "author": "ritchierich",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Send SMS and initiate voice call notifications via the Plivo.",
      "documentationUrl": null,
      "id": "manifest:522bc3dfb8d3c076d43b",
      "manifestUrl": "https://raw.githubusercontent.com/mlritchie/Hubitat/master/Drivers/Plivo%20SMS/packageManifest.json",
      "name": "Plivo SMS and Voice Notifications",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Notifications"
      ]
    },
    {
      "author": "James Schlackman",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Retrieves airborne pollen data from Pollen.com",
      "documentationUrl": null,
      "id": "hpm:7493927e-e05e-41ec-a4bd-48821f814483",
      "manifestUrl": "https://raw.githubusercontent.com/jschlackman/Hubitat/main/Pollen/packageManifest.json",
      "name": "Pollen Virtual Sensor",
      "observed": {
        "externalHosts": [
          "www.pollen.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Weather"
      ]
    },
    {
      "author": "Brad Sileo",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integration from Hubitat to a Pentair *Touch Controller using the nodejs-poolController",
      "documentationUrl": "https://github.com/bsileo/hubitat_poolcontroller/blob/master/README.md",
      "id": "manifest:b00f267a452764e1fa61",
      "manifestUrl": "https://raw.githubusercontent.com/bsileo/hubitat_poolcontroller/master/packageManifest.json",
      "name": "Pool Controller",
      "observed": {
        "externalHosts": [
          "cdn.device-icons.smartthings.com"
        ],
        "lanPrimitives": [
          "LAN_PROTOCOL",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 8,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Pools & Spas"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-popp-electric-strike-lock-control/32954/1",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:2f6b2e7aeb4dc48d6a2b",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Popp/Popp%20Electric%20Strike%20Lock%20Control.json",
      "name": "Popp Electric Strike Lock Control",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Locks",
        "ZWave"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-popp-z-rain-sensor/34270/1",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:54a61c418d932370179e",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Popp/Popp%20Z-Rain%20Sensor.json",
      "name": "Popp Z-Rain Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Water",
        "Weather",
        "ZWave"
      ]
    },
    {
      "author": "Christer Lundin",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-positionguard-family-presence-one-presence-device-per-family-member-area-level-no-coordinates-on-your-hub/165032",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Privacy-first family presence - one presence device per member, area-level only, no coordinates on your hub.",
      "documentationUrl": "https://github.com/positionguard/positionguard-hubitat/blob/main/README.md",
      "id": "manifest:8674a05a8e58c3a46de1",
      "manifestUrl": "https://raw.githubusercontent.com/positionguard/positionguard-hubitat/main/packageManifest.json",
      "name": "PositionGuard",
      "observed": {
        "externalHosts": [
          "dev.positionguardai.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Monitors devices with Power Source capability and initiates actions when the powerSource attribute switches from battery to mains indicating a power outage.  Can also initiate actions when power is restored.",
      "documentationUrl": null,
      "id": "hpm:8ca1acc6-888d-477f-8856-2ddef0f06a2c",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/powOutMgrManifest.json",
      "name": "Power Outage Manager",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Monitoring"
      ]
    },
    {
      "author": "Gary J. Milne",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Gathers hourly precipitation and other weather data from your nearest airport and makes it available to you via a device driver for access via rules. No codes or API keys needed. Provides rolling 1,3,6,12,24 hr totals and up to 7 days of precipitation history. Also provides temperature, humidity, dewpoint, pressure, wind, weather, sky conditions and visibility data.",
      "documentationUrl": null,
      "id": "manifest:8ae36dd908005d43a389",
      "manifestUrl": "https://raw.githubusercontent.com/GaryMilne/Hubitat-Apps/main/packageManifestApps.json",
      "name": "Precipitation and Weather Monitor for NWS Data",
      "observed": {
        "externalHosts": [
          "en.m.wikipedia.org",
          "forecast.weather.gov"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Irrigation",
        "Temperature & Humidity",
        "Water",
        "Weather"
      ]
    },
    {
      "author": "Gordon Thelander",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Combines Hubitat mobile geolocation presence, phone IP checks and Third Party Services switches into one reliable household occupancy status. Fast to Home, conservative to Away, with a Presence Report (90 day window, CSV export) and Guest Mode.",
      "documentationUrl": "https://github.com/GordonThelander/hubitat-Presence-Manager",
      "id": "hpm:4c666d00-1c4c-44ec-bd30-f3b6a9645374",
      "manifestUrl": "https://raw.githubusercontent.com/GordonThelander/hubitat-Presence-Manager/main/packageManifest.json",
      "name": "Presence Manager",
      "observed": {
        "externalHosts": [
          "nominatim.openstreetmap.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Presence & Location"
      ]
    },
    {
      "author": "Dominick Meglio",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-presence-monitor/30129",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Provides a way to combine presence from multiple devices into a single virtual device",
      "documentationUrl": null,
      "id": "hpm:622fc0ae-63b2-439b-8f66-27ebd5b114d1",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-presencemonitor/master/packageManifest.json",
      "name": "Presence Monitor",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Presence & Location"
      ]
    },
    {
      "author": "johndc7",
      "category": "Security",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-improved-mobile-presence-android-only",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "(Android ONLY) Hubitat Integration for Presence Sensor app",
      "documentationUrl": null,
      "id": "hpm:13beeabb-c276-4aa8-ba35-7c722e1bd940",
      "manifestUrl": "https://raw.githubusercontent.com/johndc7/Presence-Sensor/master/package.json",
      "name": "Presence Sensor",
      "observed": {
        "externalHosts": [
          "paypal.me",
          "play.google.com",
          "presence.callahtech.com",
          "st.callahtech.com",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 18
      },
      "reviewed": [],
      "tags": [
        "Presence & Location",
        "Safety & Security"
      ]
    },
    {
      "author": "Mike Coffey",
      "category": "Utility",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Tracks your public ip address",
      "documentationUrl": null,
      "id": "hpm:e959885e-e371-4b1e-ae05-4044b8fe5868",
      "manifestUrl": "https://github.com/mikec85/hubitatdrivers/raw/master/publiciptracker/packageManifest.json",
      "name": "PublicIPTracker",
      "observed": {
        "externalHosts": [
          "ifconfig.co"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Monitoring",
        "Tools & Utilities"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/pump-scheduler/165333",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Smart scheduler for pool pumps, spa pumps, septic aerators, drainage pumps, and other motorized equipment. Supports daily runtime targets, maximum cycle length, cooldown periods, sunrise/sunset scheduling, monitoring, and automatic recovery after hub reboots or app updates.",
      "documentationUrl": "https://www.winnfreenet.com/wp/2026/07/pump-scheduler-for-hubitat/",
      "id": "manifest:2f1cae8564a80b2e8c9c",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/pump_scheduler.grovey",
      "name": "Pump Scheduler",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com",
          "www.paypal.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Pools & Spas",
        "Timers",
        "Tools & Utilities",
        "Water"
      ]
    },
    {
      "author": "Barry A. Burke",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-free-device-driver-for-the-purpleair-air-quality-station-now-with-hubitat-support/12755",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "PurpleAir Air Quality Station for SmartThings & Hubitat",
      "documentationUrl": "https://github.com/SANdood/PurpleAirStation/blob/master/README.md",
      "id": "manifest:6178422f08495791ddb5",
      "manifestUrl": "https://raw.githubusercontent.com/SANdood/PurpleAirStation/master/packageManifest.json",
      "name": "PurpleAir Air Quality Station",
      "observed": {
        "externalHosts": [
          "www.purpleair.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Travis Tomka",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integrate with the Pushcut ecosystem.",
      "documentationUrl": "https://github.com/droath/Hubitat/master/App/Pushcut/README.md",
      "id": "hpm:54de9aff-b389-400a-ade9-2b7056702bb9",
      "manifestUrl": "https://raw.githubusercontent.com/droath/Hubitat/master/App/Pushcut/packageManifest.json",
      "name": "Pushcut",
      "observed": {
        "externalHosts": [
          "api.pushcut.io"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Notifications",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Dan Ogorchock",
      "category": "Notifications",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/pushover-notifications-driver-slightly-enhanced/1067?u=ogiewon",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Pushover Notifications Community Driver with addtional features",
      "documentationUrl": null,
      "id": "manifest:eed6e724686e71482fb3",
      "manifestUrl": "https://raw.githubusercontent.com/ogiewon/Hubitat/refs/heads/master/Drivers/pushover-notifications.src/pushover-notifications.json",
      "name": "Pushover",
      "observed": {
        "externalHosts": [
          "api.pushover.net"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 16
      },
      "reviewed": [],
      "tags": [
        "Notifications"
      ]
    },
    {
      "author": "Don Caton",
      "category": "Security",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for QolSys IQ Alarm Panels",
      "documentationUrl": "https://raw.githubusercontent.com/dcaton/Hubitat/main/QolSysIQ2+/README.md",
      "id": "hpm:27905c8b-7900-4f7f-a4b6-2dbb2994d7dd",
      "manifestUrl": "https://raw.githubusercontent.com/dcaton/Hubitat/main/QolSysIQPanel/packageManifest.json",
      "name": "QolSys IQ Alarm Panel",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 10,
        "urlLiteralCount": 21
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Safety & Security"
      ]
    },
    {
      "author": "rboer",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-qubino-dim-dimmer-and-smart-plug-16a-drivers/130698",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Z-Wave DIN Dimmer without temp capability by Qubino",
      "documentationUrl": "https://github.com/reneboer/Hubitat/blob/main/Qubino/README.md",
      "id": "manifest:44f5994347ab6f574f54",
      "manifestUrl": "https://raw.githubusercontent.com/reneboer/Hubitat/main/Qubino/dinDimManifest.json",
      "name": "Qubino DIN Dimmer Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Utility",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-qubino-flush-pilot-wire/32955/1",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:551b048a3412ce9ee95a",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Qubino/Qubino%20Flush%20Pilot%20Wire.json",
      "name": "Qubino Flush Pilot Wire",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Utility",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:0a03fb249943e8bb1617",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Qubino/Qubino%20Flush%20Shutter%20-%20CMV.json",
      "name": "Qubino Flush Shutter - CMV",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "rboer",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-qubino-dim-dimmer-and-smart-plug-16a-drivers/130698",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Z-Wave Smart Plug 16A by Qubino",
      "documentationUrl": "https://github.com/reneboer/Hubitat/blob/main/Qubino/README.md",
      "id": "manifest:e6d16d1eaadc606487de",
      "manifestUrl": "https://raw.githubusercontent.com/reneboer/Hubitat/main/Qubino/smartPlugManifest.json",
      "name": "Qubino Smart Plug 16A Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A Port of my customized Qubino weather station device handler, from smartthings with min/max added (Currently loads but no data is coming in)",
      "documentationUrl": null,
      "id": "hpm:2933cbe1-9443-4f78-9378-c7a4a9fbb978",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/QubinoWeatherStation.json",
      "name": "Qubino Weather Station",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Temperature & Humidity"
      ]
    },
    {
      "author": "lnjustin",
      "category": "Dashboards",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Chart Data Easily",
      "documentationUrl": null,
      "id": "manifest:fafddf38dd71c2db837c",
      "manifestUrl": "https://raw.githubusercontent.com/lnjustin/QuickChart/main/packageManifest.json",
      "name": "Quick Chart",
      "observed": {
        "externalHosts": [
          "momentjs.com",
          "paypal.me",
          "quickchart.io"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 29
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Energy Monitoring",
        "Monitoring",
        "Tools & Utilities",
        "Utility"
      ]
    },
    {
      "author": "Justin Leonard",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Rachio Community Package",
      "documentationUrl": null,
      "id": "manifest:2cab0dc23d232a02c2fe",
      "manifestUrl": "https://raw.githubusercontent.com/lnjustin/Rachio-Community/master/packageManifest.json",
      "name": "Rachio Community",
      "observed": {
        "externalHosts": [
          "api.open-meteo.com",
          "api.rach.io",
          "app.rach.io",
          "cdn.device-icons.smartthings.com",
          "cloud-rest.rach.io",
          "community.rachio.com",
          "d33v4339jhl8k0.cloudfront.net",
          "graph.api.smartthings.com",
          "media.rach.io",
          "rachio-media.s3.amazonaws.com",
          "s3-us-west-2.amazonaws.com",
          "support.rachio.com",
          "www.w3.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 40
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Rachio Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "HTTPS_API"
            }
          ],
          "documentation": [],
          "id": "rachio",
          "name": "Rachio Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Irrigation"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/driver-release-radio-thermostat-zwave-driver/99188",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "The Radio Thermostat Driver for most any Radio Thermostat. (ZWAVE) CT100,CT101,CT30,CT32 and more. Polling schedule and many extra options, Improved logging to detect errors info,debug,trace. Many manual options to set up device other drivers dont have. Option to use only heat or cool. Prevents dashboard getting out of sync with thermostat. If you have a RT you know all the problems other drivers have. This driver will fix your problems. Writen for my thermostats because the other drivers just did not work for me.",
      "documentationUrl": "http://www.winnfreenet.com/wp/2022/08/radio-thermostat-zwave-hubitat-driver-ct101-ct30/",
      "id": "manifest:dc5e339ffbe7d9a9e24c",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/radio_thermostat_driver.json",
      "name": "Radio Thermostat Zwave",
      "observed": {
        "externalHosts": [
          "products.z-wavealliance.org",
          "www.manualslib.com",
          "www.opensmarthouse.org",
          "www.paypal.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 41
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Temperature & Humidity",
        "ZWave"
      ]
    },
    {
      "author": "David LaPorte",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Monitor radon fan with a door sensor (eg. WADWAZ-1/Monoprice 15270)",
      "documentationUrl": null,
      "id": "manifest:92ac85e9f893d9111473",
      "manifestUrl": "https://raw.githubusercontent.com/dlaporte/Hubitat/main/RadonFanSensor/packageManifest.json",
      "name": "Radon Fan Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Marc Hedish",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-rain-bird-lnk-lnk2-wifi-module-controller/159062",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Advanced Hubitat driver providing full local LAN control of Rain Bird LNK/LNK2 WiFi irrigation controllers - including zone, program, and rain delay management. Features automatic time sync, telemetry, adaptive refresh, and support for ESP-TM2 and ESP-Me controllers.",
      "documentationUrl": "https://github.com/MHedish/Hubitat/blob/main/Drivers/RainBird-LNK/README.md",
      "id": "hpm:2ee323ee-9133-4a31-b84e-192b7a33d0ab",
      "manifestUrl": "https://raw.githubusercontent.com/MHedish/Hubitat/refs/heads/main/Drivers/RainBird-LNK/packageManifest.json",
      "name": "Rain Bird LNK/LNK2 WiFi Module Controller",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "Irrigation",
        "Monitoring",
        "Timers",
        "Valves",
        "Water"
      ]
    },
    {
      "author": "Brad sileo",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integration from Hubitat to a Rain Machine sprinkler controller - https://www.rainmachine.com/",
      "documentationUrl": null,
      "id": "manifest:6bc288f1e3d2b16b1f9b",
      "manifestUrl": "https://raw.githubusercontent.com/bsileo/Hubitat_RainMachine/master/packageManifest.json",
      "name": "Rain Machine",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "PARSE_LAN_MESSAGE"
        ],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Irrigation"
      ]
    },
    {
      "author": "Craig Dewar",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Rainbird sprinkler wifi controller",
      "documentationUrl": null,
      "id": "hpm:f9be7125-468d-4747-b402-012182f99e2d",
      "manifestUrl": "https://raw.githubusercontent.com/craigde/hubitat-rainbird/master/packageManifest.json",
      "name": "Rainbird sprinkler controller driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Irrigation"
      ]
    },
    {
      "author": "Justin Walker (augoisms)",
      "category": null,
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-rainforest-eagle/38883",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "A driver for the Rainfoest Eagle",
      "documentationUrl": null,
      "id": "manifest:74c27179c2fb214e14c0",
      "manifestUrl": "https://raw.githubusercontent.com/augoisms/hubitat/master/rainforest-eagle/packageManifest.json",
      "name": "Rainforest Eagle",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "PARSE_LAN_MESSAGE"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "LAN"
      ]
    },
    {
      "author": "Erik Dasque",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/wip-ratgdo-driver-mqtt-firmware/129078",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control your ratgdo MyQ alternative",
      "documentationUrl": null,
      "id": "hpm:acb4b7c4-9e6b-40a6-b5bc-b58efacde4bf",
      "manifestUrl": "https://raw.githubusercontent.com/edasque/hubitat/main/devicehandlers/ratgdoMQTT/packageManifest.json",
      "name": "ratgo (MQTT firware)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "lnustin",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control for hot water recirculation systems",
      "documentationUrl": null,
      "id": "manifest:95f4ef1be6fc85d1e080",
      "manifestUrl": "https://github.com/lnjustin/ReCirc/raw/main/packageManifest.json",
      "name": "ReCirc",
      "observed": {
        "externalHosts": [
          "code.iconify.design",
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Control",
        "Water",
        "Water Heater"
      ]
    },
    {
      "author": "jlslate",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Links a Kohler/Rehlko Energy Management account to Hubitat for standby generator status and telemetry. By jlslate.",
      "documentationUrl": "https://github.com/jlslate/Rehlko-Generator-Connect",
      "id": "hpm:96209F79-E604-4A6B-AD41-0D3AC96A0CF6",
      "manifestUrl": "https://raw.githubusercontent.com/jlslate/Rehlko-Generator-Connect/main/packageManifest.json",
      "name": "Rehlko Generator Connect",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Convenience",
        "Generator",
        "jlslate"
      ]
    },
    {
      "author": "Joel Wetzel",
      "category": "Security",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-reliable-locks",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Create virtual locks that wrap your physical lock devices, making them more reliable.  Especially useful for z-wave locks.",
      "documentationUrl": "https://github.com/joelwetzel/Hubitat-Reliable-Locks",
      "id": "manifest:0cc36becf34b70685c4e",
      "manifestUrl": "https://raw.githubusercontent.com/joelwetzel/Hubitat-Reliable-Locks/master/packageManifest.json",
      "name": "Reliable Locks",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Locks",
        "Safety & Security"
      ]
    },
    {
      "author": "Gary J. Milne",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-remote-builder-a-new-way-to-control-devices-7-remotes-available/142060",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Create virtual remotes to control devices around the home from any device, with or without using the Hubitat Dashboard.",
      "documentationUrl": "https://github.com/GaryMilne/Hubitat-RemoteBuilder/blob/main/Remote%20Builder%20Help.pdf",
      "id": "manifest:f25d40b4051e268f4f6d",
      "manifestUrl": "https://raw.githubusercontent.com/GaryMilne/Hubitat-RemoteBuilder/main/packageManifestRemoteBuilder.json",
      "name": "Remote Builder for Hubitat",
      "observed": {
        "externalHosts": [
          "cdnjs.cloudflare.com",
          "fonts.googleapis.com",
          "www.example.com",
          "www.google.com",
          "www.paypal.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 9,
        "urlLiteralCount": 47
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Convenience",
        "Dashboards",
        "Integrations",
        "Multimedia",
        "Utilities"
      ]
    },
    {
      "author": "rboer",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-zvidar-remotec-z-trv-v01-thermostat-radiator-valve-driver-with-secure-s2-support/128067",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Z-Wave 800 TVR by ZVIDAR",
      "documentationUrl": "https://github.com/reneboer/Hubitat/blob/main/ZVIDAR/README.md",
      "id": "manifest:02379ced59e1bf948d62",
      "manifestUrl": "https://raw.githubusercontent.com/reneboer/Hubitat/main/ZVIDAR/packageManifest.json",
      "name": "Remotec / ZVIDAR Z-Wave Thermostat Radiator Valve Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "ZWave"
      ]
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/beta-release-remotec-zxt-120/40004?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Remotec ZXT-120 Driver",
      "documentationUrl": null,
      "id": "manifest:78ac4ada688aec917988",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/remotecZXT120.json",
      "name": "Remotec ZXT-120",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "TheDanHealy",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-rental-automator-for-airbnb",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "This Hubitat app provides a direct integration with AirBNB and control over changing modes and programming door locks without the use of any other services, such as the Maker API and/or other applications.",
      "documentationUrl": "https://github.com/TheDanHealy/hubitat-rental-automator",
      "id": "manifest:2c7c2127b7ea9eb238b5",
      "manifestUrl": "https://raw.githubusercontent.com/TheDanHealy/hubitat-rental-automator/main/packageManifest.json",
      "name": "Rental Automator",
      "observed": {
        "externalHosts": [
          "brotherson3.org",
          "thedanhealy.com",
          "www.airbnb.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Automations & Groups",
        "Locks",
        "Tools & Utilities"
      ]
    },
    {
      "author": "David LaPorte",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control floodlight, motion/AI detection, microphone, status LED, and view RTSP / snapshot URLs for Reolink WhiteLed cameras (Elite Pro Floodlight PoE, Elite Floodlight WiFi, Duo 3 PoE, etc.)",
      "documentationUrl": null,
      "id": "manifest:e81b1393b05b5472c2ba",
      "manifestUrl": "https://raw.githubusercontent.com/dlaporte/Hubitat/main/ReolinkFloodlight/packageManifest.json",
      "name": "Reolink Floodlight Camera",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Reolink Camera / NVR / Home Hub",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "reolink",
          "name": "Reolink Integration",
          "status": "VERIFIED_COMMUNITY"
        },
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Reolink LAN Endpoint",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "reolink-camera",
          "name": "Reolink Camera/NVR Integration",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": []
    },
    {
      "author": "jdthomas24",
      "category": "Safety & Security",
      "classification": "BOTH",
      "communityUrl": "https://github.com/jdthomas24/Hubitat-Apps-Drivers/tree/main/Reolink%20Integration",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Discovers and manages Reolink cameras, doorbells, NVRs, and Home Hubs over the local HTTP API. Motion/AI detection, doorbell button press, snapshots, PTZ with preset recall, spotlight, night vision, siren, and battery %. No cloud account required.",
      "documentationUrl": "https://github.com/jdthomas24/Hubitat-Apps-Drivers/tree/main/Reolink%20Integration",
      "id": "manifest:1fb36d6ab3dd1abe2238",
      "manifestUrl": "https://raw.githubusercontent.com/jdthomas24/Hubitat-Apps-Drivers/refs/heads/main/Reolink%20Integration/packagemanifest.json",
      "name": "Reolink Integration",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 5
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Reolink Camera / NVR / Home Hub",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "reolink",
          "name": "Reolink Integration",
          "status": "VERIFIED_COMMUNITY"
        },
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Reolink LAN Endpoint",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "reolink-camera",
          "name": "Reolink Camera/NVR Integration",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Cameras & Video",
        "Doorbell",
        "Safety & Security"
      ]
    },
    {
      "author": "Andrew Nunes",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Turns on or off your Reolink IP Camera's motion detection push/email notifications",
      "documentationUrl": null,
      "id": "hpm:7a5a16c7-d82e-4436-bc62-9f34354b032a",
      "manifestUrl": "https://raw.githubusercontent.com/pentalingual/Hubitat/main/Camera/packageManifest.json",
      "name": "Reolink IP Camera",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 10
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Reolink Camera / NVR / Home Hub",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "reolink",
          "name": "Reolink Integration",
          "status": "VERIFIED_COMMUNITY"
        },
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Reolink LAN Endpoint",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "reolink-camera",
          "name": "Reolink Camera/NVR Integration",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "LAN",
        "Monitoring",
        "Notifications"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Cooper Eaton RF9500 Battery Powered Zwave button/switch driver to make it appear as a standard switch",
      "documentationUrl": null,
      "id": "hpm:da981ce4-0bd7-47ff-8c91-fc5ba4b42ff7",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/CooperEatonRF9500.json",
      "name": "RF9500 Switch Handler",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-rgbgenie-z-wave-device-drivers-all/34999?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "RGBGenie Z-Wave LED Controller Driver",
      "documentationUrl": null,
      "id": "manifest:f21d9c9ceb9a99280b62",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/rgbgenieLEDController.json",
      "name": "RGBGenie Z-Wave LED Controller",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-rgbgenie-z-wave-device-drivers-all/34999?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "RGBGenie Z-Wave Micro Controller Driver",
      "documentationUrl": null,
      "id": "manifest:45e0e28252d1d3a1d30b",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/rgbgenieMicroController.json",
      "name": "RGBGenie Z-Wave Micro Controller",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-rgbgenie-z-wave-device-drivers-all/34999?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "RGBGenie Z-Wave Touch Panel Driver",
      "documentationUrl": null,
      "id": "manifest:7459df8e4b8d75e23d39",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/rgbgenieTouchPanel.json",
      "name": "RGBGenie Z-Wave Touch Panel",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with eWeLight,Seedan and other RGBW bulbs,ZB-CL01. May work with others provides presence and checkin monitoring",
      "documentationUrl": null,
      "id": "manifest:37e10e051840017da9d6",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/eWeLight-RGBW-Bulbs.json",
      "name": "RGBW CT Bulbs - Zigbee",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Misc. Devices",
        "Presence & Location",
        "Zigbee"
      ]
    },
    {
      "author": "brossow",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/drivers-rheem-econet-thermostat-water-heater/163127",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Drivers for Rheem EcoNet thermostats and water heaters via the ClearBlade cloud API.",
      "documentationUrl": "https://github.com/brossow/hubitat-drivers/tree/main/rheem-econet",
      "id": "hpm:978f896a-dbae-408f-858b-1bace96468a6",
      "manifestUrl": "https://raw.githubusercontent.com/brossow/hubitat-drivers/main/rheem-econet/packageManifest.json",
      "name": "Rheem EcoNet",
      "observed": {
        "externalHosts": [
          "rheem.clearblade.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Cloud",
        "Temperature & Humidity",
        "Water Heater"
      ]
    },
    {
      "author": "Dominick Meglio",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-rheem-econet-integration/37338",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integrates Rheem EcoNet Water Heaters into your Hubitat system",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-rheem/blob/master/README.md",
      "id": "hpm:1f8e6f5c-fbd6-4fda-951d-467346383e2f",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-rheem/master/packageManifest.json",
      "name": "Rheem EcoNet Integration",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com",
          "www.paypal.com",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Water Heater"
      ]
    },
    {
      "author": "Kris Linquist",
      "category": null,
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-rheem-econet-integration/37338",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "App and driver for Rheem EcoNet supported water heaters and thermostats.",
      "documentationUrl": "https://github.com/klinquist/hubitat-rheem/blob/main/README.md",
      "id": "manifest:dd23d688f053457ddd03",
      "manifestUrl": "https://raw.githubusercontent.com/klinquist/hubitat-rheem/main/packageManifest.json",
      "name": "Rheem EcoNet Integration (maintained)",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com",
          "www.paypal.com",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Temperature & Humidity",
        "Water Heater"
      ]
    },
    {
      "author": "Jeremy Kister (@jkister)",
      "category": "Security",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/107035",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Make the Ring Keypad Gen2 do more!",
      "documentationUrl": "https://community.hubitat.com/t/107035",
      "id": "manifest:31123b8995ebeeba535f",
      "manifestUrl": "https://raw.githubusercontent.com/jkister/hubitat/master/drivers/rakg2/packageManifest.json",
      "name": "Ring Alarm Keypad G2 Community Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Alarm Systems",
        "Monitoring",
        "Safety & Security",
        "Tools & Utilities",
        "ZWave"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-ring-alarm-range-extender-gen2-driver/52151",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for the Ring Alarm Range Extender gen2",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/drivers/ring-re2",
      "id": "manifest:45ade5cfa8ae1522528d",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/ring-re2.json",
      "name": "Ring Alarm Range Extender gen2",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Repeaters & Extenders",
        "ZWave"
      ]
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-ring-range-extender-contact-sensor-motion-sensor-smoke-and-co-listener/37779?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Ring Contact Sensor Driver",
      "documentationUrl": null,
      "id": "manifest:a18832380cc29c8874a1",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/ringContactSensor.json",
      "name": "Ring Contact Sensor Gen1",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": []
    },
    {
      "author": "Todd",
      "category": null,
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-ring-integration-with-real-time-motion-alerts-ring-bridge-ring-alarm/164340?u=todd8",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Bridges Ring cameras, sensors, alarm system, door locks, and smart lights to Hubitat Elevation via a local Node.js bridge server. Real-time events via WebSocket push - no polling required for alarm hub devices.",
      "documentationUrl": "https://github.com/thaeropath/Hubitat_Ring_Integration",
      "id": "manifest:f07844d62242cc17d94e",
      "manifestUrl": "https://raw.githubusercontent.com/thaeropath/Hubitat_Ring_Integration/main/packageManifest.json",
      "name": "Ring Integration",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 7,
        "urlLiteralCount": 2
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Security"
      ]
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-ring-range-extender-contact-sensor-motion-sensor-smoke-and-co-listener/37779?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Ring Motion Sensor Driver",
      "documentationUrl": null,
      "id": "manifest:7cded31829ff81af257d",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/ringMotionSensor.json",
      "name": "Ring Motion Sensor Gen1",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": []
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-ring-range-extender-contact-sensor-motion-sensor-smoke-and-co-listener/37779?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Ring Range Extender Driver",
      "documentationUrl": null,
      "id": "manifest:97fafeb23eaa0c2a8d28",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/ringRangeExtender.json",
      "name": "Ring Range Extender Gen1",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": []
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-ring-range-extender-contact-sensor-motion-sensor-smoke-and-co-listener/37779?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Ring Smoke CO Listener Driver",
      "documentationUrl": null,
      "id": "manifest:d19d936aab470c1e3b0a",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/ringSmokeCOListener.json",
      "name": "Ring Smoke CO Listener Gen1",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": []
    },
    {
      "author": "Supun Vidana Pathiranage",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control & view status of your Rituals Perfume Genie",
      "documentationUrl": null,
      "id": "hpm:d601884d-009d-43fa-a49b-112548656736",
      "manifestUrl": "https://raw.githubusercontent.com/vpsupun/hubitat/master/RitualsPerfumeGenie/packageManifest.json",
      "name": "Rituals Perfume Genie",
      "observed": {
        "externalHosts": [
          "rituals.apiv2.sense-company.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Misc. Devices"
      ]
    },
    {
      "author": "Jeff Lupien",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Real-time Rivian vehicle integration with 70+ attributes",
      "documentationUrl": "https://github.com/jlupien/hubitat-drivers/tree/master/rivian-connect#readme",
      "id": "manifest:fb778c8e9ec5e6457aa8",
      "manifestUrl": "https://raw.githubusercontent.com/jlupien/hubitat-drivers/master/rivian-connect/packageManifest.json",
      "name": "Rivian Connect",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Car",
        "EV",
        "Presence",
        "R1S",
        "R1T",
        "Rivian",
        "Vehicle"
      ]
    },
    {
      "author": "Bloodtick Jones",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-roborock-robot-vacuum/136696",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Hubitat Driver to integrate with Roborock Robot Vacuums. Requires user account and password from mobile application to enable.",
      "documentationUrl": null,
      "id": "hpm:af491546-4b6f-41e4-9f19-cd10cef142ca",
      "manifestUrl": "https://raw.githubusercontent.com/bloodtick/Hubitat/main/hubitat-packages/manifests/manifestRoborockRobotVacuum.json",
      "name": "Roborock Robot Vacuum",
      "observed": {
        "externalHosts": [
          "cniot.roborock.com",
          "euiot.roborock.com",
          "ruiot.roborock.com",
          "usiot.roborock.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups",
        "Cloud"
      ]
    },
    {
      "author": "Armand Welsh",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/new-roku-tv-device-handler/12038",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Manage all your Roku TVs and Roku Media players through Hubitat with full support for activating applications as switches, and creating any remote command as a momentary switch.  Use this device to control your Roku system, or to make a smart home that responds to Roku actions.",
      "documentationUrl": "https://raw.githubusercontent.com/apwelsh/hubitat/master/roku/README.md",
      "id": "hpm:6442a8c3-22c2-4cbd-af81-61bc84e1690a",
      "manifestUrl": "https://raw.githubusercontent.com/apwelsh/hubitat/master/roku/packageManifest.json",
      "name": "Roku TV Integration",
      "observed": {
        "externalHosts": [
          "img.shields.io",
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Multimedia"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A smart app written to turn on/off a switch between two date ranges, and temperature ranges. I use it to turn on roof coil switch between dec-apr when temp. is between 30-40, but settings are customizable. Used to prevent ice dams if I forget to turn heater switch on",
      "documentationUrl": null,
      "id": "hpm:26bb5d7a-b00b-4855-8653-976ffb580e06",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/RoofCoilController.json",
      "name": "Roof Coil Controller",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Lights & Switches",
        "Safety & Security"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Provides a JSON summary of all Rooms and their associated devices and images.",
      "documentationUrl": null,
      "id": "hpm:a63409d4-5bb1-4024-ba03-05344ce61696",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/roomInfoManifest.json",
      "name": "Room Information Device",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Josh Lobe",
      "category": null,
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/initial-release-rule-machine-manager-new-rule-machine-interface",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Visual interface for Managing Rule Machine Rules.",
      "documentationUrl": "https://github.com/joshlobe/hubitat",
      "id": "hpm:g89dbe4g-fd53-4gf4-bjj3-fhe784ng4kc5",
      "manifestUrl": "https://raw.githubusercontent.com/joshlobe/hubitat/main/rule_machine_manager/packageManifest.json",
      "name": "Rule Machine Manager",
      "observed": {
        "externalHosts": [
          "cdnjs.cloudflare.com",
          "code.jquery.com",
          "fonts.googleapis.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "Rule Manager"
      ]
    },
    {
      "author": "TheBearMay",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/c/comappsanddrivers/community-apps/64",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Rules References Rules Table.  App generates 2 cross reference tables of Rule Machine Rules that reference other rules.  These views allow one to quickly identify a rule that calls other rules, or all of the rules that a specific rule is referenced in.",
      "documentationUrl": null,
      "id": "hpm:cb995e0b-8a94-43d0-a888-7ffdb7f8484f",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/refs/heads/main/manifests/ruleRruleManifest.json",
      "name": "Rules Referencing Rules",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jessica Jones",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A simple app that calculates a running average based on a stringified list of values.",
      "documentationUrl": null,
      "id": "hpm:625f2c54-3c38-4b50-aaa4-e38749ddfff9",
      "manifestUrl": "https://raw.githubusercontent.com/DoktorJ/jess-hubitat-apps/refs/heads/main/RunningAverage/packageManifest.json",
      "name": "Running Average",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "mbarone",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Connect SABnzbd to hubitat",
      "documentationUrl": null,
      "id": "hpm:bx26c894-ed10-44c6-96c1-38ac0daab22f",
      "manifestUrl": "https://raw.githubusercontent.com/michaelbarone/hubitat/master/packagemanager/SABnzbd.json",
      "name": "SABnzbd",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Multimedia",
        "Tools & Utilities"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Security",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-sage-doorbell-false-triggers-with-last-update/101697",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Doorbell driver. Detect dead bat with presence detection,  And support debug,trace logs.",
      "documentationUrl": "https://community.hubitat.com/t/release-sage-doorbell-false-triggers-with-last-update/101697",
      "id": "manifest:c7a0c0a147e60e1ca24a",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/sage_doorbell_echostar.json",
      "name": "sage doorbell echostar",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Buttons",
        "Presence & Location",
        "Safety & Security",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Sage Light Switch driver. With presence and virtual switch,Button support and simulated battery value",
      "documentationUrl": null,
      "id": "manifest:a4f9d3575778e4a5b74f",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/sage-light-switch.json",
      "name": "Sage light switch echostar",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Lights & Switches",
        "Misc. Devices",
        "Presence & Location",
        "Zigbee"
      ]
    },
    {
      "author": "Aaron Ward",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "MQTT Driver to support Salt Tank level project.",
      "documentationUrl": null,
      "id": "manifest:d0fe2272e529d82a25a9",
      "manifestUrl": "https://raw.githubusercontent.com/PrayerfulDrop/Hubitat/master/drivers/salt.json",
      "name": "Salt Tank MQTT Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Andrew Davison",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for Salus devices.",
      "documentationUrl": "https://github.com/birdslikewires/hubitat/tree/main/salus",
      "id": "hpm:73bb04fc-bd8a-455a-9347-4b975d2b269c",
      "manifestUrl": "https://raw.githubusercontent.com/birdslikewires/hubitat/main/salus/packageManifest.json",
      "name": "Salus Drivers from BirdsLikeWires",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Lights & Switches",
        "Repeaters & Extenders",
        "Zigbee"
      ]
    },
    {
      "author": "Andrew Davison",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for Samotech devices.",
      "documentationUrl": "https://github.com/birdslikewires/hubitat/tree/main/samotech",
      "id": "hpm:615188d1-ee93-4d05-a087-db592cfb1463",
      "manifestUrl": "https://raw.githubusercontent.com/birdslikewires/hubitat/main/samotech/packageManifest.json",
      "name": "Samotech Drivers from BirdsLikeWires",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Zigbee"
      ]
    },
    {
      "author": "Hugo Haas",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Local control of a Samsung Tizen TV (power, HDMI1 input) - no SmartThings or cloud dependency",
      "documentationUrl": "https://github.com/hugoh/samsung-tizen-tv-control/blob/main/README.md",
      "id": "hpm:C3F794B3-E615-44C8-965A-C7664247596B",
      "manifestUrl": "https://raw.githubusercontent.com/hugoh/samsung-tizen-tv-control/main/hubitat/packageManifest.json",
      "name": "Samsung Tizen TV Control",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "LAN"
      ]
    },
    {
      "author": "David Gutheinz",
      "category": "Utility",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/samsung-hubitat-tv-integration/55120",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Samsung TV Remote (2016 and Later TVs)",
      "documentationUrl": "https://github.com/DaveGut/HubitatActive/blob/master/SamsungTvRemote/README.md",
      "id": "manifest:d5fd69d97d88d58dcc45",
      "manifestUrl": "https://raw.githubusercontent.com/DaveGut/HubitatActive/master/SamsungTvRemote/packageManifest.json",
      "name": "Samsung TV Remote",
      "observed": {
        "externalHosts": [
          "api.smartthings.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "SEND_HUB_COMMAND",
          "UDP_PROTOCOL"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Multimedia"
      ]
    },
    {
      "author": "Craig Dewar",
      "category": "Climate Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A Hubitat Elevation driver for controlling and monitoring Blebox SaunaBox devices. Provides full thermostat integration, automatic safety shutoff, and intelligent polling.",
      "documentationUrl": "https://github.com/craigde/hubitat-saunabox/blob/main/README.md",
      "id": "hpm:a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
      "manifestUrl": "https://raw.githubusercontent.com/craigde/hubitat-saunabox/main/packageManifest.json",
      "name": "Saunabox Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Sauna",
        "Thermostat"
      ]
    },
    {
      "author": "Evan Callia",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-schedule-manager-app/145646",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Use this app to schedule switches, outlets and lights. Optionally configure modes and overrides.",
      "documentationUrl": "https://github.com/evcallia/hubitat/blob/main/apps/schedule-manager/README.md",
      "id": "hpm:e214cac5-b7c8-4aac-b996-ef8f42d71d12",
      "manifestUrl": "https://raw.githubusercontent.com/evcallia/hubitat/refs/heads/main/apps/schedule-manager/hpm-packageManifest.json",
      "name": "Schedule Manager",
      "observed": {
        "externalHosts": [
          "code.iconify.design",
          "venmo.com",
          "www.paypal.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Schwark Satyavolu",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-schlage-wifi-lock-support/123604",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Schlage WiFi Locks for Hubitat",
      "documentationUrl": "https://github.com/schwark/hubitat-schlage",
      "id": "manifest:186a93f90cd986b3f2fb",
      "manifestUrl": "https://raw.githubusercontent.com/schwark/hubitat-schlage/main/PackageManifest.json",
      "name": "Schlage WiFi Locks",
      "observed": {
        "externalHosts": [
          "play-lh.googleusercontent.com",
          "webhook.site"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-schwaiger-temperature-sensor/32956/1",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:f7064269a5959233bc08",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Schwaiger/Schwaiger%20Temperature%20Sensor.json",
      "name": "Schwaiger Temperature Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Temperature & Humidity",
        "ZWave"
      ]
    },
    {
      "author": "napalmcsr",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Controls a pool pump based on calendar Month",
      "documentationUrl": null,
      "id": "manifest:6efcac502801820a5a92",
      "manifestUrl": "https://raw.githubusercontent.com/napalmcsr/Hubitat_Napalmcsr/master/docs/poolManifest.json",
      "name": "Seasonal Pool Controller",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Pools & Spas"
      ]
    },
    {
      "author": "Scruffy-SJB",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Secure IQE Horstmann SRT321 RT321 HRT4-ZW Room Thermostat Driver",
      "documentationUrl": null,
      "id": "hpm:39765cbb-5bab-4c6c-90fe-184d7716ac45",
      "manifestUrl": "https://raw.githubusercontent.com/scruffy-sjb/Hubitat_HPM/main/repository.json",
      "name": "Secure SRT321 Thermostat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Temperature & Humidity",
        "ZWave"
      ]
    },
    {
      "author": "Brian Wilson",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-sendgrid-email-notification-plugin/48691",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Notification driver for SendGrid Email Service - 100 messages per day on the free plan.",
      "documentationUrl": "https://community.hubitat.com/t/release-sendgrid-email-notification-plugin/48691",
      "id": "manifest:a86b1a25effc71abd641",
      "manifestUrl": "https://raw.githubusercontent.com/bdwilson/hubitat/master/Sendgrid/packageManifest.json",
      "name": "SendGrid",
      "observed": {
        "externalHosts": [
          "api.sendgrid.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Notifications"
      ]
    },
    {
      "author": "jlslate",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drives up to 12 pages on a SenseCAP Indicator D1 touchscreen (openHASP/MQTT): motion, contact, water, smoke, lock, garage, light, thermostat, weather, and an alarm clock page. By jlslate.",
      "documentationUrl": "https://github.com/jlslate/SenseCAP-Indicator",
      "id": "hpm:958081ba-d1da-44af-a5a2-cfa672db0a0f",
      "manifestUrl": "https://raw.githubusercontent.com/jlslate/SenseCAP-Indicator/main/packageManifest.json",
      "name": "SenseCAP Indicator",
      "observed": {
        "externalHosts": [
          "www.openhasp.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "jlslate",
        "MQTT",
        "Multi Sensors",
        "SenseCAP"
      ]
    },
    {
      "author": "Paul Hutton",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integration with the Sensibo Sky AC aircon controllers (cloud integration)",
      "documentationUrl": null,
      "id": "hpm:69ff7ea0-fefe-4163-ac59-3b3c5623136f",
      "manifestUrl": "https://raw.githubusercontent.com/VeloWulf/SensiboIntegration/master/packageManifest.json",
      "name": "Sensibo Integration",
      "observed": {
        "externalHosts": [
          "home.sensibo.com"
        ],
        "lanPrimitives": [
          "PARSE_LAN_MESSAGE"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Sensibo Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "HTTPS_API"
            }
          ],
          "documentation": [],
          "id": "sensibo",
          "name": "Sensibo Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Climate Control"
      ]
    },
    {
      "author": "Ryan Elliott",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-sensor-groups/101203",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "An app for grouping sensors.",
      "documentationUrl": null,
      "id": "hpm:74131c40-0b1c-480b-86d2-797f77d63036",
      "manifestUrl": "https://raw.githubusercontent.com/FriedCheese2006/SensorGroupsPlus/main/SensorGroupsPlus.json",
      "name": "Sensor Groups+",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 14,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups",
        "Multi Sensors",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Ryan Elliott",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/sensor-groups-resurrected/119895",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "App for grouping sensors",
      "documentationUrl": null,
      "id": "hpm:dfd717fd-bb02-4e32-bf65-3a43a57a8556",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/SensorGroupsPlus/main/SensorGroupsPlus.json",
      "name": "Sensor Groups+ (Resurrected)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 16,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups",
        "Multi Sensors",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Simon Burke (sburke781)",
      "category": null,
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-sensorpush-gateway-driver/66051",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Retrieves SensorPush temperature and humidity sensor readings from the SensorPush cloud storage",
      "documentationUrl": null,
      "id": "manifest:63995a21a8d4e83908c6",
      "manifestUrl": "https://raw.githubusercontent.com/sburke781/hubitat/master/SensorPush/packageManifest.json",
      "name": "SensorPush Gateway Driver",
      "observed": {
        "externalHosts": [
          "api.sensorpush.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "SensorPush Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "HTTPS_API"
            }
          ],
          "documentation": [],
          "id": "sensorpush",
          "name": "SensorPush Gateway",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Integrations"
      ]
    },
    {
      "author": "Daniel Segall (dds82)",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Schedule automatic Location Mode changes for Shabbat and holidays",
      "documentationUrl": null,
      "id": "hpm:8a52e14f-595c-4bb4-8df5-d42fd9a031ae",
      "manifestUrl": "https://raw.githubusercontent.com/dds82/shabbat/main/packageManifest.json",
      "name": "Shabbat and Holiday Scheduler",
      "observed": {
        "externalHosts": [
          "cloud.hubitat.com",
          "www.hebcal.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups",
        "Lights & Switches",
        "Presence & Location",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Josh Rosenberg",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/beta-release-shabbat-and-jewish-holiday-info-virtual-driver/93095",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Gain info on Shabbat and Jewish Holiday start and end days/times, for use in automations.",
      "documentationUrl": "https://github.com/rosenbergj/hubitat-shabbat-and-chag/blob/main/README.md",
      "id": "hpm:908fee0e-b2cc-4793-9b81-8f7b7aabb95d",
      "manifestUrl": "https://raw.githubusercontent.com/rosenbergj/hubitat-shabbat-and-chag/main/packageManifest.json",
      "name": "Shabbat and Jewish holiday info driver",
      "observed": {
        "externalHosts": [
          "api.zmanapi.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Automates shade opening and closing based on luminance/lux, or schedule.  Also monitors windSpeed/windGust attributes to close/open (depending on type) when exceeded.",
      "documentationUrl": null,
      "id": "hpm:20d2f9d5-0f56-45f7-b738-b4f94dc8aafa",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/refs/heads/main/manifests/shadeMinderManifest.json",
      "name": "Shade Minder",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Rene Boer",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-shelly-wave-1pm-driver/130863",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Wave 1PM QNSW-0001P16EU by Shelly.",
      "documentationUrl": "https://github.com/reneboer/Hubitat/blob/main/Shelly/README.md",
      "id": "manifest:c2c82ca3aee3b7b5a694",
      "manifestUrl": "https://raw.githubusercontent.com/reneboer/Hubitat/main/Shelly/packageManifest.json",
      "name": "Shelly Wave 1PM Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Shelly Device",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN"
            }
          ],
          "documentation": [],
          "id": "shelly-native",
          "name": "Shelly Integration",
          "status": "VERIFIED_CORE"
        }
      ],
      "tags": [
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Rene Boer",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/driver-shelly-wave-plug-s-eu-qnpl-0a112eu/157471",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Wave Plug S EU QNPL-0A112EU by Shelly.",
      "documentationUrl": "https://github.com/reneboer/Hubitat/tree/main/Shelly",
      "id": "manifest:1ddd441aa1ec1fee9a19",
      "manifestUrl": "https://raw.githubusercontent.com/reneboer/Hubitat/main/Shelly/packageManifestPS.json",
      "name": "Shelly Wave Plug S EU QNPL-0A112EU",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Shelly Device",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN"
            }
          ],
          "documentation": [],
          "id": "shelly-native",
          "name": "Shelly Integration",
          "status": "VERIFIED_CORE"
        }
      ],
      "tags": [
        "Energy Monitoring",
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Rene Boer",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-shelly-wave-pro-dimmer-2pm-driver/163684",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Wave Pro Dimmer 2PM QPDM-0A2P01EU by Shelly.",
      "documentationUrl": "https://github.com/reneboer/Hubitat/tree/main/Shelly",
      "id": "manifest:689988f55f64f6b231a6",
      "manifestUrl": "https://raw.githubusercontent.com/reneboer/Hubitat/main/Shelly/packageManifestD2PM.json",
      "name": "Shelly Wave Pro Dimmer 2PM QPDM-0A2P01EU",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Boguslaw Wojcik (@bogus.wojcik)",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-shelly-wave-shutter-community-driver/153207",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Shelly Wave Shutter blinds controller driver with all parameters, calibration support and proper handling of states.",
      "documentationUrl": "https://community.hubitat.com/t/release-shelly-wave-shutter-community-driver/153207",
      "id": "hpm:61d61805-7161-4d56-9d5f-375e119f9def",
      "manifestUrl": "https://raw.githubusercontent.com/boguslaw-wojcik/hubitat/main/manifests/shelly_wave_shutter.json",
      "name": "Shelly Wave Shutter",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Shelly Device",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN"
            }
          ],
          "documentation": [],
          "id": "shelly-native",
          "name": "Shelly Integration",
          "status": "VERIFIED_CORE"
        }
      ],
      "tags": [
        "Doors & Windows",
        "ZWave"
      ]
    },
    {
      "author": "ShellyUSA, Daniel Winks",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Shelly device drivers. Using Webhook/Websocket, no MQTT necessary.",
      "documentationUrl": null,
      "id": "hpm:a3893ae0-b99e-4508-a357-48397cc6a20f",
      "manifestUrl": "https://raw.githubusercontent.com/ShellyUSA/Hubitat-Drivers/master/PackageManifests/ShellyWebhookDrivers/packageManifest.json",
      "name": "Shelly Webhook/Websocket Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Shelly Device",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN"
            }
          ],
          "documentation": [],
          "id": "shelly-native",
          "name": "Shelly Integration",
          "status": "VERIFIED_CORE"
        }
      ],
      "tags": [
        "Buttons",
        "Climate Control",
        "Doors & Windows",
        "Energy Monitoring",
        "LAN",
        "Lights & Switches",
        "Motion Control",
        "Presence & Location",
        "Relays",
        "Security",
        "Temperature & Humidity",
        "Valves"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": true
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:27ddac4831c30b7ca0b7",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Shelly/ShellyPlus%20Generic.json",
      "name": "ShellyPlus Generic",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Shelly Device",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN"
            }
          ],
          "documentation": [],
          "id": "shelly-native",
          "name": "Shelly Integration",
          "status": "VERIFIED_CORE"
        }
      ],
      "tags": [
        "Cloud",
        "LAN",
        "Lights & Switches",
        "Temperature"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": true
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:a4a53a958e90597a7253",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Shelly/ShellyPlus%20Pilot%20Wire.json",
      "name": "ShellyPlus Pilot Wire",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Shelly Device",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN"
            }
          ],
          "documentation": [],
          "id": "shelly-native",
          "name": "Shelly Integration",
          "status": "VERIFIED_CORE"
        }
      ],
      "tags": [
        "Climate Control",
        "Cloud",
        "LAN",
        "Lights & Switches",
        "Temperature"
      ]
    },
    {
      "author": "Brad Sileo",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integration from Hubitat to a Shinobi NVR - https://www.shinobi.video/",
      "documentationUrl": null,
      "id": "manifest:f75380b8e755f069a042",
      "manifestUrl": "https://raw.githubusercontent.com/bsileo/hubitat_shinobi/master/packageManifest.json",
      "name": "Shinobi",
      "observed": {
        "externalHosts": [
          "shinobi.video"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Integrations",
        "Monitoring",
        "Motion Control",
        "Safety & Security"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "SiHAS Dual Motion Sensor DMS-300Z - driver for Hubitat Elevation hub",
      "documentationUrl": null,
      "id": "hpm:30925b17-5276-403f-993d-2b35298756bb",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat-SiHAS/main/packageManifest_DMS-300z.json",
      "name": "SiHAS Dual Motion Sensor DMS-300Z",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "SiHAS Multipurpose Sensor USM-300-ZB - driver for Hubitat Elevation hub",
      "documentationUrl": null,
      "id": "hpm:0e9a6b4f-744d-4fa2-b31d-4ec95e58e472",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat-SiHAS/main/packageManifest_usm300zb.json",
      "name": "SiHAS Multipurpose Sensor USM-300-ZB",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": "https://github.com/kkossev/Hubitat-SiHAS/blob/main/README.md",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "SiHAS People Counter CSM-300-ZB (V2) - driver for Hubitat Elevation hub",
      "documentationUrl": "https://github.com/kkossev/Hubitat-SiHAS/blob/main/README.md",
      "id": "hpm:adff4e60-c83b-43b2-873c-8052eef10e90",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat-SiHAS/main/packageManifest_CSM-300z.json",
      "name": "SiHAS People Counter CSM-300-ZB (V2)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "SiHAS ZigBee Lock Without Codes- driver for Hubitat Elevation hub",
      "documentationUrl": null,
      "id": "hpm:deb4b85c-54b8-4cba-8518-76a26886f158",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat-SiHAS/main/packageManifest_DLM-300z.json",
      "name": "SiHAS ZigBee Lock Without Codes DLM-300-Z",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "SiHAS Zigbee Power Meter and Energy Monitor PMM-300-Z(1,2,3) - driver for Hubitat Elevation hub",
      "documentationUrl": null,
      "id": "hpm:9e3aacd4-7f2a-4e11-a918-16cc4a73a66d",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat-SiHAS/main/packageManifest_PMM-300z.json",
      "name": "SiHAS Zigbee Power Meter PMM-300-Z",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Vincent van Didden",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "This is a driver for the silvercrest doorbell (or Heiman doorbell)",
      "documentationUrl": null,
      "id": "hpm:ef802e74-d459-4aeb-a251-51bf914514df",
      "manifestUrl": "https://raw.githubusercontent.com/Vincentiano/Hubitat-Silvercrest_Doorbell_HG06668/main/packageManifest.json",
      "name": "Silvercrest Doorbell HG06668",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Buttons"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/simple-series-applications/44039",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A simple reminder notification system for contact sensors (doors/windows/etc.) that have been left open",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/applications/simple-contact-reminders",
      "id": "manifest:e662de1d27af36ee73d9",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/simple-contact-reminders.json",
      "name": "Simple Contact Reminders",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Doors & Windows",
        "Notifications"
      ]
    },
    {
      "author": "Simon Burke (sburke781)",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-simple-css-editor/89853",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A pop-up tile and dashboard styling editor",
      "documentationUrl": null,
      "id": "manifest:c0a6cad41c26eef48c5c",
      "manifestUrl": "https://raw.githubusercontent.com/sburke781/hubitat/master/SimpleCSSEditor/packageManifest.json",
      "name": "Simple CSS Editor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Convenience"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-simple-hub-monitor/157677",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Lightweight driver to feed monitoring tools such as InfluxDB-Logger",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/drivers/simple-hub-monitor",
      "id": "manifest:6cbb2faaaf77edba8b1a",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/simple-hub-monitor.json",
      "name": "Simple Hub Monitor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/simple-series-applications/44039",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A simple alert notification system for devices that have not been updated for a period of time",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/applications/simple-idle-alerts",
      "id": "manifest:c8c1c248abf61b714750",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/simple-idle-alerts.json",
      "name": "Simple Idle Alerts",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Notifications"
      ]
    },
    {
      "author": "Armand Welsh",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "A simple reverse proxy service. This service is designed to allow you to access http resources on your Hubitat hub's network from outside your network.  This is not a full-featured reverse proxy, but it is a simple one that can be used to access specific web based endpoints without the need for complex VPNs, and without opening up your firewall directly to the internal resource.  This is useful for accessing webhooks, or other web-based services that are not directly accessible from the internet.",
      "documentationUrl": "https://github.com/apwelsh/hubitat/tree/master/revproxy",
      "id": "hpm:e34b1f40-315c-49f2-8ac7-68566d4dfd2a",
      "manifestUrl": "https://raw.githubusercontent.com/apwelsh/hubitat/master/revproxy/packageManifest.json",
      "name": "Simple Reverse Proxy Service",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Remote Access",
        "Security"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/simple-series-applications/44039",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A simple switch timeout system for turning off switches that have been left on",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/applications/simple-switch-off-timers",
      "id": "manifest:8f26aab7ad57a821ca69",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/simple-switch-off-timers.json",
      "name": "Simple Switch Off Timers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Timers"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/simple-series-applications/44039",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A simple reminder notification system for switches that have been left on",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/applications/simple-switch-reminders",
      "id": "manifest:bd9507c7eb2ef75d082f",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/simple-switch-reminders.json",
      "name": "Simple Switch Reminders",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Notifications"
      ]
    },
    {
      "author": "Mike Bishop",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/beta-single-active-switch/123942",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "At most one switch in a group can be on simultaneously",
      "documentationUrl": null,
      "id": "hpm:b497dc57-7db5-4f78-856b-319353df7eae",
      "manifestUrl": "https://raw.githubusercontent.com/MikeBishop/hpm-intermediate/main/single-active-switch.json",
      "name": "Single Active Switch",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Rangner FG",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Added integration for Sinope Neviweb Hub GT125",
      "documentationUrl": null,
      "id": "hpm:c543f3ef-626a-4ee3-aff3-af61cab4a8d0",
      "manifestUrl": "https://raw.githubusercontent.com/claudegel/Hubitat-sinope-GT125/main/packageManifest.json",
      "name": "Sinope Neviweb Hub GT125",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Climate Control"
      ]
    },
    {
      "author": "Russ Vrolyk",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-sleep-number-controller-control-your-sleep-number-bed-and-use-it-for-presence/46454",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control your Sleep Number bed and use it for presence",
      "documentationUrl": "https://github.com/rvrolyk/SleepNumberController",
      "id": "manifest:85ae6383531f7d596405",
      "manifestUrl": "https://raw.githubusercontent.com/rvrolyk/SleepNumberController/master/packageManifest.json",
      "name": "Sleep Number Controller",
      "observed": {
        "externalHosts": [
          "raw.github.com",
          "www.paypal.me"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Daniel Segall",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "An app that aggregates data from a battery-powered device and a mains-powered device into a single child device. The data will come from only one source: the battery-powered device if it is healthy; otherwise the mains-powered device.",
      "documentationUrl": null,
      "id": "hpm:4f8b077a-6808-4ead-856b-af7de29aa7bf",
      "manifestUrl": "https://raw.githubusercontent.com/dds82/smartdevices/refs/heads/master/attributeaggregator/packageManifest.json",
      "name": "Smart Attribute Aggregator",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Brian Wilson",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-smart-mailbox/11402",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Be notified when you recieve mail in your mailbox",
      "documentationUrl": "https://github.com/bdwilson/hubitat/tree/master/SmartMailbox",
      "id": "manifest:f505bb75b42df7e7ac09",
      "manifestUrl": "https://raw.githubusercontent.com/bdwilson/hubitat/master/SmartMailbox/packageManifest.json",
      "name": "Smart Mailbox",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "dlaporte",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/smart-oil-gauge-app-and-device/63078",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Monitor the Smart Oil Gauge (https://www.smartoilgauge.com)",
      "documentationUrl": null,
      "id": "manifest:6ecbb63a9f54071bd02c",
      "manifestUrl": "https://raw.githubusercontent.com/dlaporte/Hubitat/main/SmartOilGauge/packageManifest.json",
      "name": "Smart Oil Gauge",
      "observed": {
        "externalHosts": [
          "api.dropletfuel.com",
          "www.w3.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Brian Wilson",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/power-failure-recovery-via-rm/4298/12",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Help keep track of the state of your smart bulbs in case of a power outage",
      "documentationUrl": "https://github.com/bdwilson/hubitat/tree/master/SmarterBulbs",
      "id": "manifest:b95d7d0c0431b49eb33a",
      "manifestUrl": "https://raw.githubusercontent.com/bdwilson/hubitat/master/SmarterBulbs/packageManifest.json",
      "name": "Smarter Bulbs",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Ernie Miller",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-smarter-humidity-fan/54509",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control an exhaust fan in response to changes in relative humidity from a sensor.",
      "documentationUrl": null,
      "id": "hpm:04c640c8-47e6-4afb-ad3c-deb808bae1d5",
      "manifestUrl": "https://raw.githubusercontent.com/ernie/hubitat/main/apps/smarter-humidity-fan/packageManifest.json",
      "name": "Smarter Humidity Fan",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Multi Sensors",
        "Shower",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "craigde",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/support-for-ge-appliances-smarthq/85930/12",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integration for GE SmartHQ appliances including refrigerators, ovens, dishwashers, laundry, microwaves, hoods, ice makers, portable ACs, and home water filters. Real-time WebSocket updates via the Brillion cloud API.",
      "documentationUrl": "https://github.com/craigde/hubitat-SmartHQ/blob/main/README.md",
      "id": "hpm:e2f3a4b5-c6d7-4e8f-9a0b-1c2d3e4f5a6b",
      "manifestUrl": "https://raw.githubusercontent.com/craigde/hubitat-SmartHQ/main/packageManifest.json",
      "name": "SmartHQ GE Appliances Integration",
      "observed": {
        "externalHosts": [
          "accounts.brillion.geappliances.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 12,
        "urlLiteralCount": 23
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "SmartHQ Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "smarthq",
          "name": "GE Appliances SmartHQ",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Appliances",
        "Cloud"
      ]
    },
    {
      "author": "Markus",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.oh-lalabs.com/t/release-smartly-2-0-featuring-smartly-inject/63?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Enables Smartly JavaScript features in the Dashboard!",
      "documentationUrl": "https://oh-lalabs.com/docs/smartly-inject",
      "id": "manifest:79d1cbc63ef1ef84fda1",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/smartly-inject.json",
      "name": "Smartly Inject",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jeff Page (@jtp10181)",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/smartstart-manager/137492",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "App to manage the Z-Wave SmartStart devices list from the hub",
      "documentationUrl": "https://github.com/jtp10181/Hubitat/tree/main/Apps/smartstart-manager",
      "id": "hpm:2efa6db6-c1a7-413b-bdc0-09bce9feb071",
      "manifestUrl": "https://raw.githubusercontent.com/jtp10181/Hubitat/main/packageManifest/smartstart-manager.json",
      "name": "SmartStart Manager App",
      "observed": {
        "externalHosts": [
          "code.iconify.design",
          "jtp10181.gateway.scarf.sh",
          "paypal.me"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 13
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities",
        "ZWave"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "SmartThings arrival sensor v2 with adjustable chimes. Can play chimes of diffrent legenths.",
      "documentationUrl": null,
      "id": "manifest:3ef5d41ed8bb11fe38e3",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/SmartThings-Arrival-Sensor-hubitat.json",
      "name": "SmartThings Arrival Sensor Chime V2",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Presence & Location",
        "Safety & Security",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "SmartThings Motion Sensor with presence. Model:motionv4,motionv5 (Not for Centralite)",
      "documentationUrl": null,
      "id": "manifest:f33248a64c90dad205d0",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/smartthings_motion_driver.json",
      "name": "SmartThings Motion Detector",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Lights & Switches",
        "Motion Control",
        "Presence & Location",
        "Safety & Security",
        "Temperature & Humidity",
        "Zigbee"
      ]
    },
    {
      "author": "jdthomas24",
      "category": "Drivers",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Custom Hubitat driver for SmartThings Zigbee motion sensors with local processing and battery reporting.",
      "documentationUrl": null,
      "id": "manifest:7d07638149cfe13e710d",
      "manifestUrl": "https://raw.githubusercontent.com/jdthomas24/Hubitat-Apps-Drivers/refs/heads/main/SmartThings%20Motion%20Sensor/packagemanifest.json",
      "name": "SmartThings Motion Sensor Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "motion",
        "sensor",
        "smartthings",
        "zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Security",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Smartthings multiswitch v3 by Samjin. Fixes bad battery reports autodetect dead battery,presence",
      "documentationUrl": null,
      "id": "manifest:66b765ceeb97979ef87f",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/smartthings-multiswitch-v3.json",
      "name": "Smartthings multi Sensor V3 (custom)",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Doors & Windows",
        "Presence & Location",
        "Safety & Security",
        "Temperature & Humidity",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Security",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Smartthings Samjin button with improved battery reports and Presence. Auto dead bat detection. 3 Button support for easer scripts",
      "documentationUrl": null,
      "id": "manifest:2c7375a08a62e6940309",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/smartthings-samjin-button.json",
      "name": "Smartthings Samjin button",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Presence & Location",
        "Safety & Security",
        "Zigbee"
      ]
    },
    {
      "author": "Arn Burkhoff",
      "category": "Convenience",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/beta-release-smartups-vbs-version/51487",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "SmartUPS driver for APC UPS devices. Gracefully shuts down your HUB during a power failure. \n Designed for Windows, interface is VBS, no PHP server required. Also provides UPS status information. \n It may work on any system supporting VBS and apcupsd, but was tested only on Windows",
      "documentationUrl": "https://github.com/arnbme/apcupsd/blob/master/README.md",
      "id": "manifest:c3390b9954c55600281f",
      "manifestUrl": "https://raw.githubusercontent.com/arnbme/apcupsd/master/SmartUPSpackageManifest.json",
      "name": "SmartUPS VBS Version",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Safety & Security",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Greg Billings",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control your Smartwings Motor Shades Zigbee model. Motor type WM25/L-Z",
      "documentationUrl": null,
      "id": "manifest:9331f31e76f5d61d5d21",
      "manifestUrl": "https://raw.githubusercontent.com/diosadentro/Hubitat/main/Packages/Smartwings/packageManifest.json",
      "name": "SmartWings Zigbee Shades",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Window Coverings",
        "Zigbee"
      ]
    },
    {
      "author": "Derek Osborn",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-sofabaton-x-series-universal-remote-driver/165192",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Hubitat driver for the Sofabaton X Series Universal Remotes",
      "documentationUrl": null,
      "id": "manifest:4ca2aea6dfa7f726ce6e",
      "manifestUrl": "https://raw.githubusercontent.com/dJOS1475/Hubitat-Sofabaton-X-Series/refs/heads/main/PackageManifest.json",
      "name": "Sofabaton X Series Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "PARSE_LAN_MESSAGE"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "IR & RF",
        "LAN",
        "Utility"
      ]
    },
    {
      "author": "Daniel Winks",
      "category": "Climate Control",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Advises when to draw shades and open/close windows per building side. Combines sun-path solar load, per-side occlusion (shared walls, partial walls, and computed shading from nearby structures), free Open-Meteo weather, and an adaptive thermal model that learns from your indoor temperature sensors to keep the house within a comfortable band around the thermostat setpoints.",
      "documentationUrl": null,
      "id": "hpm:74e1afd2-0510-4807-ba94-527a010d8ad1",
      "manifestUrl": "https://raw.githubusercontent.com/DanielWinks/Hubitat-Public/main/PackageManifests/SolarShadeWindowAdvisor/packageManifest.json",
      "name": "Solar Shade & Window Advisor",
      "observed": {
        "externalHosts": [
          "api.open-meteo.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Convenience",
        "Window Coverings"
      ]
    },
    {
      "author": "Joseph Kregloh",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-solaredge-monitoring-device-driver/38743",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Retrieve inverter metrics from the Solaredge API to use in dashboards or as attributes for rules. Information available is current power flow, generation statistics, and current generation/consumtion metrics.",
      "documentationUrl": "https://github.com/funzie19/hubitat-solaredge/blob/master/README.md",
      "id": "manifest:5a6bbbbd40d09f3663b4",
      "manifestUrl": "https://raw.githubusercontent.com/funzie19/hubitat-solaredge/master/packageManifest.json",
      "name": "Solaredge Monitor",
      "observed": {
        "externalHosts": [
          "monitoringapi.solaredge.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": []
    },
    {
      "author": "Andrew Nunes",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Leverages the MySolArk API to update Hubitat with your SolArk inverter status",
      "documentationUrl": null,
      "id": "hpm:764cbc83-2b8b-4bd4-922f-0e73cd726d73",
      "manifestUrl": "https://raw.githubusercontent.com/pentalingual/Hubitat/main/Solar/packageManifest.json",
      "name": "SolArk Inverter",
      "observed": {
        "externalHosts": [
          "api.solarkcloud.com",
          "openapi.inteless.com",
          "pv.inteless.com",
          "www.mysolark.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Energy Monitoring"
      ]
    },
    {
      "author": "StarkTemplar",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/solark-sunsynk-inverter-api-link/125050",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Read Solark Inverter data from cloud system.",
      "documentationUrl": "https://github.com/StarkTemplar/Hubitat/tree/main/Solar",
      "id": "hpm:f8063600-169f-4da2-8895-519e7753a119",
      "manifestUrl": "https://raw.githubusercontent.com/StarkTemplar/Hubitat/refs/heads/main/Solar/packageManifest.json",
      "name": "SolArk Inverter",
      "observed": {
        "externalHosts": [
          "api.solarkcloud.com",
          "openapi.inteless.com",
          "pv.inteless.com",
          "www.mysolark.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 17
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Energy Monitoring"
      ]
    },
    {
      "author": "ke7lvb",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat driver for Solcast Solar Estimate API",
      "documentationUrl": null,
      "id": "hpm:e0c2a6bd-ea2f-46b2-b20f-7358a4ff1449",
      "manifestUrl": "https://raw.githubusercontent.com/ke7lvb/Solcast/refs/heads/main/packageManifest.json",
      "name": "Solcast",
      "observed": {
        "externalHosts": [
          "api.solcast.com.au"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Weather"
      ]
    },
    {
      "author": "StarkTemplar",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-solar-forecast-estimator/82064",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Read Solar Forecast from Solcast.",
      "documentationUrl": "https://github.com/StarkTemplar/Solcast_dual",
      "id": "hpm:dc20dd0a-90b8-4d0f-939c-af673160f2eb",
      "manifestUrl": "https://raw.githubusercontent.com/StarkTemplar/Solcast_dual/refs/heads/main/packageManifest.json",
      "name": "Solcast_dual",
      "observed": {
        "externalHosts": [
          "api.solcast.com.au"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Energy Monitoring"
      ]
    },
    {
      "author": "uDevel",
      "category": "Drivers",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Hubitat Zigbee driver for the SOMA Smart Shades 3 roller shade motor (WazombiLabs SmartShades3). True mid-travel opening/closing state, target-announcement suppression, ZCL Default Response acks, battery reporting.",
      "documentationUrl": null,
      "id": "manifest:b1dff1b648ed660125b7",
      "manifestUrl": "https://raw.githubusercontent.com/uDevel/hubitat-soma-shades-3/main/packageManifest.json",
      "name": "SOMA Smart Shades 3 (Zigbee) driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Blinds & Shades",
        "Zigbee"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/somfy-z-wave-to-rts-interface-ii-driver/43745",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for the Somfy Z-Wave to RTS Interface II (ZRTSII)",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/drivers/zrtsii",
      "id": "manifest:d621bce854f31f49aa68",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/zrtsii.json",
      "name": "Somfy Z-Wave to RTS Interface II (ZRTSII)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Window Coverings",
        "ZWave"
      ]
    },
    {
      "author": "Justin Walker (augoisms)",
      "category": null,
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-somfy-zrtsi/40998",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A driver for the Somfy ZRTSI",
      "documentationUrl": null,
      "id": "manifest:4fd864511213d397761b",
      "manifestUrl": "https://raw.githubusercontent.com/augoisms/hubitat/master/somfy-zrtsi/packageManifest.json",
      "name": "Somfy ZRTSI",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Window Coverings",
        "ZWave"
      ]
    },
    {
      "author": "ke7lvb",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Hubitat Driver for Sonnen Battery",
      "documentationUrl": null,
      "id": "hpm:bb93b9d1-bbd7-4d39-ac89-2ed422d4b5eb",
      "manifestUrl": "https://raw.githubusercontent.com/ke7lvb/sonnen_battery/refs/heads/main/packageManifest.json",
      "name": "Sonnen Battery - Hubitat",
      "observed": {
        "externalHosts": [
          "img.icons8.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 14
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "LAN"
      ]
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with model SNZB-01.",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-sonoff-button",
      "id": "manifest:69c0b476e303bbf129b8",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-sonoff-button.json",
      "name": "Sonoff Button",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with model SNZB-04.",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-sonoff-contact-sensor",
      "id": "manifest:a90ea2e97e3c572a632c",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-sonoff-contact-sensor.json",
      "name": "Sonoff Contact Sensor",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with model SNZB-03.",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-sonoff-motion-sensor",
      "id": "manifest:7eb91d53c2bd5ebfadf7",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-sonoff-motion-sensor.json",
      "name": "Sonoff Motion Sensor",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-sonoff-rf-433mhz-bridge/32959/1",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:2ec0f7adf3a9eeed9d97",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Apps/Sonoff/Sonoff%20RF%20Bridge.json",
      "name": "Sonoff RF Bridge",
      "observed": {
        "externalHosts": [
          "play-lh.googleusercontent.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION"
        ],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "IR & RF",
        "LAN",
        "Lights & Switches",
        "Window Coverings"
      ]
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with model SNZB-02.",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-sonoff-temperature-humidity-sensor",
      "id": "manifest:be943ccfeb5a257b053d",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-sonoff-temperature-humidity-sensor.json",
      "name": "Sonoff Temperature & Humidity Sensor",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Daniel Winks",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Advanced app and driver for Sonos speakers. Allows non-interrupting TTS, grouping control, and more.",
      "documentationUrl": null,
      "id": "hpm:6cad9e9c-4b0b-423b-b0e1-1c5a3c0d1196",
      "manifestUrl": "https://raw.githubusercontent.com/DanielWinks/Hubitat-Public/main/PackageManifests/SonosAdvancedController/packageManifest.json",
      "name": "Sonos Advanced Controller",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Sonos System",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN"
            }
          ],
          "documentation": [
            {
              "sourceType": "HUBITAT_OFFICIAL_DOC",
              "title": "Sonos Integration",
              "url": "https://docs2.hubitat.com/en/apps/sonos-integration"
            }
          ],
          "id": "sonos-native",
          "name": "Sonos Integration",
          "status": "VERIFIED_CORE"
        }
      ],
      "tags": [
        "LAN",
        "Multimedia",
        "Speakers"
      ]
    },
    {
      "author": "Schwark Satyavolu",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-sonos-favorites-support/122472",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Sonos Favorites Support for Hubitat",
      "documentationUrl": "https://github.com/schwark/hubitat-sonos-favorites",
      "id": "manifest:1050133768ea91879d45",
      "manifestUrl": "https://raw.githubusercontent.com/schwark/hubitat-sonos-favorites/main/PackageManifest.json",
      "name": "Sonos Favorites Support",
      "observed": {
        "externalHosts": [
          "play-lh.googleusercontent.com",
          "schemas.xmlsoap.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Taylor Vierrether",
      "category": "Convenience",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Track the minimum volume of all selected Sonos speakers.",
      "documentationUrl": null,
      "id": "manifest:95e744bceb0a12c9f485",
      "manifestUrl": "https://raw.githubusercontent.com/viertaxa/hubitat/main/Apps/SonosMinimumVolumeTracker/hpm/packageManifest.json",
      "name": "Sonos Minimum Volume Tracker",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Sonos System",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN"
            }
          ],
          "documentation": [
            {
              "sourceType": "HUBITAT_OFFICIAL_DOC",
              "title": "Sonos Integration",
              "url": "https://docs2.hubitat.com/en/apps/sonos-integration"
            }
          ],
          "id": "sonos-native",
          "name": "Sonos Integration",
          "status": "VERIFIED_CORE"
        }
      ],
      "tags": [
        "Speakers",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Alex Jones",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-sony-audio-control-driver/55740",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Rest Control API for Sony Audio devices",
      "documentationUrl": null,
      "id": "manifest:428e318d27260661dd14",
      "manifestUrl": "https://raw.githubusercontent.com/jonesalexr/hubitat/master/Drivers/SonyAudio/packageManifest.json",
      "name": "Sony Audio Control",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Alex Jones",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-sony-bravia-tv-rest-control/57350",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Rest Control API for Sony Bravia TV devices",
      "documentationUrl": null,
      "id": "manifest:18569e5a9d5e1803c500",
      "manifestUrl": "https://raw.githubusercontent.com/jonesalexr/hubitat/master/Drivers/SonyBravia/packageManifest.json",
      "name": "Sony Bravia TV Rest Control",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "VH",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "RA",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "SoundSmart MZ21 - 2 Zone Amplified Audio Matrix with Master zone",
      "documentationUrl": null,
      "id": "hpm:288f6961-3656-4020-884b-7af401aec5a9",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_SoundSmart_2Zonas/refs/heads/main/packageManifest.json",
      "name": "SoundSmart - 2 Zone Matrix (MZ21)",
      "observed": {
        "externalHosts": [
          "cdn-profiles.tunein.com",
          "opml.radiotime.com",
          "ws.audioscrobbler.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 17
      },
      "reviewed": [],
      "tags": [
        "Speakers"
      ]
    },
    {
      "author": "VH",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "RA",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "SoundSmart 4 Zonas Audio Matrix",
      "documentationUrl": null,
      "id": "hpm:10766985-9794-4688-b9a5-52b4d69870af",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_SoundSmart_4Zonas/refs/heads/main/packageManifest.json",
      "name": "SoundSmart - 4 Zone Matrix",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Speakers"
      ]
    },
    {
      "author": "Vartan Horigian",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "SoundSmart - Drivers for the SoundSmart Player component Only. Must have",
      "documentationUrl": "https://github.com/hhorigian/hubitat_SoundSmart/tree/main/Player",
      "id": "hpm:9a8f54fa-7faf-48d3-a6fb-ba65cf718b3b",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_SoundSmart/main/packageManifest.json",
      "name": "SoundSmart - Player (1 de 2)",
      "observed": {
        "externalHosts": [
          "cdn-profiles.tunein.com",
          "opml.radiotime.com",
          "ws.audioscrobbler.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Speakers"
      ]
    },
    {
      "author": "TRATO",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "SoundSmart - Drivers for the SoundSmart MultiRoom setup. (SoundSmart - Player (1 de 2) drivers should be already installed)",
      "documentationUrl": "https://github.com/hhorigian/hubitat_SoundSmart/blob/main/README.md",
      "id": "hpm:a14844a1-3bde-4031-b438-bf891db472bc",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_SoundSmart/main/MultiRoomManager/packageManifest.json",
      "name": "SoundSmart - Player Group MultiRoom (2 de 2)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Speakers"
      ]
    },
    {
      "author": "Marc Hedish",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-springs-window-fashions-sheer-shade-driver/62341",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers specifically for Sheer and Roller Shade window coverings. Fixes the issue where the standard drivers report 'partially open' when they are opaque and 'closed' when actually sheer.",
      "documentationUrl": "https://github.com/MHedish/Hubitat/blob/main/Drivers/Springs-Window-Fashions/README.md",
      "id": "hpm:3e9ba706-857a-4f84-ab3b-2ddce486aaca",
      "manifestUrl": "https://raw.githubusercontent.com/MHedish/Hubitat/main/Drivers/Springs-Window-Fashions/packageManifest.json",
      "name": "Springs Window Fashions Shade Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 6
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Doors & Windows",
        "Window Coverings",
        "ZWave"
      ]
    },
    {
      "author": "C Steele",
      "category": null,
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-sprinkler-schedule-manager-app/149959/63",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "App to schedule sprinkler valves on a daily basis.",
      "documentationUrl": "https://www.hubitatcommunity.com/QuikRef/sprinklerScheduleManagerInfo/index.html",
      "id": "hpm:1bd62e6f-11b6-43a3-af69-3d2b46a4e6b8",
      "manifestUrl": "https://raw.githubusercontent.com/csteele-PD/Hubitat-public/master/SprinklerSchedule/PackageManifest.json",
      "name": "Sprinkler Schedule Manager",
      "observed": {
        "externalHosts": [
          "code.iconify.design",
          "sdmdataaccess.nrcs.usda.gov",
          "www.hubitatcommunity.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 22
      },
      "reviewed": [],
      "tags": [
        "Irrigation",
        "Timers"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A port of the Spruce version 1 (zwave non-wifi) smartapp scheduler and device handler from smartthings to Hubitat",
      "documentationUrl": null,
      "id": "hpm:527a85ca-3032-4492-927d-8d6ddf9812c8",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/SpruceController.json",
      "name": "Spruce Controller",
      "observed": {
        "externalHosts": [
          "www.plaidsystems.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 21
      },
      "reviewed": [],
      "tags": [
        "Irrigation",
        "Valves"
      ]
    },
    {
      "author": "Ben Deitch",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-squeezebox-integration-logitech-media-server/4489",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Integrates a Squeezebox Server (LMS) instance into Hubitat.",
      "documentationUrl": "https://github.com/xap-code/hubitat/blob/master/squeezebox/README.md",
      "id": "hpm:76a715d4-a6d2-4071-a532-2588933e8b8c",
      "manifestUrl": "https://raw.githubusercontent.com/xap-code/hubitat/master/squeezebox/packageManifest.json",
      "name": "Squeezebox Connect",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION"
        ],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Multimedia",
        "Speakers"
      ]
    },
    {
      "author": "Simon Burke (sburke781)",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-status-avatar/82908",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Displays an image with decorations to indicate status information",
      "documentationUrl": null,
      "id": "manifest:7fa80f8a4ae9f0fd2859",
      "manifestUrl": "https://raw.githubusercontent.com/sburke781/hubitat/master/StatusAvatar/packageManifest.json",
      "name": "Status Avatar",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Maxime Boissonneault",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Zigbee driver for Stelpro Allia Zigbee Thermostats",
      "documentationUrl": null,
      "id": "hpm:e6f13a60-11b2-48a5-a3a0-165546867f9e",
      "manifestUrl": "https://raw.githubusercontent.com/mboisson/Hubitat-Stelpro-Allia-Thermostat/main/packageManifest.json",
      "name": "Stelpro Allia ZigBee Thermostat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Energy Monitoring",
        "Zigbee"
      ]
    },
    {
      "author": "Neil Jackson",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "stelpro ki zigbee thermostat driver",
      "documentationUrl": null,
      "id": "hpm:bbede7f4-f765-465b-a853-33bf913a1456",
      "manifestUrl": "https://raw.githubusercontent.com/neiljackson1984/SmartThingsNeil/master/drivers/stelpro/stelpro-ki-zigbee-thermostat.src/package_manifest.json",
      "name": "StelPro Ki Zigbee Thermostat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Temperature & Humidity",
        "Zigbee"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Stock garage door handler port from smartthings with switch capablity added to work in Alexa",
      "documentationUrl": null,
      "id": "hpm:41d3047a-a492-49ae-8862-8c8439675977",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/GarageDoorLGK.json",
      "name": "Stock Zwave Garage Door Handler with switch capability added",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Garage Doors"
      ]
    },
    {
      "author": "Justin Walker (augoisms)",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-suncalc-driver/18374",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A driver that calculates the position of the sun",
      "documentationUrl": null,
      "id": "manifest:3950ace48c71a0627a69",
      "manifestUrl": "https://raw.githubusercontent.com/augoisms/hubitat/master/sun-calc/packageManifest.json",
      "name": "SunCalc",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Weather"
      ]
    },
    {
      "author": "Don Caton",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/sunsa-wand-simple-smart-blinds/63900",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Sunsa Wands",
      "documentationUrl": "https://raw.githubusercontent.com/dcaton/Hubitat/main/SunsaWands/README.md",
      "id": "hpm:4ece8db8-9e97-4e9d-95cc-90dd929a8ec1",
      "manifestUrl": "https://raw.githubusercontent.com/dcaton/Hubitat/main/SunsaWands/packageManifest.json",
      "name": "Sunsa Wands",
      "observed": {
        "externalHosts": [
          "sunsahomes.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Window Coverings"
      ]
    },
    {
      "author": "Alex Lee Yuk Cheung & Dominick Meglio",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Control your Sure Petcare Pet Door and monitor your pet from within Hubitat.",
      "documentationUrl": null,
      "id": "hpm:2cd24b39-f39d-480e-9f9b-233dc7c2c8d0",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-sure-petcare-petdoor/master/packageManifest.json",
      "name": "Sure Petcare Pet Door",
      "observed": {
        "externalHosts": [
          "www.surepetcare.io"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 15
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Sure PetCare Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "HTTPS_API"
            }
          ],
          "documentation": [],
          "id": "sure-petcare",
          "name": "Sure PetCare Integration",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Cloud",
        "Pets & Animals"
      ]
    },
    {
      "author": "Joel Wetzel",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-switch-bindings",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Bind two or more switches/dimmers together to behave as one.",
      "documentationUrl": "https://github.com/joelwetzel/Hubitat-Switch-Bindings",
      "id": "manifest:cef806703984713dd287",
      "manifestUrl": "https://raw.githubusercontent.com/joelwetzel/Hubitat-Switch-Bindings/master/packageManifest.json",
      "name": "Switch Bindings",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Mattias Fornander (@mfornander)",
      "category": "Notifications",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-switch-dashboard-turn-your-led-status-switches-into-mini-dashboards",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Turn your LED status switches into mini-dashboards",
      "documentationUrl": null,
      "id": "manifest:5736f266210d02a9a68d",
      "manifestUrl": "https://raw.githubusercontent.com/MFornander/Hubitat/master/apps/SwitchDashboard/packageManifest.json",
      "name": "Switch Dashboard",
      "observed": {
        "externalHosts": [
          "community.inovelli.com",
          "nathanfiscus.github.io",
          "semver.org",
          "stackoverflow.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 13
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver that supports the usage of a SynAccess PDU through the telnet interface.  Driver creates a child device for each outlet to enable individual power control.",
      "documentationUrl": null,
      "id": "hpm:489588bc-e3e8-4245-910e-57d02f82fc69",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/synPduManifest.json",
      "name": "SynAccess PDU Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Derek Osborn",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-synology-srm-router-integration/164624",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Synology SRM Router Integration for Hubitat.",
      "documentationUrl": null,
      "id": "manifest:f92a356f20dd42bf3244",
      "manifestUrl": "https://raw.githubusercontent.com/dJOS1475/Synology-SRM-Integration/refs/heads/main/packageManifest.json",
      "name": "Synology SRM Router Integration",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Presence & Location",
        "Repeaters & Extenders",
        "Utility"
      ]
    },
    {
      "author": "Hugo Haas",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-t-mobile-home-internet-gateway-driver/119490",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Provides an interface with T-Mobile Home Internet's gateway.",
      "documentationUrl": "https://github.com/hugoh/hubitat-tmo-gateway/blob/master/README.md",
      "id": "hpm:EBFD31D3-C59C-4898-A567-D0810A0B6008",
      "manifestUrl": "https://raw.githubusercontent.com/hugoh/hubitat-tmo-gateway/master/packageManifest.json",
      "name": "T-Mobile Home Internet Gateway Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Misc. Devices"
      ]
    },
    {
      "author": "Chaue Shen",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integration for the Tailwind iQ3 Garage Door Controller",
      "documentationUrl": "https://github.com/kaimyn/Hubitat/main/Tailwind",
      "id": "manifest:4999e14644bbd57d3d56",
      "manifestUrl": "https://raw.githubusercontent.com/kaimyn/Hubitat/main/Tailwind/packageManifest.json",
      "name": "Tailwind Garage Door Controller",
      "observed": {
        "externalHosts": [
          "web.gotailwind.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Garage Doors"
      ]
    },
    {
      "author": "nh.schottfam",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/tankutility-monitoring-app-and-device/8891",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "tankUtility Propane tank monitoring for Hubitat",
      "documentationUrl": null,
      "id": "manifest:32ee3d22534728cb1259",
      "manifestUrl": "https://raw.githubusercontent.com/imnotbob/tankUtility/master/packageManager.json",
      "name": "TankUtility",
      "observed": {
        "externalHosts": [
          "app.tankutility.com",
          "cdn.rawgit.com",
          "cdnjs.cloudflare.com",
          "data.tankutility.com",
          "fastcdn.org",
          "fonts.googleapis.com",
          "maxcdn.bootstrapcdn.com",
          "s3.amazonaws.com",
          "use.fontawesome.com",
          "www.gstatic.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 29
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "LAN",
        "Monitoring"
      ]
    },
    {
      "author": "David Gutheinz",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/tp-link-tapo-devices/121084",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "TAPO Plugs, Switches, Bulbs and Kasa Matter(only) devices integration",
      "documentationUrl": "https://github.com/DaveGut/tpLink_Hubitat",
      "id": "manifest:d2ca03eac3949a3d81ba",
      "manifestUrl": "https://raw.githubusercontent.com/DaveGut/tpLink_Hubitat/main/packageManifest.json",
      "name": "TAPO Device Integration",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND",
          "UDP_PROTOCOL"
        ],
        "sourceFilesAnalysed": 22,
        "urlLiteralCount": 47
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "TP-Link Tapo Devices",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_OR_CLOUD"
            }
          ],
          "documentation": [],
          "id": "tapo-community",
          "name": "Tapo Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Cleaning Devices",
        "Energy Monitoring",
        "LAN",
        "Lights & Switches"
      ]
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-tasmota-for-he-auto-detecting-tasmota-drivers-tasmota-firmware-7-x-8-x-for-he-for-use-with-tuya-sonoff-and-other-esp-devices/72?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Allows you to integrate Tasmota-based devices with Hubitat Elevation.",
      "documentationUrl": "https://oh-lalabs.com/docs/t4he",
      "id": "manifest:5e364a3f0b455c8cce0b",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packageManifest.json",
      "name": "Tasmota for Hubitat Elevation",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "tasmota.github.io",
          "templates.blakadder.com",
          "www.rflink.nl",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 17,
        "urlLiteralCount": 249
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Tasmota Device",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_HTTP_OR_MQTT"
            }
          ],
          "documentation": [],
          "id": "tasmota",
          "name": "Tasmota Integration",
          "status": "COMMUNITY_SEED"
        },
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": []
    },
    {
      "author": "Gary J. Milne",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/tasmota-sync-drivers-native-and-real-time-synchronization-between-hubitat-and-tasmota-11/93651",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tasmota Sync Drivers - Realtime & Native Synchronisation between Tasmota and Hubitat.",
      "documentationUrl": "https://github.com/GaryMilne/Hubitat-Tasmota/blob/main/Tasmota%20Sync%20Documentation.pdf",
      "id": "manifest:cec13b229efd2c472770",
      "manifestUrl": "https://raw.githubusercontent.com/GaryMilne/Hubitat-Tasmota/main/packageManifest.json",
      "name": "Tasmota Sync Drivers",
      "observed": {
        "externalHosts": [
          "semver.org",
          "tasmota.github.io"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "PARSE_LAN_MESSAGE",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 12,
        "urlLiteralCount": 114
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_DEVICE",
              "name": "Tasmota Device",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_HTTP_OR_MQTT"
            }
          ],
          "documentation": [],
          "id": "tasmota",
          "name": "Tasmota Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Lights & Switches",
        "Misc. Devices",
        "Tasmota",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Marc Hedish",
      "category": "Notifications",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-telnyx-sms-notification-driver/63106",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Telnyx SMS allows you to send SMS messages from Rule Machine, webCoRE, and the HE device pages.",
      "documentationUrl": "https://github.com/MHedish/Hubitat/blob/main/Drivers/Telnyx/README.md",
      "id": "hpm:6e5251ae-6faf-42f6-94a5-341806660b76",
      "manifestUrl": "https://raw.githubusercontent.com/MHedish/Hubitat/main/Drivers/Telnyx/packageManifest.json",
      "name": "Telnyx SMS",
      "observed": {
        "externalHosts": [
          "api.telnyx.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Notifications"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "The smart connect app and driver for the tesla monitoring and control. Not written by me but modified by me to add variable poll time, lockout times when it stops polling to allow sleep and charage port lock/unlock custom capability",
      "documentationUrl": null,
      "id": "hpm:a3f15a9c-8756-4d6b-8c1b-13f72c73c439",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/Tesla.json",
      "name": "Tesla App and Driver (DEPRECATED Get V3 of the app)",
      "observed": {
        "externalHosts": [
          "maps.google.com",
          "owner-api.teslamotors.com",
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Presence & Location"
      ]
    },
    {
      "author": "Snell",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Drivers for monitoring a Tesla Powerwall",
      "documentationUrl": null,
      "id": "hpm:35ad06a9-bf04-4967-906f-c3920cb1b555",
      "manifestUrl": "https://www.drdsnell.com/projects/hubitat/drivers/TeslaManifest.json",
      "name": "Tesla Drivers",
      "observed": {
        "externalHosts": [
          "www.drdsnell.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 46
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "LAN",
        "Monitoring"
      ]
    },
    {
      "author": "DarwinsDen",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Create advanced Tesla Powerwall schedules, control, monitor, and integrate your Powerwall with Hubitat (and SmartThings).",
      "documentationUrl": "https://darwinsden.com/powerwall/",
      "id": "manifest:a9b70adc0f2f865e2093",
      "manifestUrl": "https://raw.githubusercontent.com/DarwinsDen/Tesla-Powerwall-Manager/main/packageManifest.json",
      "name": "Tesla Powerwall Manager",
      "observed": {
        "externalHosts": [
          "apps.apple.com",
          "auth.tesla.com",
          "darwinsden.com",
          "owner-api.teslamotors.com",
          "rawgit.com",
          "www.paypal.com",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 35
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "The new V3 of the smart connect app and driver for the tesla monitoring and control of your autos.",
      "documentationUrl": null,
      "id": "hpm:145a9612-dd3d-4932-bfc2-3a50276663ad",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/TeslaV3.json",
      "name": "Tesla V3 App and Driver",
      "observed": {
        "externalHosts": [
          "auth.tesla.com",
          "maps.google.com",
          "owner-api.teslamotors.com",
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control and query the status of all your tesla vehicles. This is the app and driver both needed.",
      "documentationUrl": null,
      "id": "hpm:a479236d-8b91-4f9d-bb2c-449b47759c35",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/tesla_tessie.json",
      "name": "Tesla vehicle status and control via Tessie - App and Driver",
      "observed": {
        "externalHosts": [
          "api.tessie.com",
          "maps.google.com",
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Mike Bishop",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/beta-tesla-vehicle-via-teslamate-mqtt/92383",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Uses the MQTT feed published by TeslaMate to expose monitored Tesla vehicles as read-only Hubitat devices",
      "documentationUrl": null,
      "id": "hpm:c74dce4d-d9cc-4e48-886f-8d21238e5f07",
      "manifestUrl": "https://raw.githubusercontent.com/MikeBishop/hpm-intermediate/main/teslamate.json",
      "name": "TeslaMate",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Vehicles & Transportation"
      ]
    },
    {
      "author": "ritchierich",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-textbelt-sms-notification-driver/152907",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Send SMS notifications via the Textbelt.",
      "documentationUrl": null,
      "id": "manifest:c520b901785861a61e1e",
      "manifestUrl": "https://raw.githubusercontent.com/mlritchie/Hubitat/refs/heads/master/Drivers/Textbelt%20SMS/packageManifest.json",
      "name": "Textbelt SMS Notifications",
      "observed": {
        "externalHosts": [
          "textbelt.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Notifications"
      ]
    },
    {
      "author": "napalmcsr",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tracks Thermostat usage by Thermostat State",
      "documentationUrl": null,
      "id": "manifest:256168311686bdb55579",
      "manifestUrl": "https://raw.githubusercontent.com/napalmcsr/Hubitat_Napalmcsr/master/docs/ThermostatTrackerManifest.json",
      "name": "Thermostat Tracker",
      "observed": {
        "externalHosts": [
          "somedomain.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Climate Control"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/beta-thermostats-sync-bi-directional/156225",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Bidirectional synchronization of thermostat attributes between two devices. Supports 8 sync options including battery and healthStatus with advanced loop prevention.",
      "documentationUrl": null,
      "id": "hpm:35869981-30c0-4c06-b77a-7cab33ba1b61",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Apps/Thermostats%20Sync/packageManifest.json",
      "name": "Thermostats Sync",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Energy Monitoring",
        "Monitoring",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Security",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Improved Third Reality Motion Sensor with Presence better drop out detection,battery support",
      "documentationUrl": null,
      "id": "manifest:d35f611042d56d15cd59",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/third-reality-contact-sensor.json",
      "name": "Third Reality Contact Sensor",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Doors & Windows",
        "Lights & Switches",
        "Presence & Location",
        "Safety & Security",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Improved Third Reality Motion Sensor with Presence better drop out detection,battery support",
      "documentationUrl": null,
      "id": "manifest:0ee2a3c99bcc63465bf4",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/third-reality-motion-sensor.json",
      "name": "Third Reality Motion Sensor",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Lights & Switches",
        "Motion Control",
        "Presence & Location",
        "Safety & Security",
        "Zigbee"
      ]
    },
    {
      "author": "Daniel Winks",
      "category": "Window Coverings",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Improved driver for Third Reality Smart Blinds. Adds 'verfication' checks to ensure blinds always move to 'desired' position, eliminating issues where blinds might otherwise fail to respond to the first ZigBee command sent.",
      "documentationUrl": null,
      "id": "hpm:0494570e-0fdd-4ea0-a8f4-7eba8e154ddd",
      "manifestUrl": "https://raw.githubusercontent.com/DanielWinks/Hubitat-Public/main/PackageManifests/ThirdReality/packageManifest.json",
      "name": "Third Reality Smart Blind Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Window Coverings",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Improved Third Reality Water Sensor with Presence better drop out detection,battery support",
      "documentationUrl": null,
      "id": "manifest:9f0e530e1ee5b8ff9336",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/third-reality-water-sensor.json",
      "name": "Third Reality Water Sensor",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Monitoring",
        "Presence & Location",
        "Safety & Security",
        "Water",
        "Zigbee"
      ]
    },
    {
      "author": "Jonathan Bradshaw",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/new-third-reality-power-monitoring-plug/109786",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Enhanced support for Third Reality Zigbee devices",
      "documentationUrl": "https://raw.githubusercontent.com/bradsjm/hubitat-public/main/ThirdReality/README.md",
      "id": "hpm:40bba6e4-914c-492d-b7c2-7b1f773cd1cc",
      "manifestUrl": "https://raw.githubusercontent.com/bradsjm/hubitat-public/main/ThirdReality/packageManifest.json",
      "name": "Third Reality Zigbee Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Lights & Switches",
        "Zigbee"
      ]
    },
    {
      "author": "hubitrep",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Community Hubitat drivers for ThirdReality Zigbee devices - plugs, sensors, and lighting, with full power/energy metering where applicable.",
      "documentationUrl": null,
      "id": "hpm:8a4ad471-ce79-46aa-8d66-6ca1602c8b62",
      "manifestUrl": "https://raw.githubusercontent.com/hubitrep/hubitat/refs/heads/main/thirdreality/packageManifest.json",
      "name": "ThirdReality Zigbee Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 3
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Energy Monitoring",
        "Relays",
        "Zigbee"
      ]
    },
    {
      "author": "Vartan Horigian",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tholz - SmartPool - Driver para controle e status",
      "documentationUrl": "https://github.com/hhorigian/hubitat_tholz/tree/main",
      "id": "hpm:928a5351-4d94-435f-8291-2f6317259938",
      "manifestUrl": "https://raw.githubusercontent.com/hhorigian/hubitat_tholz/refs/heads/main/packageManifest.json",
      "name": "Tholz - SmartPool",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "IR & RF",
        "Temperature & Humidity"
      ]
    },
    {
      "author": null,
      "category": "Dashboards",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Create dashboard tiles that are highly customizable and can contain data from multiple devices.",
      "documentationUrl": null,
      "id": "manifest:3e5f40eb87f4c28bcbd4",
      "manifestUrl": "https://raw.githubusercontent.com/GaryMilne/Hubitat-TileBuilder/main/packageManifestTileBuilder.json",
      "name": "Tile Builder for Hubitat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Dashboard",
        "Monitoring",
        "Temperature & Humidity",
        "Utilities"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Manages the merging of data from multiple device drivers, and an assigned template to create an HTML output attribute that can be used on the Dashboard.",
      "documentationUrl": null,
      "id": "hpm:b3fdaf31-e201-492e-84f0-379a6c37a624",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/ttMultDevMgrManifest.json",
      "name": "Tile Multi-Device Template Manager",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Manages the merging of data from a device driver, and an assigned template to create an HTML output attribute that can be used on the Dashboard.",
      "documentationUrl": null,
      "id": "hpm:96fae9d6-e7a1-4814-a801-b95c91187f82",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/ttDevMgrManifest.json",
      "name": "Tile Template Device Manager",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Creates a template file based on a device driver's exposed attributes. Templates can be used to create dashboard tiles using Tile Template Device Manager.",
      "documentationUrl": null,
      "id": "hpm:979423db-2189-470d-a65a-89a661c620c7",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/ttGenManifest.json",
      "name": "Tile Template Generator",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Brian Wilson",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Toggle devices that don't support the toggle function",
      "documentationUrl": "https://github.com/bdwilson/hubitat/tree/master/Toggle-API",
      "id": "manifest:746b1f723dec2533fb8c",
      "manifestUrl": "https://raw.githubusercontent.com/bdwilson/hubitat/master/Toggle-API/packageManifest.json",
      "name": "Toggle API",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com",
          "www.icloud.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Craig Dewar",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-traeger-wifire-integration/",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integrates Traeger WiFire grills with Hubitat via AWS IoT MQTT over WebSocket. Provides real-time grill, probe, and ambient temperatures, grill state, pellet level, and full command control.",
      "documentationUrl": "https://github.com/craigde/hubitat-traeger",
      "id": "hpm:d4e5f6a7-8b9c-4d1e-a2f3-5c6b7a8e9d0f",
      "manifestUrl": "https://raw.githubusercontent.com/craigde/hubitat-traeger/main/packageManifest.json",
      "name": "Traeger WiFire Grill Integration",
      "observed": {
        "externalHosts": [
          "auth-api.iot.traegergrills.io",
          "mobile-iot-api.iot.traegergrills.io"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Thermostat"
      ]
    },
    {
      "author": "RamSet",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Reminds you to take the bins out, tracking alternating garbage and recycling weeks without needing a date/time device.",
      "documentationUrl": null,
      "id": "manifest:587bc7bb2fb560cc14f8",
      "manifestUrl": "https://raw.githubusercontent.com/RamSet/hubitat/refs/heads/main/manifest-trash-reminder.json",
      "name": "Trash Reminder",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Eric Meddaugh",
      "category": "Security",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "TTLock locks integrations",
      "documentationUrl": null,
      "id": "hpm:5705c2fe-6587-4d41-a8b7-db583bb04244",
      "manifestUrl": "https://raw.githubusercontent.com/x86cpu/hubitat/main/TTLock/packageManifest.json",
      "name": "TTLock",
      "observed": {
        "externalHosts": [
          "euapi.ttlock.com",
          "euopen.ttlock.com",
          "snipplr.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 15
      },
      "reviewed": [],
      "tags": [
        "Locks",
        "Safety & Security"
      ]
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with the Tuya Alarm.",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-tuya-alarm",
      "id": "manifest:5d7d9bb014f1b9c92319",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-tuya-alarm.json",
      "name": "Tuya Alarm",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Andrew Davison",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for devices based on the Tuya platform.",
      "documentationUrl": "https://github.com/birdslikewires/hubitat/tree/main/tuya",
      "id": "hpm:6abb75c5-fbaf-42b6-a065-a92c25455a21",
      "manifestUrl": "https://raw.githubusercontent.com/birdslikewires/hubitat/main/tuya/packageManifest.json",
      "name": "Tuya Drivers from BirdsLikeWires",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Repeaters & Extenders",
        "Zigbee"
      ]
    },
    {
      "author": "Jonathan Bradshaw",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/beta-tuya-cloud-driver-limited-device-support/80627",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Tuya IoT Platform (Cloud)",
      "documentationUrl": null,
      "id": "hpm:aeb1abe9-6c31-4bd3-9c5b-4754922e30a6",
      "manifestUrl": "https://raw.githubusercontent.com/bradsjm/hubitat-public/main/Tuya/packageManifest.json",
      "name": "Tuya IoT Platform (Cloud)",
      "observed": {
        "externalHosts": [
          "developer.tuya.com",
          "openapi.tuyacn.com",
          "openapi.tuyaeu.com",
          "openapi.tuyain.com",
          "openapi.tuyaus.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 230
      },
      "reviewed": [],
      "tags": [
        "Cloud"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/beta-tuya-zigbee-multi-sensor-4-in-1/92441",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya PIR Motion Sensors and mmWave Radars - driver for Hubitat Elevation hub",
      "documentationUrl": "https://community.hubitat.com/t/beta-tuya-zigbee-multi-sensor-4-in-1/92441/2",
      "id": "hpm:f70af857-af94-4bca-8c13-444bf3bc8139",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Tuya%20Multi%20Sensor%204%20In%201/packageManifest.json",
      "name": "Tuya Multi Sensor 4 In 1 (PIR and mmWave Radars)",
      "observed": {
        "externalHosts": [
          "developer.tuya.com",
          "s.click.aliexpress.com",
          "szneo.com",
          "www.aliexpress.com",
          "www.amazon.ae",
          "www.banggood.com",
          "zigbee.blakadder.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 61
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/beta-tuya-neo-coolcam-zigbee-water-leak-sensor/91370",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya NEO Coolcam Zigbee Water Leak Sensor driver for Hubitat Elevation hub",
      "documentationUrl": "https://github.com/kkossev/Hubitat/blob/main/Drivers/Tuya%20NEO%20Coolcam%20Zigbee%20Water%20Leak%20Sensor/README.md",
      "id": "hpm:39a56b8d-62a7-4b48-9915-fe26fb11d5e7",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Tuya%20NEO%20Coolcam%20Zigbee%20Water%20Leak%20Sensor/packageManifest.json",
      "name": "Tuya NEO Coolcam Zigbee Water Leak Sensor",
      "observed": {
        "externalHosts": [
          "developer.tuya.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-tuya-scene-switch-ts004f-driver/92823",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya TS004F driver for Hubitat Elevation",
      "documentationUrl": "https://github.com/kkossev/Hubitat/blob/main/Drivers/Tuya%20TS004F/README.md",
      "id": "hpm:06120bb0-fd54-4d82-8fc2-8adef6ca604a",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/development/Drivers/Tuya%20TS004F/packageManifest.json",
      "name": "Tuya Scene Switch TS004F",
      "observed": {
        "externalHosts": [
          "user-images.githubusercontent.com",
          "www.aliexpress.com",
          "www.aliexpress.us"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 32
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-tuya-smart-siren-zigbee-driver/91772",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya Smart Siren Zigbee driver for Hubitat Elevation hub",
      "documentationUrl": null,
      "id": "hpm:d8aed522-094b-403f-b1b7-90900ada633c",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Tuya%20Smart%20Siren%20Zigbee/packageManifest.json",
      "name": "Tuya Smart Siren Zigbee",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 16
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-tuya-temperature-humidity-illuminance-lcd-display-with-a-clock/88093",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Universal Zigbee driver for Tuya, Sonoff, ThirdReality, MHCOZY and related Temperature, Humidity, Illuminance sensors for Hubitat Elevation, with support for models both with and without display/clock.",
      "documentationUrl": "https://github.com/kkossev/Hubitat/blob/development/Drivers/Tuya%20Temperature%20Humidity%20Illuminance%20LCD%20Display%20with%20a%20Clock/readme.md",
      "id": "hpm:bcacde4f-c695-4a63-9a48-f4e49edb9dd2",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/development/Drivers/Tuya%20Temperature%20Humidity%20Illuminance%20LCD%20Display%20with%20a%20Clock/packageManifest.json",
      "name": "Tuya Temperature Humidity Illuminance LCD Display with a Clock",
      "observed": {
        "externalHosts": [
          "de.aliexpress.com",
          "www.aliexpress.com",
          "www.amazon.co.uk",
          "www.amazon.de"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 71
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with Tuya Valves.",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-tuya-valve",
      "id": "manifest:12089fd3707ebda8bfbf",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-tuya-valve.json",
      "name": "Tuya Valve",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-tuya-wall-mount-thermostat-water-electric-floor-heating-zigbee-driver/87050",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya Wall Thermostat - AVATTO, Moes, BEOK - driver for Hubitat Elevation hub",
      "documentationUrl": null,
      "id": "hpm:2d09ce90-729a-444c-8159-7c90ca1857f6",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat-Tuya-Wall-Thermostat/main/packageManifest.json",
      "name": "Tuya Wall Thermostat",
      "observed": {
        "externalHosts": [
          "www.aliexpress.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "kkossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/beta-tuya-zigbee-chlorin-meter-7-in-1/141907",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya Zigbee Chlorine Meter",
      "documentationUrl": null,
      "id": "hpm:71fc3487-1559-47a3-a25b-838c18ad260d",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Tuya%20Zigbee%20Chlorine%20Meter/packageManifest.json",
      "name": "Tuya Zigbee Chlorine Meter",
      "observed": {
        "externalHosts": [
          "community.home-assistant.io",
          "www.amazon.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 19
      },
      "reviewed": [],
      "tags": [
        "Misc. Devices",
        "Monitoring",
        "Pools & Spas",
        "Water",
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya Zigbee Contact Sensor++ w/ healthStatus - driver for Hubitat Elevation hub",
      "documentationUrl": null,
      "id": "hpm:b6e99a33-7aa3-4b25-ac03-9e44b0be5816",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Tuya%20Contact%20Sensor/packageManifest.json",
      "name": "Tuya Zigbee Contact Sensor++ w/ healthStatus",
      "observed": {
        "externalHosts": [
          "developer.tuya.com",
          "www.aliexpress.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir kkossev",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/a-new-interesting-tuya-zigbee-control-screen-panel-w-relays-and-scenes-t3e-2023-new-model/136208",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "T3E - Tuya Zigbee Control Screen Panel",
      "documentationUrl": "https://github.com/kkossev/Hubitat/wiki/Tuya-Zigbee-Control-Screen-Panel",
      "id": "hpm:3d3e4d40-3184-4604-b26c-0165f04f8b4a",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Tuya%20Zigbee%20Control%20Screen%20Panel/packageManifest.json",
      "name": "Tuya Zigbee Control Screen Panel",
      "observed": {
        "externalHosts": [
          "sensirion.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Misc. Devices",
        "Zigbee"
      ]
    },
    {
      "author": "Matt Hammond",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-tuya-1-gang-and-2-gang-dimmer-module-driver/60372",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Tuya 1-gang and 2-gang dimmer modules",
      "documentationUrl": "https://github.com/matt-hammond-001/hubitat-code/blob/tuya-dimmer-v0.3.2/drivers/README.md",
      "id": "hpm:64b9f13d-2879-49bd-a5ab-c0eb84706c6f",
      "manifestUrl": "https://raw.githubusercontent.com/matt-hammond-001/hubitat-code/master/drivers/tuya-zigbee-dimmer-module.hpm-manifest.json",
      "name": "Tuya Zigbee dimmer modules",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-tuya-zigbee-fingerbot/118719",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya Zigbee Fingerbot - driver for Hubitat Elevation hub",
      "documentationUrl": "https://community.hubitat.com/t/release-tuya-zigbee-fingerbot/118719",
      "id": "hpm:fbae2080-22f0-48e0-8788-f57dd5e571da",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Tuya%20Zigbee%20Fingerbot/packageManifest.json",
      "name": "Tuya Zigbee Fingerbot",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 14
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/tuya-zigbee-garage-door-opener/95579/30",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya Zigbee Garage Door Opener driver for Hubitat Elevation hub",
      "documentationUrl": "https://community.hubitat.com/t/tuya-zigbee-garage-door-opener/95579/26?u=kkossev",
      "id": "hpm:5057db0d-4572-4cf0-a7c3-22c2bffb711e",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Tuya%20Zigbee%20Garage%20Door%20Opener/packageManifest.json",
      "name": "Tuya Zigbee Garage Door Opener",
      "observed": {
        "externalHosts": [
          "www.aliexpress.us"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya Zigbee Light Sensor - driver for Hubitat Elevation hub",
      "documentationUrl": null,
      "id": "hpm:9a6bfb6e-f5a7-4901-a031-3d354387f5b5",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/development/Drivers/Tuya%20Zigbee%20Light%20Sensor/packageManifest.json",
      "name": "Tuya Zigbee Light Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-tuya-zigbee-metering-plug/86465",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya Zigbee Metering Plug driver for Hubitat Elevation hub",
      "documentationUrl": "https://github.com/kkossev/Hubitat/blob/main/Drivers/Tuya%20Zigbee%20Metering%20Plug/README.MD",
      "id": "hpm:db071ec7-157f-4397-a63c-18f2a3b16bec",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Tuya%20Zigbee%20Metering%20Plug/packageManifest.json",
      "name": "Tuya Zigbee Metering Plug",
      "observed": {
        "externalHosts": [
          "freeformatter.com",
          "nous.technology",
          "ultrasmart.pl",
          "user-images.githubusercontent.com",
          "vi.aliexpress.com",
          "www.aliexpress.com",
          "www.quartz-scheduler.org",
          "www.youtube.com",
          "zigbee.blakadder.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 39
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "Ring Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "ring",
          "name": "Ring Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/alpha-tuya-zigbee-mmwave-sensors-moving-the-code-from-the-tuya-4-in-1-driver/137410/1",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya mmWave sensors - new driver to replace the Tuya 4 In 1 driver. W.I.P.",
      "documentationUrl": "https://github.com/kkossev/Hubitat/wiki/Tuya-Zigbee-mmWave-Sensor",
      "id": "hpm:e4f2a589-2ac0-4923-b6c7-bfc08b9db948",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Tuya%20Zigbee%20mmWave%20Sensor/manifest.json",
      "name": "Tuya Zigbee mmWave Sensor",
      "observed": {
        "externalHosts": [
          "developer.tuya.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 23
      },
      "reviewed": [],
      "tags": [
        "Motion Control",
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-tuya-zigbee-light-and-rain-sensor/141057",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya Zigbee Rain Sensor",
      "documentationUrl": "https://community.hubitat.com/t/release-tuya-zigbee-light-and-rain-sensor/141057",
      "id": "hpm:b2212052-92d1-450f-9dca-08c0789c9c0c",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Tuya%20Zigbee%20Rain%20Sensor/manifest.json",
      "name": "Tuya Zigbee Rain Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Irrigation",
        "Monitoring",
        "Multi Sensors",
        "Water",
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/beta-tuya-zigbee-smoke-detector/104159",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya Zigbee Smoke Detector - driver for Hubitat Elevation hub",
      "documentationUrl": "https://community.hubitat.com/t/beta-tuya-zigbee-smoke-detector/104159/2?u=kkossev",
      "id": "hpm:c25fb12f-a13d-4d84-8bc5-40a2bba258d3",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Tuya_Zigbee_Smoke_Detector/packageManifest.json",
      "name": "Tuya Zigbee Smoke Detector",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 16
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya Zigbee Switch, relay and plug driver (Tuya TS0601, Sonoff ZBMINI-L/L2/R2, ZBMicro, IKEA, Lidl, LEDVANCE) for Hubitat Elevation hub",
      "documentationUrl": null,
      "id": "hpm:6a58241e-1634-455d-94ca-10f6393a75db",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/development/Drivers/Tuya%20Zigbee%20Switch/packageManifest.json",
      "name": "Tuya Zigbee Switch",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 26
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Zigbee"
      ]
    },
    {
      "author": "kkossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/beta-tuya-zigbee-tank-level-monitor/141666",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya Zigbee Tank Level Monitor",
      "documentationUrl": null,
      "id": "hpm:74b72270-8de7-4064-964f-a27e4887adeb",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Tuya%20Zigbee%20Tank%20Level%20Monitor/packageManifest.json",
      "name": "Tuya Zigbee Tank Level Monitor",
      "observed": {
        "externalHosts": [
          "www.aliexpress.com",
          "www.amazon.com",
          "www.eptsensor.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 17
      },
      "reviewed": [],
      "tags": [
        "Misc. Devices",
        "Monitoring",
        "Pools & Spas",
        "Water",
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/beta-tuya-zigbee-valve-driver/92788",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya Zigbee Water/Gas Valve driver for Hubitat Elevation hub",
      "documentationUrl": null,
      "id": "hpm:953f1da4-5f70-4845-a157-ca9d36e80c2c",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/development/Drivers/Tuya%20Zigbee%20Valve/packageManifest.json",
      "name": "Tuya Zigbee Valve",
      "observed": {
        "externalHosts": [
          "de.aliexpress.com",
          "fccid.io",
          "gist.github.com",
          "www.aliexpress.com",
          "www.aliexpress.us",
          "www.amazon.com",
          "www.amazon.com.au",
          "www.lidl.de",
          "www.youtube.com",
          "www.zigbee2mqtt.io"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 47
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Tuya ZigBee Vibration Sensor TS0210 driver for Hubitat Elevation hub",
      "documentationUrl": null,
      "id": "hpm:7aa89d9c-bafd-487e-9eed-ade6c948e320",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Tuya%20ZigBee%20Vibration%20Sensor/packageManifest.json",
      "name": "Tuya ZigBee Vibration Sensor",
      "observed": {
        "externalHosts": [
          "fr.aliexpress.com",
          "nl.aliexpress.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Simon Burke (sburke781)",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-tvheadend-epg-importer/86388",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Retrieves current EPG details from an instance of TV HeadEnd, typically installed on a raspberry pi with a TV Hat",
      "documentationUrl": null,
      "id": "manifest:94dbc6ae269b7b8c6364",
      "manifestUrl": "https://raw.githubusercontent.com/sburke781/hubitat/master/TVHE_EPG_Importer/packageManifest.json",
      "name": "TV HeadEnd EPG Importer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Integrations"
      ]
    },
    {
      "author": "James Shimota",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A virtual device driver that seperates allows for accurate twilight date and time components into chunks.  Useful for lighting and night activities",
      "documentationUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/twilight_parser/README.md",
      "id": "manifest:d722aef5ebc7cb3c559a",
      "manifestUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/twilight_parser/packageManifest.json",
      "name": "Twilight Parser",
      "observed": {
        "externalHosts": [
          "api.sunrise-sunset.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Date",
        "Driver",
        "Misc. Devices",
        "Monitoring",
        "Timers",
        "Virtual"
      ]
    },
    {
      "author": "ritchierich",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Send SMS and initiate voice call notifications via the Plivo.",
      "documentationUrl": null,
      "id": "manifest:e523b281b2fa2edc5fca",
      "manifestUrl": "https://raw.githubusercontent.com/mlritchie/Hubitat/master/Drivers/Twilio%20SMS/packageManifest.json",
      "name": "Twilio SMS and Voice Notifications",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Notifications"
      ]
    },
    {
      "author": "JoKneeMo <https://github.com/JoKneeMo>",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/ubiquiti-unifi-protect-cameras/17624/126",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "App and Drivers to control Ubiquiti UniFi Controllers, and to serve UniFi Protect camera snapshots.",
      "documentationUrl": "https://github.com/JoKneeMo/hubitat/blob/main/unificontroller/README.md",
      "id": "hpm:eaf672c1-2a83-4e30-a4bb-1e6c28937428",
      "manifestUrl": "https://raw.githubusercontent.com/JoKneeMo/hubitat/main/unificontroller/packageManifest.json",
      "name": "Ubiquiti UniFi Controller Manager",
      "observed": {
        "externalHosts": [
          "dzone.com",
          "ui.com",
          "www.w3.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 12
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_SERVICE",
              "name": "UniFi Protect Controller",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_API"
            }
          ],
          "documentation": [],
          "id": "unifi-protect",
          "name": "UniFi Protect Integration",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": []
    },
    {
      "author": "Paul Harrison",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-unfolded-circle-remote-3-integration",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Integration for the Unfolded Circle Remote 3 remote control",
      "documentationUrl": null,
      "id": "hpm:6e41b17a-5140-4e77-8210-50727cbda815",
      "manifestUrl": "https://raw.githubusercontent.com/pharrison5/Hubitat/refs/heads/main/UnfoldedCircleIntegration/packageManifest.json",
      "name": "Unfolded Circle Remote 3 Integration",
      "observed": {
        "externalHosts": [
          "paypal.me",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "IR & RF",
        "Multimedia"
      ]
    },
    {
      "author": "Garth Braithwaite",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Control Unifi Access lock via local API",
      "documentationUrl": null,
      "id": "hpm:bc345262-141f-4145-bec1-a56c4788870c",
      "manifestUrl": "https://raw.githubusercontent.com/GarthDB/hubitat-unifi-access/main/packageManifest.json",
      "name": "Unifi Access",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Locks"
      ]
    },
    {
      "author": "Snell",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Drivers for integrating Ubiquiti's Unifi Network API",
      "documentationUrl": null,
      "id": "hpm:a9dec256-8c7f-4d2b-90c0-ca462a9a7379",
      "manifestUrl": "https://www.drdsnell.com/projects/hubitat/drivers/UnifiManifest.json",
      "name": "Unifi Drivers",
      "observed": {
        "externalHosts": [
          "www.drdsnell.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 49,
        "urlLiteralCount": 179
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Lights & Switches",
        "Misc. Devices",
        "Monitoring",
        "Multi Sensors"
      ]
    },
    {
      "author": "Mavrrick",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Unifi Integration Manager for Snell's Unifi Network, Protect, and Connect integrations",
      "documentationUrl": null,
      "id": "hpm:48805193-498a-4e5d-8cc7-60e362545c64",
      "manifestUrl": "https://raw.githubusercontent.com/Mavrrick/Hubitat-by-Mavrrick/refs/heads/main/UniFi/packageManifest.json",
      "name": "Unifi Integration Manager",
      "observed": {
        "externalHosts": [
          "graph.api.smartthings.com",
          "lh4.googleusercontent.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Cloud",
        "Integrations",
        "Lights & Switches",
        "Misc. Devices"
      ]
    },
    {
      "author": "Marc Hedish",
      "category": "Utility",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-unifi-presence-drivers-for-hubitat/156847",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Hubitat driver pair for UniFi presence detection with client and hotspot monitoring.",
      "documentationUrl": "https://github.com/MHedish/Hubitat/blob/main/Drivers/UniFi-Presence-Sensor/README.md",
      "id": "hpm:b68d2d46-e199-46c9-a654-68ec7a1884a6",
      "manifestUrl": "https://raw.githubusercontent.com/MHedish/Hubitat/main/Drivers/UniFi-Presence-Sensor/packageManifest.json",
      "name": "UniFi Presence Drivers",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Monitoring",
        "Presence & Location",
        "Tools & Utilities"
      ]
    },
    {
      "author": "David Snell",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Drivers for integrating Ubiquiti's Unifi Protect API",
      "documentationUrl": null,
      "id": "hpm:db9d9dc8-28fe-40aa-9750-b9d28f69d5ac",
      "manifestUrl": "https://www.drdsnell.com/projects/hubitat/drivers/UnifiProtectManifest.json",
      "name": "Unifi Protect Drivers",
      "observed": {
        "externalHosts": [
          "dzone.com",
          "www.drdsnell.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 8,
        "urlLiteralCount": 64
      },
      "reviewed": [],
      "tags": [
        "Cameras",
        "LAN",
        "Misc. Devices",
        "Monitoring",
        "Multi Sensors",
        "Safety & Security",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Mike Coffey",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/beta-unifi-wifi-presence/32511",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "UniFi Integration with Hubitat for tracking precense and blocking network devices",
      "documentationUrl": null,
      "id": "manifest:5cc934576bd11a098858",
      "manifestUrl": "https://raw.githubusercontent.com/mikec85/hubitatdrivers/master/unifi/packageManifest.json",
      "name": "UniFi-Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 6,
        "urlLiteralCount": 21
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Monitoring",
        "Notifications",
        "Tools & Utilities"
      ]
    },
    {
      "author": "David Snell",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Drivers for getting data and basic control of devices within the Unifi Connect API",
      "documentationUrl": null,
      "id": "hpm:dd2714d5-9772-48e3-9560-0bd3504ca512",
      "manifestUrl": "https://www.drdsnell.com/projects/hubitat/drivers/UnifiConnectManifest.json",
      "name": "UnifiConnectAPI",
      "observed": {
        "externalHosts": [
          "dzone.com",
          "www.drdsnell.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 16,
        "urlLiteralCount": 71
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Misc. Devices",
        "Monitoring"
      ]
    },
    {
      "author": "Simon Burke (sburke781)",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-unified-thermostat-driver-alpha-melcloud-melview-kumo-cloud-and-more-if-you-want",
      "declared": {
        "cloudTag": true,
        "lanTag": true
      },
      "description": "Integrates Mitsubishi Electric Wi-Fi Thermostat platforms in Australia / NZ, Europe and the U.S. using a single unified set of drivers.  Simply select your platform, enter your credentials and start using your thermostat(s) in rules, dashboards and applications.  Multiple units are supported, detected automatically during the authentication / setup process.  There is scope for expanding this to support other thermostats in the future, benefiting from the existing structure and logic built to integrate Mitsubishi platforms.",
      "documentationUrl": "https://github.com/sburke781/hubitat/blob/master/UnifiedThermostat/Readme.md",
      "id": "manifest:c903a182ed6214859619",
      "manifestUrl": "https://raw.githubusercontent.com/sburke781/hubitat/master/UnifiedThermostat/packageManifest.json",
      "name": "Unified Thermostat",
      "observed": {
        "externalHosts": [
          "api.melview.net",
          "app.kumocloud.com",
          "app.melcloud.com",
          "geo-c.kumocloud.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Cloud",
        "LAN",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "sab0276",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-virtual-switch-universal-device-type-udth-good-for-alexa-ifttt-hsm-and-other-integrations/74223",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Virtual Switch with capabilities to integrate almost any device using Alexa, IFTTT, WebHooks, Hubitat Safety Monitor (HSM), and other integrations. Lite version has Switch, Contact, Motion, and Presence sensor capabilities, perfect for Alexa and IFFTT integrations. Super version has Switch, Contact, Motion, Presence, Smoke, Water, Sound, Acceleration, Shock, Sleep, Battery, Filter, Tamper, Illuminance, Valve, Lock, Door Control, and Button sensor capabilities. Has Auto-Off ability to automtically turn the device Off after a certain amount of time. Has Force Status Update ability to always send an event regardless of the device's current status. Ie If the device is On, and an app tries to turn it On, it will still Send/Do the On event.",
      "documentationUrl": "https://community.hubitat.com/t/release-virtual-switch-universal-device-type-udth-good-for-alexa-ifttt-hsm-and-other-integrations/74223",
      "id": "hpm:55966b40-6613-406b-bf90-500be06b781f",
      "manifestUrl": "https://raw.githubusercontent.com/sab0276/Hubitat/main/packageManifest.json",
      "name": "Universal Virtual Device Switch uDTH - For Alexa, IFTTT, WebHooks, HSM, and other integrations",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Buttons",
        "Cloud",
        "Lights & Switches",
        "Locks",
        "Misc. Devices",
        "Motion Control",
        "Presence & Location",
        "Safety & Security",
        "Sleep",
        "Valves",
        "Water"
      ]
    },
    {
      "author": "Jeff Page (@jtp10181)",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/universal-z-wave-drivers/140325",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Package of Universal Drivers and Utilities for modern Z-Wave devices",
      "documentationUrl": "https://github.com/jtp10181/Hubitat/tree/main/Drivers/universal",
      "id": "hpm:772da74e-af07-4205-beff-8bdaa3ec3e82",
      "manifestUrl": "https://raw.githubusercontent.com/jtp10181/Hubitat/main/packageManifest/universal-zwave-drivers.json",
      "name": "Universal Z-Wave Drivers",
      "observed": {
        "externalHosts": [
          "jtp10181.gateway.scarf.sh"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 18
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Lights & Switches",
        "Misc. Devices",
        "Relays",
        "Tools & Utilities",
        "ZWave"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Creates lists of App and Dev code that are not in use by instatiated instances, and allows them to be deleted in mass or individually.",
      "documentationUrl": null,
      "id": "hpm:327fec62-c2a2-48ee-a235-9c3a4935a2a8",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/refs/heads/main/manifests/unusedCodeManifest.json",
      "name": "Unused Code Cleanup",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Improved Everspring/Utilitech Water Sensor with presence and better drop out detection,battery support,and settings, Support to stop the device from drooping off with dead batteries by providing presence and dead bat detection.with info debug and trace logs",
      "documentationUrl": "http://www.winnfreenet.com/wp/2021/09/everspring-utilitech-water-sensor-driver-for-hubitat/",
      "id": "manifest:896ef3fe29f7067b9396",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/Everspring_Utilitech_Water_Sensor.json",
      "name": "Utilitech Water Sensor",
      "observed": {
        "externalHosts": [
          "www.paypal.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Monitoring",
        "Safety & Security",
        "Water",
        "ZWave"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "UtilTech Siren Device Handler but works with any Zwave Siren",
      "documentationUrl": null,
      "id": "hpm:993ddac1-a3cd-4841-9ac6-fb2cd68f19d3",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/MyUtilTechSiren.json",
      "name": "UtilTech Siren Device Handler",
      "observed": {
        "externalHosts": [
          "cdn.device-icons.smartthings.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Safety & Security"
      ]
    },
    {
      "author": "RamSet",
      "category": "Safety",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Warns about UV exposure when an exterior door is opened, with editable per-band messages and an optional siren strobe.",
      "documentationUrl": null,
      "id": "manifest:950ef00eb4531e5457e9",
      "manifestUrl": "https://raw.githubusercontent.com/RamSet/hubitat/refs/heads/main/manifest-uv-alerts.json",
      "name": "UV Exposure Alerts",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "nh.schottfam",
      "category": "Security",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/vacation-lighting-anyone-have-it-running/1454/25",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Vacation Lighting Director controls lights when away",
      "documentationUrl": null,
      "id": "manifest:cbcfc71e2234994bf2e0",
      "manifestUrl": "https://raw.githubusercontent.com/imnotbob/vacation-lighting-director/beta/packageManager.json",
      "name": "Vacation Lighting Director",
      "observed": {
        "externalHosts": [
          "icons.iconarchive.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups",
        "LAN",
        "Safety & Security",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Jed Brown",
      "category": "Safety & Security",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "An enhanced Hibitat app to simulate light and switch behaviors of an occupied home while you are away or on Vacation. Allows many customizations, summary notifications, and easy testing.",
      "documentationUrl": null,
      "id": "manifest:46d5b56fb6047cf1fe95",
      "manifestUrl": "https://raw.githubusercontent.com/jedbro/Hubitat-Projects/refs/heads/main/Vacation%20Lighting%20Simulator/packageManifest.json",
      "name": "Vacation Lighting Simulator",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "lights"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/ikea-trip-what-to-buy/112770/38?u=kkossev",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "VINDSTYRKA Air Quality Monitor - driver for Hubitat Elevation hub",
      "documentationUrl": "https://github.com/kkossev/Hubitat/blob/main/Drivers/VINDSTYRKA%20Air%20Quality%20Monitor/VINDSTYRKA_Air_Quality_Monitor_lib_included.groovy",
      "id": "hpm:922c95be-07e9-4376-a94d-fc702bea7ec9",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/VINDSTYRKA%20Air%20Quality%20Monitor/packageManifest.json",
      "name": "VINDSTYRKA Air Quality Monitor",
      "observed": {
        "externalHosts": [
          "forum.phoscon.de",
          "www.airnow.gov"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 15
      },
      "reviewed": [],
      "tags": [
        "Zigbee"
      ]
    },
    {
      "author": "Aniva",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Visual Dashboard Tile and Logic Proxy for IKEA VINDSTYRKA sensors",
      "documentationUrl": "https://github.com/aniva/hubitat01/blob/master/VindstyrkaTile/README.md",
      "id": "manifest:0d0fc917c62096b122a4",
      "manifestUrl": "https://raw.githubusercontent.com/aniva/hubitat01/master/VindstyrkaTile/packageManifest.json",
      "name": "Vindstyrka Air Quality Tile",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Air Quality",
        "Dashboard",
        "Monitoring"
      ]
    },
    {
      "author": "RamSet",
      "category": "Virtual Devices",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Virtual Air Quality Index (AQI) driver for Hubitat.",
      "documentationUrl": "https://community.hubitat.com/t/dynamic-capabilities-commands-and-attributes-for-drivers/98342",
      "id": "manifest:04345ef0212d62d77fff",
      "manifestUrl": "https://raw.githubusercontent.com/RamSet/hubitat/refs/heads/main/manifest-aqi.json",
      "name": "Virtual AQI Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Simon Burke",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Virtual Battery Sensor driver for storing current battery reading for a device",
      "documentationUrl": null,
      "id": "manifest:e84203689d98c1968bbb",
      "manifestUrl": "https://raw.githubusercontent.com/sburke781/hubitat/master/UtilityDrivers/VirtualBatterySensor/packageManifest.json",
      "name": "Virtual Battery Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Misc. Devices",
        "Monitoring"
      ]
    },
    {
      "author": "James Shimota",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-virtual-inverse-able-switch/81028",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "This switch will show ON but will have a device state of Off if the preference is set to Reverse Actions. Useful for apps that allow a switch to control on-off state but you want to reflect the app not the switch",
      "documentationUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/virtual_inverse-able_switch/README.md",
      "id": "manifest:46ea46475747881a58e5",
      "manifestUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/virtual_inverse-able_switch/packageManifest.json",
      "name": "Virtual Inverse-able Switch w-autoOff and Toggle",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "AutoOff",
        "Dashboards",
        "Lights & Switches",
        "Misc. Devices",
        "Monitoring",
        "Virtual"
      ]
    },
    {
      "author": "Raul Martin Rodriguez",
      "category": "Utility",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": true
      },
      "description": "Is that machine alive? A wrapper for Hubitat. Allows you to create a presence sensor based on an IP health of a remote host.",
      "documentationUrl": null,
      "id": "hpm:7fa11e61-dde1-46a6-b303-cb05771de2b8",
      "manifestUrl": "https://raw.githubusercontent.com/luarmr/hubitat/main/drivers/virtual_ip_presence_sensor/packageManifest.json",
      "name": "Virtual ip presence sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "LAN",
        "Monitoring",
        "Presence & Location"
      ]
    },
    {
      "author": "mbarone",
      "category": "Security",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-virtual-keypad/51825",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Create virtual keypads to control HSM, Mode changes, and other custom commands.  This uses a companion app to more easily setup your virtual keypads. Install/configure instructions are in the '[RELEASE] Virtual Keypad' release thread.",
      "documentationUrl": null,
      "id": "hpm:61d0fabf-d211-4b76-968d-2beed62788d6",
      "manifestUrl": "https://raw.githubusercontent.com/michaelbarone/hubitat/master/packagemanager/packageManifest.json",
      "name": "Virtual Keypad",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Dashboards",
        "Safety & Security"
      ]
    },
    {
      "author": "Ernie Miller",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver providing a virtual motion sensor controlled by a switch, with configurable inactive delay. Useful for connecting things like Motion Lighting to, for instance, a video doorbell via IFTTT.",
      "documentationUrl": null,
      "id": "hpm:faf65dac-40b3-40fc-ab39-5aa0d1a1ce22",
      "manifestUrl": "https://raw.githubusercontent.com/ernie/hubitat/main/drivers/package-manifests/virtual-motion-sensor-with-switch.json",
      "name": "Virtual Motion Sensor with Switch",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "James Shimota",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A virtual device driver that ties Presence, Sensor and Switch (Present/Open/On) capabilities.  Useful for connecting to Alexa, or having Presence give an on/off state",
      "documentationUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/virtual_presence_openclose_switch/README.md",
      "id": "manifest:c3801958aecfce51a594",
      "manifestUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/virtual_presence_openclose_switch/packageManifest.json",
      "name": "Virtual Presence Contact and Switch",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "AutoOn",
        "Dashboards",
        "Lights & Switches",
        "Misc. Devices",
        "Monitoring",
        "Open/Closed",
        "Presence",
        "Virtual"
      ]
    },
    {
      "author": "Mike Bishop",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/prerelease-virtual-prestaging/109556",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Given a primary (likely virtual) device that has the desired values, the selected properties from the primary device will be sent to other devices when they turn on and as the primary changes.",
      "documentationUrl": null,
      "id": "hpm:8080b219-3882-4a61-b094-29a124eb73eb",
      "manifestUrl": "https://raw.githubusercontent.com/MikeBishop/hpm-intermediate/main/virtual-prestage.json",
      "name": "Virtual Prestaging",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Aniva",
      "category": "Utilities",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Virtual battery driver with Actuator capability for Rule Machine integration.",
      "documentationUrl": "https://github.com/aniva/hubitat01/blob/master/VirtualBattery/README.md",
      "id": "manifest:8fec75b8796a3f8fbb0a",
      "manifestUrl": "https://raw.githubusercontent.com/aniva/hubitat01/master/VirtualBattery/packageManifest.json",
      "name": "Virtual Smart Battery (Mutable)",
      "observed": {
        "externalHosts": [
          "paypal.me"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Battery",
        "Dashboard",
        "Monitoring",
        "Rule Machine",
        "Virtual"
      ]
    },
    {
      "author": "Doug Renze",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Turn a switch on/off only when enabled",
      "documentationUrl": "https://github.com/drenze/hubitat-virtual-switch-enabler/tree/main/virtual-switch-enabler/2.x",
      "id": "hpm:9a8e8291-44c3-4e3d-b91c-8768b4690fee",
      "manifestUrl": "https://raw.githubusercontent.com/drenze/hubitat-virtual-switch-enabler/main/virtual-switch-enabler/2.x/packageManifest.json",
      "name": "Virtual Switch Enabler",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Eliot Stocker",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A Virtual Thermostat Device for Hubitat to combine a switch and Temperature sensor into a single device",
      "documentationUrl": "https://github.com/eliotstocker/hubitat-virtual-thermostat/blob/main/README.md",
      "id": "manifest:5810cdae1a20c7fd974e",
      "manifestUrl": "https://raw.githubusercontent.com/eliotstocker/hubitat-virtual-thermostat/main/package-manifest.json",
      "name": "Virtual Thermostat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Bill Fleming",
      "category": "Notifications",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Advanced visual notification system optimized for deaf and hard of hearing users.",
      "documentationUrl": null,
      "id": "hpm:cac2207c-d3bd-41c1-af67-a93dfede9d31",
      "manifestUrl": "https://raw.githubusercontent.com/TechBill/visualalert/master/packageManifest.json",
      "name": "VisualAlert",
      "observed": {
        "externalHosts": [
          "paypal.me",
          "www.buymeacoffee.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Botched1 (Jason Bottjen)",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Vivint CT-200 Thermostat",
      "documentationUrl": null,
      "id": "hpm:ea92d9f5-aa56-468a-83f0-c485175b7f1c",
      "manifestUrl": "https://raw.githubusercontent.com/Botched1/Hubitat/master/packages/Vivint-CT200-Thermostat.json",
      "name": "Vivint CT200 Thermostat",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Climate Control"
      ]
    },
    {
      "author": "Ramdev Shallem",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Wake On Lan  allows you to wake/boot your PC's up from the hub using any automation app you want. It uses its own implication of WakeOnLan so it will probably work even when other solutions fail",
      "documentationUrl": null,
      "id": "manifest:0876b85197ec94de41a6",
      "manifestUrl": "https://raw.githubusercontent.com/gilshallem/Hubitat/main/HPM/wol_package.json",
      "name": "WakeOnLan",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "LAN_PROTOCOL",
          "SEND_HUB_COMMAND",
          "UDP_PROTOCOL"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Misc. Devices",
        "Multimedia",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-warmup-smart-6ie-cloud/100502",
      "declared": {
        "cloudTag": true,
        "lanTag": true
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:68240e38f16e1f6aef15",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Apps/Warmup/Warmup%20-%20Cloud.json",
      "name": "Warmup - Cloud",
      "observed": {
        "externalHosts": [
          "play-lh.googleusercontent.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Cloud",
        "LAN",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Eliot Stocker",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Full integration for WarmUp Branded thermostats including 4ie and more",
      "documentationUrl": "https://github.com/eliotstocker/hubitat-warmup-connect/blob/main/README.md",
      "id": "manifest:1ef22dc6ff91e6161096",
      "manifestUrl": "https://raw.githubusercontent.com/eliotstocker/hubitat-warmup-connect/main/package-manifest.json",
      "name": "Warmup Connect",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Dan Danache (@dandanache)",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-watchtower-long-term-metrics-app/141505",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Watchtower is the all-in-one app for long-term smart home monitoring and data visualization. Staying true to Hubitat's core value, the application works 100% locally, with no reliance on the cloud. Plus, there's no need for extra hardware like Raspberry Pi or NAS.",
      "documentationUrl": "https://codeberg.org/dan-danache/hubitat/src/branch/main/watchtower-app/README.md",
      "id": "hpm:3762a0c1-b4dd-4e61-a521-04e36d8eadde",
      "manifestUrl": "https://codeberg.org/dan-danache/hubitat/raw/branch/main/watchtower-app/packageManifest.json",
      "name": "Watchtower",
      "observed": {
        "externalHosts": [
          "codeberg.org",
          "raw.codeberg.page",
          "www.urbandictionary.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Monitoring",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Brian Wilson",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-waterguru-pool-integration/77922",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Allows you to connect to your pool's WaterGuru device and get Chlorine, pH, flow rate and temperature.",
      "documentationUrl": "https://github.com/bdwilson/hubitat/tree/master/WaterGuru",
      "id": "manifest:cda95eedc5f5df012d02",
      "manifestUrl": "https://raw.githubusercontent.com/bdwilson/hubitat/master/WaterGuru/packageManifest.json",
      "name": "WaterGuru Integration",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Pools & Spas",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Ernie Miller",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-snapav-wattbox-driver/55133",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for SnapAV WattBox surge protectors supporting telnet API. Tested with WB-250-IPW-2.",
      "documentationUrl": null,
      "id": "hpm:bee4b304-ed22-41eb-85ad-431b02211a6c",
      "manifestUrl": "https://raw.githubusercontent.com/ernie/hubitat/main/drivers/package-manifests/wattbox.json",
      "name": "WattBox",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Misc. Devices"
      ]
    },
    {
      "author": "n3!",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Now using OW API 3.0 - Polls weather information from OpenWeatherMap 3.0 and Weather Environment Canada (Alert RSS Feed - https://weather.gc.ca/)",
      "documentationUrl": null,
      "id": "manifest:161490844283368cda70",
      "manifestUrl": "https://raw.githubusercontent.com/dmike3/Hubitat/master/hpm/weather%20canada%20(owm-ec)/packageManifest.json",
      "name": "Weather Canada (OWM3.0-EC)",
      "observed": {
        "externalHosts": [
          "api.openweathermap.org",
          "openweathermap.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Weather"
      ]
    },
    {
      "author": "Matthew Scott",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-weather-display-with-darksky-net-forecast-driver/22613",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Weather-Display With DarkSky.net Forecast Driver",
      "documentationUrl": "https://github.com/HubitatCommunity/Weather-Display-With-DarkSky.net-Forecast-Driver/wiki/Weather-Display-with-DarkSky.net-Forecast-Driver-Wiki",
      "id": "manifest:59161adb125683812dcc",
      "manifestUrl": "https://raw.githubusercontent.com/Scottma61/Hubitat/master/docs/WD_packageManifest.json",
      "name": "Weather-Display With DarkSky.net Forecast Driver",
      "observed": {
        "externalHosts": [
          "alerts.weather.gov",
          "api.darksky.net",
          "api.sunrise-sunset.org",
          "darksky.net",
          "hubitatcommunity.github.io",
          "tinyurl.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 29
      },
      "reviewed": [],
      "tags": [
        "Weather"
      ]
    },
    {
      "author": "Matthew Scott",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-weather-display-with-owm-alerts-forecast-driver/38557",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Weather-Display With OWM-Alerts Forecast Driver",
      "documentationUrl": "https://github.com/HubitatCommunity/Weather-Display-With-OWM-Alerts-Forecast-Driver/wiki",
      "id": "manifest:3ea10b3d80aa03496d06",
      "manifestUrl": "https://raw.githubusercontent.com/Scottma61/Hubitat/master/docs/WDOWMAlerts_packageManifest.json",
      "name": "Weather-Display With OWM-Alerts Forecast Driver",
      "observed": {
        "externalHosts": [
          "api.openweathermap.org",
          "api.weather.gov",
          "forecast.weather.gov",
          "hubitatcommunity.github.io",
          "openweathermap.org",
          "tinyurl.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 33
      },
      "reviewed": [],
      "tags": [
        "Weather"
      ]
    },
    {
      "author": "David Snell",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Drivers to access the WeatherFlow API",
      "documentationUrl": null,
      "id": "hpm:626a5598-3385-40b9-a603-44b841fea140",
      "manifestUrl": "https://www.drdsnell.com/projects/hubitat/drivers/WeatherFlow.json",
      "name": "WeatherFlow",
      "observed": {
        "externalHosts": [
          "swd.weatherflow.com",
          "www.drdsnell.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 11
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "WeatherFlow Station / Service",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_OR_HTTPS"
            }
          ],
          "documentation": [],
          "id": "weatherflow",
          "name": "WeatherFlow Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Cloud",
        "Monitoring",
        "Temperature & Humidity",
        "Weather"
      ]
    },
    {
      "author": "Justin Walker (augoisms)",
      "category": null,
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-weatherflow-lite/44674",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "A pared-down weather driver that subscribes to your WeatherFlow station devices using the WebSocket API",
      "documentationUrl": null,
      "id": "manifest:8d27625ec48679b4b54b",
      "manifestUrl": "https://raw.githubusercontent.com/augoisms/hubitat/master/weatherflow/packageManifest.json",
      "name": "WeatherFlow Lite",
      "observed": {
        "externalHosts": [
          "community.weatherflow.com",
          "swd.weatherflow.com",
          "weatherflow.github.io"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "WeatherFlow Station / Service",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_OR_HTTPS"
            }
          ],
          "documentation": [],
          "id": "weatherflow",
          "name": "WeatherFlow Integration",
          "status": "COMMUNITY_SEED"
        }
      ],
      "tags": [
        "Cloud",
        "Weather"
      ]
    },
    {
      "author": "Craig Dewar",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "This is a driver for the free weatherstack API. They provide 1,000 free calls per month so you can run an hourly refresh rate. It also calculates luminance seperately and can undate this more frequently.",
      "documentationUrl": null,
      "id": "hpm:f145ab43-b484-4cab-9840-81a42938fb3f",
      "manifestUrl": "https://raw.githubusercontent.com/craigde/hubitat-weatherstation/master/packageManifest.json",
      "name": "Weatherstation weather driver",
      "observed": {
        "externalHosts": [
          "api.sunrise-sunset.org",
          "api.weatherstack.com",
          "cdn.rawgit.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 14
      },
      "reviewed": [],
      "tags": [
        "Weather"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Utility",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Scrapes a web site for a search string and returns data based on offset of the search.  Can be run as a one time or a periodic search",
      "documentationUrl": null,
      "id": "hpm:f26defed-d4a6-4c4a-a37c-eca001ccea7b",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/webScrapeManifest.json",
      "name": "Web Scraper Device",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "imnot_bob",
      "category": "Utility",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/webcore-for-hubitat-updates/11967",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "webCoRE for Hubitat - run webCoRE pistons (automations) locally on your Hubitat system",
      "documentationUrl": "https://wiki.webcore.co",
      "id": "manifest:f5e037b28e36018236ad",
      "manifestUrl": "https://raw.githubusercontent.com/imnotbob/webCoRE/hubitat-patches/HE/packageManager.json",
      "name": "webCoRE",
      "observed": {
        "externalHosts": [
          "ajax.googleapis.com",
          "api.apixu.com",
          "api.darksky.net",
          "api.lifx.com",
          "api.openweathermap.org",
          "api.webcore.co",
          "cdn.jsdelivr.net",
          "cdn.rawgit.com",
          "cdnjs.cloudflare.com",
          "code.getmdl.io",
          "code.jquery.com",
          "dashboard.webcore.co",
          "embed.windy.com",
          "fonts.googleapis.com",
          "getmdl.io",
          "maker.ifttt.com",
          "maxcdn.bootstrapcdn.com",
          "unpkg.com",
          "wiki.webcore.co",
          "www.google.com",
          "www.gstatic.com",
          "www.shareicon.net"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 7,
        "urlLiteralCount": 80
      },
      "reviewed": [
        {
          "dependencies": [],
          "documentation": [],
          "id": "webcore",
          "name": "webCoRE",
          "status": "VERIFIED_COMMUNITY"
        },
        {
          "dependencies": [],
          "documentation": [
            {
              "sourceType": "HUBITAT_OFFICIAL_DOC",
              "title": "webCoRE",
              "url": "https://docs2.hubitat.com/en/apps/webcore"
            }
          ],
          "id": "webcore-native",
          "name": "webCoRE",
          "status": "OFFICIAL_DOC_BUILTIN"
        }
      ],
      "tags": [
        "Automations & Groups",
        "Dashboards",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-weewx-weather-station-to-hubitat-driver/44866",
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Driver to provide a direct (local) connection between WeeWX and Hubitat",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/drivers/weewx",
      "id": "manifest:f1c004573a35cb11854f",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/weewx.json",
      "name": "WeeWX (weather station) to Hubitat driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "PARSE_LAN_MESSAGE"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Weather"
      ]
    },
    {
      "author": "Brian Wilson",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-weewx-local-capabilities/17709",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Allows you to bring capabilities like outdoor temp, humidity, wind, pressure and detailed rain totals (rate, today, yesterday, 2-7 day, week) from Weewx into Hubitat.  Switch will control if its wet/dry for use with Simple Irrigation app",
      "documentationUrl": null,
      "id": "manifest:70ec22cbbfacf59cab6b",
      "manifestUrl": "https://raw.githubusercontent.com/bdwilson/hubitat/master/Weewx/packageManifest.json",
      "name": "Weewx Local Capabilities",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Weather"
      ]
    },
    {
      "author": "Kurt Sanders",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Provides a device driver to access to your Weight Guru bathroom scale biometric data.",
      "documentationUrl": "https://github.com/KurtSanders/HubitatPackages/tree/master/resources/apps/Weight-Guru",
      "id": "hpm:36ae3325-5561-426e-a706-384c151f8a7d",
      "manifestUrl": "https://raw.githubusercontent.com/KurtSanders/HubitatPackages/refs/heads/master/resources/apps/Weight-Guru/packageManifest.json",
      "name": "Weight Guru Bathroom Scale Integration",
      "observed": {
        "externalHosts": [
          "api.weightgurus.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Bathroom",
        "Health & Fitness",
        "Monitoring",
        "Multi Sensors",
        "Scales"
      ]
    },
    {
      "author": "Marc Hedish",
      "category": "Weather",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/wet-it-weather-enhanced-time-based-irrigation-tuning-for-hubitat/160224",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Local-first evapotranspiration (ET) and soil-moisture modeling app for Hubitat. Provides professional-grade irrigation intelligence similar to Rachio, Orbit, and Hydrawise, running entirely on-hub.",
      "documentationUrl": "https://github.com/MHedish/Hubitat/blob/main/Apps/WET-IT/DOCUMENTATION.md",
      "id": "hpm:d95aab44-9ed5-4f8a-8c6d-341c60c7407b",
      "manifestUrl": "https://raw.githubusercontent.com/MHedish/Hubitat/main/Apps/WET-IT/packageManifest.json",
      "name": "WET-IT",
      "observed": {
        "externalHosts": [
          "api.geoapify.com",
          "api.open-meteo.com",
          "api.openweathermap.org",
          "api.sunrise-sunset.org",
          "api.tomorrow.io",
          "api.weather.gov",
          "iso3166-2-api.vercel.app",
          "sdmdataaccess.nrcs.usda.gov",
          "sdmdataaccess.sc.egov.usda.gov",
          "sunrise-sunset.org",
          "swd.weatherflow.com",
          "www.geoapify.com",
          "www.openstreetmap.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 40
      },
      "reviewed": [],
      "tags": [
        "Automation",
        "Irrigation",
        "Weather"
      ]
    },
    {
      "author": "Aniva",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Cloud Bridge Integration Driver for WiMeter Energy Monitoring solution",
      "documentationUrl": "https://github.com/aniva/hubitat01/blob/master/WimeterDriver/README.md",
      "id": "manifest:2f745aeadadbe76da68a",
      "manifestUrl": "https://raw.githubusercontent.com/aniva/hubitat01/master/WimeterDriver/packageManifest.json",
      "name": "WiMeter Cloud Bridge Driver",
      "observed": {
        "externalHosts": [
          "paypal.me",
          "wimeter.net"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Energy",
        "Monitoring"
      ]
    },
    {
      "author": "Eduardo Simioni",
      "category": "Convenience",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A Zigbee window shade driver that uses open/close times to calculate position.",
      "documentationUrl": null,
      "id": "hpm:f9e1f5b0-c5e5-4f3c-b8f9-2e1b8a0b1b9e",
      "manifestUrl": "https://raw.githubusercontent.com/esimioni/hubitat-window-shade-timed/main/manifest.json",
      "name": "Window Shade Timed",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Window Coverings",
        "Zigbee"
      ]
    },
    {
      "author": "Ryan Elliott",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "An app for checking contact sensors for house fans",
      "documentationUrl": null,
      "id": "hpm:bb7eeee2-2856-412e-b88a-161cc61a4be8",
      "manifestUrl": "https://raw.githubusercontent.com/FriedCheese2006/WindowTrackerPlus/main/WindowTracker.json",
      "name": "Window Tracker",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups",
        "Multi Sensors",
        "Tools & Utilities",
        "Utility"
      ]
    },
    {
      "author": "Andrew Nunes",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "Read a Windows computer Task Schedule for Hubitat to determine its state of charge",
      "documentationUrl": null,
      "id": "hpm:8c97796f-4bbd-40eb-a472-352c0e4282e9",
      "manifestUrl": "https://raw.githubusercontent.com/pentalingual/Hubitat/main/Windows/packageManifest.json",
      "name": "Windows Battery Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "LAN",
        "Misc. Devices"
      ]
    },
    {
      "author": "rbyrbt",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Connect and control Winix air purifiers",
      "documentationUrl": "https://github.com/rbyrbt/Hubitat/blob/main/WinixAirPurifiers/README.md",
      "id": "manifest:e263ffe016ee04d485a6",
      "manifestUrl": "https://raw.githubusercontent.com/rbyrbt/Hubitat/main/WinixAirPurifiers/packageManifest.json",
      "name": "Winix Air Purifiers",
      "observed": {
        "externalHosts": [
          "cognito-identity.us-east-1.amazonaws.com",
          "cognito-idp.us-east-1.amazonaws.com",
          "us.api.winix-iot.com",
          "us.mobile.winix-iot.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 18
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Cloud",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "lnjustin",
      "category": "Dashboards",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Withings Integration",
      "documentationUrl": null,
      "id": "manifest:1349291f5c700eb34952",
      "manifestUrl": "https://raw.githubusercontent.com/lnjustin/hubitat-withings/master/packageManifest.json",
      "name": "Withings",
      "observed": {
        "externalHosts": [
          "account.withings.com",
          "cloud.hubitat.com",
          "s3.amazonaws.com",
          "wbsapi.withings.net",
          "www.paypal.com",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 7,
        "urlLiteralCount": 19
      },
      "reviewed": [],
      "tags": [
        "Health & Fitness",
        "Integrations",
        "Scales",
        "Sleep",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Dominick Meglio",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-withings-integration/43111",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integrate your Withings devices with Hubitat.",
      "documentationUrl": "https://github.com/dcmeglio/hubitat-withings/blob/master/README.md",
      "id": "hpm:a818ff1e-aae6-455e-91da-c5e6443fa54c",
      "manifestUrl": "https://raw.githubusercontent.com/dcmeglio/hubitat-withings/master/packageManifest.json",
      "name": "Withings Integration",
      "observed": {
        "externalHosts": [
          "account.withings.com",
          "cloud.hubitat.com",
          "s3.amazonaws.com",
          "wbsapi.withings.net",
          "www.paypal.com",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 7,
        "urlLiteralCount": 19
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Health & Fitness",
        "Scales",
        "Sleep"
      ]
    },
    {
      "author": "joyfulhouse",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": "WLED Device Type for Hubitat",
      "documentationUrl": null,
      "id": "hpm:232db656-52d1-4efa-b4d7-106c83c0c9c1",
      "manifestUrl": "https://www.hubitatcommunity.com/hpm/WLEDDriver/packageManifest.json",
      "name": "WLED Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Automations & Groups",
        "LAN",
        "Lights & Switches"
      ]
    },
    {
      "author": "Tim Dodd",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A driver for controlling WLED devices over MQTT.  Features include on/off, dimming, RGB color control, color temperature, effects with speed/intensity, palettes, presets, and multi-segment support.",
      "documentationUrl": null,
      "id": "hpm:64d7d318-88f5-42b3-844d-d65c6a9c9255",
      "manifestUrl": "https://raw.githubusercontent.com/timothydodd/hubitat-wled-mqtt/master/packageManifest.json",
      "name": "WLED MQTT LED Driver Plus",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "obeisser",
      "category": "Lighting",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/157418",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "An optimized and feature-rich driver for WLED controllers.",
      "documentationUrl": "https://github.com/obeisser/hubitat-drivers/blob/main/WLED/readme.md",
      "id": "hpm:4a2ff0a8-1dbd-4ce3-b4cd-bf4bc773b63b",
      "manifestUrl": "https://raw.githubusercontent.com/obeisser/hubitat-drivers/main/WLED/packageManifest.json",
      "name": "WLED Universal Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Integration",
        "Lighting",
        "WLED"
      ]
    },
    {
      "author": "Wesley M. Conner",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Create virtual keypads with mutually-exclusive buttons and corresponding virtual switches.",
      "documentationUrl": "https://github.com/WesleyMConner/WmcPbsg/blob/main/README.adoc",
      "id": "hpm:0f1c3181-1c96-4b88-bf48-8120bde75648",
      "manifestUrl": "https://raw.githubusercontent.com/WesleyMConner/HpmNavigation/main/pkgs/WmcPbsg/WmcPbsg_1.0.0.json",
      "name": "Wmc Pbsg (Push Button Switch Group)",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Lights & Switches",
        "Misc. Devices",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Wesley M. Conner",
      "category": "Convenience",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "General-purpose functions leveraged in downstream Wmc Apps & Devices",
      "documentationUrl": "https://raw.githubusercontent.com/WesleyMConner/WmcUtil/main/README.adoc",
      "id": "hpm:efadea22-e44c-4dc4-a73e-3ac4d975e12a",
      "manifestUrl": "https://raw.githubusercontent.com/WesleyMConner/HpmNavigation/main/pkgs/WmcUtils/WmcUtils_1.0.0.json",
      "name": "Wmc Utils",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities"
      ]
    },
    {
      "author": "Patrick Wogan",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/lightwave-gen2-integration-wogalwrf/63447",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integrate Lightwave Gen2 environment into your Hubitat system",
      "documentationUrl": "https://community.hubitat.com/t/lightwave-gen2-integration-wogalwrf/63447",
      "id": "hpm:9b1aacfd-13de-4076-8703-cc6fc835dfce",
      "manifestUrl": "https://raw.githubusercontent.com/wogapat/HubitatApps/main/WogaLWRF/PackageManifest.json",
      "name": "WogaLWRF Lightwave Integration",
      "observed": {
        "externalHosts": [
          "auth.lightwaverf.com",
          "my.lightwaverf.com",
          "publicapi.lightwaverf.com",
          "www.paypal.com",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Lights & Switches"
      ]
    },
    {
      "author": "David Snell",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Drivers to access a variety of Weather Services such as the UK Met Office, US Weather.gov, OpenWeather, Weather API, Weather Underground, and World Weather Online",
      "documentationUrl": null,
      "id": "hpm:1ad94c69-cfa0-48d8-9810-a87f193fd155",
      "manifestUrl": "https://www.drdsnell.com/projects/hubitat/drivers/WSM4Hubitat.json",
      "name": "WSM4Hubitat",
      "observed": {
        "externalHosts": [
          "api-metoffice.apiconnect.ibmcloud.com",
          "api.openweathermap.org",
          "api.weather.com",
          "api.weather.gov",
          "api.weatherapi.com",
          "api.worldweatheronline.com",
          "data.hub.api.metoffice.gov.uk",
          "openweathermap.org",
          "www.drdsnell.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 30
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Monitoring",
        "Temperature & Humidity",
        "Weather"
      ]
    },
    {
      "author": "Brian Wilson",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-wyze-vacuum-integration-cloud/165866",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Native integration for Wyze Robot Vacuums (200S/JA_RO2) -- room-based rotation cleaning, room timing learning mode, and status monitoring, no external server required",
      "documentationUrl": "https://github.com/bdwilson/hubitat/tree/master/Wyze-Vacuum",
      "id": "manifest:f16abae3d651b4d91303",
      "manifestUrl": "https://raw.githubusercontent.com/bdwilson/hubitat/master/Wyze-Vacuum/packageManifest.json",
      "name": "Wyze Vacuum Connect",
      "observed": {
        "externalHosts": [
          "developer-api-console.wyze.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 9
      },
      "reviewed": [],
      "tags": [
        "Appliances"
      ]
    },
    {
      "author": "Jake Lehner",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/79504",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integration for Wyze devices using the Wyze API (Key Required).",
      "documentationUrl": null,
      "id": "hpm:b61c0689-1ba4-4ac9-a227-b380a354c79c",
      "manifestUrl": "https://raw.githubusercontent.com/fieldsjm/Hubitat-2/master/WyzeHub/packageManifest.json",
      "name": "WyzeHub (Updated to Use API Key)",
      "observed": {
        "externalHosts": [
          "developer-api-console.wyze.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 9,
        "urlLiteralCount": 22
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "Lights & Switches",
        "Multimedia"
      ]
    },
    {
      "author": "Mathew Beall",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://github.com/mathewbeall/hubitat-xsense-integration",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Complete Hubitat integration for X-Sense smoke and CO detectors (SC07-MR and compatible models) via the SBS50 bridge. Features AWS Cognito SRP authentication, AWS IoT Shadow API for device status, configurable polling intervals, and automatic child device creation.",
      "documentationUrl": "https://github.com/mathewbeall/hubitat-xsense-integration/blob/main/README.md",
      "id": "manifest:7c8d16c3e384a1f88884",
      "manifestUrl": "https://raw.githubusercontent.com/mathewbeall/hubitat-xsense-integration/main/packageManifest.json",
      "name": "X-Sense Smoke/CO Detector Integration",
      "observed": {
        "externalHosts": [
          "api.x-sense-iot.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Cloud",
        "CO Detector",
        "Safety",
        "Smoke Detector",
        "X-Sense"
      ]
    },
    {
      "author": "Rory Jaffe",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/made-a-set-of-xbee3-repeaters-in-cases/44049?u=rsjaffe",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for XBee3 configured to report voltage and chip temperature",
      "documentationUrl": null,
      "id": "manifest:737bdecac8830906d58f",
      "manifestUrl": "https://raw.githubusercontent.com/rsjaffe/Hubitat/master/Xbee3/packageManifest.json",
      "name": "XBee3",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Repeaters & Extenders",
        "Zigbee"
      ]
    },
    {
      "author": "hubitrep",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for Universal Electronics / Visonic / Xfinity Zigbee contact sensors - contact, temperature, tamper, and battery with configurable reporting intervals.",
      "documentationUrl": null,
      "id": "hpm:11f6b093-755a-4dc0-92aa-557b2a5df37f",
      "manifestUrl": "https://raw.githubusercontent.com/hubitrep/hubitat/refs/heads/main/XfinityContactSensor/packageManifest.json",
      "name": "Xfinity / Visonic / UEI Contact Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "LOCAL_BRIDGE",
              "name": "Alarm Panel / Bridge",
              "runtimeCriticality": "RUNTIME",
              "transport": "LAN_OR_SERIAL_GATEWAY"
            }
          ],
          "documentation": [],
          "id": "alarm-bridge",
          "name": "Alarm Bridge",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Doors & Windows",
        "Temperature & Humidity",
        "Zigbee"
      ]
    },
    {
      "author": "Andrew Davison",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers for Xiaomi devices connected via Zigbee2MQTT Routing.",
      "documentationUrl": "https://github.com/birdslikewires/hubitat/tree/main/xiaomi",
      "id": "hpm:f8c2fa78-3676-4614-826d-2d5f2773c2c4",
      "manifestUrl": "https://raw.githubusercontent.com/birdslikewires/hubitat/main/xiaomi/packageManifest.json",
      "name": "Xiaomi Drivers via Zigbee2MQTT from BirdsLikeWires",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 3
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Lights & Switches",
        "MQTT",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": true
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:b04e17f73cf5ae39c9ce",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Xiaomi/Xiaomi%20Mijia.json",
      "name": "Xiaomi Mijia",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "LAN",
        "Temperature & Humidity"
      ]
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with model GZCGQ01LM.",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-xiaomi-mijia-smart-light-sensor",
      "id": "manifest:867305c18d86fd7cec84",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-xiaomi-mijia-smart-light-sensor.json",
      "name": "Xiaomi Mijia Smart Light Sensor (Zigbee 3.0)",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with models MCCGQ01LM & MCCGQ11LM.",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-xiaomi-aqara-contact-sensor",
      "id": "manifest:24c6e99546672b1f343a",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-xiaomi-aqara-contact-sensor.json",
      "name": "Xiaomi/Aqara Contact Sensor",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with models RTCGQ01LM & RTCGQ11LM.",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-xiaomi-aqara-motion-sensor",
      "id": "manifest:89f1181d00ea9fd492e0",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-xiaomi-aqara-motion-sensor.json",
      "name": "Xiaomi/Aqara Motion Sensor",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with models ZNCZ02LM, ZNCZ12LM(needs testing) & QBCZ11LM.",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-xiaomi-aqara-plug-outlet",
      "id": "manifest:2793bd2b63b62e50b489",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-xiaomi-aqara-plug-outlet.json",
      "name": "Xiaomi/Aqara Plug/Outlet",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Brent Rossow",
      "category": "Temperature & Humidity",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Community fork with bug fixes for Xiaomi and Aqara Zigbee temperature and humidity sensors.",
      "documentationUrl": "https://github.com/brossow/hubitat-drivers/tree/main/xiaomi-aqara/th-sensor",
      "id": "hpm:fb617f88-8840-4b3d-a383-de4559c2e837",
      "manifestUrl": "https://raw.githubusercontent.com/brossow/hubitat-drivers/main/xiaomi-aqara/th-sensor/packageManifest.json",
      "name": "Xiaomi/Aqara Temperature & Humidity Sensor",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Temperature & Humidity",
        "Zigbee"
      ]
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with models WSDCGQ01LM & WSDCGQ11LM.",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-xiaomi-aqara-temperature-humidity",
      "id": "manifest:ba3f8f54ccf1fcd9880a",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-xiaomi-aqara-temperature-humidity.json",
      "name": "Xiaomi/Aqara Temperature & Humidity Sensor",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Markus",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.oh-lalabs.com/t/release-xiaomi-aqara-opple-drivers-with-presence/77?u=markus",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with models WXKG01LM, WXKG11LM (2015 & 2018), WXKG12LM, WXKG02LM (2016 & 2018), WXKG03LM (2016 & 2018), WXCJKG11LM, WXCJKG12LM & WXCJKG13LM.",
      "documentationUrl": "https://oh-lalabs.com/docs/zigbee-xiaomi-aqara-opple-button-switch-remote",
      "id": "manifest:2a4460ab147e76c31783",
      "manifestUrl": "https://raw.githubusercontent.com/markus-li/Hubitat/release/packages/zigbee-xiaomi-aqara-opple-button-switch-remote.json",
      "name": "Xiaomi/Aqara/Opple Button/Switch/Remote",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Trunzoc/Sleuth",
      "category": "Security",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/adding-doorsense-to-z-wave-yale-driver/145394",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Yale assure lock 2 series lock driver includes DoorSense, lockcode manager, biometric unlock and ZW3 module support",
      "documentationUrl": "https://community.hubitat.com/t/adding-doorsense-to-z-wave-yale-driver/145394",
      "id": "manifest:5cf87f7cd4c159334c4c",
      "manifestUrl": "https://raw.githubusercontent.com/sleuth255/Yale_YRD4xx_Hubitat_driver/refs/heads/master/packageManifest.json",
      "name": "Yale Assure Lock 2 Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Locks",
        "ZWave"
      ]
    },
    {
      "author": "Steven Dale",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Yale Home WiFi Bridge Locks & Keypads",
      "documentationUrl": null,
      "id": "hpm:d6d4fa41-a725-4b01-b879-64c9303bf743",
      "manifestUrl": "https://raw.githubusercontent.com/tmleafs/hubitat-packages/main/packages/yalehomeManifest.json",
      "name": "Yale Home",
      "observed": {
        "externalHosts": [
          "medium.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Steven Barcus",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/released-beta-yolink-device-service-app-and-drivers-to-connect-hubitat-to-yolink-devices/96432",
      "declared": {
        "cloudTag": true,
        "lanTag": false
      },
      "description": "Integrates YoLink hub and device control within Hubitat.",
      "documentationUrl": "https://github.com/srbarcus/yolink/wiki",
      "id": "hpm:1826c98e-3343-4287-a666-5cb0a79ecfb2",
      "manifestUrl": "https://raw.githubusercontent.com/srbarcus/YoLink/master/packageManifest.json",
      "name": "YoLink Devices",
      "observed": {
        "externalHosts": [
          "api.yosmart.com",
          "cdn.device-icons.smartthings.com",
          "www.paypal.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 30,
        "urlLiteralCount": 67
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "YoLink Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "yolink",
          "name": "YoLink Device Service",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Cloud",
        "Misc. Devices",
        "Speakers"
      ]
    },
    {
      "author": "Albert Mulder",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/yolink-local-hub-hubitat-local-only-app-drivers-beta/156494",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "YoLink Local Hub integration. App + MQTT required; device drivers optional/selectable.",
      "documentationUrl": "https://github.com/almulder/Hubitat-Drivers/tree/main/Yolink%20Local%20Hub",
      "id": "manifest:563018ccd0524c56d8c3",
      "manifestUrl": "https://raw.githubusercontent.com/almulder/Hubitat-Drivers/main/hpm/yolink-local-hub.json",
      "name": "YoLink™ Local Hub Connector",
      "observed": {
        "externalHosts": [
          "cdn.device-icons.smartthings.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 7,
        "urlLiteralCount": 16
      },
      "reviewed": [
        {
          "dependencies": [
            {
              "class": "EXTERNAL_SERVICE",
              "name": "YoLink Cloud",
              "runtimeCriticality": "RUNTIME",
              "transport": "CLOUD_API"
            }
          ],
          "documentation": [],
          "id": "yolink",
          "name": "YoLink Device Service",
          "status": "VERIFIED_COMMUNITY"
        }
      ],
      "tags": [
        "Misc. Devices",
        "MQTT"
      ]
    },
    {
      "author": "Aaron Ward",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-you-got-mail/17946",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "You Got Mail is a notification application that provides notifications when a contact sensor is open on a mailbox. This application supports Pushover, Music Speakers, Speech Speakers, Echo Speaks devices and Google devices for notifications. Application allows for custom notifications, random messages and mail delivery time window. Notification options if mailbox was left open.",
      "documentationUrl": null,
      "id": "manifest:86f794f6af8d1088e219",
      "manifestUrl": "https://raw.githubusercontent.com/PrayerfulDrop/Hubitat/master/You%20Got%20Mail/packageManifest.json",
      "name": "You Got Mail",
      "observed": {
        "externalHosts": [
          "paypal.me",
          "www.paypalobjects.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Eric Maycock",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Inovelli Tool to create direct associations between Z-Wave devices.",
      "documentationUrl": null,
      "id": "manifest:2c698b661ab7e987ccd7",
      "manifestUrl": "https://raw.githubusercontent.com/InovelliUSA/Hubitat/master/Apps/z-waveat.json",
      "name": "Z-Wave Association Tool",
      "observed": {
        "externalHosts": [
          "s3.amazonaws.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Bryan Copeland",
      "category": "Utility",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-z-wave-firmware-updater/38237?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Z-Wave Firmware Updater Integrations Driver",
      "documentationUrl": null,
      "id": "manifest:8a75c75e2bcc7ece7c73",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/zwaveFirmwareUpdater.json",
      "name": "Z-Wave Firmware Updater",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Utility",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:c5280486f89c15df8fd7",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Generic/Z-Wave%20Repeater.json",
      "name": "Z-Wave Range Extender",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Repeaters & Extenders",
        "ZWave"
      ]
    },
    {
      "author": "Amos Yuen",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-zemismart-zigbee-blind-driver/67525",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Zemismart zigbee blind device driver",
      "documentationUrl": "https://github.com/amosyuen/hubitat-zemismart-zigbee/blob/main/README.md",
      "id": "manifest:6ef43be3691874b40ec2",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/zemismart-zigbee-blind/refs/heads/main/packageManifest.json",
      "name": "Zemismart Zigbee Blind",
      "observed": {
        "externalHosts": [
          "developer.tuya.com",
          "www.ajaxonline.co.uk",
          "www.aliexpress.com",
          "www.zemismart.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 25
      },
      "reviewed": [],
      "tags": [
        "Window Coverings",
        "Zigbee"
      ]
    },
    {
      "author": "Muxa, kkossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/zemismart-zigbee-1-2-3-4-gang-light-switches/21124/36?u=kkossev",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Muxa's popular Zemismart ZigBee Wall Switch Multi-Gang. Works with Tuya models TS0001,TS0002, TS0003, TS0004, TS0011, TS0012, TS0013, TS0115, TS011F",
      "documentationUrl": "https://community.hubitat.com/t/zemismart-zigbee-1-2-3-4-gang-light-switches/21124/36?u=kkossev",
      "id": "hpm:e720ee9e-fe3a-47b2-acdc-43db91d84782",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/hubitat-muxa-fork/master/drivers/manifest.json",
      "name": "Zemismart ZigBee Wall Switch Multi-Gang",
      "observed": {
        "externalHosts": [
          "developer.tuya.com",
          "expo.tuya.com",
          "nodon.pro",
          "pl.aliexpress.com",
          "www.aliexpress.com",
          "zigbee.blakadder.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 31
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Zigbee"
      ]
    },
    {
      "author": "UltronOfSpace",
      "category": "Convenience",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-zen32-led-coordinator-keeps-your-zen32-button-leds-honest/165070",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Syncs Zooz ZEN32 scene controller button LEDs with the state of other devices (switches, plugs, anything on/off). Per-button or global colors, button actions, relay LED handling, reboot re-sync.",
      "documentationUrl": "https://github.com/UltronOfSpace/Hubitat/blob/main/Zen32/README.md",
      "id": "hpm:3c56bc73-ed51-4154-9efe-6720dbc2f08c",
      "manifestUrl": "https://raw.githubusercontent.com/UltronOfSpace/Hubitat/main/Zen32/packageManifest.json",
      "name": "Zen32 LED Coordinator",
      "observed": {
        "externalHosts": [
          "buymeacoffee.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-tuya-scene-switch-ts004f-driver-w-healthstatus/92823/3",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Zigbee Buttons Dimmers",
      "documentationUrl": "https://community.hubitat.com/t/release-tuya-scene-switch-ts004f-driver-w-healthstatus/92823/3",
      "id": "hpm:7d3627fd-27c6-4784-a76a-4f2eded51168",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/main/Drivers/Zigbee%20Button%20Dimmer/packageManifest.json",
      "name": "Zigbee Button Dimmer",
      "observed": {
        "externalHosts": [
          "sensirion.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 19
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Zigbee"
      ]
    },
    {
      "author": "Samuel C. Auclair",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/drivers-for-zigbee-sinope-devices/91960",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Drivers to take some features that are not included into the default driver, as the outside temperature or the energy meter",
      "documentationUrl": null,
      "id": "manifest:29eccf24a970f806ce9d",
      "manifestUrl": "https://raw.githubusercontent.com/sacua/SinopeDriverHubitat/main/drivers/packageManifest.json",
      "name": "Zigbee Driver for Sinope device",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 6,
        "urlLiteralCount": 43
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Energy Monitoring",
        "Repeaters & Extenders",
        "Zigbee"
      ]
    },
    {
      "author": "SORS",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/sinope-sw2500zb-driver/155673",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Sinope Switch SW2500ZB driver with support of energy meter, single, double and long taps",
      "documentationUrl": null,
      "id": "manifest:3788894a04d379e960fe",
      "manifestUrl": "https://raw.githubusercontent.com/sorsme/sinope-switch/main/src/packageManifest.json",
      "name": "Zigbee Driver for Sinope SW2500ZB",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Switch",
        "Zigbee"
      ]
    },
    {
      "author": "James Shimota",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-zigbee-ewelink-cmars-seedan-outlet-driver/81319",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Zigbee eWeLink-CMARS-Seedan Outlet is a driver that is modified from the great code of Markus Liljergren of *OhLa Lab* fame -see https://oh-lalabs.com/. Modifications include ewelink fingerprint and more",
      "documentationUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/ewelink_outlet/README.md",
      "id": "manifest:ed35889c3dcd8b8813d9",
      "manifestUrl": "https://raw.githubusercontent.com/jshimota01/hubitat/main/Drivers/ewelink_outlet/packageManifest.json",
      "name": "Zigbee eWeLink-CMARS-Seedan Outlet",
      "observed": {
        "externalHosts": [
          "oh-lalabs.com",
          "www.w3.org"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 10
      },
      "reviewed": [],
      "tags": [
        "Dashboards",
        "Lights & Switches",
        "Misc. Devices",
        "Monitoring"
      ]
    },
    {
      "author": "Dan Danache (@dandanache)",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/release-zigbee-map-app/133888",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Visualize the topology and connectivity of your Zigbee network.",
      "documentationUrl": "https://codeberg.org/dan-danache/hubitat/src/branch/main/zigbee-map-app/README.md",
      "id": "hpm:46ce50b6-6513-4ae9-b4a3-1d392294b35f",
      "manifestUrl": "https://codeberg.org/dan-danache/hubitat/raw/branch/main/zigbee-map-app/packageManifest.json",
      "name": "Zigbee Map",
      "observed": {
        "externalHosts": [
          "codeberg.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities",
        "Zigbee"
      ]
    },
    {
      "author": "Gary J. Milne",
      "category": "Zigbee",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for dedicated Zigbee Repeaters and simple Switches that allows the gathering and display of a range of Zigbee information including Children, Neighbors, LQI and Route information.",
      "documentationUrl": null,
      "id": "manifest:520f9d5849f34904f3f8",
      "manifestUrl": "https://raw.githubusercontent.com/GaryMilne/Hubitat-Zigbee/main/packageManifestZigbee.json",
      "name": "Zigbee Monitor Driver",
      "observed": {
        "externalHosts": [
          "cronmaker.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "Integrations",
        "Monitoring",
        "Repeaters & Extenders",
        "Zigbee"
      ]
    },
    {
      "author": "TheMaster",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Works with Sonoff MINI ZB,eWeLink,3A Smart Home and other generic zigbee relays. And generic outlets. Presence,Lamp_01,SA-003-Zigbee,01MINIZB,BASICZBR3,LXN59-1S7LX1.0, Sylvania SMART + LEDVANCE",
      "documentationUrl": null,
      "id": "manifest:5fe57262fa14b0bd694a",
      "manifestUrl": "https://raw.githubusercontent.com/tmastersmart/hubitat-code/main/packages/zigbee-sonoff-relays-new.json",
      "name": "Zigbee Sonoff - generic relays",
      "observed": {
        "externalHosts": [
          "www.paypal.com",
          "zigbee.blakadder.com"
        ],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 15
      },
      "reviewed": [],
      "tags": [
        "Alarm Systems",
        "Buttons",
        "Lights & Switches",
        "Misc. Devices",
        "Presence & Location",
        "Zigbee"
      ]
    },
    {
      "author": "Krassimir Kossev",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/beta-tuya-zigbee-thermostats-and-trvs-driver/128916",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Zigbee Thermostats and TRVs - Aqara, Tuya, Sonoff, Sunricher, Namron, ....",
      "documentationUrl": "https://community.hubitat.com/t/beta-tuya-zigbee-thermostats-and-trvs-driver/128916",
      "id": "hpm:99d87625-9f1d-4b0d-9c41-a0da7f450947",
      "manifestUrl": "https://raw.githubusercontent.com/kkossev/Hubitat/development/Drivers/Zigbee%20TRV/thermostatsManifest.json",
      "name": "Zigbee TRVs and Thermostats",
      "observed": {
        "externalHosts": [
          "s.click.aliexpress.com",
          "www.aliexpress.com",
          "www.aliexpress.us",
          "www.sunricher.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 5,
        "urlLiteralCount": 157
      },
      "reviewed": [],
      "tags": [
        "Climate Control",
        "Energy Monitoring",
        "Temperature & Humidity",
        "Zigbee"
      ]
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A generic Zigbee white temperature contolleable bulb device handler, with custom capabilities/tiles for various temps. orignially written for lightify A19 bulbs",
      "documentationUrl": null,
      "id": "hpm:8c8db075-ee3e-461e-ae2d-47d98ecee151",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/ZigbeeWhiteColorTemp.json",
      "name": "Zigbee White Color Temp Device Handler",
      "observed": {
        "externalHosts": [
          "en.wikipedia.org"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches"
      ]
    },
    {
      "author": "Dan Danache (@dandanache)",
      "category": "Utility",
      "classification": "CLOUD",
      "communityUrl": "https://community.hubitat.com/t/zigbee-visual-render-for-getchildandrouteinfo/119074",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Allows you to visually render getChildAndRouteInfo of your Hubitat system.",
      "documentationUrl": "https://codeberg.org/dan-danache/hubitat/src/branch/main/zigbee-graph-app/README.md",
      "id": "hpm:4e186d70-b8b5-4069-8ae4-f6a5c25ca734",
      "manifestUrl": "https://codeberg.org/dan-danache/hubitat/raw/branch/main/zigbee-graph-app/packageManifest.json",
      "name": "zigbee-graph",
      "observed": {
        "externalHosts": [
          "ethanschoonover.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Tools & Utilities",
        "Zigbee"
      ]
    },
    {
      "author": "Jean P. May, Jr.",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Provides a set of buttons to enable/disable the Zigbee/ZWave radios.",
      "documentationUrl": null,
      "id": "hpm:2bcff027-0fdb-4ad8-9e3d-ba8b12c1ac95",
      "manifestUrl": "https://raw.githubusercontent.com/thebearmay/hubitat/main/manifests/zbZwToggleManifest.json",
      "name": "Zigbee-ZWave Radio Toggle Buttons",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 5
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Zigbee",
        "ZWave"
      ]
    },
    {
      "author": "Andrew Davison",
      "category": null,
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Connects devices communicating via Zigbee2MQTT to Hubitat.",
      "documentationUrl": "https://github.com/birdslikewires/hubitat/tree/main/zigbee2mqtt",
      "id": "hpm:e997d860-30d3-4ca8-b0ba-b1298061318b",
      "manifestUrl": "https://raw.githubusercontent.com/birdslikewires/hubitat/main/zigbee2mqtt/packageManifest.json",
      "name": "Zigbee2MQTT Routing from BirdsLikeWires",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 8,
        "urlLiteralCount": 8
      },
      "reviewed": [],
      "tags": [
        "MQTT",
        "Tools & Utilities",
        "Zigbee"
      ]
    },
    {
      "author": "Sebastian YEPES FERNANDEZ",
      "category": "Utility",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-zipato-mini-rfid-keypad/35119/1",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": null,
      "documentationUrl": null,
      "id": "manifest:1a6446bc13e8456c7cde",
      "manifestUrl": "https://raw.githubusercontent.com/syepes/Hubitat/master/Drivers/Zipato/Zipato%20Mini%20RFID%20Keypad.json",
      "name": "Zipato Mini RFID Keypad",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Safety & Security",
        "ZWave"
      ]
    },
    {
      "author": "Kevin LaFramboise (@krlaframboise)",
      "category": "Control",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Zooz Garage Door Opener code bundle.",
      "documentationUrl": "https://www.support.getzooz.com/kb/article/1128-how-to-use-the-zen17-universal-relay-as-a-garage-door-opener-on-hubitat/",
      "id": "hpm:b68d1ff7-89f2-42b1-a472-7d29a74f1438",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/ZoozCode/refs/heads/main/ZoozGarageDoorOpener.json",
      "name": "Zooz GarageDoorOpener Bundle",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 0,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Kevin LaFramboise (@krlaframboise)",
      "category": "Control",
      "classification": "CLOUD",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Zooz Garage Door Opener Apps and virtual Driver.",
      "documentationUrl": "https://www.support.getzooz.com/kb/article/1128-how-to-use-the-zen17-universal-relay-as-a-garage-door-opener-on-hubitat/",
      "id": "hpm:0e02094c-e2ce-43ee-9697-ffdc67d53613",
      "manifestUrl": "https://raw.githubusercontent.com/HubitatCommunity/ZoozCode/refs/heads/main/ZoozGarageDoorOpenerPkg.json",
      "name": "Zooz GarageDoorOpener Package",
      "observed": {
        "externalHosts": [
          "www.support.getzooz.com",
          "www.thesmartesthouse.com"
        ],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 11
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Tools & Utilities"
      ]
    },
    {
      "author": "Jeff Page (@jtp10181)",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/zooz-zen54/114592",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Zooz Misc Module drivers with advanced features and settings: <br>ZEN53, ZEN54, ZEN55",
      "documentationUrl": "https://github.com/jtp10181/Hubitat/tree/main/Drivers/zooz",
      "id": "hpm:a25f3f5e-2121-465d-a349-4ee7702b5068",
      "manifestUrl": "https://raw.githubusercontent.com/jtp10181/Hubitat/main/packageManifest/zooz-zen-modules.json",
      "name": "Zooz Modules Advanced Drivers",
      "observed": {
        "externalHosts": [
          "jtp10181.gateway.scarf.sh"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 18
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "Safety & Security",
        "Window Coverings",
        "ZWave"
      ]
    },
    {
      "author": "Jeff Page (@jtp10181)",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/zooz-smart-plugs/98333",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Also works on many other Z-Wave power metering plugs! <br>Zooz Plug drivers with advanced features and settings: <br>ZEN04, ZEN05, ZEN14, ZEN15, ZEN20, ZEN25",
      "documentationUrl": "https://github.com/jtp10181/Hubitat/tree/main/Drivers/zooz",
      "id": "hpm:b6979742-7006-48f2-a1a4-5976510ff524",
      "manifestUrl": "https://raw.githubusercontent.com/jtp10181/Hubitat/main/packageManifest/zooz-zen-plugs.json",
      "name": "Zooz Plugs Advanced Drivers",
      "observed": {
        "externalHosts": [
          "jtp10181.gateway.scarf.sh"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 2,
        "urlLiteralCount": 12
      },
      "reviewed": [],
      "tags": [
        "Energy Monitoring",
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Ernie Miller",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": "https://community.hubitat.com/t/release-zooz-power-switch-with-state/56472",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "ZEN15 device driver with configurable state based on current power level. For use with appliances like dishwashers, washers, and gas dryers.",
      "documentationUrl": null,
      "id": "hpm:b0923f40-0886-46ac-9f81-37a1a8621e9c",
      "manifestUrl": "https://raw.githubusercontent.com/ernie/hubitat/main/drivers/package-manifests/zooz-power-switch-with-state.json",
      "name": "Zooz Power Switch w/State",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 0
      },
      "reviewed": [],
      "tags": [
        "Appliances",
        "Energy Monitoring",
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Jeff Page (@jtp10181)",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/zooz-relays-advanced/98194",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Zooz Relay drivers with advanced features and settings: <br>ZEN16, ZEN17, ZEN51, ZEN52",
      "documentationUrl": "https://github.com/jtp10181/Hubitat/tree/main/Drivers/zooz",
      "id": "hpm:2cc22e33-72ed-47bb-b4d5-6efc2c570ca3",
      "manifestUrl": "https://raw.githubusercontent.com/jtp10181/Hubitat/main/packageManifest/zooz-zen-relays.json",
      "name": "Zooz Relays Advanced Drivers",
      "observed": {
        "externalHosts": [
          "jtp10181.gateway.scarf.sh"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 24
      },
      "reviewed": [],
      "tags": [
        "Garage Doors",
        "Lights & Switches",
        "Misc. Devices",
        "Relays",
        "ZWave"
      ]
    },
    {
      "author": "Jeff Page (@jtp10181)",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/zooz-zen37-wall-remote/129335",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Zooz Scene Controller drivers with advanced features and settings: <br>ZEN37",
      "documentationUrl": "https://github.com/jtp10181/Hubitat/tree/main/Drivers/zooz",
      "id": "hpm:96fdbcd8-5ebe-47a8-881a-748574f0917e",
      "manifestUrl": "https://raw.githubusercontent.com/jtp10181/Hubitat/main/packageManifest/zooz-zen-scene.json",
      "name": "Zooz Scene Controllers Advanced Drivers",
      "observed": {
        "externalHosts": [
          "jtp10181.gateway.scarf.sh"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Jeff Page (@jtp10181)",
      "category": "Utility",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/zooz-sensors/81074",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Zooz Sensor drivers with advanced features and settings: <br>ZSE11, ZSE18, ZSE40, ZSE41, ZSE42, ZSE43, ZSE44, ZSE70",
      "documentationUrl": "https://github.com/jtp10181/Hubitat/tree/main/Drivers/zooz",
      "id": "hpm:77f47cd6-9acd-47fa-9b3a-26c8a986123f",
      "manifestUrl": "https://raw.githubusercontent.com/jtp10181/Hubitat/main/packageManifest/zooz-zen-sensors.json",
      "name": "Zooz Sensors Advanced Drivers",
      "observed": {
        "externalHosts": [
          "jtp10181.gateway.scarf.sh"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 8,
        "urlLiteralCount": 48
      },
      "reviewed": [],
      "tags": [
        "Motion Control",
        "Multi Sensors",
        "Temperature & Humidity",
        "ZWave"
      ]
    },
    {
      "author": "RamSet",
      "category": "Irrigation",
      "classification": "BOTH",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Fully-local irrigation controller for Zooz ZEN16/ZEN17 relays - weather-aware scheduling, cycle & soak, moisture, pause-and-resume, and a verified hardware auto-off failsafe.",
      "documentationUrl": null,
      "id": "manifest:398726763b5d3bce0985",
      "manifestUrl": "https://raw.githubusercontent.com/RamSet/hubitat/refs/heads/main/manifest-zooz-sprinkler.json",
      "name": "Zooz Sprinkler Scheduler",
      "observed": {
        "externalHosts": [
          "api.open-meteo.com",
          "images.weserv.nl",
          "open-meteo.com",
          "openmoji.org",
          "www.support.getzooz.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 3,
        "urlLiteralCount": 40
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jeff Page (@jtp10181)",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/zooz-zen-switches-dimmers-advanced/58649",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Zooz Switch & Dimmer drivers with advanced features and settings: <br>ZEN21, ZEN22, ZEN23, ZEN24, ZEN26, ZEN27, ZEN71, ZEN72, ZEN73, ZEN74, ZEN76, ZEN77, ZEN30",
      "documentationUrl": "https://github.com/jtp10181/Hubitat/tree/main/Drivers/zooz",
      "id": "hpm:1b4a1f7e-7bff-44aa-8a65-5d0cb5ca6959",
      "manifestUrl": "https://raw.githubusercontent.com/jtp10181/Hubitat/main/packageManifest/zooz-zen-switch-dimmer.json",
      "name": "Zooz Switches Advanced Drivers",
      "observed": {
        "externalHosts": [
          "jtp10181.gateway.scarf.sh"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 4,
        "urlLiteralCount": 22
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-zooz-zse44-temperature-humidity-xs-sensor-driver/141548",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for the Zooz ZSE44 Temperature / Humidity XS Sensor",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/drivers/zse44",
      "id": "manifest:87ec6cb8d252200f8f0e",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/zse44.json",
      "name": "Zooz Temperature / Humidity XS Sensor ZSE44",
      "observed": {
        "externalHosts": [
          "www.support.getzooz.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Temperature & Humidity",
        "ZWave"
      ]
    },
    {
      "author": "Denny Page",
      "category": "Integrations",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/release-zooz-zse42-water-leak-xs-sensor-driver/141549",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Driver for the Zooz ZSE42 Water Leak XS sensor",
      "documentationUrl": "https://github.com/dennypage/hubitat/tree/master/drivers/zse42",
      "id": "manifest:25eb62689df7b1b6983a",
      "manifestUrl": "https://raw.githubusercontent.com/dennypage/hubitat/master/hpm/zse42.json",
      "name": "Zooz Water Leak XS Sensor ZSE42",
      "observed": {
        "externalHosts": [
          "www.support.getzooz.com"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Water",
        "ZWave"
      ]
    },
    {
      "author": "Jeff Page (@jtp10181)",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/zooz-zac36/79426",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Zooz ZAC36 Titan Valve Actuator driver with all advanced features and settings",
      "documentationUrl": "https://github.com/jtp10181/Hubitat/tree/main/Drivers/zooz",
      "id": "hpm:6598eaa9-f9d0-45c1-8b42-2479253be679",
      "manifestUrl": "https://raw.githubusercontent.com/jtp10181/Hubitat/main/packageManifest/zooz-zac36.json",
      "name": "Zooz ZAC36 Titan Valve Actuator",
      "observed": {
        "externalHosts": [
          "jtp10181.gateway.scarf.sh"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 7
      },
      "reviewed": [],
      "tags": [
        "Valves",
        "Water",
        "ZWave"
      ]
    },
    {
      "author": "Jeff Page (@jtp10181)",
      "category": "Control",
      "classification": "BOTH",
      "communityUrl": "https://community.hubitat.com/t/zooz-zac38/122755",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Zooz ZAC38 Range Extender and Power Outage Monitor driver with all advanced features and settings",
      "documentationUrl": "https://github.com/jtp10181/Hubitat/tree/main/Drivers/zooz",
      "id": "hpm:c6e5a406-4e1f-4d10-8612-75eedf4e1f05",
      "manifestUrl": "https://raw.githubusercontent.com/jtp10181/Hubitat/main/packageManifest/zooz-zac38.json",
      "name": "Zooz ZAC38 Range Extender",
      "observed": {
        "externalHosts": [
          "jtp10181.gateway.scarf.sh"
        ],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 6
      },
      "reviewed": [],
      "tags": [
        "Repeaters & Extenders",
        "ZWave"
      ]
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-advanced-zooz-zen22-zen21-central-scene-dimmer-and-switch-drivers/39761?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Advanced Zooz Zen 21 Switch Driver",
      "documentationUrl": null,
      "id": "manifest:956f8324b71b88881e22",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/zoozZen21.json",
      "name": "Zooz Zen21 Switch",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-advanced-zooz-zen22-zen21-central-scene-dimmer-and-switch-drivers/39761?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Advanced Zooz Zen 22 Dimmer Driver",
      "documentationUrl": null,
      "id": "manifest:7869c804bd4fdf68e1c7",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/zoozZen22.json",
      "name": "Zooz Zen22 Dimmer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-advanced-zooz-zen24-zen23-central-scene-dimmer-and-switch-drivers/39766?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Advanced Zooz Zen 23 Switch Driver",
      "documentationUrl": null,
      "id": "manifest:b7ab9201164dd1c18914",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/zoozZen23.json",
      "name": "Zooz Zen23 Switch",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-advanced-zooz-zen24-zen23-central-scene-dimmer-and-switch-drivers/39766?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Advanced Zooz Zen 24 Dimmer Driver",
      "documentationUrl": null,
      "id": "manifest:9e271edd1025bf4bba59",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/zoozZen24.json",
      "name": "Zooz Zen24 Dimmer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-advanced-zooz-zen27-zen26-central-scene-dimmer-and-switch-drivers/38990?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Advanced Zooz Zen 26 Central Scene Switch Driver",
      "documentationUrl": null,
      "id": "manifest:fce24c627bdc07ddb110",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/zoozZen26.json",
      "name": "Zooz Zen26 Switch",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Bryan Copeland",
      "category": "Integrations",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/release-advanced-zooz-zen27-zen26-central-scene-dimmer-and-switch-drivers/38990?u=bcopeland",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Advanced Zooz Zen 27 Central Scene Dimmer Driver",
      "documentationUrl": null,
      "id": "manifest:165f8798d2b688de8be2",
      "manifestUrl": "https://raw.githubusercontent.com/djdizzyd/hubitat/master/packages/zoozZen27.json",
      "name": "Zooz Zen27 Dimmer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Jeff Page (@jtp10181)",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": "https://community.hubitat.com/t/zooz-zen31-rgbw-dimmer-advanced/115212",
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Zooz ZEN31 RGBW Dimmer driver with advanced features and settings",
      "documentationUrl": "https://github.com/jtp10181/Hubitat/tree/main/Drivers/zooz",
      "id": "hpm:aaeb26b7-3156-452c-9424-d733c3df79ee",
      "manifestUrl": "https://raw.githubusercontent.com/jtp10181/Hubitat/main/packageManifest/zooz-zen-rgbw.json",
      "name": "Zooz ZEN31 RGBW Advanced Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 4
      },
      "reviewed": [],
      "tags": [
        "Lights & Switches",
        "ZWave"
      ]
    },
    {
      "author": "Robert Morris",
      "category": "Control",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Community driver supporting all features (including multi-taps) on the Zooz ZEN34 remote",
      "documentationUrl": "https://community.hubitat.com/t/release-zooz-zen34/123044",
      "id": "manifest:78f18ee2ab66d8c6c161",
      "manifestUrl": "https://raw.githubusercontent.com/RMoRobert/Hubitat/master/drivers/zooz/zooz-zen34-remote-hpmManifest.json",
      "name": "Zooz ZEN34 (Remote) Community Driver",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "HUB_ACTION",
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 2
      },
      "reviewed": [],
      "tags": [
        "Buttons",
        "Lights & Switches"
      ]
    },
    {
      "author": "Neil Jackson",
      "category": "Convenience",
      "classification": "LAN",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "Test and explore the configuration parameters of a z-wave device",
      "documentationUrl": null,
      "id": "hpm:2ea87e06-19b0-4af5-9c72-96b1e4eeb4ac",
      "manifestUrl": "https://raw.githubusercontent.com/neiljackson1984/SmartThingsNeil/master/packages/zwave_configuration_explorer/build/package_manifest.json",
      "name": "Zwave Configuration Explorer",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [
          "SEND_HUB_COMMAND"
        ],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": []
    },
    {
      "author": "Larry Kahn",
      "category": "Integrations",
      "classification": "INSUFFICIENT",
      "communityUrl": null,
      "declared": {
        "cloudTag": false,
        "lanTag": false
      },
      "description": "A Zwave valve device handler originally written for the evb105 valve but works with any. Tested with dome and leakgopgher and leaksmart. Adds Switch Door Contol (ie open close) and contact sensor capiblity. Also light on/off control",
      "documentationUrl": null,
      "id": "hpm:8b0ca677-abd0-4b37-9331-207b917852b5",
      "manifestUrl": "https://raw.githubusercontent.com/lgkahn/hubitat/master/WaterValve.json",
      "name": "Zwave water Valve device handler",
      "observed": {
        "externalHosts": [],
        "lanPrimitives": [],
        "sourceFilesAnalysed": 1,
        "urlLiteralCount": 1
      },
      "reviewed": [],
      "tags": [
        "Safety & Security",
        "Valves"
      ]
    }
  ],
  "schemaVersion": "1.0",
  "snapshotGenerated": "2026-08-26T08:13:41Z"
};
