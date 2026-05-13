import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SocialAdsConversionSection from './components/SocialAdsConversionSection'
import TrustExperienceSection from './components/TrustExperienceSection'
import AmbienceGallery from './components/AmbienceGallery'
import DeliveryTakeawaySection from './components/DeliveryTakeawaySection'
import MenuSection from './components/MenuSection'
import ReservationSection from './components/ReservationSection'
import LiveMusicSection from './components/LiveMusicSection'
import DessertConfectionerySection from './components/DessertConfectionerySection'
import OffersAdLandingSection from './components/OffersAdLandingSection'
import SocialMediaSection from './components/SocialMediaSection'
import FamilyStudentsTouristsSection from './components/FamilyStudentsTouristsSection'
import ReviewsSection from './components/ReviewsSection'
import AccessibilityConvenienceSection from './components/AccessibilityConvenienceSection'
import LocationSection from './components/LocationSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MobileActionBar from './components/MobileActionBar'

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-forest-900">
      <Header />
      <main>
        <Hero />
        <SocialAdsConversionSection />
        <TrustExperienceSection />
        <AmbienceGallery />
        <DeliveryTakeawaySection />
        <MenuSection />
        <ReservationSection />
        <LiveMusicSection />
        <DessertConfectionerySection />
        <OffersAdLandingSection />
        <SocialMediaSection />
        <FamilyStudentsTouristsSection />
        <ReviewsSection />
        <AccessibilityConvenienceSection />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  )
}
