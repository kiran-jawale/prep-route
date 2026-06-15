

/**
 * Loader Component
 *
 * Displays a centered loading spinner.
 *
 * Purpose:
 * Indicates loading states during asynchronous operations.
 */


export default function Loader() {
  return (
    <div className="flex justify-center py-16">
      <div
        className="
          h-10   w-10   animate-spin  rounded-full   border-4
          border-zinc-200  border-t-[#6475F7]"
      />
    </div>
  );
}
