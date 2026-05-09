import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Ulpiano",
  description:
    "Informació sobre les cookies utilitzades a la plataforma Ulpiano i com gestionar-les.",
  alternates: {
    canonical: "https://ulpiano.es/ca/legal/cookies",
    languages: {
      es: "https://ulpiano.es/legal/cookies",
      ca: "https://ulpiano.es/ca/legal/cookies",
    },
  },
};

export default function CookiesPage() {
  return (
    <article className="pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1>Política de Cookies</h1>
        <p className="text-slate">Última actualització: abril 2026</p>
        <p>
          Aquesta web utilitza cookies pròpies i de tercers per a garantir el
          funcionament correcte del lloc, analitzar el tràfic i millorar
          l'experiència de l'usuari.
        </p>

        <h2>Què són les cookies?</h2>
        <p>
          Les cookies són petits arxius de text que es desen al teu dispositiu
          quan visites un lloc web. Permeten recordar les teves preferències i
          analitzar com usas el lloc.
        </p>

        <h2>Tipus de cookies que utilitzem</h2>
        <ul>
          <li>
            <strong>Cookies tècniques:</strong> necessàries per al
            funcionament del lloc, com ara mantenir la sessió
            autenticada.
          </li>
          <li>
            <strong>Cookies analítiques:</strong> ens permeten mesurar i
            analitzar la navegació (Google Analytics) per a millorar els
            nostres serveis.
          </li>
        </ul>

        <h2>Gestió de cookies</h2>
        <p>
          Pots configurar el teu navegador per a rebutjar cookies o eliminar
          les existents. Accedeix a la configuració de cookies del teu
          navegador web.
        </p>
        <p>
          Tingues en compte que algunes funcionalitats del lloc poden
          veure's afectades si desactives les cookies tècniques.
        </p>

        <h2>Google Analytics</h2>
        <p>
          Utilitzem Google Analytics per a analitzar la navegació dels
          usuaris. Google pot transferir aquesta informació a tercers si ho
          requereix la llei. Consulteu la Política de Privacitat de Google per
          a més informació.
        </p>

        <h2>Contacte</h2>
        <p>
          Per a més informació sobre les cookies o per a exercir els teus
          drets, contacta amb nosaltres a suport@ulpiano.es.
        </p>
      </div>
    </article>
  );
}
