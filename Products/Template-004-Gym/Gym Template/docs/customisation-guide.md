# Customisation Guide

## 1. Brand basics

Open `index.html` and update:

- brand name
- headings and paragraph copy
- contact information
- CTA labels

## 2. Colours

Open `assets/css/style.css` and edit the variables near the top:

- `--brand`
- `--brand-2`
- `--warm`
- `--bg`
- `--surface`

## 3. Placeholder visuals

The template uses placeholder panels so it is easy to demo and sell as a product.

To replace them with real images, you can:

- insert `<img>` tags inside the existing visual blocks
- replace panel backgrounds with image backgrounds in CSS
- swap the panel markup for picture elements or cards

## 4. Navigation links

All navigation items point to section IDs on the page. If you rename a section ID, update the related navigation and footer links too.

## 5. Contact form

The form is static by default. The current JavaScript only shows a demo alert.

To make it live, connect it to:

- Formspree
- Netlify Forms
- your own backend endpoint
- any preferred email or CRM workflow

## 6. Suggested image use

This template works well with:

- gym interiors
- coaching portraits
- members training
- class shots
- equipment close-ups

## 7. Reusable section ideas

This build uses the latest supplied component and section system. You can easily duplicate or remove sections depending on the niche variation you want, such as:

- boutique gym
- PT studio
- strength and conditioning
- cross-training space
- wellness or recovery hybrid
