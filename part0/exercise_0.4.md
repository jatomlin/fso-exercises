# Exercise 0.4: New note diagram

```mermaid
---
config:
  title: Exercise 0.4 - New note diagram
---

sequenceDiagram
  Browser->>Server: POST form data to https://studies.cs.helsinki.fi/exampleapp/new_note
  activate Server
  Server-->>Browser: URL REDIRECT to /exampleapp/notes
  deactivate Server

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  activate Server
  Server-->>Browser: HTML document
  deactivate Server

  Note right of Browser: The Browser (re)loads the page, according to the redirect, to get the updated list of notes

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate Server
  Server-->>Browser: CSS file
  deactivate Server

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  activate Server
  Server-->>Browser: JavaScript file
  deactivate Server

  Note right of Browser: The Browser (re)executes the JavaScript code that fetches the JSON from the Server

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate Server
  Server-->>Browser: [ ... , { "content": "just creating a new note, don't mind me", "date": "2025-12-06T18:41:33.372Z" } ]
  deactivate Server

  Note right of Browser: The Browser executes the callback function that renders the notes (including the one that was just submitted)

```
