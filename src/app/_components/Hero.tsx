import Link from 'next/link'
import HeroVideoBackground from './HeroVideoBackground'

export default function Hero() {
  const marqueeNames = [
    'Bufete Casals', 'Notaría Puig', 'Asesoría Roca', 'Despacho García & Asoc.', 'Gestoría Pla', 'Bufete Martínez', 'Notaría Soler'
  ];
  const marqueeItems = [...marqueeNames, ...marqueeNames];

  return (
    <section className="hero bg-night relative overflow-hidden" id="hero">
      <HeroVideoBackground />
      <div className="hero__orb relative z-10" />
      <div className="container relative z-10">
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance animate-fade-in-up leading-tight text-white" style={{ animationDelay: '100ms' }}>
              La sucesión,<br />
              sin margen de error.
            </h1>
            <p className="hero__subtitle text-base md:text-lg text-white/60 mt-6 max-w-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Motor jurídico y fiscal para despachos profesionales.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Link href="#cta-final" className="btn-primary shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)]">
                Solicita tu demo gratuita
              </Link>
              <Link href="#como-funciona" className="btn-ghost group">
                Ver cómo funciona el motor normativo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10"/><path d="M9 4l4 4-4 4"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20" style={{ background: '#0a0a0a', padding: '32px 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <p className="eyebrow text-center mb-6" style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '11px' }}>
          PROFESIONALES QUE CONFÍAN EN ULPIANO
        </p>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', width: 'max-content', animation: 'scroll-left 30s linear infinite' }}>
            {marqueeItems.map((name, index) => (
              <span 
                key={`${name}-${index}`} 
                style={{ 
                  margin: '0 48px', 
                  color: '#ffffff',
                  fontWeight: 500,
                  fontSize: '15px', 
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap'
                }}
              >
                {name} &middot;
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
