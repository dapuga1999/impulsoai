import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F8F8FA',
        primary: '#4F7CFF',
        glow: '#80A8FF',
        ink: '#0F172A',
        muted: '#64748B',
        card: 'rgba(255,255,255,0.7)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'ring-rotate': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'ring-rotate-reverse': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(-10px) translateX(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'dot-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'bar-grow': {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'ring-rotate': 'ring-rotate 20s linear infinite',
        'ring-rotate-reverse': 'ring-rotate-reverse 28s linear infinite',
        float: 'float 3.5s ease-in-out infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        marquee: 'marquee 30s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'dot-blink': 'dot-blink 2s ease-in-out infinite',
        'bar-grow': 'bar-grow 1s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #4F7CFF 0%, #80A8FF 100%)',
        'hero-radial': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,124,255,0.15) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,248,250,0.6) 100%)',
      },
      boxShadow: {
        'blue-glow': '0 0 40px rgba(79,124,255,0.25)',
        'blue-glow-lg': '0 0 80px rgba(79,124,255,0.35)',
        'card': '0 4px 24px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)',
        'card-hover': '0 16px 48px rgba(15,23,42,0.12), 0 4px 16px rgba(15,23,42,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
