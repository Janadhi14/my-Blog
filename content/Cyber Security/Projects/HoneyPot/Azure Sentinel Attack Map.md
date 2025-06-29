#Azure #Project
## Overview
In this lab demonstrates how to create a honeypot using Azure Virtual Machines, configure centralized logging with Azure Sentinel, and visualize attack data on a geographic map. You'll learn to collect security events, enrich them with geographic data, and create visual representations of cyber attacks.

## Prerequisites

- Basic understanding of Azure services
- Familiarity with Windows systems
- Understanding of network security concepts

## Lab Architecture

By the end of this lab, you'll have:

- Azure Virtual Machine acting as a honeypot
- Log Analytics Workspace for centralized logging
- Azure Sentinel for SIEM capabilities
- Geographic IP database for attack mapping
- Interactive attack map visualization

---

## Phase 1: Azure Environment Setup

### Step 1: Create Azure Subscription

1. Navigate to the [Azure Free Account page](https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account)
2. Sign up for a free Azure subscription
3. Complete the verification process

### Step 2: Access Azure Portal
Once your subscription is active, log in to the [Azure Portal](https://portal.azure.com/)

---

## Phase 2: Honeypot Virtual Machine Creation

### Step 1: Deploy Windows VM

1. In the Azure Portal, search for "Virtual Machines"
2. Click "Create" → "Azure virtual machine"
3. Configure the following settings:
    - **Operating System**: Windows 10
    - **Size**: Choose appropriate size based on your subscription limits
    - **Authentication**: Create a username and password (save these credentials)
    - **Region**: Select your preferred region

**Important**: Note the estimated monthly cost displayed. Plan to shut down the VM when not in use to avoid unexpected charges.

### Step 2: Configure Network Security

1. Navigate to your VM's Network Security Group
2. Create a new inbound security rule:
    - **Source**: Any
    - **Destination**: Any
    - **Protocol**: Any
    - **Action**: Allow
    - **Priority**: 100
    - **Name**: "Allow_All_Inbound"

When we do this, we intentionally makes the VM vulnerable for honeypot purposes.

### Step 3: Disable Windows Firewall

1. Connect to your VM via RDP
2. Open Run dialog (Windows + R)
3. Type `wf.msc` and press Enter
4. In Windows Defender Firewall properties:
    - Set Domain Profile to "Off"
    - Set Private Profile to "Off"
    - Set Public Profile to "Off"
5. Apply changes

---

## Phase 3: Security Event Testing and Analysis

### Step 1: Generate Failed Login Events

1. From your local machine, attempt to RDP to your VM
2. Intentionally fail 3 login attempts using username "employee" (or similar)
3. Successfully log in with correct credentials

### Step 2: Examine Security Logs

1. On the VM, open Event Viewer (eventvwr.msc)
2. Navigate to Windows Logs → Security
3. Look for Event ID 4625 (failed logon attempts)
4. Verify you can see the 3 failed attempts from "employee"

---

## Phase 4: Centralized Logging Configuration

### Step 1: Create Log Analytics Workspace

1. In Azure Portal, search for "Log Analytics workspaces"
2. Click "Create"
3. Configure:
    - **Subscription**: Your subscription
    - **Resource Group**: Create new or use existing
    - **Name**: Choose a unique name
    - **Region**: Same as your VM

### Step 2: Deploy Azure Sentinel

1. Search for "Microsoft Sentinel" in Azure Portal
2. Click "Create"
3. Select your Log Analytics Workspace
4. Click "Add"

### Step 3: Configure Data Connectors

1. In Sentinel, navigate to "Data connectors"
2. Search for "Windows Security Events via AMA"
3. Click "Open connector page"
4. Follow the setup wizard to create a Data Collection Rule (DCR)
5. Select your VM as the target resource
6. Choose "All Security Events" for maximum visibility

### Step 4: Verify Log Collection

After 10-15 minutes, query your Log Analytics Workspace:

```kql
SecurityEvent
| where EventId == 4625
| order by TimeGenerated desc
```

---

## Phase 5: Geographic Data Enrichment

### Step 1: Download GeoIP Database

Download the GeoIP database from: [geoip-summarized.csv](https://raw.githubusercontent.com/joshmadakor1/lognpacific-public/refs/heads/main/misc/geoip-summarized.csv)

### Step 2: Create Sentinel Watchlist

1. In Sentinel, navigate to "Watchlists"
2. Click "Add new"
3. Configure:
    - **Name**: geoip
    - **Alias**: geoip
    - **Source type**: Local file
    - **Number of lines to skip**: 0
    - **SearchKey**: network
4. Upload the downloaded CSV file
5. Wait for import completion (~54,000 rows)

### Step 3: Test Geographic Enrichment

Use this KQL query to see attacks with geographic data:

```kql
let GeoIPDB_FULL = _GetWatchlist("geoip");
let WindowsEvents = SecurityEvent
    | where EventID == 4625
    | where IpAddress != ""
    | order by TimeGenerated desc
    | evaluate ipv4_lookup(GeoIPDB_FULL, IpAddress, network);
WindowsEvents
```

Replace `<attacker IP address>` with actual IP addresses from your logs.

---

## Phase 6: Attack Map Visualization

### Step 1: Create Workbook

1. In Sentinel, navigate to "Workbooks"
2. Click "Add workbook"
3. Delete all pre-populated content
4. Add a new "Query" visualization

### Step 2: Configure Map Visualization

1. Switch to the "Advanced Editor" tab
2. Paste the JSON configuration for the map (this would be the content from map.json referenced in the original document)
3. Configure the query to pull geographic attack data
4. Set visualization type to "Map"
5. Configure map settings for optimal display

### Step 3: Customize and Save

1. Adjust time ranges and filters as needed
2. Save your workbook with a descriptive name
3. Set refresh intervals for real-time monitoring

---

## Key Learning Outcomes

### Technical Skills Developed

- **Azure VM Configuration**: Deployed and configured Windows VMs in Azure
- **Network Security**: Configured Network Security Groups and firewall rules
- **Log Management**: Set up centralized logging with Log Analytics Workspace
- **SIEM Operations**: Implemented Azure Sentinel for security monitoring
- **Query Languages**: Learned KQL (Kusto Query Language) for log analysis
- **Data Enrichment**: Enhanced logs with geographic information
- **Visualization**: Created interactive security dashboards

### Security Concepts Reinforced

- **Honeypot Strategy**: Understanding how to attract and monitor attackers
- **Log Analysis**: Importance of centralized logging for security operations
- **Threat Intelligence**: Using external data sources to enrich security events
- **Geographic Threat Mapping**: Visualizing attack patterns by location
- **Security Monitoring**: Real-time threat detection and analysis

---

## Important Notes and Best Practices

### Cost Management

- **Monitor Usage**: Keep track of your Azure spending
- **Shut Down Resources**: Stop VMs when not actively using them
- **Set Alerts**: Configure spending alerts to avoid unexpected charges
- **Clean Up**: Delete resources after completing the lab

### Security Considerations

- **Honeypot Isolation**: Never use production networks for honeypots
- **Data Sensitivity**: Be aware of what data you're collecting and storing
- **Access Control**: Implement proper access controls on your logging infrastructure
- **Compliance**: Understand legal requirements for security monitoring in your jurisdiction

### Skills Development

- **Query Languages**: KQL skills transfer to other platforms (SQL, SPL)
- **Practice Environment**: Consider the Cyber Range for hands-on practice with production-scale logs
- **Continuous Learning**: Stay updated with new Azure security features and best practices

---

## Troubleshooting Common Issues

### VM Connection Problems

- Verify Network Security Group rules
- Check VM status and ensure it's running
- Confirm RDP port (3389) is accessible

### Log Collection Issues

- Allow 15-30 minutes for initial log ingestion
- Verify Data Collection Rule configuration
- Check VM agent installation status

### Watchlist Import Failures

- Ensure CSV file format is correct
- Verify file size limitations
- Check for special characters in data

### Map Visualization Problems

- Confirm geographic data is properly joined
- Check query syntax and data types
- Verify workbook permissions

---

## Next Steps and Advanced Scenarios

### Enhanced Monitoring

- Add additional data sources (DNS logs, web server logs)
- Implement automated alerting rules
- Create custom detection analytics

### Threat Hunting

- Develop custom KQL queries for specific attack patterns
- Implement machine learning-based anomaly detection
- Create threat intelligence feeds

### Integration Opportunities

- Connect to external SIEM platforms
- Implement automated response workflows
- Add threat intelligence enrichment

### Professional Development

- Join cybersecurity communities and forums
- Participate in threat hunting exercises
- Pursue relevant certifications (Azure Security, SIEM platforms)



---

## Conclusion

This lab provides foundational experience in cloud security monitoring, log analysis, and threat visualization. The skills developed here are directly applicable to Security Operations Center (SOC) roles and cybersecurity positions across various industries.

Remember to clean up your Azure resources after completing the lab to avoid unnecessary charges, and consider exploring additional security tools and techniques to further develop your cybersecurity expertise.

