

/**
 * Publish workflow progress summary.
 *
 * Props:
 * - completed: Number of completed questions.
 * - total: Total expected questions.
 */


import { CircleCheckBig } from "lucide-react";

interface Props {
  completed: number;
  total: number;
}

export default function PublishProgress({ completed, total }: Props) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <h2 className="text-3xl font-semibold">Test created</h2>

      <div className="flex items-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2 text-emerald-600">
        <CircleCheckBig size={16} />

        <span>{ completed + "/" + total} Questions</span>
      </div>
    </div>
  );
}
