# Exercise 0.6: New note in SPA diagram

```mermaid
---
config:
  title: Exercise 0.6 - New note in SPA diagram
---

sequenceDiagram
  actor User

  User->>Browser: Enter "spa day" in form
  User->>Browser: Click "Save" button

  Note right of Browser: JavaScript running on Browser adds new note to local copy of list and redraws the list of notes

  Browser->>Server: POST {content: "spa day", date: "2025-12-07T06:26:30.539Z"} to https://studies.cs.helsinki.fi/exampleapp/spa
  activate Server
  Server-->>Browser: 201 Created
  deactivate Server

  Note right of Browser: JavaScript running on Browser successfully sent the new note to the server
```
