

/**
 * Confirm Modal Component
 *
 * Displays a confirmation dialog before executing workflow
 * actions that may cause navigation, state loss, or data changes.
 *
 * Props:
 * @param title Modal heading.
 * @param message Description shown to user.
 * @param onSave Callback executed when user chooses to save.
 * @param onDiscard Callback executed when user chooses to discard.
 * @param onCancel Callback executed when user closes the modal.
 *
 * Purpose:
 * Prevents accidental workflow interruption.
 */


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