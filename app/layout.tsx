import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ImpulsoAI — Inteligencia Artificial para Clínicas Dentales',
  description:
    'Automatiza la atención al paciente, gestión de citas y seguimientos de tu clínica dental con IA. Disponible 24/7.',
  keywords: ['IA dental', 'automatización clínica', 'chatbot dental', 'citas dentista IA'],
  openGraph: {
    title: 'ImpulsoAI — Tu clínica descansa. La atención no.',
    description: 'Atiende llamadas, WhatsApp y citas automáticamente las 24h.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <div id="scroll-progress" />
        <div id="mouse-glow" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
