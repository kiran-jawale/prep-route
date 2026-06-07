import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-3xl font-semibold">TestDash</h1>

        <p className="mt-1 text-sm text-zinc-500">Test Management System</p>
      </div>

      <div className="space-y-2 p-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }:any) =>
            `
            block
            rounded-xl
            px-4
            py-3
            transition
            ${isActive ? "bg-[#6475F7] text-white" : "hover:bg-zinc-100"}
          `
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/tracking"
          className={({ isActive }:any) =>
            `
            block
            rounded-xl
            px-4
            py-3
            transition
            ${isActive ? "bg-[#6475F7] text-white" : "hover:bg-zinc-100"}
          `
          }
        >
          Test Tracking
        </NavLink>

        <NavLink
          to="/tests/create"
          className={({ isActive }:any) =>
            `
            block
            rounded-xl
            px-4
            py-3
            transition
            ${isActive ? "bg-[#6475F7] text-white" : "hover:bg-zinc-100"}
          `
          }
        >
          Create Test
        </NavLink>
      </div>
    </aside>
  );
}
