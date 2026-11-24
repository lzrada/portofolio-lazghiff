import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { AnimatedTitle } from "@/components/AnimatedTitle";

export function CTA() {
  // The card fades in as you reach the bottom of the page
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0.5, 1]);

  return (
    <Section>
      <motion.div style={{ opacity }} className="relative overflow-hidden rounded-3xl glass p-12 text-center md:p-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />

        <AnimatedTitle as="h2" text="Have a *project* in mind?" className="font-display text-4xl font-semibold md:text-6xl" />
        <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">Let's turn it into something people can't stop talking about.</p>
        <Link
          to="/contact"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-10px] shadow-primary/60 transition hover:scale-105"
        >
          Start a conversation <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
        </Link>
      </motion.div>
    </Section>
  );
}
