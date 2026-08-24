export default function CinematicBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div
        className="fixed inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(56,163,165,0.12), transparent 35%), radial-gradient(circle at 80% 65%, rgba(87,204,153,0.08), transparent 40%), radial-gradient(circle at 50% 100%, rgba(34,87,122,0.10), transparent 45%)",
        }}
      />

      <div
        className="animate-drift1 absolute -top-[140px] -left-[120px] h-[560px] w-[560px] rounded-full opacity-45 will-change-transform"
        style={{
          background: "rgba(56,163,165,0.18)",
          filter: "blur(110px)",
        }}
      />
      <div
        className="animate-drift2 absolute -bottom-[200px] -right-[180px] h-[640px] w-[640px] rounded-full opacity-45 will-change-transform"
        style={{
          background: "rgba(87,204,153,0.14)",
          filter: "blur(110px)",
        }}
      />

      <div
        className="fixed inset-0 z-[50] opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div
        className="fixed inset-0 z-[49]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(2,6,9,0.55) 130%)",
        }}
      />

      <div
        className="animate-flashPulse fixed inset-0 z-[48] opacity-0 mix-blend-overlay"
        style={{ background: "#57cc99" }}
      />
    </div>
  );
}
