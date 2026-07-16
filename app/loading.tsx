export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="h-20 w-20 rounded-full border border-violet-500/20" />

          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-violet-500" />
        </div>

        <div className="space-y-2 text-center">
          <h2 className="text-lg font-medium text-white">
            Loading Experience
          </h2>

          <p className="text-sm text-zinc-500">
            Preparing the next page...
          </p>
        </div>
      </div>
    </main>
  );
}