import { Section } from "@/components/Section";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { GlassCard } from "@/components/GlassCard";
import { services } from "@/data/site";

export function ServicesPreview() {
  return (
    <Section eyebrow="Services">
      <AnimatedTitle as="h2" text="What I *do.*" className="font-display text-4xl font-semibold md:text-6xl" />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <GlassCard key={s.title} className="!p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">0{i + 1}</div>
            <h3 className="mt-4 font-display text-2xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.features.slice(0, 2).join(" · ")}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
