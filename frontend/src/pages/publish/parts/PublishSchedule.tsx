

/**
 * Publish scheduling section.
 *
 * Props:
 * - date: Scheduled publication date.
 * - time: Scheduled publication time.
 * - onDateChange: Handles date updates.
 * - onTimeChange: Handles time updates.
 */


import Input from "../../../components/ui/Input";

interface Props {
  date: string;
  time: string;
  onDateChange: (value: string) => void;
  onTimeChange: (value: string) => void;
}

export default function PublishSchedule({
  date,
  time,
  onDateChange,
  onTimeChange,
}: Props) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Select Date and Time</h3>

      <div className="grid grid-cols-2 gap-6">
        <Input
          type="date"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
        />

        <Input
          type="time"
          value={time}
          onChange={(e) => onTimeChange(e.target.value)}
        />
      </div>
    </div>
  );
}
