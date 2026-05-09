import Link from 'next/link'

const columns = [
  {
    header: 'Producto',
    links: ['Soluciones', 'Planificador', 'Fiscalidad', 'Activos digitales', 'Precios'],
  },
  {
    header: 'Para quién',
    links: ['Despachos', 'Notarías', 'Asesorías', 'Family Office', 'Funerarias'],
  },
  {
    header: 'Legal',
    links: ['Política de privacidad', 'Términos y condiciones', 'Cookies'],
  },
  {
    header: 'Contacto',
    links: ['soporte@ulpiano.es', '+34 XXX XXX XXX'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">ULPIANO</div>
            <p className="footer__tagline">El sistema operativo de las herencias.</p>
            <p className="footer__copyright">© 2026 Ulpiano. Todos los derechos reservados.</p>
          </div>
          {columns.map((col) => (
            <div key={col.header} className="footer__col">
              <p className="footer__col-header">{col.header}</p>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
