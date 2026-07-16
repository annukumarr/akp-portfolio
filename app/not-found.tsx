import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
          404 Error
        </p>

        <h1 className="mt-6 text-5xl font-bold">
          Page Not Found
        </h1>

        <p className="mt-6 max-w-md text-zinc-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-xl border border-violet-500/50 px-6 py-3 text-violet-300 transition hover:bg-violet-500/10"
        >
          ← Back Home
        </Link>
      </div>
    </main>
  );
}