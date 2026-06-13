import { useState } from "react";

import { useSelector } from "react-redux";

import { useDom } from "../../../contexts/domContext";
import type { RootState } from "../../../state/store";

import UserMenu from "./../../../components/ui/UserMenu";

export default function Header() {
  const user = useSelector((state: RootState) => state.auth.user);

  const [open, setOpen] = useState(false);
  const { toggleNotifications } = useDom();
  return (
    <header className="w-full sticky top-0 z-30 flex h-24 items-center justify-end border-b border-zinc-200 bg-white px-10">
      <div
        className="relative flex items-center gap-5"
        onMouseLeave={() => setOpen(false)}
      >
        <button
          onClick={toggleNotifications}
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-lg text-zinc-600 transition hover:bg-zinc-50"
        >
          🔔
          <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-green-500" />
        </button>

        <button
          onMouseEnter={() => setOpen(true)}
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-3"
        >
          <div className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-amber-400 ring-offset-1">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#FFF6E8] text-xl">
              👤
            </div>
          </div>

          <div className="text-left">
            <p className="text-[15px] font-semibold text-zinc-800">
              {user?.fullName || "User"}
            </p>

            <p className="text-xs text-zinc-400">Admin</p>
          </div>

          <span className="text-[10px] text-zinc-400">▼</span>
        </button>

        <UserMenu open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}
