"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FileText,
  ClipboardList,
  Stamp,
  Link2,
  FolderCheck,
  MousePointerClick,
  Search,
  Download,
  Calculator,
  Receipt,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

/* =============================================
   SCROLL REVEAL HOOK
   ============================================= */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.12 }
    );

    const children = node.querySelectorAll(".reveal");
    children.forEach((child) => {
      child.classList.add("opacity-0");
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}

/* =============================================
   TAB PANEL COMPONENT
   ============================================= */
function TabPanel({
  claim,
  checks,
  mockupLabel,
}: {
  claim: string;
  checks: string[];
  mockupLabel: string;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center animate-fade-in-up">
      <div>
        <p className="text-xl font-bold text-ink leading-snug mb-8">
          "{claim}"
        </p>
        <ul className="space-y-4">
          {checks.map((check, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] text-ink leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              {check}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-slate-50 border border-slate-200 rounded-2xl h-[260px] flex items-center justify-center text-slate-400 font-medium text-[15px] shadow-inner">
        {mockupLabel}
      </div>
    </div>
  );
}

/* =============================================
   DATA
   ============================================= */
const comparisonRows = [
  {
    before: "Copias nombres y NIFs del inventario al cuaderno particional",
    after: "Los datos del inventario se insertan automáticamente",
  },
  {
    before: "Trasladas cifras del cálculo fiscal al documento",
    after: "Las cifras vienen del motor ISD — coherentes por diseño",
  },
  {
    before: "Consultas la norma para citar artículos",
    after: "Las referencias legales se insertan según el derecho aplicable",
  },
  {
    before: "Revisas tres veces que todo coincida entre documentos",
    after: "Un dato se introduce una vez — aparece correcto en todos",
  },
  {
    before: "Mantienes 5 versiones del cuaderno particional en tu carpeta",
    after: "Un borrador versionado que se actualiza con el expediente",
  },
  {
    before: "Adaptas cláusulas a mano según el tipo de sucesión",
    after: "Las cláusulas se seleccionan según sucesión testada, intestada o pactada",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */
export function DocumentacionClient() {
  const [activeTab, setActiveTab] = useState(0);
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      {/* ═══ HERO ═══ */}
      <section className="bg-night pt-[calc(64px+3rem)] pb-20 relative overflow-hidden">
        {/* Decorative Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-[0.15] blur-[100px]" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
            
            {/* Left Copy */}
            <div>
              <div className="flex items-center gap-3 mb-6 reveal">
                <div className="h-[1px] w-8 bg-emerald-500/50" />
                <span className="text-emerald-400/90 text-xs font-bold tracking-[0.2em] uppercase">
                  Documentación Sucesoria
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.1] mb-6 reveal tracking-tight" style={{ animationDelay: '100ms' }}>
                El cuaderno particional, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">generado</span>. Con tus datos y la norma.
              </h1>
              <p className="text-lg leading-relaxed text-white/60 max-w-[500px] reveal" style={{ animationDelay: '200ms' }}>
                Ulpiano toma el inventario patrimonial, el escenario sucesorio y el cálculo fiscal del expediente y produce el borrador del cuaderno particional en Word. Con los nombres correctos, las cifras coherentes y las referencias legales citadas.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-10 reveal" style={{ animationDelay: '300ms' }}>
                <Link href="/demo" className="btn-primary shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)] px-8 py-3.5 text-base">
                  Solicita tu demo gratuita
                </Link>
                <a href="#como-funciona" className="btn-ghost group text-white/80 hover:text-white px-6">
                  Ver cómo funciona 
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 ml-2" />
                </a>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="reveal relative z-10" style={{ animationDelay: '200ms' }}>
              <div className="rounded-2xl border border-white/10 shadow-[0_30px_100px_-15px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(45,106,79,0.4)] bg-[#09090b]/90 backdrop-blur-xl overflow-hidden ring-1 ring-white/10">
                <div className="bg-white/5 px-5 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="text-[12px] font-medium text-white/50 ml-3">Cuaderno Particional — Exp. 2024-0847</span>
                  </div>
                  <div className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 size={12} /> Generado
                  </div>
                </div>
                
                <div className="bg-white p-6 sm:p-8 min-h-[360px] relative">
                  {/* Document header */}
                  <div className="text-center mb-8">
                    <div className="font-dm-sans font-bold text-base text-ink tracking-[0.04em]">
                      CUADERNO PARTICIONAL
                    </div>
                    <div className="text-sm font-medium text-slate-500 mt-1">
                      Herencia de D. Joan Puig i Ferrer
                    </div>
                  </div>

                  {/* Section 1: Inventario */}
                  <div className="mb-6">
                    <div className="text-[13px] font-bold text-ink mb-3">
                      PRIMERO.— INVENTARIO DE BIENES
                    </div>
                    <div className="h-2 bg-slate-100 rounded mb-2 w-full" />
                    <div className="h-2 bg-slate-100 rounded mb-4 w-4/5" />
                  </div>

                  {/* Simulated table */}
                  <div className="border border-slate-200 rounded-lg overflow-hidden mb-6">
                    {[
                      { name: "Inmueble Girona", value: "€ 425.000", status: "Adjudicat" },
                      { name: "Cta. Bancària", value: "€ 87.340", status: "Adjudicat" },
                      { name: "Fons inversió", value: "€ 156.200", status: "Adjudicat" },
                    ].map((row, i) => (
                      <div key={row.name} className={`grid grid-cols-[1fr_auto_auto] gap-3 px-4 py-2.5 text-[13px] items-center ${i > 0 ? 'border-t border-slate-100' : ''}`}>
                        <span className="text-ink">{row.name}</span>
                        <span className="font-mono text-ink text-right">{row.value}</span>
                        <span className="bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-2 py-0.5 rounded">
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Section 2: Legítima */}
                  <div className="mb-6">
                    <div className="text-[13px] font-bold text-ink mb-2">
                      SEGON.— LEGÍTIMA
                    </div>
                    <div className="font-mono text-base text-emerald-600 font-semibold">
                      € 167.135,00
                    </div>
                  </div>

                  {/* Export Button Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent border-t border-slate-100 flex justify-end">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                      <Download size={16} />
                      Exportar a Word
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EL PROBLEMA ═══ */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container max-w-[720px]">
          <div className="reveal text-center">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              El problema
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-8">
              Copiar datos del Excel al Word no es trabajo jurídico
            </h2>
            <div className="text-left text-[17px] text-slate-600 leading-relaxed space-y-6">
              <p>
                El cuaderno particional es el documento que cierra el expediente sucesorio. Y su redacción, tal como se hace hoy, es un ejercicio de transcripción: copiar nombres y DNIs del inventario, trasladar cifras del cálculo fiscal, insertar referencias normativas consultadas por separado, y revisar tres veces que todo cuadre entre los documentos.
              </p>
              <p>
                Un despacho que gestiona 50 expedientes al año dedica cientos de horas a un trabajo que no requiere criterio jurídico — requiere que los datos no se pierdan entre un documento y otro. Cada transcripción manual es una oportunidad para el error.
              </p>
            </div>
          </div>

          {/* Visual: broken flow diagram */}
          <div className="reveal mt-12">
            <div className="flex items-center justify-center gap-2 sm:gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              {[
                { label: "Excel", icon: <FileText className="text-emerald-600" /> },
                { label: "Word v1", icon: <FileText className="text-blue-600" /> },
                { label: "Word v2", icon: <FileText className="text-blue-600" /> },
                { label: "Word final", icon: <FileText className="text-blue-600" /> },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-2 sm:gap-4">
                  {i > 0 && (
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1 hidden sm:block">copiar</span>
                      <ArrowRight className="text-slate-300" size={16} />
                    </div>
                  )}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold text-slate-500">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RESULTADOS (OUTPUTS) ═══ */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="reveal text-center max-w-[700px] mx-auto mb-16">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Documentos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
              Los 4 documentos que Ulpiano genera automáticamente
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <ClipboardList size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Inventario formal
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-8">
                Declaración del caudal relicto neto con descripción completa de bienes inmuebles, mobiliario, activos financieros, derechos y deudas del causante.
              </p>
            </div>

            {/* Card 2 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <FolderCheck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Cuaderno particional
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-6">
                Documento que especifica qué bienes recibe cada heredero, en qué proporción, y cómo se efectúa el pago de legados, deudas y gastos del expediente.
              </p>
            </div>

            {/* Card 3 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <Stamp size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Escritura de partición
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-6">
                Documento notarial que formaliza la distribución del patrimonio entre herederos. Se firma ante notario y es el título definitivo de transmisión.
              </p>
            </div>

            {/* Card 4 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <Receipt size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Modelos fiscales (650, 660)
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-6">
                Declaraciones de autoliquidación del ISD de cada heredero. Los Models 650 individuales y el Modelo 660 compartido con el inventario de bienes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CÓMO FUNCIONA ═══ */}
      <section id="como-funciona" className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="reveal text-center max-w-[700px] mx-auto mb-20">
            <span className="text-emerald-400 font-bold tracking-wider text-xs uppercase mb-3 block">
              Flujo de datos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              De dato estructurado a documento en tres pasos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-10 left-16 right-16 h-[1px] bg-slate-800" />
            
            {[
              {
                num: "01",
                title: "Consolida en Ulpiano",
                desc: "Rellena el expediente con los bienes, herederos y el cálculo de la legítima. Estos son tus datos maestros.",
              },
              {
                num: "02",
                title: "Genera el borrador",
                desc: "Ulpiano inyecta esos datos maestros en las plantillas jurídicas preconfiguradas, seleccionando las cláusulas correctas.",
              },
              {
                num: "03",
                title: "Exporta a Word",
                desc: "Descarga el documento final. Edita los últimos detalles de formato en tu procesador de textos habitual.",
              },
            ].map((step, i) => (
              <div key={i} className="reveal relative z-10 text-center flex flex-col items-center" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center font-mono text-2xl font-bold text-emerald-400 mb-6 shadow-xl">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[15px] text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARA QUIÉN (SEGMENTOS) ═══ */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container max-w-[900px]">
          <div className="reveal text-center mb-12">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Versatilidad
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Un único generador, infinitas posibilidades
            </h2>
          </div>

          <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
            {["Abogados", "Notarías", "Asesorías"].map((label, i) => (
              <button
                key={label}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-full text-[15px] font-semibold transition-all ${
                  activeTab === i 
                    ? "bg-emerald-500 text-white shadow-md" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="reveal">
            {activeTab === 0 && (
              <TabPanel
                claim="Asegura que el cuaderno cuadra con la liquidación fiscal presentada."
                checks={[
                  "Evita discrepancias entre el modelo 650 y el reparto civil",
                  "Acelera la preparación documental para la firma",
                  "Reduce el tiempo administrativo no facturable",
                ]}
                mockupLabel="Vista Abogado"
              />
            )}
            {activeTab === 1 && (
              <TabPanel
                claim="Recibe expedientes pulidos y listos para elevar a público."
                checks={[
                  "Datos de comparecientes y bienes ya estructurados",
                  "Cálculo de legítimas transparente y comprobable",
                  "Generación ágil de la escritura de partición",
                ]}
                mockupLabel="Vista Notarial"
              />
            )}
            {activeTab === 2 && (
              <TabPanel
                claim="El cierre fiscal no es el final. Entrega el documento jurídico a tu cliente."
                checks={[
                  "Ofrece un servicio integral sucesorio, no solo tributario",
                  "Los datos del modelo 660 nutren directamente el cuaderno",
                  "Seguridad jurídica sin depender de plantillas obsoletas",
                ]}
                mockupLabel="Vista Asesoría"
              />
            )}
          </div>
        </div>
      </section>

      {/* ═══ COMPARATIVA ═══ */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-[900px]">
          <div className="reveal text-center mb-16">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Diferenciadores
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Lo que el copy-paste no puede hacer por ti
            </h2>
          </div>

          <div className="space-y-4">
            {comparisonRows.map((row, i) => (
              <div key={i} className="reveal bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm grid md:grid-cols-2 gap-6 items-center" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="pr-4 md:border-r border-slate-100">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Antes</div>
                  <p className="text-[15px] text-slate-600 leading-relaxed">{row.before}</p>
                </div>
                <div className="pl-0 md:pl-4">
                  <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest mb-2">Con Ulpiano</div>
                  <p className="text-[15.5px] font-medium text-ink leading-relaxed">{row.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="bg-night py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(45,106,79,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="container relative z-10 text-center max-w-[700px]">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            Automatiza la generación de documentos sucesorios hoy
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Descubre cómo Ulpiano elimina horas de trabajo administrativo y asegura coherencia entre el inventario y el cuaderno particional.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/demo" className="btn-primary px-8 py-3.5 shadow-[0_0_20px_rgba(45,106,79,0.4)]">
              Reserva tu demo gratis
            </Link>
            <Link href="/modelos/modelo-660" className="btn-ghost text-white/80 hover:text-white px-6 border border-white/20">
              Ver conexión con el Modelo 660 <ArrowRight size={18} className="ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
