import { motion } from "framer-motion";

const items = ["Creative Development", "★", "Motion Design", "★", "Design Systems", "★", "3D & WebGL", "★", "Product Engineering", "★"];

export function Marquee() {
  // The list is repeated so the loop never shows a gap
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative flex overflow-hidden border-y border-white/5 py-6">
      <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex shrink-0 items-center gap-12 pr-12 font-display text-3xl text-muted-foreground md:text-5xl">
        {repeated.map((text, i) => (
          <span key={i} className={text === "★" ? "text-primary" : ""}>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
