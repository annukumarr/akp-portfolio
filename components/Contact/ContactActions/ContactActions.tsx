export default function ContactActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href="mailto:annukumarpal2004@gmail.com"
        className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
      >
        Send Email
      </a>

      <a
        href="https://github.com/annukumarr"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-zinc-700 px-6 py-3 font-medium transition hover:border-white"
      >
        View GitHub
      </a>
    </div>
  );
}