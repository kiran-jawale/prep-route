

/**
 * Dashboard workflow navigation.
 *
 * Props:
 * - collapsed
 *
 * Purpose:
 * Provides dashboard section navigation links.
 */


import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  LayoutDashboard,
  List,
} from "lucide-react";

interface Props {
  collapsed: boolean;
}

const dashboardItems = [
  {
    label: "Overview",
    hash: "#overview",
    icon: LayoutDashboard,
  },

  {
    label: "Tests",
    hash: "#tests",
    icon: List,
  },
];

export default function DashboardNav({
  collapsed,
}: Props) {
  const location =
    useLocation();

  const currentHash =
    location.hash ||
    "#overview";

  return (
    <div className="flex h-full flex-col">
      <div
        className="
          flex flex-col
          gap-1
          p-2 sm:p-3
        "
      >
        {dashboardItems.map(
          (item) => {
            const Icon =
              item.icon;

            const isActive =
              currentHash ===
              item.hash;

            return (
              <Link
                key={item.hash}
                to={`/dashboard${item.hash}`}
              >
                <div
                  className={`
                    relative flex items-center
                    gap-3 rounded-xl

                    px-3 py-3 sm:px-3 sm:py-3

                    transition-all duration-300

                    ${
                      isActive &&
                      !collapsed
                        ? "active-link bg-[#6475F7]/8 text-[#6475F7]"
                        : "text-zinc-500 hover:bg-zinc-100"
                    }
                  `}
                >
                  <Icon
                    size={
                      collapsed
                        ? 16
                        : 18
                    }
                    strokeWidth={
                      1.8
                    }
                    className="shrink-0"
                  />

                  {!collapsed && (
                    <span
                      className="
                        truncate
                        text-sm
                        font-medium
                      "
                    >
                      {
                        item.label
                      }
                    </span>
                  )}
                </div>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}