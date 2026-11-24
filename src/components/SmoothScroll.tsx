import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true, lerp: 0.1 });

    let frameId = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
