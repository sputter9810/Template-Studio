# Customisation Guide

## 1. Brand name
Update the brand text and initials in `index.html`:

- `Velora Salon`
- `VS`

## 2. Colours
The colour palette is defined at the top of `assets/css/style.css` under `:root`.

Main variables to edit:

- `--accent`
- `--accent-strong`
- `--accent-soft`
- `--bg`
- `--surface`
- `--text`

## 3. Copy
All visible website text lives in `index.html`.

Good places to tailor first:

- Hero heading and supporting paragraph
- Service names and pricing
- About copy
- Testimonial names/quotes
- FAQ answers
- Contact details

## 4. Images
This version uses placeholder panels rather than real photos.

To replace them:

- swap placeholder blocks for `<img>` elements
- or apply background images through CSS
- keep image alt text descriptive when using real `<img>` tags

## 5. Form handling
The contact form is static by default.

For live submissions, connect it to:

- Netlify Forms
- Formspree
- Basin
- your own backend endpoint

## 6. Navigation
The mobile menu behaviour is handled by `assets/js/main.js`.

## 7. Deployment
This template can be hosted on:

- Netlify
- Vercel
- GitHub Pages
- any standard static host
