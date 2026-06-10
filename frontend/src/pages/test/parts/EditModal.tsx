import Button from "../../../components/ui/Button";

interface Props {
  title: string;
  onEdit: () => void;
  onQuestions: () => void;
  onPublish: () => void;
}

export default function EditTestModal({
  title,
  onEdit,
  onQuestions,
  onPublish,
}: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{title}</h2>

      <div className="grid gap-3">
        <Button onClick={onEdit}>Edit Test</Button>

        <Button variant="secondary" onClick={onQuestions}>
          Manage Questions
        </Button>

        <Button variant="secondary" onClick={onPublish}>
          Publish Test
        </Button>
      </div>
    </div>
  );
}
