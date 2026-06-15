import { Trash2, Plus, Upload } from "lucide-react";

import Button from "../../../components/ui/Button";

interface Props {
  current: number;

  total: number;

  onReset: () => void;

  onMarkingScheme: () => void;

  onCsvImport: () => void;
}

export default function QuestionHeader({
  current,
  total,
  onReset,
  onMarkingScheme,
  onCsvImport,
}: Props) {
  return (
    <div>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#141B4D]">
            Question {current}
            <span className="font-medium text-[#7DA4FF]">/{total}</span>
          </h2>

          <button
            type="button"
            onClick={onReset}
            className="
              mt-4 flex items-center gap-2
              text-sm text-red-400
              transition hover:text-red-500
            "
          >
            <Trash2 size={15} />
            Delete All Edits
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={onMarkingScheme}>
            <Plus size={15} />
            MCQ
          </Button>

          <Button variant="secondary" onClick={onCsvImport}>
            <Upload size={15} />
            CSV
          </Button>
        </div>
      </div>
    </div>
  );
}
