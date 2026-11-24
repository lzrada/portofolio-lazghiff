import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = ["about", "projects", "services", "blog", "resume", "contact"];

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary font-display text-xl font-bold text-primary-foreground"
            >
              L
            </motion.div>
            <h3 className="font-display text-xl font-semibold">Lazghiff</h3>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">Crafting immersive digital experiences at the intersection of design and engineering.</p>
          </div>

          {/* Page links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Navigate</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((page) => (
                <li key={page}>
                  <Link to={`/${page}`} className="capitalize text-muted-foreground transition hover:text-foreground">
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials + back to top */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Elsewhere</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="group relative flex h-11 w-11 items-center justify-center rounded-xl glass transition hover:scale-110">
                  <Icon className="h-4 w-4 transition-colors group-hover:text-primary" />
                </a>
              ))}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
            >
              <ArrowUp className="h-3 w-3" /> Back to top
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Lazghiff — Designed & built with obsession.</p>
          <p>Made with React, Vite, Framer Motion & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
