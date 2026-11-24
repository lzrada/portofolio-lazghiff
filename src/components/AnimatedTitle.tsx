import { motion } from "framer-motion";

interface Props {
  text: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
  className?: string;
}

export function AnimatedTitle({ text, as = "h2", delay = 0, className = "" }: Props) {
  const words = text.split(" ");
  const Tag = motion[as];

  return (
    <Tag className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} transition={{ staggerChildren: 0.08, delayChildren: delay }}>
      {words.map((word, i) => {
        // "*alive.*" -> accent word without the stars
        const accent = word.length > 2 && word.startsWith("*") && word.endsWith("*");
        const clean = accent ? word.slice(1, -1) : word;

        return (
          <motion.span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-2 align-bottom" variants={{ hidden: {}, visible: {} }}>
            <motion.span
              className={`inline-block ${accent ? "font-serif-accent text-gradient" : ""}`}
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {clean}
            </motion.span>
          </motion.span>
        );
      })}
    </Tag>
  );
}
