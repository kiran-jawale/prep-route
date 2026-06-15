

/**
 * Publish workflow loading placeholder.
 *
 * Purpose:
 * Displays skeleton content while publish data is loading.
 */


export default function PublishSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-10 w-64 animate-pulse rounded bg-zinc-200" />

      <div className="h-72 animate-pulse rounded-2xl bg-zinc-200" />

      <div className="h-14 w-80 animate-pulse rounded-xl bg-zinc-200" />

      <div className="h-20 animate-pulse rounded-xl bg-zinc-200" />

      <div className="h-64 animate-pulse rounded-xl bg-zinc-200" />
    </div>
  );
}
