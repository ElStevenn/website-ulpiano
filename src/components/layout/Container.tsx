import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("max-w-3xl mx-auto px-6 2xl:max-w-4xl", className)}>
      {children}
    </div>
  );
}
