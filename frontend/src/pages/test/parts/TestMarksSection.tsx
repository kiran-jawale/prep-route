import Input from "../../../components/ui/Input";

interface Props {
  correctMarks: number;
  wrongMarks: number;
  unattemptMarks: number;
  totalQuestions: number;
  totalMarks: number;
  onChange: (field: string, value: string | number) => void;
}

export default function TestMarksSection({
  correctMarks,
  wrongMarks,
  unattemptMarks,
  totalQuestions,
  totalMarks,
  onChange,
}: Props) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium">Marking Scheme</h3>

      <div className="grid grid-cols-5 gap-8">
        <div>
          <label className="mb-3 block">Wrong Answer</label>

          <Input
            type="number"
            value={wrongMarks}
            onChange={(e) => onChange("wrongMarks", Number(e.target.value))}
          />
        </div>

        <div>
          <label className="mb-3 block">Unattempted</label>

          <Input
            type="number"
            value={unattemptMarks}
            onChange={(e) => onChange("unattemptMarks", Number(e.target.value))}
          />
        </div>

        <div>
          <label className="mb-3 block">Correct Answer</label>

          <Input
            type="number"
            value={correctMarks}
            onChange={(e) => onChange("correctMarks", Number(e.target.value))}
          />
        </div>

        <div>
          <label className="mb-3 block">No of Questions</label>

          <Input
            type="number"
            value={totalQuestions}
            onChange={(e) => onChange("totalQuestions", Number(e.target.value))}
          />
        </div>

        <div>
          <label className="mb-3 block">Total Marks</label>

          <div className="flex h-12 items-center rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm font-medium text-zinc-600">
            {totalMarks}
          </div>
        </div>
      </div>
    </div>
  );
}
