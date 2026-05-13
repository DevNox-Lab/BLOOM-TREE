import React from 'react'
import { motion } from 'framer-motion'
import {
  ShoppingBag,
  CalendarCheck,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import { businessData } from '../data/businessData'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-forest-800 py-20 text-cream-50 sm:py-24">
      <div className="absolute inset-0 bg-leaf-pattern opacity-70" aria-hidden />
      <div
        className="absolute -top-32 right-1/3 h-[420px] w-[420px] rounded-full bg-gold-300/15 blur-3xl"
        aria-hidden
      />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-300 ring-1 ring-gold-300/30">
            <Sparkles className="h-3.5 w-3.5" />
            For the Bloom Tree team
          </div>

          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-5xl text-balance">
            Turn every social view into an order, reservation, dessert sale, or visit.
          </h2>
          <p className="mt-4 text-base text-cream-50/80 sm:text-lg text-pretty">
            Customer-facing version:{' '}
            <span className="italic text-gold-300">
              “Order, reserve, or visit Bloom Tree today.”
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#delivery" className="btn-primary">
              <ShoppingBag className="h-4 w-4" />
              Order Now
            </a>
            <a href="#reservations" className="btn-secondary">
              <CalendarCheck className="h-4 w-4" />
              Reserve a Table
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
          </div>

          <p className="mt-6 text-xs text-cream-50/55">
            Premium client-facing demo · Bloom Tree { } Restaurant &amp; Café · El Jadida
          </p>
        </motion.div>
      </div>
    </section>
  )
}
