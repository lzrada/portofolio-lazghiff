import { useRef, type HTMLAttributes, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: ReactNode;
  glow?: boolean;
}

export function GlassCard({ children, glow = false, className = "", ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Save the mouse position inside the card as CSS variables
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`group relative overflow-hidden rounded-2xl glass p-6 ${glow ? "hover:glow-primary" : ""} ${className}`}
      {...(rest as object)}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(300px circle at var(--x) var(--y), oklch(0.72 0.22 295 / 0.15), transparent 60%)",
        }}
      />
      {children}
    </motion.div>
  );
}
