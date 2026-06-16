import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import Dashboard from '@/components/sections/Dashboard'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Gradient orbs de fondo global */}
      <div
        className="orb w-[600px] h-[600px] top-[-200px] left-[-200px]"
        style={{ background: 'rgba(79,124,255,0.06)' }}
      />
      <div
        className="orb w-[500px] h-[500px] top-[50vh] right-[-150px]"
        style={{ background: 'rgba(128,168,255,0.05)' }}
      />

      <Navbar />
      <Hero />
      <Features />
      <Services />
      <HowItWorks />
      <Dashboard />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
