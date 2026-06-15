/**
 * MultiSelect Component
 *
 * Allows selecting multiple values from a predefined list.
 *
 * Props:
 * @param values Selected values.
 * @param options Available options.
 * @param onChange Selection change handler.
 *
 * Purpose:
 * Provides reusable multi-selection functionality.
 */


interface Option {
  label: string;
  value: string;
}

interface Props {
  values: string[];
  options: Option[];
  onChange: (values: string[]) => void;
}

export default function MultiSelect({
  values,
  options,
  onChange,
}: Props) {
  const addValue = (value: string) => {
    if (!value) {
      return;
    }

    if (values.includes(value)) {
      return;
    }

    onChange([...values, value]);
  };

  const removeValue = (value: string) => {
    onChange(values.filter((item) => item !== value));
  };

  const getLabel = (value: string) => {
    const option = options.find(
      (item) => item.value === value
    );

    return option?.label || value;
  };

  return (
    <div className="space-y-3">
      <select
        value=""
        onChange={(e) => addValue(e.target.value)}
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

      {values.length > 0 && (
        <div
          className="
            max-h-36
            overflow-y-auto
            rounded-xl
            border
            border-zinc-200
            p-3
          "
        >
          <div className="flex flex-wrap gap-2">
            {values.map((value) => (
              <div
                key={value}
                className="
                  flex items-center gap-2
                  rounded-full
                  bg-[#6475F7]
                  px-3 py-1.5
                  text-xs
                  font-medium
                  text-white
                "
              >
                <span className="max-w-[180px] truncate">
                  {getLabel(value)}
                </span>

                <button
                  type="button"
                  onClick={() => removeValue(value)}
                  className="
                    flex h-4 w-4
                    items-center justify-center
                    rounded-full
                    hover:bg-white/20
                  "
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}