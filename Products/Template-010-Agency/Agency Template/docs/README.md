# Northstar Agency Template

Northstar Agency is a modern one-page static website template made for agencies, studios, consultants, and service businesses that want a clean, credible online presence.

## What this template is for
This template is designed for businesses that need to:
- present services clearly
- show trust and credibility quickly
- guide visitors toward an enquiry or discovery call
- launch a polished static site without a complex setup

## Included pages and content
This product includes one homepage with the following sections:
- sticky navigation
- hero section with call-to-action buttons and stats
- trust strip
- services section
- about / trust section
- process section
- portfolio / work gallery
- testimonials
- FAQ
- call-to-action banner
- contact section with form
- footer

## What is included in the package
```text
src/
  index.html
  assets/
    css/
      style.css
      base/
      layout/
      components/
      sections/
    js/
      main.js
    images/
docs/
  customisation-guide.md
  README.md
```

## File overview
- `src/index.html` — the main website file
- `src/assets/css/style.css` — the CSS entry point that imports all modular CSS files
- `src/assets/css/base/` — global resets, variables, typography, and utility helpers
- `src/assets/css/layout/` — shared layout rules such as container sizing
- `src/assets/css/components/` — reusable UI pieces like buttons, cards, navigation, and forms
- `src/assets/css/sections/` — section-specific styles for hero, services, about, FAQ, contact, and more
- `src/assets/js/main.js` — mobile navigation behaviour
- `src/assets/images/` — place your replacement images here
- `docs/customisation-guide.md` — editing guidance for developers or implementers

## Editing level
This is a static HTML/CSS/JS template. It is best suited to buyers who are comfortable editing text, swapping images, and making light HTML/CSS changes, or who are working with a developer.

## Form behaviour
The contact form is included as a styled static form. It does not submit anywhere until it is connected to a form service or backend.

## Hosting
You can deploy this template to most static hosting providers, including Netlify, Vercel, GitHub Pages, and similar platforms.


## Theme selector
This template now includes a built-in theme selector panel with five colour schemes: Indigo, Cyan, Mono Black / White, Orange / Graphite, Violet.

To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
