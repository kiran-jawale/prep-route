import { Clock3, BookOpen, Award } from "lucide-react";

import Badge from "../ui/Badge";

import type { Test } from "../../types/test.types";

interface Props {
  test: Test;
}

export default function TestSummaryCard({ test }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="flex items-start justify-between">
        <div>
          <Badge>{test.category}</Badge>

          <div className="mt-4">
            <h2 className="text-xl font-semibold">{test.name}</h2>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {Array.isArray(test.topics) &&
              test.topics.map((topic: any) => (
                <span
                  key={typeof topic === "string" ? topic : topic._id}
                  className="rounded-full border px-3 py-1 text-sm"
                >
                  {typeof topic === "string" ? topic : topic.name}
                </span>
              ))}
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-1">
            <Clock3 size={16} />
            {test.totalTime} Min
          </div>

          <div className="flex items-center gap-1">
            <BookOpen size={16} />
            {test.totalQuestions}
          </div>

          <div className="flex items-center gap-1">
            <Award size={16} />
            {test.totalMarks}
          </div>
        </div>
      </div>
    </div>
  );
}
