"use client";

import Link from "next/link";

const items = [
  { id: "650", label: "Sucesiones", href: "/modelos/modelo-650" },
  { id: "651", label: "Donaciones", href: "/modelos/modelo-651" },
  { id: "652", label: "Seguros",    href: "/modelos/modelo-652" },
  { id: "653", label: "Consolidación", href: "/modelos/modelo-653" },
  { id: "660", label: "Inventario", href: "/modelos/modelo-660" },
];

export function ModelNav({ active }: { active: string }) {
  return (
    <nav className="mod-nav" aria-label="Modelos fiscales">
      {items.map((m) => (
        <Link
          key={m.id}
          href={m.href}
          className={`mod-nav__item ${m.id === active ? "mod-nav__item--active" : ""}`}
        >
          <span className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
            {m.id}
          </span>{" "}
          {m.label}
        </Link>
      ))}
    </nav>
  );
}
