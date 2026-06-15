

/**
 * Test workflow loading placeholder.
 *
 * Purpose:
 * Displays skeleton content while test data is loading.
 */


export default function TestSkeleton() {
  return (
    <div className="animate-pulse space-y-8">
      <div className="h-12 w-96 rounded-xl bg-zinc-200" />

      <div className="grid grid-cols-2 gap-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-12 rounded-xl bg-zinc-200" />
        ))}
      </div>

      <div className="grid grid-cols-5 gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="h-12 rounded-xl bg-zinc-200" />
        ))}
      </div>
    </div>
  );
}
