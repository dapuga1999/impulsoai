'use client'

import { motion } from 'framer-motion'

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
}))

export default function CTAFinal() {
  return (
    <section
      id="contacto"
      className="relative py-40 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0a0f1e 0%, #0d1a3a 50%, #0a0f1e 100%)' }}
    >
      {/* Gradient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79,124,255,0.18) 0%, transparent 65%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: `rgba(${Math.random() > 0.5 ? '79,124,255' : '128,168,255'}, ${Math.random() * 0.4 + 0.2})`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79,124,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,124,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 mb-8"
          style={{ background: 'rgba(79,124,255,0.15)' }}
        >
          <motion.div
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-green-400"
          />
          <span className="text-glow text-xs font-semibold tracking-wide">Demo disponible ahora mismo</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.05]"
        >
          Tu próxima cita puede estar{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #4F7CFF, #80A8FF)' }}
          >
            llegando ahora mismo
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-lg md:text-xl mb-12 leading-relaxed"
        >
          En 30 minutos te mostramos cómo quedaría la IA
          <br className="hidden md:block" />
          configurada para tu clínica. Sin compromiso.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#"
            className="group relative px-8 py-4 rounded-2xl text-white font-bold text-base overflow-hidden shadow-blue-glow-lg hover:-translate-y-0.5 transition-transform duration-200"
            style={{ background: 'linear-gradient(135deg, #4F7CFF, #6B8FFF)' }}
          >
            {/* Shimmer effect */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                animation: 'shimmer 1.5s linear infinite',
              }}
            />
            <span className="relative">Solicitar demostración →</span>
          </a>
          <a
            href="#"
            className="px-8 py-4 rounded-2xl font-semibold text-base border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            Ver precios
          </a>
        </motion.div>

        {/* Social proof row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { label: '+120', sub: 'clínicas activas' },
            { label: '98%', sub: 'satisfacción' },
            { label: '48h', sub: 'implementación' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-2xl font-black bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #4F7CFF, #80A8FF)' }}
              >
                {s.label}
              </p>
              <p className="text-white/40 text-xs mt-0.5">{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
