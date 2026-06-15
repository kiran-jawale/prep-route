

/**
 * Test Summary Card Component
 *
 * Displays condensed information about the
 * currently selected test.
 *
 * Props:
 * @param test Test information object.
 *
 * Displays:
 * - Category
 * - Name
 * - Difficulty
 * - Subject
 * - Topics
 * - SubTopics
 * - Duration
 * - Question Count
 * - Total Marks
 *
 * Purpose:
 * Provides quick test context throughout
 * workflow pages.
 */


import { Clock3, BookOpen, Award, Pencil } from "lucide-react";

import Badge from "../ui/Badge";

import type { Test, TestTopic } from "../../types/test.types";

interface Props {
  test: Test;
}

export default function TestSummaryCard({ test }: Props) {
  const subjectName =
    typeof test.subjectId === "object" ? test.subjectId?.name : "-";

  const topicNames = Array.isArray(test.topics)
    ? test.topics
        .filter((topic) => typeof topic === "object")
        .map((topic) => (topic as TestTopic).name)
    : [];
  const subTopicNames = Array.isArray(test.subTopics)
    ? test.subTopics
        .filter((subTopic) => typeof subTopic === "object")
        .map((subTopic: any) => subTopic.name)
    : [];

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="flex justify-between">
        <div className="space-y-4">
          <Badge>{test.category}</Badge>

          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold">{test.name}</h2>

            <span className="rounded-full bg-emerald-500 px-4 py-1 text-sm text-white">
              {test.difficulty}
            </span>
          </div>

          <div className="grid grid-cols-[100px_1fr] gap-y-3 text-sm">
            <span className="text-zinc-500">Subject</span>

            <span>{subjectName}</span>

            <span className="text-zinc-500">Topic</span>

            <div className="flex flex-wrap gap-2">
              {topicNames.map((topicName) => (
                <span
                  key={topicName}
                  className="rounded-full border border-amber-300 px-3 py-1 text-xs text-amber-500"
                >
                  {topicName}
                </span>
              ))}
            </div>

            <span className="text-zinc-500">Sub Topic</span>

            <div className="flex flex-wrap gap-2">
              {subTopicNames.map((subTopicName) => (
                <span
                  key={subTopicName}
                  className="rounded-full border border-amber-300 px-3 py-1 text-xs text-amber-500"
                >
                  {subTopicName}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <button type="button" className="ml-auto text-[#6475F7]">
            <Pencil size={18} />
          </button>

          <div className="flex items-center rounded-xl border border-zinc-200 px-4 py-2 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <Clock3 size={15} />
              {test.totalTime} Min
            </div>

            <div className="mx-4 h-4 w-px bg-zinc-200" />

            <div className="flex items-center gap-2">
              <BookOpen size={15} />
              {test.totalQuestions} Q's
            </div>

            <div className="mx-4 h-4 w-px bg-zinc-200" />

            <div className="flex items-center gap-2">
              <Award size={15} />
              {test.totalMarks} Marks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
