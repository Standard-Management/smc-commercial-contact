# SMC Commercial Contact (one-page)

A single-page contact site for SMC Commercial Properties: the three centers with
addresses, plus two request forms. It uses the SAMI brand system from the commercial
property website (navy `#051D35`, gold `#E69F49`, body text `#333333`, Playfair Display
and Geist).

## What is on the page

1. **Our properties.** Name, city and street address for McHenry Village, Northgate Plaza
   and Lakeside Shopping Center.
2. **Tenants & Leasing Requests.** Form with an "I am a" choice (current tenant or leasing inquiry),
   Property, Tenant name, Best email or phone, and Request / description. Sent as Netlify Form
   `leasing-contact`. The email subject is "Tenant Request – [property]" or "Leasing Inquiry – [property]".
3. **Vendors Requests.** Form with Property, Vendor / company name, Best email or
   phone, and Request / description. Sent as Netlify Form `vendor-contact`. The email subject
   is "Vendor Request – [property]".

Both forms are meant to route to **CommercialOps@standardmanagement.com**.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole page (properties, both forms, footer) |
| `assets/site.css` | Brand styles |
| `assets/site.js` | Sends the forms in the background, builds the email subject, and shows a status message |
| `assets/favicon.svg` | Favicon, the same mark the commercial site generates |
| `thank-you.html` | Branded page visitors see after a form is submitted |
| `netlify.toml` | Netlify settings: no build step, publish the root, security headers |

## Before this site goes live

Form handling was approved and enabled on Oct 30, 2026. The items below still need confirmation.

- **Form handling (approved).** Netlify Forms stores tenant and vendor submissions on
  Netlify. Ted approved this on Oct 30, 2026. Email notifications to CommercialOps@ are set
  under the project's Forms settings. If form detection is switched off, visitors see the
  email fallback message instead. After a successful submission, visitors land on the
  branded `thank-you.html` page.
- **Addresses (confirm each).**
  - McHenry Village: `1700 McHenry Avenue, Modesto, CA 95350`. The live commercial site
    still shows the intersection, McHenry Ave & Roseburg Ave.
  - Northgate Plaza: `2523–2749 N. Carson Street, Carson City, NV 89706`. The ZIP is from
    the V9 review. Confirm the street range.
  - Lakeside Shopping Center: `257–353 N. Pass Avenue, Burbank, CA 91505`. The live site
    shows 91502. The V9 review says 91505.
- **Phone line.** No property phone number is listed. The only property numbers on the
  current site are placeholder 555 numbers. The corporate office line (310) 410-2300
  comes from the site settings.
- **Accessibility contact.** Set to webmaster@standardmanagement.com, as on the commercial
  site.
- **Fonts.** Playfair Display and Geist load from Google Fonts. The commercial site
  self-hosts its font files from the `@fontsource-variable` packages. Matching that means
  adding the woff2 files to `assets/fonts/`, which needs a binary upload to the repo.
- **Logo.** The wordmark is text (SMC | Commercial Properties), as on the commercial site.
  The commercial site has no logo image file, so there is nothing to copy over.

## Local preview

No build step is needed. Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8080
```

## Editing

Edit `index.html` directly. Property names, addresses and the property dropdown options
appear in the page and in both forms, so update all of them together.

**Repository visibility.** This repository holds only public-facing content. Keep tenant
data, lease terms and internal reports out of it.
