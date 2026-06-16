'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    num: '01',
    title: 'Instalamos la IA',
    desc: 'Configuramos el sistema en menos de 48 horas. Sin migraciones complicadas ni cambios en tu flujo de trabajo.',
    icon: '⚡',
    color: '#4F7CFF',
  },
  {
    num: '02',
    title: 'Conectamos WhatsApp',
    desc: 'La IA se integra con tu número de WhatsApp Business existente. Los pacientes escriben igual que siempre.',
    icon: '🔗',
    color: '#8B5CF6',
  },
  {
    num: '03',
    title: 'Automatizamos procesos',
    desc: 'Configuramos flujos de citas, seguimientos y recordatorios adaptados exactamente a tu clínica.',
    icon: '⚙️',
    color: '#10B981',
  },
  {
    num: '04',
    title: 'Empiezas a recibir citas',
    desc: 'Tu agenda comienza a llenarse automáticamente. Tú ves los resultados en el dashboard en tiempo real.',
    icon: '🚀',
    color: '#F59E0B',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      if (!lineRef.current) return
      gsap.to(lineRef.current, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 60%',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F8F8FA 0%, rgba(79,124,255,0.03) 50%, #F8F8FA 100%)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 mb-6">
            <span className="text-primary text-xs font-semibold tracking-wide">Proceso · En 4 pasos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-ink mb-4 tracking-tight">
            De cero a{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #4F7CFF, #80A8FF)' }}
            >
              automatizado
            </span>
            <br />
            en 48 horas
          </h2>
          <p className="text-muted text-lg max-w-md mx-auto">
            Sin migraciones, sin complicaciones técnicas. Tu equipo no necesita formación extra.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical animada */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-black/5 hidden md:block">
            <div
              ref={lineRef}
              className="timeline-line-fill absolute inset-0 bg-gradient-to-b from-primary to-glow"
            />
          </div>

          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex gap-8 items-start relative"
              >
                {/* Step number / icon */}
                <div
                  className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-card"
                  style={{ background: `${step.color}12`, border: `1.5px solid ${step.color}25` }}
                >
                  {step.icon}
                  {/* Connector dot */}
                  <div
                    className="absolute -left-[3.5rem] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white hidden md:block"
                    style={{ background: step.color }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-black tracking-widest"
                      style={{ color: step.color }}
                    >
                      {step.num}
                    </span>
                    <h3 className="text-xl font-bold text-ink tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-muted text-base leading-relaxed max-w-md">{step.desc}</p>

                  {/* Progress indicator */}
                  {i < STEPS.length - 1 && (
                    <div
                      className="mt-4 h-px max-w-xs"
                      style={{ background: `linear-gradient(90deg, ${step.color}30, transparent)` }}
                    />
                  )}
                </div>

                {/* Step badge */}
                <div
                  className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full text-white text-sm font-black flex-shrink-0"
                  style={{ background: step.color }}
                >
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 glass rounded-2xl px-6 py-4 border border-white/60 shadow-card">
            <span className="text-2xl">⏱️</span>
            <div className="text-left">
              <p className="text-ink text-sm font-bold">Activo en 48 horas</p>
              <p className="text-muted text-xs">Sin interrumpir tu clínica ni un día</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
