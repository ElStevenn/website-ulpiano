/**
 * BLOQUE-IDENTIDAD-v1
 * Único punto del repositorio donde se declara la identidad del titular del sitio.
 * Cuando la sociedad esté constituida, sustituir por la "Versión de sustitución"
 * de Legal Ulpiano/Contratos/contratos web/FINAL_WEB/00_BLOQUE_IDENTIDAD.md
 * (denominación social, NIF, domicilio y datos registrales). No duplicar este bloque.
 */

type IdentidadTitularProps = {
  locale: "es" | "ca";
};

const ES = {
  items: [
    { label: "Titular del sitio web", value: "Ulpiano" },
    { label: "Sitio web", value: "https://ulpiano.es", href: "https://ulpiano.es" },
    {
      label: "Actividad",
      value:
        "desarrollo y explotación de una plataforma tecnológica de planificación y gestión sucesoria dirigida a despachos de abogados, asesorías fiscales, gestorías y notarías.",
    },
    { label: "Ámbito de operación", value: "Girona (Cataluña, España)" },
    { label: "Contacto general", value: "hola@ulpiano.es", href: "mailto:hola@ulpiano.es" },
    {
      label: "Protección de datos y ejercicio de derechos",
      value: "privacidad@ulpiano.es",
      href: "mailto:privacidad@ulpiano.es",
    },
    {
      label: "Soporte de la plataforma",
      value: "soporte@ulpiano.es",
      href: "mailto:soporte@ulpiano.es",
    },
  ],
  nature:
    "Ulpiano es un proveedor de servicios tecnológicos y administrativos instrumentales. No presta servicios de abogacía, asesoramiento jurídico ni asesoramiento fiscal, ni a través de este sitio web ni a través de su plataforma.",
} as const;

const CA = {
  items: [
    { label: "Titular del lloc web", value: "Ulpiano" },
    { label: "Lloc web", value: "https://ulpiano.es", href: "https://ulpiano.es" },
    {
      label: "Activitat",
      value:
        "desenvolupament i explotació d'una plataforma tecnològica de planificació i gestió successòria adreçada a despatxos d'advocats, assessories fiscals, gestories i notaries.",
    },
    { label: "Àmbit d'operació", value: "Girona (Catalunya, Espanya)" },
    { label: "Contacte general", value: "hola@ulpiano.es", href: "mailto:hola@ulpiano.es" },
    {
      label: "Protecció de dades i exercici de drets",
      value: "privacidad@ulpiano.es",
      href: "mailto:privacidad@ulpiano.es",
    },
    {
      label: "Suport de la plataforma",
      value: "suport@ulpiano.es",
      href: "mailto:suport@ulpiano.es",
    },
  ],
  nature:
    "Ulpiano és un proveïdor de serveis tecnològics i administratius instrumentals. No presta serveis d'advocacia, assessorament jurídic ni assessorament fiscal, ni a través d'aquest lloc web ni a través de la seva plataforma.",
} as const;

export default function IdentidadTitular({ locale }: IdentidadTitularProps) {
  const copy = locale === "ca" ? CA : ES;

  return (
    <div className="legal-identidad">
      <ul>
        {copy.items.map((item) => (
          <li key={item.label}>
            <strong>{item.label}:</strong>{" "}
            {"href" in item && item.href ? <a href={item.href}>{item.value}</a> : item.value}
          </li>
        ))}
      </ul>
      <p>{copy.nature}</p>
    </div>
  );
}
