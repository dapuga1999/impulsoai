'use client'

import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    name: 'Dra. Carmen Ruiz',
    role: 'Directora — Clínica Dental Ruiz, Valencia',
    avatar: 'CR',
    color: '#4F7CFF',
    text: 'Implementamos DentalAI en octubre y en el primer mes recuperamos 23 pacientes que llevaban más de 6 meses sin visitar. El ROI fue inmediato.',
    stars: 5,
  },
  {
    name: 'Dr. Javier Moreno',
    role: 'Propietario — Clínica Moreno Dental, Madrid',
    avatar: 'JM',
    color: '#8B5CF6',
    text: 'Antes perdíamos entre 15 y 20 llamadas al día fuera de horario. Ahora la IA las gestiona todas y confirma citas automáticamente. Increíble.',
    stars: 5,
  },
  {
    name: 'Dra. Laura Sánchez',
    role: 'Ortodoncista — Centro Dental Sánchez, Barcelona',
    avatar: 'LS',
    color: '#10B981',
    text: 'Los recordatorios automáticos redujeron las ausencias un 68%. Mi equipo ahora se dedica a atender pacientes, no a hacer llamadas manuales.',
    stars: 5,
  },
  {
    name: 'Dr. Roberto García',
    role: 'CEO — Grupo Dental García, Sevilla',
    avatar: 'RG',
    color: '#F59E0B',
    text: 'Tenemos 4 clínicas y la gestión era un caos. DentalAI centralizó todo: WhatsApp, llamadas y agenda. Ahora todo va solo.',
    stars: 5,
  },
  {
    name: 'Dra. Patricia Vega',
    role: 'Fundadora — Clínica Vega Implantes, Bilbao',
    avatar: 'PV',
    color: '#EF4444',
    text: 'La configuración tardó menos de 48 horas. A la semana ya teníamos 12 citas nuevas generadas completamente por la IA. Flipé.',
    stars: 5,
  },
  {
    name: 'Dr. Antonio Flores',
    role: 'Director — Flores Dental Center, Málaga',
    avatar: 'AF',
    color: '#06B6D4',
    text: 'El chatbot responde preguntas sobre precios, seguros y tratamientos mejor que muchas recepcionistas. Los pacientes lo adoran.',
    stars: 5,
  },
]

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div
      className="flex-shrink-0 w-80 rounded-2xl p-6 mr-5"
      style={{
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.6)',
        boxShadow: '0 4px 24px rgba(15,23,42,0.06)',
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: t.stars }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm">★</span>
        ))}
      </div>

      {/* Text */}
      <p className="text-ink text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ background: t.color }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-ink text-sm font-semibold leading-tight">{t.name}</p>
          <p className="text-muted text-xs leading-tight mt-0.5">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 mb-6">
            <span className="text-primary text-xs font-semibold tracking-wide">+120 clínicas dentales confían en nosotros</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-ink mb-4 tracking-tight">
            Resultados reales,{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #4F7CFF, #80A8FF)' }}
            >
              clínicas reales
            </span>
          </h2>
          <p className="text-muted text-lg">
            No son demos. Son dentistas que ya tienen la IA trabajando para ellos.
          </p>
        </motion.div>
      </div>

      {/* Marquee track único */}
      <div className="relative overflow-hidden">
        <div
          className="flex animate-marquee"
          style={{ width: 'max-content' }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(90deg, #F8F8FA, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(-90deg, #F8F8FA, transparent)' }} />
      </div>
    </section>
  )
}
