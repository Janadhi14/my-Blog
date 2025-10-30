#CTI #Blueteam 

## What is CTI Maturity?

CTI maturity refers to **Cyber Threat Intelligence maturity** - a framework for measuring how sophisticated and effective an organization's threat intelligence program is.

An example of an immature programe is where the program consists of:
- Internal Data
- Vendor Feeds
- Indicators of Compromise (IOC)

What is needed:
- Context
- External Threat Intelligence
- Reporting Writing


## Common Maturity levels 

**Level 1 (Initial/Ad-hoc)**: Reactive threat intelligence, minimal processes, consuming basic threat feeds without much analysis or integration.

**Level 2 (Developing)**: Starting to formalize processes, some integration of threat intelligence into security operations, basic analysis capabilities.
- Internal and external intelligence collection 
- What is needed is trend analysis and threat actor behaviour 

**Level 3 (Defined)**: Established CTI program with defined processes, dedicated resources, proactive threat hunting, intelligence sharing with partners.
- 

**Level 4 (Managed)**: Metrics-driven program, automated workflows, intelligence integrated across the organization, regular strategic assessments.
- Doesn't need substantial amounts of funding
- Complete and integrated program 
- Intelligence that is proactive 
- Creates all 3 types of intelligence 

m
Which of the following is NOT a type of intelligence identified with stakeholders’ actions in mind?


## Maturing CTI 
- **Depth of the Threat Data**- This is the level of detail in threat infomration 
- **Breadth of Threat information** - the variety of the threat data 
- **Relevance of Threat Data** - This ensures that the threat data is applicable to you specific situation 
- **Utilization of Threat Information** - How effectively you use the threat information to enhance your security measures 
- **Dissemination of Threat Reporting** - Sharing the relevant threat reports with the right people in your organization to ensure that they can take appropriate acton 

Combining all those components into the CTI lifecycle means integrating the essential elements (depth, breadth, relevance, utilization, and dissemination of threat data) into each phase of the lifecycle. Here’s what that looks like in practice:

### Direction

Setting Goals and Objectives

- Depth of Threat Data: Determine the specific types of detailed threat information needed.
- Breadth of Threat Information: Identify the range of threat sources to monitor.
- Relevance of Threat Data: Focus on threats relevant to your industry, technology, and geography.

### Collection

Gathering Data

- Depth of Threat Data: Collect detailed and specific threat data.
- Breadth of Threat Information: Gather data from a wide variety of sources, such as open sources, dark web, internal logs, and threat feeds.
- Relevance of Threat Data: Ensure collected data is pertinent to your organization's threat landscape.

### Processing

Organizing Data

- Depth of Threat Data: Filter and organize data to retain valuable details.
- Breadth of Threat Information: Categorize information from various sources to create a comprehensive view.
- Relevance of Threat Data: Discard irrelevant data to focus on what matters most to your organization.

### Analysis



### Dissemination

Sharing Information

- Utilization of Threat Information: Share actionable intelligence with relevant teams to enhance decision-making and threat response.
- Dissemination of Threat Reporting: Distribute tailored threat reports to the right stakeholders, ensuring they have the necessary information to take action.

Understanding Threats

- Depth of Threat Data: 
- Breadth of Threat Information: Use a wide range of information to identify patterns and connections.
- Relevance of Threat Data: Ensure analysis focuses on threats that are pertinent to your organization’s context.
- Utilization of Threat Information: Apply insights gained to improve security measures and response strategies.
## Maturing CTI
CTI is about understanding the threats your organisation faces, 
- A good CTI program helps you organisation create a detailed threat model that highlights the most critical adversary behaviors. 
- The Cyber Threat Intelligence Lifecycle, as published by Recorded Future, is a process that helps organizations gather, analyze, and use information about cyber threats
- As we know from [[The Intelligence Cycle]] there are 5 main phases in this lifecycle of intelligence
We are able to measure the maturity which these phases are being carried out by examining the following measures:
### Depth of Threat Data
- Refers to how detailed the threat information is.
- The more in-depth the data, the better you can understand specific threats
At **Level 1** there is no Threat Data Collection:
- The organization lacks any established threat data collection processes
- This in it self is a significant vulnerability 
At Level 2:
Ephemeral IOCs:
- for a level 2 CTI maturity level an organisation is looking to answer are we tracking basic IOCs like hashes, IPs and domains?
- Indicator is reliance on easily changeable threat data (attackers can easily change the data)
At level 3:
Adversary tools and software 
Key question: Are we tracking the tools and software adversaries use?
Indicators: Collection of information on adversary tools which can still be modified 
At level 4:
Adversary Techniques 
Key question: Are we analyzing the techniques adversaries employ?
Indicator: Focus on adversary techniques providing deeper insight into threat behaviors
At Level 5:
Low-variance adversary behaviors 
- The highest level of maturity is when you are identifying and tracking low variance adversary behaviors 
- Detailed understanding of specific hard to change adversary actions

