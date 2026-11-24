import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";
import { Section } from "@/components/Section";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { GlassCard } from "@/components/GlassCard";
import { Counter } from "@/components/Counter";

const stats = [
  { value: 2, suffix: "+", label: "Years shipping" },
  { value: 14, suffix: "+", label: "Projects" },
  { value: 7, suffix: "", label: "Awards" },
];

const tags = ["Motion", "Design Systems", "React", "NextJs", "TypeScript"];

export function AboutIntro() {
  return (
    <Section eyebrow="About">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        {/* Left column: text + stats */}
        <div>
          <AnimatedTitle as="h1" text="Designer, engineer, and a bit of a *perfectionist.*" className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl" />
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-8 max-w-xl text-lg text-muted-foreground">
            I'm Muhammad Lazuardi Al Ghiffary — a creative developer with two years of shipping interfaces that people actually enjoy using. I care about motion, typography, and the small moments that turn products into experiences.
          </motion.p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <GlassCard key={s.label} className="!p-5">
                <div className="font-display text-3xl font-semibold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Right column: decorative card */}
        <div className="relative">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="group relative aspect-[4/5] overflow-hidden rounded-3xl glass">
            {/* Background glow behind the photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30" />
            <div className="absolute left-1/2 top-1/3 h-3/4 w-3/4 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute inset-0 bg-noise opacity-20" />

            {/* Photo */}
            <img src="/images/profile.png" alt="Muhammad Lazuardi Al Ghiffary" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />

            {/* Dark fade at the bottom so the tags are readable */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs backdrop-blur">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Floating icons */}
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -right-4 -top-4 flex h-20 w-20 items-center justify-center rounded-2xl glass glow-primary">
            <Sparkles className="h-8 w-8 text-primary" />
          </motion.div>
          <motion.div animate={{ y: [0, 14, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -bottom-4 -left-4 flex h-20 w-20 items-center justify-center rounded-2xl glass">
            <Zap className="h-8 w-8 text-secondary" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
