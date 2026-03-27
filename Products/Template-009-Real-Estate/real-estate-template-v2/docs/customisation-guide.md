# Customisation Guide

## 1. Update branding
Open `src/index.html` and change:
- `Harbour & Key`
- the `HK` brand mark
- email, phone, and service area details

## 2. Change the colour palette
Open `src/css/base/variables.css`.
Recommended variables to edit first:
- `--primary`
- `--primary-strong`
- `--accent`
- `--bg`
- `--surface`

## 3. Replace placeholder content
Main editable areas in `src/index.html`:
- hero headline and supporting copy
- featured listings cards
- about section
- testimonials
- FAQ
- contact details

## 4. Add images
This version uses neutral visual panels so the template stays product-ready.
To add your own media:
1. Place image files inside `src/images/`
2. Replace placeholder panels with `<img>` elements or background images
3. Keep alt text descriptive for accessibility

## 5. Connect the contact form
The form is static by default.
Common options:
- Netlify Forms
- Formspree
- Basin
- a custom backend endpoint

## 6. Mobile navigation
The mobile menu uses `src/js/main.js`.
If you remove the toggle button or nav structure, update the script accordingly.

## 7. Reusing sections elsewhere
This template was refracted using the latest shared components and sections. The listing cards, CTA banner, testimonials, FAQ, and contact split can be lifted into other template niches with only copy and colour changes.
