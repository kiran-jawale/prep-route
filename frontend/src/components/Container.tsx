import type { FC, ReactNode } from "react";
import { useTheme } from "../contexts/themeContext";

// ============================================================================
// Container Component - Responsive max-width wrapper with theme support
// ============================================================================

// Props interface for Container
interface ContainerProps {
  children: ReactNode;        // Content to render inside the container
  className?: string;         // Additional Tailwind classes for customization
}

/**
 * Container component - provides consistent max-width and spacing
 * Applies responsive padding and respects current theme for text color
 * Used to wrap main content areas for proper layout and alignment
 *
 * FC (FunctionComponent) generic can be parameterized with props type
 */
const Container: FC<ContainerProps> = ({ children, className = "" }) => {
  // Get current theme from context to apply appropriate text color
  // useTheme is now type-safe and won't return undefined
  const { theme } = useTheme();

  // Compute text color class based on theme with proper typing
  const textColorClass = theme === "dark" ? "text-white" : "text-zinc-900";

  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${textColorClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
