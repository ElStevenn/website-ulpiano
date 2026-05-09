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
    title: "Certificados de defunción",
    desc: "Identificación del causante, fecha y lugar de defunción. Extracción de nombres completos, DNI/NIE y fecha de nacimiento.",
  },
  {
    icon: <FileSignature size={24} />,
    title: "Testamentos",
    desc: "Ológrafos, notariales o apócrifos. Extracción del árbol familiar, disposiciones testamentarias y legados específicos.",
  },
  {
    icon: <FileBadge2 size={24} />,
    title: "Escrituras públicas",
    desc: "Escrituras de compraventa, donaciones mortis causa, constituciones de derechos reales. Identificación de inmuebles.",
  },
  {
    icon: <FileSearch size={24} />,
    title: "Últimas voluntades",
    desc: "Declaraciones de voluntad inscritas en el Registro General de Actos de Última Voluntad. Identificación del notario y fecha.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Notas simples del Registro",
    desc: "Titularidades de bienes inmuebles inscritos. Extracción de descripción de fincas, cargas, usufructos y cuotas de propiedad.",
  },
  {
    icon: <Landmark size={24} />,
    title: "Certificados bancarios",
    desc: "Extractos de cuentas corrientes, depósitos, fondos de inversión y cajas de seguridad. Saldos a fecha de devengo y titulares.",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */
export function ProcesamientoDocumentalClient() {
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
                  Procesamiento Documental
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.1] mb-6 reveal tracking-tight" style={{ animationDelay: '100ms' }}>
                OCR e Inteligencia Artificial aplicados al <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">derecho sucesorio</span>.
              </h1>
              <p className="text-lg leading-relaxed text-white/60 max-w-[500px] reveal" style={{ animationDelay: '200ms' }}>
                Digitaliza, clasifica y extrae información de certificados de defunción, testamentos, escrituras, notas simples y certificados bancarios. Sin picar datos a mano.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-10 reveal" style={{ animationDelay: '300ms' }}>
                <Link href="/registro" className="btn-primary shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)] px-8 py-3.5 text-base">
                  Crear Cuenta Gratis
                </Link>
                <Link href="/demo" className="btn-ghost group text-white/80 hover:text-white px-6">
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
                    <span className="text-[12px] font-medium text-white/50 ml-3">Procesamiento Documental</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 relative">
                  {/* Upload area */}
                  <div className="border-2 border-dashed border-slate-200 bg-slate-50/50 rounded-xl p-8 flex flex-col items-center justify-center text-center mb-6 transition-colors hover:bg-slate-50 hover:border-emerald-500/30 cursor-pointer group">
                    <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-emerald-500 transition-colors mb-3">
                      <UploadCloud size={24} />
                    </div>
                    <div className="text-sm font-semibold text-ink mb-1">Arrastra documentos aquí</div>
                    <div className="text-xs text-slate-500">PDF, escaneados, imágenes (JPG, PNG)</div>
                  </div>

                  {/* Document list */}
                  <div className="space-y-1">
                    {[
                      { name: "Certificado_Defuncion.pdf", status: "Procesado", statusColor: "emerald", progress: 100 },
                      { name: "Testamento_Notarial.pdf", status: "Procesado", statusColor: "emerald", progress: 100 },
                      { name: "DNI_Causante.jpg", status: "Procesado", statusColor: "emerald", progress: 100 },
                      { name: "Escritura_Propiedad.pdf", status: "Analizando...", statusColor: "amber", progress: 65 },
                      { name: "Nota_Simple_Registro.pdf", status: "En cola", statusColor: "slate", progress: 0 },
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
              Tipología documental
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
              Documentos que Ulpiano procesa automáticamente
            </h2>
            <p className="text-[17px] text-slate-500">
              Nuestro motor de IA está entrenado específicamente para reconocer los formatos, estructuras y terminología propios del derecho notarial y registral español.
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
              Tecnología
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              De documento plano a dato estructurado
            </h2>
            <p className="text-[17px] text-slate-400">
              Ulpiano utiliza OCR de alta precisión (incluso para documentos manuscritos o escaneados de baja calidad) y modelos de IA para estructurar automáticamente los datos extraídos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-10 left-12 right-12 h-[1px] bg-slate-800" />
            
            {[
              {
                num: "01",
                title: "Captura de documentos",
                desc: "Carga de imágenes, PDFs o documentos digitalizados. Los archivos se procesan de forma segura en infraestructura cifrada.",
                icon: <UploadCloud size={24} />
              },
              {
                num: "02",
                title: "Reconocimiento OCR",
                desc: "Conversión de la imagen a texto digital procesable. Soporta documentos dañados, manuscritos y sellos notariales borrosos.",
                icon: <ScanLine size={24} />
              },
              {
                num: "03",
                title: "Clasificación IA",
                desc: "El modelo identifica el tipo de documento (testamento, nota simple, certificado), y aísla los campos relevantes según su contexto jurídico.",
                icon: <BrainCircuit size={24} />
              },
              {
                num: "04",
                title: "Validación e indexación",
                desc: "El usuario verifica las previsiones de la IA, corrige si es necesario con un clic, e importa los datos estructurados al expediente Ulpiano.",
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
              Beneficios
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Gana tiempo en la recepción de documentos
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <Zap className="text-amber-500" size={24} />,
                title: "Velocidad de procesamiento",
                desc: "En lugar de invertir 30 minutos leyendo una escritura y copiando linderos a mano, la IA extrae toda la información registral y notarial en apenas 10 segundos.",
              },
              {
                icon: <ShieldCheck className="text-emerald-500" size={24} />,
                title: "Precisión y mitigación de errores",
                desc: "El OCR combinado con modelos de procesamiento de lenguaje natural (NLP) minimiza errores de lectura. La validación se realiza siempre sobre una propuesta ya estructurada, evitando el error de 'dedo'.",
              },
              {
                icon: <RefreshCw className="text-blue-500" size={24} />,
                title: "Reutilización total en el expediente",
                desc: "Los datos extraídos de un documento se reutilizan automáticamente en todo el ecosistema Ulpiano. Si la nota registral extrae un inmueble, éste se añade directamente al inventario y al Modelo 660.",
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
            Digitaliza la entrada de documentos sin picar datos a mano
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Descubre cómo el procesamiento inteligente reduce drásticamente el tiempo de tramitación inicial de cada expediente sucesorio.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/demo" className="btn-primary px-8 py-3.5 shadow-[0_0_20px_rgba(45,106,79,0.4)]">
              Solicita tu demo gratis
            </Link>
            <Link href="/registro" className="btn-ghost text-white/80 hover:text-white px-6 border border-white/20">
              Crear cuenta ahora <ArrowRight size={18} className="ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
