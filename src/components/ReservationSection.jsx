import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  CalendarDays,
  Clock,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { businessData } from '../data/businessData'

const SEATING = [
  'Indoor table',
  'Outdoor seating',
  'Quiet table',
  'Romantic table',
  'Family table',
  'Group table',
  'Live music seating',
]

const OCCASIONS = [
  'Breakfast',
  'Brunch',
  'Lunch',
  'Dinner',
  'Dessert date',
  'Family meal',
  'Student gathering',
  'Live music night',
]

const initial = {
  name: '',
  phone: '',
  date: '',
  time: '20:00',
  guests: '2',
  seating: 'Romantic table',
  occasion: 'Dinner',
  notes: '',
}

export default function ReservationSection() {
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservations" className="section bg-cream-100">
      <div className="container-x">
        <SectionHeading
          eyebrow="Reservations"
          title="Reserve your evening at Bloom Tree."
          subtitle="Evenings from 6 PM to 11 PM are high-demand windows — reserve ahead for dinner, live music, family tables, or group visits."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white p-6 ring-1 ring-forest-800/5 shadow-soft sm:p-8"
            >
              {submitted ? (
                <div className="grid place-items-center py-10 text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-forest-800 text-gold-300">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-forest-900">
                    Reservation request received
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-forest-800/70">
                    Thank you, {form.name || 'guest'}. In the live version,
                    Bloom Tree confirms your {form.occasion.toLowerCase()} for{' '}
                    {form.guests} on {form.date || '—'} at {form.time}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm(initial)
                    }}
                    className="btn-secondary mt-6"
                  >
                    Make another reservation
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="label">Full name</label>
                      <input
                        required
                        value={form.name}
                        onChange={onChange('name')}
                        className="input"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="label">Phone number</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={onChange('phone')}
                        className="input"
                        placeholder="+212 6 …"
                      />
                    </div>
                    <div>
                      <label className="label">Date</label>
                      <input
                        required
                        type="date"
                        value={form.date}
                        onChange={onChange('date')}
                        className="input"
                      />
                    </div>
                    <div>
                      <label className="label">Time</label>
                      <input
                        required
                        type="time"
                        value={form.time}
                        onChange={onChange('time')}
                        className="input"
                      />
                    </div>
                    <div>
                      <label className="label">Number of guests</label>
                      <select
                        value={form.guests}
                        onChange={onChange('guests')}
                        className="input"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? 'guest' : 'guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label">Seating preference</label>
                      <select
                        value={form.seating}
                        onChange={onChange('seating')}
                        className="input"
                      >
                        {SEATING.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="label">Occasion</label>
                      <div className="flex flex-wrap gap-2">
                        {OCCASIONS.map((o) => (
                          <button
                            type="button"
                            key={o}
                            onClick={() => setForm((f) => ({ ...f, occasion: o }))}
                            className={`rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition ${
                              form.occasion === o
                                ? 'bg-forest-800 text-cream-50 ring-forest-800'
                                : 'bg-cream-50 text-forest-900 ring-forest-800/10 hover:bg-gold-200'
                            }`}
                          >
                            {o}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="label">Special request</label>
                      <textarea
                        rows={3}
                        value={form.notes}
                        onChange={onChange('notes')}
                        className="input resize-none"
                        placeholder="Birthday cake, romantic setup, high chair, accessibility…"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-forest-800/60">
                      Frontend demo · No data is stored.
                    </p>
                    <button type="submit" className="btn-primary">
                      <CheckCircle2 className="h-4 w-4" />
                      Confirm Reservation
                    </button>
                  </div>
                </>
              )}
            </motion.form>
          </div>

          {/* Side info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="card-dark">
              <p className="eyebrow text-gold-300">Peak windows</p>
              <h3 className="mt-2 font-display text-2xl">
                6 PM – 11 PM — book early
              </h3>
              <p className="mt-2 text-sm text-cream-50/75">
                Live music & weekend evenings sell out tables. Reserve ahead
                for romantic, family, or group seating.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <Info icon={CalendarDays} label="Open" value="Daily" />
                <Info icon={Clock} label="Hours" value="7 – 23:30" />
                <Info icon={Users} label="Groups" value="Welcome" />
              </div>
            </div>

            <div className="card">
              <p className="eyebrow">Prefer to chat?</p>
              <p className="mt-1 text-sm text-forest-800/70">
                Reach Bloom Tree directly on WhatsApp for instant confirmation.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/${businessData.contact.whatsappRaw}?text=${encodeURIComponent('Hi Bloom Tree, I would like to make a reservation.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={`tel:${businessData.contact.phoneTel}`}
                  className="btn-secondary"
                >
                  Call to reserve
                </a>
              </div>
            </div>

            <div className="card flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-300 text-forest-900">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-forest-900">
                  Romantic & live music tables
                </p>
                <p className="text-sm text-forest-800/70">
                  Reserve a candle-lit seat near the musician on weekend nights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl bg-forest-700/60 p-3 ring-1 ring-cream-50/5">
      <Icon className="mx-auto h-4 w-4 text-gold-300" />
      <p className="mt-1 text-[10px] uppercase tracking-wider text-cream-50/60">
        {label}
      </p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  )
}
