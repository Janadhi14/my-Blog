#ctf #WebApplications #easy
## Server side template injection
- This is the main conept you will need to know for this ctf 
- how to 

## Process
If we try injecting template expressions then we can validate this

| Engine                            | Test Payload     | Expected Output                             |
| --------------------------------- | ---------------- | ------------------------------------------- |
| **Jinja2 (Flask/Django, Python)** | `{{7*7}}`        | `49`                                        |
| **Twig (PHP)**                    | `{{7*'7'}}`      | `7777777` (string multiplication, not math) |
| **Smarty (PHP)**                  | `{$7*7}`         | `49`                                        |
| **Velocity (Java)**               | `#set($x=7*7)$x` | `49`                                        |
| **Freemarker (Java)**             | `${7*7}`         | `49`                                        |
#### tplmap



