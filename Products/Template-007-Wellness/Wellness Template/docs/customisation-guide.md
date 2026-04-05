# Customisation Guide

## Start point
Open `src/index.html` for content edits and `src/assets/css/base/variables.css` for the quickest brand styling updates.

## Brand edits
Update the business name, initials, contact details, calls to action, and footer copy directly in `src/index.html`.

## Styling structure
The stylesheet is now modular:
- `base/` handles reset, variables, typography, and shared utilities
- `layout/` handles structural layout rules such as the container and shared grids
- `components/` handles reusable UI pieces like navigation, buttons, cards, visuals, and forms
- `sections/` handles section-specific styling for hero, trust strip, gallery, FAQ, CTA, contact, and footer

## Common edits
- Colours: `src/assets/css/base/variables.css`
- Buttons: `src/assets/css/components/buttons.css`
- Cards and feature lists: `src/assets/css/components/cards.css`
- Contact form: `src/assets/css/components/forms.css`
- Hero layout and stats: `src/assets/css/sections/hero.css`

## Images
The template ships with placeholders only. Add your own assets into `src/assets/images/` and replace the placeholder panels in `src/index.html`.

## Form connection
The contact form is presentational by default. Connect it to Netlify Forms, Formspree, or your preferred backend.

## Deployment
Deploy the contents of `src/` to any static host such as Netlify, Vercel, GitHub Pages, or Cloudflare Pages.


## Theme selector
This template now includes a built-in theme selector panel with five colour schemes: Sage, Sand, Lavender, Ocean, Soft Charcoal.

To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
