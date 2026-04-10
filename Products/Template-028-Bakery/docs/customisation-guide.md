# Customisation Guide

## Quick Start
Edit `src/index.html` to update:
- bakery name and brand initials
- hero headline, supporting text, and primary CTA
- signature bake cards and order offer cards
- bakery story, menu highlight copy, and testimonials
- opening hours, address, and contact details
- enquiry options for cakes, pickup boxes, catering, or wholesale

## Design Tokens
Update colours in `src/assets/css/base/variables.css`.

Update typography in `src/assets/css/base/typography.css`.

## Images
Replace the placeholder visual panels in `src/index.html` with real bakery photography such as bread shelves, pastry close-ups, shopfront imagery, prep scenes, packaging, or celebration cakes that match the offer.

## Form
The enquiry form is static by default. Connect it to your preferred inbox, CRM, backend, or form service before going live.

## Theme Selector
To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
