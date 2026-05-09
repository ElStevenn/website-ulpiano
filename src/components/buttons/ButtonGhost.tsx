import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface ButtonGhostProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  size?: "sm" | "md";
  withArrow?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: "text-sm",
  md: "text-base",
};

export default function ButtonGhost({
  href,
  onClick,
  children,
  size = "md",
  withArrow = false,
  className = "",
}: ButtonGhostProps) {
  const styles = cn(
    "group inline-flex items-center gap-2 font-medium transition-opacity duration-200",
    "text-white/70 hover:text-white focus:outline-none",
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {children}
      {withArrow && (
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {content}
    </button>
  );
}
