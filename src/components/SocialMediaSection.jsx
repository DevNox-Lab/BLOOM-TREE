import React from 'react'
import { motion } from 'framer-motion'
import {
  Instagram,
  Facebook,
  MessageCircle,
  QrCode,
  Heart,
  ArrowUpRight,
  Coffee,
  Cake,
  Music2,
  Sun,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { businessData } from '../data/businessData'
import images from '../data/images'
import SafeImage from './ui/SafeImage'

const igPosts = [
  { icon: Coffee, tag: 'Coffee', hue: 'from-gold-300 to-cream-200', img: images.social[0] },
  { icon: Cake, tag: 'Dessert', hue: 'from-blush-200 to-gold-300', img: images.social[1] },
  { icon: Music2, tag: 'Live music', hue: 'from-forest-400 to-forest-700', img: images.social[2] },
  { icon: Sun, tag: 'Brunch', hue: 'from-gold-200 to-blush-100', img: images.social[3] },
]

export default function SocialMediaSection() {
  return (
    <section className="section bg-cream-50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Social media"
          title="Turn social visitors into direct customers."
          subtitle="Instagram, Facebook, WhatsApp, and the QR menu all point here — and convert."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Instagram preview */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl bg-white p-6 ring-1 ring-forest-800/5 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-tr from-blush-200 via-gold-300 to-forest-400 text-white">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-forest-900">
                    {businessData.social.instagramHandle}
                  </p>
                  <p className="text-xs text-forest-800/60">
                    {businessData.social.instagramFollowers} followers · El Jadida
                  </p>
                </div>
              </div>
              <a
                href={businessData.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost !px-3 !py-2 text-xs"
              >
                Follow
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {igPosts.map(({ icon: Icon, tag, hue, img }, i) => (
                <div
                  key={tag}
                  className={`group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${hue} ring-1 ring-forest-800/10`}
                >
                  <SafeImage
                    src={img}
                    alt={tag}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-forest-900/55 via-transparent to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-0 grid place-items-center opacity-30 transition-opacity group-hover:opacity-0">
                    <Icon className="h-7 w-7 text-cream-50" />
                  </div>
                  <span className="absolute bottom-2 left-2 rounded-full bg-forest-900/85 px-2 py-0.5 text-[10px] font-semibold text-cream-50">
                    {tag}
                  </span>
                  <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-cream-50/80 px-1.5 py-0.5 text-[10px] font-semibold text-forest-900 backdrop-blur">
                    <Heart className="h-3 w-3 fill-forest-900 text-forest-900" />
                    {[238, 412, 187, 326][i]}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-forest-800/60">
              Embedded-style preview · drives traffic to menu, delivery, and reservations.
            </p>
          </motion.div>

          {/* Side cards */}
          <div className="lg:col-span-5 grid gap-4">
            <a
              href={businessData.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-3xl bg-[#1877F2] p-5 text-white shadow-soft"
            >
              <div className="flex items-center gap-3">
                <Facebook className="h-7 w-7" />
                <div>
                  <p className="font-semibold">Facebook promo</p>
                  <p className="text-xs text-white/85">
                    Bloom Tree · {businessData.social.facebookFollowers} followers
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-12" />
            </a>

            <a
              href={`https://wa.me/${businessData.contact.whatsappRaw}?text=${encodeURIComponent('Hi Bloom Tree!')}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-3xl bg-[#25D366] p-5 text-white shadow-soft"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="h-7 w-7" />
                <div>
                  <p className="font-semibold">WhatsApp order card</p>
                  <p className="text-xs text-white/90">
                    {businessData.contact.whatsapp}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-12" />
            </a>

            <div className="rounded-3xl bg-forest-800 p-5 text-cream-50 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="eyebrow text-gold-300">QR menu preview</p>
                  <p className="mt-1 font-display text-lg">
                    Scan to open the live menu
                  </p>
                  <p className="text-xs text-cream-50/70">
                    Replaces the static PDF — instant updates, no app needed.
                  </p>
                </div>
                <div className="grid h-20 w-20 place-items-center rounded-2xl bg-cream-50 text-forest-900 ring-1 ring-gold-300/40">
                  <QrCode className="h-14 w-14" />
                </div>
              </div>
              <a
                href="#menu"
                className="mt-4 inline-flex items-center text-xs font-semibold text-gold-300 hover:text-gold-200"
              >
                Open digital menu →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 rounded-3xl bg-gold-300 p-6 text-forest-900 shadow-soft sm:flex-row sm:items-center">
          <p className="font-display text-xl sm:text-2xl">
            Follow Bloom Tree — then send every visitor here to convert.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={businessData.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Instagram className="h-4 w-4" /> Follow Instagram
            </a>
            <a
              href={businessData.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="btn bg-forest-900 text-cream-50 hover:bg-forest-800"
            >
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
