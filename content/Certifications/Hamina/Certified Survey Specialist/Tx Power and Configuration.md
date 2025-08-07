# Tx Power and Configuration

## Tx Power
Equivalent Isotropic Radiated Power (EIRP)
* Calculated by Hamina
* Intentional Radiator (IR) +10dBi
* Configured in Hamina
* TX: 10 dBm

## Configuration
* RRM Power settings
* SSID design
* Minimum data rates
* Design Tx power = Minimum Tx power



## Detailed Tx Power: Equivalent Isotropic Radiated Power (EIRP)
Equivalent Isotropic Radiated Power (EIRP) is a crucial metric in wireless communication, representing the total power radiated by a hypothetical isotropic antenna in a single direction. An isotropic antenna is a theoretical antenna that radiates power equally in all directions. In practical terms, EIRP is the maximum power output that an antenna can radiate in a specific direction, taking into account both the transmitter's output power and the antenna's gain.

The formula for calculating EIRP is typically:

**EIRP (dBm) = Transmit Power (dBm) + Antenna Gain (dBi) - Cable Loss (dB)**

*   **Transmit Power (dBm):** This is the power output from the radio transmitter itself.
*   **Antenna Gain (dBi):** This measures how effectively an antenna converts input power into radio waves in a particular direction. A higher dBi value indicates a more directional antenna.
*   **Cable Loss (dB):** This accounts for any signal loss that occurs in the cable connecting the transmitter to the antenna.

In the context of Hamina, EIRP is calculated by the software, which simplifies the process for the user. The mention of "Intentional Radiator (IR) +10dBi" suggests that the system considers the antenna's gain in its calculations. The "TX: 10 dBm" likely refers to the configured transmit power of the access point.

EIRP is important because regulatory bodies often set limits on the maximum EIRP allowed for wireless devices to prevent interference with other systems and ensure efficient use of the radio spectrum. By understanding and configuring EIRP, wireless network designers can ensure compliance and optimize network performance.




## Detailed Configuration: RRM Power Settings
Radio Resource Management (RRM) is a critical feature in enterprise wireless networks that automates the optimization of RF (Radio Frequency) parameters to ensure optimal network performance and stability. RRM dynamically manages access point (AP) channel and transmit power settings to adapt to changes in the RF environment, such as interference, client density, and coverage requirements.

Key aspects of RRM power settings include:

*   **Transmit Power Control (TPC):** TPC is a core component of RRM that automatically adjusts the transmit power of individual access points. The goal is to ensure adequate coverage without causing excessive interference to neighboring APs or consuming unnecessary power. TPC can dynamically reduce power levels in areas with high AP density to improve overall network capacity and reduce co-channel interference. Conversely, it can increase power in areas needing more coverage.
*   **Dynamic Channel Assignment (DCA):** While not directly a power setting, DCA works in conjunction with TPC to optimize the RF environment. DCA automatically assigns channels to APs to minimize interference from other APs on the same or overlapping channels. By optimizing both power and channel, RRM creates a more stable and efficient wireless network.
*   **Coverage Hole Detection and Correction:** RRM can identify areas with insufficient signal coverage (coverage holes) and automatically adjust the transmit power of nearby APs to extend coverage into those areas. This helps maintain consistent wireless service across the entire deployment.
*   **Interference Mitigation:** RRM continuously monitors the RF environment for sources of interference, both from other Wi-Fi networks and non-Wi-Fi sources. It can then adjust power levels or channels to mitigate the impact of this interference, improving network reliability.

The ability to configure RRM power settings, as indicated in the Hamina Survey Specialist context, allows network administrators to fine-tune the automated optimization process. This ensures that the wireless network operates efficiently, provides reliable connectivity, and adapts to changing conditions without constant manual intervention. The objective is often to achieve a balance between coverage, capacity, and minimal interference, ensuring that the "Design Tx power = Minimum Tx power" principle is met for efficient operation.




## Detailed Configuration: SSID Design
SSID (Service Set Identifier) design is a critical aspect of wireless network planning, impacting network performance, security, and user experience. An SSID is essentially the name of a Wi-Fi network that users see and connect to. While it might seem straightforward, proper SSID design involves several best practices:

*   **Limit the Number of SSIDs:** Each SSID broadcasts management frames (beacons, probe responses) that consume airtime, reducing the available bandwidth for client data. It is a widely accepted best practice to keep the number of SSIDs to a minimum, typically no more than 3-4 per access point or radio. Excessive SSIDs can lead to increased overhead, reduced network efficiency, and a poorer user experience.

