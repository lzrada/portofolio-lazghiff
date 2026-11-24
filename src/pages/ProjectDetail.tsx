import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Section } from "@/components/Section";
import { PageTransition } from "@/components/PageTransition";
import { usePageTitle } from "@/hooks/UsePageTitle";
import { projects } from "@/data/site";

export default function ProjectDetail() {
  // Read the ":slug" part of the URL, e.g. /projects/lumen-os -> "lumen-os"
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  usePageTitle(project ? `${project.title} — Lazghiff.dev` : "Project not found — Lazghiff.dev", project?.description);

  // Unknown slug -> show a friendly message
  if (!project) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl">Project not found</h1>
          <Link to="/projects" className="mt-4 inline-block text-primary underline">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <Section>
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        {/* Header */}
        <div className="mt-8 flex flex-wrap items-baseline gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>{project.category}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">{project.title}</h1>
        <p className="mt-6 max-w-2xl text-xl text-muted-foreground">{project.tagline}</p>

        {/* Big banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`relative mt-12 h-[420px] overflow-hidden rounded-3xl bg-gradient-to-br ${project.color}`}
        >
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 flex items-center justify-center font-display text-9xl font-bold text-white/10">{project.title}</div>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_1fr]">
          {/* Left: description */}
          <div>
            <h2 className="font-display text-2xl font-semibold">About the project</h2>
            <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>
            <p className="mt-4 text-muted-foreground">
              This case study is a placeholder — swap in your process notes, screenshots, and outcomes. Talk about the problem, the constraints, the decisions, and what shipped. Recruiters read every word here.
            </p>
          </div>

          {/* Right: stack + links */}
          <aside className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Stack</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 px-3 py-1 text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a href={project.demo} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-medium text-primary-foreground">
                Live demo <ExternalLink className="h-4 w-4" />
              </a>
              <a href={project.github} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm hover:bg-white/5">
                Source <Github className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </PageTransition>
  );
}
