# The Next Move Services website

A static website: plain HTML, CSS and JavaScript. It needs no build step or server code, so it runs on any web host.

```
site/
├── index.html          home page + client proposal (#proposal)
├── 404.html            "page not found" page
├── css/styles.css
├── js/main.js          view switching, copy buttons, drawing lightbox
├── assets/             photos, drawings, social share image
├── favicon.svg, favicon-32.png, apple-touch-icon.png
├── robots.txt, sitemap.xml
└── .htaccess           only used by Apache/cPanel hosts
```

To preview it, open `index.html` in a browser.

## Before you go live

1. **Set your domain.** The site assumes `thenextmoveservices.com`. If your domain is different, replace it in these files:
   - `index.html`: canonical, `og:url`, `og:image`, and `url` in the JSON-LD block
   - `robots.txt`
   - `sitemap.xml`
2. **Check the client proposal.** Everything on the site is public. Make sure the Nellore BPD Plant client is happy for their proposal to be shown, or remove that section.
3. Optional: add the GSTIN to the footer in `index.html`.

## Deploy options

Pick one. All three are free or cheap, and each one gives you HTTPS.

### A. Netlify (easiest)
1. Sign in at app.netlify.com and choose **Add new site → Deploy manually**.
2. Drag the `site` folder onto the page. It goes live straight away at a `*.netlify.app` address.
3. Go to **Domain management → Add a domain**, enter your domain, and follow the DNS steps it shows. HTTPS is set up automatically.

### B. GitHub Pages
1. Push the contents of `site/` to a GitHub repository.
2. Go to **Settings → Pages**, set the source to the `main` branch and the `/ (root)` folder, then save.
3. Under **Custom domain**, enter your domain. At your registrar, add:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - a `CNAME` record for `www` → `<your-username>.github.io`
4. Once DNS has propagated, tick **Enforce HTTPS**.

### C. Shared hosting with cPanel (Hostinger, GoDaddy, BigRock…)
1. Open **File Manager** and go to `public_html`.
2. Upload everything that is *inside* `site/`, including the hidden `.htaccess` file.
3. Turn on the free SSL certificate (often listed as AutoSSL or Let's Encrypt). The `.htaccess` file then sends all visitors to HTTPS.

## After launch

- Add the site to Google Search Console and submit `https://<your-domain>/sitemap.xml`.
- Create a Google Business Profile for the Vijayawada office and link it to the site.
- Paste the URL into WhatsApp to check the share preview (`assets/og-image.jpg`).
