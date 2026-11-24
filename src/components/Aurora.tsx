export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(circle, #7c3aed, transparent 60%)" }} />
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 animate-float-slow" style={{ background: "radial-gradient(circle, #2563eb, transparent 60%)" }} />
      <div className="absolute bottom-0 -left-40 h-[500px] w-[600px] rounded-full blur-3xl opacity-30 animate-float-slow" style={{ background: "radial-gradient(circle, #06b6d4, transparent 60%)", animationDelay: "3s" }} />
      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, transparent, oklch(0.14 0.01 270) 70%)" }} />
    </div>
  );
}
