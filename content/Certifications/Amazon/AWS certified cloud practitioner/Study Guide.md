## Overview
- There are 120 minutes 
- You get 1.5mins per question
- There will be some questions that will not be in the exam dumps

## What is cloud computing?
- the practice of using a network of remote servers hosted on the internet to store, manage and process data, rather than a local server or a personal computer 
### Evolution of cloud hosting 
- Dedicated server - one physical machine dedicated to a single a business 
- VPS- virtual private server 
	- one physical machine that is virtualized into sub-machines that run multiple web-applications/sites
- Shared Hosting
	- one physical machine shared by hundreds of business 
- Cloud hosting 
	- multiple physical machines that act as one system
## The evolution of computing 
Dedicated 
VMs
Containers
Functions/serverless compute- cold starts 

## Types of cloud computing
SaaS - software as a service 
- A product that is run and managed by the service provider 
	- Salesforce, office365 gmail, they run in the cloud
PaaS - Platform as a service 
- Focus on the deployment and management of your apps 
	- elastic beanstalk, heroku, google app engine 
IaaS - infrastructure as a service 
- The basic building blocks for cloud IT. Provides access to networking features, computers and data storage space
## Cloud computing deployment models
Public cloud 
- everything is built on the CSP also known as cloud native or cloud first 
- Good for start ups 
- SaaS offerings 
- New projects/companies
Private cloud 
- on prem 
- the cloud could be openstack
- Banks
- FinTech, investment management 
- Large professional service providers
Hybrid 
- using both on-prem and a CSP through a VPN connection
- public sector 
- large enterprise with heavy regulation
Cross-cloud
- using multiple cloud providers 
- multi-cloud
## Creating an AWS account 
Account alias

after creating a root user account and then an IAM admin account log in using the the IAM user 

Region selection:
- certain services can only run in certain server regions

## AWS Management Console
Generally when you log-in to AWS you will need to log in as a root user 
![[content/Certifications/Amazon/AWS certified cloud practitioner/Screenshot.png|200]]
The root user is the admin for the tenant
- generally we don't want to be using this account 
- We need to set up a proper account within that tenant and we can do this through IAM 
	- Always add MFA 
	- you have to login through the account alias, which we can actually change to a company name ect.... 
- For this account that we make we need to enable AWS administrator level access that we can provide this through a user group which we can do by using group 
- We should also give the power user access for admins 
## Billing and Budgets 
