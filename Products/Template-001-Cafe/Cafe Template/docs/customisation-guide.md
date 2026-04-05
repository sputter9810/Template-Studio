# Customisation Guide

**Template version:** 1.1.0

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

## Colour themes
This version includes five cafe-relevant colour schemes:
- Espresso
- Sage
- Terracotta
- Cream
- Charcoal

Use the floating theme button in the bottom-right corner to cycle through them in the browser.

### Change the default theme
Open `src/index.html` and update the `data-theme` value on the `<body>` tag.

Example:
```html
<body data-theme="sage">
```

### Edit existing theme colours
Open `src/assets/css/base/variables.css`.
Each theme is defined with a `body[data-theme="..."]` block.
Update the CSS custom properties inside the relevant block to adjust backgrounds, accents, borders, gradients, or footer colours.

## CSS structure
The stylesheet is split into folders for easier editing:

- `assets/css/base/`
  - reset, variables, typography, utilities
- `assets/css/layout/`
  - container and shared layout rules
- `assets/css/components/`
  - buttons, cards, forms, navigation, theme switcher, visuals
- `assets/css/sections/`
  - section-specific styling such as hero, gallery, FAQ, contact, footer

The main stylesheet is `assets/css/style.css`, which imports all partial files.

## JavaScript
`assets/js/main.js` handles:
- the mobile navigation toggle
- the colour theme cycling button
- saving the selected theme in local storage

## Demo form
The form is static by default. Connect it to your preferred backend, form service, or booking workflow when you are ready to go live.


## Theme selector
This template now includes a built-in theme selector panel with five colour schemes: Espresso, Sage, Terracotta, Cream, Charcoal.

To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
