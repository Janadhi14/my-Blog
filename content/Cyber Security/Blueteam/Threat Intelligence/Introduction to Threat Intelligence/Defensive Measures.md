# Defensive Measures Framework

## What are Defensive Measures?

Defensive measures are security controls and practices that organizations implement to protect against cyber threats. They include collecting security data, detecting malicious activity, responding to incidents, and deceiving attackers to gather intelligence.

## How to Improve Defense Measures?

### Data Collection

Data collection evaluates the maturity of gathering the right security data based on threat intelligence needs.

**Level 1: No Data Collection**

- No data related to threat intelligence is collected
- Key Question: Are we collecting any data related to threat intelligence?
- Indicator: Absence of data collection mechanisms

**Level 2: Minimal Visibility and Limited Access**

- Basic data collection with limited insight
- Key Question: Do we have any data collection mechanisms in place?
- Indicator: Compliance with manufacturer's recommendations for log collection

**Level 3: Compliance with Best Practices**

- Collecting logs from network devices according to industry standards
- Key Question: Are we collecting network device logs according to requirements?
- Indicator: Following manufacturer recommendations and best practices

**Level 4: Threat-Informed Detection Requirements**

- Sensor configuration guided by specific threat intelligence
- Key Question: Are our sensor configurations based on threat-informed detection requirements?
- Indicator: Strategic sensor placement designed to detect known threats

**Level 5: Comprehensive Sensor Deployment**

- Full visibility with strategically placed sensors
- Key Question: Have we configured and deployed sensors to meet all threat-informed detection needs?
- Indicator: Comprehensive and strategically deployed sensor network

---

### Detection Engineering

Detection engineering evaluates how well detection analytics are designed, tested, and tuned to optimize:

- **Precision**: Accuracy in identifying only malicious activities
- **Recall**: Ability to detect all relevant malicious activities
- **Robustness**: Effectiveness under various conditions

**Level 1: No Detection Analytics**

- No detection capabilities in place
- Key Question: Do we have any detection analytics in place?
- Indicator: Absence of detection analytics

**Level 2: Importing Rules from Repositories**

- Using pre-built detection rules from public sources
- Key Question: Are we using detection rules from open repositories?
- Indicator: Use of imported rules and analytics from Elastic, Sigma, or similar sources

**Level 3: Prioritizing and Tuning Imported Rules**

- Customizing and refining imported detection rules
- Key Question: Are we tuning and prioritizing our imported detection rules?
- Indicator: Customized tuning and prioritization of detection analytics

**Level 4: Custom Detection Development**

- Creating organization-specific detection analytics
- Key Question: Are we developing and tuning our own custom detection analytics?
- Indicator: Implementation of custom-created, tested, and tuned detection analytics

**Level 5: Low-Variance Behaviors Detection**

- Highly sophisticated custom analytics
- Key Question: Are we creating highly customized detection analytics that minimize false positives?
- Indicator: Creating highly customized detection analytics that minimize false positives and ensure robust detection capabilities

---

### Incident Response

Incident response measures the organization's ability to react to and manage security incidents effectively.

**Level 1: No Automated Incident Response**

- No formal incident response processes
- Key Question: Are our incident responses automated?
- Indicator: Absence of incident response capabilities

**Level 2: Ad Hoc Manual Response**

- Reactive approach without structured processes
- Key Question: Are our incident response measures ad hoc and manual?
- Indicator: Reactive response with no structured processes

**Level 3: Playbook-Enabled and Partially Automated Response**

- Guided by playbooks with some automation
- Key Question: Are our incident response measures guided by playbooks and partially automated?
- Indicator: Incident response is structured by playbooks and includes partial automation

**Level 4: Threat Actor-Informed Response**

- Response based on detailed threat actor knowledge
- Key Question: Does our incident response include threat actor-informed investigations?
- Indicator: Incident response includes threat actor-informed investigations and proactive threat hunts

**Level 5: Strategic, Holistic, and Optimized Response**

- Comprehensive response aimed at preventing future attacks
- Key Question: Is our incident response strategic, holistic, and optimized to deter future threats?
- Indicator: Incident response is strategic, comprehensive, and aimed at preventing future attacks by thoroughly evicting adversaries

---

### Deception Operations

Deception operations examine how extensive and effective deceptive tactics are in enabling defensive objectives and collecting new threat intelligence.

**Level 1: No Deception Operations**

- No deceptive measures in place
- Key Question: Do we have any deception operations?
- Indicator: Absence of deception capabilities

**Level 2: Sandboxing Suspicious Executables**

- Basic deception for analyzing threats
- Key Question: Are we sandboxing suspicious email attachments?
- Indicator: Implementation of sandboxing for email attachment detonation

**Level 3: Monitoring Deceptive Objects**

- Deploying honeypots or tokens to detect attackers
- Key Question: Are we monitoring deceptive objects like honeypots or tokens?
- Indicator: Implementation of honeypots or canary tokens

**Level 4: Implementing a Honey Network**

- Comprehensive network of decoys
- Key Question: Have we implemented a honey network?
- Indicator: Deployment and operation of comprehensive honey network to capture wider range of attacker activity

**Level 5: Long-Term Deception Operations**

- Mature, realistic deception environment
- Key Question: Do we operate long-term, realistic deception operations?
- Indicator: Honey network with realistic deception operations designed for sustained intelligence gathering



Key questions to ask:
 - Key attack inventory that is mapped to business operations and threats
 - Are we employing automated security operation 
 - Incident reponse should be shaped based off of knowledge of the threat actors 
	 - Allows the organitsion to have better incident response 
-  Longterm deception operations
The key is to gather threat intelligence 
- understand what the attackers are doing 
- 