import { footer } from "@/app/data/footer";

export default function FooterLinks() {
  return (
    <nav aria-label="Footer navigation">
      <p className="text-sm font-medium text-white">
        Navigation
      </p>

      <ul className="mt-5 space-y-3">
        {footer.links.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              className="text-zinc-400 transition hover:text-white"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}