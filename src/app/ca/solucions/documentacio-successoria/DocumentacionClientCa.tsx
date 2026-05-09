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
    before: "Còpies noms i NIFs de l'inventari al quadern particional",
    after: "Les dades de l'inventari s'insereixen automàticament",
  },
  {
    before: "Trasllades xifres del càlcul fiscal al document",
    after: "Les xifres venen del motor ISD — coherents per disseny",
  },
  {
    before: "Consultes la norma per citar articles",
    after: "Les referències legals s'insereixen segons el dret aplicable",
  },
  {
    before: "Revises tres vegades que tot coincideixi entre documents",
    after: "Una dada s'introdueix una vegada — apareix correcte en tots",
  },
  {
    before: "Mantens 5 versions del quadern particional a la teva carpeta",
    after: "Un esborrany versionat que s'actualitza amb l'expedient",
  },
  {
    before: "Adaptes clàusules a mà segons el tipus de successió",
    after: "Les clàusules se seleccionen segons successió testada, intestada o pactada",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */
export function DocumentacionClientCa() {
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
                  Documentació Successòria
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.1] mb-6 reveal tracking-tight" style={{ animationDelay: '100ms' }}>
                De l'expedient al quadern particional. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Automàticament</span>.
              </h1>
              <p className="text-lg leading-relaxed text-white/60 max-w-[500px] reveal" style={{ animationDelay: '200ms' }}>
                Ulpiano genera tota la documentació definitiva directament des de les dades estructurades de l'expedient: quadern particional, escriptura de partició, inventari formal i models fiscals. Sense copiar dades manuals. Sense errors de transcripció.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-10 reveal" style={{ animationDelay: '300ms' }}>
                <Link href="/ca/demo" className="btn-primary shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)] px-8 py-3.5 text-base">
                  Sol·licita la teva demo gratuïta
                </Link>
                <a href="#como-funciona" className="btn-ghost group text-white/80 hover:text-white px-6">
                  Veure com funciona 
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
                    <span className="text-[12px] font-medium text-white/50 ml-3">Quadern Particional — Exp. 2024-0847</span>
                  </div>
                  <div className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 size={12} /> Generat
                  </div>
                </div>
                
                <div className="bg-white p-6 sm:p-8 min-h-[360px] relative">
                  {/* Document header */}
                  <div className="text-center mb-8">
                    <div className="font-dm-sans font-bold text-base text-ink tracking-[0.04em]">
                      QUADERN PARTICIONAL
                    </div>
                    <div className="text-sm font-medium text-slate-500 mt-1">
                      Herència de D. Joan Puig i Ferrer
                    </div>
                  </div>

                  {/* Section 1: Inventari */}
                  <div className="mb-6">
                    <div className="text-[13px] font-bold text-ink mb-3">
                      PRIMER.— INVENTARI DE BÉNS
                    </div>
                    <div className="h-2 bg-slate-100 rounded mb-2 w-full" />
                    <div className="h-2 bg-slate-100 rounded mb-4 w-4/5" />
                  </div>

                  {/* Simulated table */}
                  <div className="border border-slate-200 rounded-lg overflow-hidden mb-6">
                    {[
                      { name: "Immoble Girona", value: "€ 425.000", status: "Adjudicat" },
                      { name: "Cte. Bancari", value: "€ 87.340", status: "Adjudicat" },
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
              Copiar dades de l'Excel al Word no és treball jurídic
            </h2>
            <div className="text-left text-[17px] text-slate-600 leading-relaxed space-y-6">
              <p>
                El quadern particional és el document que tanca l'expedient successori. I la seva redacció, tal com es fa avui, és un exercici de transcripció: copiar noms i DNIs de l'inventari, traslladar xifres del càlcul fiscal, inserir referències normatives consultades per separat, i revisar tres vegades que tot quadri entre els documents.
              </p>
              <p>
                Un despatx que gestiona 50 expedients a l'any dedica centenars d'hores a un treball que no requereix criteri jurídic — requereix que les dades no es perdin entre un document i un altre. Cada transcripció manual és una oportunitat per a l'error.
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
              Documents
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
              Els 4 documents que Ulpiano genera automàticament
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <ClipboardList size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Inventari formal
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-8">
                Declaració del cabal relicte net amb descripció completa de béns immobles, mobiliari, actius financers, drets i deutes del causant.
              </p>
            </div>

            {/* Card 2 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <FolderCheck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Quadern particional
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-6">
                Document que especifica quins béns rep cada hereu, en quina proporció, i com es fa el pagament de legats, deutes i despeses de l'expedient.
              </p>
            </div>

            {/* Card 3 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <Stamp size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Escriptura de partició
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-6">
                Document notarial que formalitza la distribució del patrimoni entre hereus. Es firma davant notari i és el títol definitiu de transmissió.
              </p>
            </div>

            {/* Card 4 */}
            <div className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <Receipt size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Models fiscals (650, 660)
              </h3>
              <p className="text-[15.5px] text-slate-600 leading-relaxed mb-6">
                Declaracions d'autoliquidació de l'ISD de cada hereu. Els Models 650 individuals i el Model 660 compartit amb l'inventari de béns.
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
              Flux de dades
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              De dada estructurada a document en tres passos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-10 left-16 right-16 h-[1px] bg-slate-800" />
            
            {[
              {
                num: "01",
                title: "Consolida en Ulpiano",
                desc: "Emplena l'expedient amb els béns, hereus i el càlcul de la llegítima. Aquestes són les teves dades mestres.",
              },
              {
                num: "02",
                title: "Genera l'esborrany",
                desc: "Ulpiano injecta aquestes dades mestres a les plantilles jurídiques preconfigurades, seleccionant les clàusules correctes.",
              },
              {
                num: "03",
                title: "Exporta a Word",
                desc: "Descarrega el document final. Edita els últims detalls de format al teu processador de textos habitual.",
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
              Versatilitat
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Un únic generador, infinites possibilitats
            </h2>
          </div>

          <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
            {["Advocats", "Notaries", "Assessories"].map((label, i) => (
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
                claim="Assegura que el quadern quadra amb la liquidació fiscal presentada."
                checks={[
                  "Evita discrepàncies entre el model 650 i el repartiment civil",
                  "Accelera la preparació documental per a la signatura",
                  "Redueix el temps administratiu no facturable",
                ]}
                mockupLabel="Vista Advocat"
              />
            )}
            {activeTab === 1 && (
              <TabPanel
                claim="Rep expedients polits i llestos per elevar a públic."
                checks={[
                  "Dades de compareixents i béns ja estructurades",
                  "Càlcul de llegítimes transparent i comprovable",
                  "Generació àgil de l'escriptura de partició",
                ]}
                mockupLabel="Vista Notarial"
              />
            )}
            {activeTab === 2 && (
              <TabPanel
                claim="El tancament fiscal no és el final. Entrega el document jurídic al teu client."
                checks={[
                  "Ofereix un servei integral successori, no només tributari",
                  "Les dades del model 660 nodreixen directament el quadern",
                  "Seguretat jurídica sense dependre de plantilles obsoletes",
                ]}
                mockupLabel="Vista Assessoria"
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
              El que el copy-paste no pot fer per tu
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
            Automatitza la generació de documents successoris avui
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Descobreix com Ulpiano elimina hores de treball administratiu i assegura coherència entre l'inventari i el quadern particional.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/ca/demo" className="btn-primary px-8 py-3.5 shadow-[0_0_20px_rgba(45,106,79,0.4)]">
              Sol·licita la teva demo gratuïta
            </Link>
            <Link href="/ca/models/model-660" className="btn-ghost text-white/80 hover:text-white px-6 border border-white/20">
              Veure connexió amb el Model 660 <ArrowRight size={18} className="ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
