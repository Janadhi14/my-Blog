The SOC team's goal is to detect, analyze, and respond to cybersecurity incidents using a combination of technology solutions and a set of processes to help mitigate the incidents.


 SOC primarily consists of security analysts

The goal of the SOC team is to identify, analyze, and respond to cybersecurity incidents using a combination of technology solutions and a set of well-defined processes to help mitigate the incidents.


The SOC does not typically focus on developing a security strategy, designing a security architecture, or implementing protective measures
 SOC is responsible for the operational component of enterprise information security
Planning, analysis 
efficiency 

## Key Challenges Facing SOC Analysts

**Tool Fragmentation**

- Analysts must constantly pivot between multiple security consoles to investigate incidents
- Large organizations typically deploy 30+ disconnected point security products
- This fragmentation significantly slows down investigation and response times

**Alert Overload**

- The numerous security tools generate overwhelming volumes of alerts
- Organizations can only investigate less than 7% of the alerts they receive
- Current tools lack effective prioritization and sophisticated filtering capabilities

**Limited Context and Integration**

- Existing tools don't provide complete investigative context
- Siloed systems force operators to manage multiple separate appliances, servers, and agents
- Each organization must create custom rules to filter low-priority alertsx
## Typical Alert Investigation Process

SOC analysts follow a three-step investigation workflow:

1. **Alert Reception** - High-level security alerts from various tools (network traffic analysis, IDS) are forwarded to the SIEM system
2. **Tool Pivoting** - Analysts must switch between different analysis tools to gather network details and understand why alerts were generated
3. **Deep Investigation** - Analysts review Active Directory logs to identify affected users, then examine endpoint detection and response (EDR) consoles to analyze running processes and identify malicious activity

## Defined Processes

Effective SOC operations require well-defined organizational processes that:

- Prepare analysts to resolve security alarms efficiently
- Enable task specialization (alarm analysis vs. data analysis)
- Support different analyst skill levels through structured workflows
- Ensure consistent and effective daily operations

## Incident lifecycle 
## Adverse Events vs. Security Incidents

**Adverse Event**

- Any event with negative consequences
- Examples: malware infection, server crash, unauthorized file access

**Security Incident**

- Violation or imminent threat of violation of cybersecurity policies, acceptable use policies, or security best practices
- Examples: sensitive data loss, network intrusion, keylogger on admin computer, denial-of-service attacks

## Incident Lifecycle (4 Main Functions)

1. **Identity** - Analysts process and classify alerts by severity; suspicious alerts are evaluated as potential incidents
2. **Investigation** - Analysts determine root cause and impact to understand incident details and choose appropriate response methods (quarantine, avoidance, or system restoration)
3. **Mitigation** - Analysts stop the attack and execute pre-approved response scenarios, including breach response actions and change control functions
4. **Improvement** - Analysts complete alerting and investigation procedures for quality enhancement, including tuning, process improvement, capability improvement, and quality reviews

## Incident Response Lifecycle (4 Phases)

1. **Preparation** - Setting up processes and procedures before incidents occur
2. **Detection and Analysis** - Identifying security breaches, analyzing their severity, and prioritizing response actions
3. **Containment, Eradication, and Recovery**
    - **Containment**: Preventing further malicious activity (blocking ports/IPs, disconnecting infected machines)
    - **Eradication**: Removing adversaries from the network (using anti-malware tools, reformatting drives, resetting accounts, applying patches)
    - **Recovery**: Restoring data from backups and auditing accounts to ensure no unauthorized access remains
4. **Post-Incident Activity** - Learning from the incident to improve future response capabilities

- **Lifecycle** = The roadmap showing the journey from start to finish
- **Plan** = The detailed directions telling you exactly what to do at each step of the journey

## NIST Cybersecurity Framework

**Purpose**: Policy framework to help organizations assess and improve security posture against cyberattacks, based on existing standards and encouraging stakeholder communication.

**Key Features**:

- Scalable for all organization sizes and sectors
- Versatile with built-in customization mechanisms

**Three Main Components**:

- **Core**: Provides desired cybersecurity activities that complement risk management processes
- **Implementation Tiers**: Helps organizations view cybersecurity risk management and discuss risk appetite, budget, and priorities
- **Profiles**: Strengthens existing processes or implements new ones, enabling powerful organizational communication

## NIST Special Publication 800-61

**Purpose**: Helps organizations manage computer security incidents with step-by-step instructions for incident response teams to create effective incident response policies and plans.


## FedRAMP (Federal Risk and Authorization Management Program)

**Goal**: Modernize government IT by moving away from outdated technology through standardized cloud security assessment and authorization.

**Key Features**:

- **Effective Cloud Security**: Framework for repeatable cloud security processes
- **Marketplace**: Collaboration platform for government agencies sharing use cases and solutions
- **Security Baselines**: Four levels (High: 421 controls, Moderate: 325 controls, Low: 125 controls, LI SaaS: 36 controls)

## FISMA (Federal Information Systems Management Act)

**Background**: U.S. federal law passed in 2002, updated to final version in 2014, covering federal information security management requirements and compliance.

## 5. MITRE ATT&CK Framework

**Purpose**: Knowledge base of adversarial tactics and techniques (Adversarial Tactics, Techniques, and Common Knowledge).

**Structure**:

- 12 tactics and 332 techniques
- Each tactic contains techniques used to achieve attacker objectives
- Provides dashboards and attack group information for easy data visualization

## ISO Standards

**Coverage**: International standards for information security, digital evidence, and incident handling, including ISO/IEC 27035 series (incident management principles), ISO/IEC 27037, 27042, and 27043 for digital evidence and investigation processes.

These frameworks provide comprehensive guidance for different aspects of cybersecurity management, from strategic planning to tactical incident response.