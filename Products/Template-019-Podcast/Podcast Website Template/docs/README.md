# Signal Room - Static Podcast Website Template

Signal Room is a modern editorial one-page static website template made for podcast hosts, creator-led media brands, and independent shows that want more listeners, subscribers, and partnership enquiries.

## What this template is for
This template is designed for businesses that need to:
- position the show clearly above the fold
- feature standout episodes in a scannable format
- build trust with host credibility and listener reviews
- guide visitors toward listening, subscribing, or reaching out
- launch a polished static site without a complicated setup

## Included pages and content
This product includes one homepage with the following sections:
- sticky navigation
- hero section with CTA buttons and stats
- trust strip
- about the show section
- featured episodes section
- release calendar section
- host section
- listener reviews
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
- `src/assets/css/components/` - reusable UI pieces like buttons, cards, navigation, and forms
- `src/assets/css/sections/` - section-specific styles for hero, episodes, about, schedule, host, CTA, and contact
- `src/assets/js/main.js` - mobile navigation and theme selector behavior
- `src/assets/images/` - place replacement images here
- `docs/customisation-guide.md` - editing guidance for developers or implementers

## Editing level
This is a static HTML/CSS/JS template. It is best suited to buyers who are comfortable editing text, swapping images, and making light HTML/CSS changes, or who are working with a developer.

## Form behavior
The contact form is included as a styled static form. It does not submit anywhere until it is connected to a form service, mailing list, or backend.

## Hosting
You can deploy this template to most static hosting providers, including Netlify, Vercel, GitHub Pages, and similar platforms.

## Theme selector
This template includes a built-in theme selector panel with five color schemes: Night Studio, Deep Current, Coral Edit, Signal Gold, and Paper Light.

To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
