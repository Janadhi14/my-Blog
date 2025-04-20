The Wifi pine apple is a widely used wireless penetration testing tool that comes with a hefty price tag but we are able to make a similar clone for a fraction of the cost!
## Requirements 
[[https://www.amazon.com.au/dp/B073TSK26W?ref_=pe_63343992_578737612_fed_asin_title&th=1| Gl.iNET router]]
[[https://www.amazon.com.au/Byttlerom-Wireless-Portable-150Mbps-Receiver/dp/B0D9PVLGQT/ref=sr_1_2?crid=1SPN1K43I5449&dib=eyJ2IjoiMSJ9.bLriRcUJIQLNs8FdKrHVsPfC2w3em5jCTO3ftxhIAB97DNNssYZ__2KicD10ByjCYW7Qz3W00xZy6Ix5xPqQVmdpDhWj_THFHLgyzpzOaQX0X8BJa942Juif-xuiiw1HIw9HE8aakwe7FwBvesqbInsQoH3Qj1uaNpFCi46plzFBlq8RXL3rln--LShhO5WQIxVA_FAWrctrD--Ahmoh-yXnnBXEK8CZlhM2t_Sj_a0glx7qZD0z8Pn_zo7SazXFIA_8cmerSAaLg9h-kCkDEFQczaharMhhKX3NMu4XS0Y.i56YN1xKwAgPb9Jq0ZmMPy12qGWZBtCGBWnk12w-MJg&dib_tag=se&keywords=ralink+rt5370&qid=1744950018&s=electronics&sprefix=ralink+rt%2Celectronics%2C418&sr=1-2 | Ralink rt3570 Wifi Dongle]]
[[https://github.com/xchwarze/wifi-pineapple-cloner | github repo for Wifi pineapple clone]]
[[https://firmware-selector.openwrt.org/?version=19.07.9&target=ramips%2Fmt76x8&id=gl-mt300n-v2| Openwrt firmware]]
## Process 
https://www.youtube.com/watch?v=udnxagkSzoA&ab_channel=ShurikenHacks
### Firmware Preparation:

- Visit the GitHub page for xchwarze’s Wi-Fi Pineapple Cloner. This custom firmware mimics Hak5’s Wi-Fi Pineapple and runs on OpenWRT-supported routers like the Mango.
    
- Verify your router is listed in the Supported Devices section. Flashing incompatible firmware can damage your router, so confirming support is essential.
    
- Download the Pineapple clone firmware for your specific router model, making sure to select version 19.07.7. This version is known for stability and compatibility.
    
- Visit the OpenWRT firmware selector and select version 19.07.7 for your Mango (MT300N v2). This prepares the base system that the Pineapple clone will later replace.
    
- Download the sysupgrade image for your router. Installing OpenWRT first ensures the router's environment is clean and ready for the Pineapple clone.
    

---

### Flashing the Mango Router:

**Recovery Mode:**

- Connect your computer to the Mango via a LAN cable. Wired connections are stable and necessary for flashing firmware.
    
- Press and hold the reset button on the Mango. This action triggers the recovery bootloader, bypassing any existing software restrictions.
    
- While still holding the reset button, connect the power cable. This powers the router directly into recovery mode.
    
- Keep holding the button until both the Power and Config LEDs turn solid (about 6 seconds). Solid LEDs indicate the router has entered recovery mode.
    
- Release the reset button. The Mango is now ready for new firmware to be uploaded.
    

---

**Network Configuration:**

- Open View Network Connections on your computer.
    
- Identify the Ethernet connection linked to your Mango.
    
- Disable Wi-Fi to avoid routing conflicts and ensure your computer uses the Ethernet link.
    
- Right-click the Ethernet interface, select Properties, then double-click Internet Protocol Version 4 (TCP/IPv4).
    
- Set the IP address to 192.168.1.2. The Subnet Mask should auto-fill as 255.255.255.0. Since the Mango won't assign IP addresses in recovery mode, manually setting your computer’s IP ensures it can communicate.
    
- Apply the changes and leave the window open for later adjustments.
    

---

**Flashing OpenWRT Firmware:**

- Open a browser and visit 192.168.1.1. This is the Mango’s recovery web interface address.
    
- The Mango’s firmware recovery page will appear.
    
- Select the OpenWRT sysupgrade firmware you downloaded.
    
- Upload and wait about 2-3 minutes for the flashing process to complete.
    
- When the Power and Wi-Fi LEDs are solid, the flashing is complete and the router is running OpenWRT.
    

---

### Flashing Pineapple Clone Firmware:

- Go back to 192.168.1.1.
    
- The OpenWRT login page will appear. Set a password (e.g., "pineapple") to secure the router.
    
- Navigate to System > Backup / Flash Firmware.
    
- Select the Pineapple clone firmware file.
    
- Upload the firmware, uncheck the “Keep settings” option, and click Continue. Unchecking this prevents any old settings from causing conflicts with the new Pineapple environment.
    
- Wait for about 3 minutes. When all 3 LEDs are solid, the update is complete.
    

---

### Setting Up Your Pineapple Clone:

- Access the Pineapple dashboard at 172.16.42.1:1471. The firmware uses this address instead of OpenWRT’s default, signaling the clone is now active.
    
- If the page fails to load, revert your network settings to "Obtain IP address automatically." This ensures your device will get an IP address from the Pineapple DHCP server.
    
- Refresh the page; your Mango is now functioning as a Wi-Fi Pineapple clone.
    
- During setup, the interface will ask you to disable the built-in Wi-Fi. Plug in the RT5370 Wi-Fi adapter and press the reset button once. The extra adapter provides the clone with monitor mode and packet injection capabilities, which the built-in Wi-Fi can’t handle.
    
- The setup message should disappear and bring you to the config page.
    
- Set your root password and complete the setup.
    
- You can now use the Pineapple dashboard for scans.
    
- Navigate to Recon, click Start, then select Start PineAP to start a scan. This module is used to detect nearby wireless clients and access points.
    
- After the scan, stop it to view results on the right-hand panel.
## Trouble shooting 
Some useful commands include:
` iw dev `

`` ifconfig 

- `airodump-ng` (for scanning / capturing handshakes)
    
- `aireplay-ng` (for packet injection, like deauth attacks)
    
- `aircrack-ng` (for cracking the captured handshake)

`ssh root@172.16.42.1`

To manually put the mango into monitor mode:
```python 
ifconfig wlan1 down
iw wlan1 set type monitor
ifconfig wlan1 up
iw wlan1 scan
```