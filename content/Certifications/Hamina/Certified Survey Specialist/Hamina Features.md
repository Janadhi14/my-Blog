# Hamina Features

## Explore

## Guess Range
Filters -> Nerd Nobs
* 1m guest range
* 3m guest range

## Interference
Filters -> Nerd Nobs
* All Networks
* My Network

## Placing and Removing APs
* Remove AP from Map
* Place AP on map

## Survey Notes

## Switching floors



## Detailed Hamina Features
Hamina Network Planner and Hamina Onsite offer a suite of features designed to streamline wireless network design, analysis, and troubleshooting. These tools provide granular control and visualization capabilities to help network professionals optimize Wi-Fi performance.

### Explore
The 'Explore' feature in Hamina Network Planner allows users to interactively navigate and visualize their wireless network designs in a dynamic environment. This goes beyond static heatmaps, enabling users to:

*   **Real-time Visualization:** See heatmaps update in real-time as access points are adjusted or moved, providing immediate feedback on design changes.
*   **3D Modeling:** Hamina supports 3D modeling of the environment, allowing for a more realistic representation of signal propagation and coverage in complex multi-floor buildings.
*   **Interactive Analysis:** Users can click on specific points on the map to get detailed information about signal strength, noise, and other metrics at that location.
*   **Client View Simulation:** The 'Explore' functionality often integrates with the 'Client View' feature, allowing users to simulate how different client devices (with varying capabilities and roaming behaviors) would experience the network.

This interactive exploration helps in fine-tuning designs, identifying potential issues, and understanding the network's behavior from various perspectives.

### Guess Range (Nerd Nobs)
The 'Guess Range' feature, sometimes referred to as 'Nerd Nobs' in the context of filters, is a setting that influences how Hamina interpolates data between measured points during a site survey. It essentially defines the radius around a measurement point within which the software will 


extrapolate the signal data. A smaller guess range (e.g., 1m) will result in a more granular heatmap but may leave gaps if survey points are too far apart. A larger guess range (e.g., 3m) will fill in more of the map but might smooth out localized variations. Hamina uses a default guess range, but allowing users to adjust it provides flexibility for different survey densities and desired levels of detail in the visualization.

### Interference
Interference is a major challenge in wireless networks, degrading performance and causing connectivity issues. Hamina provides tools to visualize and analyze interference, helping network professionals identify and mitigate its sources. The ability to filter by "All Networks" and "My Network" is crucial:

*   **All Networks:** This view displays interference from all detected Wi-Fi networks, including neighboring networks that may not be under your control. This helps in understanding the overall RF environment and identifying potential sources of co-channel or adjacent-channel interference from external sources.
*   **My Network:** This view focuses specifically on interference generated within your own network, such as co-channel interference between your own access points. This helps in optimizing your channel plan and power settings to minimize self-interference.

Hamina's interference visualization, often presented as a heatmap, allows users to pinpoint areas with high interference levels, enabling targeted troubleshooting and optimization efforts.

### Placing and Removing APs
Hamina Network Planner offers intuitive tools for managing access points within a design:

*   **Place AP on map:** This feature allows users to virtually place access points on the imported floor plan. Users can select specific AP models, define their mounting height and type, and then position them on the map. As APs are placed, Hamina dynamically updates heatmaps to show the predicted coverage and performance, allowing for iterative design adjustments.
*   **Remove AP from Map:** This function enables users to easily remove access points from the design. This is useful for optimizing the number of APs, experimenting with different placements, or cleaning up a design. The heatmaps will update in real-time to reflect the removal of the AP and its impact on coverage.

These features are fundamental for creating and refining wireless network designs, allowing for quick experimentation and optimization of AP placement.

### Survey Notes
Survey notes are an essential feature for documenting observations and critical information during a site survey. While conducting a physical survey, it's common to encounter various factors that can impact Wi-Fi performance but might not be directly captured by RF measurements. Hamina's survey notes functionality allows users to:

*   **Add contextual information:** Record details about the environment, such as the presence of large metal objects, unusual building materials, potential sources of non-Wi-Fi interference (e.g., microwave ovens, cordless phones), or specific user complaints.
*   **Attach photos:** Many survey tools allow users to attach photos to their notes, providing visual context for specific locations or observations.
*   **Improve troubleshooting:** Detailed notes can be invaluable for future troubleshooting, helping to recall specific conditions or anomalies observed during the survey.
*   **Enhance reporting:** Comprehensive notes contribute to more detailed and informative survey reports, providing a complete picture of the wireless environment.

### Switching Floors
In multi-story buildings, the ability to easily switch between floor plans is crucial for efficient wireless network design and surveying. Hamina Network Planner and Onsite facilitate this by allowing users to:

*   **Manage multiple floor plans:** Import and organize separate floor plans for each level of a building within a single project.
*   **Visualize inter-floor propagation:** While primarily focusing on intra-floor coverage, the software can also help in understanding how signals might propagate between floors, especially when considering AP placement near stairwells or open areas.
*   **Streamline workflow:** Seamlessly switch between different floor views to place APs, conduct surveys, and analyze data for each level, ensuring comprehensive coverage across the entire building.

