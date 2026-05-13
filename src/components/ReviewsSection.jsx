import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { businessData, reviews } from '../data/businessData'

export default function ReviewsSection() {
  const dist = businessData.ratings.distribution
  const total = businessData.ratings.total
  const score = businessData.ratings.score
  const filled = Math.floor(score)
  const half = score - filled >= 0.5

  return (
    <section className="section bg-cream-50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Guests love it"
          title="A loved spot for dessert, coffee, dinner & live music."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 rounded-3xl bg-forest-800 p-6 text-cream-50 shadow-soft"
          >
            <p className="eyebrow text-gold-300">Overall rating</p>
            <div className="mt-3 flex items-end gap-3">
              <p className="font-display text-6xl font-semibold text-gold-300">
                {score.toFixed(1)}
              </p>
              <p className="pb-2 text-sm text-cream-50/70">/ 5</p>
            </div>
            <div className="mt-1 flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  className={`h-5 w-5 ${
                    n <= filled
                      ? 'fill-gold-300 text-gold-300'
                      : n === filled + 1 && half
                        ? 'text-gold-300'
                        : 'text-cream-50/30'
                  }`}
                />
              ))}
              <span className="ml-2 text-xs text-cream-50/70">
                {total} reviews
              </span>
            </div>

            <div className="mt-6 space-y-2">
              {[5, 4, 3, 2, 1].map((n) => {
                const c = dist[n] || 0
                const pct = Math.max(2, Math.round((c / total) * 100))
                return (
                  <div key={n} className="flex items-center gap-3">
                    <span className="w-6 text-xs text-cream-50/75">{n}★</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-cream-50/10">
                      <div
                        className="h-full rounded-full bg-gold-300"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-xs text-cream-50/70">
                      {c}
                    </span>
                  </div>
                )
              })}
            </div>

            <p className="mt-5 text-xs text-cream-50/70">
              <span className="font-semibold text-gold-300">147 five-star</span>{' '}
              guests praise the dessert, coffee, atmosphere & live music.
            </p>
          </motion.div>

          {/* Quote cards */}
          <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
            {reviews.map((r, i) => (
              <motion.figure
                key={r.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card relative"
              >
                <Quote className="absolute right-5 top-5 h-6 w-6 text-gold-300" />
                <div className="flex items-center gap-0.5 text-gold-500">
                  {Array.from({ length: r.rating }).map((_, n) => (
                    <Star key={n} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <blockquote className="mt-3 text-[15px] leading-relaxed text-forest-800">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-forest-900">
                    {r.name}
                  </span>
                  <span className="chip">{r.tag}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
