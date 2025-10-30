## Topics Covered

- Interface speed and duplex
- Speed and duplex autonegotiation
- Interface status
- Interface counters and errors

---

## Switch vs Router Interface Differences

### Key Differences:

- **Router interfaces**: Have `shutdown` command applied by default → `administratively down/down` state
- **Switch interfaces**: Do NOT have `shutdown` command by default → Either `up/up` (if connected) or `down/down` (if not connected)

### Physical Comparison:

- **Routers**: Fewer interfaces (e.g., 8 SFP + few RJ45)
- **Switches**: Many more interfaces (e.g., 48 RJ45 + 4 SFP) - designed to connect end hosts

---

## Network Topology (Example)

- LAN: 192.168.1.0/24
- 1 Router (R1)
- 2 Switches (SW1, SW2)
- 4 PCs (PC1-4)
- Focus: SW1 interfaces (F0/1, F0/2, F0/3, F0/4)

---

## Basic Interface Commands

### Show IP Interface Brief

```
enable
show ip interface brief
```

**Output Interpretation:**

- **Status column**: Layer 1 status
- **Protocol column**: Layer 2 status
- Connected interfaces: `up/up`
- Unconnected interfaces: `down/down` (NOT administratively down)
- IP address: Unassigned for Layer 2 switchports

### Show Interfaces Status

```
show interfaces status
```

**Output Fields:**

- **Port**: Interface name
- **Name**: Description (not "description" field)
- **Status**:
    - `connected` - Interface is connected
    - `notconnect` - Interface not connected
    - `disabled` - Interface has shutdown command
- **VLAN**: Default is VLAN 1, trunk shows as "trunk"
- **Duplex**:
    - `auto` - Autonegotiation enabled
    - `a-full` - Auto-negotiated full duplex
    - `a-half` - Auto-negotiated half duplex
- **Speed**:
    - `auto` - Autonegotiation enabled
    - `a-100` - Auto-negotiated 100 Mbps
    - `a-10` - Auto-negotiated 10 Mbps
- **Type**: Interface type (e.g., 10/100BASE-TX)

---

## Configuring Interface Speed and Duplex

### Enter Interface Configuration Mode

```
configure terminal
interface fastethernet 0/1
```

### Configure Interface Description

```
description ## to SW2 ##
```

### Set Speed Manually

```
speed ?
speed 100
```

**Available speeds:**

- `10` - 10 Mbps
- `100` - 100 Mbps
- `auto` - Autonegotiation (default)

### Set Duplex Manually

```
duplex ?
duplex full
```

**Available duplex modes:**

- `auto` - Autonegotiation (default)
- `full` - Full duplex
- `half` - Half duplex

### Return to Default Settings

```
no speed
no duplex
```

### Verify Configuration

```
do show interfaces status
```

### Save Configuration

```
end
write memory
```

or

```
copy running-config startup-config
```

---

## Full vs Half Duplex

### Full Duplex

- Device can **send AND receive** data simultaneously
- **No collisions** occur
- Preferred mode for modern networks

### Half Duplex

- Device **cannot** send and receive simultaneously
- Must **wait** for other devices to finish sending
- Uses **CSMA/CD** (Carrier Sense Multiple Access with Collision Detection)
- If collision occurs, device sends **jamming signal**
- Devices wait **random period** before resending

---

## Autonegotiation

### How It Works:

- Devices automatically negotiate speed and duplex
- Default setting on Cisco switches
- Works best when enabled on **both** devices

### Autonegotiation Rules (when disabled on one side):

1. **Speed**: Device will try to **sense** the speed (usually successful)
2. **Duplex**: Device **cannot sense** duplex, uses these rules:
    - If speed is **10 or 100 Mbps** → Use **half duplex**
    - If speed is **1000 Mbps or greater** → Use **full duplex**

### Common Issue: Duplex Mismatch

- One side uses full duplex, other uses half duplex
- Results in **collisions** and **poor performance**
- Half duplex side can't send and receive simultaneously
- Full duplex side unaware, continues sending → causes collisions

