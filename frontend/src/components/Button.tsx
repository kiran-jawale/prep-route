import type { ButtonHTMLAttributes, ReactNode } from "react";

// ============================================================================
// Button Component - Reusable button with variant support
// ============================================================================

// Valid button variants - discriminated union for better type safety
type ButtonVariant = "primary" | "secondary" | "danger";

// Props interface extending native button attributes
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;                    // Button text or icon content
  variant?: ButtonVariant;                // Visual style, defaults to "primary"
}

/**
 * Button component - consistent styling across the application
 * Supports multiple variants for different use cases (action, secondary, dangerous)
 *
 * Extends HTML button attributes, so all native props are supported:
 * onClick, disabled, className, title, etc.
 */
const Button = ({
  children,
  type = "button",
  disabled = false,
  variant = "primary",
  className = "",
  ...rest // Capture any other HTML button attributes
}: ButtonProps) => {
  // Define color schemes for each button variant
  // Using object with discriminated keys ensures we handle all variants
  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white",    // Green - main actions
    secondary: "bg-zinc-800 hover:bg-zinc-900 text-white",        // Dark gray - secondary actions
    danger: "bg-red-600 hover:bg-red-700 text-white",             // Red - destructive actions
  };

  // Build final className with variant styles and custom overrides
  const finalClassName = `px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 ${variantStyles[variant]} ${className}`;

  return (
    <button
      type={type as "button" | "submit" | "reset"} // Ensure type is valid HTML type
      disabled={disabled}
      className={finalClassName}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
