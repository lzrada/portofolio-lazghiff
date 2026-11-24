import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Shrink the navbar after scrolling a bit
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the page changes
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${scrolled ? "glass shadow-[var(--shadow-soft)]" : ""}`}>
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary font-display text-lg font-bold text-primary-foreground">
              L
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary opacity-50 blur-md transition group-hover:opacity-80" />
            </span>
            <span className="hidden font-display text-lg font-semibold tracking-tight sm:block">
              Lazghiff<span className="text-gradient">.dev</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active = isActive(l.to);
              return (
                <Link key={l.to} to={l.to} className="group relative rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <span className={active ? "text-foreground" : ""}>{l.label}</span>
                  {active && <motion.span layoutId="nav-active" className="absolute inset-0 -z-10 rounded-lg bg-primary/15" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                  <span className="absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_20px_-5px] shadow-primary/60 transition hover:scale-105"
          >
            Let's talk
          </Link>

          {/* Mobile menu button */}
          <button onClick={() => setOpen((o) => !o)} className="md:hidden rounded-lg p-2 text-foreground" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden mx-6 mt-2 glass rounded-2xl p-4">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="rounded-lg px-4 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
