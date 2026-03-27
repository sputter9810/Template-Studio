# Customisation Guide

## Overview

This template has been refactored into a modular structure so it is easier to maintain, reskin, and reuse for future service niches.

## Update branding

In `src/index.html`, update:

- brand name: `Momentum Coach`
- brand initials inside the logo mark: `MC`
- contact email, phone, and location
- CTA labels such as `Book a free consult` and `Enquire now`

## Update colours

The blue athletics palette is controlled in:

`src/assets/css/base/variables.css`

Key variables:

- `--primary`
- `--primary-dark`
- `--primary-soft`
- `--secondary`
- `--accent`
- `--bg`
- `--surface`
- `--border`

## CSS structure

The main stylesheet is `src/assets/css/style.css`, which imports the modular files below:

- `base/` for resets, variables, typography, and utility rules
- `layout/` for container and shared layout foundations
- `components/` for reusable UI patterns such as buttons, cards, navigation, and forms
- `sections/` for section-specific styling like hero, about, CTA, and contact

## Replace visual placeholders

Add real images to:

`src/assets/images/`

Then replace the placeholder visual panels in the hero and about sections with `<img>` elements or background-image styles.

## Connect the form

The form is static by default. Connect it to services like:

- Formspree
- Netlify Forms
- Basin
- a custom backend
- a CRM or booking workflow

## Sections included

- Hero
- Trust Strip
- Services
- About
- Process
- Testimonials
- FAQ
- CTA
- Contact
- Footer

You can remove, duplicate, or reorder these sections as needed.
