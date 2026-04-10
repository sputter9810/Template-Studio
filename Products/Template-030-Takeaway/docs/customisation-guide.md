# Customisation Guide

## Quick Start
Edit `src/index.html` to update:
- takeaway brand name and initials
- hero headline, supporting text, and primary order CTA
- menu highlight cards and offer cards
- about copy, reviews, and trust messaging
- opening hours, address, and contact details
- enquiry options for pickup, delivery, group orders, or general menu questions

## Design Tokens
Update colours in `src/assets/css/base/variables.css`.

Update typography in `src/assets/css/base/typography.css`.

## Images
Replace the placeholder visual panels in `src/index.html` with real takeaway photography such as hero menu items, packaging, prep scenes, counter service, or branded food close-ups that match the concept.

## Form
The enquiry form is static by default. Connect it to your preferred inbox, ordering flow, CRM, backend, or form service before going live.

## Theme Selector
To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
