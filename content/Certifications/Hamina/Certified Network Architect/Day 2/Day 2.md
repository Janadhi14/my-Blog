## Design methodology 
#### Logical Workflow (Ideal Process)

This represents the textbook approach when all resources and access are available:

**Design Workshop (Define)** → **Onsite Measurements** → **RF Modeling** → **Validate RF Model** → **Final Design** → **Design Documentation**

- Starts with requirements gathering
- Conducts physical site measurements first
- Creates RF models based on actual data
- Validates and refines the model
- Produces final design and documentation

#### Practical Workflow (Remote Design Workshop)

Used when initial site visits aren't feasible, common in today's remote work environment:

**Design Workshop (Define)** → **Predictive RF Modeling** → **Onsite Measurements** → **Validate RF Model** → **Final Design** → **Design Documentation**

- Requirements gathering happens remotely
- Creates predictive models using floor plans and estimated materials
- Validates with later site measurements
- Refines design based on actual conditions

####  Practical Workflow (Onsite Design Workshop)

When the design workshop can happen at the actual site:

**Predictive RF Modeling** → **Design Workshop (Define)** → **Onsite Measurements** → **Validate RF Model** → **Final Design** → **Design Documentation**

- Basic modeling done first
- Requirements refined during onsite workshop
- Immediate validation possible
- More accurate initial assumptions

# RF Measurement and Validation Notes

## Measuring Scale

**Key Principle: Measure the largest dimension possible**

- **Why larger measurements are better**: Scale errors compound over distance
    - 5% error on 1m measurement = larger cumulative error
    - 5% error on 10m measurement = smaller relative impact
- **Critical importance**: Hamina uses Free Space Path Loss calculations to determine signal strength
- **Validation step**: Always verify your scale is correct before proceeding

### Best Practices:

- Use laser measuring devices when available
- Measure wall-to-wall distances rather than door widths
- Cross-reference with architectural drawings if available
- Double-check scale against known reference points
## Measuring Wall Attenuation

### Process:

1. **Baseline measurement**: Stand in front of the wall with clear line-of-sight between Nomad and AP
    - Record RSSI value (e.g., -50 dBm)
2. **Attenuated measurement**: Move behind the wall
    - Record new RSSI value (e.g., -65 dBm)
3. **Calculate attenuation**: Difference between measurements
    - Example: -50 dBm - (-65 dBm) = 15 dB attenuation
4. **Repeat for accuracy**: Test multiple walls of same material type
    - Calculate average attenuation value
    - Use this average in Hamina material settings

### Tips:

- Maintain consistent distance from wall on both sides
- Ensure 4-5 meters separation for accurate readings
- Test different wall materials separately
- Document findings for future reference

## AP-on-a-Stick (APoaS)

### Purpose:

- **Primary use**: RF signal modeling and design validation
- **Wall attenuation verification**: Confirms material attenuation values
- **Design validation**: Tests actual vs. predicted coverage

### Equipment Setup:

- **Power source**: PoE injector or battery pack
- **Mounting**: Tripod with castors for mobility
- **AP selection**: Use identical model to planned deployment
    - Same antenna configuration
    - Same power output capabilities
    - Same frequency bands
### Validation Process:

1. Place APoaS at proposed AP location
2. Configure with design parameters
3. Survey coverage area with Nomad
4. Compare results to Hamina predictions
5. Adjust model or design as needed

### Key Considerations:

- **AP consistency**: Always use the same AP type you're validating
- **Height matching**: Position at planned mounting height
- **Configuration**: Use identical settings (power, channel, SSID)
- **Documentation**: Record all test positions and measurements
- ![[content/Certifications/Hamina/Certified Network Architect/Day 2/Screenshot.png|200]]
## Thresholds

## The Golden rule of Wifi 
- Get your RF as close ot your clients as possible

## Multipath
Multipath occurs when a transmitted RF signal reaches the receiver via multiple paths simultaneously. Instead of taking just one direct route, the radio waves bounce, reflect, and scatter off various objects in the environment, creating multiple copies of the same signal that arrive at different times

### Signal Propagation Mechanisms:

1. **Direct Path**: Line-of-sight transmission (shortest route)
2. **Reflection**: Signals bounce off surfaces like walls, floors, ceilings
3. **Refraction**: Signals bend when passing through different materials
4. **Diffraction**: Signals bend around obstacles and edges
5. **Scattering**: Signals bounce off small objects and rough surfaces

#### Effects of Multipath

###### Constructive Interference:

- Multiple signal copies arrive **in phase**
- Signals add together, **increasing** signal strength
- Can improve received signal power
- Generally beneficial for communication

####  Destructive Interference:

- Multiple signal copies arrive **out of phase**
- Signals cancel each other out, **decreasing** signal strength
- Can create "dead spots" or null zones
- Degrades communication quality

## AP placement 
