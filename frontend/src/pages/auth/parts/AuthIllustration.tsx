

/**
 * Authentication illustration panel.
 *
 * Purpose:
 * Displays branding and visual content on large screens.
 */


export default function AuthIllustration() {
  return (
    <div className="hidden flex-1 items-center justify-center bg-[#fafcff] lg:flex">
      <img src="/auth.png" alt="Authentication" className="max-w-[70%]" />
    </div>
  );
}
