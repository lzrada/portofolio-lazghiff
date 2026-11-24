import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { timeline } from "@/data/site";

export function Timeline() {
  return (
    <Section eyebrow="Journey">
      <AnimatedTitle as="h2" text="A short timeline." className="font-display text-4xl font-semibold md:text-5xl" />

      <div className="relative mt-14 border-l border-white/10 pl-8">
        {timeline.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative mb-12 last:mb-0">
            {/* Dot on the line */}
            <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-background" />
            </span>

            <div className="font-mono text-xs uppercase tracking-widest text-primary">{t.year}</div>
            <h3 className="mt-1 font-display text-2xl font-semibold">{t.title}</h3>
            <div className="text-sm text-muted-foreground">{t.org}</div>
            <p className="mt-2 max-w-2xl text-muted-foreground">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
