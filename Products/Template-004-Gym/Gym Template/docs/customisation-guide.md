# Customisation Guide

## Quick Start
Open `src/index.html` in your code editor and update the visible content to match your gym, fitness studio, or coaching brand.

## What to edit first
- Brand name in the header and footer
- Hero heading, subheading, and calls to action
- Program cards under the Programs section
- Contact details and enquiry form copy
- Placeholder content in the gallery and visual panels

## CSS structure
The CSS has been broken into modular files so changes are easier to manage.

### Main entry file
- `src/assets/css/style.css`

### Base styles
- `base/reset.css`
- `base/variables.css`
- `base/typography.css`
- `base/utilities.css`

### Layout
- `layout/container.css`

### Components
- Brand
- Navigation
- Buttons
- Cards
- Trust strip
- Feature list
- Contact form
- Contact details
- Visual panel
- Stats grid
- Badge pill
- Dashboard mockup
- Footer

### Sections
- Hero
- Services
- About
- Gallery
- Process
- FAQ
- CTA
- Contact

## Colours
Change the colour palette in `src/assets/css/base/variables.css`.

## Fonts
The template uses Inter from Google Fonts. Change the font import in `src/index.html` and update `base/typography.css` if needed.

## Images
This template currently uses stylised placeholder panels instead of real images. You can replace these panels with `<img>` elements or background images when adapting the template.

## Forms
The contact form is static by default. Connect it to your preferred form service or backend before going live.


## Theme selector
This template now includes a built-in theme selector panel with five colour schemes: Graphite, Neon Lime, Crimson, Deep Blue, White / Black.

To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
