import type { FC } from "react";
import { NavLink } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

// ============================================================================
// SidebarNavLink Component - Navigation link with active state styling
// ============================================================================

// Props interface extending NavLink properties
interface SidebarNavLinkProps extends Omit<NavLinkProps, "children"> {
  label: string; // Display text for the link
}

/**
 * SidebarNavLink component - navigation link for sidebar
 * Changes appearance based on whether it's the currently active route
 * Active links are highlighted in green, inactive links show hover effect
 */
const SidebarNavLink: FC<SidebarNavLinkProps> = ({ to, label, ...rest }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }: any) =>
        // Use ternary operator for conditional classes
        // isActive is type-safe from NavLink's callback parameter
        `block px-4 py-3 rounded-xl transition ${
          isActive ? "bg-emerald-600 text-white" : "hover:bg-zinc-100"
        }`
      }
      {...rest}
    >
      {label}
    </NavLink>
  );
};

export default SidebarNavLink;
