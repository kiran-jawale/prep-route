

/**
 * Dashboard tests loading state.
 *
 * Purpose:
 * Displays placeholder content while test data is loading.
 */


export default function TestsSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-12 animate-pulse rounded-xl bg-zinc-200" />

      <div
        className="
          h-[500px]
          animate-pulse
          rounded-2xl
          bg-zinc-200
        "
      />
    </div>
  );
}
