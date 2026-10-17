# Manish Studio — Freelance Web Agency Website

A responsive static website built with HTML, CSS, and vanilla JavaScript.

## Files
- `index.html` — page content and contact form
- `style.css` — responsive visual design
- `script.js` — mobile menu, service selection, and WhatsApp enquiry flow

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Open `index.html` in your browser, or use the VS Code Live Server extension.

## Important: configure the contact form
Before publishing, open `script.js` and replace:

`const WHATSAPP_NUMBER = "91XXXXXXXXXX";`

with the business owner's WhatsApp number using country code and digits only. Example format: `919876543210`.

Until this is configured, the form validates the fields and shows a prepared message on the page rather than opening WhatsApp.

## Before publishing
- Confirm that the name "Manish Studio" is the brand you want.
- Add your real email/WhatsApp and links if you want them displayed.
- Replace demo concepts with real work when you have permission to show it.
- The sample projects are clearly labelled as concepts, not real client projects.
- Add real business photos and copy where appropriate.
- Test the form and layout on mobile.

## Deploy
You can publish this static site on GitHub Pages, Netlify, or Vercel. Upload the three website files (or connect the folder/repository) and use `index.html` as the entry page. The website has no build step or framework dependency.
