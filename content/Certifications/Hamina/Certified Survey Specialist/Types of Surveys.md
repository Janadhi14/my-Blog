# Types of Surveys

## Three Types of Survey

### Point Survey
* Only collects data when you click
* Easiest survey method
* Paint the map methodology
* Does not always get measurements on both side of what you care about

### Line Survey
* A continuous survey between two points
* Remove some of the operation complexity of continuous surveys

### Continuous Survey
* The expert method
* Collects the most data
* Take practice
* Most susceptible to user error

## Continuous Survey Rules
1. Click when you start
2. Click when you turn
3. Click when you stop
4. Click both sides of the attenuating objects
5. Walk at a consistent pace
6. Click accurately
7. Close doors



## Detailed Explanation of Survey Types
Wi-Fi site surveys are conducted using various methodologies, each suited for different scenarios and offering distinct advantages and disadvantages. The three main types of surveys mentioned are Point Survey, Line Survey, and Continuous Survey.

### Point Survey
A Point Survey is the simplest and most basic method of data collection during a Wi-Fi site survey. In this method:

*   **Only collects data when you click:** The survey tool (e.g., Hamina Onsite with Nomad) only records Wi-Fi signal data (RSSI, SNR, noise, etc.) at the exact moment the user clicks a point on the map. The user physically stops at a location, takes a measurement, and then moves to the next point.
*   **Easiest survey method:** Due to its straightforward nature, it is often considered the easiest method for beginners or for quick spot checks.
*   **Paint the map methodology:** This approach involves strategically placing measurement points across the floor plan to "paint" a picture of the Wi-Fi coverage. The density of points depends on the environment and the required level of detail.
*   **Does not always get measurements on both sides of what you care about:** A significant limitation is that it can be challenging to ensure measurements are taken on both sides of attenuating objects (like walls or large furniture) unless specifically planned and executed. This can lead to an incomplete understanding of signal propagation through barriers.

**Best Use Cases:** Small areas, quick validation checks, or when precise control over measurement locations is paramount.

### Line Survey
A Line Survey is a more efficient method than a point survey for covering larger areas, as it involves continuous data collection along a defined path:

*   **A continuous survey between two points:** The user defines a starting point and an ending point, and the survey tool continuously collects data as the user walks along a straight line between these two points. This provides a more granular view of signal changes along a path.
*   **Removes some of the operational complexity of continuous surveys:** While more advanced than a point survey, it is generally less complex to execute than a full continuous survey, as it focuses on straight-line segments.

**Best Use Cases:** Long corridors, open office spaces, or when a detailed signal profile along specific paths is required.

### Continuous Survey
The Continuous Survey, often considered the "expert method," provides the most comprehensive and detailed data collection for Wi-Fi site surveys:

*   **The expert method:** This method requires more skill and practice to execute effectively but yields the richest dataset.
*   **Collects the most data:** Data is collected continuously as the user walks through the environment, tracing their path on the digital floor plan. This results in a dense collection of data points, providing a highly accurate and detailed heatmap of the Wi-Fi environment.
*   **Take practice:** Mastering continuous surveys requires practice to maintain a consistent walking pace, accurately trace the path, and ensure proper data collection.
*   **Most susceptible to user error:** Inconsistent walking speed, inaccurate path tracing, or missing critical points (like turning corners or passing through attenuating objects) can lead to inaccuracies in the survey data.

**Best Use Cases:** Large, complex environments, high-density deployments, or when a highly accurate and detailed understanding of the RF environment is critical for design validation or troubleshooting.

## Detailed Continuous Survey Rules
To minimize user error and maximize the accuracy of a continuous survey, specific rules should be followed:

1.  **Click when you start:** Begin the data collection by clicking at your starting point on the map. This anchors the beginning of your survey path.
2.  **Click when you turn:** Every time you change direction (e.g., turn a corner, enter a new room), click on the map. This helps the software accurately map your path and ensures that signal changes around corners are captured.
3.  **Click when you stop:** End the data collection for a segment by clicking at your stopping point. This clearly defines the end of a continuous path.
4.  **Click both sides of the attenuating objects:** As with point surveys, it is crucial to take measurements immediately before and after passing through any significant attenuating objects (e.g., thick walls, metal doors). This allows the survey software to accurately calculate the signal loss caused by these objects.
5.  **Walk at a consistent pace:** Maintain a steady and consistent walking speed throughout the survey. Inconsistent pacing can lead to uneven data density and potentially misrepresent signal coverage.
6.  **Click accurately:** Always click on the map at your precise physical location. This ensures that the collected data is correctly correlated with the physical environment.
7.  **Close doors:** For accurate signal propagation modeling, ensure that doors are in their typical operational state (e.g., closed if they are usually closed) during the survey. Open doors can significantly alter signal paths and lead to inaccurate results.

