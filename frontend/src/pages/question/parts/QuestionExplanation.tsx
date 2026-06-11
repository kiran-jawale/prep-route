import TextArea from "../../../components/ui/TextArea";

interface Props {
  value: string;

  onChange: (value: string) => void;
}

export default function QuestionExplanation({ value, onChange }: Props) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-medium">Add Solution</h3>

      <TextArea
        rows={6}
        value={value}
        placeholder="Type here"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
