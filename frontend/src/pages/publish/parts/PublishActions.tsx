import Button from "../../../components/ui/Button";

interface Props {
  loading: boolean;
  onCancel: () => void;
}

export default function PublishActions({ loading, onCancel }: Props) {
  return (
    <div className="flex justify-end gap-4">
      <Button
        type="button"
        variant="secondary"
        className="min-w-40 bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
        onClick={onCancel}
      >
        Cancel
      </Button>

      <Button type="submit" loading={loading} className="min-w-40">
        Confirm
      </Button>
    </div>
  );
}
