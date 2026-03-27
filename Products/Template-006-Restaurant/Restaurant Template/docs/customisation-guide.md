# Customisation Guide

## Brand updates
- Change the site title and meta description in `src/index.html`.
- Update the brand mark and brand name in the header and footer.

## Colour system
Edit `src/css/base/variables.css` to change:
- `--primary` for the main brand colour
- `--primary-strong` for button hover states
- `--bg` and `--surface` for page background tones
- `--border` for card and section outlines

## Typography
The template uses Inter from Google Fonts. Replace the font import in `src/index.html` and update `src/css/base/typography.css` if you want a different font pairing.

## Content areas to replace
- Hero heading and supporting text
- Trust strip items
- Menu cards
- About section copy
- Gallery placeholder labels
- Testimonials
- Contact details
- Footer details

## Images
The template currently uses neutral placeholder panels. Replace them by:
1. Adding your images to `src/images/`
2. Replacing placeholder divs with `img` elements
3. Keeping the same wrapper classes so layout styling stays intact

## Form integration
The contact form is presentational only. To make it live, connect it to:
- Netlify Forms
- Formspree
- Basin
- A custom backend endpoint

## Extending the template
You can add more sections by following the existing CSS architecture:
- base/
- layout/
- components/
- sections/
