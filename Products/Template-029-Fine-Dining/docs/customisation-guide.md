# Customisation Guide

## Quick Start
Edit `src/index.html` to update:
- restaurant name and brand initial
- hero headline, supporting text, and primary reservation CTA
- signature experience cards and reservation offer cards
- chef story, experience highlight copy, and testimonials
- service hours, address, and contact details
- enquiry options for dining room reservations, chef's table seating, private dining, or guest questions

## Design Tokens
Update colours in `src/assets/css/base/variables.css`.

Update typography in `src/assets/css/base/typography.css`.

## Images
Replace the placeholder visual panels in `src/index.html` with real fine dining photography such as plated dishes, candlelit tables, chef portraiture, kitchen pass moments, or editorial interior imagery that matches the venue mood.

## Form
The enquiry form is static by default. Connect it to your preferred inbox, CRM, booking platform, backend, or form service before going live.

## Theme Selector
To change the default theme, update the `data-theme` value on the `<body>` tag and the `defaultTheme` value in `src/assets/js/main.js`.
