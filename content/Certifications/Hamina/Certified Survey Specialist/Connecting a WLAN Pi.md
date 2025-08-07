# Connecting a WLAN Pi

## Onsite Settings
Check Nomad Statistics: Connection status, Battery life, Serial number and Firmware

## Connecting a WLAN Pi
1. Write the latest release of WLAN Pi OS to the WLAN Pi
2. Install wlanpi-onsite-server
3. Connect the WLAN Pi to the host survey device (iPad, iPhone, MacBook)
4. Configure Hamina Onsite to use the WLAN Pi
Full instructions here: https://docs.hamina.com/onsite/basics/wlan-pi



## Detailed Onsite Settings and Nomad Statistics
Before commencing a survey with Hamina Onsite and the Nomad, it is crucial to review the Nomad's statistics. This ensures the device is functioning optimally and ready for data collection. Key statistics to check include:

*   **Connection status:** Verify that the Nomad is properly connected to the host survey device (iPad, iPhone, or MacBook). A stable connection is essential for real-time data transfer and accurate survey results.
*   **Battery life:** Ensure sufficient battery charge for the duration of the planned survey. The Nomad is designed for approximately 4 hours of continuous surveying, but it's always best to start with a full charge or have a charging solution readily available for longer sessions.
*   **Serial number and Firmware:** Confirming these details can be important for troubleshooting, warranty purposes, or ensuring that the device is running the latest compatible software for optimal performance with Hamina Onsite.

## Detailed Process for Connecting a WLAN Pi to Hamina Onsite
The WLAN Pi is a versatile, open-source hardware platform designed for wireless network testing and analysis. It serves as a portable, multi-purpose Wi-Fi analysis tool, capable of monitoring and analyzing Wi-Fi environments. When integrated with Hamina Onsite, it expands the capabilities of the survey solution, particularly for users who may not have an Oscium Nomad or prefer the flexibility of the WLAN Pi.

Here's a detailed breakdown of the steps involved in connecting a WLAN Pi to Hamina Onsite:

1.  **Write the latest release of WLAN Pi OS to the WLAN Pi:** The WLAN Pi operates on a specialized operating system (OS) designed for wireless analysis. This step involves flashing the latest version of the WLAN Pi OS onto a suitable storage medium (e.g., a microSD card) and inserting it into the WLAN Pi device. This ensures you have the most up-to-date features and compatibility.

2.  **Install wlanpi-onsite-server:** To enable communication between the WLAN Pi and Hamina Onsite, a specific server application, `wlanpi-onsite-server`, needs to be installed on the WLAN Pi. This server acts as a bridge, allowing Hamina Onsite to receive data from the WLAN Pi's wireless interfaces. Installation typically involves executing a few commands via the WLAN Pi's command-line interface.

3.  **Connect the WLAN Pi to the host survey device (iPad, iPhone, MacBook):** The WLAN Pi needs to establish a network connection with the device running Hamina Onsite. This can be achieved in several ways, such as:
    *   **Wi-Fi Connection:** The WLAN Pi can create its own Wi-Fi network (acting as an access point) that the host device connects to.
    *   **Ethernet Connection:** The WLAN Pi can be connected via Ethernet to a network that the host device is also connected to.
    *   **USB Tethering:** Some WLAN Pi models might support USB tethering to the host device.
    The specific connection method will depend on the WLAN Pi model and the host device's capabilities.

4.  **Configure Hamina Onsite to use the WLAN Pi:** Within the Hamina Onsite application, you will need to specify that you are using a WLAN Pi as your measurement device. This typically involves navigating to the settings or device selection menu within the app and selecting the WLAN Pi. The app will then attempt to discover and connect to the `wlanpi-onsite-server` running on the WLAN Pi.

For comprehensive and up-to-date instructions, it is always recommended to refer to the official documentation: [https://docs.hamina.com/onsite/basics/wlan-pi](https://docs.hamina.com/onsite/basics/wlan-pi).

By following these steps, the WLAN Pi transforms into a powerful and flexible tool for conducting Wi-Fi site surveys with Hamina Onsite, providing detailed insights into the wireless environment.

