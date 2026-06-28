# Ad Remix Studio MVP

A lightweight MVP for a creator-led product ad studio with free ad creative review and order intake workflow.

## What this includes

- Premium dark landing page
- Free Ad Creative Review funnel
- AI-assisted structured ad review report
- Review result page
- Template/style library
- Template detail pages
- Production request form
- Persistent order creation
- Persistent ad review creation
- Thank-you page with request ID
- Simple admin password gate
- Admin dashboard
- Admin orders list
- Admin order detail/edit page
- Checklist tracking
- 20 seed templates
- Local JSON stores

## What this does not include yet

- Payment
- File upload
- Direct video file analysis
- AI video generation
- Online video editor
- Customer dashboard
- Creator dashboard
- Full template CMS
- Case study CMS

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Environment

Create `.env.local`:

```env
ADMIN_PASSWORD=change-me
NEXT_PUBLIC_SITE_URL=http://localhost:3000
OPENAI_API_KEY=your-openai-api-key
OPENAI_MODEL=gpt-4.1-mini
```

`OPENAI_API_KEY` is used by `/api/ad-review` to generate the free ad creative review. If it is missing or the API call fails, the app returns a rule-based fallback report so the funnel still works.

`DATABASE_URL` is not used yet. Orders and ad reviews are stored locally in:

```txt
data/orders.json
data/ad-reviews.json
```

This is intended for the current local-server MVP stage. Do not use this file store for a high-traffic public SaaS deployment.

## Routes

```txt
/                         Home
/free-ad-review           Free Ad Creative Review form
/ad-review/[reviewId]     Free Ad Creative Review result
/templates                Style library
/templates/[templateId]   Style detail
/start                    Production request form
/start?template=T001      Request form with selected style
/thank-you                Submission confirmation
/admin/login              Admin login
/admin                    Admin dashboard
/admin/orders             Admin order list
/admin/orders/[orderId]   Admin order detail
```

## Free ad review flow

1. Customer pastes an existing ad or video link.
2. Customer provides product name, target platform, campaign goal and email.
3. `/api/ad-review` generates a structured creative review.
4. The app stores the review in `data/ad-reviews.json`.
5. Customer lands on `/ad-review/[reviewId]`.
6. Result page recommends whether to fix, polish or remake the ad.

The free review checks creative clarity only: hook strength, product clarity, pacing, captions, CTA and platform fit. It does not predict ROAS, conversion rate or paid media performance.

## Order flow

1. Customer submits `/start` form.
2. The app creates an order in `data/orders.json`.
3. Customer lands on `/thank-you?order=ORDER_ID`.
4. Admin logs in at `/admin/login`.
5. Admin reviews orders at `/admin/orders`.
6. Admin updates quote, status, notes, cost, delivery link and checklist.

## Add a new template

Edit:

```txt
src/data/templates.ts
```

Add an object matching the `Template` type.

Required fields:

- id
- title
- slug
- status
- category
- previewVideoUrl
- thumbnailUrl
- durationSec
- aspectRatio
- difficulty
- costLevel
- recommendedPlan
- priceFrom
- suitableProducts
- unsuitableProducts
- replaceableSlots
- requiredAssets
