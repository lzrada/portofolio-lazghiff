import { motion } from "framer-motion";
import { Download, GraduationCap, Award, Briefcase } from "lucide-react";
import { Section } from "@/components/Section";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { PageTransition } from "@/components/PageTransition";
import { usePageTitle } from "@/hooks/UsePageTitle";
import { timeline, education, certifications } from "@/data/site";

// Put your CV file in the "public" folder (e.g. public/cv.pdf) and set this to "/cv.pdf"
const CV_URL = "#";

export default function Resume() {
  usePageTitle("Resume — Lazghiff.dev", "Experience, education, and certifications.");

  return (
    <PageTransition>
      <Section eyebrow="Resume">
        {/* Title + download button */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <AnimatedTitle as="h1" text="A quick snapshot of the *CV.*" className="font-display text-5xl font-semibold leading-[1.05] md:text-6xl" />
          <a
            href={CV_URL}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-8px] shadow-primary/60 transition hover:scale-105"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-2">
          {/* Left column: experience */}
          <div>
            <h2 className="mb-8 flex items-center gap-3 font-display text-2xl font-semibold">
              <Briefcase className="h-5 w-5 text-primary" /> Experience
            </h2>
            <div className="relative border-l border-white/10 pl-6">
              {timeline.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative mb-10 last:mb-0">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-primary to-secondary" />
                  <div className="font-mono text-xs uppercase tracking-widest text-primary">{t.year}</div>
                  <div className="mt-1 font-display text-lg font-semibold">{t.title}</div>
                  <div className="text-sm text-muted-foreground">{t.org}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column: education + certifications */}
          <div className="space-y-14">
            <div>
              <h2 className="mb-8 flex items-center gap-3 font-display text-2xl font-semibold">
                <GraduationCap className="h-5 w-5 text-secondary" /> Education
              </h2>
              <div className="space-y-4">
                {education.map((e, i) => (
                  <div key={i} className="rounded-2xl glass p-5">
                    <div className="font-mono text-xs uppercase tracking-widest text-secondary">{e.year}</div>
                    <div className="mt-1 font-display font-semibold">{e.title}</div>
                    <div className="text-sm text-muted-foreground">{e.org}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-8 flex items-center gap-3 font-display text-2xl font-semibold">
                <Award className="h-5 w-5 text-primary" /> Certifications
              </h2>
              <ul className="space-y-2">
                {certifications.map((c) => (
                  <li key={c} className="rounded-xl glass px-4 py-3 text-sm">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  );
}
