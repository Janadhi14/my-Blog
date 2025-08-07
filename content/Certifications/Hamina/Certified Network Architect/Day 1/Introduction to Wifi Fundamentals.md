## OSI 7 layer networking model 
## Changes to the 802.11 
### OFDMA 
**OFDMA is a method that allows multiple users to transmit and receive data simultaneously on the same channel by allocating different portions of the available frequency spectrum to different users.**
### MU-MIMO vs SISO
MU-MIMO (Multi-User MIMO) is a technology that allows an access point to transmit to or receive from multiple client devices simultaneously using different spatial paths, rather than serving one client at a time

#### How to test this ?
-  test the data rate behind the wall is higher - Multiple path 
- higher through put uses Mimo 
- 
- 
## Basic Service Set Explanation 
BSSID  - MAC address of the radio 9For machines)
SSID - service set identifier - is the name tha tis being transfered (ABC cooperation)- the name that is assoicated to one 

ESS - extended service set - 


## Channel plan
When you go from 20mghz you can have some more protection 
- DSSS - 22mhz wide channel 
- OFDM has 20mhz  wide channels 
- Implementation
	- -Generally we want to stick to the 1 6 11 plan 
### DSSS Spectral mask 
Direct Sequence Spread Spectrum
- 802.11b 
- - rouutded shape and main 
- A spectral mask defines the allowable power levels across different frequencies for a transmitted signal, ensuring regulatory compliance and minimizing interference to adjacent channels.
- ![[content/Certifications/Hamina/Certified Network Architect/Day 1/Screenshot.png]]
- 
signal gets weaker as you move aawy from the center freuqency 
- side lobes - channel intereference to other channls 
- co channel contention - 
- adjacent channel interefence 
Devices try to avoid collisions by listening 

suppse ther eare 3 APs on a 
"Listen before talking "

### Preamble detect 
- smaller cell design 
- channel reuse 
- Preamble detect is the fundamental mechanism that enables Wi-Fi devices to coordinate channel access and avoid collisions
- Every Wi-Fi transmission begins with a **preamble** - a standardized signal pattern that announces "I'm about to send data." Think of it like someone clearing their throat or saying "excuse me" before speaking in a conversation. This preamble serves as a digital "heads up" to all other devices on the channel
- 
## OFDM
Stands for Orthogonal frequency-division multiplexing 
![[content/Certifications/Hamina/Certified Network Architect/Day 1/Screenshot 1.png]]This uses 20mhz channels 
- modern wifi
- Subcarriers are narrow individual frequency channels that together make up a wider OFDM channel
### **What is QAM?**

**QAM is a method of encoding multiple bits of data into a single symbol by varying both the amplitude (strength) and phase (timing) of a signal.**
2.4ghz 4 channel plan (80mhz)
- narrower frequcny 

## 5Ghz band 

The Radar Band- DFS enabled 12 channels 
- they use DFS - dynamic frequency selection
	- There were already other people using these frequncy 
- UNI2e - is used by radar 
	- There was a regulation 
	- Wifi can use these but you have to follow the rules, 
	- before you transmit on that channl you must ensure that there is no radar on that channel 
	- must listen for up to 60seconds 
		- if no radar then you cna transmit on that channel
		- if radar then you need to move to another channel 
- If youar enear airport you should 
- 100-128 - marine radar range 
	- Some vendors may choose to turn off the wifi or ideally channel 
## Country specific 
- in specific countries there are different wifi bands 
- so when designing wifi you must ensure that you are designing Wifi so that it is wokring properly so
- you don't want to break the rules, and also the infrastructure generally wont allow you to break those rules 
	- with external antennas it is possible to break these rules 
- take the power into account 
![[content/Certifications/Hamina/Certified Network Architect/Day 1/Screenshot 2.png]]
120-124-128 are other bands that are used by TWDr -weather radar 
channel 144 is not supported in all regulator domains and limited cline tsupport 

- some vendors were able to 
- hospitals tend to have older devices 
Channel 165 origiannyl part of the ISM band now UNI3 - not supported by all regulatory domains 

DFS what are some things to be aware of 
- Use DFS channels if you need ,ore capacty 
	- if you are out of channels - try use the other channels and if you are in a building wehre there are heaps of APs then you may have to use DFS 
- Research DFS channel support for critical devices 
	- test the devices 
