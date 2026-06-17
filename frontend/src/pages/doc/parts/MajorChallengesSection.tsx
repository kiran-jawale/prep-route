import { cardClass } from "./data";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

function MajorChallengesSection() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const challenges = [
    {
      title: "Test Lifecycle Synchronization & Status Management",
      summary:
        "Maintaining accurate synchronization between Draft, Scheduled, Live and Expired states across creation, publishing, tracking and backend automation workflows.",
      problem: [
        "Tests could exist in multiple lifecycle stages depending on publish mode and availability configuration.",
        "Immediate publishing required instant transition to Live state.",
        "Scheduled publishing required future activation without user interaction.",
        "Expiry based availability required automatic movement from Live to Expired.",
        "Frontend tracking screens had to always display the latest lifecycle state.",
        "Backend and frontend status representations needed to remain consistent.",
      ],
      implementation: [
        "Designed a dedicated publishing workflow supporting Immediate and Scheduled publication modes.",
        "Introduced lifecycle metadata including scheduledAt, publishedAt and availableUntil timestamps.",
        "Implemented backend synchronization services responsible for automatic state transitions.",
        "Created tracking workflows that visualize lifecycle progression through Draft → Scheduled → Live → Expired stages.",
        "Used centralized status handling across Dashboard, Publish and Tracking modules.",
        "Ensured lifecycle state could be restored correctly after page refreshes and workflow navigation.",
      ],
      outcome: [
        "Fully automated lifecycle management.",
        "No manual status updates required after publication.",
        "Consistent tracking across frontend and backend.",
        "Reliable scheduling and expiry behaviour.",
      ],
    },
    {
      title: "Draft Persistence & Workflow Recovery",
      summary:
        "Preserving incomplete test creation and question authoring progress across refreshes, navigation events and interrupted sessions.",
      problem: [
        "Test creation and question authoring can span dozens of questions and multiple workflow screens.",
        "Accidental refreshes or navigation could cause complete data loss.",
        "Users needed the ability to continue work from the exact point where they stopped.",
        "Question data, active question state and test metadata all needed restoration.",
        "Persistence had to work before data was permanently submitted to the backend.",
      ],
      implementation: [
        "Designed Redux based persistence architecture using rememberSlice.",
        "Stored test metadata, questions, workflow position and timestamps.",
        "Implemented draft save and resume functionality.",
        "Created restoration utilities that prioritize remembered workflow state before API retrieval.",
        "Integrated persistence into Question, Test and Publish workflows.",
        "Added save, restore, discard and overwrite handling for draft management.",
      ],
      outcome: [
        "No loss of in-progress authoring work.",
        "Reliable workflow continuation after refreshes.",
        "Improved usability for long examination creation sessions.",
        "Seamless draft restoration experience.",
      ],
    },
    {
      title: "Workflow Navigation Protection & Context Synchronization",
      summary:
        "Maintaining a single source of truth while users navigate between Test Creation, Question Management, Publishing and Tracking workflows.",
      problem: [
        "Workflow spans multiple routes and independent pages.",
        "Test data, question data, hierarchy selections and completion progress needed to remain synchronized.",
        "Navigation away from active workflows could accidentally discard unsaved work.",
        "Sidebar navigation required awareness of workflow state.",
        "Question navigation, active question tracking and completion tracking needed real-time updates.",
      ],
      implementation: [
        "Created centralized TestContext for workflow state management.",
        "Stored current test, question collection, active question, hierarchy data and completion status in shared context.",
        "Implemented protected workflow navigation with save, discard and cancel options.",
        "Integrated workflow state with Sidebar, Question Navigation and Publishing modules.",
        "Designed route-aware restoration logic for edit, question and publish workflows.",
        "Maintained synchronization between Context, Redux persistence and backend state.",
      ],
      outcome: [
        "Consistent workflow behaviour across all modules.",
        "Reduced risk of accidental data loss.",
        "Predictable navigation experience.",
        "Reliable state sharing between independent workflow screens.",
      ],
    },
  ];

  return (
    <section id="major-challenges" className="mt-20">
      <div className={`${cardClass} p-8`}>
        <p className="doc-eyebrow">Engineering Challenges</p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Major Challenges Faced
        </h2>

        <p className="mt-4 max-w-4xl text-zinc-400 leading-8">
          Beyond CRUD operations and API integration, several workflow-driven
          engineering problems emerged while building Prep Route. The most
          complex areas involved lifecycle synchronization, workflow recovery
          and maintaining a consistent state across multiple route-driven
          modules.
        </p>

        <div className="mt-12 flex flex-col gap-3">
          {challenges.map((challenge, index) => {
            const isOpen = openCard === index;

            return (
              <div
                key={challenge.title}
                className="
                  rounded-2xl
                  border border-violet-900/50
                  bg-violet-950/10
                  backdrop-blur-md
                  overflow-hidden
                  transition-all duration-300
                  hover:border-violet-400
                  hover:shadow-lg hover:shadow-violet-500/20
                "
              >
                {/* Header button */}
                <button
                  onClick={() => setOpenCard(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full border border-violet-700/60 bg-violet-900/40 text-xs font-semibold text-violet-400">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-violet-300 truncate">
                      {challenge.title}
                    </h3>
                  </div>

                  <span
                    className={`
                      shrink-0 flex items-center justify-center
                      w-6 h-6 rounded-full
                      border border-violet-700/40
                      bg-violet-900/30
                      text-violet-300
                      transition-transform duration-300
                      ${isOpen ? "rotate-180" : "rotate-0"}
                    `}
                  >
                    <ChevronDown size={14} />
                  </span>
                </button>

                {/* Expandable body */}
                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-violet-900/30">
                      {/* Summary */}
                      <div className="px-6 py-5 pl-[3.75rem]">
                        <p className="text-zinc-400 leading-7">
                          {challenge.summary}
                        </p>
                      </div>

                      {/* Three-column grid */}
                      <div className="grid lg:grid-cols-3 gap-6 px-6 pb-6 pl-[3.75rem]">
                        <div>
                          <h4 className="font-semibold text-red-300">Problem</h4>
                          <div className="mt-4 flex flex-col gap-3">
                            {challenge.problem.map((item) => (
                              <div
                                key={item}
                                className="flex items-start gap-2 text-sm text-zinc-400"
                              >
                                <ChevronRight size={14} className="mt-1 shrink-0 text-red-400" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-amber-300">Implementation</h4>
                          <div className="mt-4 flex flex-col gap-3">
                            {challenge.implementation.map((item) => (
                              <div
                                key={item}
                                className="flex items-start gap-2 text-sm text-zinc-400"
                              >
                                <ChevronRight size={14} className="mt-1 shrink-0 text-amber-400" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-emerald-300">Outcome</h4>
                          <div className="mt-4 flex flex-col gap-3">
                            {challenge.outcome.map((item) => (
                              <div
                                key={item}
                                className="flex items-start gap-2 text-sm text-zinc-400"
                              >
                                <ChevronRight size={14} className="mt-1 shrink-0 text-emerald-400" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MajorChallengesSection;