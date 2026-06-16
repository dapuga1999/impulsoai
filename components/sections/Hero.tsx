'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Datos de los 12 elementos que explotan ─────────── */
const EXPLODE_ITEMS = [
  { id: 'chat-1',     label: 'Hola, ¿tienen hueco mañana?',        sub: '',                              icon: '💬', tx: -360, ty: -130, rot: -6 },
  { id: 'cita-1',     label: '✓ Cita confirmada',                   sub: 'Lunes · 16:30h',                icon: '📅', tx:  300, ty: -200, rot:  5 },
  { id: 'metric-1',   label: '47 nuevas citas',                     sub: 'este mes',                      icon: '📈', tx:  360, ty:   70, rot:  3 },
  { id: 'reminder-1', label: 'Recordatorio enviado',                sub: 'Tu cita es mañana 10:00h',      icon: '🔔', tx: -280, ty:  170, rot: -4 },
  { id: 'lead-1',     label: 'Nuevo paciente',                      sub: 'María G. — Ortodoncia',         icon: '👤', tx:  -80, ty: -300, rot:  4 },
  { id: 'whatsapp-1', label: 'WhatsApp IA activo',                  sub: '24/7 sin intervención',         icon: '📱', tx:  190, ty:  280, rot: -3 },
  { id: 'recover-1',  label: 'Paciente recuperado',                 sub: '3 meses sin visita → cita',    icon: '🔄', tx: -400, ty:   50, rot:  7 },
  { id: 'time-1',     label: '18h ahorradas',                       sub: 'esta semana',                   icon: '⏱️', tx:   90, ty: -320, rot: -5 },
  { id: 'call-1',     label: 'Llamada atendida por IA',             sub: 'Duración: 1m 32s',              icon: '📞', tx:  330, ty:  -70, rot:  4 },
  { id: 'stars-1',    label: '⭐⭐⭐⭐⭐',                          sub: '"Atención perfecta" — Carlos M.', icon: '',  tx: -170, ty:  310, rot: -3 },
  { id: 'cancel-1',   label: 'Cita reprogramada',                   sub: 'Automáticamente en 2s',         icon: '🔁', tx:  250, ty:  200, rot: -6 },
  { id: 'ai-badge',   label: 'IA activa · 0 errores',              sub: 'Sistema operativo',             icon: '🤖', tx: -230, ty: -210, rot:  5 },
]

function ExplodeCard({ item }: { item: typeof EXPLODE_ITEMS[0] }) {
  return (
    <div data-explode={item.id} className="explode-item" style={{ zIndex: 20 }}>
      <div className="glass rounded-2xl px-3 py-2.5 shadow-card flex items-start gap-2.5 min-w-[160px] max-w-[220px]" style={{ border: '1px solid rgba(79,124,255,0.15)' }}>
        {item.icon && <span className="text-lg leading-none mt-0.5 flex-shrink-0">{item.icon}</span>}
        <div>
          <p className="text-ink text-xs font-semibold leading-tight">{item.label}</p>
          {item.sub && <p className="text-muted text-[10px] leading-tight mt-0.5">{item.sub}</p>}
        </div>
      </div>
    </div>
  )
}

