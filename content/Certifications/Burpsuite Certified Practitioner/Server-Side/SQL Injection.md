## What is SQL injection?
- What is SQL?
	- SQL stands for structured query language
	- It is a language used for databses 
		- Used for building databases
		- can be used to create, read update and delete 
- SQL injection or commonly called SQLi is a web security vulnerability that allows an attacker to interfer with the queries that an application makes to its database.
- Malicious threat actors can view the data that they are not normally abe to retrieve.
	- Basically they could see information that they are not supposed to see. 
	- Attackers will normally attempt to modify or delete this data 
		- Causing persistent changes to the apps content or behaviour 
	It is also possible that an attacker could escalate this SQLi to compromise the underlying server or other back-end infrastructure. it can also enable them to perform DoS attacks 

For oracle databases 
```SQL
SELECT * FROM v$version
```

## How to detect SQL injection vulnerabilities 
You can detect SQL injection manually using a systematic set of tests against every entry point in the application

