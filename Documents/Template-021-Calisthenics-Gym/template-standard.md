# Template Standards

## Required Sections
Every template must include:

- Navigation
- Hero
- Core Offer (services/menu/programs)
- About / Trust
- Testimonials or equivalent proof
- CTA
- Contact
- Footer

## Optional Sections
Optional sections:

- Process
- FAQ
- Gallery
- Pricing
- Team
- Portfolio
- Trust Strip
- Schedule
- Amenities
- Hours & Location
- Signature Offers

## Naming Rules
Rules:

- Base classes are generic: `.card`, `.section`, `.btn`
- Variants are modifiers: `.service-card`, `.menu-card`, `.hero-with-stats`
- No niche-specific base classes

## Folder Structure

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
      sections/
    js/
      main.js
    images/
docs/
  customisation-guide.md
  README.md

## Done
A template is complete when:

- all sections are responsive
- all CTAs are wired with useful anchors or placeholder destinations
- no unused CSS exists
- a consistent spacing system is used
- documentation is written
