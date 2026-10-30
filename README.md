# SMC Commercial Contact (one-page)

A single-page contact site for SMC Commercial Properties: the three centers with
addresses, plus two request forms. It uses the SAMI brand system from the commercial
property website (navy `#051D35`, gold `#E69F49`, body text `#333333`, Playfair Display
and Geist).

## What is on the page

1. **Our properties.** Name, city and street address for McHenry Village, Northgate Plaza
   and Lakeside Shopping Center.
2. **Tenants and prospects.** Form with Property, Tenant name, Best email or phone, and
   Request / description. Sent as Netlify Form `leasing-contact`.
3. **Vendors and contractors.** Form with Property, Vendor / company name, Best email or
   phone, and Request / description. Sent as Netlify Form `vendor-contact`.

Both forms are meant to route to **CommercialOps@standardmanagement.com**.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole page (properties, both forms, footer) |
| `assets/site.css` | Brand styles |
| `assets/site.js` | Sends the forms in the background and shows a status message |
| `netlify.toml` | Netlify settings: no build step, publish the root, security headers |

## Before this site goes live

These items need sign-off or confirmation. Nothing here has been enabled yet.

- **Form handling (needs approval).** Netlify Forms stores every submission on Netlify,
  and tenant and vendor requests contain personal information. Turn on **Forms → Enable
  form detection** and **Forms → Form notifications** (email to CommercialOps@) only after
  the data-handling sign-off is given. Until then the forms will not deliver.
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
  self-hosts its fonts, so switch to self-hosting if SAMI wants no third-party requests.

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