- Monitor to see if there are DFS events 
	- If you are getting DFS event s regularly tehy will generally be on a single DFS channel 
		- So we can change the channel plans and remove the impacted DFS channels
- Consider that roaming may be affected 
	- As a device 
## Roaming
Roaming is the seamless transition of a client device from one access point to another while maintaining network connectivity. It's fundamental to providing a good user experience in multi-AP wireless networks

RSSI Thresholds:
├── Strong Signal: -50 to -65 dBm (no roaming needed)
├── Good Signal: -65 to -70 dBm (monitor for alternatives)
├── Roaming Threshold: -70 to -75 dBm (consider roaming)
├── Poor Signal: -75 to -80 dBm (actively seek alternatives)
└── Critical: Below -80 dBm (roam immediately)

Hysteresis Prevention:
├── New AP must be significantly better (3-5 dB minimum)
├── Prevents constant switching between similar APs
├── Reduces unnecessary roaming overhead
└── Improves stability and user experience

While you are on the call you device goes off channel and scans 
- probe requests and waits for probe 
- goes off the call in ms and 
- 150ms - timeframe you wont notice that the call is continued 
- Eventually it gets to a DFS channel - you cannot transmit on the channel unless there is no radar on it. so when you are going to a channl
- Passive Probe 
- Roaming is affected cause of this 
- disconnects the call 
we can mitigate this disconnection:
- Don't use DFS 
- 802.11r 
	- Reduces roaming time from ~1 second to <50ms
- 802.11k
	├── Faster roaming through targeted scanning
	├── Better roaming decisions with network intelligence
	├── Reduced power consumption in mobile devices
	├── Improved user experience in enterprise networks
	└── Foundation for AI-assisted roaming optimization
802.11v 
![[content/Certifications/Hamina/Certified Network Architect/Day 1/Screenshot 3.png]]
Integrated 802.11r/k/v Roaming Process:

1. PREPARATION (802.11k)
   ├── Client requests neighbor report from current AP
   ├── AP provides intelligent list of nearby APs with capabilities
   ├── Client caches neighbor information
   └── Network gains insight into client RF environment

2. DECISION (802.11k + 802.11v)
   ├── Client monitors current connection quality
   ├── Network may proactively suggest roaming (802.11v)
   ├── Client evaluates neighbors using 802.11k intelligence
   ├── Client selects optimal target AP
   └── Decision based on network guidance + client algorithms

3. EXECUTION (802.11r)
   ├── Client initiates fast transition to selected AP
   ├── Uses cached security keys for rapid authentication
   ├── Completes roaming in <50ms
   ├── Maintains application sessions seamlessly
   └── Fast, secure handoff to optimal target

4. OPTIMIZATION (802.11v)
   ├── Network monitors roaming success and performance
   ├── Adjusts future recommendations based on results
   ├── Proactively balances load across APs
   ├── Continuously optimizes network performance
   └── Self-improving system over time
## Channel bonding
![[Screenshot 4.png]]
What channel width to use?
- use the widest channel you cna until you cant 
	- Generally don't go over 40mhz 
How to decide between 20 or 40mhz 

Best Practices:
1. Match channel width to environment density
2. Plan for DFS impact on bonded channels
3. Consider client capability limitations
4. Monitor interference across all component channels
5. Use mixed channel widths for optimization
6. Plan for graceful degradation during interference
7. Balance performance with spatial reuse needs
-
lok at average retries 
channel % utilization 
Check the through put - because of Airtime 
- how long can my device get on air time
Rate shifting 

Wider channels in smaller locations may be fine 
- but in offices this might not be about it
- its not about speed- its about consistent data rate and consistent trhoughput 
- if you require high throughput - use ethernet 
The more opportnities more overall througput 
- throughput test about getting the data through to where it needs to go 
in 5ghz we have many different channels 
- less co channel contention 
- so more ooportunity to get farther away for APs on the same channel 
- The wider channel the fewer chances you ahve to get farther away 


## 6GHz - Wifi 6E
- ![[Screenshot 5.png]]
- The 6 GHz band spans from **5.925 MHz to 7.125 MHz**, providing **1.2 GHz of new spectrum** - more than double the combined spectrum of 2.4 GHz and 5 GHz bands. This massive expansion includes:

