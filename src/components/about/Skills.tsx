import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { skills } from "@/data/site";

export function Skills() {
  return (
    <Section eyebrow="Skills">
      <AnimatedTitle as="h2" text="Tools of the trade." className="font-display text-4xl font-semibold md:text-5xl" />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skills.map((s, i) => (
          <motion.div key={s.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <div className="mb-2 flex items-baseline justify-between">
              <span className="text-sm text-foreground">{s.name}</span>
              <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
            </div>

            {/* Progress bar */}
            <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.05 }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
