import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { projects } from "@/data/site";

export function ProjectsPreview() {
  const featured = projects.slice(0, 4);

  return (
    <Section eyebrow="Selected work">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <AnimatedTitle as="h2" text="Recent *projects.*" className="font-display text-4xl font-semibold md:text-6xl" />
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          All projects <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Each card is "sticky": it sticks near the top while the next one slides over it */}
      <div className="mt-14">
        {featured.map((p, i) => (
          <div key={p.slug} className="sticky mb-10" style={{ top: `${110 + i * 28}px` }}>
            <Link to={`/projects/${p.slug}`} data-cursor-label="View" className="group grid overflow-hidden rounded-3xl border border-white/10 shadow-2xl md:h-[420px] md:grid-cols-2" style={{ backgroundColor: "var(--background)" }}>
              {/* Info side */}
              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-primary">
                    0{i + 1} — {p.category}
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground">{p.tagline}</p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.slice(0, 3).map((s) => (
                      <span key={s} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 transition group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary/10">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>

              {/* Visual side */}
              <div className={`relative flex min-h-[220px] items-center justify-center overflow-hidden bg-gradient-to-br p-6 md:p-10 ${p.color}`}>
                <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
                {p.image && <img src={p.image} alt={p.title} className="relative w-full rounded-xl border border-white/20 shadow-2xl transition-transform duration-700 group-hover:scale-[1.04]" />}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