- **59 non-overlapping 20 MHz channels** (compared to 25 in 5 GHz)
- **29 × 40 MHz channels** (compared to 12 in 5 GHz)
- **14 × 80 MHz channels** (compared to 6 in 5 GHz)
- **7 × 160 MHz channels** (compared to 2 in 5 GHz)
#### Regional variation 
The 6 GHz band is divided into different UNII (Unlicensed National Information Infrastructure) segments:

**United States:**

- **UNII-5:** Lower portion (5.925-6.425 GHz)
- **UNII-6:** Mid-lower portion (6.425-6.525 GHz)
- **UNII-7:** Mid-upper portion (6.525-6.875 GHz)
- **UNII-8:** Upper portion (6.875-7.125 GHz)

### Power Limitations of 6E
- **Indoor use:** Typically 1W (30 dBm) EIRP
- **Outdoor use:** May have restrictions depending on region
- **Automatic Frequency Coordination (AFC):** Required in some regions to avoid interference with incumbent services
##### Standard power :
-  your AP needs a GPs in it 
	- tells the governing body so tehy know where all other 6ghz. devices are 
	- and then tells other APs about what channels 
- registered with AFC 
- For outdoor 6ghz you are desining for coverage because you cant put in the co channel contention becuase the organizayion will choose what channl and power its on 

## RF Basics 
![[Screenshot 6.png]]
We can make 5ghz and 6ghz more appealing to device s 
- we can make 2.4ghz weaker to make it same as 5ghz power 
- typicay outof the box 2.4ghz is 6db weaker 
2.4 ghz is 2.4 billion ossicilations per seconds 
more waves more data you can pack in there 



RF Measurements

Absolute Units:

- ﻿﻿W (Watts) - typically not something we are going to see in Wifi 
	- ﻿﻿Measurement unit of power
- ﻿﻿mW (Milliwatts)- 
	- ﻿﻿One thousandth of a watt
- ﻿﻿dBm (Decibels relative to one milliwatt)
	- ﻿﻿Unit used to indicate that a power ratio is expressed in decibels with reference to one milliwatt (0 dBm = 1 mW)

Relative Units:

- ﻿﻿dB (Decibels)
- ﻿﻿Relative unit of measure used to express the ratio of one value of power to another![[Screenshot 7.png |200]]
### dB Math - Rule of 10
The "Rule of 10s and 3s" is a fundamental concept in RF engineering that makes power calculations much easier. Let me break this down with clear explanations and examples.

**Decibel Formula:**

```
dB = 10 × log₁₀(P₂/P₁)
```

Where:

- P₂ = New power level
- P₁ = Reference power level

## Complete Reference Table

| **dBm** | **Milliwatts (mW)** | **Rule Applied** |     |
| ------- | ------------------- | ---------------- | --- |
| -10 dBm | 0.1 mW              | 0 dBm - 10 dB    |     |
| -3 dBm  | 0.5 mW              | 0 dBm - 3 dB     |     |
| 0 dBm   | 1 mW                | **Reference**    |     |
| 3 dBm   | 2 mW                | 0 dBm + 3 dB     |     |
| 6 dBm   | 4 mW                | 3 dBm + 3 dB     |     |
| 9 dBm   | 8 mW                | 6 dBm + 3 dB     |     |
| 10 dBm  | 10 mW               | 0 dBm + 10 dB    |     |
| 13 dBm  | 20 mW               | 10 dBm + 3 dB    |     |
| 16 dBm  | 40 mW               | 13 dBm + 3 dB    |     |
| 19 dBm  | 80 mW               | 16 dBm + 3 dB    |     |
| 20 dBm  | 100 mW              | 10 dBm + 10 dB   |     |
| 23 dBm  | 200 mW              | 20 dBm + 3 dB    |     |
| 26 dBm  | 400 mW              | 23 dBm + 3 dB    |     |
| 29 dBm  | 800 mW              | 26 dBm + 3 dB    |     |
| 30 dBm  | 1,000 mW (1W)       | 20 dBm + 10 dB   |     |

