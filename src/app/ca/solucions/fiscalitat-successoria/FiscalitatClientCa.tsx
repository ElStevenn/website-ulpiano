"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Brain,
  Scale,
  RefreshCw,
  Headset,
  ClipboardList,
  SlidersHorizontal,
  FileCheck,
  Receipt,
  AlertTriangle,
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
    before: "Calculables bases imposables a mà amb normativa dispersa",
    after: "El motor fiscal aplica la normativa estatal i autonòmica automàticament",
  },
  {
    before: "Revises bonificacions i reduccions en cada expedient",
    after: "El sistema identifica i aplica tots els avantatges fiscals procedents",
  },
  {
    before: "Emplenes models 650, 660 i 651 en formularis PDF",
    after: "Els models s'autocompleten des de les dades de l'expedient",
  },
  {
    before: "Recalcules si canvia el repartiment o la valoració",
    after: "Els càlculs s'actualitzen en temps real amb cada modificació",
  },
  {
    before: "Consultes la normativa autonòmica per a cada Comunitat",
    after: "La plataforma s'adapta a la CA del causant automàticament",
  },
  {
    before: "Un error de transcripció pot derivar en sanció",
    after: "Dada única propagada a tots els models — sense errors de transcripció",
  },
];

const models = [
  {
    number: "650",
    title: "Autoliquidació de successions",
    desc: "Quota individual per hereu: base imposable, reduccions, tarifa, bonificacions i quota a ingressar.",
    tag: "SUCCESSIONS",
  },
  {
    number: "651",
    title: "Autoliquidació de donacions",
    desc: "Liquidació de l'Impost sobre Donacions inter vivos, amb base, reduccions i quota per donatari.",
    tag: "DONACIONS",
  },
  {
    number: "652",
    title: "Autoliquidació d'assegurances de vida",
    desc: "Tributació de percepcions per assegurances de vida vinculades al fet successori.",
    tag: "ASSEGURANCES",
  },
  {
    number: "653",
    title: "Autoliquidació de consolidacions de domini",
    desc: "Liquidació complementària quan es consolida la plena propietat (extinció d'usdefruit).",
    tag: "CONSOLIDACIÓ",
  },
  {
    number: "660",
    title: "Declaració de successions",
    desc: "Inventari oficial de béns, drets i hereus del causant davant l'administració tributària.",
    tag: "DECLARACIÓ",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */
export function FiscalitatClientCa() {
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
                  Fiscalitat Successòria
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.1] mb-6 reveal tracking-tight" style={{ animationDelay: '100ms' }}>
                Calcula i liquida impostos successoris <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">sense complicacions</span>.
              </h1>
              <p className="text-lg leading-relaxed text-white/60 max-w-[500px] reveal" style={{ animationDelay: '200ms' }}>
                Oblida't de la paperassa i les sorpreses amb Hisenda. L'autoliquidació de models clau es realitza de manera automatitzada, adaptant-se a la normativa estatal i autonòmica.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-10 reveal" style={{ animationDelay: '300ms' }}>
                <Link href="/ca/demo" className="btn-primary shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)] px-8 py-3.5 text-base">
                  Reserva una Demo
                </Link>
                <Link href="/ca/registre" className="btn-ghost group text-white/80 hover:text-white px-6">
                  Crear Compte Gratuït
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 ml-2" />
                </Link>
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
                    <span className="text-[12px] font-medium text-white/50 ml-3">Model 650 — Hereu 1 de 3</span>
                  </div>
                  <div className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 size={12} /> Normativa actualitzada
                  </div>
                </div>
                
                <div className="bg-white p-6 sm:p-8 relative">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="font-dm-sans font-bold text-base text-ink tracking-[0.04em]">
                      MODEL 650
                    </div>
                    <div className="text-sm font-medium text-slate-500 mt-1">
                      Impost sobre Successions — Autoliquidació
                    </div>
                  </div>

                  {/* Simulated rows */}
                  <div className="border border-slate-200 rounded-lg overflow-hidden mb-6">
                    {[
                      { label: "Base imposable", value: "€ 334.200,00" },
                      { label: "Reduccions aplicades", value: "− € 100.000,00" },
                      { label: "Base liquidable", value: "€ 234.200,00" },
                      { label: "Quota íntegra", value: "€ 28.104,00" },
                      { label: "Bonificació CA (99%)", value: "− € 27.822,96" },
                    ].map((row, i) => (
                      <div key={row.label} className={`flex justify-between items-center px-4 py-2.5 text-[13px] ${i > 0 ? 'border-t border-slate-100' : ''}`}>
                        <span className="text-slate-600">{row.label}</span>
                        <span className="font-mono text-ink font-medium">{row.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center pt-4 border-t-2 border-emerald-500">
                    <span className="text-sm font-bold text-ink">Quota a ingressar</span>
                    <span className="font-mono text-xl font-bold text-emerald-600">€ 281,04</span>
                  </div>

                  {/* Badge */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-emerald-100">
                      Bonificació Grup II · Catalunya
                    </span>
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
              Calcular impostos successoris no hauria de ser un exercici de risc
            </h2>
            <div className="text-left text-[17px] text-slate-600 leading-relaxed space-y-6">
              <p>
                Normativa estatal i autonòmica que canvia cada any. Bonificacions que depenen del parentiu, la Comunitat Autònoma i el tipus de bé. Reduccions que s'apliquen en un ordre específic. I formularis oficials que exigeixen que cada xifra quadri amb les altres.
              </p>
              <p>
                Qualsevol canvi en l'inventari o en la distribució de l'herència obliga a recalcular tot des de zero. Això no només multiplica les hores no facturables, sinó que incrementa exponencialment la probabilitat de cometre un error formal o de càlcul que derivi en una comprovació de valors o sanció per part d'Hisenda.
              </p>
            </div>
          </div>

          {/* Visual: broken flow diagram */}
          <div className="reveal mt-12">
            <div className="flex items-center justify-center gap-2 sm:gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              {[
                { label: "Normativa", icon: <Scale className="text-emerald-600" /> },
                { label: "Càlcul", icon: <Calculator className="text-blue-600" /> },
                { label: "Formularis", icon: <FileCheck className="text-blue-600" /> },
                { label: "Hisenda", icon: <Receipt className="text-blue-600" /> },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-2 sm:gap-4">
                  {i > 0 && (
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1 hidden sm:block">manual</span>
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
              Resultats
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
              Compliment fiscal amb garanties i sense esforç
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <Brain size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Motor fiscal intel·ligent
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-8">
                El sistema detecta automàticament la normativa aplicable (estatal i CCAA), calculant les bases, aplicant reduccions per parentiu o habitatge habitual, i determinant la quota íntegra.
              </p>
            </div>

            {/* Card 2 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <RefreshCw size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Recàlcul en temps real
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-6">
                Un hereu renuncia? Apareix un nou compte bancari? En modificar qualsevol dada de l'inventari, tots els models fiscals s'actualitzen automàticament sense intervenció manual.
              </p>
            </div>

            {/* Card 3 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <SlidersHorizontal size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Optimització fiscal guiada
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-6">
                Visualitza diferents escenaris abans de liquidar. Compara l'impacte de donacions en vida vs successió testada i ofereix als teus clients l'estratègia fiscal més favorable amb dades precises.
              </p>
            </div>

            {/* Card 4 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <AlertTriangle size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Prevenció d'errors
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-6">
                Alertes automàtiques sobre terminis de presentació, prescripcions, i advertències si falta documentació obligatòria per aplicar certes bonificacions, protegint el professional i el client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MODELOS CUBIERTOS ═══ */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="reveal text-center max-w-[700px] mx-auto mb-16">
            <span className="text-emerald-400 font-bold tracking-wider text-xs uppercase mb-3 block">
              Cobertura total
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Tots els models que necessites, en un sol lloc
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model, i) => (
              <div key={model.number} className="reveal relative z-10 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800 transition-colors" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex justify-between items-start mb-4">
                  <div className="font-mono text-2xl font-bold text-emerald-400">
                    {model.number}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800 px-2 py-1 rounded">
                    {model.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {model.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {model.desc}
                </p>
              </div>
            ))}
            
            {/* CTA Extra Card */}
            <div className="reveal relative z-10 bg-gradient-to-br from-emerald-900/40 to-slate-800/50 border border-emerald-500/20 rounded-2xl p-6 flex flex-col justify-center items-center text-center" style={{ animationDelay: `500ms` }}>
              <Calculator className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">
                Dubtes sobre quin model presentar?
              </h3>
              <Link href="/ca/models" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium inline-flex items-center mt-2">
                Consultar guia de models <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PARA QUIÉN (SEGMENTOS) ═══ */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container max-w-[900px]">
          <div className="reveal text-center mb-12">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Versatilitat
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Un motor fiscal dissenyat per a professionals
            </h2>
          </div>

          <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
            {["Assessories Fiscals", "Advocats", "Gestories"].map((label, i) => (
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
                claim="La seguretat de liquidar centenars d'expedients sense errors formals."
                checks={[
                  "Càlcul automatitzat de quotes segons la CA del causant",
                  "Aplicació garantida de bonificacions procedents",
                  "Generació de lots per a presentacions telemàtiques",
                ]}
                mockupLabel="Vista Assessoria"
              />
            )}
            {activeTab === 1 && (
              <TabPanel
                claim="Enfoca't en l'estratègia jurídica, nosaltres quadrem els números."
                checks={[
                  "Visualització clara de l'impacte fiscal del quadern particional",
                  "Arguments numèrics per aconsellar als hereus",
                  "Autoliquidacions llestes per entregar al client",
                ]}
                mockupLabel="Vista Advocat"
              />
            )}
            {activeTab === 2 && (
              <TabPanel
                claim="Redueix temps de tramitació i augmenta el teu marge per expedient."
                checks={[
                  "Plantilles i models pre-omplerts sense duplicar dades",
                  "Control de terminis de presentació dels models 650",
                  "Interfície intuïtiva que no requereix ser un expert tributari",
                ]}
                mockupLabel="Vista Gestoria"
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
              Diferenciadors
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              El que el càlcul manual no pot fer per tu
            </h2>
          </div>

          <div className="space-y-4">
            {comparisonRows.map((row, i) => (
              <div key={i} className="reveal bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm grid md:grid-cols-2 gap-6 items-center" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="pr-4 md:border-r border-slate-100">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Abans</div>
                  <p className="text-[15px] text-slate-600 leading-relaxed">{row.before}</p>
                </div>
                <div className="pl-0 md:pl-4">
                  <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest mb-2">Amb Ulpiano</div>
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
            Automatitza la fiscalitat successòria avui
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Descobreix com Ulpiano elimina els errors de càlcul, aplica la normativa correcta i genera els models oficials a l'instant.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/ca/demo" className="btn-primary px-8 py-3.5 shadow-[0_0_20px_rgba(45,106,79,0.4)]">
              Reserva la teva demo gratis
            </Link>
            <Link href="/ca/models" className="btn-ghost text-white/80 hover:text-white px-6 border border-white/20">
              Consultar guia de models <ArrowRight size={18} className="ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
