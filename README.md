# AI REMIX Studio MVP

A lightweight MVP for a creator-led product ad studio with free ad creative review and order intake workflow, backed by VacaVaca / VACAT content and creator credibility.

## Current product principle

AI REMIX should stay on one commercial service flow:

```txt
VacaVaca content discovery -> Template / reference selection -> Submit brief -> Backstage fulfillment -> Approved case return
```

VacaVaca / VACAT is not just a small endorsement badge. It is the major content and trust layer of the platform: award history, representative works, creator capability, judging authority, events, referral logic and industry proof. The boundary is that AI REMIX still does not become a full public marketplace, creator dashboard, open matching platform, community feed, user dashboard or transaction platform in this MVP.

## What this includes

- Premium dark landing page
- VacaVaca / VACAT homepage content section
- Dedicated `/vacavaca` content hub
- VacaVaca metrics, achievements, representative works, tracks, judges, events and referral model
- VacaVaca-backed template reference lanes
- Free Ad Creative Review funnel
- Prompt-system based AI ad diagnosis
- AI-assisted structured ad review report
- Review result page
- Free review admin lead pool
- Review-to-order source tracking
- Template/style library
- Template detail pages
- Production request form
- Optional VacaVaca reference and creator-lane notes on order brief
- Persistent order creation
- Persistent ad review creation
- Public order request rate limits
- Thank-you page with request ID
- Production-safe admin password guard
- Admin dashboard
- Admin free reviews list/detail pages
- Admin orders list
- Admin order detail/edit page with VacaVaca reference visibility
- Checklist tracking
- 20 seed templates
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
- Full template CMS
- Case study CMS
- Public VacaVaca creator marketplace
- Public creator matching / transaction flow
- Live community feed import from VacaVaca

## VacaVaca integration boundary

The integration uses:

```txt
src/data/vacavaca-support.ts
src/components/VacaVacaSupport.tsx
src/app/vacavaca/page.tsx
```

The VacaVaca layer carries:

- 4,646 second-edition submissions
- 76 finalist / awarded works
- 92 participating universities
- 272 cooperation leads / orders from award activity
- breakout public-attention proof from Shanhaijing
- AI Visual Creativity Application Blue Book 2025 positioning
- representative works such as Shanhaijing, ANIMA, Green Screen, Longmen Inn 2067, Dunhuang Journey, ECHO, EVE NO.1 and others
- judging authority from photography, AI research, film, media art, game festival and international design fields
- competition tracks for AI realistic narrative, AI animated narrative, AI commercial creative, AI visual art and AI art poster
- event formats such as award ceremony, project signing, workshop, AI Battle Day and exhibition
- referral model adapted into AI REMIX's managed order flow

