import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Truck,
  ShieldCheck,
  ShoppingBag,
  MessageCircle,
  Phone,
  Clock,
  QrCode,
  CheckCircle2,
  ChefHat,
  PackageCheck,
  Bike,
  Home,
  ArrowRight,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { businessData } from '../data/businessData'

const channels = [
  {
    icon: Truck,
    title: 'Order delivery',
    desc: 'Delivery within El Jadida — direct from Bloom Tree.',
  },
  {
    icon: ShieldCheck,
    title: 'No-contact delivery',
    desc: 'Safe, contactless drop-off available on request.',
  },
  {
    icon: ShoppingBag,
    title: 'Takeaway',
    desc: 'Order ahead, walk in, walk out with your meal.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp order',
    desc: 'Tap to chat — confirm your order in seconds.',
  },
  {
    icon: Phone,
    title: 'Call to order',
    desc: 'Prefer to call? Our line is open 7 AM – 11:30 PM.',
  },
  {
    icon: QrCode,
    title: 'QR menu link',
    desc: 'Scan, browse, and order without an app download.',
  },
]

const statusFlow = [
  { icon: CheckCircle2, title: 'Order received', sub: 'Just now', state: 'done' },
  { icon: ChefHat, title: 'Preparing', sub: '4 min', state: 'active' },
  { icon: PackageCheck, title: 'Ready for pickup', sub: 'Pending', state: 'idle' },
  { icon: Bike, title: 'Out for delivery', sub: 'Pending', state: 'idle' },
  { icon: Home, title: 'Delivered', sub: 'Pending', state: 'idle' },
]

const PICKUP_TIMES = ['ASAP', '15 min', '30 min', '45 min', '1 hour']

export default function DeliveryTakeawaySection() {
  const [pickup, setPickup] = useState('ASAP')
  const [mode, setMode] = useState('Delivery')

  return (
    <section id="delivery" className="section bg-forest-800 text-cream-50">
      <div
        className="absolute inset-0 bg-leaf-pattern opacity-60"
        aria-hidden
      />
      <div className="container-x relative">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              variant="light"
              eyebrow="Delivery & Takeaway"
              title="Turn every craving into an order — direct."
              subtitle="WhatsApp, call, takeaway, no-contact delivery and a QR menu — unified in one premium flow."
            />
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
            <a
              href={`https://wa.me/${businessData.contact.whatsappRaw}?text=${encodeURIComponent(
                'Hi Bloom Tree, I would like to place an order.',
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <ShoppingBag className="h-4 w-4" />
              Order Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${businessData.contact.phoneTel}`}
              className="btn bg-cream-50/10 text-cream-50 ring-1 ring-cream-50/20 hover:bg-cream-50/15"
            >
              <Phone className="h-4 w-4" />
              Call to Order
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="rounded-3xl bg-forest-700/60 p-5 ring-1 ring-gold-300/10 backdrop-blur"
            >
              <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-gold-300 text-forest-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-cream-50/75">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Order panel */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-cream-50 p-6 text-forest-900 shadow-soft ring-1 ring-gold-300/30">
              <div className="flex items-center justify-between">
                <p className="eyebrow">Quick order setup</p>
                <span className="chip">
                  <Clock className="h-3 w-3" /> Open now
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {['Delivery', 'Takeaway', 'No-contact'].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`rounded-xl px-3 py-2 text-xs font-semibold transition ${
                      mode === m
                        ? 'bg-forest-800 text-cream-50'
                        : 'bg-cream-100 text-forest-900 hover:bg-gold-200'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              <div className="mt-5">
                <p className="label">Pickup / arrival time</p>
                <div className="flex flex-wrap gap-2">
                  {PICKUP_TIMES.map((t) => (
                    <button
                      key={t}
                      onClick={() => setPickup(t)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition ${
                        pickup === t
                          ? 'bg-gold-300 text-forest-900 ring-gold-400'
                          : 'bg-white text-forest-900 ring-forest-800/10 hover:bg-cream-100'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/${businessData.contact.whatsappRaw}?text=${encodeURIComponent(
                    `Hi Bloom Tree, I'd like a ${mode.toLowerCase()} order — pickup ${pickup}.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a href="#menu" className="btn-secondary">
                  <QrCode className="h-4 w-4" />
                  Open Menu
                </a>
              </div>

              <p className="mt-3 text-[11px] text-forest-800/60">
                Demo flow — connects to WhatsApp or your preferred order system.
              </p>
            </div>
          </div>

          {/* Status timeline */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-forest-700/60 p-6 ring-1 ring-gold-300/10 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="eyebrow text-gold-300">Live order status</p>
                <span className="text-xs text-cream-50/70">Order #BT-2048</span>
              </div>

              <ol className="mt-5 grid gap-3 sm:grid-cols-5">
                {statusFlow.map(({ icon: Icon, title, sub, state }, i) => (
                  <li
                    key={title}
                    className={`relative rounded-2xl p-3 ring-1 transition ${
                      state === 'done'
                        ? 'bg-gold-300/15 ring-gold-300/40'
                        : state === 'active'
                          ? 'bg-cream-50 text-forest-900 ring-gold-300 shadow-soft'
                          : 'bg-forest-800/60 ring-cream-50/10'
                    }`}
                  >
                    <Icon
                      className={`mb-2 h-5 w-5 ${
                        state === 'done'
                          ? 'text-gold-300'
                          : state === 'active'
                            ? 'text-forest-800'
                            : 'text-cream-50/50'
                      }`}
                    />
                    <p
                      className={`text-xs font-semibold ${
                        state === 'idle' ? 'text-cream-50/70' : ''
                      }`}
                    >
                      {title}
                    </p>
                    <p
                      className={`text-[11px] ${
                        state === 'active'
                          ? 'text-forest-800/70'
                          : state === 'done'
                            ? 'text-cream-50/80'
                            : 'text-cream-50/50'
                      }`}
                    >
                      {sub}
                    </p>
                    {i < statusFlow.length - 1 && (
                      <span
                        className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-gold-300/40 sm:block"
                        aria-hidden
                      />
                    )}
                  </li>
                ))}
              </ol>

              <p className="mt-5 text-xs text-cream-50/65">
                Customers see live status from WhatsApp confirmation to delivery — replacing third-party-only flows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
