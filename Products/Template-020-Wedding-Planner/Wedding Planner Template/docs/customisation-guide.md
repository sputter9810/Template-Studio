# Customisation Guide

## Start files

- Edit page content in `src/index.html`
- Adjust styling through `src/assets/css/style.css` and the imported partials
- Update mobile menu behaviour and theme settings in `src/assets/js/main.js`

## CSS structure

The CSS is modular:

- `base/` for resets, typography, utilities, and variables
- `layout/` for the shared container
- `components/` for reusable UI patterns
- `sections/` for section-specific styling

The main `style.css` file imports these files in order.

## Typical updates

### Brand

Replace:

- site name
- initials / brand mark
- meta description
- page title
- planner location and contact details

### Copy

Update:

- headline and hero copy
- service and package descriptions
- about text
- process steps
- portfolio highlight labels
- testimonial text
- FAQ answers
- contact details

### Visuals

Swap the placeholder panels for:

- real wedding photography
- venue imagery
- floral or styling details
- inline `<img>` elements
- embedded galleries or featured weddings

### Colours and type

Edit `src/assets/css/base/variables.css` to change:

- colours
- spacing feel
- border radii
- max container width

Typography rules live in `src/assets/css/base/typography.css`.

## Contact form

The form is static by default. To make it live, connect it to your preferred service or backend. A good first step is updating the service dropdown and enquiry field labels to match your offer.

## Deployment

Upload the full project to any static host such as Netlify, Vercel, or GitHub Pages.

## Theme selector

This template includes a built-in theme selector panel with five colour schemes: Champagne, Soft Blush, Sage Garden, Black Tie, and Pearl.

To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
