import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termes i Condicions | Ulpiano",
  description:
    "Termes i condicions d'ús de la plataforma Ulpiano per a la gestió successòria professional.",
  alternates: {
    canonical: "https://ulpiano.es/ca/legal/termes",
    languages: {
      es: "https://ulpiano.es/legal/terminos",
      ca: "https://ulpiano.es/ca/legal/termes",
    },
  },
};

export default function TermesPage() {
  return (
    <article className="pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1>Termes i Condicions</h1>
        <p className="text-slate">Última actualització: abril 2026</p>
        <p>
          Els termes i condicions que segueixen regulen l'ús de la plataforma
          Ulpiano. En accedir i utilitzar aquest servei, acceptes aquestes
          condicions.
        </p>

        <h2>Objecte de la plataforma</h2>
        <p>
          Ulpiano és una plataforma digital per a professionals del dret i
          l'assessoria, especialitzada en la gestió integral de processos
          successoris.
        </p>

        <h2>Serveis que oferim</h2>
        <p>La plataforma ofereix les següents funcionalitats:</p>
        <ul>
          <li>Inventari patrimonial estructurat i traçable.</li>
          <li>
            Càlcul automàtic de l'Impost sobre Successions i Donacions (ISD).
          </li>
          <li>Generació de documents (quadern particional, models fiscals).</li>
          <li>Gestió centralitzada d'expedients successoris.</li>
          <li>Documentació i normativa actualitzada per regions.</li>
        </ul>

        <h2>Condicions d'ús</h2>
        <ul>
          <li>
            Hauràs de proporcionar informació veraç, completa i actualitzada.
          </li>
          <li>
            L'ús de la plataforma és exclusivament per a professionals amb
            acreditació legal (advocats, notaris, assessors, comptables).
          </li>
          <li>
            Acceptes que els continguts i funcionalitats s'utilitzen
            exclusivament per a fins professionals.
          </li>
          <li>
            No pots compartir el teu accés amb tercers no autoritzats.
          </li>
        </ul>

        <h2>Responsabilitat</h2>
        <p>
          Ulpiano proporciona una eina per a l'automatització i gestió de
          processos successoris. La responsabilitat professional de les decisions
          tax, legals i de representació correspon exclusivament a l'usuari.
        </p>
        <p>
          Els documents generats són una base de treball que haurien de ser
          revisats i signats pels professionals responsables conforme a
          normativa vigent.
        </p>

        <h2>Límit de responsabilitat</h2>
        <p>
          Ulpiano no es responsabilitza de:
        </p>
        <ul>
          <li>
            Interpretacions legals o decisions de caràcter professional pres
            per l'usuari.
          </li>
          <li>
            Consequències derivades de mal ús de la plataforma.
          </li>
          <li>
            Indisponibilitat temporal del servei per manteniment o causa major.
          </li>
        </ul>

        <h2>Contacte i suport</h2>
        <p>
          Per a qualsevol pregunta sobre aquests termes o el servei, contacta
          amb nosaltres a suport@ulpiano.es.
        </p>
      </div>
    </article>
  );
}
