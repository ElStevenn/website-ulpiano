"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Faq = { q: string; a: string };

function FaqItem({ q, a }: Faq) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid var(--mist)", padding: "var(--space-4) 0" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          padding: 0,
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: 16,
          color: "var(--ink)",
          lineHeight: 1.4,
          gap: "var(--space-4)",
        }}
        aria-expanded={open}
      >
        {q}
        <ChevronDown
          size={18}
          style={{
            flexShrink: 0,
            color: "var(--slate)",
            transition: "transform 200ms ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <div
        style={{
          maxHeight: open ? 600 : 0,
          overflow: "hidden",
          transition: "max-height 300ms ease",
        }}
      >
        <p
          style={{
            fontSize: 15,
            color: "var(--slate)",
            lineHeight: 1.7,
            marginTop: "var(--space-3)",
            paddingBottom: "var(--space-2)",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export function Modelo652InteractiveShells({ faqs }: { faqs: Faq[] }) {
  return (
    <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
      <div className="container">
        <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
          FAQ
        </div>
        <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 520 }}>
          Preguntas frecuentes sobre el Modelo 652
        </h2>
        <div style={{ marginTop: "var(--space-10)", maxWidth: 720 }}>
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
