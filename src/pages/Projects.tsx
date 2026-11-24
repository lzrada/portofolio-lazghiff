import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { PageTransition } from "@/components/PageTransition";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { usePageTitle } from "@/hooks/UsePageTitle";
import { projects } from "@/data/site";

// Filter buttons: "All" + every category found in the data
const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  usePageTitle("Projects — Lazghiff", "Selected work — from SaaS platforms to WebGL microsites.");

  const [selected, setSelected] = useState("All");
  const filtered = selected === "All" ? projects : projects.filter((p) => p.category === selected);

  return (
    <PageTransition>
      <Section eyebrow="Selected work">
        {/* Title + filter buttons */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <AnimatedTitle as="h1" text="Things I've *built.*" className="font-display text-5xl font-semibold leading-[1.05] md:text-6xl" />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelected(c)}
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-widest transition ${
                  selected === c ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground" : "border border-white/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid (every 3rd card is full width) */}
        <motion.div layout className="mt-14 grid gap-6 md:grid-cols-2">
          {filtered.map((p, i) => (
            <motion.div key={p.slug} layout initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.05 }} className={i % 3 === 0 ? "md:col-span-2" : ""}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </PageTransition>
  );
}
