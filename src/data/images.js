// Curated Unsplash photos for the Bloom Tree demo.
// Each URL uses Unsplash's image CDN with auto-format + responsive sizing.
// SafeImage gracefully hides any photo that fails so the gradient backdrop
// underneath stays visible — the design never breaks.

const u = (id, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  // Hero & ambient
  hero: u('photo-1554118811-1e0d58224f24', 1400), // moody warm cafe interior
  heroAlt: u('photo-1517248135467-4c7edcad34c4', 1200), // candle-lit cafe
  ambience: u('photo-1559925393-8be0ec4767c8', 1400), // restaurant ambience
  ambienceBrunch: u('photo-1559054663-e8d23213f55c', 1200), // brunch table
  ambienceEvening: u('photo-1414235077428-338989a2e8c0', 1200), // evening dinner
  ambienceCoffee: u('photo-1495474472287-4d71bcdd2085', 1200), // latte art

  // Menu items (keyed by item id)
  menu: {
    'bloom-breakfast': u('photo-1525351484163-7529414344d8'),
    'french-toast-brunch': u('photo-1484723091739-30a097e8f929'),
    'croissant-coffee': u('photo-1555507036-ab1f4038808a'),
    'modern-french': u('photo-1414235077428-338989a2e8c0'),
    'chicken-supreme': u('photo-1532550907401-a500c9a57435'),
    'vegan-bowl': u('photo-1512621776951-a57141f2eefd'),
    'veg-small-plates': u('photo-1546069901-ba9599a7e63c'),
    'dessert-box': u('photo-1565958011703-44f9829ba187'),
    'chocolate-plate': u('photo-1481391319762-47dff72954d9'),
    'bloom-cocktail': u('photo-1551538827-9c037cb4f32a'),
    'mint-tea': u('photo-1564890369478-c89ca6d9cde9'),
    'kids-mini': u('photo-1565299507177-b0ac66763828'),
    'family-box': u('photo-1466637574441-749b8f19452f'),
  },

  // Live music & evenings
  events: [
    u('photo-1493225457124-a3eb161ffa5f'), // acoustic guitar
    u('photo-1551024506-0bccd828d307'), // dessert + coffee (macarons)
    u('photo-1414235077428-338989a2e8c0'), // weekend dinner
    u('photo-1559054663-e8d23213f55c'), // family brunch
  ],

  // Dessert & confectionery
  desserts: [
    u('photo-1488477181946-6428a0291777'),
    u('photo-1551024506-0bccd828d307'), // macarons
    u('photo-1495474472287-4d71bcdd2085'), // coffee pairing
    u('photo-1597318181409-cf64d0b5d8a2'), // tea
    u('photo-1565958011703-44f9829ba187'), // cake / box
    u('photo-1559620192-032c4bc4674e'), // celebration cake
    u('photo-1481391319762-47dff72954d9'), // chocolate takeaway
  ],

  // Offers (ad-landing visuals)
  offers: [
    u('photo-1525351484163-7529414344d8'), // breakfast
    u('photo-1484723091739-30a097e8f929'), // brunch
    u('photo-1565958011703-44f9829ba187'), // dessert box
    u('photo-1466637574441-749b8f19452f'), // delivery / family
    u('photo-1414235077428-338989a2e8c0'), // live music dinner
    u('photo-1559054663-e8d23213f55c'), // family meal
  ],

  // Instagram preview grid
  social: [
    u('photo-1495474472287-4d71bcdd2085', 600),
    u('photo-1565958011703-44f9829ba187', 600),
    u('photo-1493225457124-a3eb161ffa5f', 600),
    u('photo-1525351484163-7529414344d8', 600),
  ],
}

export default images
