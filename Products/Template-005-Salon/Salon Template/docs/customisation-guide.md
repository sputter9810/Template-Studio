# Customisation Guide

## Quick edits
- Update the salon name in `src/index.html`.
- Replace placeholder service names, pricing, and salon details.
- Swap placeholder gallery blocks with your own images inside `src/assets/images/`.
- Adjust colours and spacing in `src/assets/css/base/variables.css`.

## CSS structure
- `style.css` imports all styles in one place.
- `base/` contains resets, typography, variables, and utility helpers.
- `layout/` contains layout primitives like the container.
- `components/` contains reusable UI patterns.
- `sections/` contains page-section specific styling.

## JavaScript
- `src/assets/js/main.js` controls the mobile navigation toggle.
- The template is otherwise static and does not rely on frameworks.

## Forms
The contact form is visual only. To make it submit live enquiries, connect it to a form service or backend.


## Theme selector
This template now includes a built-in theme selector panel with five colour schemes: Blush, Rose Gold, Ivory, Sage, Charcoal.

To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
