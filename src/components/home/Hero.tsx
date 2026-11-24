import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { TypingRole } from "./TypingRole";
import { HeroOrbit } from "./HeroOrbit";
import { Magnetic } from "../Magnetic";

const socials = [Github, Linkedin, Twitter];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Mouse position inside the hero, from -1 to 1
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // Tilt for the orbit, and the glow that follows the mouse
  const rotateX = useTransform(smoothY, [-1, 1], [8, -8]);
  const rotateY = useTransform(smoothX, [-1, 1], [-8, 8]);
  const spotlight = useTransform([smoothX, smoothY] as never, (v: number[]) => `radial-gradient(600px circle at ${50 + v[0] * 20}% ${50 + v[1] * 20}%, oklch(0.72 0.22 295 / 0.15), transparent 40%)`);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mouseX.set(((e.clientX - r.left) / r.width - 0.5) * 2);
      mouseY.set(((e.clientY - r.top) / r.height - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={ref} className="relative flex min-h-[calc(100vh-6rem)] items-center overflow-hidden px-6">
      <motion.div className="pointer-events-none absolute inset-0 -z-10" style={{ background: spotlight }} />

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        {/* Left column: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px] shadow-green-400" />
            Available for new projects · Q1 2026
          </motion.div>

          <AnimatedTitle as="h1" text="Crafting digital experiences that feel *alive.*" className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl" />

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-6 font-display text-2xl text-muted-foreground sm:text-3xl">
            I'm a <TypingRole />
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-6 max-w-xl text-lg text-muted-foreground">
            Seven years of shipping interfaces that people remember. I lead design systems, ship immersive microsites, and build products that punch above their weight.
          </motion.p>

          {/* Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-4 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-10px] shadow-primary/60 transition hover:scale-105"
              >
                <span className="relative z-10">See my work</span>
                <ArrowUpRight className="relative z-10 h-4 w-4 transition group-hover:rotate-45" />
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-0" />
              </Link>
            </Magnetic>

            <Magnetic>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm transition hover:border-primary/60 hover:bg-primary/5">
                Get in touch
              </Link>
            </Magnetic>
          </motion.div>

          {/* Social icons */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="mt-10 flex items-center gap-6 text-muted-foreground">
            {socials.map((Icon, i) => (
              <a key={i} href="#" className="transition hover:text-primary">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right column: orbit animation */}
        <HeroOrbit rotateX={rotateX} rotateY={rotateY} />
      </div>

      {/* "Scroll" hint at the bottom */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground">
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]">
          Scroll
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-8 w-[1px] bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
