# Customisation Guide

## Quick Start
Edit `src/index.html` to update:
- clinic name and brand initials
- hero headline, support text, and main CTA
- treatment cards and pricing
- clinic approach copy and practitioner bios
- testimonials, hours, address, and booking details

## Design Tokens
Update colours in `src/assets/css/base/variables.css`.

Update typography in `src/assets/css/base/typography.css`.

## Images
Replace the placeholder visual panels in `src/index.html` with treatment room imagery, practitioner photography, recovery tools, or calm clinic details that match the brand.

## Form
The booking form is static by default. Connect it to your preferred booking platform, backend, or form service before going live.

## Theme Selector
To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
