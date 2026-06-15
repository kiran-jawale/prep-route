

/**
 * Workflow-specific sidebar container.
 *
 * Props:
 * - collapsed
 *
 * Purpose:
 * Dynamically renders workflow navigation panels based on current route.
 */


import { useLocation } from "react-router-dom";

import DashboardNav from "./DashboardNav";
import QuestionsNav from "./QuestionNav";

interface Props {
  collapsed: boolean;
}

export default function InnerSidebar({
  collapsed,
}: Props) {
  const location =
    useLocation();

  const sharedPanelClass = `
    flex flex-col
    border-l border-zinc-100
    bg-white
    overflow-hidden
    transition-all duration-300

    ${collapsed ? "sm:w-[30%]" : "w-full"}
  `;

  if (
    location.pathname.includes(
      "/dashboard"
    )
  ) {
    return (
      <div
        className={
          sharedPanelClass
        }
      >
        <DashboardNav
          collapsed={
            collapsed
          }
        />
      </div>
    );
  }

  if (
    location.pathname.includes(
      "/questions"
    ) ||
    location.pathname.includes(
      "/publish"
    )
  ) {
    return (
      <div
        className={
          sharedPanelClass
        }
      >
        <QuestionsNav
          collapsed={
            collapsed
          }
        />
      </div>
    );
  }

  return null;
}