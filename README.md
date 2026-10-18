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

## Going live: GitHub Pages + Squarespace domain (current setup)

The site is hosted free on GitHub Pages. The domain stays registered at Squarespace and simply points to GitHub. Every push to `main` that changes `site/` republishes automatically (see `.github/workflows/pages.yml`).

### 1. Turn on GitHub Pages (once)
1. Open the repo on GitHub → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Open the **Actions** tab → **Deploy site** → **Run workflow**. After a minute the site is live at `https://shivifyai.github.io/TheNextMoveServices/`.

### 2. Point the Squarespace domain at GitHub
1. Sign in at account.squarespace.com → **Domains** → your domain → **DNS** (sometimes called DNS Settings).
2. Under **Squarespace Defaults**, delete the preset records. They point the domain at a Squarespace site and will clash with GitHub's.
3. Under **Custom records**, add:

   | Host | Type  | Data |
   |------|-------|------|
   | `@`  | A     | `185.199.108.153` |
   | `@`  | A     | `185.199.109.153` |
   | `@`  | A     | `185.199.110.153` |
   | `@`  | A     | `185.199.111.153` |
   | `@`  | AAAA  | `2606:50c0:8000::153` |
   | `@`  | AAAA  | `2606:50c0:8001::153` |
   | `@`  | AAAA  | `2606:50c0:8002::153` |
   | `@`  | AAAA  | `2606:50c0:8003::153` |
   | `www`| CNAME | `shivifyai.github.io` |

   Leave any email records (MX, or TXT records for Google Workspace) untouched.

### 3. Connect the domain in GitHub
1. Back in **Settings → Pages → Custom domain**, enter the domain (for example `thenextmoveservices.com`) and save. GitHub checks the DNS. This can take from a few minutes up to 24 hours.
2. Once the check passes, tick **Enforce HTTPS**. GitHub issues the certificate for free.
3. Recommended: verify the domain under your GitHub **profile Settings → Pages → Add a domain**. GitHub gives you a TXT record to add in Squarespace DNS, which stops anyone else from claiming the domain on GitHub.

`.htaccess` does nothing on GitHub Pages, which is fine. GitHub serves `404.html` automatically and handles HTTPS itself.

## Other hosting options

Use these instead of GitHub Pages only if you move away from that setup.

### A. Netlify
1. Sign in at app.netlify.com and choose **Add new site → Deploy manually**.
2. Drag the `site` folder onto the page. It goes live straight away at a `*.netlify.app` address.
3. Go to **Domain management → Add a domain**, enter your domain, and follow the DNS steps it shows. HTTPS is set up automatically.

### B. Shared hosting with cPanel (Hostinger, GoDaddy, BigRock…)
1. Open **File Manager** and go to `public_html`.
2. Upload everything that is *inside* `site/`, including the hidden `.htaccess` file.
3. Turn on the free SSL certificate (often listed as AutoSSL or Let's Encrypt). The `.htaccess` file then sends all visitors to HTTPS.

## After launch

- Add the site to Google Search Console and submit `https://<your-domain>/sitemap.xml`.
- Create a Google Business Profile for the Vijayawada office and link it to the site.
- Paste the URL into WhatsApp to check the share preview (`assets/og-image.jpg`).
