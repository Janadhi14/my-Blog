## Overview

Lab 6 introduces students to wireless capacity planning in Hamina Network Planner, teaching how to model user devices, analyze capacity requirements, and optimize access point deployment for high-density environments.

## Key Learning Objectives

- Configure capacity zones with realistic device loads
- Understand capacity pill indicators and their meanings
- Analyze capacity bottlenecks across different radio bands
- Optimize AP placement for capacity requirements
- Adjust 6 GHz client capabilities for realistic modeling

## Main Activities

### 1. Capacity Zone Creation

**Device Configuration:**

- **200 iPhones** (mobile voice/data users)
- **400 MacBooks** (high-bandwidth laptop users)
- **200 Android Phones** (mobile users)
- **200 iPads** (tablet users)
- **Total: 1,000 devices** across the hospital floor plan

**Zone Setup:**

- Create "High Capacity" zone covering entire indoor area
- Draw capacity boundary around building perimeter
- Exclude outdoor courtyard from initial capacity planning

### 2. Capacity Analysis Tools

**Pill Indicators:**

- **New capacity pills** appear under channel indicators
- Show client distribution across **2.4GHz, 5GHz, 6GHz** radios
- Color coding indicates capacity status:
    - Green: Adequate capacity
    - Yellow: Approaching limits
    - Red: Over capacity

**Capacity Legend Features:**

- **Radios Tab**: Shows radio utilization per band
- **Clients Tab**: Displays client distribution and association patterns
- **Limits Tab**: Shows capacity thresholds and bottlenecks

### 3. 6GHz Client Modeling

**Realistic Client Capabilities:**

- Default 6GHz capable clients: Adjust to **10%** (realistic current market)
- Test scenario with **50%** to see future network behavior
- Observe capacity redistribution across radio bands

**Key Findings:**

- Higher 6GHz adoption reduces load on 2.4/5GHz
- Fewer clients fail capacity with more 6GHz devices
- 10% represents current realistic deployment scenario

### 4. Capacity Optimization Strategies

**Courtyard Isolation:**

- Create separate "Courtyard" capacity zone with no devices
- Prevents courtyard area from affecting indoor AP capacity calculations
- Isolates indoor capacity requirements from outdoor coverage

**AP Capacity Management:**

- Identify APs failing capacity (typically near high-traffic areas)
- Add additional APs in over-capacity areas
- Move existing APs to optimize coverage vs. capacity balance

## Technical Concepts Covered

### Capacity vs. Coverage

- **Coverage**: Signal strength requirements (-65dBm primary)
- **Capacity**: Throughput and association limits per AP
- **Balance**: APs near courtyards serve both indoor and outdoor areas

### Radio Band Distribution

- **2.4GHz**: Limited channels, higher interference, legacy devices
- **5GHz**: More channels, primary data band, best performance
- **6GHz**: Clean spectrum, future-proofing, limited current device support

### Capacity Planning Variables

- **Device Types**: Different bandwidth requirements per device category
- **User Density**: Peak simultaneous usage patterns
- **Application Mix**: Voice, video, data applications per device type
- **Association Limits**: Maximum clients per radio before performance degrades

## Practical Skills Developed

- Creating realistic device load scenarios
- Interpreting capacity visualization tools
- Identifying and resolving capacity bottlenecks
- Balancing coverage and capacity requirements
- Future-proofing network designs for 6GHz adoption

## Critical Design Insights

- **Capacity zones should match actual user areas** (exclude courtyards, stairwells)
- **6GHz adoption rate significantly impacts design** (plan for gradual adoption)
- **APs serving multiple areas** (indoor/outdoor) often become capacity bottlenecks
- **Device type mix matters more than total device count** for capacity planning

## Foundation for Advanced Labs

This lab provides essential capacity planning skills needed for:

- Multi-floor capacity coordination
- High-density venue design (arenas, conference centers)
- Real-world deployment scenarios
- Network performance optimization