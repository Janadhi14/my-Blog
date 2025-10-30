## IPv4 Address Classes Review

### Class Ranges

- **Class A**: 0-127 (usable range: 1-126)
    - 0 range: reserved
    - 127 range: reserved for loopback addresses
- **Class B**: 128-191
- **Class C**: 192-223

### Class Structure

|Class|Leading Bits|Network Bits|Host Bits|Networks Available|Addresses per Network|
|---|---|---|---|---|---|
|A|0|8 (/8)|24|128|16,777,216|
|B|10|16 (/16)|16|16,384|65,536|
|C|110|24 (/24)|8|2,097,152|256|

## Calculating Network Information

### Maximum Hosts Formula

**Formula**: 2^n - 2 (where n = number of host bits)

- Subtract 2 for network address and broadcast address

### Examples by Class

**Class A (10.0.0.0/8)**:

- Host bits: 24
- Max hosts: 2^24 - 2 = 16,777,214
- Network address: 10.0.0.0
- Broadcast address: 10.255.255.255
- First usable: 10.0.0.1
- Last usable: 10.255.255.254

**Class B (172.16.0.0/16)**:

- Host bits: 16
- Max hosts: 2^16 - 2 = 65,534
- Network address: 172.16.0.0
- Broadcast address: 172.16.255.255
- First usable: 172.16.0.1
- Last usable: 172.16.255.254

**Class C (192.168.1.0/24)**:

- Host bits: 8
- Max hosts: 2^8 - 2 = 254
- Network address: 192.168.1.0
- Broadcast address: 192.168.1.255
- First usable: 192.168.1.1
- Last usable: 192.168.1.254

### Finding Usable Addresses

- **First usable address**: Network address + 1
- **Last usable address**: Broadcast address - 1

## Cisco Interface Configuration Commands

### Essential Show Commands

```
show ip interface brief
```

**Purpose**: Shows interface IP addresses, status, and protocol state

- **Status column**: Layer 1 (physical) status
- **Protocol column**: Layer 2 (data link) status
- **Method column**: How IP was assigned (manual, DHCP, etc.)

```
show interfaces [interface-name]
```

**Purpose**: Detailed Layer 1/2 information

- Shows MAC address (BIA - Burned In Address)
- Hardware type, bandwidth, statistics
- Physical and protocol status

```
show interfaces description
```

**Purpose**: Shows interface descriptions and status

- Helpful for documenting interface purposes

### Interface Configuration Steps

1. **Enter global config mode**
    
    ```
    configure terminal
    Router(config)#
    ```
    
2. **Enter interface config mode**
    
    ```
    interface gigabitethernet0/0
    Router(config-if)#
    ```
    
3. **Assign IP address**
    
    ```
    ip address 192.168.1.1 255.255.255.0
    ```
    
4. **Enable interface**
    
    ```
    no shutdown
    ```
    
5. **Add description (optional)**
    
    ```
    description ## Connection to Switch1 ##
    ```
    

### Subnet Masks in Dotted Decimal

- /8 = 255.0.0.0 (Class A default)
- /16 = 255.255.0.0 (Class B default)
- /24 = 255.255.255.0 (Class C default)

## Important Concepts

### Router vs Switch Interface Defaults

- **Cisco router interfaces**: Administratively down by default (shutdown applied)
- **Cisco switch interfaces**: NOT administratively down by default

### Interface Status Meanings

- **Status "up", Protocol "up"**: Interface fully operational
- **Status "administratively down"**: Interface disabled with shutdown command
- **Status "down"**: Physical layer issue (cable, connection)
- **Protocol "down"**: Layer 2 issue (even if Layer 1 is up)

### CLI Shortcuts and Tips

- Commands can be abbreviated: `show ip interface brief` = `sh ip int br`
- Interface names: `gigabitethernet0/0` = `g0/0`
- Can switch directly between interfaces without exiting to global config
- Use `do` command to execute privileged exec commands from config mode
- Use `?` for context-sensitive help

## Special Address Types

### Network Address

- Host portion = all 0s
- Cannot be assigned to hosts
- Used to identify the network

### Broadcast Address

- Host portion = all 1s
- Cannot be assigned to hosts
- Used to send messages to all hosts on network

### Loopback Address

- 127.x.x.x range
- Used for testing and internal communication
- Most common: 127.0.0.1

## Practice Problems Format

For any given IP address with prefix length:

1. **Network address**: Set host bits to 0
2. **Broadcast address**: Set host bits to 1
3. **Maximum hosts**: 2^(host bits) - 2
4. **First usable**: Network address + 1
5. **Last usable**: Broadcast address - 1

## Key Formulas to Remember

- **Host bits calculation**: 32 - prefix length
- **Maximum hosts**: 2^(host bits) - 2
- **Number of networks in class**: 2^(network bits)
- **Total addresses per network**: 2^(host bits)