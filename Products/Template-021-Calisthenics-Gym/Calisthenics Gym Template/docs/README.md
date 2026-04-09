# Groundline - Static Calisthenics Gym Website Template

Groundline is a high-contrast one-page static website template made for calisthenics gyms, bodyweight training studios, and movement-first coaching spaces that want more trial bookings and membership enquiries.

## What this template is for
This template is designed for businesses that need to:
- promote a trial session or intro consult clearly
- explain beginner-to-advanced training pathways fast
- build trust with coach profiles, member outcomes, and practical pricing
- show class structure without making the site feel crowded
- launch a polished static site without a heavy setup

## Included pages and content
This product includes one homepage with the following sections:
- sticky navigation
- hero section with CTA buttons and stats
- trust strip
- programs section
- about / trust section
- weekly schedule section
- results section
- coaches section
- member stories section
- pricing section
- FAQ
- CTA banner
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
- `src/index.html` - the main website file
- `src/assets/css/style.css` - the CSS entry point that imports all modular CSS files
- `src/assets/css/base/` - global resets, variables, typography, and utility helpers
- `src/assets/css/layout/` - shared layout rules such as container sizing
- `src/assets/css/components/` - reusable UI pieces like buttons, cards, navigation, forms, and proof grids
- `src/assets/css/sections/` - section-specific styles for hero, programs, schedule, results, coaches, pricing, FAQ, and contact
- `src/assets/js/main.js` - mobile navigation and theme selector behavior
- `src/assets/images/` - place replacement images here
- `docs/customisation-guide.md` - editing guidance for developers or implementers

## Editing level
This is a static HTML/CSS/JS template. It is best suited to buyers who are comfortable editing text, swapping images, and making light HTML/CSS changes, or who are working with a developer.

## Form behavior
The contact form is included as a styled static form. It does not submit anywhere until it is connected to a form service, booking tool, or backend.

## Hosting
You can deploy this template to most static hosting providers, including Netlify, Vercel, GitHub Pages, and similar platforms.

## Theme selector
This template includes a built-in theme selector panel with five color schemes: Graphite Lime, Urban Teal, Steel Mint, Night Heat, and Chalk Studio.

To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
