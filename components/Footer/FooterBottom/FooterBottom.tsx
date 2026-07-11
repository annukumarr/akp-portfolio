import { footer } from "@/app/data/footer";

export default function FooterBottom() {
  return (
    <div className="flex flex-col gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
      <p>{footer.copyright}</p>

      <a
        href={footer.github}
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-white"
      >
        GitHub
      </a>
    </div>
  );
}