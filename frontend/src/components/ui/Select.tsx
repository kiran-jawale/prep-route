

/**
 * Select Component
 *
 * Reusable single-selection dropdown.
 *
 * Props:
 * @param value Current selected value.
 * @param options Available options.
 * @param onChange Selection change handler.
 *
 * Purpose:
 * Standardizes dropdown inputs across forms.
 */


interface Option {
  label: string;
  value: string;
}

interface Props {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}

export default function Select({
  value,
  options,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="custom-select"
    >
      <option value="">Select</option>

      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}