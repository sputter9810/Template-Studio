# Website Production System

## Purpose
This production system is used to create sellable static website templates for small-business and niche operators. Each template should be reusable, easy to customise, visually relevant to its target market, and packaged clearly for storefront sale.

## Business Model / Product Type
Prebuilt HTML/CSS/JS website templates sold as downloadable products for niche businesses.

## Standard Production Stages
1. Define niche and product positioning
2. Fill out the project brief
3. Set niche-specific design and content direction
4. Apply template standards and folder structure
5. Build with reusable sections/components first
6. Style for the niche without breaking reuse
7. Make responsive adjustments and mobile polish
8. Run QA and cleanup
9. Write buyer-facing documentation
10. Package for sale and delivery

## Folder Structure Rules
Use the standard product structure below and keep files predictable and buyer-friendly.

```text
src/
  index.html
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
  README.md
  customisation-guide.md
```

## Coding Standards
- Use semantic HTML and simple class naming
- Prefer reusable classes over niche-specific one-offs
- Keep JavaScript light and focused on navigation or small UI interactions
- Maintain readable formatting and consistent spacing

## Design Standards
- Prioritise clear conversion flow over visual complexity
- Design for fast scanning on mobile first
- Reuse the same structural system across variants where possible
- Make the niche feel specific through copy, imagery, colour, and section emphasis

## Output Requirements
- Must be static and easy to edit
- Must include all core sections from the template standard
- Must be responsive across mobile, tablet, and desktop
- Must be packaged cleanly for upload to Gumroad or similar storefronts

## Agent / AI Behaviour Rules
- Reuse before creating anything new
- Stay consistent with the project brief and template standards
- Report assumptions clearly when niche details are flexible
- Avoid unnecessary complexity, dependencies, or bespoke systems

## Packaging Rules
Each final template should include source files, documentation, placeholders, and any storefront-ready preview assets or notes needed for sale.

## Notes
This system is designed for scale: one strong base template can support multiple closely related niche variants with minimal rework.

## Scaling Rules
- Each base template must support 3+ niche variants
- Variants should reuse 70–80% of structure
- Only content, imagery, and section emphasis should change

## Output Targets
- Minimum 3 templates per week
- Reuse before creating new components
