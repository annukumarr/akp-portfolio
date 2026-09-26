"use client";

type JarvisLauncherProps = {
  onClick: () => void;
};

export default function JarvisLauncher({
  onClick,
}: JarvisLauncherProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open Ask JARVIS"
      className="group fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-[#0b0b10]/90 shadow-[0_0_35px_rgba(139,92,246,0.25)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-accent hover:shadow-[0_0_45px_rgba(139,92,246,0.4)]"
    >
      <span className="absolute inset-0 rounded-full bg-accent/10 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative text-xl text-accent-light transition-transform duration-300 group-hover:scale-110">
        ✦
      </span>
    </button>
  );
}