### Breadth of Threat Data
Indicates the variety of threat data you have. A broadrange of information helps you cover more potential threats

At level 1
At level 2 
- Understantds a single attack techniques
At level 3:
- Att&ck Techniques 
- Several att&ck techniques 
- Comprehensive 
At level 4:
- Top priority techniques
- Are we focusing on the top priority techniques relevant to our organization 
Level 5;
Comprehensive Technique coverage
Key Questions are do we have comprehensive convergence of all relevant ATT&ck technique 
Indicator of this is Extensive breadth of threat data encompassing all relevant techniques 
### Relevance of Threat Data
- We need to understand where the threat infomration is coming from and how timely and applicable it is to our organization under specific contexts
At level 1:
The organisation will not have any threat data available requslint gin no relevenace or applicability in the CTI data 
- We need to answer the following question: Do we have any relevant threat data?
- An indicator of an organisation being at this level will be an absence of threat data collection and relevance standards 
At level 2:
This is where an organisation will have generic or freely availabke reporting 
- At this level teh CTI program relise on generic or freely available threat data like the ATT&ck website 
	- While this is a good place to start it is too bread 
### Relevance of Threat Data
Threat Data Relevance is about understanding where your threat information comes from and how timely adn applicable it is to your organizations specific context 

At **level 1** an organization will lack any threat data and thus will have no relevance or applicability in the CTI data 
We know we are at level 1 when we know if we have any releant threat data and an indicator of being at level 1 is when there is an absence of threat data collection and relevance 

At level 2, an organisation has Generic and Freely Available Reporting
- At this level the CTI program relies on generic or freely available threat data like the ATT&CK website. This is a good start but it is often too broad and not tailored to the specific needs of our organisation 
- The key question to ask is "Are we using generic or free threat reports"
- An indicator of an organisaton being at level 2 on the CTI maturity scale is when we use general threat infomration that may lack specificitiy to our orginisation

At level 3 of CTI maturity There are internal reports 
- This is a mid level maturirty where the CTI program incoperates internal reportys which provide more specific and tailored information to teh organizations unique environment.'
- The question to ask here is if we are integrating internal reports into our threat intelligence 
- An indicator of this is the utilization of internal reports for more specific and relevant threat data 

At level 4 we are getting to advanced levels where the CTI program recieves timely and detailed threat data that is often through subscriptions/paid services. This Data will be tailored and relevant and provide a deeper understanding of current threats(timely)
- The key question to ask is Are we receiving timely and detailed threat data?
- An indicator of this would be the Access to recent and in-depth threat information requiring subscription

At **level 5** We are getting customized Briefings and this is the highest level of maturity where the CTI program recieve highly relevant threat data through customized briefings tailored to our organizations specific needs and threat landscape.
This is critical for getting the most applicable and actionable intelligence 


- Key Question: Are we receiving customized threat briefings?
- Indicator: Delivery of tailored and highly relevant threat intelligence.

### Utilization of Threat Information

**Level 1 - No Threat Intelligence**

- No threat intelligence is collected or used at all
- **Key Question:** Are we collecting and using any threat intelligence data?
- **Indicator:** Complete absence of CTI activities

**Level 2 - Occasional Reading**

- Sporadic consumption of CTI reports with no formal process
- **Key Question:** Are we occasionally reading CTI reports?
- Light and sporadic use of threat intelligence with no systematic application
- No integration into security operations or decision-making

**Level 3 - Regular Ingestion and Analysis**

- Consistent collection and review of threat intelligence
- **Key Question:** Are we regularly ingesting and analyzing threat intelligence?
- Established processes for reviewing threat data
- Basic integration into security workflows

