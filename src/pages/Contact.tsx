import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MapPin, Check } from "lucide-react";
import { Section } from "@/components/Section";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { PageTransition } from "@/components/PageTransition";
import { Field } from "@/components/contact/Field";
import { usePageTitle } from "@/hooks/UsePageTitle";

const socials = [Github, Linkedin, Twitter];

export default function Contact() {
  usePageTitle("Contact — Lazghiff.dev", "Get in touch for freelance, collaborations, or a coffee chat.");

  const [sent, setSent] = useState(false);

  // Demo only: shows a message for 3.5s. Connect a real service here later.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <PageTransition>
      <Section eyebrow="Contact">
        <AnimatedTitle as="h1" text="Let's build something *together.*" className="font-display text-5xl font-semibold leading-[1.05] md:text-6xl" />
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">Have a project in mind, or just want to say hi? Drop a note — I reply within 24 hours.</p>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Your name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Subject" name="subject" />
            <Field label="Tell me about the project" name="message" textarea />

            <button type="submit" className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-sm font-medium text-primary-foreground">
              <span className="relative z-10">Send message</span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
            </button>

            <AnimatePresence>
              {sent && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-3 rounded-2xl border border-primary/40 bg-primary/10 p-4 text-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/30">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  Thanks — this is a demo form. Wire it up to your inbox.
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Side info */}
          <aside className="space-y-6">
            <div className="rounded-2xl glass p-6">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Reach me directly</h3>
              <div className="mt-4 space-y-3">
                <a href="mailto:hi@Lazghiff.dev" className="flex items-center gap-3 text-sm hover:text-primary">
                  <Mail className="h-4 w-4" /> hi@Lazghiff.dev
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" /> Amsterdam, NL — remote worldwide
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                {socials.map((Icon, i) => (
                  <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition hover:border-primary/60 hover:bg-primary/10">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative map */}
            <div className="relative aspect-video overflow-hidden rounded-2xl glass">
              <div className="absolute inset-0 bg-grid opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_30px] shadow-primary"
              />
              <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">52.37° N, 4.90° E</div>
            </div>
          </aside>
        </div>
      </Section>
    </PageTransition>
  );
}
