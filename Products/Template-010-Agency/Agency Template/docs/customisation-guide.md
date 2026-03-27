# Customisation Guide

## Brand updates
Edit `src/index.html` to change:
- business name
- navigation labels
- headlines and body copy
- service names
- testimonial content
- contact details

## Colours and spacing
Global design tokens live in:
- `src/assets/css/base/variables.css`

This is the main place to update colours, container width, border radius values, and shared shadow styles.

## Typography and base styling
Base styling is split into:
- `src/assets/css/base/reset.css`
- `src/assets/css/base/typography.css`
- `src/assets/css/base/utilities.css`

## Layout files
Reusable layout rules live in:
- `src/assets/css/layout/container.css`

## Components
Shared UI pieces are broken into separate files in:
- `src/assets/css/components/`

These cover items like:
- branding
- navigation
- buttons
- cards
- forms
- visuals
- footer

## Sections
Section-specific styling lives in:
- `src/assets/css/sections/`

This makes it easier to adjust one part of the homepage without touching the rest of the template.

## Images
Place replacement images in:
- `src/assets/images/`

Then update the matching markup in `src/index.html`.

## JavaScript
Mobile navigation behaviour is in:
- `src/assets/js/main.js`

## Contact form
The included contact form is static by default. Connect it to Netlify Forms, Formspree, Basin, or your own backend if you want live submissions.
