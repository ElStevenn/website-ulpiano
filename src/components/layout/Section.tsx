import { cn } from "@/lib/cn";

interface SectionProps {
  children: React.ReactNode;
  bg?: "dark" | "light" | "neutral";
  className?: string;
  id?: string;
}

const bgStyles = {
  dark: "bg-night text-white",
  light: "bg-white text-ink",
  neutral: "bg-surface text-ink",
};

export default function Section({
  children,
  bg = "light",
  className,
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-20", bgStyles[bg], className)}>
      <div className="max-w-3xl mx-auto px-6 2xl:max-w-4xl">
        {children}
      </div>
    </section>
  );
}
