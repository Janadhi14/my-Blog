
## Key Learning Objectives

- Understand IPv4 addressing fundamentals
- Master binary to decimal conversions
- Learn about IP address classes and structure
- Understand network vs. host portions of IP addresses

---

## Layer 3 (Network Layer) Review

### Core Functions

- **Connectivity**: Provides connectivity between end hosts on **different networks** (outside LANs)
- **Logical Addressing**: Uses IP addresses (vs. Layer 2 MAC addresses)
- **Path Selection**: Routes traffic over complex networks with multiple possible paths
- **Device**: **Routers** operate at Layer 3

### Key Difference from Layer 2

- **Layer 2 (Switches)**: Connect and expand networks within same LAN
- **Layer 3 (Routers)**: Separate and route between different networks

---

## Introduction to Routing

### Network Segmentation Example

**Before Router (One Network):**

- All PCs connected via switches = Same network (192.168.1.0/24)
- PC1: 192.168.1.1, PC2: 192.168.1.2, PC3: 192.168.1.3, PC4: 192.168.1.4
- Broadcast frames reach all devices

**After Adding Router (Two Networks):**

- **Network 1**: 192.168.1.0/24 (PC1, PC2, SW1)
- **Network 2**: 192.168.2.0/24 (PC3, PC4, SW2)
- **Router Interfaces**:
    - G0/0: 192.168.1.254 (connects to Network 1)
    - G0/1: 192.168.2.254 (connects to Network 2)
- Broadcasts limited to local network only

---

## IPv4 Header Structure

### Key Fields (32-bit each)

- **Source IP Address**: 32 bits (bits 0-31)
- **Destination IP Address**: 32 bits (bits 0-31)
- **Total IPv4 Address Length**: 32 bits = 4 bytes

---

## IPv4 Address Format

### Structure

- **32 bits total** divided into **4 octets** (8 bits each)
- **Dotted Decimal Notation**: Human-readable format (e.g., 192.168.1.254)
- **Binary Representation**: How computers actually process addresses

### Example Conversion: 192.168.1.254

|Decimal|Binary|
|---|---|
|192|11000000|
|168|10101000|
|1|00000001|
|254|11111110|

---

## Number System Review

### Decimal (Base 10)

- Each digit increases by factor of 10
- Example: 3294 = (3×1000) + (2×100) + (9×10) + (4×1)

### Hexadecimal (Base 16)

- Each digit increases by factor of 16
- Uses digits 0-9 and letters A-F (A=10, B=11, C=12, D=13, E=14, F=15)

### Binary (Base 2)

- Each digit increases by factor of 2
- Uses only 0s and 1s
- **Critical for understanding IP addressing**

---

## Binary Number System

### Bit Values in 8-bit Octet

|Position|8|7|6|5|4|3|2|1|
|---|---|---|---|---|---|---|---|---|
|Value|128|64|32|16|8|4|2|1|

### Binary to Decimal Conversion

**Method**: Add values where bit = 1

**Example 1**: 10001111 (binary) = ?

- 128 + 8 + 4 + 2 + 1 = **143** (decimal)

**Example 2**: 01110110 (binary) = ?

- 64 + 32 + 16 + 4 + 2 = **118** (decimal)

### Decimal to Binary Conversion

**Method**: Subtract largest possible values from left to right

**Example**: Convert 221 to binary

1. 221 - 128 = 93 → bit 8 = 1
2. 93 - 64 = 29 → bit 7 = 1
3. 29 < 32 → bit 6 = 0
4. 29 - 16 = 13 → bit 5 = 1
5. 13 - 8 = 5 → bit 4 = 1
6. 5 - 4 = 1 → bit 3 = 1
7. 1 < 2 → bit 2 = 0
8. 1 - 1 = 0 → bit 1 = 1

**Result**: 11011101

### Range of 8-bit Values

- **Minimum**: 00000000 = 0
- **Maximum**: 11111111 = 255
- **Total Range**: 0-255 (256 possible values)

---

## IPv4 Address Structure

### Network vs. Host Portions

Every IPv4 address consists of:

- **Network Portion**: Identifies the network
- **Host Portion**: Identifies the specific device on that network

### Prefix Length Notation

- **Slash Notation**: /24, /16, /8
- **Meaning**: Number of bits in network portion
- **/24**: First 24 bits = network, last 8 bits = host
- **/16**: First 16 bits = network, last 16 bits = host
- **/8**: First 8 bits = network, last 24 bits = host

### Examples

**192.168.1.254/24**

- Network: 192.168.1 (first 24 bits)
- Host: 254 (last 8 bits)

**154.78.111.32/16**

- Network: 154.78 (first 16 bits)
- Host: 111.32 (last 16 bits)

**12.128.251.23/8**

- Network: 12 (first 8 bits)
- Host: 128.251.23 (last 24 bits)

---

## IPv4 Address Classes

### Class Definitions