function PhoneMockup() {
  return (
    <div className="phone-body relative mx-auto" style={{ width: 220, height: 460 }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#070b16] rounded-b-2xl z-10" style={{ width: 72, height: 22 }} />
      <div className="absolute inset-0 flex flex-col p-4 pt-7 gap-3">
        <div className="flex justify-between items-center">
          <span className="text-[#80A8FF] text-[9px] font-bold tracking-widest uppercase">ImpulsoAI</span>
          <div className="flex gap-1 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-dot-blink" />
            <span className="text-[#64748B] text-[9px]">LIVE</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-4 gap-1">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-1" style={{ background: 'rgba(79,124,255,0.15)', border: '1px solid rgba(79,124,255,0.3)' }}>
            <span className="text-[#80A8FF] text-2xl font-black tracking-tight">24</span>
          </div>
          <span className="text-[#80A8FF] text-[8px] font-bold tracking-widest uppercase">Atención inteligente</span>
          <span className="text-[#64748B] text-[8px]">para clínicas dentales</span>
        </div>
        <div className="space-y-1.5">
          {[
            { label: 'Llamadas atendidas', value: '98%',  color: '#4F7CFF' },
            { label: 'Citas gestionadas',  value: '137',  color: '#10B981' },
            { label: 'Tiempo ahorrado',    value: '18h',  color: '#F59E0B' },
          ].map((m) => (
            <div key={m.label} className="flex items-center justify-between rounded-lg px-2.5 py-1.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="text-[#64748B] text-[8px]">{m.label}</span>
              <span className="text-[10px] font-bold" style={{ color: m.color }}>{m.value}</span>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-xl p-2.5 flex flex-col justify-end gap-1" style={{ background: 'rgba(79,124,255,0.05)', border: '1px solid rgba(79,124,255,0.1)' }}>
          <span className="text-[#80A8FF] text-[7px] font-semibold uppercase tracking-wider">Actividad IA</span>
          <div className="flex items-end gap-0.5 h-8">
            {[30, 55, 40, 70, 50, 85, 65, 90, 75, 100].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `rgba(79,124,255,${0.3 + (h / 100) * 0.7})` }} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 h-1/3 rounded-t-[40px] pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)' }} />
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=450%',
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      })

      // 0→0.20 — Texto desaparece
      tl.to('.hero-text', { opacity: 0, y: -30, duration: 0.20, ease: 'power2.in' }, 0)

      // 0.12→0.25 — Phone glow + orbit ring aparecen
      tl.to('.phone-glow',  { opacity: 1, scale: 1.6, duration: 0.13, ease: 'power1.out' }, 0.12)
      tl.to('.orbit-outer', { opacity: 1, duration: 0.10 }, 0.14)

      // 0.25→0.88 — Elementos explotan desde el centro del teléfono
      EXPLODE_ITEMS.forEach((item, i) => {
        const start = 0.25 + i * 0.035
        tl.fromTo(
          `[data-explode="${item.id}"]`,
          { opacity: 0, scale: 0, x: 0, y: 0, rotation: 0 },
          { opacity: 1, scale: 1, x: item.tx, y: item.ty, rotation: item.rot, duration: 0.18, ease: 'back.out(1.4)' },
          start
        )
      })

      // 0.86→1 — Zoom suave + tagline
      tl.to('.phone-scene', { scale: 1.08, duration: 0.12, ease: 'power1.out' }, 0.86)
      tl.to('.explode-tagline', { opacity: 1, y: 0, duration: 0.10, ease: 'power2.out' }, 0.90)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero-pin" className="relative min-h-screen overflow-hidden">
      {/* Background radial */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 60% -5%, rgba(79,124,255,0.12) 0%, transparent 70%)' }} />

      {/* ── TEXTO (izquierda, siempre visible hasta el scroll) ── */}
      <div className="hero-text absolute inset-0 flex items-center z-20 pointer-events-none">
        <div className="max-w-6xl mx-auto w-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl pointer-events-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 glass border border-primary/20 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-semibold tracking-wide">Para clínicas dentales · IA especializada</span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-ink mb-5 leading-[1.05] tracking-tight">
              Tu clínica descansa.
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #4F7CFF 0%, #80A8FF 100%)' }}>
                La atención no.
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-md">
              Atiende llamadas, WhatsApp y citas automáticamente{' '}
              <strong className="text-ink font-semibold">las 24 horas del día</strong>.
            </p>

            {/* Botones */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a href="https://wa.me/34645466239?text=Hola%2C%20quiero%20una%20demo%20de%20ImpulsoAI%20para%20mi%20cl%C3%ADnica%20dental." target="_blank" rel="noopener noreferrer" className="btn-shimmer px-7 py-3.5 rounded-xl text-white text-sm font-bold shadow-blue-glow-lg hover:-translate-y-0.5 transition-transform duration-200">
                Reservar demo →
              </a>
              <a href="#como-funciona" className="px-7 py-3.5 rounded-xl text-ink text-sm font-semibold glass border border-black/10 hover:-translate-y-0.5 transition-transform duration-200 hover:shadow-card">
                Ver cómo funciona
              </a>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2.5">
              {['✓ Atención 24/7', '✓ WhatsApp Inteligente', '✓ Gestión automática de citas'].map((t) => (
                <span key={t} className="text-muted text-xs font-medium flex items-center gap-1.5 bg-white/60 border border-black/5 rounded-full px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── TELÉFONO CENTRADO (siempre visible) + EXPLOSIÓN ── */}
      <div className="phone-scene absolute inset-0 flex items-center justify-center pointer-events-none">

        {/* Glow */}
        <div className="phone-glow absolute opacity-0" style={{ width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,124,255,0.35) 0%, transparent 70%)', filter: 'blur(20px)' }} />

        {/* Ambient glow visible desde el inicio */}
        <div className="absolute opacity-40" style={{ width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,124,255,0.2) 0%, transparent 70%)', filter: 'blur(30px)' }} />

        {/* Orbit ring exterior (aparece con el scroll) */}
        <div className="orbit-ring orbit-outer absolute opacity-0" style={{ width: 420, height: 420 }}>
          <svg className="w-full h-full animate-ring-rotate" viewBox="0 0 420 420" fill="none">
            <defs>
              <path id="orbitTextPath" d="M210,210 m-185,0 a185,185 0 1,1 370,0 a185,185 0 1,1 -370,0" />
            </defs>
            <circle cx="210" cy="210" r="185" stroke="rgba(79,124,255,0.25)" strokeWidth="1" strokeDasharray="6 4" />
            <text fill="rgba(79,124,255,0.55)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="4">
              <textPath href="#orbitTextPath">IMPULSOAI • INTELIGENCIA ARTIFICIAL • ATENCIÓN 24/7 • CLÍNICAS DENTALES • </textPath>
            </text>
          </svg>
        </div>

        {/* Orbit ring interior */}
        <div className="orbit-ring absolute" style={{ width: 320, height: 320 }}>
          <svg className="w-full h-full animate-ring-rotate-reverse" viewBox="0 0 320 320" fill="none" style={{ opacity: 0.15 }}>
            <circle cx="160" cy="160" r="145" stroke="rgba(128,168,255,0.4)" strokeWidth="0.5" strokeDasharray="3 6" />
          </svg>
        </div>

        {/* Teléfono + elementos de explosión */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 animate-float"
          style={{ animationDuration: '4s' }}
        >
          {EXPLODE_ITEMS.map((item) => (
            <ExplodeCard key={item.id} item={item} />
          ))}
          <PhoneMockup />
        </motion.div>

        {/* Tagline final */}
        <div
          className="explode-tagline absolute bottom-24 left-1/2 text-center opacity-0"
          style={{ transform: 'translateX(-50%) translateY(20px)' }}
        >
          <p className="text-ink text-xl font-bold tracking-tight">
            La IA se expande por{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #4F7CFF, #80A8FF)' }}>
              toda tu clínica
            </span>
          </p>
          <p className="text-muted text-sm mt-1.5">Automatización completa · En 48 horas</p>
        </div>
      </div>

    </section>
  )
}
