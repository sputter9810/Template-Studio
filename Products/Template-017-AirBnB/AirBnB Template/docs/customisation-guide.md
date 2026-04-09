# Customisation Guide

## 1. Update branding
Edit `src/index.html` and replace:
- the business name
- brand initials
- contact details
- property location and stay information

## 2. Change colours and core design tokens
Open `src/assets/css/base/variables.css`.
The first variables to update are usually:
- `--primary`
- `--primary-strong`
- `--accent`
- `--bg`
- `--surface`
- `--text`

## 3. Update page copy
Most of the editable content lives in `src/index.html`, including:
- hero heading and supporting text
- amenities cards
- stay details content
- local guide cards
- guest reviews
- FAQ
- contact section

## 4. Replace placeholder visuals
Add your images to `src/assets/images/` and then update the relevant areas in `src/index.html`.

You can:
- replace placeholder panels with `<img>` elements
- use CSS background images
- swap gallery tiles for property photos, interior details, or nearby destination imagery

## 5. Edit modular CSS files
The stylesheet is split into reusable layers:
- `base/` for reset, variables, typography, and utility styles
- `layout/` for structural wrappers like the container
- `components/` for reusable UI pieces such as buttons, cards, and navigation
- `sections/` for page-specific layout styling

`src/assets/css/style.css` imports everything in order.

## 6. Connect the enquiry form
The form is static by default.
Common connection options include:
- Netlify Forms
- Formspree
- Basin
- your own backend endpoint

You can also point the main CTA buttons to an external booking platform if you prefer.

## 7. Update navigation or sections
If you add, remove, or rename sections in the page, make sure you also update the matching navigation links and any related IDs.

## 8. Mobile menu and theme selector
The mobile menu script and theme selector logic are in `src/assets/js/main.js`.
If you change the `.nav-toggle`, `.nav-links`, or `[data-theme-option]` structure, update the script to match.

## Theme selector
This template includes a built-in theme selector panel with five colour schemes: Olive Coast, Terracotta Dusk, Ocean Retreat, Sandstone, and Night Cabin.

To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
