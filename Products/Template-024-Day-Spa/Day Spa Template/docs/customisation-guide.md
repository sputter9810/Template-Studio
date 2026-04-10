# Customisation Guide

## Quick Start
Edit `src/index.html` to update:
- spa name and brand initials
- hero headline, supporting text, and primary CTA
- treatment cards and package pricing
- spa experience copy and amenities
- therapist bios and testimonials
- hours, address, and reservation details

## Design Tokens
Update colours in `src/assets/css/base/variables.css`.

Update typography in `src/assets/css/base/typography.css`.

## Images
Replace the placeholder visual panels in `src/index.html` with real treatment room imagery, facial or massage photography, lounge details, or calm venue textures that match the brand.

## Form
The reservation form is static by default. Connect it to your preferred booking platform, backend, or form service before going live.

## Theme Selector
To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
