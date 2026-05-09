"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { 
  ClipboardList, 
  Network, 
  GitMerge, 
  Wallet, 
  Building, 
  Landmark, 
  Briefcase, 
  Key, 
  Bitcoin, 
  MinusCircle, 
  CheckCircle2,
  ArrowRight
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
   COMPONENTS
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
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div>
        <p className="text-xl font-medium text-ink leading-relaxed mb-8">
          {claim}
        </p>
        <ul className="space-y-4">
          {checks.map((c, i) => (
            <li key={i} className="flex items-start gap-3 text-[15.5px] text-slate-600 leading-relaxed">
              <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center mx-auto mb-4 text-emerald-600">
            <ClipboardList size={28} strokeWidth={1.5} />
          </div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            {mockupLabel}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =============================================
   MAIN COMPONENT
   ============================================= */

export function PlanificadorClient() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeMockupTab, setActiveMockupTab] = useState(0);
  const revealRef = useReveal();

  const mockupData = [
    {
      title: "Inmuebles",
      total: "€ 985.000",
      items: [
        { name: "Piso en Barcelona", value: "€ 450.000" },
        { name: "Casa en Begur", value: "€ 320.000" },
        { name: "Local comercial", value: "€ 215.000" },
      ]
    },
    {
      title: "Cuentas bancarias",
      total: "€ 205.000",
      items: [
        { name: "Cuenta corriente", value: "€ 120.000" },
        { name: "Depósito a plazo", value: "€ 85.000" },
      ]
    },
    {
      title: "Participaciones",
      total: "€ 45.000",
      items: [
        { name: "Acciones empresa S.A.", value: "€ 45.000" },
      ]
    },
    {
      title: "Activos digitales",
      total: "€ 10.800",
      items: [
        { name: "Bitcoin (BTC)", value: "€ 8.500" },
        { name: "Ethereum (ETH)", value: "€ 2.300" },
      ]
    },
    {
      title: "Pasivos",
      total: "€ 185.200",
      isWarning: true,
      items: [
        { name: "Hipoteca inmueble", value: "€ 180.000" },
        { name: "Préstamo personal", value: "€ 5.200" },
      ]
    },
  ];

  const comparisonRows = [
    {
      before: "Varias pestañas de Excel para clasificar inmuebles, cuentas y deudas.",
      after: "Un panel unificado con campos específicos (cargas, coeficientes, valores catastrales) conectado directamente al modelo 660.",
    },
    {
      before: "Cálculo manual del caudal relicto neto con riesgo de error al arrastrar fórmulas.",
      after: "Activos y pasivos deducibles se consolidan automáticamente. El caudal neto se actualiza en tiempo real.",
    },
    {
      before: "Aplicación manual del Código Civil para saber qué le toca a cada heredero.",
      after: "Asignación automática de legítimas, usufructos y prelegados según la normativa autonómica seleccionada.",
    },
    {
      before: "Duplicar el Excel entero para calcular un escenario alternativo (ej: renuncia de herencia).",
      after: "Comparador visual de múltiples escenarios en paralelo. El cliente ve el impacto al instante.",
    },
  ];

  return (
    <div ref={revealRef} className="bg-white">
      {/* ═══ HERO — Dark & Spectacualr ═══ */}
      <section className="relative overflow-hidden bg-night px-6 pt-[calc(64px+5rem)] pb-24 lg:pb-32"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center top'
        }}
      >
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(45,106,79,0.2)_0%,transparent_60%)] opacity-30 blur-[80px] pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Copy */}
            <div className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-emerald-500/50" />
                <span className="text-emerald-400/90 text-xs font-bold tracking-[0.2em] uppercase">
                  Planificación Sucesoria
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
                Todo el patrimonio. Estructurado y listo para distribuir.
              </h1>
              <p className="text-lg leading-relaxed text-white/60 max-w-[500px]">
                Ulpiano consolida bienes, derechos y deudas en un único lugar. Calcula el caudal relicto neto, construye el árbol familiar y respeta automáticamente las legítimas del Codi Civil de Catalunya.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-10">
                <Link href="/demo" className="btn-primary shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)] px-8 py-3.5 text-base">
                  Solicita tu demo gratuita
                </Link>
                <a href="#como-funciona" className="btn-ghost group text-white/80 hover:text-white px-6">
                  Ver cómo funciona 
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="reveal relative z-10" style={{ animationDelay: '200ms' }}>
              <div className="rounded-2xl border border-white/10 shadow-[0_30px_100px_-15px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(45,106,79,0.4)] bg-[#09090b]/90 backdrop-blur-xl overflow-hidden ring-1 ring-white/10">
                <div className="bg-white/5 px-5 py-3 border-b border-white/10 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[12px] font-medium text-white/50 ml-2">Consolidación Patrimonial</span>
                </div>
                
                <div className="flex flex-col sm:flex-row min-h-[320px]">
                  {/* Sidebar */}
                  <div className="sm:w-3/5 border-b sm:border-b-0 sm:border-r border-white/10 p-2 flex flex-col">
                    <div className="flex-1">
                      {[
                        { name: "Inmuebles", count: 3, icon: Building },
                        { name: "Cuentas bancarias", count: 2, icon: Landmark },
                        { name: "Participaciones", count: 1, icon: Briefcase },
                        { name: "Activos digitales", count: 2, icon: Bitcoin },
                        { name: "Pasivos", count: 1, warning: true, icon: MinusCircle },
                      ].map((item, i) => {
                        const isActive = activeMockupTab === i;
                        return (
                          <button 
                            key={i} 
                            onClick={() => setActiveMockupTab(i)}
                            className={`w-[calc(100%-16px)] flex items-center justify-between px-4 py-3 rounded-lg mx-2 mb-1 transition-colors ${isActive ? 'bg-emerald-500/15 border border-emerald-500/20' : 'hover:bg-white/5 border border-transparent'}`}
                          >
                            <div className="flex items-center gap-3 text-[14px] font-medium text-white/80">
                              <item.icon size={16} className={isActive ? 'text-emerald-400' : 'text-white/40'} />
                              {item.name}
                            </div>
                            <div className={`px-2 py-0.5 rounded text-[11px] font-bold ${item.warning ? (isActive ? 'bg-red-500/30 text-red-300' : 'bg-red-500/20 text-red-400') : (isActive ? 'bg-emerald-500/30 text-emerald-300' : 'bg-emerald-500/20 text-emerald-400')}`}>
                              {item.count}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <div className="mt-2 pt-3 border-t border-white/10 px-4 pb-2">
                      <div className="flex justify-between items-end">
                        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-emerald-500">Caudal Relicto Neto</span>
                        <span className="font-mono text-lg font-bold text-emerald-400">€ 1.060.600</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Summary Details */}
                  <div className="sm:w-2/5 p-5 sm:p-6 flex flex-col bg-white/[0.02]">
                    <div className="flex-1">
                      <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/40 mb-4">{mockupData[activeMockupTab].title}</div>
                      <ul className="space-y-3">
                        {mockupData[activeMockupTab].items.map((it, idx) => (
                          <li key={idx} className="flex justify-between items-center text-[13px]">
                            <span className="text-white/70 truncate pr-2" title={it.name}>{it.name}</span>
                            <span className="font-mono text-white/90 whitespace-nowrap">{it.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-white/10 mt-4 flex justify-between items-end">
                      <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/40">Total</span>
                      <span className={`font-mono text-lg font-bold ${mockupData[activeMockupTab].isWarning ? 'text-red-400' : 'text-emerald-400'}`}>
                        {mockupData[activeMockupTab].isWarning ? '− ' : ''}{mockupData[activeMockupTab].total}
                      </span>
                    </div>
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
              La consolidación patrimonial no debería vivir en cinco hojas de cálculo
            </h2>
            <div className="text-left text-[17px] text-slate-600 leading-relaxed space-y-6">
              <p>
                Hoy, el profesional que gestiona una herencia empieza cada expediente de la misma forma: abre un Excel, crea pestañas para inmuebles, cuentas bancarias, deudas. Copia datos de escrituras a mano. Reconstruye el árbol familiar en un Word. Y cuando llega al cálculo de legítimas, ya ha invertido horas en un trabajo puramente administrativo.
              </p>
              <p>
                El resultado: datos dispersos, sin trazabilidad, sin conexión con el cálculo fiscal, y con un riesgo latente de incoherencia entre lo que dice el expediente inicial y lo que aparece en el cuaderno particional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RESULTADOS (OUTPUTS) ═══ */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="reveal text-center max-w-[700px] mx-auto mb-16">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Resultados
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
              Lo que obtienes con el Planificador
            </h2>
            <p className="text-[17px] text-slate-500">
              No listamos funcionalidades sueltas. Te damos resultados listos para usar en el expediente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <ClipboardList size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                El caudal relicto neto, calculado
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-8">
                Registra todos los activos del causante —inmuebles con cargas, cuentas, participaciones societarias y activos digitales— junto con los pasivos deducibles. El sistema consolida y calcula automáticamente el caudal relicto neto.
              </p>
              <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
                <div className="font-mono text-3xl text-emerald-600 font-bold">€ 1.060.600</div>
                <div className="text-sm font-bold uppercase tracking-widest text-slate-400 mt-2">Caudal relicto neto</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Network size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                El diagrama sucesorio, construido solo
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-6">
                Introduce los herederos y sus relaciones. Ulpiano genera el árbol familiar, asigna los grupos de parentesco y calcula las legítimas según el Art. 451-5 del Codi Civil de Catalunya de forma automática.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 text-blue-700 text-sm font-semibold">
                CCCat integrado · Legítimas automáticas
              </div>
            </div>

            {/* Card 3 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <GitMerge size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Opciones de distribución comparadas
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-6">
                Herencia directa vs. donación en vida vs. usufructo. El Planificador calcula el impacto fiscal y civil de cada escenario. Tu cliente entiende qué decide, y tú tienes los números para fundamentarlo.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/50 text-amber-700 text-sm font-semibold">
                Simulación pre-mortem en paralelo
              </div>
            </div>

            {/* Card 4 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <Wallet size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Criptomonedas y huella digital listos
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-6">
                Los activos digitales son una categoría fiscal de primer nivel: criptomonedas con valoración a fecha de devengo, wallets, e instrucciones para redes sociales. Ninguna otra plataforma los trata con esta estructura.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100/50 text-purple-700 text-sm font-semibold">
                Único en España
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CÓMO FUNCIONA ═══ */}
      <section id="como-funciona" className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="reveal text-center max-w-[700px] mx-auto mb-20">
            <span className="text-emerald-400 font-bold tracking-wider text-xs uppercase mb-3 block">
              Proceso
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              De documentos sueltos a una consolidación estructurada
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-10 left-12 right-12 h-[1px] bg-slate-800" />
            
            {[
              {
                num: "01",
                title: "Registra el patrimonio",
                desc: "Inmuebles, cuentas, deudas, activos digitales. Cada categoría tiene campos específicos: cargas, titularidades, coeficientes.",
              },
              {
                num: "02",
                title: "Configura el escenario",
                desc: "Designa herederos, legados y usufructos. El sistema identifica automáticamente los derechos de los legitimarios.",
              },
              {
                num: "03",
                title: "Compara opciones",
                desc: "Evalúa distintas opciones de reparto y visualiza el impacto fiscal de cada una de ellas antes de decidir nada.",
              },
              {
                num: "04",
                title: "Genera documentos",
                desc: "La consolidación alimenta directamente los modelos fiscales y el cuaderno particional. Sin copiar ni rehacer tablas.",
              },
            ].map((step, i) => (
              <div key={i} className="reveal relative z-10" style={{ animationDelay: `${i * 100}ms` }}>
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
              Segmentos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Diseñado para quien gestiona herencias con volumen
            </h2>
          </div>

          <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
            {["Despachos de abogados", "Asesorías fiscales", "Notarías"].map((label, i) => (
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
                claim="La consolidación patrimonial que montabas en dos días, lista en una sesión de trabajo."
                checks={[
                  "Todos los bienes del causante en un único panel con trazabilidad",
                  "Legítimas y cuotas calculadas con el derecho foral catalán",
                  "Conecta directamente con el módulo fiscal y el cuaderno particional",
                ]}
                mockupLabel="Vista del Despacho"
              />
            )}
            {activeTab === 1 && (
              <TabPanel
                claim="La base imponible empieza aquí. Y llega al Modelo 650 sin errores de transcripción."
                checks={[
                  "Datos del patrimonio estructurados para alimentar el motor ISD",
                  "Valoraciones a fecha de devengo, no estimaciones manuales",
                  "Trazabilidad auditable ante la ATC desde el primer asiento",
                ]}
                mockupLabel="Vista Fiscal"
              />
            )}
            {activeTab === 2 && (
              <TabPanel
                claim="El testamento define la voluntad. El Planificador organiza el patrimonio que la sustenta."
                checks={[
                  "Visión consolidada de todo lo que el testador posee y debe",
                  "Configuración de figuras jurídicas alineada con la práctica",
                  "Documentación centralizada y cifrada para cada expediente",
                ]}
                mockupLabel="Vista Notarial"
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
              Lo que Excel no puede hacer por ti
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
            Planifica la sucesión antes del fallecimiento. O resuélvela de inmediato si ya ha ocurrido.
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Descubre cómo el Planificador elimina las horas de trabajo administrativo y minimiza el riesgo de errores en la consolidación del patrimonio.
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
