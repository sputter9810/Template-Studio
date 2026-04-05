# Customisation Guide

## Start files

- Edit page content in `src/index.html`
- Adjust styling through `src/assets/css/style.css` and the imported partials
- Update mobile menu behaviour in `src/assets/js/main.js`

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

### Copy

Update:

- headline and hero copy
- service descriptions
- about text
- testimonial text
- FAQ answers
- contact details

### Visuals

Swap the placeholder panels for:

- real photography
- background images
- inline `<img>` elements
- embedded galleries

### Colours and type

Edit `src/assets/css/base/variables.css` to change:

- colours
- spacing feel
- border radii
- max container width

Typography rules live in `src/assets/css/base/typography.css`.

## Contact form

The form is static by default. To make it live, connect it to your preferred service or backend.

## Deployment

Upload the full project to any static host such as Netlify, Vercel, or GitHub Pages.
