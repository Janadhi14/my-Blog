## Introduction to Cisco IOS

- **Cisco IOS** = Internetwork Operating System (not related to Apple iOS)
- Operating system used on Cisco devices (routers, switches, firewalls)
- Similar to Windows on PC or macOS on Mac

## CLI vs GUI

- **CLI (Command Line Interface)**: Text-based interface for configuring devices
- **GUI (Graphical User Interface)**: Visual interface (like Cisco ASDM for firewalls)
- **Most network engineers prefer CLI over GUI**

## Connecting to Cisco Devices

### Console Port Connection

- **Primary method for initial device configuration**
- Physical connection required (bring laptop to device)
- Two console port types on switches:
    - **RJ45 port** (like network ports)
    - **USB mini-B connector**

### Console Cable (Rollover Cable)

- **Cable type**: Rollover cable (different from Ethernet crossover)
- **Connections**: One end RJ45, other end DB9 connector
- **Pin mapping**: Pin 1↔Pin 8, Pin 2↔Pin 7, Pin 3↔Pin 6, Pin 4↔Pin 5
- **Adapter needed**: Most laptops need USB-to-serial adapter

### Terminal Emulator (PuTTy)

- **Software**: PuTTy (available at putty.org)
- **Connection type**: Serial
- **Default settings** (memorize for exam):
    - **Speed/Baud rate**: 9,600 bits per second
    - **Data bits**: 8
    - **Stop bits**: 1
    - **Parity**: None
    - **Flow control**: None

## Cisco IOS CLI Modes

### 1. User EXEC Mode

- **Indicator**: `>` (greater than sign)
- **Default hostname**: Router
- **Capabilities**: Very limited, view-only, no configuration changes
- **Also called**: User mode

### 2. Privileged EXEC Mode

- **Command to enter**: `enable`
- **Indicator**: `#` (pound/hashtag sign)
- **Capabilities**:
    - Complete access to view configuration
    - Restart device
    - Save configuration
    - Change time
- **Cannot**: Make configuration changes

### 3. Global Configuration Mode

- **Command to enter**: `configure terminal` (shortcut: `conf t`)
- **Indicator**: `(config)#`
- **Capabilities**: Make configuration changes to the device

## CLI Navigation Commands

### Essential Commands

|Command|Function|Mode|
|---|---|---|
|`enable`|Enter privileged EXEC mode|User EXEC|
|`configure terminal`|Enter global configuration mode|Privileged EXEC|
|`exit`|Go back one mode level|Any|
|`?`|Show available commands|Any|

### CLI Shortcuts and Features

- **Tab completion**: Press Tab to auto-complete commands
- **Partial commands**: Use minimum unique characters (e.g., `en` for `enable`)
- **Ambiguous commands**: CLI shows error if command isn't unique
- **View options**: Type `?` after partial command to see options
- **Command help**: Use `?` with or without space for different results

## Password Configuration

### Enable Password (Less Secure)

```
Router(config)# enable password CCNA
```

- **Security level**: Low (plain text in configuration)
- **Case sensitive**: CCNA ≠ ccna
- **Encryption**: Can be encrypted with `service password-encryption`

### Service Password-Encryption

```
Router(config)# service password-encryption
```

- **Function**: Encrypts passwords in configuration
- **Encryption type**: Type 7 (Cisco proprietary)
- **Security**: Weak encryption, easily crackable online
- **Effect**:
    - Enables: Current and future passwords encrypted
    - Disables: Only future passwords affected (current remain encrypted)

### Enable Secret (More Secure)

```
Router(config)# enable secret Cisco
```

- **Security level**: High
- **Encryption**: MD5 (Type 5) - always encrypted
- **Precedence**: Takes priority over enable password if both configured
- **Not affected**: By service password-encryption command

## Configuration Files

### Running-Config vs Startup-Config

- **Running-config**: Current active configuration in RAM
- **Startup-config**: Configuration loaded at device boot (in NVRAM)
- **Key point**: Changes made in CLI only affect running-config initially

### Viewing Configurations

```
Router# show running-config
Router# show startup-config
```

### Saving Configuration (3 Methods)

1. `write`
2. `write memory`
3. `copy running-config startup-config`

**All three commands do the same thing: save running-config to startup-config**

## Advanced CLI Features

### The "do" Command

- **Function**: Execute privileged EXEC commands from configuration mode
- **Example**: `Router(config)# do show running-config`
- **Shortcuts**: `do sh run` works too

### Removing Commands

- **Syntax**: Add `no` in front of any command
- **Example**: `no service password-encryption`
- **Effect**: Removes or disables the specified configuration

## Command Shortcuts (Common Examples)

|Full Command|Shortest Form|
|---|---|
|`enable`|`en`|
|`configure terminal`|`conf t`|
|`show running-config`|`sh run`|
|`show startup-config`|`sh start`|
|`exit`|`ex`|

## Security Best Practices

1. **Always use `enable secret`** instead of `enable password`
2. **Use strong, case-sensitive passwords**
3. **Remember passwords are not displayed when typing**
4. **3 failed password attempts = "bad secrets" lockout**

## Key Takeaways for CCNA Exam

- **Console connection defaults**: 9600-8-1-none-none
- **Mode indicators**: `>` (user), `#` (privileged), `(config)#` (global config)
- **Enable secret always takes precedence** over enable password
- **Service password-encryption uses weak Type 7 encryption**
- **Enable secret uses stronger MD5 (Type 5) encryption**
- **Three ways to save configuration** - all equivalent
- **Use `?` for help and command discovery**

## Practice Tips

1. **Memorize the console connection settings**
2. **Practice mode transitions**: user → privileged → global config
3. **Get comfortable with shortcuts** but know full commands
4. **Understand the difference** between running-config and startup-config
5. **Remember to save your configuration** after making changes