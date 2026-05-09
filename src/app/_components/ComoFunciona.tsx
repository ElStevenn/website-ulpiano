const steps = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="12" y1="18" x2="12" y2="12"/>
        <line x1="9" y1="15" x2="15" y2="15"/>
      </svg>
    ),
    title: 'Introduces el inventario',
    desc: 'Bienes, deudas, herederos y sus relaciones. El sistema lo estructura.',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <path d="M9 9h6"/><path d="M9 12h6"/><path d="M9 15h4"/>
      </svg>
    ),
    title: 'Ulpiano calcula',
    desc: 'Legítimas, cuotas, base del ISD, reducciones y bonificaciones autonómicas. Con la norma citada.',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Comparas escenarios',
    desc: 'Ves el impacto fiscal de cada opción de distribución antes de decidir.',
  },
  {
    num: '04',
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Generas la documentación',
    desc: 'Borrador del cuaderno particional listo para tu revisión. En Word, con tus datos.',
  },
]

export default function ComoFunciona() {
  return (
    <section className="como-funciona" id="como-funciona">
      <div className="container">
        <div className="como-funciona__header reveal">
          <p className="eyebrow como-funciona__eyebrow">Proceso</p>
          <h2 className="como-funciona__title">De cero a expediente cerrado</h2>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.num} className="step reveal">
              <span className="step__number">{step.num}</span>
              <div className="step__icon">{step.icon}</div>
              <h4 className="step__title">{step.title}</h4>
              <p className="step__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
