# VacaVaca Studio

VacaVaca Studio is a managed AI visual creative service backed by the VACAT Award ecosystem.

The product should stay on one commercial service flow:

```txt
VACAT reference works -> Creative direction selection -> Submit brief -> Studio scope / quote -> Production -> Approved case return
```

## Product principle

VacaVaca Studio is the client-facing service.

VACAT / 瓦卡奖 is the proof layer behind the service: award history, representative works, creator capability, judging authority, events, universities, research context and industry proof.

The site should not become a full public marketplace, creator dashboard, open matching platform, community feed, user dashboard or transaction platform in this MVP.

## Current structure

- `/` — Studio landing page and commission funnel
- `/templates` — Creative directions / reference lanes
- `/templates/[templateId]` — Creative direction detail
- `/vacavaca` — VACAT proof-layer overview
- `/vacavaca/works` — VACAT reference works
- `/vacavaca/works/[slug]` — Onsite reference work detail
- `/vacavaca/events` — Award events and ecosystem proof
- `/free-ad-review` — Lightweight creative review entry
- `/ad-review/[reviewId]` — Review result page
- `/start` — Commission brief form
- `/thank-you` — Submission confirmation
- `/admin/login` — Admin login
- `/admin` — Admin dashboard
- `/admin/ad-reviews` — Free review lead list
- `/admin/ad-reviews/[reviewId]` — Free review detail
- `/admin/orders` — Order list
- `/admin/orders/[orderId]` — Order detail / internal review

## What this MVP includes

- Premium dark landing page
- Clear VacaVaca Studio service positioning
- VACAT proof layer and reference works
- Onsite reference work detail pages
- Creative direction library
- Creative direction detail pages
- Commission brief form
- VACAT reference prefill from work pages
- Expanded target formats for visual commissions
- Free creative review funnel
- AI-assisted structured creative review report
- Review-to-order source tracking
- Persistent order creation
- Persistent ad review creation
- Public order request rate limits
- Production-safe admin password guard
- Admin dashboard
- Admin free review lead pool
- Admin order detail / checklist workflow
- Local JSON stores

## What this does not include yet

- Payment
- File upload
- Direct video file analysis
- Email delivery for review links
- CAPTCHA / Turnstile protection
- AI video generation
- Online video editor
- Customer dashboard
- Creator dashboard
- Full CMS for works and cases
- Public creator marketplace
- Public creator matching / transaction flow

## Media strategy

Do not upload original master video files directly into this repository.

Use three media layers:

```txt
1. Poster image — for works grids and lightweight page load
2. Short preview video — 5-15 seconds for hero/cards
3. Full web showcase video — compressed 720p/1080p for work detail pages
```

Recommended hosting:

- Cloudflare R2 + CDN
- Vercel Blob
- AWS S3 + CloudFront
- Aliyun OSS / Tencent COS + CDN

`studioWorks` supports:

```ts
posterUrl
previewVideoUrl
fullVideoUrl
bilibiliUrl
```

Bilibili links should be kept as external publishing proof, not the primary viewing path.

## Environment

Create `.env.local`:

```env
ADMIN_PASSWORD=change-me
NEXT_PUBLIC_SITE_URL=http://localhost:3000
OPENAI_API_KEY=your-openai-api-key
OPENAI_MODEL=gpt-4.1-mini
FREE_REVIEW_AI_ENABLED=true
FREE_REVIEW_DAILY_AI_LIMIT=100
ORDER_DAILY_EMAIL_LIMIT=5
ORDER_DAILY_IP_LIMIT=20
```

For production, `ADMIN_PASSWORD` must be set to a strong non-default password. If production runs with no `ADMIN_PASSWORD` or with `ADMIN_PASSWORD=change-me`, admin login is disabled.

`OPENAI_API_KEY` is used by `/api/ad-review` to generate the free creative review. If it is missing, `FREE_REVIEW_AI_ENABLED=false`, the daily AI limit is reached, or the API call fails, the app returns a rule-based fallback report so the funnel still works.

Orders and ad reviews are currently stored locally in:

```txt
data/orders.json
data/ad-reviews.json
```

This is intended for the current local-server MVP stage. Do not use this file store for a high-traffic public SaaS deployment.

## Run locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Public beta checklist

Before inviting external users:

```txt
1. Confirm npm run build succeeds on the deployment server.
2. Set a strong production ADMIN_PASSWORD.
3. Use HTTPS so the secure admin cookie can be saved.
4. Replace placeholder work posters with real poster images.
5. Add CDN-hosted previewVideoUrl / fullVideoUrl for selected works.
6. Submit a test order through /start.
7. Confirm the order appears in /admin/orders.
8. Confirm vacaVacaReference is stored when starting from a work page.
9. Submit one /free-ad-review request and confirm it appears in /admin/ad-reviews.
10. Back up data/orders.json and data/ad-reviews.json before each public-beta push.
```
