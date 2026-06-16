'use client'

import { motion } from 'framer-motion'

const FEATURES = [
  {
    label: 'Llamadas',
    title: 'Nunca más una llamada perdida',
    desc: 'La IA atiende cada llamada de tus pacientes en tiempo real, resuelve dudas, confirma citas y transfiere si es necesario. Disponible cuando tu equipo no puede.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.25 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    stat: '98%',
    statLabel: 'llamadas respondidas',
    color: '#4F7CFF',
  },
  {
    label: 'WhatsApp',
    title: 'WhatsApp automatizado con IA',
    desc: 'Responde mensajes de WhatsApp al instante. La IA interpreta el contexto, confirma citas, envía recordatorios y califica leads sin intervención humana.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
      </svg>
    ),
    stat: '< 5s',
    statLabel: 'tiempo de respuesta',
    color: '#10B981',
  },
  {
    label: 'Agenda',
    title: 'Gestión inteligente de la agenda',
    desc: 'La IA sincroniza con tu sistema de citas, ocupa huecos automáticamente, reprograma cancelaciones y envía confirmaciones. Tu agenda siempre llena.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
      </svg>
    ),
    stat: '+40%',
    statLabel: 'ocupación de agenda',
    color: '#8B5CF6',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
}

export default function Features() {
  return (
    <section className="py-32 px-6 relative" id="features">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 mb-6">
            <span className="text-primary text-xs font-semibold tracking-wide">Una IA que trabaja mientras tu equipo descansa</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-ink mb-4 tracking-tight">
            Automatización total,{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #4F7CFF, #80A8FF)' }}
            >
              desde el primer día
            </span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Tres canales. Un solo sistema. Cero intervención manual.
          </p>
        </motion.div>

        {/* Feature rows */}
        <div className="space-y-20">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}
            >
              {/* Text side */}
              <div className="flex-1">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{ background: `${f.color}15`, color: f.color }}
                >
                  {f.label}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-ink mb-4 tracking-tight leading-tight">
                  {f.title}
                </h3>
                <p className="text-muted text-base leading-relaxed mb-8 max-w-md">
                  {f.desc}
                </p>
                {/* Stat */}
                <div className="flex items-end gap-2">
                  <span
                    className="text-5xl font-black tracking-tighter"
                    style={{ color: f.color }}
                  >
                    {f.stat}
                  </span>
                  <span className="text-muted text-sm mb-2">{f.statLabel}</span>
                </div>
              </div>

              {/* Illustration side */}
              <div className="flex-1 flex items-center justify-center w-full">
                <div
                  className="w-full max-w-xs md:max-w-sm rounded-3xl glass border border-white/60 shadow-card flex flex-col items-center justify-center relative overflow-hidden group hover:shadow-card-hover transition-shadow duration-300 py-12 md:py-0 md:aspect-square"
                >
                  {/* Background glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${f.color}10 0%, transparent 70%)` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ background: `${f.color}15`, color: f.color }}
                  >
                    {f.icon}
                  </div>

                  {/* Stat */}
                  <div className="mt-4 text-center">
                    <p className="font-black text-2xl" style={{ color: f.color }}>{f.stat}</p>
                    <p className="text-muted text-xs mt-0.5">{f.statLabel}</p>
                  </div>

                  {/* Floating mini cards — solo desktop */}
                  <div
                    className="hidden md:block absolute top-6 right-6 glass rounded-xl px-3 py-2 shadow-card animate-float"
                    style={{ animationDelay: `${i * 0.4}s`, animationDuration: '3s' }}
                  >
                    <p className="text-[10px] font-bold text-ink">{f.stat}</p>
                    <p className="text-[9px] text-muted">{f.statLabel}</p>
                  </div>

                  <div
                    className="hidden md:block absolute bottom-6 left-6 glass rounded-xl px-3 py-2 shadow-card animate-float"
                    style={{ animationDelay: `${i * 0.4 + 1}s`, animationDuration: '3.5s' }}
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-dot-blink" />
                      <p className="text-[9px] font-semibold text-ink">IA activa</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
