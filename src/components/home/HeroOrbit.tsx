import { motion, type MotionValue } from "framer-motion";
import { Sparkles } from "lucide-react";

const badges = [
  { label: "React", angle: 0 },
  { label: "TypeScript", angle: 60 },
  { label: "Motion", angle: 120 },
  { label: "Three.js", angle: 180 },
  { label: "Design", angle: 240 },
  { label: "Node", angle: 300 },
];

interface Props {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
}

export function HeroOrbit({ rotateX, rotateY }: Props) {
  return (
    <motion.div style={{ rotateX, rotateY, transformPerspective: 1000 }} className="relative mx-auto aspect-square w-full max-w-md">
      {/* Rotating rings */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-white/10" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-6 rounded-full border border-white/10" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-12 rounded-full border border-primary/20" />

      {/* Floating tech badges placed around the circle */}
      {badges.map((b, i) => {
        const rad = (b.angle * Math.PI) / 180;
        return (
          <motion.div
            key={b.label}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
            style={{
              position: "absolute",
              top: `calc(50% + ${Math.sin(rad) * 46}%)`,
              left: `calc(50% + ${Math.cos(rad) * 46}%)`,
              transform: "translate(-50%, -50%)",
            }}
            className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest"
          >
            {b.label}
          </motion.div>
        );
      })}

      {/* Center circle with the letter */}
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="absolute inset-16 overflow-hidden rounded-full glass glow-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <img src="/images/profile.png" alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
      </motion.div>

      {/* Floating label */}
      <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -right-2 top-8 flex items-center gap-2 rounded-full glass px-4 py-2 text-xs">
        <Sparkles className="h-3 w-3 text-primary" /> Awwwards ready
      </motion.div>
    </motion.div>
  );
}
