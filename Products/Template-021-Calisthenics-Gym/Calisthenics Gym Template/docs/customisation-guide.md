# Customisation Guide

## Quick Start
Open `src/index.html` in your code editor and update the visible content to match your calisthenics gym, movement studio, or bodyweight coaching business.

## What to edit first
- Brand name in the header and footer
- Hero headline, supporting text, and CTA labels
- Program cards under the Programs section
- Weekly schedule table and coach bios
- Results highlights, testimonials, and pricing cards
- Contact details and trial form copy
- Placeholder content in the visual panels

## CSS structure
The CSS is broken into modular files so changes are easier to manage.

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
- Results grid
- Footer

### Sections
- Hero
- Services
- About
- Schedule
- Results
- Team
- Pricing
- FAQ
- CTA
- Contact

## Colors
Change the color palette in `src/assets/css/base/variables.css`.

## Fonts
The template uses Barlow Condensed for headings and Inter for body text. Change the font import in `src/index.html` and update `base/typography.css` if needed.

## Images
This template uses stylized placeholder panels instead of real images. You can replace these panels with `<img>` elements, training photography, coach portraits, or background images when adapting the template.

## Schedule, proof, and pricing content
The timetable, results copy, testimonials, and pricing cards all live directly in `src/index.html`, making it easy to tailor the sales flow to your studio or offer mix.

## Forms
The contact form is static by default. Connect it to your preferred form service, booking software, or backend before going live.

## Theme selector
This template includes a built-in theme selector panel with five color schemes: Graphite Lime, Urban Teal, Steel Mint, Night Heat, and Chalk Studio.

To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
