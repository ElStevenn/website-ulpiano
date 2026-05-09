import Link from 'next/link'

export default function CtaFinal() {
  return (
    <section className="cta-final" id="cta-final">
      <div className="cta-final__orb" />
      <div className="container">
        <div className="cta-final__content reveal">
          <h2 className="cta-final__title">Tu próximo expediente, ya en Ulpiano</h2>
          <p className="cta-final__subtitle">
            25 minutos de demo. Sin presentación comercial. Directamente sobre el producto con un
            caso del sector.
          </p>
          <div className="cta-final__btn">
            <Link href="#" className="btn-primary btn-primary--large">
              Solicita tu demo gratuita
            </Link>
          </div>
          <p className="cta-final__alt">O empieza gratis sin tarjeta</p>
        </div>
      </div>
    </section>
  )
}
