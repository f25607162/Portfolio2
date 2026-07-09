import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className,
  type = "button",
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center gap-2.5 px-8 py-4 rounded-sm text-[13px] tracking-[1.5px] uppercase transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2",
    variant === "primary"
      ? "bg-ink text-cream border border-ink hover:bg-brass hover:border-brass hover:text-ink-deep hover:-translate-y-0.5 dark:bg-brass dark:text-ink-deep dark:border-brass"
      : "bg-transparent text-ink border border-ink hover:border-brass hover:text-brass hover:-translate-y-0.5 dark:text-cream dark:border-cream",
    className
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