The sign (positive or negative) in dB values depends on **what you're comparing** and **what direction the change goes**. Let me break this down clearly.
Power Scale (dBm):
                
    +30 ──── 1 Watt (high-power AP)
    +20 ──── 100 mW (typical AP)
    +10 ──── 10 mW (low-power device)
     0  ──── 1 mW (reference point)
    -10 ──── 0.1 mW
    -20 ──── 0.01 mW
    -30 ──── 0.001 mW (strong received signal)
    -40 ──── 0.0001 mW (good received signal)
    -50 ──── 0.00001 mW (fair received signal)
    -60 ──── 0.000001 mW (weak received signal)
    -70 ──── 0.0000001 mW (poor received signal)
    -80 ──── 0.00000001 mW (very poor signal)
    -90 ──── 0.000000001 mW (barely detectable)
Cables can introduce loss into teh dbi 

We souldnt break the regulatory domain:
- if you are using a an external antenna 
- you could lie and set the antenna gain as being lower 

## Inverse square law 
The Inverse Square Law is a fundamental principle in physics that explains how RF signal strength decreases with distance. It's one of the most important concepts for understanding wireless coverage

The point source of energy every doubling of distance from taht point source youa re at a quater of that power that you were before ie : As you move away from a point source of RF energy, the **signal strength decreases proportionally to the square of the distance**

RF energy spreads out in **all directions** from an antenna (like a sphere). As the distance increases, the same amount of energy is spread over a **much larger area**.

In wifi terms, every time you double your distance you 


## Free space path loss
Free Space Path Loss is the **theoretical minimum loss** that RF signals experience when traveling through a perfect vacuum with no obstacles, reflections, or interference. It represents the **baseline** for all RF calculations.

- predictive signal strehgt from distances (not survey )
- the rate of loss 
- as the distance double the power is 1/4 
- 6db signal loss for every douling od distance 
- Hamina accounts for loss or attenuaton of singal as it propogates 
	- eg if there is a wall, the signal looses 3db of energy 
	- We can give the walls values of what the wall has 
- If you put in the wrong db loss for the wall then you would face some difficulties 
	- if in actualty it is a 6db wall not a 3db wall then the prediction will be wrong 
	- if possible measuing the attenuation, sometimes this is not possible so we have to bump up the attentuation to see the worst case scenario 
		- you can bump up 
			- start at a lower power because you can alsows go up, need to have room to bump it up 
## SNR - singal to noise ratio 
- the difference bteween the noise in the environmentvs the sinal that my device si hearing 
- noise is always present - RF is just there aournd us
	- Lights, devices and Other wifi, devices creates noise - this becomes a hum that exists and is always presnt - this changes depeneing on the environment 
		- -100dbm - low db in a warehouse in the forest 
		- -90dbm in a big city 
	- We can use spectrum analyzers to diterine the noise floor 
	- Wifi adaptors cannot hear noise

Noise calculation 
Noise- baseline -> data rate (better SNR then we have lower noise floor)
- DSSS
- OFDM
These are related to this because there are limits - 
- the more seperated teh noise and signal are the more modulation we can use 

**Higher SNR = More distinguishable signal patterns = More data per symbol = Faster communication**

- **Quiet library (high SNR):** You can whisper complex words and be understood
- **Noisy concert (low SNR):** You have to shout simple words to be understood

### **What Modulation Does**

Modulation **encodes digital data** (0s and 1s) into **radio wave patterns** that can be transmitted through the air.

**Simple modulation:** Few patterns, easy to distinguish **Complex modulation:** Many patterns, harder to distinguish


**Higher SNR enables more complex modulation because:**

1. **More signal states can be reliably distinguished** from noise
2. **More bits can be encoded per symbol**
3. **Higher data rates are achieved** with the same bandwidth
4. **The receiver can correctly decode** complex signal patterns

**The relationship is:**

```
Better SNR → More modulation states → More bits per symbol → Faster data rates
```

This is why **Wi-Fi design is fundamentally about maximizing SNR** - it directly translates to the highest possible performance for users. Every dB of SNR improvement potentially enables higher-order modulation and faster speeds.

## Modulation
- PSK
- ASK
- FSK


## Sine wave 

OFDM - orthagonal frequncy division multipexing 



## Modulation constellation
BPSK 
- 1 bit at a time 
- very simple
- very robust
- very slow 6 MBPS
- Around 2-4db SNR 
- very easy to achieve 

## MCS charts explained 
MCS charts are **comprehensive reference tables** that show exactly what data rates are possible under different conditions. They're essential tools for Wi-Fi design because they translate **technical parameters into real-world performance**.

