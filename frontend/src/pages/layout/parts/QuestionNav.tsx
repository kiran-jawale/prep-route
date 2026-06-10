import {
  ChevronLeft,
  CircleHelp,
  ListOrdered,
  CircleCheckBig,
} from "lucide-react";

import { useTest } from "../../../contexts/testContext";

interface Props {
  collapsed: boolean;
}

export default function QuestionsNav({ collapsed }: Props) {
  const { test, activeQuestion, setActiveQuestion } = useTest();

  return (
    <div className="flex h-full flex-col">
      {!collapsed && (
        <div className="border-b border-zinc-200 px-4 py-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 text-[14px] font-medium text-zinc-600">
                <CircleHelp size={15} />
                <span>Question creation</span>
              </div>

              <div className="mt-8 flex items-center gap-2 text-[13px] text-zinc-500">
                <ListOrdered size={14} />

                <span>
                  Total Questions .{" "}
                  <span className="font-semibold text-zinc-600">
                    {test?.totalQuestions || 0}
                  </span>
                </span>
              </div>
            </div>

            <ChevronLeft size={16} className="mt-1 text-[#6475F7]" />
          </div>
        </div>
      )}

      {collapsed && (
        <div className="flex justify-center border-b border-zinc-200 py-5">
          <ChevronLeft size={16} className="text-[#6475F7]" />
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-3 min-h-0">
        <div className="flex flex-col gap-2">
          {Array.from({
            length: test?.totalQuestions || 0,
          }).map((_, index) => {
            const questionNo = index + 1;

            const isActive = activeQuestion === questionNo;

            return (
              <button
                key={questionNo}
                onClick={() => setActiveQuestion(questionNo)}
                className={`flex items-center rounded-xl border transition ${
                  isActive
                    ? "border-[#6475F7] bg-[#6475F7]/8 text-[#6475F7]"
                    : "border-emerald-400 text-emerald-600 hover:bg-emerald-50"
                } ${
                  collapsed
                    ? "justify-center px-2 py-3"
                    : "justify-between px-3 py-2.5"
                }`}
              >
                {collapsed ? (
                  <CircleCheckBig size={14} />
                ) : (
                  <>
                    <span className="flex items-center gap-2 text-[12px] font-medium">
                      <CircleCheckBig size={14} />
                      Question {questionNo}
                    </span>

                    <span className="text-[12px] font-semibold">»</span>
                  </>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