These signals help overseas brands trust the studio and help the admin team scope production. They do not change the order flow, pricing flow, admin review flow or case-permission rule.

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
FREE_REVIEW_AI_ENABLED=true
FREE_REVIEW_DAILY_AI_LIMIT=100
ORDER_DAILY_EMAIL_LIMIT=5
ORDER_DAILY_IP_LIMIT=20
```

For production, `ADMIN_PASSWORD` must be set to a strong non-default password. If production runs with no `ADMIN_PASSWORD` or with `ADMIN_PASSWORD=change-me`, admin login is disabled.

`OPENAI_API_KEY` is used by `/api/ad-review` to generate the free ad creative review. If it is missing, `FREE_REVIEW_AI_ENABLED=false`, the daily AI limit is reached, or the API call fails, the app returns a rule-based fallback report so the funnel still works.

`FREE_REVIEW_DAILY_AI_LIMIT` caps daily AI-generated free reviews. Repeated matching submissions within 24 hours reuse the previous review instead of calling OpenAI again.

`ORDER_DAILY_EMAIL_LIMIT` and `ORDER_DAILY_IP_LIMIT` cap public order request submissions over the last 24 hours. Defaults are 5 per email and 20 per IP.

`DATABASE_URL` is not used yet. Orders and ad reviews are stored locally in:

```txt
data/orders.json
data/ad-reviews.json
```

This is intended for the current local-server MVP stage. Do not use this file store for a high-traffic public SaaS deployment.

## Public beta checklist

Before inviting external users:

```txt
1. Confirm npm run build succeeds on the deployment server.
2. Set a strong production ADMIN_PASSWORD.
3. Use HTTPS so the secure admin cookie can be saved.
4. Review the VacaVaca hub at /vacavaca.
5. Submit a test order through /start.
6. Confirm the order appears in /admin/orders.
7. Confirm the order stores optional VacaVaca reference fields if submitted.
8. Submit one /free-ad-review request and confirm it appears in /admin/ad-reviews.
9. Back up data/orders.json and data/ad-reviews.json before each public-beta push.
```

Recommended public-beta positioning:

```txt
AI REMIX is a managed product-ad studio backed by the VacaVaca / VACAT AI visual creator ecosystem. Explore award-grade AI visual references, then submit a structured product brief for studio-scoped delivery.
```

## Routes

```txt
/                              Home
/vacavaca                      VacaVaca / VACAT content hub
/free-ad-review                Free Ad Creative Review form
/ad-review/[reviewId]          Free Ad Creative Review result
/templates                     Style library with VacaVaca reference lanes
/templates/[templateId]        Style detail
/start                         Production request form
/start?template=T001           Request form with selected style
/start?plan=Polished%20Ad&review=REV_ID  Request form sourced from a free review
/thank-you                     Submission confirmation
/admin/login                   Admin login
/admin                         Admin dashboard
/admin/ad-reviews              Admin free review lead list
/admin/ad-reviews/[reviewId]   Admin free review detail
/admin/orders                  Admin order list
/admin/orders/[orderId]        Admin order detail
```

## Free ad review flow

1. Customer pastes an existing ad or video link.
2. Customer provides product name, target platform, campaign goal and email.
3. `/api/ad-review` validates the request and checks email/IP limits.
4. If a matching review was generated in the last 24 hours, the app returns the existing `reviewId`.
5. Otherwise, the prompt system in `src/lib/ad-review-prompts.ts` generates a structured creative review through `src/lib/ad-review-ai.ts`.
6. The app stores the review in `data/ad-reviews.json`.
7. Customer lands on `/ad-review/[reviewId]` immediately.
8. The result page recommends whether to fix, polish or remake the ad.
9. If the customer clicks Request Fix or Remake, `/start` receives the source review ID.
10. Admin can review all generated free reviews at `/admin/ad-reviews` and inspect lead score, recommended service and internal signals.

The free review checks creative clarity only: hook strength, product clarity, pacing, captions, CTA and platform fit. It does not predict ROAS, conversion rate or paid media performance.

## Prompt system

The free review is not a generic OpenAI wrapper. It uses a fixed prompt system:

```txt
src/lib/ad-review-prompts.ts
```

The prompt system defines:

- Diagnostic role and boundaries
- Private scorecard
- Service mapping rules
- Lead score rules
- Structured JSON schema
- Output rules that prevent giving away a full script or production plan for free

## Order flow

1. Customer browses `/vacavaca`, homepage proof sections or `/templates`.
2. Customer submits `/start` form.
3. `/api/orders` validates the public request and applies 24-hour email/IP submission limits.
4. If the order came from a free review, `sourceReviewId` and `sourceChannel=free_ad_review` are stored on the order.
5. Optional `vacaVacaReference`, `creativeReferenceLinks` and `creatorFitNotes` are stored as brief context only.
6. The app creates an order in `data/orders.json`.
7. Customer lands on `/thank-you?order=ORDER_ID`.
8. Admin logs in at `/admin/login`.
9. Admin reviews orders at `/admin/orders`.
10. Admin updates quote, status, notes, cost, delivery link and checklist.
11. Admin can open the source free review from an order detail page.
12. Finished work becomes a public case only when `canBePublicCase` is explicitly checked.

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
