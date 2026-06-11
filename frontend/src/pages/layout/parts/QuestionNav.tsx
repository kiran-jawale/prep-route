import { useState } from "react";
import {
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  CircleHelp,
  ListOrdered,
  CircleCheckBig,
} from "lucide-react";

import { useTest } from "../../../contexts/testContext";

interface Props {
  collapsed: boolean;
}

export default function QuestionsNav({
  collapsed,
}: Props) {
  const {
    test,
    activeQuestion,
    setActiveQuestion,
    completedQuestions,
  } = useTest();

  const totalQuestions =
    test?.totalQuestions || 0;

  const completedCount =
    completedQuestions.length;

  const [
    openGroup,
    setOpenGroup,
  ] = useState<number>(0);

  const questionGroups =
    Array.from({
      length: Math.ceil(
        totalQuestions / 10
      ),
    }).map((_, index) => {
      const start =
        index * 10 + 1;

      const end = Math.min(
        start + 9,
        totalQuestions
      );

      return {
        start,
        end,
      };
    });

  return (
    <div className="flex h-full flex-col">
      {!collapsed && (
        <div className="border-b border-zinc-200 px-4 py-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 text-[14px] font-medium text-zinc-600">
                <CircleHelp size={15} />

                <span>
                  Question Creation
                </span>
              </div>

              <div className="mt-8 flex items-center gap-2 text-[13px] text-zinc-500">
                <ListOrdered size={14} />

                <span>
                  Total Questions ·{" "}
                  <span className="font-semibold text-zinc-600">
                    {totalQuestions}
                  </span>
                </span>
              </div>

              <div className="mt-2 text-[12px] text-zinc-500">
                Completed{" "}
                <span className="font-semibold text-emerald-600">
                  {completedCount}
                </span>
                {" / "}
                {totalQuestions}
              </div>
            </div>

            <ChevronLeft
              size={16}
              className="mt-1 text-[#6475F7]"
            />
          </div>
        </div>
      )}

      {collapsed && (
        <div className="flex justify-center border-b border-zinc-200 py-5">
          <ChevronLeft
            size={16}
            className="text-[#6475F7]"
          />
        </div>
      )}

      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        {totalQuestions <= 10 ? (
          <div className="flex flex-col gap-2">
            {Array.from({
              length: totalQuestions,
            }).map((_, index) => {
              const questionNo =
                index + 1;

              const isActive =
                activeQuestion ===
                questionNo;

              const isCompleted =
                completedQuestions.includes(
                  questionNo
                );

              return (
                <button
                  key={questionNo}
                  type="button"
                  onClick={() =>
                    setActiveQuestion(
                      questionNo
                    )
                  }
                  className={`flex items-center rounded-xl border transition ${
                    isActive
                      ? "border-[#6475F7] bg-[#6475F7]/8 text-[#6475F7]"
                      : isCompleted
                        ? "border-emerald-400 text-emerald-600 hover:bg-emerald-50"
                        : "border-zinc-200 text-zinc-400 hover:bg-zinc-50"
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

                      <span className="text-[12px] font-semibold">
                        »
                      </span>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="space-y-3">
            {questionGroups.map(
              (group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="rounded-xl border border-zinc-200"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenGroup(
                        openGroup ===
                          groupIndex
                          ? -1
                          : groupIndex
                      )
                    }
                    className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-medium text-zinc-700"
                  >
                    <span>
                      Q
                      {group.start}
                      {" - "}
                      Q
                      {group.end}
                    </span>

                    {openGroup ===
                    groupIndex ? (
                      <ChevronUp
                        size={16}
                      />
                    ) : (
                      <ChevronDown
                        size={16}
                      />
                    )}
                  </button>

                  {openGroup ===
                    groupIndex && (
                    <div className="flex flex-col gap-2 border-t border-zinc-100 p-2">
                      {Array.from({
                        length:
                          group.end -
                          group.start +
                          1,
                      }).map(
                        (
                          _,
                          index
                        ) => {
                          const questionNo =
                            group.start +
                            index;

                          const isActive =
                            activeQuestion ===
                            questionNo;

                          const isCompleted =
                            completedQuestions.includes(
                              questionNo
                            );

                          return (
                            <button
                              key={
                                questionNo
                              }
                              type="button"
                              onClick={() =>
                                setActiveQuestion(
                                  questionNo
                                )
                              }
                              className={`flex items-center justify-between rounded-xl border px-3 py-2.5 transition ${
                                isActive
                                  ? "border-[#6475F7] bg-[#6475F7]/8 text-[#6475F7]"
                                  : isCompleted
                                    ? "border-emerald-400 text-emerald-600 hover:bg-emerald-50"
                                    : "border-zinc-200 text-zinc-400 hover:bg-zinc-50"
                              }`}
                            >
                              <span className="flex items-center gap-2 text-[12px] font-medium">
                                <CircleCheckBig size={14} />

                                Question{" "}
                                {
                                  questionNo
                                }
                              </span>

                              <span className="text-[12px] font-semibold">
                                »
                              </span>
                            </button>
                          );
                        }
                      )}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}