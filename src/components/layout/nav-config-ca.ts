import {
  Bitcoin,
  Briefcase,
  Building2,
  Calculator,
  FileText,
  HeartHandshake,
  Landmark,
  Network,
  PieChart,
  ScanSearch,
  Shield,
} from "lucide-react";
import type { NavDropdownItem } from "./nav-config";

export const solucionsItemsCa: NavDropdownItem[] = [
  {
    href: "/ca/solucions/planificacio-successoria",
    label: "Planificació successòria",
    description: "El patrimoni inventariat, l'arbre dibuixat",
    Icon: Network,
  },
  {
    href: "/ca/solucions/documentacio-successoria",
    label: "Documentació successòria",
    description: "El quadern particional, generat",
    Icon: FileText,
  },
  {
    href: "/ca/solucions/fiscalitat-successoria",
    label: "Fiscalitat successòria",
    description: "La quota de l'ISD, calculada",
    Icon: Calculator,
  },
  {
    href: "/ca/solucions/processament-documental",
    label: "Processament documental",
    description: "Les dades de l'expedient, extretes del PDF",
    Icon: ScanSearch,
  },
  {
    href: "/ca/solucions/actius-digitals",
    label: "Actius digitals",
    description: "Criptomonedes i wallets, inventariats",
    Icon: Bitcoin,
  },
];

export const pensatProfessionalsCa: NavDropdownItem[] = [
  {
    href: "/ca/pensat-per/despatxos",
    label: "Despatxos",
    description: "Expedient resolt amb claredat per al client",
    Icon: Briefcase,
  },
  {
    href: "/ca/pensat-per/notaries",
    label: "Notaries",
    description: "Post-testament actiu, escriptures des de dades",
    Icon: Building2,
  },
  {
    href: "/ca/pensat-per/assessories",
    label: "Assessories fiscals",
    description: "ISD amb norma citada, Model 650 llest",
    Icon: PieChart,
  },
  {
    href: "/ca/pensat-per/family-office",
    label: "Family Office",
    description: "Escenaris comparats, patrimoni complex",
    Icon: Landmark,
  },
];

export const pensatCanalsCa: NavDropdownItem[] = [
  {
    href: "/ca/pensat-per/funeraries",
    label: "Funeràries",
    description: "Tramitació successòria integrada en el servei",
    Icon: HeartHandshake,
  },
  {
    href: "/ca/pensat-per/asseguradores",
    label: "Asseguradores",
    description: "Complement a pòlisses de vida i decessos",
    Icon: Shield,
  },
];

/**
 * Mapa URL espanyol → URL català.
 * Usat pel LangSwitch per saltar entre versions equivalents.
 */
export const esToCaMap: Record<string, string> = {
  "/": "/ca",
  "/soluciones": "/ca/solucions",
  "/soluciones/planificacion-sucesoria": "/ca/solucions/planificacio-successoria",
  "/soluciones/documentacion-sucesoria": "/ca/solucions/documentacio-successoria",
  "/soluciones/fiscalidad-sucesoria": "/ca/solucions/fiscalitat-successoria",
  "/soluciones/procesamiento-documental": "/ca/solucions/processament-documental",
  "/soluciones/activos-digitales": "/ca/solucions/actius-digitals",
  "/modelos": "/ca/models",
  "/modelos/modelo-650": "/ca/models/model-650",
  "/modelos/modelo-651": "/ca/models/model-651",
  "/modelos/modelo-652": "/ca/models/model-652",
  "/modelos/modelo-653": "/ca/models/model-653",
  "/modelos/modelo-660": "/ca/models/model-660",
  "/pensado-para/despachos": "/ca/pensat-per/despatxos",
  "/pensado-para/notarias": "/ca/pensat-per/notaries",
  "/pensado-para/asesorias": "/ca/pensat-per/assessories",
  "/pensado-para/family-office": "/ca/pensat-per/family-office",
  "/pensado-para/funerarias": "/ca/pensat-per/funeraries",
  "/pensado-para/aseguradoras": "/ca/pensat-per/asseguradores",
  "/ia": "/ca/ia",
  "/demo": "/ca/demo",
  "/contacto": "/ca/contacte",
  "/precios": "/ca/preus",
  "/recursos/checklist-expediente-sucesorio": "/ca/recursos/checklist-expedient-successori",
  "/legal/privacidad": "/ca/legal/privacitat",
  "/legal/terminos": "/ca/legal/termes",
  "/legal/cookies": "/ca/legal/cookies",
};

// Mapa invers
export const caToEsMap: Record<string, string> = Object.fromEntries(
  Object.entries(esToCaMap).map(([es, ca]) => [ca, es])
);
