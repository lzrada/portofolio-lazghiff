import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "@/components/Section";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { PageTransition } from "@/components/PageTransition";
import { usePageTitle } from "@/hooks/UsePageTitle";
import { services } from "@/data/site";

// Index of the card that gets the "Most picked" badge (0 = first card)
const FEATURED_INDEX = 1;

export default function Services() {
  usePageTitle("Services — Lazghiff.dev", "Product design, frontend engineering, and creative development services.");

  return (
    <PageTransition>
      <Section eyebrow="Services">
        <AnimatedTitle as="h1" text="How I can help you *ship.*" className="font-display text-5xl font-semibold leading-[1.05] md:text-6xl" />
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">Pick a starting point — or bundle them. Every engagement includes weekly demos, async video updates, and Figma + Linear access.</p>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => {
            const featured = i === FEATURED_INDEX;

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl glass p-8 ${featured ? "lg:-translate-y-4" : ""}`}
              >
                {/* "Most picked" badge */}
                {featured && <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-xs font-medium text-primary-foreground">Most picked</div>}

                {/* Glow on hover */}
                <div className="absolute -inset-40 -z-10 rounded-full bg-gradient-to-br from-primary to-secondary opacity-0 blur-3xl transition duration-700 group-hover:opacity-20" />

                <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                <div className="mt-2 font-mono text-sm text-muted-foreground">{s.price}</div>

                {/* Feature list */}
                <ul className="mt-8 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="mt-10 inline-flex w-full items-center justify-center rounded-full border border-white/10 px-4 py-3 text-sm transition hover:border-primary/60 hover:bg-primary/10">
                  Start a project
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </PageTransition>
  );
}
