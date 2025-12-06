# Exercise 0.5: Single page app diagram
The sequence for the initial page load is very similar to the non-single page app version, except that a different JavaScript file is used. 

```mermaid
---
config:
  title: Exercise 0.5 - Single page app diagram
---

sequenceDiagram
  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
  activate Server
  Server-->>Browser: HTML document
  deactivate Server

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate Server
  Server-->>Browser: CSS file
  deactivate Server

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
  activate Server
  Server-->>Browser: JavaScript file
  deactivate Server

  Note right of Browser: The Browser executes the single page app JavaScript code that fetches the JSON from the Server

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate Server
  Server-->>Browser: [ ... , { "content": "add", "date": "2025-12-06T19:54:37.342Z" } ]
  deactivate Server

  Note right of Browser: The Browser executes the callback function, which renders the notes in a similar manner to Exercise 0.4
