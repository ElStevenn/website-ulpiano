import type { LucideIcon } from "lucide-react";
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

export type NavDropdownItem = {
  href: string;
  label: string;
  description: string;
  Icon: LucideIcon;
};

export const solucionesItems: NavDropdownItem[] = [
  {
    href: "/soluciones/planificacion-sucesoria",
    label: "Planificación sucesoria",
    description: "El patrimonio inventariado, el árbol dibujado",
    Icon: Network,
  },
  {
    href: "/soluciones/documentacion-sucesoria",
    label: "Documentación sucesoria",
    description: "El cuaderno particional, generado",
    Icon: FileText,
  },
  {
    href: "/soluciones/fiscalidad-sucesoria",
    label: "Fiscalidad sucesoria",
    description: "La cuota del ISD, calculada",
    Icon: Calculator,
  },
  {
    href: "/soluciones/procesamiento-documental",
    label: "Procesamiento documental",
    description: "Los datos del expediente, extraídos del PDF",
    Icon: ScanSearch,
  },
  {
    href: "/soluciones/activos-digitales",
    label: "Activos digitales",
    description: "Criptomonedas y wallets, inventariados",
    Icon: Bitcoin,
  },
];

export const pensadoProfesionales: NavDropdownItem[] = [
  {
    href: "/pensado-para/despachos",
    label: "Despachos",
    description: "Expediente resuelto con claridad para el cliente",
    Icon: Briefcase,
  },
  {
    href: "/pensado-para/notarias",
    label: "Notarías",
    description: "Post-testamento activo, escrituras desde datos",
    Icon: Building2,
  },
  {
    href: "/pensado-para/asesorias",
    label: "Asesorías fiscales",
    description: "ISD con norma citada, Modelo 650 listo",
    Icon: PieChart,
  },
  {
    href: "/pensado-para/family-office",
    label: "Family Office",
    description: "Escenarios comparados, patrimonio complejo",
    Icon: Landmark,
  },
];

export const pensadoCanales: NavDropdownItem[] = [
  {
    href: "/pensado-para/funerarias",
    label: "Funerarias",
    description: "Tramitación sucesoria integrada en el servicio",
    Icon: HeartHandshake,
  },
  {
    href: "/pensado-para/aseguradoras",
    label: "Aseguradoras",
    description: "Complemento a pólizas de vida y decesos",
    Icon: Shield,
  },
];
