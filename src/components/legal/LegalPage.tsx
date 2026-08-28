import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  updatedLabel: string;
  children: ReactNode;
};

export default function LegalPage({ title, updatedLabel, children }: LegalPageProps) {
  return (
    <article className="legal-page pt-28 pb-20 px-6">
      <div className="legal-prose max-w-3xl mx-auto prose prose-slate">
        <h1>{title}</h1>
        <p className="text-slate">{updatedLabel}</p>
        {children}
      </div>
    </article>
  );
}
