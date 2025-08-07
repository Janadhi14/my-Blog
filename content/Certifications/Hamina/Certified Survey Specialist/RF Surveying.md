# RF Surveying

## RF Survey – Other tools
* Free space path loss : -53 dBm
* What you survey devices receives: RSSI: -50 dBm

## RF Survey – Hamina
* Hamina Calculates: -53 dBm
* What the nomad receives RSSI: -53dBm



## Detailed RF Surveying Concepts
RF (Radio Frequency) surveying involves measuring and analyzing radio signals in a given environment to understand how wireless networks will perform. Two fundamental concepts in RF surveying are Free Space Path Loss (FSPL) and Received Signal Strength Indicator (RSSI).

### Free Space Path Loss (FSPL)
Free Space Path Loss (FSPL) is the theoretical loss in signal strength that occurs when an electromagnetic wave travels through a direct line-of-sight path in a vacuum or ideal free space, without any obstacles or interference. It represents the natural spreading of the radio waves as they move away from the transmitting antenna. FSPL is primarily dependent on two factors:

*   **Distance:** The loss increases significantly with distance. Specifically, FSPL is proportional to the square of the distance between the transmitter and receiver.
*   **Frequency:** Higher frequencies experience greater FSPL over the same distance. FSPL is proportional to the square of the frequency.

The formula for FSPL is:

**FSPL (dB) = 20 log10(d) + 20 log10(f) + 20 log10(4π/c) - Gt - Gr**

Where:
*   `d` is the distance between antennas
*   `f` is the signal frequency
*   `c` is the speed of light
*   `Gt` is the gain of the transmitting antenna
*   `Gr` is the gain of the receiving antenna

In the context of the provided document, "Free space path loss : -53 dBm" likely refers to a calculated or expected signal level after accounting for FSPL, rather than the loss itself. This value helps in understanding the theoretical maximum signal strength that could be received under ideal conditions.

### Received Signal Strength Indicator (RSSI)
Received Signal Strength Indicator (RSSI) is a measurement of the power present in a received radio signal. It is an estimated measurement of how well a wireless client device can hear a signal from an access point or router. RSSI values are typically expressed in negative decibel-milliwatts (dBm), where values closer to 0 dBm indicate a stronger signal (e.g., -30 dBm is stronger than -70 dBm).

*   **What you survey devices receives: RSSI: -50 dBm:** This indicates the actual signal strength measured by a generic survey tool or client device. A value of -50 dBm is generally considered a very good signal strength, suitable for high-performance applications.

### RF Survey with Hamina and Nomad
Hamina, in conjunction with the Oscium Nomad, provides a powerful solution for real-world RF measurements. Unlike theoretical calculations or generic survey tools, Hamina and Nomad work together to provide accurate and actionable data:

*   **Hamina Calculates: -53 dBm:** This suggests that Hamina's software performs its own calculations, possibly taking into account various environmental factors and the Nomad's specific antenna characteristics, to provide a more refined or predicted signal strength value.
*   **What the Nomad receives RSSI: -53dBm:** This is the actual RSSI value measured by the Oscium Nomad device. The fact that Hamina's calculation aligns closely with the Nomad's received RSSI (-53 dBm in this example) indicates the accuracy and integration of the Hamina platform with its dedicated hardware. The Nomad is designed to provide precise, real-world measurements of your network's coverage and interference, offering instant results that are crucial for validating designs and troubleshooting performance issues.

In summary, RF surveying involves understanding both theoretical signal propagation (like FSPL) and actual measured signal strengths (RSSI). Tools like Hamina and Nomad bridge this gap by providing accurate, real-world data that can be used to validate designs, identify problem areas, and optimize wireless network performance.

