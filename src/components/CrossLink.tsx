import Link from "next/link";

type CrossLinkProps = {
  href: string;
  label: string;
  description: string;
};

/**
 * SSR inline cross-link strip — afegeix link juice entre silos sense
 * trencar el disseny existent. S'inclou al page.tsx (Server Component).
 */
export function CrossLink({ href, label, description }: CrossLinkProps) {
  return (
    <div className="bg-night border-t border-white/5 py-4">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/50 m-0 text-center sm:text-left">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0"
        >
          {label} <span className="text-lg leading-none">→</span>
        </Link>
      </div>
    </div>
  );
}
