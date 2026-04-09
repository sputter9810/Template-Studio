# Technical Standards

## Approved Stack
HTML, CSS, and vanilla JavaScript.

## Disallowed Tools / Dependencies
- Heavy frameworks unless explicitly required
- Build steps that buyers cannot easily understand

## File Naming Rules
Use lowercase kebab-case for folders, CSS files, JS files, and asset names.

## Folder Naming Rules
Keep folders predictable and aligned to the template standard. Separate base, layout, components, and sections when CSS grows.

## HTML Standards
- Use semantic landmarks and accessible heading order
- Ensure forms use labels and clear field grouping
- Keep anchor-based one-page navigation simple and reliable

## CSS Standards
- Use shared variables and utility patterns where appropriate
- Keep selector specificity low
- Reuse base classes before creating modifiers
- Use mobile-first responsive rules

## JavaScript Standards
- JS is only for lightweight interactions such as nav toggles, tabs, FAQs, or smooth scrolling helpers
- Avoid complicated state management
- Keep code readable and isolated in main.js
- Do not rely on third-party libraries for core behaviour

## Asset Rules
Use local placeholder assets with clean filenames. Keep image count reasonable and optimise for storefront-ready performance.

## Responsiveness Requirements
- Must work cleanly on mobile, tablet, and desktop
- Navigation must remain usable at all sizes
- No horizontal overflow or clipped content

## Accessibility Requirements
- Maintain readable contrast ratios
- Provide visible focus states
- Ensure buttons, links, and forms are keyboard-usable

## Performance Expectations
- Fast first load on standard connections
- Minimal JavaScript payload
- Avoid bloated imagery and unnecessary effects

## SEO / Metadata Rules
- Include a clear page title and meta description
- Use meaningful heading structure
- Make primary offer and niche obvious in hero content

## Documentation Requirements
- Include a buyer-facing README
- Include a simple customisation guide
- Include a license file if the storefront package requires it

## Notes
Templates should be easy for non-technical buyers to customise with straightforward text and image swaps.
