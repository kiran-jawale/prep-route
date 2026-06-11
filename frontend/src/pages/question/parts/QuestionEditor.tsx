import TextArea from "../../../components/ui/TextArea";

interface Props {
  value: string;

  onChange: (value: string) => void;
}

export default function QuestionEditor({ value, onChange }: Props) {
  return (
    <div>
      <TextArea
        rows={8}
        value={value}
        placeholder="Type here"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
