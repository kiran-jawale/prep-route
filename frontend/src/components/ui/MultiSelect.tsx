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
    onChange(
      values.filter(
        (item) => item !== value
      )
    );
  };

  const getLabel = (
    value: string
  ) => {
    const option =
      options.find(
        (item) =>
          item.value === value
      );

    return option?.label || value;
  };

  return (
    <div className="space-y-3">
      <select
        className="h-12 w-full rounded-xl border px-4"
        onChange={(e) =>
          addValue(e.target.value)
        }
        value=""
      >
        <option value="">
          Select
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <div
            key={value}
            className="flex items-center gap-2 rounded-full bg-[#6475F7] px-3 py-1 text-white"
          >
            <span>
              {getLabel(value)}
            </span>

            <button
              type="button"
              onClick={() =>
                removeValue(value)
              }
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}