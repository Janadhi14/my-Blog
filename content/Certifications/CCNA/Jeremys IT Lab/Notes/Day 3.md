## What is a Networking Model?

Networking models categorize and provide a structure for networking protocols and standards. They define how network devices and software should work together by establishing logical rules for device communication.

**Without standardization:** Different manufacturers would create incompatible networking protocols, preventing devices from different companies from communicating with each other.

## OSI Model Overview

**OSI** = Open Systems Interconnection

- Created by ISO (International Organization for Standardization) in late 1970s/early 1980s
- Open standard (not proprietary)
- Conceptual model with 7 layers
- Not actually used in modern networks, but influences how network engineers think about networking

## OSI Model Layers (Top to Bottom)

### Application Layer (Layer 7)

- Closest to end user
- Interacts with software applications (web browsers, etc.)
- Examples: HTTP, HTTPS
- Functions: Identifying communication partners, synchronizing communication
- **Note:** Doesn't include the application itself, just the protocols

### Presentation Layer (Layer 6)

- Translates between application and network formats
- Handles encryption/decryption
- Ensures data is in format the receiving host can understand

### Session Layer (Layer 5)

- Controls dialogues/sessions between communicating hosts
- Establishes, manages, and terminates connections
- Example: Managing multiple YouTube sessions on servers

### Transport Layer (Layer 4)

- Segments and reassembles data
- Provides host-to-host (end-to-end) communication
- Provides process-to-process communication
- **PDU:** Segment (data + Layer 4 header)

### Network Layer (Layer 3)

- Provides connectivity between different networks
- Logical addressing (IP addresses)
- Path selection (routing)
- **Devices:** Routers operate at this layer
- **PDU:** Packet (segment + Layer 3 header)

### Data Link Layer (Layer 2)

- Node-to-node connectivity and data transfer
- Defines data formatting for physical transmission
- Error detection and correction
- Uses separate addressing system from Layer 3
- **Devices:** Switches operate at this layer
- **PDU:** Frame (packet + Layer 2 header + Layer 2 trailer)

### Physical Layer (Layer 1)

- Physical characteristics of transmission medium
- Voltage levels, cable lengths, connectors
- Converts digital bits to electrical/radio signals
- **PDU:** Bit

## Upper vs Lower Layers

**Upper Layers (5-7):** Application developers work with these **Lower Layers (1-4):** Network engineers work with these

## Encapsulation Process

1. **Data** prepared by upper layers
2. **Segment** = Data + Layer 4 header
3. **Packet** = Segment + Layer 3 header (includes IP addresses)
4. **Frame** = Packet + Layer 2 header + Layer 2 trailer
5. **Bits** transmitted at Physical layer

**De-encapsulation:** Reverse process when data is received

## Protocol Data Units (PDUs)

- **Layer 4:** Segment
- **Layer 3:** Packet
- **Layer 2:** Frame
- **Layer 1:** Bit

## Layer Interactions

**Adjacent-layer interaction:** Communication between different layers of the OSI model **Same-layer interaction:** Communication between the same layer on different systems

## OSI Model Memory Aids

**Layer 7 to 1:** All People Seem To Need Data Processing **Layer 1 to 7:** Please Do Not Teach Students Pointless Acronyms

## TCP/IP Suite

- Conceptual model actually used in modern networks
- Developed by US Department of Defense through DARPA
- Named after two foundational protocols: TCP and IP
- Fewer layers than OSI model

## OSI vs TCP/IP Comparison

|OSI Model|TCP/IP Suite|
|---|---|
|Application (7)|Application|
|Presentation (6)|↑|
|Session (5)|↑|
|Transport (4)|Transport|
|Network (3)|Internet|
|Data Link (2)|Link|
|Physical (1)|↑|

## Important Notes

- **TCP/IP is used in practice**, but we still use **OSI terminology** when discussing networks
- When someone says "Layer 4 problem," they mean OSI Layer 4 (Transport), not TCP/IP Layer 4 (Application)
- Routers only need Internet and Link layers for forwarding data
- Industry standards allow devices from different manufacturers to communicate

## Data Flow Example

Host A → Router 1 → Router 2 → Host B

- Hosts use full TCP/IP stack
- Routers only use Internet and Link layers for forwarding
- Same-layer interaction occurs between applications on Host A and Host B
- Transport layer provides host-to-host communication (segment never changes during routing)
 
![[content/Certifications/CCNA/Jeremys IT Lab/Notes/Screenshot 3.png]]