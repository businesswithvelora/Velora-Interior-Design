# Application User Flows & Navigation Diagrams

This document details navigation flows, booking transitions, and media loops inside Velora Interior Design.

---

## 1. User Navigation Flow
This diagram details how users explore services, view portfolio categories, and end at conversion actions.

```mermaid
graph TD
    A[Visitor Landing] --> B{Choose Pathway}
    B -->|Explore Expertise| C[Services Page]
    B -->|Inspect Projects| D[Portfolio Page]
    B -->|Review Methodology| E[Process Page]
    B -->|Inspect Proof| F[Testimonials Page]

    C -->|Click Request Consultation| G[Consultation Modal Form]
    D -->|Click Project Card| H[Project Details Page]
    F -->|Hover Card| I[Video Review Plays Muted]

    G -->|Submit Form| J[WhatsApp Redirect - Conversion]
    H -->|Click CTA| G
```

---

## 2. Contact Form & WhatsApp Redirection Flow
Tracks the validation and message formatting pipeline.

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Page as Contact/Services View
    participant Form as React Hook Form
    participant API as WhatsApp Gateway

    User->>Page: Click Request Consultation
    Page->>User: Open Modal Form
    User->>Page: Fill Details & Submit
    Page->>Form: Run Schema Validation
    alt Validation Fails
        Form-->>User: Render Error Alerts (e.g. Email Invalid)
    else Validation Passes
        Form->>Page: Set Loading State
        Page->>Page: Format Message Template
        Page->>Page: URI Encode Form Inputs
        Page->>API: Redirect via window.open(wa.me/...)
        API-->>User: Open WhatsApp Client/Tab with Prefilled Text
    end
```

---

## 3. Testimonials Video Loop Flow
Tracks user hover states and control updates.

```mermaid
stateDiagram-v2
    [*] --> Idle: Page Load (Muted Poster Visible)
    Idle --> Playing: mouseEnter trigger
    Playing --> Playing: Play Video, Scale Card, Fade Play Button
    Playing --> Idle: mouseLeave trigger
    Idle --> Idle: Pause Video, Reset Time = 0, Show Play Button
```
