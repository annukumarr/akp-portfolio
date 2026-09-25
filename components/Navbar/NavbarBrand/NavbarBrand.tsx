import Image from "next/image";
import Link from "next/link";

export default function NavbarBrand() {
  return (
    <Link
      href="/"
      aria-label="ムɴɴᴜ Home"
      className="group flex items-center gap-3"
    >
      <Image
        src="/images/legacy-logo.png"
        alt="ムɴɴᴜ Logo"
        width={48}
        height={48}
        priority
        className="transition-transform duration-300 group-hover:scale-105"
      />

      <span
        className="
          text-lg
          font-semibold
          tracking-wide
          text-white
          transition-opacity
          duration-300
          group-hover:opacity-90
        "
      >
        ムɴɴᴜ
      </span>
    </Link>
  );
}