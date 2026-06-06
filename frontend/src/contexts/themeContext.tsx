import { createContext, useContext, useEffect, useState } from "react";
import type {ReactNode} from 'react'
// ============================================================================
// Theme Context - Type-safe dark/light mode management
// ============================================================================

// Valid theme values
export type Theme = "light" | "dark";

// Context value interface - defines what's available in context
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

// Create context with proper typing instead of `any`
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider props interface
interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * ThemeProvider component - wraps app to provide theme functionality
 * Manages dark/light mode preference and persists to localStorage
 */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Load theme from localStorage on mount, default to "light" if not set
  // Type assertion: we know localStorage returns string or null, but we validate
  const getInitialTheme = (): Theme => {
    const stored = localStorage.getItem("theme");
    return (stored === "dark" || stored === "light") ? stored : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  // Persist theme changes to localStorage so preference survives page refresh
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark themes with proper typing
  const toggleTheme = (): void => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook - use this in components to access theme state and controls
 * Example: const { theme, toggleTheme } = useTheme();
 *
 * Throws error if used outside ThemeProvider (good practice for context hooks)
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
