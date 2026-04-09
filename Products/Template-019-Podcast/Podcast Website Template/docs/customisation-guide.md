# Customisation Guide

## Quick Start
Open `src/index.html` in your code editor and update the visible content to match your podcast, creator brand, or media business.

## What to edit first
- Brand name in the header and footer
- Hero heading, supporting text, and CTA labels
- Featured episode cards
- Release schedule table and host bios
- Contact details and enquiry form copy
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
- Footer

### Sections
- Hero
- Episodes
- About
- Schedule
- Team
- CTA
- Contact

## Colors
Change the color palette in `src/assets/css/base/variables.css`.

## Fonts
The template uses Fraunces for headings and Manrope for body text. Change the font import in `src/index.html` and update `base/typography.css` if needed.

## Images
This template uses stylized placeholder panels instead of real images. You can replace these panels with `<img>` elements, episode artwork, or background images when adapting the template.

## Episodes, schedule, and host content
The featured episode cards and publishing table live in `src/index.html`, and each host or team card can be edited directly in the Host section.

## Forms
The contact form is static by default. Connect it to your preferred form service, mailing platform, or backend before going live.

## Theme selector
This template includes a built-in theme selector panel with five color schemes: Night Studio, Deep Current, Coral Edit, Signal Gold, and Paper Light.

To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
