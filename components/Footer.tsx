import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/50 backdrop-blur-sm py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="ImpulsoAI logo" width={28} height={28} className="rounded-lg flex-shrink-0" />
          <span className="font-bold text-ink text-base tracking-tight">
            Impulso<span className="text-primary">AI</span>
          </span>
        </div>

        <p className="text-muted text-sm text-center">
          © 2026 ImpulsoAI. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-6">
          <a href="#" className="text-muted text-sm hover:text-ink transition-colors">Privacidad</a>
          <a href="#" className="text-muted text-sm hover:text-ink transition-colors">Términos</a>
          <a href="mailto:danipuga@impulsoai.es" className="text-muted text-sm hover:text-primary transition-colors">
            danipuga@impulsoai.es
          </a>
        </div>
      </div>
    </footer>
  )
}
