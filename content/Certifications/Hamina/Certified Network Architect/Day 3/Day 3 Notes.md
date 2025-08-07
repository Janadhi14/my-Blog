# Wi-Fi Design and Capacity Planning Notes

## Channel Design Strategy

### Co-Channel Interference Minimization

- **Primary Goal**: Minimize co-channel interference (CCI) for optimal network performance
- **Large Deployments**: Use 20 MHz channels to maximize channel reuse distance
- **Channel Spacing**: Greater physical separation between APs using the same channel

### Environmental Considerations

- **Urban Environments**: Higher RF noise floor due to interference
    - Typical urban noise floor: -85 dBm
    - Requires more robust design with higher signal levels
- **6 GHz Band Advantages**:
    - Abundant spectrum availability (up to 1200 MHz)
    - Enables wider channel widths (40/80/160 MHz)
    - Clean spectrum with minimal legacy interference

---

## Capacity Calculation Framework

### Basic Throughput Formula

```
Number of Required Radios = Total Required Throughput ÷ Max Radio Throughput
```

### Key Variables

**Per User Throughput**

- Average throughput required by each user
- Based on application requirements and usage patterns

**Max Radio Throughput**

- Formula: `(Highest MCS Data Rate ÷ 2)`
- **Limiting Factor**: Lowest common denominator between AP and client capabilities
- **Spatial Streams**: Client device determines maximum (e.g., 2-stream client limits AP to 2 streams)
- **MCS**: Modulation and Coding Scheme - defines data rate capabilities

### Real-World Considerations

**Simultaneity Factor**

- Users don't utilize Wi-Fi simultaneously at maximum capacity
- Apply statistical modeling for realistic capacity planning
- Typical simultaneity: 20-40% in most environments

---

## Capacity Planning Variables

### User Demographics

**User Categories** (different bandwidth requirements):

- **Office Worker**: 1-5 Mbps average
- **Conference Delegate**: 2-8 Mbps (presentation downloads, note-taking)
- **Audience Member**: 0.5-2 Mbps (social media, messaging)
- **Coffee Shop Customer**: 3-10 Mbps (streaming, browsing)

### Device Considerations

**Device Multiplier**

- Modern users typically have 2-4 devices
- **BYOD Environments**: Plan for 1.5-2.5 devices per user
- **Corporate**: Often 1-1.5 devices per user

**Device Types Impact**

- **Smartphones**: Lower spatial stream count (1x1, 2x2)
- **Laptops**: Higher spatial stream count (2x2, 3x3)
- **IoT Devices**: Low bandwidth, high association count

### Technical Constraints

**AP Association Limits**

- Hardware-dependent (typically 50-250 clients per radio)
- Performance degrades before hard limits
- Consider both association capacity and throughput capacity

**Coverage and Reuse**

- Channel reuse distance affects capacity
- Coverage overlap impacts interference levels

---

## Users vs. Devices Strategy

### High-Density Environments

**Focus on Devices** when:

- Association capacity is the limiting factor
- Many low-bandwidth IoT devices
- BYOD environments with multiple devices per user

**Focus on Users** when:

- Bandwidth capacity is the limiting factor
- Applications require high throughput per user
- Controlled device environments

### Planning Approach

1. **Count Users**: Determine peak user density
2. **Apply Device Multiplier**: Based on environment type
3. **Calculate Bandwidth**: Per user requirements × simultaneity factor
4. **Validate Association Capacity**: Ensure APs can handle device count
5. **Design for Growth**: Plan 20-30% capacity buffer