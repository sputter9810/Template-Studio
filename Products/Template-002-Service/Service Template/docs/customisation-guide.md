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
        cta.css
        faq.css
        gallery.css
        hero.css
        process.css
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
- services
- testimonials
- FAQ content
- contact details

### `src/assets/css/base/variables.css`
Edit this file for:
- colours
- radius values
- container width
- global shadow and border tokens

### `src/assets/images/`
Replace the placeholder SVGs with your own:
- hero image
- team/about image
- gallery images

Keep the same filenames if you do not want to change image paths in the HTML.

## Connecting the form

The contact form is currently static. To make it live, connect it to a service such as:
- Formspree
- Netlify Forms
- Basin
- your own backend

## Recommended editing order

1. Update the brand name and contact details
2. Change the colour variables
3. Replace the hero and gallery imagery
4. Rewrite the services and about sections for the chosen niche
5. Connect the form if needed
6. Remove any optional sections you do not want


## Theme selector
This template now includes a built-in theme selector panel with five colour schemes: Navy, Safety Orange, Steel Grey, Forest, Black / Gold.

To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
