'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: '¿Cuánto tiempo tarda la implementación?',
    a: 'En 48 horas tendrás el sistema activo. No necesitas migrar datos ni cambiar ningún proceso. Nos conectamos a tus herramientas existentes.',
  },
  {
    q: '¿Necesito contratar personal técnico?',
    a: 'No. DentalAI no requiere ningún conocimiento técnico. Tu equipo sigue trabajando igual. Nosotros gestionamos todo el backend.',
  },
  {
    q: '¿La IA puede responder en nombre de mi clínica?',
    a: 'Sí. Entrenamos la IA con el nombre, estilo de comunicación, servicios y precios de tu clínica. Los pacientes no saben que hablan con IA a menos que quieras indicarlo.',
  },
  {
    q: '¿Qué pasa si la IA no puede resolver una consulta?',
    a: 'Si la consulta está fuera del ámbito de la IA, el sistema transfiere automáticamente al médico o recepcionista apropiado con el contexto completo de la conversación.',
  },
  {
    q: '¿Se integra con mi software de gestión de clínica?',
    a: 'Sí. Tenemos integración nativa con Clinic Cloud, Gesden, Maxident, Dentix y más. Si usas otro sistema, lo evaluamos y lo conectamos.',
  },
  {
    q: '¿Cómo se protegen los datos de los pacientes?',
    a: 'Cumplimos con el RGPD y la LOPD. Los datos se almacenan en servidores europeos. Firmamos un DPA con cada clínica y nunca compartimos datos con terceros.',
  },
  {
    q: '¿Puedo probarlo antes de contratar?',
    a: 'Sí. Ofrecemos una demo personalizada de 30 minutos donde puedes ver la IA funcionando con los datos reales de tu clínica. Sin compromiso.',
  },
]

function FAQItem({ faq, isOpen, onClick }: {
  faq: typeof FAQS[0]
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer"
      style={{
        background: isOpen ? 'rgba(79,124,255,0.04)' : 'rgba(255,255,255,0.7)',
        border: isOpen ? '1px solid rgba(79,124,255,0.2)' : '1px solid rgba(255,255,255,0.6)',
        backdropFilter: 'blur(20px)',
      }}
      onClick={onClick}
    >
      <button className="w-full flex items-center justify-between px-6 py-5 text-left">
        <span className="text-ink font-semibold text-sm md:text-base pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
          style={{
            background: isOpen ? '#4F7CFF' : 'rgba(15,23,42,0.08)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 2v8M2 6h8"
              stroke={isOpen ? 'white' : '#0F172A'}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-5">
              <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 mb-6">
            <span className="text-primary text-xs font-semibold tracking-wide">Preguntas frecuentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-ink mb-4 tracking-tight">
            Todo lo que necesitas{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #4F7CFF, #80A8FF)' }}
            >
              saber
            </span>
          </h2>
          <p className="text-muted text-lg">
            Si tienes más dudas, estamos a un WhatsApp de distancia.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIdx === i}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-muted text-sm">
            ¿No encuentras tu respuesta?{' '}
            <a href="#contacto" className="text-primary font-semibold hover:underline">
              Habla con nuestro equipo →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
