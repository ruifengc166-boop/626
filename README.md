# AI Ad Remix MVP

A Day 1 MVP for an AI video ad remix landing site and static intake flow.

## What this includes

- Home page
- Template library
- Template detail pages
- Static request form
- Thank-you page
- Admin placeholder page
- 20 seed templates
- Minimal Apple / Linear / Runway-inspired UI

## What this does not include yet

- Database
- Login
- Order saving
- File upload
- Payment
- AI video generation
- Online video editor
- Customer dashboard
- Creator dashboard

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

## Routes

```txt
/                         Home
/templates                Template library
/templates/[templateId]   Template detail
/start                    Static request form
/start?template=T001      Request form with selected template
/thank-you                Submission confirmation
/admin                    Admin placeholder
```

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

## Next development tasks

1. Add database.
2. Save `/start` submissions as orders.
3. Add simple admin password login.
4. Build `/admin/orders` and order detail pages.
5. Add checklist tracking.
6. Add template management.
7. Add case management.
8. Add CSV export.
