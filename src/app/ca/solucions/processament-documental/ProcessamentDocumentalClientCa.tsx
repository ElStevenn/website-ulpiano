"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ScanLine,
  BrainCircuit,
  Tags,
  CheckCircle2,
  UploadCloud,
  FileSearch,
  FileText,
  FileSignature,
  FileBadge2,
  Building2,
  Landmark,
  ArrowRight,
  Clock,
  ShieldCheck,
  Zap,
  RefreshCw,
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
   DATA
   ============================================= */
const documentTypes = [
  {
    icon: <FileText size={24} />,
    title: "Certificats de defunció",
    desc: "Identificació del causant, data i lloc de defunció. Extracció de noms complets, DNI/NIE i data de naixement.",
  },
  {
    icon: <FileSignature size={24} />,
    title: "Testaments",
    desc: "Ològrafs, notarials o apòcrifs. Extracció de l'arbre familiar, disposicions testamentàries i llegats específics.",
  },
  {
    icon: <FileBadge2 size={24} />,
    title: "Escriptures públiques",
    desc: "Escriptures de compravenda, donacions mortis causa, constitucions de drets reals. Identificació d'immobles.",
  },
  {
    icon: <FileSearch size={24} />,
    title: "Últimes voluntats",
    desc: "Declaracions de voluntat inscrites en el Registre General d'Actes d'Última Voluntat. Identificació del notari i data.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Notes simples del Registre",
    desc: "Titularitats de béns immobles inscrits. Extracció de descripció de finques, càrregues, usdefruits i quotes de propietat.",
  },
  {
    icon: <Landmark size={24} />,
    title: "Certificats bancaris",
    desc: "Extractes de comptes corrents, dipòsits, fons d'inversió i caixes de seguretat. Saldos a data de meritació i titulars.",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */
export function ProcessamentDocumentalClientCa() {
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
                  Processament Documental
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.1] mb-6 reveal tracking-tight" style={{ animationDelay: '100ms' }}>
                OCR i Intel·ligència Artificial aplicats al <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">dret successori</span>.
              </h1>
              <p className="text-lg leading-relaxed text-white/60 max-w-[500px] reveal" style={{ animationDelay: '200ms' }}>
                Digitalitza, classifica i extreu informació de certificats de defunció, testaments, escriptures, notes simples i certificats bancaris. Sense picar dades a mà.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-10 reveal" style={{ animationDelay: '300ms' }}>
                <Link href="/ca/registre" className="btn-primary shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)] px-8 py-3.5 text-base">
                  Crear Compte Gratuït
                </Link>
                <Link href="/ca/demo" className="btn-ghost group text-white/80 hover:text-white px-6">
                  Reserva una Demo
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
                    <span className="text-[12px] font-medium text-white/50 ml-3">Processament Documental</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 relative">
                  {/* Upload area */}
                  <div className="border-2 border-dashed border-slate-200 bg-slate-50/50 rounded-xl p-8 flex flex-col items-center justify-center text-center mb-6 transition-colors hover:bg-slate-50 hover:border-emerald-500/30 cursor-pointer group">
                    <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-emerald-500 transition-colors mb-3">
                      <UploadCloud size={24} />
                    </div>
                    <div className="text-sm font-semibold text-ink mb-1">Arrossega documents aquí</div>
                    <div className="text-xs text-slate-500">PDF, escanejats, imatges (JPG, PNG)</div>
                  </div>

                  {/* Document list */}
                  <div className="space-y-1">
                    {[
                      { name: "Certificat_Defuncio.pdf", status: "Processat", statusColor: "emerald", progress: 100 },
                      { name: "Testament_Notarial.pdf", status: "Processat", statusColor: "emerald", progress: 100 },
                      { name: "DNI_Causant.jpg", status: "Processat", statusColor: "emerald", progress: 100 },
                      { name: "Escriptura_Propietat.pdf", status: "Analitzant...", statusColor: "amber", progress: 65 },
                      { name: "Nota_Simple_Registre.pdf", status: "En cua", statusColor: "slate", progress: 0 },
                    ].map((doc, i) => (
                      <div key={i} className="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3 min-w-0">
                          <FileText className="text-slate-400 flex-shrink-0" size={16} />
                          <span className="text-[13px] font-medium text-slate-700 truncate">{doc.name}</span>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                          {doc.progress > 0 && doc.progress < 100 && (
                            <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
                              <div className="h-full bg-amber-500 rounded-full" style={{ width: `${doc.progress}%` }} />
                            </div>
                          )}
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border
                            ${doc.statusColor === 'emerald' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : ''}
                            ${doc.statusColor === 'amber' ? 'bg-amber-50 text-amber-700 border-amber-100' : ''}
                            ${doc.statusColor === 'slate' ? 'bg-slate-100 text-slate-600 border-slate-200' : ''}
                          `}>
                            {doc.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TIPOLOGÍA (DOCUMENTS PROCESSATS) ═══ */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container">
          <div className="reveal text-center max-w-[700px] mx-auto mb-16">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Tipologia documental
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
              Documents que Ulpiano processa automàticament
            </h2>
            <p className="text-[17px] text-slate-500">
              El nostre motor d'IA està entrenat específicament per a reconèixer els formats, estructures i terminologia propis del dret notarial i registral.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {documentTypes.map((doc, i) => (
              <div key={i} className="reveal bg-slate-50 rounded-3xl p-8 border border-slate-200 transition-all hover:shadow-md hover:bg-white" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 border border-emerald-100/50">
                  {doc.icon}
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">
                  {doc.title}
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  {doc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECNOLOGÍA (CÓMO FUNCIONA) ═══ */}
      <section id="como-funciona" className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="reveal text-center max-w-[700px] mx-auto mb-20">
            <span className="text-emerald-400 font-bold tracking-wider text-xs uppercase mb-3 block">
              Tecnologia
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              De document pla a dada estructurada
            </h2>
            <p className="text-[17px] text-slate-400">
              Ulpiano utilitza OCR d'alta precisió (fins i tot per a documents manuscrits o escanejats de baixa qualitat) i models d'IA per a estructurar automàticament les dades extretes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-10 left-12 right-12 h-[1px] bg-slate-800" />
            
            {[
              {
                num: "01",
                title: "Captura de documents",
                desc: "Càrrega d'imatges, PDFs o documents digitalitzats. Els fitxers es processen de forma segura en infraestructura xifrada.",
                icon: <UploadCloud size={24} />
              },
              {
                num: "02",
                title: "Reconeixement OCR",
                desc: "Conversió de la imatge a text digital processable. Suporta documents danyats, manuscrits i segells notarials borrosos.",
                icon: <ScanLine size={24} />
              },
              {
                num: "03",
                title: "Classificació IA",
                desc: "El model identifica el tipus de document (testament, nota simple, certificat), i aïlla els camps rellevants segons el seu context jurídic.",
                icon: <BrainCircuit size={24} />
              },
              {
                num: "04",
                title: "Validació i indexació",
                desc: "L'usuari verifica les previsions de la IA, corregeix si és necessari amb un clic, i importa les dades estructurades a l'expedient Ulpiano.",
                icon: <Tags size={24} />
              },
            ].map((step, i) => (
              <div key={i} className="reveal relative z-10" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center font-mono text-2xl font-bold text-emerald-400 mb-6 shadow-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10">{step.num}</span>
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

      {/* ═══ BENEFICIOS ═══ */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-[900px]">
          <div className="reveal text-center mb-16">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Beneficis
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Guanya temps en la recepció de documents
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <Zap className="text-amber-500" size={24} />,
                title: "Velocitat de processament",
                desc: "En lloc d'invertir 30 minuts llegint una escriptura i copiant límits a mà, la IA extreu tota la informació registral i notarial en tot just 10 segons.",
              },
              {
                icon: <ShieldCheck className="text-emerald-500" size={24} />,
                title: "Precisió i mitigació d'errors",
                desc: "L'OCR combinat amb models de processament de llenguatge natural (NLP) minimitza errors de lectura. La validació es realitza sempre sobre una proposta ja estructurada, evitant l'error de 'dit'.",
              },
              {
                icon: <RefreshCw className="text-blue-500" size={24} />,
                title: "Reutilització total a l'expedient",
                desc: "Les dades extretes d'un document es reutilitzen automàticament en tot l'ecosistema Ulpiano. Si la nota registral extreu un immoble, aquest s'afegeix directament a l'inventari i al Model 660.",
              },
            ].map((item, i) => (
              <div key={i} className="reveal bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-start" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-ink mb-2">{item.title}</h3>
                  <p className="text-[15.5px] text-slate-600 leading-relaxed m-0">{item.desc}</p>
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
            Digitalitza l'entrada de documents sense picar dades a mà
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Descobreix com el processament intel·ligent redueix dràsticament el temps de tramitació inicial de cada expedient successori.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/ca/demo" className="btn-primary px-8 py-3.5 shadow-[0_0_20px_rgba(45,106,79,0.4)]">
              Sol·licita la teva demo gratis
            </Link>
            <Link href="/ca/registre" className="btn-ghost text-white/80 hover:text-white px-6 border border-white/20">
              Crear compte ara <ArrowRight size={18} className="ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
