import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cn("text-[13px] font-medium uppercase tracking-[0.08em] text-slate", className)}>
      {children}
    </p>
  );
}
