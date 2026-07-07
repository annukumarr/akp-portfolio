import { navbar } from "@/app/data/navbar";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-black/70 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold tracking-wider">
          {navbar.logo}
        </h1>

        <ul className="hidden gap-8 md:flex">
          {navbar.links.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className="text-zinc-300 transition hover:text-white"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={navbar.github}
          target="_blank"
          className="rounded-lg border border-zinc-700 px-4 py-2 transition hover:bg-white hover:text-black"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}