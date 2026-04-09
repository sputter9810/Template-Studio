# Customisation Guide

## Quick Start
Edit `src/index.html` to update:
- studio name
- hero headline and CTA text
- class style cards
- schedule table
- teacher bios
- contact details

## Design Tokens
Update colours in `src/assets/css/base/variables.css`.

Update typography in `src/assets/css/base/typography.css`.

## Images
Replace the placeholder panels in `src/index.html` with real studio, teacher, or class photography when needed.

## Form
The intro booking form is static by default. Connect it to your preferred backend or form service before going live.

## Theme selector
To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
