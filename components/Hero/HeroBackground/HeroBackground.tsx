export default function HeroBackground() {
  return (
    <>
      {/* Purple Glow */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-accent/10 blur-[160px]" />

      {/* Left Glow */}
      <div className="pointer-events-none absolute left-0 top-40 h-[320px] w-[320px] rounded-full bg-accent/5 blur-[140px]" />

      {/* Right Glow */}
      <div className="pointer-events-none absolute right-0 top-60 h-[320px] w-[320px] rounded-full bg-accent/5 blur-[140px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
    </>
  );
}