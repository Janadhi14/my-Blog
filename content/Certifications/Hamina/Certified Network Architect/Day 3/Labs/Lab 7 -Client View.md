## Overview

Lab 7 introduces students to Hamina's Client View functionality, which simulates real-world client roaming behavior and helps validate wireless design from the end-user perspective. This lab focuses on understanding client association decisions and roaming patterns.

## Key Learning Objectives

- Understand client-side wireless behavior and roaming decisions
- Simulate realistic user movement patterns throughout the facility
- Analyze client association areas and handoff points
- Validate wireless design from the client perspective
- Identify potential roaming issues before deployment

## Main Activities

### 1. Client View Setup

**Tool Configuration:**

- Select **Client View** from the left-hand panel
- Choose **iPhone** as the client device type
- Configure client-specific parameters and capabilities
- Set realistic client behavior models

**Initial Testing:**

- Start with **Show association area toggle OFF**
- Place virtual client in the top right corner of central corridor
- Observe basic roaming behavior without visual aids

### 2. Roaming Simulation Exercise

**Movement Pattern:**

- **Starting Point**: Top right corner of central corridor
- **Path**: Complete circuit around the corridor returning to start
- **Objective**: Count total number of AP handoffs during journey

**Roaming Observations:**

- Monitor which APs the client associates with
- Note roaming trigger points and handoff locations
- Observe any unexpected roaming behavior (e.g., skipping nearby APs)
- Document roaming frequency and patterns

**Key Question**: _"How many APs did you roam to?"_

- Typical expectation vs. actual results
- Understanding of roaming algorithms and thresholds

### 3. Association Area Analysis

**Visual Aid Activation:**

- Turn **ON** the "Show association area" toggle
- Repeat the same roaming test with visual feedback
- Compare results with and without association visualization

**Association Area Benefits:**

- **Visual Understanding**: See coverage boundaries for each AP
- **Roaming Logic**: Understand why clients choose specific APs
- **Handoff Points**: Identify optimal and suboptimal roaming locations
- **Design Validation**: Confirm roaming behavior matches design intent

### 4. Roaming Behavior Analysis

**Client Decision Factors:**

- **Signal Strength**: Primary factor in AP selection
- **Roaming Thresholds**: When clients trigger handoffs
- **Hysteresis**: Prevents ping-pong roaming between APs
- **Load Balancing**: Advanced features affecting association

**Unexpected Behaviors:**

- **Skip Roaming**: Clients may skip intermediate APs
- **Sticky Clients**: Reluctance to roam from current AP
- **Optimal Path**: Clients don't always choose nearest AP
- **Band Steering**: Influence of dual-band operation

## Technical Concepts Covered

### Client Roaming Fundamentals

- **Association Process**: How clients initially connect to APs
- **Roaming Triggers**: Signal strength thresholds that initiate handoffs
- **AP Selection**: Criteria clients use to choose new APs
- **Seamless Handoff**: Maintaining connectivity during roaming

### Design Validation Methods

- **User Journey Mapping**: Testing common movement patterns
- **Coverage Verification**: Ensuring adequate signal throughout paths
- **Roaming Optimization**: Identifying and fixing roaming dead zones
- **Client Experience**: Validating design from user perspective

### Real-World Applications

- **Hospital Corridors**: Medical staff mobility patterns
- **Office Environments**: Worker movement between areas
- **Retail Spaces**: Customer shopping journey simulation
- **Educational Facilities**: Student movement between classrooms

## Practical Skills Developed

- **Client Behavior Simulation**: Understanding real-world usage patterns
- **Roaming Path Analysis**: Identifying optimal and problematic routes
- **Design Validation**: Testing theoretical coverage with practical movement
- **Troubleshooting**: Predicting and preventing roaming issues
- **User Experience Focus**: Designing from client perspective

## Critical Design Insights

### Association Area Importance

- **Visual Tool**: Association areas help understand complex roaming decisions
- **Overlap Zones**: Areas where multiple APs compete for client association
- **Handoff Optimization**: Proper overlap ensures smooth roaming
- **Coverage Gaps**: Areas where no strong AP association exists

### Roaming Behavior Patterns

- **Predictable vs. Actual**: Real roaming often differs from expectations
- **Client Algorithms**: Different devices may roam differently
- **Network Optimization**: Design should accommodate various client types
- **Performance Impact**: Poor roaming affects user experience significantly

## Common Findings and Solutions

- **Every-Other-AP Roaming**: Common pattern due to proper cell sizing
- **Roaming Dead Zones**: Areas requiring additional AP coverage
- **Sticky Client Issues**: May need aggressive roaming parameters
- **Band Preference**: 5GHz vs 2.4GHz association patterns

## Foundation for Advanced Labs

This lab provides essential client behavior understanding needed for:

- Multi-floor roaming coordination
- High-density environment optimization
- Real-world deployment troubleshooting
- Advanced roaming parameter tuning
- User experience optimization strategies

## Validation Methodology

- **Pre-Deployment Testing**: Virtual client testing prevents real-world issues
- **Movement Pattern Simulation**: Test all critical user paths
- **Roaming Threshold Validation**: Ensure smooth handoffs
- **Performance Verification**: Confirm design meets user mobility needs