

// InnerSidebar Component - Secondary navigation sidebar
/*
 * InnerSidebar component - secondary navigation for test workflows
 * Appears inside test creation/editing pages
 * Provides navigation between test steps (details, questions, publish)
 */


import type { FC } from "react";
import SidebarNavLink from "./SidebarNavLink";

const InnerSidebar: FC = () => {
  return (
    <div className="w-64 border-r p-4">
      <div className="space-y-2">
        <SidebarNavLink to="details" label="Test Details" />

        <SidebarNavLink to="questions" label="Questions" />

        <SidebarNavLink to="publish" label="Publish" />
      </div>
    </div>
  );
};

export default InnerSidebar;