**Level 4 - Automated Tools and Trained Analysts**

- Utilization of advanced tools and expert analysis for thorough threat examination
- **Key Question:** Do we have automated tools or trained analysts analyzing threat intelligence?
- Dedicated CTI analysts or team
- Integration of threat intelligence platforms (TIPs)
- Correlation of threat data with internal security events

**Level 5 - Strategic Intelligence Integration**

- Full integration of threat intelligence into organizational risk management
- Proactive threat hunting based on intelligence
- Customized intelligence collection aligned to organizational threats
- Intelligence-driven security architecture decisions

---

### Dissemination of Threat Reporting

**Level 1 - No Threat Intelligence**

- No threat intelligence is collected or disseminated
- **Key Question:** Are we collecting and disseminating any threat intelligence?
- **Indicator:** Complete absence of threat reporting

**Level 2 - Highly Perishable Information**

- Dissemination of basic, short-lived threat data
- **Focus:** Indicators of Compromise (IOCs) - IP addresses, file hashes, domains
- **Key Question:** Are we sharing IOCs with security teams?
- Reactive sharing of tactical data
- Limited context or analysis provided

**Level 3 - Tactical Reporting**

- Mid-level reporting focused on adversary behavior
- **Focus:** Adversary Tactics, Techniques, and Procedures (TTPs)
- **Key Question:** Are we focusing on adversary behavior in threat reports?
- **Indicator:** Reports emphasizing MITRE ATT&CK framework or behavioral analysis
- Context around how threats operate and attack patterns

**Level 4 - Operational Reporting**

- Reporting on operational security trends and patterns
- **Key Question:** Are we reporting on operational security trends?
- Operational reports covering significant security trends
- Analysis of threat campaigns and threat actor groups
- Recommendations for security control improvements
- Correlation of multiple threat indicators and campaigns

**Level 5 - Strategic Reporting**

- Strategic analysis linking security trends to business impacts
- **Key Question:** Are we providing strategic reports on the business impacts of security trends?
- **Indicator:** Reports connecting security threats to business outcomes, risk, and strategic objectives
- Executive-level reporting with business context
- Risk quantification and business impact analysis
- Support for informed business and security investment decisions
### Example


# The CTI Maturity Journey of Crimson Ridge Financial

Let's follow the evolution of Crimson Ridge Financial, a regional financial services firm, as they transform their cybersecurity posture through strategic CTI program development. Each initiative addresses critical dimensions of CTI maturity: depth, breadth, relevance, utilization, and dissemination of threat intelligence.

## Starting Point: Level 1 - No Threat Intelligence

When Crimson Ridge Financial conducted their first security assessment, they discovered a glaring gap in their defenses. The IT security team relied solely on antivirus signatures and firewall rules, with no proactive threat intelligence capabilities.

**Key Question:** Are we collecting any threat data?  
**Answer:** No, we have no threat data collection or threat intelligence program.  
**Indicator:** Complete absence of threat intelligence infrastructure or processes.

The CISO recognized that their reactive approach left the organization vulnerable to sophisticated financial sector threats, including ransomware groups and credential harvesting campaigns targeting banking institutions.

---

## Project 1: Establishing Basic Threat Feeds

Crimson Ridge Financial launched their first CTI initiative by subscribing to free and commercial threat feeds. The security team began receiving daily lists of malicious IPs, domains, and file hashes associated with known threats.

**Depth of Threat Data:** Consuming basic IOCs from external threat feeds.  
**Key Question:** Are we tracking basic IOCs from threat feeds?  
**Answer:** Yes, we now receive daily IOC feeds including malicious IPs and domains.  
**Outcome:** The team could block known-bad indicators at the perimeter, though they lacked context about why these indicators were malicious or how they related to specific threat campaigns.

---

## Project 2: Implementing a Threat Intelligence Platform

Recognizing that manually processing IOCs was unsustainable, the security team deployed a Threat Intelligence Platform (TIP). This allowed them to aggregate multiple threat feeds, deduplicate data, and automatically push indicators to their security controls.

