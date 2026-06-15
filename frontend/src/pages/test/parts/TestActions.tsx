

/**
 * Test workflow action controls.
 *
 * Props:
 * - loading: Controls submit loading state.
 * - onCancel: Handles workflow cancellation.
 */


import Button from "../../../components/ui/Button";

interface Props {
  loading: boolean;
  onCancel: () => void;
}

export default function TestActions({ loading, onCancel }: Props) {
  return (
    <div className="flex justify-end gap-4">
      <Button variant="secondary" type="button" onClick={onCancel}>
        Cancel
      </Button>

      <Button loading={loading} type="submit">
        Next
      </Button>
    </div>
  );
}
