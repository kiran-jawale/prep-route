import Button from "../ui/Button";

interface Props {
  title: string;
  message: string;
  onSave: () => void;
  onDiscard: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  title,
  message,
  onSave,
  onDiscard,
  onCancel,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>

        <p className="mt-2 text-zinc-500">
          {message}
        </p>
      </div>

      <div className="flex justify-end gap-3">
        <Button
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button
          variant="primary"
          onClick={onSave}
        >
          Save Progress
        </Button>

        <Button
          variant="danger"
          onClick={onDiscard}
        >
          Don't Save
        </Button>
      </div>
    </div>
  );
}