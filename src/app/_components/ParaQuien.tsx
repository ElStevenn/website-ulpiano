'use client'

import { useState } from 'react'

const CheckIcon = () => (
  <svg viewBox="0 0 16 16">
    <polyline points="3 8 7 12 13 4"/>
  </svg>
)

const tabs = [
  {
    id: 'despachos',
    label: 'Despachos',
    claim: 'El cálculo de la legítima no debería tardar dos horas. En Ulpiano tarda tres minutos.',
    bullets: [
      'Derecho foral catalán integrado desde la base, sin excepciones',
      'Borrador del cuaderno particional generado a partir del expediente',
      'Cada decisión del expediente queda registrada y es auditable',
    ],
    mockupLabel: 'Vista del Planificador Sucesorio',
  },
  {
    id: 'asesorias',
    label: 'Asesorías',
    claim: 'El ISD cambia. Tus expedientes activos, no.',
    bullets: [
      'Recálculo automático ante cambios normativos',
      'Trazabilidad auditable ante la ATC',
      'Alertas de plazo antes de que el problema llegue al cliente',
    ],
    mockupLabel: 'Vista del Motor Fiscal ISD',
  },
  {
    id: 'notarias',
    label: 'Notarías',
    claim: 'El testamento es el inicio de una relación de 20 años. Ulpiano te da las herramientas para mantenerla activa.',
    bullets: [
      'Panel de seguimiento del expediente post-testamento',
      'Comunicación con el cliente desde la plataforma',
      'Documentación centralizada y cifrada',
    ],
    mockupLabel: 'Vista del Panel de Expedientes',
  },
]

export default function ParaQuien() {
  const [active, setActive] = useState(0)

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') setActive((index + 1) % tabs.length)
    if (e.key === 'ArrowLeft') setActive((index - 1 + tabs.length) % tabs.length)
  }

  return (
    <section className="para-quien" id="para-quien">
      <div className="container">
        <div className="para-quien__header reveal">
          <p className="eyebrow para-quien__eyebrow">Segmentos</p>
          <h2 className="para-quien__title">Hecho para quien gestiona herencias en serio</h2>
        </div>
        <div className="tabs reveal">
          <div className="tabs__bar" role="tablist" aria-label="Perfiles profesionales">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={i === active}
                aria-controls={`panel-${tab.id}`}
                tabIndex={i === active ? 0 : -1}
                className="tab-btn"
                onClick={() => setActive(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="tabs__content">
            {tabs.map((tab, i) => (
              <div
                key={tab.id}
                role="tabpanel"
                id={`panel-${tab.id}`}
                aria-labelledby={`tab-${tab.id}`}
                className={`tab-panel${i === active ? ' active' : ''}`}
                hidden={i !== active}
              >
                <div>
                  <p className="tab-panel__claim">{tab.claim}</p>
                  <div className="tab-panel__bullets">
                    {tab.bullets.map((bullet) => (
                      <div key={bullet} className="tab-panel__bullet">
                        <CheckIcon />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tab-panel__mockup">{tab.mockupLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
