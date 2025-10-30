## Ethernet Frame Structure

### Frame Components

- **Preamble + SFD**: Usually not considered part of Ethernet header (but sent with every frame)
- **Ethernet Header**: Destination MAC, Source MAC, Type (3 fields)
- **Header + Trailer Size**: 18 bytes total (excluding preamble + SFD)

### Frame Size Requirements

- **Minimum frame size**: 64 bytes (including payload)
- **Minimum payload size**: 46 bytes (64 - 18 = 46)
- **Padding**: Added if payload < 46 bytes (all zeros)
    - Example: 34-byte packet → 12 bytes of padding added

## Network Setup Example

- **Network**: 192.168.1.0/24
- **Devices**:
    - PC1: 192.168.1.1 (MAC: 0C2F.B011.9D00)
    - PC2: 192.168.1.2 (MAC: 0C2F.B048.6200)
    - PC3: 192.168.1.3 (MAC: 0C2F.B06A.3900)
    - PC4: 192.168.1.4 (MAC: 0C2F.B023.AB00)
- **OUI**: 0C2F.B0 (same manufacturer for all PCs)

## ARP (Address Resolution Protocol)

### Purpose

- Discovers Layer 2 address (MAC) of a known Layer 3 address (IP)
- Required because switches operate at Layer 2 (use MAC addresses)

### ARP Process

1. **ARP Request**:
    
    - Broadcast frame (destination MAC: FFFF.FFFF.FFFF)
    - Sent to all hosts on local network
    - Message: "Who has [IP address]? Tell [sender IP]"
2. **ARP Reply**:
    
    - Unicast frame (direct to requester)
    - Contains MAC address of requested device
    - Message: "[IP address] is at [MAC address]"

### ARP Table

- Stores IP-to-MAC address mappings
- **Commands**:
    - Windows/macOS/Linux: `arp -a`
    - Cisco IOS: `show arp`
- **Entry Types**:
    - Static: Default entries
    - Dynamic: Learned via ARP process

## Ping (ICMP)

### Purpose

- Tests network reachability
- Measures round-trip time

### Ping Process

1. **ICMP Echo Request**: Sent to specific host (unicast)
2. **ICMP Echo Reply**: Response from destination

### Cisco IOS Ping

- Default: 5 pings, 100 bytes each
- **Results**:
    - `.` = failed ping
    - `!` = successful ping
- **Command**: `ping [IP address]`
- **Custom size**: `ping [IP] size [bytes]`

## MAC Address Table

### Viewing MAC Address Table

- **Command**: `show mac address-table`
- **Old IOS**: `show mac-address-table`

### MAC Address Table Fields

1. **VLAN**: Virtual LAN (default = 1)
2. **MAC Address**: Device MAC address
3. **Type**: Dynamic (learned) or Static (configured)
4. **Ports**: Interface where MAC was learned

### MAC Address Aging

- Dynamic entries removed after **5 minutes** of inactivity
- Called "aging out"

### Clearing MAC Address Table

1. **Clear all dynamic entries**:
    
    ```
    clear mac address-table dynamic
    ```
    
2. **Clear specific MAC address**:
    
    ```
    clear mac address-table dynamic address [MAC-address]
    ```
    
3. **Clear by interface**:
    
    ```
    clear mac address-table dynamic interface [interface-id]
    ```
    

## Frame Types and Switch Behavior

### Frame Types

1. **Known Unicast**:
    
    - Destination MAC in table
    - Forwarded out specific interface only
2. **Unknown Unicast**:
    
    - Destination MAC not in table
    - Flooded out all interfaces (except receiving)
3. **Broadcast**:
    
    - Destination MAC: FFFF.FFFF.FFFF
    - Flooded out all interfaces (except receiving)

### Switch Flooding Behavior

Switches flood frames out all interfaces (except receiving) for:

- Broadcast frames
- Unknown unicast frames

## Ethernet Types

- **IPv4**: 0x0800
- **IPv6**: 0x86DD
- **ARP**: 0x0806

## Tools and Software

### GNS3 vs Packet Tracer

- **Packet Tracer**: Network simulator (free)
- **GNS3**: Runs actual Cisco IOS (requires IOS purchase)

### Wireshark

- Packet capture and analysis tool
- Shows protocol details, frame contents
- Integrates with GNS3

## Key Takeaways

1. **ARP is required** before unicast communication between devices
2. **Switches learn MAC addresses dynamically** from source addresses
3. **Broadcast frames** are sent to all devices on local network
4. **Minimum Ethernet payload** is 46 bytes (padding added if smaller)
5. **MAC address table aging** removes unused entries after 5 minutes
6. **Frame flooding** occurs for broadcast and unknown unicast frames

## Common Commands Summary

|Purpose|Command|
|---|---|
|View MAC table|`show mac address-table`|
|View ARP table|`show arp`|
|Clear all dynamic MACs|`clear mac address-table dynamic`|
|Clear specific MAC|`clear mac address-table dynamic address [MAC]`|
|Clear by interface|`clear mac address-table dynamic interface [int]`|
|Ping test|`ping [IP address]`|