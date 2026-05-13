import React from 'react'
import { motion } from 'framer-motion'
import { Cake, Coffee, Leaf, Gift, ShoppingBag, ArrowRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import images from '../data/images'
import SafeImage from './ui/SafeImage'

const items = [
  {
    icon: Cake,
    title: 'Great dessert',
    desc: 'Signature cakes, mini pastries, and chocolate creations.',
    hue: 'from-blush-200 to-gold-200',
  },
  {
    icon: Gift,
    title: 'Confectionery store',
    desc: 'House-made chocolates, pralines and truffles to take home.',
    hue: 'from-gold-300 to-blush-100',
  },
  {
    icon: Coffee,
    title: 'Coffee pairings',
    desc: 'Specialty espresso & cappuccino pairings with dessert plates.',
    hue: 'from-gold-200 to-cream-200',
  },
  {
    icon: Leaf,
    title: 'Tea selection',
    desc: 'Moroccan mint tea and curated tea pairings for desserts.',
    hue: 'from-forest-300 to-cream-200',
  },
  {
    icon: Gift,
    title: 'Dessert boxes',
    desc: 'Beautifully boxed selections — perfect for gifts & events.',
    hue: 'from-blush-100 to-gold-300',
  },
  {
    icon: Cake,
    title: 'Celebration treats',
    desc: 'Birthday cakes & custom celebration desserts on request.',
    hue: 'from-blush-200 to-cream-200',
  },
  {
    icon: ShoppingBag,
    title: 'Takeaway dessert',
    desc: 'Order dessert boxes for takeaway or no-contact delivery.',
    hue: 'from-gold-300 to-forest-300',
  },
]

export default function DessertConfectionerySection() {
  return (
    <section id="desserts" className="section bg-cream-50">
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Dessert & confectionery"
              title="Listed as a confectionery store — own that story."
              subtitle="Bloom Tree’s desserts, chocolates, and dessert boxes are a strong differentiator. The website should sell them like a boutique."
            />
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end">
            <a href="#menu" className="btn-primary">
              <Cake className="h-4 w-4" />
              Explore Desserts
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc, hue }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group overflow-hidden rounded-3xl bg-white ring-1 ring-forest-800/5 shadow-soft"
            >
              <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${hue}`}>
                <SafeImage
                  src={images.desserts[i % images.desserts.length]}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent"
                  aria-hidden
                />
                <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-forest-800 text-gold-300 shadow-soft">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-forest-900">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-forest-800/70">
                  {desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
