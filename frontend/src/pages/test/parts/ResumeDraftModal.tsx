import Button from "../../../components/ui/Button";

interface Props {
  onResume: () => void;
  onStartFresh: () => void;
}

export default function ResumeDraftModal({ onResume, onStartFresh }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Resume Draft?</h2>

      <p className="text-zinc-500">A previously edited test exists.</p>

      <div className="flex justify-end gap-3">
        <Button variant="secondary" onClick={onStartFresh}>
          Start Fresh
        </Button>

        <Button onClick={onResume}>Resume</Button>
      </div>
    </div>
  );
}
