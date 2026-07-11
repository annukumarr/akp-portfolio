import { contact } from "@/app/data/contact";

export default function ContactActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href={contact.actions.email.href}
        className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
      >
        {contact.actions.email.label}
      </a>

      <a
        href={contact.actions.github.href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-zinc-700 px-6 py-3 font-medium transition hover:border-white"
      >
        {contact.actions.github.label}
      </a>
    </div>
  );
}