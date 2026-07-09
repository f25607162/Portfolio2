import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  center = false,
  className,
}: {
  children: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 mb-4 font-mono text-xs tracking-[3px] uppercase text-brass",
        center && "justify-center",
        className
      )}
    >
      <span className="w-8 h-px bg-brass" />
      {children}
    </div>
  );
}
