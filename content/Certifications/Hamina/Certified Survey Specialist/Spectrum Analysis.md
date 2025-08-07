# Spectrum Analysis

## Spectrum Analysis Hardware
* Frequency Range: 2.2 GHz – 7.25 GHz
* Frequency Resolution: 25 KHz
* Amplitude Range: -95 dBm to -5 dBm
* Filter Bandwidth: 58 KHz to 812 KHz
* Antenna: Included Tri-Band Omni-directional Antenna
* Antenna Port: RP-SMA

## Time Domain Vs Frequency Domain
* Oscilloscopes show us the Time Domain
* Spectrum Analysers show us the Frequency Domain

## Power Vs Frequency
Spectrum analyzers are frequency domain instruments

## Swept Spectrum Analyzers
The SA makes power vs. frequency measurements by downconverting the signal of interest and sweeping it through the passband of a resolution bandwidth (RBW) filter. The RBW filter is followed by a detector that calculates the amplitude at each frequency point in the selected span.

## DSSS Spectral Mask

## 20 MHz OFDM Spectral Mask
Sourced from: IEEE 802.11 - 2016 Standard



## Detailed Spectrum Analysis
Spectrum analysis is a critical component of Wi-Fi surveying and troubleshooting, allowing network professionals to visualize and understand the radio frequency (RF) environment. It helps in identifying sources of interference, optimizing channel usage, and ensuring the overall health of the wireless network.

### Spectrum Analysis Hardware
Dedicated spectrum analysis hardware is designed to capture and analyze RF signals across a specified frequency range. The specifications provided are typical for a Wi-Fi spectrum analyzer:

*   **Frequency Range: 2.2 GHz – 7.25 GHz:** This broad range covers all common Wi-Fi bands (2.4 GHz, 5 GHz, and the newer 6 GHz for Wi-Fi 6E), as well as other potential interference sources within these ranges.
*   **Frequency Resolution: 25 KHz:** This indicates the smallest frequency difference the analyzer can distinguish. A higher resolution allows for more precise identification of signals and their characteristics.
*   **Amplitude Range: -95 dBm to -5 dBm:** This defines the range of signal power (amplitude) that the analyzer can accurately measure. -95 dBm represents a very weak signal, while -5 dBm is a very strong signal. This wide dynamic range is essential for capturing both faint and powerful signals.
*   **Filter Bandwidth: 58 KHz to 812 KHz:** The filter bandwidth (also known as Resolution Bandwidth - RBW) determines the frequency selectivity of the analyzer. A narrower RBW provides better frequency resolution but takes longer to sweep, while a wider RBW offers faster sweeps but less detail. The ability to adjust this range allows for flexibility in analysis.
*   **Antenna: Included Tri-Band Omni-directional Antenna:** An omni-directional antenna is crucial for capturing signals from all directions, providing a comprehensive view of the RF environment. Being tri-band ensures it can receive signals across all Wi-Fi frequencies.
*   **Antenna Port: RP-SMA:** This is a common connector type for Wi-Fi antennas, allowing for the use of external or specialized antennas if needed.

### Time Domain Vs. Frequency Domain
Signals can be analyzed in two primary domains:

*   **Time Domain:** An oscilloscope typically shows signals in the time domain, where the amplitude of a signal is plotted against time. This view is useful for observing waveforms, transient events, and timing relationships.
*   **Frequency Domain:** A spectrum analyzer displays signals in the frequency domain, where the amplitude (power) of a signal is plotted against its frequency. This view is essential for understanding the spectral content of a signal, identifying different frequency components, and detecting interference.

**Spectrum analyzers are frequency domain instruments.** They transform time-domain signals into their frequency components, providing insights into how much energy is present at different frequencies.

### Power Vs. Frequency
As frequency domain instruments, spectrum analyzers primarily show the **power versus frequency** of RF signals. This visualization allows network professionals to:

*   **Identify Wi-Fi Channels:** Clearly see the presence and power of Wi-Fi signals on different channels.
*   **Detect Interference:** Spot non-Wi-Fi interference (e.g., from microwave ovens, cordless phones, Bluetooth devices) that manifests as energy spikes or patterns on specific frequencies.
*   **Assess Channel Congestion:** Observe the overall activity and power levels across channels, helping to identify congested or noisy channels.

### Swept Spectrum Analyzers
A common type of spectrum analyzer is the swept spectrum analyzer. Its operation involves:

*   **Downconversion and Sweeping:** The analyzer takes the incoming RF signal and downconverts it to an intermediate frequency (IF). It then sweeps this IF signal through the passband of a **Resolution Bandwidth (RBW) filter**. This filter acts like a narrow window, allowing only a small portion of the frequency spectrum to pass through at any given time.
*   **Detection and Amplitude Calculation:** Following the RBW filter, a detector calculates the amplitude (power) of the signal at each frequency point as the sweep progresses. This process builds up the spectrum display, showing the power distribution across the analyzed frequency range.

### DSSS Spectral Mask
Direct Sequence Spread Spectrum (DSSS) is a modulation technique used in older Wi-Fi standards (like 802.11b). A **spectral mask** defines the maximum allowable power output of a transmitter across a range of frequencies, ensuring that the signal does not interfere with adjacent channels. The DSSS spectral mask specifies the power limits for 802.11b transmissions, which typically occupy a 22 MHz channel, with strict requirements for out-of-band emissions.

### 20 MHz OFDM Spectral Mask
Orthogonal Frequency Division Multiplexing (OFDM) is a more advanced modulation technique used in newer Wi-Fi standards (802.11a, g, n, ac, ax, be). The **20 MHz OFDM spectral mask** (sourced from the IEEE 802.11-2016 Standard, among others) defines the power limits for OFDM transmissions within a 20 MHz channel. Compared to DSSS, OFDM signals have a flatter spectral shape within their primary bandwidth and sharper roll-offs, allowing for more efficient use of the spectrum and better co-existence with other Wi-Fi and non-Wi-Fi devices. Adhering to these spectral masks is crucial for regulatory compliance and minimizing interference in dense wireless environments.

