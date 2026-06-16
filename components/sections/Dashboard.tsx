'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const KPIS = [
  { label: 'Citas generadas', value: 247, suffix: '', color: '#4F7CFF', icon: '📅' },
  { label: 'Conversaciones IA', value: 1834, suffix: '', color: '#8B5CF6', icon: '💬' },
  { label: 'Pacientes recuperados', value: 89, suffix: '', color: '#10B981', icon: '🔄' },
  { label: 'Horas ahorradas', value: 312, suffix: 'h', color: '#F59E0B', icon: '⏱️' },
]

const CHART_DATA = [42, 58, 45, 70, 63, 82, 75, 91, 84, 97, 88, 100]
const MONTHS = ['En', 'Fe', 'Ma', 'Ab', 'Ma', 'Ju', 'Ju', 'Ag', 'Se', 'Oc', 'No', 'Di']

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          gsap.to({ val: 0 }, {
            val: target,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: function () {
              setDisplay(Math.round(this.targets()[0].val))
            },
          })
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {display.toLocaleString('es-ES')}
      {suffix}
    </span>
  )
}

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-32 px-6 relative overflow-hidden">
      {/* Dark gradient bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #F8F8FA 0%, #0F172A 20%, #0F172A 80%, #F8F8FA 100%)',
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 mb-6" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <span className="text-glow text-xs font-semibold tracking-wide">Panel de control · Tiempo real</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Controla todo desde{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #4F7CFF, #80A8FF)' }}
            >
              un panel
            </span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-md mx-auto">
            Métricas en tiempo real, sin necesidad de exportar datos ni informes manuales.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
          style={{
            background: '#0d1220',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Dashboard header bar */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-white/40 text-xs font-medium">DentalAI Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-dot-blink" />
              <span className="text-green-400 text-[10px] font-semibold">LIVE</span>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* KPIs */}
            <div className="lg:col-span-1 grid grid-cols-2 gap-3">
              {KPIS.map((kpi, i) => (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="rounded-2xl p-4"
                  style={{
                    background: `${kpi.color}0d`,
                    border: `1px solid ${kpi.color}20`,
                  }}
                >
                  <div className="text-xl mb-2">{kpi.icon}</div>
                  <div
                    className="text-2xl font-black tracking-tight mb-1"
                    style={{ color: kpi.color }}
                  >
                    <AnimatedNumber target={kpi.value} suffix={kpi.suffix} />
                  </div>
                  <p className="text-[#64748B] text-[10px] leading-tight">{kpi.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Chart */}
            <div
              className="lg:col-span-2 rounded-2xl p-5"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-white text-sm font-semibold">Citas generadas</p>
                  <p className="text-[#64748B] text-xs">Últimos 12 meses</p>
                </div>
                <div className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 8L5 5L7 7L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  +137% este año
                </div>
              </div>

              {/* Bar chart */}
              <div className="flex items-end gap-2 h-28">
                {CHART_DATA.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: 'backOut' }}
                      className="w-full rounded-t-lg origin-bottom"
                      style={{
                        height: `${h}%`,
                        background: i === 11
                          ? 'linear-gradient(180deg, #80A8FF, #4F7CFF)'
                          : `rgba(79,124,255,${0.2 + (h / 100) * 0.5})`,
                      }}
                    />
                    <span className="text-[#64748B] text-[8px]">{MONTHS[i]}</span>
                  </div>
                ))}
              </div>

              {/* Mini stats row */}
              <div
                className="flex items-center justify-between mt-4 pt-4"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                {[
                  { label: 'Prom. diario', value: '8.2 citas' },
                  { label: 'Mejor mes', value: 'Diciembre' },
                  { label: 'Tasa conv.', value: '34%' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-white text-xs font-bold">{s.value}</p>
                    <p className="text-[#64748B] text-[9px]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity feed */}
            <div
              className="lg:col-span-3 rounded-2xl p-5"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <p className="text-white text-xs font-semibold mb-3">Actividad reciente</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { msg: 'Nueva cita — María García (Ortodoncia)', time: 'Hace 2 min', color: '#10B981' },
                  { msg: 'Recordatorio enviado — Pedro Martín', time: 'Hace 5 min', color: '#4F7CFF' },
                  { msg: 'Paciente recuperado — Ana López (3 meses)', time: 'Hace 8 min', color: '#F59E0B' },
                ].map((a) => (
                  <div
                    key={a.msg}
                    className="flex items-start gap-3 rounded-xl p-3"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: a.color }} />
                    <div>
                      <p className="text-white/80 text-[10px] leading-tight">{a.msg}</p>
                      <p className="text-[#64748B] text-[9px] mt-0.5">{a.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
