# Customisation Guide

## Quick Start
Edit `src/index.html` to update:
- roaster name and brand initials
- hero headline, supporting text, and primary CTA
- featured coffee cards, tasting notes, and pricing
- subscription offer, wholesale plan, and brand story copy
- process steps, testimonials, and visit details
- hours, address, and enquiry details

## Design Tokens
Update colours in `src/assets/css/base/variables.css`.

Update typography in `src/assets/css/base/typography.css`.

## Images
Replace the placeholder visual panels in `src/index.html` with real coffee bag photography, cafe scenes, roastery imagery, brew equipment, or sourcing visuals that match the brand.

## Form
The enquiry form is static by default. Connect it to your preferred ecommerce flow, CRM, backend, or form service before going live.

## Theme Selector
To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