|Class|First Octet Range|Leading Bits|Network Bits|Host Bits|Default Prefix|
|---|---|---|---|---|---|
|A|1-126|0|8|24|/8|
|B|128-191|10|16|16|/16|
|C|192-223|110|24|8|/24|
|D|224-239|1110|N/A|N/A|Multicast|
|E|240-255|1111|N/A|N/A|Experimental|

### Class Characteristics

**Class A**

- **Few networks**, **many hosts per network**
- ~128 networks, ~16.7 million hosts each
- Large organizations/ISPs

**Class B**

- **Medium networks**, **medium hosts**
- ~16,000 networks, ~65,000 hosts each
- Medium-large organizations

**Class C**

- **Many networks**, **few hosts per network**
- ~2 million networks, 254 hosts each
- Small organizations/departments

### Special Ranges

**Class D (Multicast)**: 224-239

- Used for multicast traffic
- Will be covered later in course

**Class E (Experimental)**: 240-255

- Reserved for experimental use
- Not used in practice

---

## Loopback Addresses

### Range: 127.0.0.0 to 127.255.255.255

- **Purpose**: Test local device network stack
- **Behavior**: Traffic sent to loopback is processed locally
- **Common Address**: 127.0.0.1 (localhost)
- **Round Trip Time**: 0ms (no actual network travel)

### Why 127 is excluded from Class A

- Class A range technically 1-127
- But 127 reserved for loopback
- **Usable Class A range**: 1-126

---

## Netmasks (Subnet Masks)

### Purpose

Alternative way to express prefix length (used by Cisco devices)

### Format

- Written in dotted decimal
- Network portion = all 1s
- Host portion = all 0s

### Common Netmasks

|Prefix|Netmask|Binary|
|---|---|---|
|/8|255.0.0.0|11111111.00000000.00000000.00000000|
|/16|255.255.0.0|11111111.11111111.00000000.00000000|
|/24|255.255.255.0|11111111.11111111.11111111.00000000|

### Equivalence

- /24 = 255.255.255.0
- /16 = 255.255.0.0
- /8 = 255.0.0.0

---

## Special IP Addresses

### Network Address

- **Definition**: Host portion = all 0s
- **Purpose**: Identifies the network itself
- **Example**: 192.168.1.0/24
- **Cannot be assigned to hosts**
- **First address in network range**

### Broadcast Address

- **Definition**: Host portion = all 1s
- **Purpose**: Send to all hosts on local network
- **Example**: 192.168.1.255/24
- **Cannot be assigned to hosts**
- **Last address in network range**
- **Frame destination MAC**: FF:FF:FF:FF:FF:FF

### Usable Host Range

For network 192.168.1.0/24:

- **Network Address**: 192.168.1.0 (unusable)
- **First Usable**: 192.168.1.1
- **Last Usable**: 192.168.1.254
- **Broadcast Address**: 192.168.1.255 (unusable)
- **Total Usable Hosts**: 254 (256 - 2)

---

## Binary Conversion Practice

### Binary to Decimal Examples

1. **10001111** = 128 + 8 + 4 + 2 + 1 = **143**
2. **01110110** = 64 + 32 + 16 + 4 + 2 = **118**
3. **11101100** = 128 + 64 + 32 + 8 + 4 = **236**

### Decimal to Binary Examples

1. **127** = 01111111
2. **207** = 11001111
3. **221** = 11011101

### Key Tips

- **Binary to Decimal**: Add bit values where bit = 1
- **Decimal to Binary**: Subtract from largest to smallest
- **Remember bit values**: 128, 64, 32, 16, 8, 4, 2, 1
- **Each octet range**: 0-255

---

## Important Terms

### Octet

- **Definition**: 8-bit group
- **Usage**: Each section of IPv4 address
- **Range**: 0-255 in decimal

### Dotted Decimal

- **Definition**: Human-readable IP format
- **Example**: 192.168.1.1
- **vs. Binary**: 11000000.10101000.00000001.00000001

### Prefix Length

- **Slash notation**: /8, /16, /24, /30, etc.
- **Meaning**: Number of network bits
- **Determines**: Network vs. host portions

---

## Key Takeaways

1. **IPv4 addresses are 32 bits** divided into 4 octets of 8 bits each
2. **Binary understanding is essential** for subnetting and networking
3. **Every IP has network and host portions** determined by prefix length
4. **Address classes define default boundaries** but VLSM allows flexibility
5. **Special addresses** (network, broadcast, loopback) have specific purposes
6. **Routers separate broadcast domains** and enable inter-network communication

---

## Practice Focus Areas

### Master These Conversions

- Binary ↔ Decimal for individual octets
- Identify network vs. host portions
- Calculate network and broadcast addresses
- Determine address class from first octet

### Next Topics

- Subnetting and VLSM
- Routing fundamentals
- Static and dynamic routing protocols
- Advanced IPv4 concepts

---

_Note: This lecture had quiz questions focusing on binary/decimal conversions. Practice these conversions regularly to build confidence before moving to more complex subnetting topics._