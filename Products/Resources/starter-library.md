# Starter Library

## Purpose
This starter library defines the minimum reusable system to use across early website template production.

It is intentionally lean. The goal is to create consistency across the first templates without overengineering a full component and section system too early.

This library should guide the build of the first 2–3 templates. After that, it should be reviewed and expanded into a more complete component and section library.

---

## Use Principles

- Reuse structure before creating variants
- Prefer consistency over novelty
- Keep components simple and editable
- Avoid niche-specific styling in the base structure
- Extract new patterns only after they repeat across multiple templates

---

## Core Components

### 1. Navigation
**Purpose:** Provide clear site-wide access to sections/pages and a strong first impression.

**Base Structure:**
- Logo / brand name on the left
- Navigation links on the right
- Primary CTA optional
- Mobile menu toggle on smaller screens

**Requirements:**
- Sticky or static depending on template needs
- Clear hover and focus states
- Mobile-friendly behaviour
- Works for both one-page and multi-page templates

**Default Content Slots:**
- Brand
- Links
- CTA

---

### 2. Hero Block
**Purpose:** Introduce the business, communicate the value proposition, and direct the user to a clear action.

**Base Structure:**
- Eyebrow optional
- Main headline
- Supporting paragraph
- 1–2 CTA buttons
- Optional image / illustration / placeholder panel

**Requirements:**
- Strong visual hierarchy
- Immediate clarity on what the business offers
- CTA visible without scrolling on desktop
- Must work with or without an image

**Default Content Slots:**
- Eyebrow
- Headline
- Supporting text
- Primary CTA
- Secondary CTA
- Visual area

---

### 3. Button System
**Purpose:** Standardise clickable actions across all templates.

**Button Types:**
- Primary button
- Secondary button
- Text link / tertiary action

**Requirements:**
- Clear default, hover, active, and focus states
- Consistent padding and border radius
- Strong contrast for accessibility
- Easy to reuse across hero, nav, forms, and CTA sections

**Default Content Slots:**
- Label
- Optional icon

---

### 4. Card
**Purpose:** Display repeatable pieces of content in a consistent format.

**Use Cases:**
- Services
- Menu items
- Features
- Testimonials
- Team members
- Pricing items

**Base Structure:**
- Optional image / icon
- Title
- Supporting text
- Optional metadata or CTA

**Requirements:**
- Flexible enough for different content types
- Consistent spacing and typography
- Works in grid and stack layouts

**Default Content Slots:**
- Visual
- Title
- Description
- Meta
- CTA

---

### 5. Section Wrapper
**Purpose:** Keep spacing and layout consistent across the website.

**Base Structure:**
- Outer section
- Inner container
- Optional section header
- Section body

**Requirements:**
- Consistent vertical padding
- Shared max-width container
- Works for light and dark section backgrounds
- Controls rhythm between sections

**Default Content Slots:**
- Eyebrow optional
- Section heading
- Section intro text
- Main content

---

### 6. Form Block
**Purpose:** Capture leads, enquiries, bookings, or contact requests.

**Base Structure:**
- Label
- Input / textarea / select
- Submit button
- Optional helper text

**Requirements:**
- All fields labelled
- Accessible focus states
- Clear error/success styling
- Simple, clean default layout

**Default Content Slots:**
- Name
- Email
- Phone optional
- Message
- Submit CTA

---

### 7. Footer
**Purpose:** Close the page cleanly and provide utility links/contact info.

**Base Structure:**
- Brand / summary
- Navigation or quick links
- Contact details
- Copyright line
- Optional social links

**Requirements:**
- Visually simple
- Easy to scan
- Consistent spacing
- Works in compact and expanded layouts

**Default Content Slots:**
- Brand
- Links
- Contact
- Social
- Copyright

---

## Core Sections

### 1. Hero Section
**Purpose:** Main conversion-focused opening section.

**Built From:**
- Section Wrapper
- Hero Block
- Button System

