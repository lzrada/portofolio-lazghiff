import { MapPin, BookOpen, Sparkles } from "lucide-react";
import { Section } from "@/components/Section";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { GlassCard } from "@/components/GlassCard";
import { Counter } from "@/components/Counter";

const stats = [
  { value: 2, suffix: "+", label: "Years shipping" },
  { value: 14, suffix: "+", label: "Projects" },
  { value: 7, suffix: "", label: "Awards" },
];

const tools = ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion", "Figma", "Node"];

export function AboutBento() {
  return (
    <Section eyebrow="About">
      <AnimatedTitle as="h1" text="Designer, engineer, and a bit of a *perfectionist.*" className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl" />

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {/* Photo: one tall column, spans the first 3 rows */}
        <GlassCard className="!p-0 aspect-[4/5] lg:row-span-3 lg:aspect-auto lg:min-h-[560px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30" />
          <div className="absolute left-1/2 top-1/4 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
          <img src="/images/profile.png" alt="Muhammad Lazuardi Al Ghiffary" className="absolute inset-0 h-full w-full object-cover object-top" />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </GlassCard>

        {/* Intro text */}
        <GlassCard className="lg:col-span-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <p className="mt-4 text-lg text-muted-foreground">
            I'm <span className="text-foreground">Muhammad Lazuardi Al Ghiffary</span> — a creative developer who cares about motion, typography, and the small moments that turn products into experiences.
          </p>
        </GlassCard>

        {/* Stats */}
        <GlassCard className="lg:col-span-2">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-semibold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Location */}
        <GlassCard>
          <MapPin className="h-5 w-5 text-secondary" />
          <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Based in</div>
          <div className="mt-1 font-display text-xl">Your city</div>
        </GlassCard>

        {/* Currently learning */}
        <GlassCard>
          <BookOpen className="h-5 w-5 text-primary" />
          <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Learning</div>
          <div className="mt-1 font-display text-xl">WebGL & Three.js</div>
        </GlassCard>

        {/* Tools: full width at the bottom */}
        <GlassCard className="lg:col-span-3">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Daily tools</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                {t}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
