# Customisation Guide

## 1. Update the brand

Edit the following in `index.html`:

- `Lens & Light`
- the `L&L` brand mark
- meta description and page title

## 2. Replace placeholder content

Swap the sample copy in each section with your own:

- hero headline and supporting text
- services
- about section
- testimonials
- contact details

## 3. Replace visual placeholders

The hero and gallery use styled placeholder panels rather than actual images.

You can replace these with:

- background images via CSS
- `<img>` elements inside the visual containers
- cards that link through to a full portfolio

## 4. Update colours

Open `assets/css/style.css` and edit the variables inside `:root`.

Suggested values to customise first:

- `--bg`
- `--surface`
- `--text`
- `--primary`
- `--accent`
- `--border`

## 5. Update contact form behaviour

The form is currently static.

To make it functional, connect it to:

- Formspree
- Netlify Forms
- Basin
- a custom backend

## 6. Mobile navigation

The mobile menu toggle is handled in `assets/js/main.js`.

If you do not need the mobile menu behaviour, you can remove the script reference and simplify the header.

## 7. Deployment

Upload the full folder to any static host.

Required files:

- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`

The `assets/images/` folder is included for future image replacement.
