import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Aurora } from "./Aurora";
import { Cursor } from "./Cursor";
import { SmoothScroll } from "./SmoothScroll";

export function Layout() {
  const { pathname } = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  // Jump back to the top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary to-secondary" />
      <SmoothScroll />
      <Cursor />
      <Aurora />
      <Navbar />
      <main className="pt-24">
        <AnimatePresence mode="wait">
          <div key={pathname}>
            {/* The current page renders here */}
            <Outlet />
          </div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
