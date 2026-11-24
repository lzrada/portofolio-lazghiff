import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide the custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setVisible(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement;
      setHover(!!target.closest("a,button,[data-cursor='hover']"));
      setLabel(target.closest("[data-cursor-label]")?.getAttribute("data-cursor-label") ?? "");
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!visible) return null;

  const hasLabel = label !== "";

  return (
    <>
      {/* Dot (follows smoothly). Grows into a labeled circle over cards */}
      <motion.div style={{ x: smoothX, y: smoothY }} className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            width: hasLabel ? 88 : 12,
            height: hasLabel ? 88 : 12,
            opacity: hasLabel ? 1 : hover ? 0.4 : 0.9,
            scale: !hasLabel && hover ? 2.2 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="flex items-center justify-center rounded-full bg-primary text-xs font-medium uppercase tracking-widest text-primary-foreground"
          style={{ boxShadow: "0 0 20px oklch(0.72 0.22 295)" }}
        >
          {hasLabel && label}
        </motion.div>
      </motion.div>

      {/* Ring (follows instantly). Hidden while hovering */}
      <motion.div style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[99] -translate-x-1/2 -translate-y-1/2">
        <motion.div animate={{ scale: hover || hasLabel ? 0 : 1 }} className="h-10 w-10 rounded-full border border-primary/40" />
      </motion.div>
    </>
  );
}
