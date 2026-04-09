# Customisation Guide

## Quick Start
Open `src/index.html` in your code editor and update the visible content to match your coaching brand, consulting offer, digital product funnel, or course business.

## What to edit first
- Brand name in the header and footer
- Hero headline, supporting copy, and CTA labels
- Offer cards, results proof, and testimonials
- Lead magnet details and pricing cards
- Contact details and enquiry form copy
- Placeholder content inside the visual panels

## CSS structure
The CSS is broken into modular files so changes are easier to manage.

### Main entry file
- `src/assets/css/style.css`

### Base styles
- `base/reset.css`
- `base/variables.css`
- `base/typography.css`
- `base/utilities.css`

### Layout
- `layout/container.css`

### Components
- Brand
- Navigation
- Buttons
- Cards
- Trust strip
- Feature list
- Contact form
- Contact details
- Visual panel
- Results grid
- Badge pill
- Dashboard mockup
- Footer

### Sections
- Hero
- Services
- Results
- About
- Lead magnet
- Pricing
- FAQ
- CTA
- Contact

## Colors
Change the color palette in `src/assets/css/base/variables.css`.

## Fonts
The template uses Fraunces for headings and Manrope for body text. Change the font import in `src/index.html` and update `base/typography.css` if needed.

## Images
This template uses stylized placeholder panels instead of real images. You can replace these panels with coach portraits, dashboard screenshots, client wins, workshop stills, or product mockups when adapting the template.

## Offer and pricing content
The offer cards, lead magnet block, pricing cards, and testimonials live directly in `src/index.html`, so buyers can update the sales story without touching JavaScript.

## Forms
The contact form is static by default. Connect it to your preferred form service, CRM, booking platform, or backend before going live.

## Theme selector
This template includes a built-in theme selector panel with five color schemes: Plum Authority, Forest Ledger, Navy Lift, Coral Momentum, and Soft Light.

To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