![[Screenshot 8.png]]
- **MCS Index:** Simple number (0-9) to identify the scheme, for 2 spatial treams there is another 1-> 9  for spatial stream
- **Modulation:** Constellation type (BPSK → 256-QAM)
- **Coding Rate:** Error correction overhead (1/2, 3/4, 5/6)
- **Data Rates:** Actual throughput under different scenarios
You can incerase the Guard intervals for outdoor 
- outdoor there will be longer than 400ns 
	- so you can wait for loger and tehn properly demodulate your frame you loos some throughput for that but you gurantee that your data will be recieved 
Why do we have 3 of the same modulation 
- because there are coding rates - how redundant is teh data thta is being put in 
- for every 2 bits there is another bit that is a redundant bit 
1. **Coding rate determines error correction overhead** - lower rate = more protection but slower speed
2. **Redundant bits enable reliable communication** - trade bandwidth for reliability
3. **Higher MCS uses less redundancy** - assumes cleaner signal conditions
4. **SNR requirements increase with coding rate** - less error correction needs better signal
5. **Modern Wi-Fi adapts both modulation and coding** - optimizes for current conditions
6. **Design goal: Match coding rate to application needs** - balance performance vs reliability
7. **Understanding coding rates explains MCS behavior** - why higher MCS needs better SNR

The coding rate is the **"safety factor"** in Wi-Fi communications. Lower coding rates provide more protection against errors but reduce effective data throughput. Higher coding rates maximize throughput but require excellent signal conditions to work reliably. This fundamental trade-off drives much of Wi-Fi system design and explains why signal quality is so critical for achieving high performance.

- teh next frame could change so this happens in micro seconds
- the AP goes through this channel 
- if the noise changes then the 
- the goal is to transmit as fast as yo can sucessfully 

ac - VHTP
Wifi 6 AX -. HE(high efficiency)


## Dynamic rate shifting 
Dynamic Rate Shifting (also called **Adaptive Rate Selection** or **Rate Adaptation**) is one of the most important features in modern Wi-Fi. It's the system that **automatically adjusts data rates** based on real-time signal conditions to maintain the best possible connection

Dynamic Rate Shifting continuously **monitors link quality** and **automatically selects the best MCS** (Modulation and Coding Scheme) for current conditions.
## 802.11 State Machine 
The 802.11 State Machine is the **fundamental process** that governs how Wi-Fi devices connect to and communicate with wireless networks. It defines the **mandatory steps** and **security gates** that every client must pass through to establish a working connection
![[Screenshot 9.png]]State 1 - Unauthenticatied and unassociated 
- You cannot authenticate until you associate with the AP
State 2 - Authneticated but unassociated 
- AP has put us on a list of unassociated 
State 3 - Authenticated and on the list of being associated - Pending RSNA Authentication Class 1 2 and 3 frames (unencrypted) - one way connection
State 4 - Authenticated and Associated (RSNA Established or not required) when you have security (encrypted) 

State 4 can use some password to establish encryption like for example: 
802.1x
- Authnetication method 
- EAP TLS- certificate presentation 

 Passive scannig 
 - listening to beacons 
	 - special frames 10 times per second 
	 - if AP has multiple SSIDs then there is one for each SSID 10 times per second 
	 - Not a fast way to discover 
	 - 
Active scanning 
- the device sends out a probe request
- probe response  that is directly sent to your device 
	- states teh infromation for netogiation process 



## BSS Selection 
- Strongest AP is the most common reason as to choosing a certina AP 
Multiple factors that influence BSS selection:

```
Primary Factors:
- RSSI (Received Signal Strength Indicator)
- SNR (Signal-to-Noise Ratio)
- Number of Clients (load balancing)
- Channel Utilization
- TX Power
- First reply (response time)
- Frequency (band preference)
- Noise
- Security compatibility
- RNR (Reduced Neighbor Report)
- Neighbor Reports
- Channel Width
- Estimated Throughput
```

This can vary from device to device 
- most devices scan in order 
- they willg enerally discover the lower chanells before the higher channels 

## Wireless security 


### KRACK attack 
- this was a Key Reinstallation attack 
- affected the WPA2 4-way handshake protocol 
- de-auth the client 
- you could grab the has decryption key 
- by the time this was introduced in blackhat it was lareday patched 
	- never really became an issue 