**Default Content:**
- Headline
- Supporting text
- 1–2 CTAs
- Visual panel or image placeholder

**Notes:**
Use this as the base hero across early templates before creating alternate hero variants.

---

### 2. About Section
**Purpose:** Build trust and explain the business briefly.

**Built From:**
- Section Wrapper
- Optional Card / media block

**Default Content:**
- Section heading
- Intro paragraph
- 2–4 supporting points
- Optional image

**Notes:**
Keep concise. This is not a long story section in starter templates.

---

### 3. Services / Products / Menu Section
**Purpose:** Showcase the core offer of the business.

**Built From:**
- Section Wrapper
- Card system

**Default Content:**
- Section heading
- Intro text
- 3–6 cards/items

**Notes:**
This section should adapt by niche:
- Services for tradies
- Menu items for cafes/restaurants
- Programs/classes for gyms
- Packages for coaches

---

### 4. Testimonials / Social Proof Section
**Purpose:** Build trust and reduce buyer hesitation.

**Built From:**
- Section Wrapper
- Card system

**Default Content:**
- Section heading
- 2–4 testimonials
- Optional ratings or trust badges

**Notes:**
Keep structure simple and repeatable.

---

### 5. Contact Section
**Purpose:** Give users a clear path to take action.

**Built From:**
- Section Wrapper
- Form Block
- Optional contact info block

**Default Content:**
- Section heading
- Short CTA copy
- Form
- Phone / email / address optional

**Notes:**
This should always feel easy and low-friction.

---

### 6. CTA Section
**Purpose:** Reinforce the primary action near the bottom of the page.

**Built From:**
- Section Wrapper
- Button System

**Default Content:**
- Short headline
- Supporting line
- Primary CTA

**Notes:**
Use this before the footer when the template benefits from an extra conversion push.

---

## Base Layout Rules

### Container
- Use one shared max-width container system across all templates
- Keep horizontal padding consistent
- Avoid changing container widths randomly between sections

### Grid
- Prefer simple 1-column / 2-column layouts early
- Use cards in a repeatable grid system
- Avoid complex asymmetrical layouts in starter templates

### Spacing
- Use a consistent spacing scale
- Section spacing should be generous and predictable
- Card padding should be visually balanced and reused

### Responsive Behaviour
- Start mobile-first
- Collapse multi-column layouts cleanly
- Navigation must remain usable on small screens
- Buttons and forms must remain easy to tap

---

## Naming Guidance

Use simple, reusable names.

### Suggested Component Naming
- `.site-nav`
- `.hero`
- `.btn`
- `.btn-primary`
- `.btn-secondary`
- `.card`
- `.section`
- `.section-header`
- `.contact-form`
- `.site-footer`

### Suggested Section Naming
- `.hero-section`
- `.about-section`
- `.services-section`
- `.testimonials-section`
- `.contact-section`
- `.cta-section`

Do not create niche-specific names in the starter library like:
- `.cafe-menu-special-card`
- `.gym-dark-hero-panel`

Keep the base system generic.

---

## What Not To Add Yet

Do not fully define these until repeated use justifies them:

- Multiple hero variants
- Full pricing systems
- Complex sliders/carousels
- Advanced animation systems
- Large theme token libraries
- Niche-specific components
- E-commerce patterns
- Blog/archive systems

These belong in later phases after real use cases emerge.

---

## Review Trigger

Review and expand this starter library when:
- 2–3 templates are complete
- A component pattern is repeated 3+ times
- A naming issue appears more than once
- A section needs multiple stable variants

At that point, extract:
- Component Library
- Section Library
- Variant rules
- Theme token system

---

## Current Recommended Use
Use this starter library for early Phase 1 templates, especially:
- Cafe
- Tradies
- Coach
- Gym

These templates are likely to reveal the strongest reusable patterns.

---

## Notes
This file is a launch document, not a final design system. It exists to support speed, consistency, and clean early production.
