"use client";

import Link from "next/link";

const items = [
  { id: "650", label: "Successions",    href: "/ca/models/model-650" },
  { id: "651", label: "Donacions",      href: "/ca/models/model-651" },
  { id: "652", label: "Assegurances",   href: "/ca/models/model-652" },
  { id: "653", label: "Consolidació",   href: "/ca/models/model-653" },
  { id: "660", label: "Inventari",      href: "/ca/models/model-660" },
];

export function ModelNavCa({ active }: { active: string }) {
  return (
    <nav className="mod-nav" aria-label="Models fiscals">
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
