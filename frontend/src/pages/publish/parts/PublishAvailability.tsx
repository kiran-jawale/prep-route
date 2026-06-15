

/**
 * Test availability configuration section.
 *
 * Props:
 * - value: Selected availability mode.
 * - endDate: Custom availability end date.
 * - endTime: Custom availability end time.
 * - onChange: Handles availability mode updates.
 * - onEndDateChange: Handles end date updates.
 * - onEndTimeChange: Handles end time updates.
 */


import Input from "../../../components/ui/Input";

interface Props {
  value: "always" | "1week" | "2weeks" | "3weeks" | "1month" | "custom";

  endDate: string;

  endTime: string;

  onChange: (
    value: "always" | "1week" | "2weeks" | "3weeks" | "1month" | "custom"
  ) => void;

  onEndDateChange: (value: string) => void;

  onEndTimeChange: (value: string) => void;
}

const options = [
  {
    value: "always",
    label: "Always Available",
  },
  {
    value: "1week",
    label: "1 Week",
  },
  {
    value: "2weeks",
    label: "2 Weeks",
  },
  {
    value: "3weeks",
    label: "3 Weeks",
  },
  {
    value: "1month",
    label: "1 Month",
  },
  {
    value: "custom",
    label: "Custom Duration",
  },
];

export default function PublishAvailability({
  value,
  endDate,
  endTime,
  onChange,
  onEndDateChange,
  onEndTimeChange,
}: Props) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold">Live Until</h3>

        <p className="mt-2 text-zinc-500">
          Choose how long this test should remain available on the platform.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-32 gap-y-8">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-4"
          >
            <input
              type="radio"
              checked={value === option.value}
              onChange={() => onChange(option.value as any)}
              className="h-5 w-5"
            />

            <span className="text-lg text-zinc-700">{option.label}</span>
          </label>
        ))}
      </div>

      {value === "custom" && (
        <div className="grid grid-cols-2 gap-6">
          <Input
            type="date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
          />

          <Input
            type="time"
            value={endTime}
            onChange={(e) => onEndTimeChange(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
