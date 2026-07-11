import { contact } from "@/app/data/contact";

export default function ContactHeader() {
  return (
    <div>
      <h2 className="text-4xl font-bold md:text-5xl">
        {contact.title}
      </h2>

      <p className="mt-6 max-w-2xl text-zinc-400">
        {contact.subtitle}
      </p>
    </div>
  );
}