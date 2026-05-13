import React from 'react'
import { motion } from 'framer-motion'
import { Megaphone, ArrowUpRight, Sparkles } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { offers } from '../data/businessData'
import images from '../data/images'
import SafeImage from './ui/SafeImage'

const tagStyles = {
  Morning: 'bg-gold-300 text-forest-900',
  Weekend: 'bg-blush-200 text-forest-900',
  Confectionery: 'bg-blush-100 text-forest-900',
  Delivery: 'bg-forest-700 text-cream-50',
  Evening: 'bg-forest-800 text-gold-300',
  Family: 'bg-cream-200 text-forest-900',
}

export default function OffersAdLandingSection() {
  return (
    <section id="offers" className="section bg-cream-100">
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Offers & Ad landing"
              title="Send ad clicks here — not just to a profile."
              subtitle="Because Bloom Tree spends on ads, every campaign deserves a landing page with offers, CTAs, and trackable conversions."
            />
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end">
            <a href="#delivery" className="btn-primary">
              <Megaphone className="h-4 w-4" />
              View Offers
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((o, i) => (
            <motion.article
              key={o.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-forest-800/5 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gold-200 to-blush-100">
                <SafeImage
                  src={images.offers[i % images.offers.length]}
                  alt={o.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent"
                  aria-hidden
                />
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      tagStyles[o.tag] || 'bg-cream-100 text-forest-900'
                    }`}
                  >
                    {o.tag}
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-cream-50/90 text-gold-600 backdrop-blur">
                    <Sparkles className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-forest-900">
                  {o.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-forest-800/70">
                  {o.desc}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="font-display text-lg font-semibold text-gold-600">
                    {o.price}
                  </p>
                  <a
                    href="#delivery"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-forest-800 transition group-hover:text-gold-600"
                  >
                    Claim <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
              <span className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-gold-300/10 blur-2xl" />
            </motion.article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-forest-800 p-6 text-cream-50 shadow-soft sm:p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow text-gold-300">Pro tip for paid ads</p>
              <p className="mt-1 font-display text-xl sm:text-2xl">
                Send ad traffic here instead of only to Instagram or WhatsApp.
              </p>
              <p className="mt-1 text-sm text-cream-50/75">
                A premium landing page lifts ad ROI by capturing orders,
                reservations, and menu views on the same screen.
              </p>
            </div>
            <a href="#conversion" className="btn-primary shrink-0">
              See the funnel
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
