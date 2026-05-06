# TeamStation US landing page

Static Cloudflare Pages site for `https://teamstation.us/`.

## Goal

Explain TeamStation AI in simple English for US CTO and CIO buyers:

- find strong nearshore engineers in Latin America
- check real fit before buyer review
- launch safely with EOR, payroll, devices, MDM, access, and governance
- book a no-commitment team build call

## Deploy

Cloudflare Pages settings:

- Framework preset: None
- Build command: none
- Output directory: `/`
- Production branch: `main`

Attach both domains:

- `teamstation.us`
- `www.teamstation.us`

The `_redirects` file makes `www.teamstation.us` and the Pages preview host point to the canonical apex domain.

## SEO

The homepage includes:

- canonical URL
- meta description
- Open Graph and Twitter cards
- Organization schema
- WebSite schema
- Service schema
- FAQPage schema
- level-based pricing signals
- `robots.txt`
- `sitemap.xml`
