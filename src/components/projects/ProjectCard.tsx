import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { projects } from "@/data/site";

type Project = (typeof projects)[number];

export function ProjectCard({ project: p }: { project: Project }) {
  // "Company Profile" -> "CP"
  const initials = p.title
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <Link to={`/projects/${p.slug}`} className="group relative block overflow-hidden rounded-3xl glass p-8" data-cursor-label="View">
      {/* Colored glow on hover */}
      <div className={`absolute -inset-40 -z-10 rounded-full bg-gradient-to-br ${p.color} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-40`} />

      {/* Header: category, title, tagline, arrow */}
      <div className="flex items-start justify-between">
        <div>
          <div className="mb-2 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span>{p.category}</span>
            <span>·</span>
            <span>{p.year}</span>
          </div>
          <h3 className="font-display text-3xl font-semibold md:text-4xl">{p.title}</h3>
          <p className="mt-2 max-w-md text-muted-foreground">{p.tagline}</p>
        </div>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 transition group-hover:rotate-45 group-hover:border-primary/60 group-hover:bg-primary/10">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>

      {/* Colored banner with initials */}
      <div className={`relative mt-8 h-52 overflow-hidden rounded-2xl bg-gradient-to-br ${p.color}`}>
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
        <motion.div className="absolute inset-0 flex items-center justify-center font-display text-6xl font-bold text-white/20" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }}>
          {initials}
        </motion.div>
      </div>

      {/* Tech stack tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
            {s}
          </span>
        ))}
      </div>
    </Link>
  );
}
