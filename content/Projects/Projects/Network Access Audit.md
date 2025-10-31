The goal of this project is to develop a comprehensive network auditing process, this is aimed at enterprise networks where we need to ensure that there are secuire connections that can be made. 
- We begin this project through the use of Nmap 
- We can then use Nmap and other tools like mfsconsole to conduct vulnerability assesment scans 
- This can be developed as 2 seperate scripts 
- initially we will need to generate a subnet list of the ip addresses of the servers that we need to get 

## Methodology  
First we must identify the range of subnets or ip addresses that we need to scan and audit 
for examples sake sets say we want to scan the range 192.168.0.0/16 for all hosts that are up
For larger subnets we will need to divide it up into smaller subnets and scan as this can take some time, 


After we gather the subnets we need to identify the hosts that we are supposed to see on that range,
now the issue begins with the time it takes to get all the host information for a given subnet. 

Subnet Scope:



Scans were completed from the <> ip using a lenovo device T490(un registered)
- device is external hence has been put into the default vlan 
- Nmap scan from G5 network.

After we need to get the following we need to iterate through the different subnets from different locations:
- Try from multiple different locations
- Try from different G4 and G5 switches

These are the subnets that the 

3 approaches 
- scan the entire subnet - time intensive , scanning unnecessarily 
- scan specific host given static list- we don't know if new hosts have been added in a network environment 
- scan hosts  from a list of ip addresses from an API call to address management system that will provide the output. 

After getting the ip addresses of the DHCP leased hosts 
- we need to start scanning using nmap of the open ports 
- Start off with the nmap scan that will check for the top 100 ports open, then we can move onto the next host and repeate the same command 

It is important to note that sometimes the servers will not respond to ping requests, any good adversary will realise this and target this 

We need to create a script that will g through this methodlogy 

```bash 
nmap -Pn --top-ports 100 -T4 <port range> --open
```

## Scripts
### Network port scan 
```bash 
#!/bin/bash

# Could use a 
# Array of subnets to scan
subnets=(
   "list of ips you want to scan",
   "ip2"
   "ip3"

)



# Create output directory in current location
output_dir="./nmap_results"
mkdir -p "$output_dir"

echo "Starting parallel nmap scans..."
echo "Output directory: $output_dir"
echo "Total subnets to scan: ${#subnets[@]}"
echo ""

# Array to store background process PIDs
pids=()

# Loop through each subnet and start scans in background
for subnet in "${subnets[@]}"; do
    # Create filename by replacing / and . with _
    filename=$(echo "$subnet" | sed 's/[\/\.]/_/g')
    output_file="$output_dir/nmap_scan_${filename}.txt"
    
    echo "Starting scan for $subnet (output: $output_file)"
    
    # Run nmap in background
    (
        echo "Scan started at: $(date)" > "$output_file"
        nmap -Pn --top-ports 100 -T4 "$subnet" --open >> "$output_file" 2>&1
        echo "Scan completed at: $(date)" >> "$output_file"
    ) &
    
    # Store the PID
    pids+=($!)
done

echo ""
echo "All ${#subnets[@]} scans started in parallel!"
echo "Process IDs: ${pids[@]}"
echo ""
echo "Waiting for all scans to complete..."
echo "You can monitor progress with: tail -f $output_dir/*.txt"
echo ""

# Wait for all background processes to complete
for pid in "${pids[@]}"; do
    wait $pid
done

echo ""
echo "======================================"
echo "All scans completed!"
echo "Results saved in: $output_dir"
echo "======================================"
echo ""

# Show summary of results
echo "Summary of scans:"
for subnet in "${subnets[@]}"; do
    filename=$(echo "$subnet" | sed 's/[\/\.]/_/g')
    output_file="$output_dir/nmap_scan_${filename}.txt"
    if [ -f "$output_file" ]; then
        size=$(wc -l < "$output_file")
        echo "  $subnet: $size lines"
    fi
done
```

### Vulnerability script
- Takes an input, a text file that contains IP addresses, 
	- one address per line 
- Creates an output that is a file that contains 
```bash 
#!/bin/bash

# Check if IP list file is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <ip_list_file>"
    echo "Example: $0 ips.txt"
    exit 1
fi

IP_FILE=$1

# Check if file exists
if [ ! -f "$IP_FILE" ]; then
    echo "Error: File '$IP_FILE' not found!"
    exit 1
fi

# Create output directory with timestamp
OUTPUT_DIR="nmap_scans_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$OUTPUT_DIR"

echo "Starting nmap scans..."
echo "Results will be saved in: $OUTPUT_DIR"
echo "=========================================="

# Read IP list and scan each one
while IFS= read -r ip || [ -n "$ip" ]; do
    # Skip empty lines and comments
    [[ -z "$ip" || "$ip" =~ ^#.*$ ]] && continue
    
    echo ""
    echo "[$(date +%Y-%m-%d\ %H:%M:%S)] Scanning: $ip"
    
    # Sanitize IP for filename (replace dots and slashes)
    safe_ip=$(echo "$ip" | tr './' '_')
    
    # Run nmap scan
    nmap -sV -O --script "default,safe,vuln" -T4 -oA "$OUTPUT_DIR/scan_$safe_ip" "$ip"
    
    echo "[$(date +%Y-%m-%d\ %H:%M:%S)] Completed: $ip"
    echo "=========================================="
    
done < "$IP_FILE"

echo ""
echo "All scans completed!"
echo "Results saved in: $OUTPUT_DIR"

```



## Vulnerability assesment
- ow we can check through the individual servers at a given IP 
- 

## Visualization
There are 2 components to this 


https://www.runzero.com/blog/introducing-runzerohound/






- Specific Certifications that I have for:
	- Advanced Cyber Threat Intelligence Writing reports course.
	- CTI foundations
	- Threat informed defense with M3TID
- Comptia Sec+ exam next week
- Also I publish on my blog, https://janadhi14.github.io/my-Blog/ if you want to check out my skills and content that I have learnt and continue to learn.
- I've built strong relationships across networking and security teams - the exact stakeholders a threat intelligence function needs to serve. I understand our infrastructure from working directly on it.
- I don't just fix things,I don't wait for processes to exist, I create them. I come up with automations, scripts, data scraping solutions, visualizations and code on a daily basis to make processes efficient and develop tools, something that I think that would be hugely beneficial in this role, I want to contribute so that we have a proactive approach to CS rather than the current reactive approach to improve our current Security posture and maturity.
- I think that being on the early stages allows me to pick up new processes really quickly seeing as you have to be on the cutting edge of emergent threats.

- I am already familiar working with the Cyber team, having worked with them in a recent incident response, Network Access auditing and BAU tasks now.
- I have deployed multiple applications end to end from local AI MCP servers to homelab AD Server environments, to secure Cloud applications so I offer that versatility to make things efficient, scripting and automation workflows for developing monitoring solutions and connectors for threat intelligence. 

since this is a new position then you need someone who is going to turn it into a unique position and that is something I can do because I can take that initiative and make 
for this position I think you need someone who is on there 

Threat intelligence _is_ research, technical writing, and analysis

Plasticity so I can pick up things quite quickly, still early in my carrer and with that I know I bring a good work ethic 
I also maintain connections with systems team and very good friends with every engineer in the netwokring team