**Utilization of Threat Information:** Automated ingestion and distribution of threat data.  
**Key Question:** Are we using automated tools to process threat intelligence?  
**Answer:** Yes, we've implemented a TIP that automates IOC processing and distribution.  
**Outcome:** The security team reduced manual workload by 60% and improved the speed of indicator deployment from days to minutes.

---

## Project 3: Expanding to Adversary TTPs

After six months of blocking basic IOCs, Crimson Ridge Financial realized they needed to understand _how_ attackers operated, not just _what_ they used. They began mapping observed attacker behaviors to the MITRE ATT&CK framework, focusing on techniques commonly used against financial institutions.

**Breadth of Threat Information:** Tracking adversary TTPs across multiple attack stages.  
**Key Question:** Are we understanding and tracking adversary TTPs beyond just IOCs?  
**Answer:** Yes, we are now mapping threats to MITRE ATT&CK and tracking techniques like credential dumping, lateral movement, and data exfiltration.  
**Outcome:** Detection engineering improved significantly, with new detection rules covering T1003 (Credential Dumping), T1078 (Valid Accounts), and T1048 (Exfiltration Over Alternative Protocol).

---

## Project 4: Building Industry-Specific Intelligence

To make their threat intelligence more relevant, Crimson Ridge Financial joined FS-ISAC (Financial Services Information Sharing and Analysis Center) and began receiving sector-specific threat intelligence. They also started analyzing their own incident data to understand threats targeting their specific environment.

**Relevance of Threat Data:** Integrating industry-specific and internal threat intelligence.  
**Key Question:** Are we tailoring threat intelligence to our industry and organization?  
**Answer:** Yes, we receive FS-ISAC alerts and analyze our own security events to identify threats relevant to regional financial institutions.  
**Outcome:** The team identified that their organization was specifically targeted by phishing campaigns impersonating regulatory bodies—a threat not prominent in generic threat feeds.

---

## Project 5: Developing Tactical Threat Reports

With richer threat data available, the security team began producing weekly tactical reports. These reports highlighted emerging threats, adversary TTPs, and recommended defensive measures for the security operations team.

**Dissemination of Threat Reporting:** Producing tactical reports focused on adversary behavior.  
**Key Question:** Are we disseminating reports that focus on adversary TTPs and behaviors?  
**Answer:** Yes, we produce weekly tactical reports detailing threat actor techniques and recommended countermeasures.  
**Outcome:** The SOC team used these reports to prioritize alert investigation and tune detection rules, reducing false positives by 40%.

---

## Project 6: Establishing a Dedicated CTI Analyst Role

As the program matured, Crimson Ridge Financial hired their first dedicated CTI analyst. This analyst was trained in threat analysis methodologies and responsible for conducting deeper research into threat actors targeting the financial sector.

**Utilization of Threat Information:** Employing trained analysts for threat examination.  
**Key Question:** Do we have trained analysts conducting in-depth threat analysis?  
**Answer:** Yes, we now have a dedicated CTI analyst who performs detailed threat research and analysis.  
**Outcome:** The quality and depth of threat analysis improved dramatically, with detailed profiles of threat actors like FIN7, Carbanak, and Evil Corp.

---

## Project 7: Implementing Operational Reporting

The CTI analyst began producing monthly operational reports covering significant security trends affecting the financial sector. These reports analyzed threat campaigns, identified patterns in attack methodologies, and provided medium-term risk assessments.

**Dissemination of Threat Reporting:** Producing operational reports on security trends.  
**Key Question:** Are we reporting on operational security trends and campaigns?  
**Answer:** Yes, we produce monthly operational reports covering major threat campaigns and security trends in the financial sector.  
**Outcome:** Security leadership gained better visibility into evolving threats, enabling more informed decisions about security investments and control priorities.

---

## Project 8: Comprehensive ATT&CK Coverage Analysis

To identify gaps in their detection capabilities, Crimson Ridge Financial conducted a comprehensive mapping of their detection rules against the full MITRE ATT&CK framework. They prioritized coverage of techniques most relevant to financial institutions.

**Breadth of Threat Information:** Achieving comprehensive ATT&CK technique coverage.  
**Key Question:** Do we have comprehensive coverage of relevant ATT&CK techniques?  
**Answer:** Yes, we've mapped all our detection capabilities to ATT&CK and achieved 75% coverage of techniques relevant to financial sector threats.  
**Outcome:** The team identified and addressed critical detection gaps, particularly in techniques related to cloud services and business email compromise.

