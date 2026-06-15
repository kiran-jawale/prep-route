

/**
 * Dashboard overview loading state.
 *
 * Purpose:
 * Displays placeholder content while overview data is loading.
 */


export default function OverviewSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-12 w-40 animate-pulse rounded-xl bg-zinc-200" />

      <div className="grid gap-4 md:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="
              h-32
              animate-pulse
              rounded-2xl
              bg-zinc-200
            "
          />
        ))}
      </div>

      <div
        className="
          h-96
          animate-pulse
          rounded-2xl
          bg-zinc-200
        "
      />
    </div>
  );
}