- AES was never cracked 
- You know the passphrase, 
**Key reinstallation enabled nonce reuse** - breaking fundamental encryption assumptions

#### WPA3 
ECC and AES is used in WPA3

EAPPEAP is prefered method 
certficate based is 
- EAPPeap one way certification 
EAP-TLS - 2 way authenticaiton - this is teh golden standard 
- Stronger and more popuar 
- EAP-TLS provides certificate-based mutual authentication where both the client and authentication server verify each other's identities using digital certificates. This eliminates password-based vulnerabilities and prevents man-in-the-middle attacks that can affect other EAP methods




## Half duplex shared medium
- only talk when we dont hear another device talking 
- there can only be 
- DCF - distributed coordination function 
	- Listen before you tlak(medium is half duplex)
	- Be quiet (for a while) 
	- Avoid collions (while being quite even long)
CSMA/CA
- Carrier sense multiple access with collision avoidance 
- Carrier snese-  Before transmitting, a device listens to the wireless channel to detect if other devices are already transmitting. If the channel is busy, it waits
- Multiple devices can access the same wireless medium, but they must coordinate to avoid interfering with each other
- Unlike CSMA/CD (used in wired Ethernet), wireless networks can't easily detect collisions during transmission due to the hidden node problem. Instead, CSMA/CA tries to prevent collisions before they occur
#### DCF 
-Dsitributed coordinated function 
- Uses a random backoff timer when the channel is busy
- Implements Inter-Frame Spacing (IFS) - mandatory quiet periods between transmissions
- DIFS (DCF IFS) for data frames, SIFS (Short IFS) for acknowledgments
DIFS- Distributed coordinated interframe space 
- 34 micros seconds
- if we can get to 0 from 34 micro seconds then we are able to talk to the 
Dataframe 
- we can submit the data frame
SIFS - Sort interframe space - 16 micros seconds 
- we use to see if we got an acknowledgement from the reciepeint 
- postive ack protocol 
- for every dataframe that I transmit it must be acknowledge 
- the only way we have to ensure that there is. a 
	- retries are sthings we try to avoid and t is when you get the informaiton being setn again because the device sending didint send an acknowledge 
	- eg in an offic eenironment we ar elooking at 10% or less 
- 

IFS - interframe space 

AIFS stands for **Arbitration Inter-Frame Space** and is a key component of the IEEE 802.11 wireless networking standard's medium access control mechanism.

###  What is AIFS?

AIFS is a waiting period that wireless devices must observe before attempting to transmit data on a wireless channel. It's part of the Enhanced Distributed Channel Access (EDCA) mechanism used in 802.11e and later standards to provide Quality of Service (QoS) differentiation.

### How AIFS Works

**Basic Concept:**

- Before transmitting, a device must wait for the channel to be idle for a specific duration
- AIFS determines the minimum idle time required before a device can begin its backoff procedure
- Different traffic categories use different AIFS values to create priority levels

**Formula:**

```
AIFS = SIFS + (AIFSN × SlotTime)
```

Where:

- **SIFS** = Short Inter-Frame Space (fixed value, typically 16μs for 2.4GHz, 16μs for 5GHz)
- **AIFSN** = Arbitration Inter-Frame Space Number (varies by traffic category)
- **SlotTime** = Duration of a slot (typically 20μs for 2.4GHz, 9μs for 5GHz)

### AIFS Values by Traffic Category

|Access Category|Traffic Type|Typical AIFSN|Priority|
|---|---|---|---|
|AC_VO (Voice)|Voice calls|2|Highest|
|AC_VI (Video)|Video streaming|2|High|
|AC_BE (Best Effort)|Regular data|3|Normal|
|AC_BK (Background)|File transfers|7|Lowest|

### QoS Priority Mechanism

**Lower AIFS = Higher Priority:**

- Voice traffic (AC_VO) has the shortest AIFS, so it gets first chance to transmit
- Background traffic (AC_BK) has the longest AIFS, so it waits longer
- This creates a natural priority system where time-sensitive traffic gets preferential access

###  Practical Impact

**Network Performance:**

- Ensures voice and video get priority over less time-sensitive data
- Reduces latency for real-time applications
- Maintains fairness while providing QoS differentiation
- Works alongside other EDCA parameters (CWmin, CWmax, TXOP) for comprehensive QoS

