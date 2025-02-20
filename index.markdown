---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

This page allows you to flash Silicon Labs EFR32MG21 based Zigbee dongles directly from your Chrome-based browser.

Supported devices:
* Sonoff ZBDongle-E
* Easyiot ZB-GW04
* SMLIGHT SLZB-07
* SMLIGHT SLZB-07Mg24
* SMLIGHT SLZB-06M

It will install the most recent recommended builds from [darkxst/silabs-firmware-builder](https://github.com/darkxst/silabs-firmware-builder). If you want the very latest builds, you can use `Custom URL` option.  

### Start by clicking `Connect` for your device below.

You can select from these firmware:
* **EZSP** - Standard Zigbee (NCP) firmware - Baudrate 115200
* **MultiPAN RCP** - Zigbee + Thread for Silabs Multiprotocol Addon - Baudrate 460800 (230400 for ZB-GW04)
* **Openthread RCP** - Thread Only - Baudrate 460800 (230400 for ZB-GW04)
* **Upload Custom** - Provide a custom .gbl firmware file

***NOTE:** Make sure to close anything using your devices serial port (e.g. ZHA, Zigbee2MQTT, Silabs Multiprotocol Add-on)*

* **Linux Users:** make sure your user is added to the `dialout` group.

> Your browser does not support the WebSerial API. Try Chrome or Edge instead.
{: #notSupported .hidden .serialErr }


-----

## ZBDongle-E
Sonoff Zigbee 3.0 USB Dongle Plus V2 - No hardware flow control

***NOTE:*** The latest CP210X Windows driver has known compatibility issues. For the new batch of ZBDongle-E (SN: 30623XXXXX and above on the back) with CP2102 serial chip, please install the older version 6.7.0.0 driver: [CP210x VCP Windows](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads).  

![ZBDongle-E](./assets/images/dongle-e.png)
<div class="Supported">
    <nabucasa-zigbee-flasher manifest="./assets/manifests/zbdongle-e.json">
        <span slot="button">Connect</span>
    </nabucasa-zigbee-flasher>
</div>
<br>

-----

## ZB-GW04 (v1.2)
Easyiot ZB-GW04 Revision v1.2 - Hardware flow control  
![ZB-GW04](./assets/images/zb-gw04-1v1.png)  

<div class="Supported">
    <nabucasa-zigbee-flasher manifest="./assets/manifests/zb-gw04-v1.2.json">
        <span slot="button">Connect</span>
    </nabucasa-zigbee-flasher>
</div>
<br>

-----


## ZB-GW04 (v1.1)
Easyiot ZB-GW04 Revision v1.1 - No flow control  
![ZB-GW04](./assets/images/zb-gw04-1v1.png)  

<div class="Supported">
    <nabucasa-zigbee-flasher manifest="./assets/manifests/zb-gw04-v1.1.json">
        <span slot="button">Connect</span>
    </nabucasa-zigbee-flasher>
</div>
<br>

-----


## SMLIGHT SLZB-07
SMLIGHT SLZB-07 -  Hardware flow control  
![SMLIGHT SLZB-07](./assets/images/slzb-07.png)  

<div class="Supported">
    <nabucasa-zigbee-flasher manifest="./assets/manifests/SLZB07.json">
        <span slot="button">Connect</span>
    </nabucasa-zigbee-flasher>
</div>
<br>

-----

## SMLIGHT SLZB-07Mg24
SMLIGHT SLZB-07Mg24 -  Hardware flow control  
![SMLIGHT SLZB-07](./assets/images/slzb-07.png)  

<div class="Supported">
    <nabucasa-zigbee-flasher manifest="./assets/manifests/slzb07Mg24.json">
        <span slot="button">Connect</span>
    </nabucasa-zigbee-flasher>
</div>
<br>

-----


## SMLIGHT SLZB-06M 
- SMLIGHT SLZB-06M -  No hardware flow control  
- Zigbee and multiPAN RCP (Zigbee+Thread/Matter) work Ethernet, Wi-Fi and USB modes, Thread RCP works in USB mode only (current limitations of HA add-ons).  
![SMLIGHT SLZB-06M](./assets/images/slzb-06m.png)  

[Manual: How to Flash the SLZB-06M via darkxst's silabs web-flasher/firmware-builder](https://smlight.tech/manual/slzb-06/guide/thread-matter/).  

<div class="Supported">
    <nabucasa-zigbee-flasher manifest="./assets/manifests/slzb-06m.json">
        <span slot="button">Connect</span>
    </nabucasa-zigbee-flasher>
</div>
<br>

-----

<script>
    if(!navigator.serial){
        // const buttons = document.querySelectorAll('.Supported');

        // buttons.forEach(element => {
        //     element.classList.add('hidden');
        // });
        document.getElementById("notSupported").classList.remove('hidden');
    }
</script>
