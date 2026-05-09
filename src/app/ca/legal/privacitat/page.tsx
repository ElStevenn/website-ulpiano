import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacitat | Ulpiano",
  description:
    "Política de privacitat d'Ulpiano. Informació sobre el tractament de dades personals conforme al RGPD.",
  alternates: {
    canonical: "https://ulpiano.es/ca/legal/privacitat",
    languages: {
      es: "https://ulpiano.es/legal/privacidad",
      ca: "https://ulpiano.es/ca/legal/privacitat",
    },
  },
};

export default function PrivacitatPage() {
  return (
    <article className="pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1>Política de Privacitat</h1>
        <p className="text-slate">Última actualització: abril 2026</p>
        <p>
          En Ulpiano ens comprometem a protegir la privacitat dels nostres
          usuaris. Aquesta política descriu com recopilem, usem i protegim les
          dades personals conforme al Reglament General de Protecció de Dades
          (RGPD) i la Llei Orgànica 3/2018 de Protecció de Dades Personals.
        </p>

        <h2>Responsable del tractament</h2>
        <p>
          Ulpiano — Plataforma Integral de Gestió Successòria.
          <br />
          Correu electrònic: suport@ulpiano.es
        </p>

        <h2>Dades que recopilem</h2>
        <ul>
          <li>
            Dades de contacte proporcionades en formularis (nom, correu
            electrònic, telèfon).
          </li>
          <li>
            Dades d'ús i navegació mitjançant cookies analítiques.
          </li>
          <li>
            Dades professionals necessàries per a la prestació del servei.
          </li>
        </ul>

        <h2>Finalitat del tractament</h2>
        <ul>
          <li>Gestió de sol·licituds de contacte i demostracions.</li>
          <li>Prestació del servei contractat.</li>
          <li>Millora contínua de la plataforma.</li>
          <li>
            Comunicacions comercials (amb consentiment previ).
          </li>
        </ul>

        <h2>Drets de l'interessat</h2>
        <p>
          Pot exercir els seus drets d'accés, rectificació, supressió,
          oposició, limitació i portabilitat dirigint-se a suport@ulpiano.es.
        </p>

        <h2>Normativa aplicable</h2>
        <p>
          El tractament de dades personals es realitza conforme al Reglament
          General de Protecció de Dades (UE) 2016/679 i la Llei Orgànica
          3/2018 de Protecció de Dades Personals i garantia de drets digitals.
        </p>

        <h2>Cookies i tecnologies de seguiment</h2>
        <p>
          Utilitzem cookies tècniques necessàries per al funcionament del lloc
          i cookies analítiques per a Google Analytics. Consulteu la nostra
          Política de Cookies per a més informació.
        </p>

        <h2>Contacte</h2>
        <p>
          Si tens dubtes sobre aquesta política o vols exercir els teus drets,
          contacta amb nosaltres a suport@ulpiano.es.
        </p>
      </div>
    </article>
  );
}
