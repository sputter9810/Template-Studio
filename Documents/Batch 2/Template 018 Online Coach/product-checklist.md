# Product Checklist

This checklist defines the exact process for producing a complete, high-quality website template using the component library and template standard.

---

# 🧱 Phase 1 — Setup

## Project Setup

* [ ] Copy base folder structure
* [ ] Rename project appropriately
* [ ] Link CSS architecture:

  * base/
  * layout/
  * components/
  * sections/
* [ ] Link `main.js`
* [ ] Verify CSS loads correctly

## Design Setup

* [ ] Define colour variables (`variables.css`)
* [ ] Define typography scale (`typography.css`)
* [ ] Set container widths (`container.css`)
* [ ] Confirm spacing system consistency

---

# 🧩 Phase 2 — Structure (Library-Driven)

## Core Sections (Required)

* [ ] Navigation
* [ ] Hero
* [ ] Core Offer (services/menu/programs)
* [ ] About / Trust
* [ ] Testimonials
* [ ] CTA
* [ ] Contact
* [ ] Footer

## Optional Sections (If Needed)

* [ ] Trust Strip
* [ ] Process
* [ ] FAQ
* [ ] Gallery
* [ ] Pricing
* [ ] Team
* [ ] Portfolio / Projects

---

# 🧱 Phase 3 — Build (Components First)

## Component Usage

* [ ] Navigation uses `navigation` component
* [ ] Hero uses `hero-block`
* [ ] Buttons use shared `.btn` system
* [ ] Cards use `.card` + variant classes
* [ ] Contact uses `contact-form`
* [ ] Footer uses `footer` component

## Variant Application

* [ ] Apply correct card variants:

  * service / menu / testimonial / process
* [ ] Apply hero variant if needed:

  * `.hero-with-stats`
* [ ] Apply section variants where relevant:

  * `.services-grid` / `.menu-grid`
  * `.contact-split`

---

# 🎨 Phase 4 — Styling

## Section Styling

* [ ] Hero styled and balanced visually
* [ ] Card grids consistent
* [ ] Section spacing consistent
* [ ] CTA visually distinct
* [ ] Contact section clear and usable

## Consistency Check

* [ ] Colours applied consistently
* [ ] Typography consistent across sections
* [ ] Border radius consistent
* [ ] Shadows (if used) consistent

---

# 📱 Phase 5 — Responsive

## Mobile (≤ 760px)

* [ ] Navigation collapses correctly
* [ ] Sections stack cleanly
* [ ] Card grids reduce appropriately
* [ ] Buttons remain usable
* [ ] No overflow issues

## Tablet (760px–1024px)

* [ ] Layout transitions smoothly
* [ ] Grid scaling feels natural

## Desktop (≥ 1024px)

* [ ] Layout spacing balanced
* [ ] Max-widths respected

---

# ⚙️ Phase 6 — Functionality

## Navigation

* [ ] Mobile toggle works
* [ ] Links scroll correctly

## Forms

* [ ] Inputs styled and usable
* [ ] Labels connected correctly
* [ ] Required fields enforced

## General

* [ ] No broken links
* [ ] No console errors
* [ ] JS file loads correctly

---

# 🧹 Phase 7 — Cleanup

* [ ] Remove unused CSS
* [ ] Remove unused HTML elements
* [ ] Remove duplicate styles
* [ ] Check class naming consistency
* [ ] Ensure no inline styles (unless intentional)

---

# 📦 Phase 8 — Product Packaging

## Template Files

* [ ] Clean folder structure
* [ ] Only necessary files included
* [ ] Assets organised (images/css/js)

## README (Buyer-Facing)

* [ ] Template name
* [ ] Who it’s for
* [ ] Sections included
* [ ] Customisation instructions
* [ ] How to deploy

## Placeholder Content

* [ ] Images are placeholders or neutral
* [ ] Text is generic but realistic
* [ ] No personal/dev data left

---

# ✅ Phase 9 — Final QA

* [ ] Matches template-standard.md
* [ ] Visual polish complete
* [ ] Responsive tested
* [ ] Components used correctly
* [ ] Variants used correctly

---

# 🚀 Definition of Done

A template is complete when:

* it follows the template standard
* it uses the component library correctly
* it is fully responsive
* it is clean and reusable
* it is ready to be sold or deployed without changes

---

# 🧠 Notes

* Do not create new components unless repeated across templates
* Do not break naming conventions
* Do not overcomplicate sections
* Prioritise clarity and reuse over uniqueness

---

## Sellability Check
- [ ] Clear target niche
- [ ] Clear use case
- [ ] Looks relevant to buyer
- [ ] CTA is obvious
- [ ] No “generic template” feel