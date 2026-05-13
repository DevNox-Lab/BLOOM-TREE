import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Plus,
  ShoppingBag,
  Trash2,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { menu } from '../data/businessData'
import { businessData } from '../data/businessData'
import images from '../data/images'
import SafeImage from './ui/SafeImage'

const labelStyles = {
  Popular: 'bg-gold-300 text-forest-900',
  Signature: 'bg-forest-800 text-cream-50',
  Breakfast: 'bg-cream-200 text-forest-900',
  Brunch: 'bg-blush-100 text-forest-900',
  Dessert: 'bg-blush-200 text-forest-900',
  Vegan: 'bg-forest-200 text-forest-900',
  Vegetarian: 'bg-forest-100 text-forest-900',
  Cocktail: 'bg-forest-700 text-cream-50',
  Café: 'bg-gold-200 text-forest-900',
  Tea: 'bg-forest-300 text-forest-900',
  Kids: 'bg-blush-100 text-forest-900',
  Delivery: 'bg-gold-400 text-forest-900',
  'Small Plates': 'bg-cream-100 text-forest-900',
}

export default function MenuSection() {
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')
  const [cart, setCart] = useState([])

  const filtered = useMemo(() => {
    return menu.items.filter((item) => {
      const matchCat = active === 'All' || item.category === active
      const matchQuery =
        !query ||
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
      return matchCat && matchQuery
    })
  }, [active, query])

  const addToCart = (item) => {
    setCart((c) => {
      const existing = c.find((x) => x.id === item.id)
      if (existing) {
        return c.map((x) => (x.id === item.id ? { ...x, qty: x.qty + 1 } : x))
      }
      return [...c, { ...item, qty: 1 }]
    })
  }
  const removeFromCart = (id) => setCart((c) => c.filter((x) => x.id !== id))
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0)

  return (
    <section id="menu" className="section bg-cream-50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Digital menu"
          title="Café · French plates · desserts · confectionery."
          subtitle="Browse a sample of breakfast, brunch, dinner, dessert, cocktail, and delivery items — searchable, filterable, and order-ready."
        />

        {/* Controls */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-forest-800/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search croissant, dessert, brunch…"
              className="input pl-9"
            />
          </div>

          <div className="-mx-1 flex w-full gap-2 overflow-x-auto pb-1 no-scrollbar lg:w-auto">
            {menu.categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                  active === c
                    ? 'bg-forest-800 text-cream-50'
                    : 'bg-white text-forest-900 ring-1 ring-forest-800/10 hover:bg-gold-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Items grid */}
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {filtered.map((item) => (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group overflow-hidden rounded-3xl bg-white ring-1 ring-forest-800/5 shadow-soft"
                  >
                    <div
                      className={`relative h-40 overflow-hidden bg-gradient-to-br ${item.hue} sm:h-44`}
                    >
                      <SafeImage
                        src={images.menu[item.id]}
                        alt={item.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-forest-900/55 via-forest-900/10 to-transparent"
                        aria-hidden
                      />
                      <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                        {item.labels.slice(0, 2).map((l) => (
                          <span
                            key={l}
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${labelStyles[l] || 'bg-cream-100 text-forest-900'}`}
                          >
                            {l}
                          </span>
                        ))}
                      </div>
                      <div className="absolute right-3 top-3 rounded-full bg-forest-900/85 px-2.5 py-0.5 text-[11px] font-semibold text-cream-50">
                        MAD {item.price}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-semibold text-forest-900">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-forest-800/70">
                        {item.desc}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-forest-800/50">
                          {item.category}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="btn-primary !px-4 !py-2 text-xs"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          Add to Order
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
            {filtered.length === 0 && (
              <div className="rounded-3xl border border-dashed border-forest-800/15 bg-white/60 p-10 text-center text-sm text-forest-800/60">
                No items found. Try another search or category.
              </div>
            )}
          </div>

          {/* Cart preview */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-3xl bg-forest-800 p-6 text-cream-50 shadow-soft">
              <div className="flex items-center justify-between">
                <p className="eyebrow text-gold-300">Your order</p>
                <span className="chip-dark">
                  <ShoppingBag className="h-3.5 w-3.5" /> {cart.length} item{cart.length === 1 ? '' : 's'}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {cart.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-cream-50/20 p-5 text-center text-sm text-cream-50/70">
                    <Sparkles className="mx-auto mb-2 h-5 w-5 text-gold-300" />
                    Add dishes to preview the order. Frontend demo only.
                  </div>
                )}
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-forest-700/60 p-3 ring-1 ring-cream-50/5"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{item.name}</p>
                      <p className="text-[11px] text-cream-50/60">
                        x{item.qty} · MAD {item.price * item.qty}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove"
                      className="grid h-8 w-8 place-items-center rounded-lg bg-cream-50/10 text-cream-50/70 hover:bg-cream-50/20"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-end justify-between border-t border-cream-50/10 pt-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-cream-50/60">
                    Total
                  </p>
                  <p className="font-display text-3xl text-gold-300">
                    MAD {total}
                  </p>
                </div>
                <a
                  href={`https://wa.me/${businessData.contact.whatsappRaw}?text=${encodeURIComponent(
                    `Hi Bloom Tree, I'd like to order: ${cart
                      .map((c) => `${c.qty}x ${c.name}`)
                      .join(', ')}. Total: MAD ${total}.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn-whatsapp ${cart.length === 0 ? 'pointer-events-none opacity-50' : ''}`}
                >
                  <MessageCircle className="h-4 w-4" />
                  Send via WhatsApp
                </a>
              </div>
              <p className="mt-3 text-[11px] text-cream-50/60">
                Prices in MAD · Demo cart — no payment captured.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
