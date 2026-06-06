import type { FC } from "react";
import SidebarNavLink from "./SidebarNavLink";

// ============================================================================
// Sidebar Component - Main navigation sidebar
// ============================================================================

/**
 * Sidebar component - primary navigation
 * Displays main navigation links (Dashboard, Create Test, My Tests)
 * Fixed on left side of screen, visible on all main pages
 *
 * FC (FunctionComponent) is proper React typing for function components
 */
const Sidebar: FC = () => {
  return (
    <aside className="fixed left-0 top-0 w-72 h-screen border-r bg-white p-4">
      <div className="space-y-2">
        {/* Navigation to main dashboard view */}
        <SidebarNavLink to="/dashboard" label="Dashboard" />

        {/* Navigation to test creation page */}
        <SidebarNavLink to="/tests/create" label="Create Test" />

        {/* Navigation to list of user's tests */}
        <SidebarNavLink to="/tests" label="My Tests" />
      </div>
    </aside>
  );
};

export default Sidebar;