**Example Scenario:** If both a voice call and a file download need to transmit simultaneously, the voice traffic will typically get channel access first due to its shorter AIFS value, ensuring better call quality.

Contention window is a random slot time 0-15 slot times 
- each of the slot tomes are 9microseconds 
### Beacons
Beacon frames are **mandatory management frames** that access points transmit regularly

##### Beacon overhead
Beacon overhead is a fundamental cost of Wi-Fi network operation that **consumes airtime and reduces available capacity for user data**
- why do you not get the same data rate?
- in the protocol there is a 25 to 30% overhead 
- The best possible is 70% for your throughput 
- in the real world you will get around 50% of your data rate 


So devices are never talking below a certain data rate:
Increasing the beacon data rate is one of the **most effective optimizations** you can make to reduce beacon overhead

3 types of frames
- Mgmt frames:
	- discover
	- get on and off APs
	- sent at the lowest minimum data rate 
- contrl frames
	- gurantee the delivery of the data frame s
	- sent at the lowest minimum data rate 
- data frames 
	- These are the frames that carry the information
	- sent out at the highest data rate 
	- eg 907mbps
- start out at 12mbps
## Antenna Fundamentals
Cover what you want while not covering what you dont want 
- Omni- the RF is going to go everywhere 
- Directional - you can pont the RF to a certain sction (We can focus the signal)
### Isotropic radiator 
- Eg lightbulb - Therotical sorce of energy 
- closest analogy - star- not perfectly isotropic 
- All antennas are compared to isotoptic radiaotr in dBi not dBM 
- isotropic radiation denotes directionality 
- passibve gain 
	- Relative to an isotropic radiator 
	Every antenna have a gain value 
The term Gain it doesnt equal power-  this equal directionality 
- the hgiher the gain the more directionaity 


#### Benefits of Antennas
Bi-Directionality (10 dBi TX gain = 10dBi RX gain)
Better sensitivity and performance at a distance than increasing TX power

## Visualizing Beam Patterns
![[Screenshot 10.png]]
Omni idrectional - as close to an isotrpic 
360 degree horizontal coverate 
vertical coverage has a more lobe structure 

High gain -> more directionlity 
Down tilt omni- up to 3 or 4 meters generally in terms of height 
optimal 
The dip in the middle is null 


## Antenna propogation
![[Screenshot 11.png]]
How to ditermine the beam width?
- Where the main lobe decreases by -3db 
- ![[Screenshot 12.png]]
- that means this is a 60 degree antenna 
- Anything within teh green-  that is ideal 
	- -65 or better 
- anything outside of there could there could be worse coverage and connectivity 
- in the yellow region thrre could also be co channel interference which will cause co channel contention 
## Omni Antennas

## Patch and panel Antennas


## Yagi Antennas 
- typically very high gain 
- 15 or 10 degrees 
- point to point in km communicaiton
- generally 2 yagi antennas ponting to each toher 
## Dish antenna 
7 degree 
40-50dbi
several KM 

Wifi frequenceis are non licnesed 
any other frequency you need licensing 


## Define 
- Business requiremets and constraints 
- Technical requirements 
- RF Desing requirements - RF spec 
LCMI- least capabale most capabale device 
- what are the devices matter for most of the devices 
- if you can design for most of the device you should prioritize these 
- if its a specific change for a specific device then that device wikll be your LCMI 


## Business Requirements & Constraints Gather the business requirements

- ﻿﻿Purpose
- ﻿﻿System expectations
- ﻿﻿Service areas
- ﻿﻿Applications
- ﻿﻿Key devices
- ﻿﻿Key individuals
- ﻿﻿Financial constraints
- ﻿﻿Legal and compliance
- ﻿﻿Security constraints
- ﻿﻿High-level security requirements

### Technical Requirements

Gather and define technical requirements

- ﻿﻿In/Out Scope Zones
- ﻿﻿Capacity Zones
- ﻿﻿Applications
- ﻿﻿Devices (least capable, most important - LCMI)
- ﻿﻿VolP /RTLS
- ﻿﻿Roaming Threshold
- ﻿﻿SSID Design (Frequency & Min Data Rate)

- ﻿﻿AP choice
- ﻿﻿Detailed security requirements
- ﻿﻿Redundancy Requirements
- ﻿﻿Acceptable jitter, latency, and packet loss

