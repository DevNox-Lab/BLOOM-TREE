# Bloom Tree — Sales Demo Site

Premium client-facing demo for **BLOOM TREE { Restaurant & Café }** in El Jadida, Morocco.
Built to show the restaurant owner how Instagram, Facebook, paid ads, WhatsApp, Google Maps,
and QR-menu traffic can be unified into one conversion flow for orders, reservations,
delivery, dessert sales, and live-music visits.

## Stack

- React 18 + Vite 5
- Tailwind CSS 3 (custom forest / gold / cream palette)
- lucide-react (icons)
- framer-motion (subtle animations)

All business data lives in `src/data/businessData.js`.

## Run locally

> Note: the folder name contains special characters (`{`, `}`, `&`, `é`), which break
> `npm run` script execution on some shells. Use the direct Node invocation below.

```bash
npm install

# Dev (instead of `npm run dev`)
node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 5173

# Production build (instead of `npm run build`)
node node_modules/vite/bin/vite.js build

# Preview
node node_modules/vite/bin/vite.js preview
```

Or rename the project folder (e.g. `bloom-tree-demo`) and the standard scripts work:

```bash
npm install
npm run dev
npm run build
```

## Sections

1. Header / Navbar – sticky, mobile-friendly, WhatsApp + Call CTAs
2. Hero – deep green & gold, social/rating/delivery/music/hours badges
3. Social & Ads Conversion – 8 funnel cards
4. Trust & Experience – stats + experience assets
5. Delivery & Takeaway – mode + pickup-time picker + live order status mock
6. Digital Menu – categories, search, labels, “Add to Order” cart preview
7. Reservation – full form with seating + occasion + confirmation state
8. Live Music & Evenings – event cards + highlights
9. Dessert & Confectionery – differentiator section
10. Offers / Ad Landing – ad-campaign style cards
11. Social Media – Instagram / Facebook / WhatsApp / QR menu cards
12. Family, Students, Tourists – inclusivity & atmosphere
13. Reviews – 4.0 rating breakdown + quote cards
14. Accessibility & Convenience – wheelchair, payments, parking, restrooms
15. Location & Contact – embedded Google Maps + full contact card + weekly hours
16. Final CTA – Order / Reserve / WhatsApp
17. Footer + sticky mobile action bar (Order / WhatsApp / Call)

## Brand palette

- Deep green `#1a2d29` (forest)
- Warm beige/gold `#dbb17f` (gold)
- Cream `#fdfaf4`, white, charcoal, soft blush accents
