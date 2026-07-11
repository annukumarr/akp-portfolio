import ContactActions from "@/components/Contact/ContactActions/ContactActions";

export default function ContactContent() {
  return (
    <div className="mt-12 rounded-2xl border border-zinc-800 p-8 md:p-10">
      <p className="max-w-2xl text-lg leading-8 text-zinc-300">
        I&apos;m interested in AI, machine learning, intelligent software,
        and opportunities to build products that solve meaningful real-world
        problems.
      </p>

      <ContactActions />
    </div>
  );
}