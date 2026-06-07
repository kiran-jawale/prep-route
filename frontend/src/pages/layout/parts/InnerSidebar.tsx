import { NavLink } from "react-router-dom";

interface Props {
  testId: string;
}

export default function InnerSidebar({ testId }: Props) {
  return (
    <aside
      className="
        w-64
        border-r
        bg-white
        p-4
      "
    >
      <div className="space-y-2">
        <NavLink
          to={`/tests/${testId}/questions`}
          className={({ isActive }: any) =>
            `
            block
            rounded-xl
            px-4
            py-3
            ${isActive ? "bg-[#6475F7] text-white" : "hover:bg-zinc-100"}
          `
          }
        >
          Questions
        </NavLink>

        <NavLink
          to={`/tests/${testId}/publish`}
          className={({ isActive }: any) =>
            `
            block
            rounded-xl
            px-4
            py-3
            ${isActive ? "bg-[#6475F7] text-white" : "hover:bg-zinc-100"}
          `
          }
        >
          Review & Publish
        </NavLink>
      </div>
    </aside>
  );
}
