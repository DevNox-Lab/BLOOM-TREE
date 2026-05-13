import React, { useEffect, useState } from 'react'
import { MessageCircle, Phone, UtensilsCrossed } from 'lucide-react'
import { businessData } from '../data/businessData'

export default function MobileActionBar() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-40 md:hidden transition-all duration-300 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
      }`}
    >
      <div className="grid grid-cols-3 gap-2 rounded-2xl bg-forest-800/95 p-2 shadow-soft ring-1 ring-gold-300/20 backdrop-blur">
        <a
          href="#delivery"
          className="flex items-center justify-center gap-1.5 rounded-xl bg-gold-300 px-2 py-2.5 text-xs font-semibold text-forest-900"
        >
          <UtensilsCrossed className="h-4 w-4" />
          Order
        </a>
        <a
          href={`https://wa.me/${businessData.contact.whatsappRaw}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-2 py-2.5 text-xs font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href={`tel:${businessData.contact.phoneTel}`}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-cream-50 px-2 py-2.5 text-xs font-semibold text-forest-900"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
      </div>
    </div>
  )
}
