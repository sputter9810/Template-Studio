# Customisation Guide

## 1. Update branding
In `index.html`:
- replace **Northstar Agency** with your brand name
- replace the `NS` mark in the logo block if needed

## 2. Update colours
In `assets/css/style.css`, edit the variables at the top of the file.

## 3. Update content
Recommended order:
1. hero headline and supporting copy
2. services cards
3. about section
4. portfolio / gallery placeholders
5. testimonials and FAQ
6. contact details and CTA labels

## 4. Replace placeholder visuals
This template uses styled placeholder panels instead of real images.
You can:
- replace the gallery panels with screenshots or case study covers
- replace the hero mockup with a branded graphic
- add images into `assets/images/` and update the HTML

## 5. Connect the form
The contact form is currently static.
To make it live, connect it to:
- Netlify Forms
- Formspree
- Basin
- a custom backend endpoint

## 6. Adjust layout width
Change the `--container` variable in `style.css`.

## 7. Mobile navigation
The mobile menu is handled by `assets/js/main.js`.
Keep this file linked if you want the mobile nav toggle to work.

## 8. Deployment
Upload the full folder contents to your static host.
The homepage is `index.html`.