---

## Project 9: Threat Actor Profiling and Attribution

The CTI team began developing detailed profiles of threat actors specifically targeting regional financial institutions. These profiles included motivations, capabilities, infrastructure, and historical attack patterns.

**Depth of Threat Data:** Comprehensive threat actor intelligence including attribution.  
**Key Question:** Are we developing detailed threat actor profiles with attribution?  
**Answer:** Yes, we maintain profiles of key threat actors including their motivations, capabilities, and historical campaigns targeting similar organizations.  
**Outcome:** Incident response improved significantly, with the team able to quickly identify attacker techniques based on threat actor profiles and predict likely next steps.

---

## Project 10: Strategic Business-Aligned Reporting

In their most mature phase, Crimson Ridge Financial's CTI program began producing quarterly strategic reports for executive leadership. These reports translated technical threat intelligence into business risk language, highlighting potential impacts on customer trust, regulatory compliance, and financial operations.

**Dissemination of Threat Reporting:** Strategic reporting linking security trends to business outcomes.  
**Key Question:** Are we providing strategic reports that link security trends to business impacts?  
**Answer:** Yes, we produce quarterly strategic threat assessments for the executive team that quantify business risks from cyber threats.  
**Outcome:** The board approved increased cybersecurity funding after a strategic report demonstrated how ransomware groups were specifically targeting regional financial institutions, with average recovery costs of $2.3M and significant reputational damage.

---

## Project 11: Proactive Threat Hunting Program

Building on their mature CTI capabilities, Crimson Ridge Financial launched a threat hunting program. Hunters used intelligence on adversary TTPs to proactively search for indicators of compromise and suspicious behaviors that evaded automated detection.

**Utilization of Threat Information:** Intelligence-driven threat hunting.  
**Key Question:** Are we using threat intelligence to drive proactive threat hunting?  
**Answer:** Yes, our threat hunting team uses CTI to develop hypotheses and hunt for adversary behaviors in our environment.  
**Outcome:** The hunting team discovered a dormant APT presence that had been in the network for six months, preventing a potential data breach.

---

## Project 12: Customized Intelligence Collection

At the highest maturity level, Crimson Ridge Financial began developing customized intelligence collection requirements. They identified specific intelligence gaps and tasked external intelligence providers with collecting targeted intelligence on threats to their specific assets and regions.

**Relevance of Threat Data:** Customized intelligence collection aligned to organizational needs.  
**Key Question:** Are we directing intelligence collection based on our specific requirements?  
**Answer:** Yes, we have formal intelligence requirements and task external providers to collect intelligence on specific threats to our organization.  
**Outcome:** The organization received early warning of a planned phishing campaign targeting their specific customer base, allowing them to implement preventative controls before the attack launched.

---

## The Mature State

After three years of progressive development, Crimson Ridge Financial achieved a mature, integrated CTI program characterized by:

- **Comprehensive threat data collection** from multiple sources
- **Automated processing and distribution** of tactical indicators
- **Deep analysis** of threat actors and campaigns
- **Broad coverage** of relevant adversary techniques
- **Highly relevant** industry and organization-specific intelligence
- **Strategic, operational, and tactical reporting** tailored to different audiences
- **Proactive threat hunting** driven by intelligence
- **Integration** with incident response, vulnerability management, and security architecture

The program evolved from simply blocking bad IPs to providing strategic foresight that informed board-level decisions about business risk and security investments.

---

## Key Lessons from Crimson Ridge Financial's Journey

1. **Start simple:** Begin with basic IOC collection before attempting advanced analysis
2. **Automate early:** Implement tools to scale operations before hiring expensive analysts
3. **Build relevance progressively:** Move from generic feeds to industry-specific to customized intelligence
4. **Align reporting to audience:** Tactical reports for SOC, operational for security management, strategic for executives
5. **Integration is key:** CTI provides maximum value when integrated with detection, hunting, and incident response
6. **Maturity takes time:** Allow 2-3 years to reach advanced maturity levels

Crimson Ridge Financial's transformation demonstrates that CTI maturity is achieved through sustained investment, strategic planning, and incremental capability building across all dimensions of a comprehensive threat intelligence program.

