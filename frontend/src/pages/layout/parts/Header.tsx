

/**
 * Application top navigation bar.
 *
 * Props:
 * - onMenuClick
 *
 * Purpose:
 * Provides mobile navigation access, notifications and user actions.
 */


import {
  Menu,
} from "lucide-react";

import { useState } from "react";

import { useSelector } from "react-redux";

import { useDom } from "../../../contexts/domContext";

import type { RootState } from "../../../state/store";

import UserMenu from "../../../components/ui/UserMenu";

interface Props {
  onMenuClick: () => void;
}

export default function Header({
  onMenuClick,
}: Props) {
  const user =
    useSelector(
      (
        state: RootState
      ) => state.auth.user
    );

  const [open, setOpen] =
    useState(false);

  const {
    toggleNotifications,
  } = useDom();

  return (
    <header
      className="
        sticky top-0 z-30
        flex h-16 sm:h-24
        items-center justify-between
        border-b border-zinc-200
        bg-white
        px-4 sm:px-10
      "
    >
      <button
        onClick={
          onMenuClick
        }
        className="
          flex h-10 w-10
          items-center justify-center
          rounded-xl border
          border-zinc-200

          sm:hidden
        "
      >
        <Menu size={20} />
      </button>

      <div
        className="
          relative
          ml-auto
          flex items-center
          gap-3 sm:gap-5
        "
        onMouseLeave={() =>
          setOpen(false)
        }
      >
        <button
          onClick={
            toggleNotifications
          }
          className="
            relative
            flex h-10 w-10
            sm:h-12 sm:w-12
            items-center justify-center
            rounded-full border
            border-zinc-200
            bg-white
            text-base sm:text-lg
            text-zinc-600
          "
        >
          🔔

          <span
            className="
              absolute
              right-2 top-2
              h-2 w-2
              rounded-full
              bg-green-500
            "
          />
        </button>

        <button
          onMouseEnter={() =>
            setOpen(true)
          }
          onClick={() =>
            setOpen(
              (
                prev
              ) => !prev
            )
          }
          className="flex items-center gap-2 sm:gap-3"
        >
          <div
            className="
              h-10 w-10
              sm:h-12 sm:w-12
              overflow-hidden
              rounded-full
              ring-2 ring-amber-400
              ring-offset-1
            "
          >
            <div
              className="
                flex h-full w-full
                items-center justify-center
                rounded-full
                bg-[#FFF6E8]
                text-lg sm:text-xl
              "
            >
              👤
            </div>
          </div>

          <div className="hidden sm:block text-left">
            <p className="text-[15px] font-semibold text-zinc-800">
              {user?.fullName ||
                "User"}
            </p>

            <p className="text-xs text-zinc-400">
              Admin
            </p>
          </div>

          <span
            className="
              hidden sm:block
              text-[10px]
              text-zinc-400
            "
          >
            ▼
          </span>
        </button>

        <UserMenu
          open={open}
          onClose={() =>
            setOpen(false)
          }
        />
      </div>
    </header>
  );
}