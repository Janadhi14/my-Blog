#CyberSecurity #WebApplications #RedTeam

## What is Fuzzing and what is FFuf?
- Fuzzing is the process of brute forcing(not dictionary attack) where we crack a password/domain/filename...ect using every possible combination of characters.
- The term `fuzzing` refers to a testing technique that sends various types of user input to a certain interface to study how it would react
- Ffuf is an application that automates this process of fuzzing and sends requests to the target server, if we get a 200 OK response then that indicates the content exists!
## Wordlists
- We use wordlists in order to iterate through to determine a valid input that will generate a 200 OK response 
- we use https://github.com/danielmiessler/SecLists which contains many word lists 
## Installing Ffuf
```bash
apt install ffuf -y
```
-h to see the use
```bash
Janadhi@Kali$ ffuf -h

HTTP OPTIONS:
  -H               Header `"Name: Value"`, separated by colon. Multiple -H flags are accepted.
  -X               HTTP method to use (default: GET)
  -b               Cookie data `"NAME1=VALUE1; NAME2=VALUE2"` for copy as curl functionality.
  -d               POST data
  -recursion       Scan recursively. Only FUZZ keyword is supported, and URL (-u) has to end in it. (default: false)
  -recursion-depth Maximum recursion depth. (default: 0)
  -u               Target URL
...SNIP...

MATCHER OPTIONS:
  -mc              Match HTTP status codes, or "all" for everything. (default: 200,204,301,302,307,401,403)
  -ms              Match HTTP response size
...SNIP...

FILTER OPTIONS:
  -fc              Filter HTTP status codes from response. Comma separated list of codes and ranges
  -fs              Filter HTTP response size. Comma separated list of sizes and ranges
...SNIP...

INPUT OPTIONS:
...SNIP...
  -w               Wordlist file path and (optional) keyword separated by colon. eg. '/path/to/wordlist:KEYWORD'

OUTPUT OPTIONS:
  -o               Write output to file
...SNIP...

EXAMPLE USAGE:
  Fuzz file paths from wordlist.txt, match all responses but filter out those with content-size 42.
  Colored, verbose output.
    ffuf -w wordlist.txt -u https://example.org/FUZZ -mc all -fs 42 -c -v
...SNIP...

```
## Fuzzing for directories
