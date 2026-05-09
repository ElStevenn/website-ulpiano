import type { Metadata } from "next";
import Hero from './_components/Hero'
import SocialProof from './_components/SocialProof'
import Outputs from './_components/Outputs'
import ParaQuien from './_components/ParaQuien'
import ComoFunciona from './_components/ComoFunciona'
import Testimonio from './_components/Testimonio'
import CtaFinal from './_components/CtaFinal'
import ScrollRevealInit from './_components/ScrollRevealInit'

export const metadata: Metadata = {
  title: "Plataforma Integral de Gestión Sucesoria",
  description:
    "De inventario a cuaderno particional sin errores de cálculo ni revisión manual de la norma. Ulpiano estructura, valida y documenta el proceso sucesorio completo para abogados, asesores y notarías.",
  alternates: {
    canonical: "https://ulpiano.es",
  },
};

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />
      <Hero />
      <SocialProof />
      <Outputs />
      <ParaQuien />
      <ComoFunciona />
      <Testimonio />
      <CtaFinal />
    </>
  )
}
