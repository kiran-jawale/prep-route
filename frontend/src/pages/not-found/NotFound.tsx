import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-50">
      <h1 className="text-8xl font-bold text-[#6475F7]">404</h1>

      <p className="text-zinc-500">Page not found</p>

      <Link
        to="/"
        className="
          rounded-xl
          bg-[#6475F7]
          px-5
          py-3
          text-white
          transition
          hover:opacity-90
        "
      >
        Back To Login
      </Link>
    </div>
  );
}
