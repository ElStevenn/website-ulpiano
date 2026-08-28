import type { ReactNode } from "react";

export default function LegalTable({ children }: { children: ReactNode }) {
  return (
    <div className="legal-table-wrap">
      <table>{children}</table>
    </div>
  );
}
