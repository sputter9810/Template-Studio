# Customisation Guide — Harbour & Key

## 1. Update branding

In `src/index.html`:

- change the brand name `Harbour & Key`
- update the initials inside `.brand-mark`
- replace email, phone, and location details

## 2. Update colours

In `src/css/base/variables.css`:

- `--primary` controls the main brand colour
- `--primary-strong` controls darker button and accent states
- `--accent` and `--accent-soft` control highlight areas
- `--bg`, `--surface`, and `--border` shape the overall look

## 3. Replace placeholder visuals

The template uses placeholder panels instead of images.

Key areas:

- hero panel
- about panel
- gallery cards

You can replace these with:

- `<img>` elements
- background images in CSS
- embedded maps or branded media blocks

## 4. Adapt the listing cards

The three cards in the featured listings section can be reused for:

- featured properties
- suburbs served
- agent services
- recent sales
- buyer packages

## 5. Edit the CTA copy

The content style is meant to be:

- clear
- friendly
- trustworthy
- short and action-focused

Keep buttons and headings direct. Good examples:

- Book an appraisal
- View featured homes
- Send enquiry

## 6. Connect the form

The contact form is static by default.

Common options:

- Netlify Forms
- Formspree
- Basin
- a custom backend endpoint

If using a static form service, add the relevant attributes to the `<form>` element in `src/index.html`.

## 7. Adjust layout sections

You can remove sections that are not needed.

Safe optional removals:

- gallery
- FAQ
- process
- trust strip

After removing a section, also remove its matching navigation link if relevant.

## 8. Mobile menu

The mobile menu is handled by `src/js/main.js`.

If you rename `.nav-toggle` or `.nav-links`, update the selectors in the JS file as well.

## 9. Deployment

For most static hosts, publish from the `src` directory.

Before launch, check:

- all anchors scroll correctly
- all placeholder text is replaced
- form details are connected
- mobile layout feels right
