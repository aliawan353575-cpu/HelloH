# Vantorax Studio Roofing website (plain HTML/CSS/JS)

## IMPORTANT: images
No internet access was available while building, so **no stock photos could be downloaded**. `assets/images/` contains locally drawn SVG *concept illustrations* (labeled on-image). They are original and license-free but are **not photographs**. Replace them with licensed photos (Unsplash, Pexels, or your own; check each license) by saving a file in the same folder and changing the `src` in the HTML (or reuse the same filename). No image sources to credit at this time.

## Quick guide
- Homepage: `index.html`. Edit text directly in each `.html` file.
- Colors/fonts: top of `css/style.css` (`:root` variables). Mobile rules: `css/responsive.css`.
- Business name and prices: `js/config.js`. (Prices also appear as default text in the HTML, so edit both if JS is off.)
- Contact form: set `formEndpoint` in `js/config.js` to a form provider URL (e.g. Formspree, Basin). Until then the form says it is **not connected** and sends nothing. No secret keys belong in front-end code. It is intentionally NOT connected to the remodeling Google Form.
- Real contact info: set `email` / `phone` in `js/config.js`; they then appear on the Contact page. Nothing is shown if blank.
- Sitemap/robots: replace `YOUR-DOMAIN` in `sitemap.xml` and `robots.txt`. Add canonical tags once the domain is known.
- Privacy and Terms are starter drafts needing legal review.

## Run locally
`python3 -m http.server 8000` in this folder, then open http://localhost:8000. (Opening files directly mostly works, but a server matches real hosting.)

## Deploy
- Cloudflare Pages: Create project > Direct Upload (or connect a Git repo), build command none, output directory `/`. Add your domain under Custom domains.
- Others (Netlify, GitHub Pages): upload the folder as-is; no build step.

## You still need to provide
Domain/URL, form endpoint, email/phone (optional), analytics ID (optional), real photos, legal review.
