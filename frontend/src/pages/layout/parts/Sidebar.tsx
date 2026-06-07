import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r bg-white lg:block">
      <div className="p-6">
        <h2 className="text-2xl font-bold">TestDash</h2>
      </div>

      <nav className="space-y-2 px-4">
        <NavLink
          to="/dashboard"
          className="block rounded-xl px-4 py-3 hover:bg-zinc-100"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/tracking"
          className="block rounded-xl px-4 py-3 hover:bg-zinc-100"
        >
          Test Tracking
        </NavLink>

        <NavLink
          to="/tests/create"
          className="block rounded-xl px-4 py-3 hover:bg-zinc-100"
        >
          Create Test
        </NavLink>
      </nav>
    </aside>
  );
}
