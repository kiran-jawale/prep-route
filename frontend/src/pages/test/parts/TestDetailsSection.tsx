import Input from "../../../components/ui/Input";

interface Props {
  name: string;
  totalTime: number;
  onChange: (field: string, value: any) => void;
}

export default function TestDetailsSection({
  name,
  totalTime,
  onChange,
}: Props) {
  return (
    <>
      <div>
        <label className="mb-3 block">Name of Test</label>

        <Input
          value={name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>

      <div>
        <label className="mb-3 block">Duration (Minutes)</label>

        <Input
          type="number"
          value={totalTime}
          onChange={(e) => onChange("totalTime", Number(e.target.value))}
        />
      </div>
    </>
  );
}
