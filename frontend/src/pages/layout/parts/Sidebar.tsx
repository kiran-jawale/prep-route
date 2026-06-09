import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { ScanSearch, TrendingUp, FilePenLine } from "lucide-react";

import InnerSidebar from "./InnerSidebar";

const navItems = [
  {
    label: "Dashboard",
    icon: TrendingUp,
    path: "/dashboard",
    exact: false,
  },
  {
    label: "Test Creation",
    icon: FilePenLine,
    path: "/tests/create",
    exact: true,
  },
  {
    label: "Test Tracking",
    icon: ScanSearch,
    path: "/tracking",
    exact: true,
  },
];

export default function Sidebar() {
  const location = useLocation();

  const [hovered, setHovered] = useState(false);

  const hasInnerSidebar =
    location.pathname.includes("/dashboard") ||
    location.pathname.includes("/questions") ||
    location.pathname.includes("/publish");

  const mainWidth = hasInnerSidebar ? (hovered ? "w-70" : "w-12") : "w-70";

  const showLabels = !hasInnerSidebar || hovered;

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen max-w-70 min-w-70 flex-col overflow-hidden border-r border-zinc-300 bg-white">
      <div className="border-b border-zinc-300 p-6">
        <img src="/company-logo.png" alt="PrepRoute" className="h-16 w-auto" />
      </div>

      <div className="flex h-full overflow-hidden">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`${mainWidth} flex px-1 flex-col transition-all duration-300 overflow-hidden`}
        >
          <nav className="flex flex-1 flex-col gap-1 py-3">
            {navItems.map((item) => {
              const Icon = item.icon;

              const isActive = item.exact
                ? location.pathname === item.path
                : location.pathname.startsWith(item.path);

              return (
                <NavLink key={item.path} to={item.path}>
                  <div
                    className={`relative flex items-center gap-3 rounded-xl pl-4 py-4 transition-all duration-300 ${
                      isActive && showLabels
                        ? "active-link bg-[#6475F7]/8 text-[#6475F7]"
                        : "text-zinc-500 hover:bg-zinc-100"
                    }`}
                  >
                    <Icon
                      size={showLabels ? 20 : 18}
                      strokeWidth={1.8}
                      className="flex-shrink-0"
                    />

                    {showLabels && (
                      <span className="truncate text-[15px] font-medium">
                        {item.label}
                      </span>
                    )}
                  </div>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {hasInnerSidebar && <InnerSidebar collapsed={hovered} />}
      </div>
    </aside>
  );
}
