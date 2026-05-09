const outputs = [
  {
    id: 'arbol',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="5" r="2"/>
        <line x1="12" y1="7" x2="12" y2="13"/>
        <line x1="12" y1="13" x2="7" y2="19"/>
        <line x1="12" y1="13" x2="17" y2="19"/>
        <circle cx="7" cy="19" r="2"/>
        <circle cx="17" cy="19" r="2"/>
      </svg>
    ),
    title: 'El árbol familiar de la herencia, dibujado solo',
    body: 'Introduce los herederos y beneficiarios. Ulpiano construye el diagrama sucesorio, asigna grupos de parentesco y respeta automáticamente las legítimas del CCCat.',
    badge: 'Visual · Exportable',
    highlight: null,
  },
  {
    id: 'fiscal',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="4" y="2" width="16" height="20" rx="2"/>
        <line x1="8" y1="6" x2="16" y2="6"/>
        <line x1="8" y1="10" x2="16" y2="10"/>
        <line x1="8" y1="14" x2="12" y2="14"/>
        <path d="M14 17l2 2 4-4"/>
      </svg>
    ),
    title: 'La cuota del ISD de cada heredero, calculada',
    body: 'Base imponible, reducciones autonómicas, bonificaciones, coeficiente multiplicador. El resultado final con la norma citada. Para Cataluña, con la Llei 19/2010 integrada desde la base.',
    badge: 'Modelo 650 incluido',
    highlight: { amount: '€ 12.430,00', label: 'cuota a ingresar' },
  },
  {
    id: 'escenarios',
    icon: (
      <svg viewBox="0 0 24 24">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Tres escenarios, comparados en segundos',
    body: 'Herencia directa vs. donación en vida vs. usufructo al cónyuge. Ulpiano calcula el impacto fiscal de cada opción y lo muestra en paralelo. Tu cliente entiende lo que está decidiendo.',
    badge: 'Planificación pre-mortem',
    highlight: null,
  },
  {
    id: 'alertas',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'El coste de llegar tarde, calculado antes de llegar tarde',
    body: 'Si el período voluntario de 6 meses vence, Ulpiano calcula automáticamente el recargo por extemporaneidad según el Art. 27 LGT. Sin sorpresas para el cliente. Sin contingencias para el despacho.',
    badge: 'Alertas automáticas',
    highlight: null,
  },
]

export default function Outputs() {
  return (
    <section className="outputs" id="outputs">
      <div className="container">
        <div className="outputs__header reveal">
          <p className="eyebrow outputs__eyebrow">Resultados</p>
          <h2 className="outputs__title">Lo que sale de Ulpiano</h2>
          <p className="outputs__subtitle">No herramientas. Resultados.</p>
        </div>
        <div className="outputs__grid">
          {outputs.map((o) => (
            <div key={o.id} className="card output-card reveal">
              <div className="output-card__icon">{o.icon}</div>
              <h3>{o.title}</h3>
              <p>{o.body}</p>
              {o.highlight && (
                <div className="output-card__highlight">
                  <div className="output-card__highlight-amount">{o.highlight.amount}</div>
                  <div className="output-card__highlight-label">{o.highlight.label}</div>
                </div>
              )}
              <span className="output-card__badge">{o.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
