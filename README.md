# AI Ad Remix MVP

A lightweight MVP for an AI video ad remix landing site and order intake workflow.

## What this includes

- Premium dark landing page
- Template library
- Template detail pages
- Start request form
- Persistent order creation
- Thank-you page with order ID
- Simple admin password gate
- Admin dashboard
- Admin orders list
- Admin order detail/edit page
- Checklist tracking
- 20 seed templates
- Local JSON order store

## What this does not include yet

- Payment
- File upload
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
```

`DATABASE_URL` is not used yet. Orders are stored locally in:

```txt
data/orders.json
```

This is intended for the current local-server MVP stage. Do not use this file store for a high-traffic public SaaS deployment.

## Routes

```txt
/                         Home
/templates                Template library
/templates/[templateId]   Template detail
/start                    Request form
/start?template=T001      Request form with selected template
/thank-you                Submission confirmation
/admin/login              Admin login
/admin                    Admin dashboard
/admin/orders             Admin order list
/admin/orders/[orderId]   Admin order detail
```

## Order flow

1. Customer picks a template.
2. Customer submits `/start` form.
3. The app creates an order in `data/orders.json`.
4. Customer lands on `/thank-you?order=ORDER_ID`.
5. Admin logs in at `/admin/login`.
6. Admin reviews orders at `/admin/orders`.
7. Admin updates quote, status, notes, cost, delivery link and checklist.

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
- deliveryEstimate
- createdAt
- updatedAt

## Build

```bash
npm run build
```

## Next development tasks

1. Replace placeholder thumbnails with real template covers.
2. Add real preview videos for the 6 featured templates.
3. Add case preview data from real or simulated adaptations.
4. Add template management in admin.
5. Add case management in admin.
6. Add CSV export for orders.
7. Move order storage to Supabase or another database when public traffic starts.