---

## Interface Status Codes

### Status/Protocol Combinations:

#### up/up

- **Layer 1**: up
- **Layer 2**: up
- Interface is functioning properly

#### down/down

- **Layer 1**: down
- **Layer 2**: down
- Interface not connected to another device

#### administratively down/down

- Interface has `shutdown` command applied
- Common on routers (default state)

#### up/down

- **Layer 1**: up (physical connection OK)
- **Layer 2**: down (encapsulation/protocol issue)

---

## Interface Counters and Errors

### Show Interfaces Command

```
show interfaces fastethernet 0/1
```

### View All Interfaces (Brief)

```
show interfaces
```

### Key Counters and Errors:

#### Runts

- Frames **smaller** than minimum size (64 bytes including FCS)
- Often caused by collisions

#### Giants

- Frames **larger** than maximum size (1518 bytes)
- Exceed Ethernet maximum frame size

#### CRC (Cyclic Redundancy Check)

- Frames that **failed CRC check**
- Detected via FCS (Frame Check Sequence) in Ethernet trailer
- Indicates transmission errors

#### Frame

- Frames with **incorrect or illegal format**

#### Input Errors

- **Total** of various error counters
- Includes runts, giants, CRC, and frame errors

#### Output Errors

- Frames switch **tried to send but failed** due to error

### Example Error Analysis

```
show interfaces f0/1
```

Look at bottom of output for error counters:

- Runts: X
- Giants: X
- CRC: X
- Frame: X
- Input errors: X (total)
- Output errors: X

---

## Command Summary

### Basic Show Commands

```
show ip interface brief
show interfaces status
show interfaces
show interfaces fastethernet 0/1
```

### Configuration Commands

```
configure terminal
interface fastethernet 0/1
description ## description text ##
speed {10 | 100 | auto}
duplex {auto | full | half}
no speed
no duplex
shutdown
no shutdown
end
write memory
```

---

## Quiz Answers

### Question 1: Duplex Mismatch (autonegotiation disabled)

**Answer: B** - Collisions will occur

- Half duplex side can't send/receive simultaneously
- Full duplex side unaware, sends data anyway
- Results in collisions and poor performance

### Question 2: Collision Detection on Half-Duplex

**Answer: A** - CSMA/CD

- Carrier Sense Multiple Access with Collision Detection
- Devices listen before sending
- Describes reaction when collision occurs
- (CSMA/CA is collision avoidance, used in wireless)

### Question 3: Command to Show Error Counters

**Answer: A** - `show interfaces`

- Shows detailed counters at bottom of output
- `show ip interface brief` - doesn't show errors
- `show interfaces status` - doesn't show errors
- `show interfaces errors` - not a real command

### Question 4: Types of Interface Errors

**Answer: D** - Runts, Giants, CRC

- Runts: Frames too small
- Giants: Frames too large
- CRC: Failed CRC check
- (Broadcasts are normal, not errors)

### Question 5: Autonegotiation (disabled on one side)

**Scenario:** SW1 has auto enabled, SW2 has auto disabled (100 Mbps, full duplex)

**Answer: B** - Speed 100 Mbps, Duplex Half

- SW1 will **sense speed** correctly (100 Mbps)
- SW1 **cannot sense duplex**
- Speed is 10/100 Mbps → defaults to **half duplex**
- Results in duplex mismatch and poor performance

---

## Key Takeaways

1. **Switch interfaces are NOT shutdown by default** (unlike routers)
2. **Full duplex is preferred** - allows simultaneous send/receive
3. **Autonegotiation works best when enabled on both sides**
4. **Duplex mismatch causes collisions** and performance issues
5. **CSMA/CD** used on half-duplex to detect/avoid collisions
6. Monitor interface errors using **`show interfaces`** command
7. **Runts, Giants, CRC** are common error types to watch for
8. Layer 2 switchports **don't need IP addresses**