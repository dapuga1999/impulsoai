'use client'

import { motion } from 'framer-motion'

const SERVICES = [
  {
    icon: '📞',
    title: 'Atención IA 24/7',
    desc: 'Nunca pierdas una llamada. La IA atiende, responde y gestiona cada contacto de tus pacientes a cualquier hora.',
    color: '#4F7CFF',
  },
  {
    icon: '🎯',
    title: 'Captación de pacientes',
    desc: 'Convierte cada visita a tu web o mensaje en una cita real. La IA califica, engancha y cierra la reserva.',
    color: '#8B5CF6',
  },
  {
    icon: '🔄',
    title: 'Seguimientos automáticos',
    desc: 'Recupera pacientes indecisos con secuencias de mensajes personalizadas. El 40% vuelve sin esfuerzo manual.',
    color: '#10B981',
  },
  {
    icon: '🔔',
    title: 'Recordatorios inteligentes',
    desc: 'Reduce ausencias hasta un 70% con recordatorios automáticos por WhatsApp y SMS adaptados a cada paciente.',
    color: '#F59E0B',
  },
  {
    icon: '🤖',
    title: 'Asistente virtual',
    desc: 'Responde preguntas frecuentes, explica tratamientos, precios y resuelve dudas en tiempo real, 24h al día.',
    color: '#EF4444',
  },
  {
    icon: '📊',
    title: 'Dashboard de métricas',
    desc: 'Controla llamadas, citas, conversiones y tiempo ahorrado desde un panel claro. Toma decisiones con datos.',
    color: '#06B6D4',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export default function Services() {
  return (
    <section id="servicios" className="py-32 px-6 relative">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79,124,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,124,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 mb-6">
            <span className="text-primary text-xs font-semibold tracking-wide">Todo incluido · Sin complicaciones</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-ink mb-4 tracking-tight">
            Todo lo que necesita{' '}
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #4F7CFF, #80A8FF)' }}
            >
              tu clínica
            </span>
          </h2>
          <p className="text-muted text-lg max-w-md mx-auto">
            Seis módulos integrados que trabajan juntos desde el primer día.
          </p>
        </motion.div>

        {/* Grid de cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl p-7 cursor-default overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow: '0 4px 24px rgba(15,23,42,0.05)',
              }}
            >
              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${s.color}08, transparent)`,
                  border: `1px solid ${s.color}30`,
                }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${s.color}12` }}
              >
                {s.icon}
              </div>

              {/* Content */}
              <h3 className="text-ink text-lg font-bold mb-2.5 tracking-tight">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>

              {/* Arrow on hover */}
              <div
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0"
                style={{ color: s.color }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
