import type { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  eyebrow?: string;
}

export function Section({ children, eyebrow, className = "", ...rest }: Props) {
  return (
    <section className={`relative mx-auto max-w-7xl px-6 py-24 sm:py-32 ${className}`} {...rest}>
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px] shadow-primary" />
          {eyebrow}
        </div>
      )}
      {children}
    </section>
  );
}
