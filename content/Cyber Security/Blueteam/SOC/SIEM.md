#Blueteam
## Elastic Stack 


This was originally created by Elastic
- Open source collection of 3 applications 
	- Elastic search
	- Kibana
	- Logstash
- They Work together to offer comprehensive search and visualization for looking at logs and real time analysis 
- You can add Kafka, RabbitMQ and Redis for increased buffering and to make it stronger
- nginx can be added to improve the security 

**Elastic search** - Store search and analyze
- Distributed search adn analysis engine
- Based on JSON with RESTful APIs
- functions iwthin teh stack to handle indexing, querying and storing information related to log data
**Log stash** - ingest 
- This is responsible for collecting, transforming and transporting the log files. 
- there are 3 main functions of Log stash:
	- Process input 
	- Transform and enrich log records 
	- Send log records to Elasticsearch 
**Kibana** - visualization layer
-  This is the visualization tool for Elasticsearch documents
- Through queries you are able to view the stored data 
- This simplifies the data and makes it more easy to play around with to create queries and dashboards


Beats - Data shipper 
- Light weight and single purpose data shipper that is designed to be installe don remote mashciens to forward logs and metrics to Elastic search or Logstash directly 
- Beats functions to simplify the process 


### The Elastic stack for SIEM 
The Elastic Stack as a SIEM ingests security logs through Logstash, stores them in Elasticsearch, and lets analysts investigate them using Kibana. Analysts use KQL to search data effectively, ranging from simple field:value lookups to complex queries with operators, wildcards, and time ranges. ECS provides consistency across all data sources, making searches and visualizations easier and more powerful

- The Elastic stack can be used to collect, store, analyse and create visualizations of your security related data from your environment 
- KQL (kibana query language)

Basic Data collection:
- **Logstash**: Used to pull in logs from different sources, clean them up, and send them into Elasticsearch.
- **Elasticsearch**: Stores the data in a searchable way (indexing).
- **Kibana**: Lets analysts interact with that data—dashboards, graphs, and searches.


SOC (Security Operations Center) analysts mainly use **Kibana** as their interface. In Kibana, they can:
- Run searches,
- Build dashboards,
- Investigate incidents.
### KQL
KQL is a search language made specifically for Kibana. It’s easier than Elasticsearch’s raw query syntax but still powerful.
#### Basic idea:
- **field:value** → You search for something in a specific field.  
    Example: `event.code:4625` → shows Windows failed login attempts.
#### Free text search:
- Just type `"svc-sql1"` → finds that text anywhere in the data.
#### Logical operators:
- `AND`, `OR`, `NOT` to combine conditions.  
    Example:
    
    `event.code:4625 AND winlog.event_data.SubStatus:0xC0000072`
    
    → Failed logins where the account is disabled.
#### Comparison operators:
- `:>`, `:>=`, `:<`, `:<=`, `:!` → refine searches.  
    Example:
    `event.code:4625 AND winlog.event_data.SubStatus:0xC0000072  AND @timestamp >= "2023-03-03T00:00:00.000Z"  AND @timestamp <= "2023-03-06T23:59:59.999Z"`
    
    → Failed logins on disabled accounts between March 3–6, 2023.
    
#### Wildcards and regex:

- `admin*` matches `admin`, `administrator`, `admin123`.  
    → Useful for spotting login attempts targeting admin accounts.


## How to query using kibana
There are two main ways:
1. **Free text search + Discover feature**
    - Try searching for “4625” and check which fields show up.
    - Example: `event.code`, `winlog.event_id`, `@timestamp`.
    - Expand records to explore available fields.
2. **Elastic documentation**
    - Learn about **Elastic Common Schema (ECS)** and specific field sets like Winlogbeat, Filebeat, etc.
    - This helps you understand what fields are available before you search.
### ECS
**Elastic common schema**
ECS is a standard naming convention for fields in Elastic. Why it matters:
- **Consistency**: Same field names across different log sources.
- **Easier queries**: You don’t need to remember different names for the same type of data.
- **Correlation**: You can link events from multiple sources (firewalls, Windows logs, network logs) using shared fields.
- **Better dashboards**: Easier to build visualizations since field names are unified.
- **Future-proof**: Works smoothly with Elastic Security, Observability, Machine Learning, etc.

[[https://www.elastic.co/docs/reference/ecs/ecs-guidelines |ECS Documentation]]
#### Summary 
**Purpose of ECS**
- ECS is a **standardized schema (field naming convention)** for events and logs in the Elastic Stack.
- It ensures **consistency** across data from different sources (e.g., firewalls, Windows logs, cloud logs, endpoints).
- Makes searching, visualizing, and correlating data much easier.
**Field Types**
- **Core Fields**
    - Most common across all use cases.
    - Designed to work across any data source        
    - Example: `@timestamp`, `event.code`, `event.category`, `user.name`, `source.ip`, `host.name`.
    - Should be prioritized when ingesting data.
- **Extended Fields**
    - Specific to a log type, technology, or use case.
    - Provide detailed, source-specific context.
    - Example: `winlog.event_data.SubStatus` (Windows only), `http.request.method` (HTTP logs only).
    - May change over time as sources evolves
**Benefits of ECS**
- **Unified View:** Same queries and dashboards can work across all data sources.
- **Efficiency:** Analysts don’t need to learn different field names for each log type.
- **Correlation:** Events from multiple sources can be linked using shared fields (e.g., same `source.ip`).
- **Better Visualizations:** Dashboards and alerts are more consistent and reusable.
- **Future-Proofing:** Ensures compatibility with Elastic’s security, observability, and ML solutions.

**Common ECS Field Groups** (examples)
    - **Event fields:** Describe the event itself (`event.code`, `event.category`, `event.outcome`).
    - **User fields:** Who performed the action (`user.name`, `user.id`).
    - **Host fields:** The system where it happened (`host.name`, `host.ip`).
    - **Source/Destination fields:** Network context (`source.ip`, `destination.port`).
    - **File/process fields:** If related to files or processes (`file.path`, `process.pid`).
More specific fields related to winlog 
[[https://www.elastic.co/docs/reference/beats/winlogbeat/exported-fields-winlog|Winlogbeat fields]]


### Setting up ELK stack 
