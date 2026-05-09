import AnimatedCounter from './AnimatedCounter'

export default function Testimonio() {
  return (
    <section className="testimonio" id="testimonio">
      <div className="container">
        <blockquote className="testimonio__quote reveal">
          <p className="testimonio__text">
            &ldquo;La automatización de los cálculos del ISD y el árbol familiar interactivo nos han
            ahorrado horas de trabajo por expediente. El motor normativo catalán es lo que nos convenció.&rdquo;
          </p>
          <footer className="testimonio__author">
            &mdash; Abogada, Despacho Sucesorio, Barcelona
          </footer>
        </blockquote>
        <div className="testimonio__metrics reveal">
          <div className="metric">
            <AnimatedCounter value={35} suffix="%" className="metric__number" />
            <div className="metric__separator" />
            <span className="metric__label">Reducción media en tiempo de gestión por expediente</span>
          </div>
          <div className="metric">
            <AnimatedCounter value={6} suffix=" meses" className="metric__number" />
            <div className="metric__separator" />
            <span className="metric__label">Plazo legal controlado automáticamente</span>
          </div>
          <div className="metric">
            <AnimatedCounter value={100} suffix="%" className="metric__number" />
            <div className="metric__separator" />
            <span className="metric__label">Normativa catalana integrada, sin adaptaciones manuales</span>
          </div>
        </div>
      </div>
    </section>
  )
}
