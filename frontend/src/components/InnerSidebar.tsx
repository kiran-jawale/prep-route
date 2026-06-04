import { FC } from "react";
import SidebarNavLink from "./SidebarNavLink";

// ============================================================================
// InnerSidebar Component - Secondary navigation sidebar
// ============================================================================

/**
 * InnerSidebar component - secondary navigation for test workflows
 * Appears inside test creation/editing pages
 * Provides navigation between test steps (details, questions, publish)
 */
const InnerSidebar: FC = () => {
  return (
    <div className="w-64 border-r p-4">
      <div className="space-y-2">
        {/* Navigate to test basic information (name, category, difficulty, etc.) */}
        <SidebarNavLink to="details" label="Test Details" />

        {/* Navigate to question management section */}
        <SidebarNavLink to="questions" label="Questions" />

        {/* Navigate to test publishing options */}
        <SidebarNavLink to="publish" label="Publish" />
      </div>
    </div>
  );
};

export default InnerSidebar;