Get in contaact with customers, 
- do some research to ensure that the devices that the customers use are met by the Network that we are putting in the building 

#### Requirement exercises 
- primary signal strength 
	- -65dbm is generally what are aer looking for 
- Secodary coverage 
	- could be -65db or eve 70dbm 
	- typically secondary cover is for roaming: to be able to keep connections and to jump between different aps
- depending on the devices that are being used we can do some research and we can ditermine the threshold for primary and secondary signal strength 
- Another thing that we can look at is SNR 
	- is generally 25 db SNR 
- Data rate 
	- if devices cna get about 300mbs data rate 
	- depening on the applicaitons that the customer uses 
- Co channel contention  
	- no more than 2 APs on the same channel 
	- The bigger the design the 
	- okay with at least 2 APs being on the same channel 
## Scoping
 - capacity 
	 - how many people are going to be using the space
	 - the type of devices that are going to be using 
 - expected areas of coverage 

## SSID Design 
- ﻿﻿Number of SSIDs
- ﻿﻿VLAN & DHCP scope
- ﻿﻿Security(not a reason to use them )
- ﻿﻿Hidden SSID?
	- problem is that a lot of devices when roamin gis a lot harder to discover because you have to manually put the BSSID in there it takes longer.
- ﻿﻿Minimum data Rate
- ﻿﻿Frequency / Band Steering
- ﻿﻿Advertised AP name
- ﻿﻿Client Isolation
- ﻿﻿Proxy ARP
- ﻿Amendments r/k/v/w
	- w is a standard where ther ear eprotected management frames 
		- So this is WPA 3 
		- Validation bit 
- You can choose what bands to use 
	- some SSIDs se 5ghz 
	- some SSIDs use 2.4ghz
## Non-HT Data rate 
Non-HT data rates are the original Wi-Fi data transmission speeds from older 802.11 standards:
- **802.11b DSSS rates**: 1, 2, 5.5, 11 Mbps
- **802.11a/g OFDM rates**: 6, 9, 12, 18, 24, 36, 48, 54 Mbps
- All Wi-Fi devices, even the newest ones, must support these basic rates to communicate with older devices and infrastructure.
- Important network management frames (like beacons, acknowledgments, and association messages) are sent using these basic rates to ensure all devices can receive them.
Basic/requiremd -  dont touch this
- if you disable  this you will run into issues 
- 
- **Basic/Required Rates** ✅
    - All devices in the network MUST support these
    - Control frames are sent at the lowest basic rate (called Minimum Basic Rate)
- **Supported/Enabled Rates** ⚡
    - Devices MAY use these if they support them
    - Optional for data transmission
- **Disabled Rates** ❌
    - Cannot be used for transmission
    - Devices can still receive frames at these rates

## Client RSSI compared 
Wifi chipsets are not calibrated 
- laptops generally have better signal 
- there is more rrom in a laptop to pput in antenna 
	- larger and have more surface area 
- Why do we see a weaker signal from the device than free space path loss 
	- because the antennas are just packed into teh device 
Based off this we can adjust our design by bumpin up the power to account for this difference 

## Least Capable most important (LCMI)
LCMI refers to identifying the **most critical devices** in your network that also happen to have the **weakest wireless capabilities**. These devices become the limiting factor for your entire wireless design

Your wireless network is only as strong as its weakest link. If you design for high-performance devices but ignore the critical low-performance ones, those important devices won't work properly.

#### How to Identify LCMI Devices:

**Step 1: Identify "Most Important" devices**

- Medical equipment in hospitals
- Handheld scanners in warehouses
- Point-of-sale systems in retail
- Critical IoT sensors
- Emergency communication devices

**Step 2: Check their wireless capabilities**

- How many antennas do they have?
- What Wi-Fi standards do they support?
- What's their receive sensitivity?
- Do they support 5GHz or only 2.4GHz?

Once you identify your LCMI devices, you must design your network to ensure **these devices work reliably** at their required locations, which often means:

- **Closer AP placement** for weaker devices
- **Higher signal strength requirements**
- **Conservative channel planning**
- **Appropriate frequency band selection**

## How to measure noise?
Wifi Radios cannot measure noise 
Sepctrum analyzer measure noise differently depened on RBW 
RF circutiy and add noise 
