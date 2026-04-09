# Customisation Guide

## Quick edits
- Update the studio name in `src/index.html`.
- Replace placeholder service names, pricing, and booking details.
- Swap gallery placeholder panels with your own images or cards.
- Adjust colours and spacing in `src/assets/css/base/variables.css`.

## CSS structure
- `style.css` imports all styles in one place.
- `base/` contains resets, typography, variables, and utility helpers.
- `layout/` contains layout primitives like the container.
- `components/` contains reusable UI patterns.
- `sections/` contains page-section specific styling.

## JavaScript
- `src/assets/js/main.js` controls the mobile navigation toggle.
- The same file also powers the theme selector panel.
- The template is otherwise static and does not rely on frameworks.

## Forms
The contact form is visual only. To make it submit live booking enquiries, connect it to a form service or backend.

## Theme selector
This template includes a built-in theme selector panel with five colour schemes: Blush, Berry, Champagne, Sage, and After Hours.

To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
