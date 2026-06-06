import type { SelectHTMLAttributes, ChangeEvent } from "react";

// ============================================================================
// Dropdown/Select Component - Type-safe selection input
// ============================================================================

// Option structure for dropdown items
interface DropdownOption {
  label: string;   // Display text for the option
  value: string;   // Internal value when selected
}

// Props interface extending native select attributes
interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  value: string;                          // Currently selected option value
  onChange: (value: string) => void;      // Callback when selection changes
  options: DropdownOption[];              // Array of available options
}

/**
 * Dropdown/Select component - presents a list of options for selection
 * Controlled component that requires parent to manage selected value
 *
 * Properly types the onChange event to extract just the string value
 */
const Dropdown = ({
  value,
  onChange,
  options,
  className = "",
  ...rest
}: DropdownProps) => {
  // Type-safe change handler - extracts value string from select event
  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChange(event.target.value);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className={`w-full border rounded-lg px-4 py-3 ${className}`}
      {...rest}
    >
      {/* Placeholder option - selecting this means no option is chosen */}
      <option value="">Select</option>

      {/* Render each available option with proper keys for React */}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
