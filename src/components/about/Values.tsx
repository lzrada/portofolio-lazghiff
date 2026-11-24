import { Sparkles, Zap, Palette, Code2 } from "lucide-react";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";

const values = [
  { icon: Palette, title: "Craft first", desc: "Details matter — spacing, timing, tone." },
  { icon: Code2, title: "Ship weekly", desc: "Momentum beats perfection." },
  { icon: Zap, title: "Perform", desc: "60fps or bust. Fast is a feature." },
  { icon: Sparkles, title: "Delight", desc: "Interfaces should feel alive." },
];

export function Values() {
  return (
    <Section eyebrow="Values">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, desc }) => (
          <GlassCard key={title}>
            <Icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
