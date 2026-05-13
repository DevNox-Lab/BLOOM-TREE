import React from 'react'
import { motion } from 'framer-motion'
import {
  Instagram,
  Star,
  MessageSquare,
  Truck,
  Coffee,
  Music2,
  Clock,
  MessageCircle,
  UtensilsCrossed,
  ArrowRight,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { businessData } from '../data/businessData'
import images from '../data/images'
import SafeImage from './ui/SafeImage'

const badges = [
  { icon: Instagram, label: '13.5k Instagram audience' },
  { icon: Star, label: '4.0 / 5 rating' },
  { icon: MessageSquare, label: '250 reviews' },
  { icon: Truck, label: 'Delivery + Takeaway' },
  { icon: Coffee, label: 'Breakfast & Brunch' },
  { icon: Music2, label: 'Live music nights' },
  { icon: Clock, label: 'Open daily • 7 AM – 11:30 PM' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-forest-800 text-cream-50"
    >
      {/* photographic backdrop */}
      <SafeImage
        src={images.ambience}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
      />
      {/* decorative bg */}
      <div className="absolute inset-0 bg-leaf-pattern" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-forest-800/60 via-forest-800/85 to-forest-900"
        aria-hidden
      />
      <div
        className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-gold-300/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-forest-500/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent"
        aria-hidden
      />

      <div className="container-x relative pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-300 ring-1 ring-gold-300/30 backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" />
              El Jadida • Morocco
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 font-display text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-[64px] text-balance"
            >
              Bloom into{' '}
              <span className="text-gold-300">breakfast</span>,{' '}
              <span className="italic">dinner</span>,{' '}
              <span className="text-gold-300">desserts</span>, and{' '}
              <span className="italic">live music</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-cream-50/85 sm:text-lg text-pretty"
            >
              {businessData.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#delivery" className="btn-primary">
                <UtensilsCrossed className="h-4 w-4" />
                Order / Reserve Now
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#menu"
                className="btn bg-cream-50/10 text-cream-50 ring-1 ring-cream-50/20 hover:bg-cream-50/15"
              >
                View Menu
              </a>
              <a
                href={`https://wa.me/${businessData.contact.whatsappRaw}`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-9 flex flex-wrap gap-2"
            >
              {badges.map(({ icon: Icon, label }) => (
                <span key={label} className="chip-dark">
                  <Icon className="h-3.5 w-3.5 text-gold-300" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function HeroCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* main framed card */}
      <div className="relative overflow-hidden rounded-[28px] ring-1 ring-gold-300/30 shadow-glow">
        <div className="relative aspect-[4/5] bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900">
          {/* Photo background */}
          <SafeImage
            src={images.hero}
            alt="Bloom Tree restaurant & café interior"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Brand-tinted overlay so floating chips stay readable */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-forest-900/40 via-forest-900/20 to-forest-900/85"
            aria-hidden
          />
          <div
            className="absolute inset-0 mix-blend-multiply bg-gradient-to-tr from-forest-800/30 via-transparent to-gold-300/10"
            aria-hidden
          />

          {/* floating tags */}
          <div className="absolute left-4 top-4 flex flex-col gap-2">
            <span className="chip-dark animate-float">
              <Coffee className="h-3.5 w-3.5 text-gold-300" /> Great coffee
            </span>
            <span className="chip-dark animate-float [animation-delay:200ms]">
              <Music2 className="h-3.5 w-3.5 text-gold-300" /> Live music
            </span>
          </div>
          <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
            <span className="chip-dark">
              <Star className="h-3.5 w-3.5 fill-gold-300 text-gold-300" /> 4.0
            </span>
            <span className="chip-dark">
              <Instagram className="h-3.5 w-3.5 text-gold-300" /> 13.5k
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-forest-900/60 p-4 backdrop-blur ring-1 ring-gold-300/20">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold-300">
              <MapPin className="h-3.5 w-3.5" /> El Jadida 24000
            </div>
            <p className="mt-1 font-display text-xl leading-tight">
              BLOOM TREE
              <span className="block text-sm text-cream-50/70">
                Restaurant · Café · Confectionery
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* floating quick-actions */}
      <div className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl bg-cream-50 p-3 shadow-soft ring-1 ring-forest-800/10">
        <div className="grid grid-cols-3 gap-2 text-forest-900">
          <a href="#delivery" className="rounded-xl bg-cream-100 px-2 py-2 text-center text-[11px] font-semibold hover:bg-gold-200">
            Order
          </a>
          <a href="#reservations" className="rounded-xl bg-cream-100 px-2 py-2 text-center text-[11px] font-semibold hover:bg-gold-200">
            Reserve
          </a>
          <a href="#menu" className="rounded-xl bg-cream-100 px-2 py-2 text-center text-[11px] font-semibold hover:bg-gold-200">
            Menu
          </a>
        </div>
      </div>
    </div>
  )
}
