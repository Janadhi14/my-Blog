## Overview

When we often get sent a phishing link we don't know anything other than to mark it as spam and to send it to our Junk folder. But what if we were able to see what a malicious packet was doing behind the scenes?

This report analyzes a recent malicious HTML file that was sent via email to understand the attack vector and methodology used by threat actors. We examined the components using static analysis techniques to understand the attack flow without executing the malicious code.

## Initial Analysis of the Phishing Link

The suspicious link was sent from `universityofxxxxx@secureresponse.org` with the following URL structure:

```
http://it.secureresponse.org/?t=L1AZyJ9i9V-kU30aXnq44Hw6xb7aQN48&p=pMgZZCLKtVFJIvIBTeFYp4XHfWR6otyk
```

### URL Parameter Analysis

The URL contains two encoded parameters:

- **t parameter**: `L1AZyJ9i9V-kU30aXnq44Hw6xb7aQN48`
- **p parameter**: `pMgZZCLKtVFJIvIBTeFYp4XHfWR6otyk`

These parameters appear to use multiple layers of encoding. While they initially resemble Base64 encoding, attempts to decode them using standard methods and CyberChef with various decoding combinations were unsuccessful. This suggests either:

- Multiple rounds of custom encoding
- Encrypted parameters requiring server-side decryption
- Obfuscated tracking identifiers unique to this campaign

### VirusTotal Analysis

The URL wasn't flagged by multiple security vendors when submitted to VirusTotal, confirming its actually just a friendly phsihsing link

## HTML File Analysis

To conduct safe analysis, the HTML file was downloaded without opening it directly. Static analysis was performed using command-line tools to examine the source code.

### File Examination Process

The following steps were taken to safely analyze the malicious HTML file:

1. **File Location and Identification**
    
    - Located the downloaded HTML file in the system
    - Verified file type and size without executing
2. **Command-Line Analysis**
    
    - Used `cat` command to display file contents in terminal:
    
    ```bash
    cat [filename].html
    ```
    
    - This allowed safe examination of the source code without browser execution
    - Revealed the complete HTML structure and embedded JavaScript
3. **Content Extraction**
    
    - Identified suspicious JavaScript blocks within the HTML
    - Located embedded images and their display properties
    - Documented all external URLs and domains referenced

### Key Findings - Malicious JavaScript

The HTML file contained the following suspicious JavaScript code:

```javascript
<script type="text/javascript">
setTimeout(() => {document.getElementsByTagName("img")[0].style.display = "block";}, 5000);
var xhr = new XMLHttpRequest();
var time = new Date().getTime();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        res_data = JSON.parse(xhr.response);
        console.log("xhr.response.url_path", res_data.url_path);
        window.location.href = res_data.url_path;
    }
}
xhr.open('GET', 'https://launch.phriendlyphishing.com/clicks/get_image?id=XXXXXXXXXX&t=3&ts=' + time);
xhr.send()
</script>
```

## Technical Analysis

### Attack Flow

The malicious script follows this execution pattern:

1. **Initial Delay (5 seconds)**
    
    - `setTimeout(() => {document.getElementsByTagName("img")[0].style.display = "block";}, 5000);`
    - Waits 5 seconds before making the first image visible
    - This delay serves multiple purposes:
        - Evades automated security scanners that analyze pages quickly
        - Allows time for the page to fully load
        - Creates a more natural user experience
2. **Tracking and Communication Setup**
    
    - Creates an XMLHttpRequest object for server communication
    - Captures current timestamp for tracking purposes
    - Establishes connection to `launch.phriendlyphishing.com`
3. **Server Communication**
    
    - Sends GET request to: `https://launch.phriendlyphishing.com/clicks/get_image?id=XXXXXX&t=3&ts=[timestamp]`
    - Parameters include:
        - `id=XXXXXXX`: Unique campaign/victim identifier
        - `t=3`: Campaign type or stage indicator
        - `ts=[timestamp]`: Request timestamp for tracking
4. **Automatic Redirection**
    
    - Upon receiving server response, parses JSON data
    - Extracts `url_path` from server response
    - Automatically redirects victim to attacker-controlled URL using `window.location.href`

### Security Implications

This attack demonstrates several sophisticated techniques:

**Evasion Techniques:**

- Time-based delays to avoid automated detection
- Silent background communication
- Dynamic redirection based on server response

**Tracking Capabilities:**

- Unique victim identification
- Timestamp logging for campaign analytics
- Parameter-based campaign tracking

**Payload Delivery:**

- Server-controlled redirection destinations
- Ability to serve different payloads to different victims
- Real-time campaign management

## Risk Assessment

**High Risk Factors:**

- Automatic execution without user consent
- Direct communication with command and control servers
- Capability for dynamic payload delivery
- Sophisticated evasion techniques
- Credential harvesting potential through redirects

## Recommendations

### Immediate Actions:

1. Block the domain `launch.phriendlyphishing.com` at the network level
2. Add URL patterns to email security filters
3. Educate users about this specific campaign

### Long-term Improvements:

1. Implement JavaScript execution monitoring in email clients
2. Enhance automated scanning to account for time-delayed execution
3. Deploy advanced threat protection that analyzes dynamic behavior
4. Regular security awareness training focusing on sophisticated phishing techniques

## Conclusion

This analysis reveals a sophisticated phishing campaign that employs multiple evasion techniques and tracking mechanisms. The attack demonstrates evolution in phishing tactics, moving beyond simple credential harvesting to include advanced tracking, dynamic payload delivery, and anti-detection measures.

The combination of encoded parameters, time-delayed execution, and server-controlled redirection makes this a particularly dangerous threat that requires both technical countermeasures and user awareness to combat effectively.