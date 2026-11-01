# SMC Commercial Contact (one-page)

A single-page contact site for SMC Commercial Properties: the three centers with
addresses, plus two request forms. It uses the SAMI brand system from the commercial
property website (navy `#051D35`, gold `#E69F49`, body text `#333333`, Playfair Display
and Geist).

## What is on the page

1. **Our properties.** Name, city and street address for McHenry Village, Northgate Plaza
   and Lakeside Shopping Center. No property phone numbers. The footer lists the SMC
   Commercial Properties line, (310) 410-2300.
2. **Tenants & Leasing Requests.** Form with an "I am a" choice (current tenant or leasing inquiry),
   Property, Tenant name, Best email or phone, and Request / description. Sent as Netlify Form
   `leasing-contact`. The email subject is "Tenant Request – [property]" or "Leasing Inquiry – [property]".
3. **Vendor Requests.** Form with Property, Vendor / company name, Best email or
   phone, and Request / description. Sent as Netlify Form `vendor-contact`. The email subject
   is "Vendor Request – [property]".

The "Contact Us" button in the header scrolls to the whole contact section.

Both forms are meant to route to **CommercialOps@standardmanagement.com**.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole page (properties, both forms, footer) |
| `assets/site.css` | Brand styles, including the self-hosted font declarations |
| `assets/site.js` | Sends the forms in the background, builds the email subject, and redirects to the thank-you page |
| `assets/favicon.svg` | Favicon, the same mark the commercial site generates |
| `thank-you.html` | Branded page visitors see after a form is submitted |
| `package.json` | Font packages: `@fontsource-variable/geist` and `@fontsource-variable/playfair-display`, both 5.3.0 |
| `scripts/copy-fonts.js` | Copies the font files into `assets/fonts/` during the build |
| `netlify.toml` | Netlify settings: install packages, copy fonts, publish the root, security headers |

`assets/fonts/` and `node_modules/` are generated at build time, so they are not committed.

## Before this site goes live

Form handling was approved and enabled on Oct 30, 2026. Ted made the decisions below on Oct 31, 2026.

- **Form handling (approved).** Netlify Forms stores tenant and vendor submissions on
  Netlify. Ted approved this on Oct 30, 2026. Email notifications to CommercialOps@ are set
  under the project's Forms settings. If form detection is switched off, visitors see the
  email fallback message instead. After a successful submission, visitors land on the
  branded `thank-you.html` page. Netlify removes `data-netlify` and `netlify-honeypot` from the
  served HTML, so the submit script finds forms by `data-fallback` instead. The Netlify honeypot
  spam check is not active until that is fixed.
- **Addresses.**
  - McHenry Village: `1700 McHenry Avenue, Modesto, CA 95350`. Confirmed by Ted on Oct 31, 2026. The live
    commercial site still shows the intersection, McHenry Ave & Roseburg Ave.
  - Northgate Plaza: `2523–2749 N. Carson Street, Carson City, NV 89706`. Still to confirm the
    street range.
  - Lakeside Shopping Center: `257–353 N. Pass Avenue, Burbank, CA 91505`. Confirmed by Ted.
    The live commercial site still shows 91502.
- **Phone numbers.** No property phone numbers. The site uses the SMC Commercial Properties
  line, (310) 410-2300.
- **Contact Us button.** Scrolls to the whole contact section.
- **Fonts (self-hosted).** The fonts match the commercial site. That site builds its fonts from
  the `@fontsource-variable` packages, and so does this one. On each deploy, Netlify installs the
  packages and copies the woff2 files into `assets/fonts/`. There are no Google Fonts links.
- **Accessibility contact.** Set to webmaster@standardmanagement.com, as on the commercial site.
- **Logo.** The wordmark is text (SMC | Commercial Properties), as on the commercial site.
  The commercial site has no logo image file, so there is nothing to copy over.

## Local preview

The font files come from the packages, so run these once before opening the page:

```bash
npm install
npm run fonts
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Editing

Edit `index.html` directly. Property names, addresses and the property dropdown options
appear in the page and in both forms, so update all of them together.

**Repository visibility.** This repository holds only public-facing content. Keep tenant
data, lease terms and internal reports out of it.
