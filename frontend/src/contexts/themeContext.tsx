

/**
 * Theme Context
 *
 * Provides application theme and font preferences.
 *
 * Features:
 * - Light/Dark mode
 * - Font switching
 * - Local storage persistence
 *
 * Purpose:
 * Centralizes appearance-related settings.
 */


import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface ThemeContextType {
  theme: Theme;
  font: Font;
  toggleTheme: () => void;
  toggleFont: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light"
  );
  const [font, setFont] = useState<Font>(
    (localStorage.getItem("font") as Font) || "inter"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.font = font;
    localStorage.setItem("font", font);
  }, [font]);


  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const toggleFont = () => {
    setFont((prev) => (prev === "inter" ? "poppins" : "inter"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        font,
        toggleTheme,
        toggleFont,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};

export type Theme = "light" | "dark";
export type Font = "inter" | "poppins";
