# Customisation Guide

## Project structure

```text
src/
  index.html
  assets/
    css/
      style.css
      base/
        reset.css
        typography.css
        utilities.css
        variables.css
      layout/
        container.css
      components/
        brand.css
        buttons.css
        cards.css
        contact-form.css
        feature-list.css
        footer.css
        hero-block.css
        navigation.css
        section-wrapper.css
        trust-strip.css
      sections/
        about.css
        contact.css
        coverage.css
        cta.css
        faq.css
        gallery.css
        hero.css
        services.css
        testimonials.css
    js/
      main.js
    images/
docs/
  customisation-guide.md
README.md
```

## How the CSS works

`style.css` is the entry file. It imports the base, layout, component, and section files in order.

- `base/` contains resets, variables, typography, and simple utilities
- `layout/` contains structural layout helpers
- `components/` contains reusable UI pieces
- `sections/` contains page-section specific styling

## Main files to edit

### `src/index.html`
Edit this file for:
- business name
- headings and paragraph copy
- plumbing services
- service areas
- testimonials
- FAQ content
- contact details
- click-to-call links

### `src/assets/css/base/variables.css`
Edit this file for:
- colours
- accent colour
- radius values
- container width
- global shadow and border tokens

### `src/assets/images/`
Replace the placeholder assets with your own:
- hero image or tradie photo
- team or about image
- supporting gallery or job photos

Keep the same filenames if you do not want to change image paths in the HTML.

## Connecting the form

The contact form is currently static. To make it live, connect it to a service such as:
- Formspree
- Netlify Forms
- Basin
- your own backend

## Recommended editing order

1. Update the brand name and contact details
2. Update the service area list and emergency banner copy
3. Rewrite the service cards for the plumbing business
4. Change the colour variables or default theme
5. Replace placeholder visuals with real plumbing photos
6. Connect the form if needed

## Theme selector

This template includes a built-in theme selector panel with five colour schemes: Harbor Blue, Copper Line, Slate Flow, Fresh Aqua, and Midnight Brass.

To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
