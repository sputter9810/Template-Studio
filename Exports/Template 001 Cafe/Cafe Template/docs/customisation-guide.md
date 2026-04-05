# Customisation Guide

## Edit content
Open `src/index.html` and replace:
- business name
- headings and body copy
- menu items and prices
- testimonials
- FAQ entries
- contact details

## Replace imagery
This version uses visual placeholder panels in several sections. You can:
- keep them as styled demo panels, or
- replace them with your own images or media blocks

## CSS structure
The stylesheet is split into folders for easier editing:

- `assets/css/base/`
  - reset, variables, typography, utilities
- `assets/css/layout/`
  - container and shared layout rules
- `assets/css/components/`
  - buttons, cards, forms, navigation, visuals
- `assets/css/sections/`
  - section-specific styling such as hero, gallery, FAQ, contact, footer

The main stylesheet is `assets/css/style.css`, which imports all partial files.

## JavaScript
`assets/js/main.js` handles the mobile navigation toggle.

## Demo form
The form is static by default. Connect it to your preferred backend, form service, or booking workflow when you are ready to go live.