*   **Purpose-Driven SSIDs:** Design SSIDs based on their intended purpose and the type of users or devices that will connect to them. Common categories include:
    *   **Corporate/Employee SSID:** Securely authenticated (e.g., WPA2/3-Enterprise with 802.1X) for internal staff and company-owned devices.
    *   **Guest SSID:** Often open or with a simple password/portal for visitors, typically isolated from the corporate network for security.
    *   **IoT/Specialized Device SSID:** For Internet of Things devices or other specialized equipment that may have different security or connectivity requirements.

*   **Security Considerations:** Each SSID should have appropriate security settings. For corporate networks, strong encryption and authentication (like WPA3 or WPA2-Enterprise) are essential. Guest networks might use WPA2-Personal or a captive portal. Avoid using open SSIDs without any encryption unless absolutely necessary and with proper network segmentation.

*   **Band Steering (Optional):** Instead of creating separate SSIDs for 2.4 GHz and 5 GHz bands (e.g., "MyWiFi_2.4GHz" and "MyWiFi_5GHz"), consider using a single SSID and enabling band steering on your access points. Band steering encourages dual-band clients to connect to the less congested 5 GHz band, improving overall network performance. However, some older devices may not support band steering effectively.

*   **Meaningful Naming (for clarity):** While not directly impacting performance, clear and concise SSID names can help users identify the correct network. Avoid overly complex or generic names.

*   **Hidden SSIDs (Generally Avoided):** Hiding an SSID (not broadcasting its name) is often perceived as a security measure, but it offers minimal actual security and can complicate client connectivity. It does not prevent determined attackers from discovering the network. It's generally recommended to broadcast SSIDs and rely on strong authentication and encryption for security.

By adhering to these best practices, network administrators can create an SSID structure that is efficient, secure, and user-friendly, contributing to a robust wireless network infrastructure.



## Detailed Configuration: Minimum Data Rates
Minimum data rates, also known as basic rates or mandatory rates, are a crucial configuration setting in wireless networks that significantly impact network performance and client behavior. These rates define the lowest data rate at which an access point (AP) will transmit management frames (like beacons and probe responses) and at which clients are allowed to associate with the AP.

### Why are Minimum Data Rates Important?

1.  **Network Efficiency and Airtime Utilization:** Lower data rates consume more airtime to transmit the same amount of data. By disabling very low data rates (e.g., 1, 2, 5.5 Mbps for 802.11b), you force clients to use higher, more efficient data rates. This frees up valuable airtime, allowing more data to be transmitted in the same amount of time, thus improving overall network capacity and throughput for all connected devices.

2.  **Client Roaming and Stickiness:** Clients often "stick" to an AP with a weak signal if it continues to broadcast at very low data rates. By increasing the minimum data rate, you effectively reduce the coverage area of the AP for clients operating at those lower rates. This encourages clients to roam to a closer AP with a stronger signal and higher data rates, leading to better roaming decisions and a more balanced client distribution across APs.

3.  **Performance Optimization:** Setting an appropriate minimum data rate ensures that only clients capable of maintaining a certain level of performance can connect. This can prevent very distant or poorly performing clients from degrading the overall network experience for others.

### Common Practices and Considerations:

*   **Mandatory Rates:** According to IEEE 802.11 standards, 6, 12, and 24 Mbps are often considered mandatory data rates. Many network designers choose to set the minimum basic rate to 12 Mbps or even 24 Mbps in high-density environments.
*   **Impact on Coverage:** Increasing the minimum data rate will reduce the effective coverage area of an AP. This is because clients further away will no longer be able to hear the AP at the required minimum rate. Therefore, this strategy is often employed in high-density deployments where coverage overlap is desired, and clients are expected to be closer to APs.
*   **Legacy Devices:** Be mindful of older or legacy devices that may only support lower data rates. Increasing the minimum data rate too aggressively could prevent these devices from connecting to the network.
*   **Site Survey Importance:** After adjusting minimum data rates, it is crucial to perform a post-configuration site survey to validate the changes and ensure that coverage and performance remain optimal across the entire environment.

By carefully configuring minimum data rates, network administrators can significantly enhance the performance, efficiency, and reliability of their wireless networks, ensuring that the "Design Tx power = Minimum Tx power" principle is effectively supported by efficient data transmission.

