import { cardClass } from "./data";
import {
  FileText,
  FolderOpen,
  Info,
} from "lucide-react";

function SummarySection() {
  const documentationAssets = [
    {
      title: "Project README.md",
      description:
        "Contains complete project overview, architecture summary, technology stack, implementation approach, workflow explanation, setup instructions, deployment details and repository structure.",
    },

    {
      title: "Frontend README.md",
      description:
        "Documents frontend architecture, routing structure, feature modules, reusable components, state management strategy, services layer, contexts, persistence workflow and implementation details.",
    },

    {
      title: "Backend README.md",
      description:
        "Documents API architecture, routes, controllers, services, middleware, authentication workflow, database models, lifecycle automation and backend implementation details.",
    },

    {
      title: "_DOCN.md Files",
      description:
        "Supplementary module-level documentation describing folder responsibilities, exported interfaces, types, component contracts, workflow behaviour, implementation notes and internal architectural decisions.",
    },
  ];

  const assignmentSummary = [
    "Implemented a complete examination management platform supporting Subject, Topic, SubTopic, Test and Question workflows.",

    "Designed reusable frontend architecture using React, TypeScript, Context API, Redux Toolkit, service abstractions and feature-oriented module organization.",

    "Built independent backend infrastructure using Express, MongoDB, layered architecture and JWT authentication despite the assignment primarily targeting frontend implementation.",

    "Developed draft persistence and workflow recovery mechanisms allowing restoration of in-progress examination creation sessions.",

    "Implemented publishing workflows supporting Draft, Scheduled, Live and Expired lifecycle states with automated synchronization.",

    "Designed centralized workflow state management enabling consistent navigation between creation, editing, publishing and tracking modules.",

    "Applied Router → Controller → Service → Model architecture to maintain separation of concerns and simplify long-term maintenance.",

    "Created reusable service layers, validation pipelines and shared engineering patterns across frontend and backend modules.",

    "Maintained technical documentation through README and _DOCN files to improve maintainability, onboarding and project understanding.",
  ];

  return (
    <section
      id="summary"
      className="mt-20"
    >
      <div className={`${cardClass} p-8`}>
        <p className="doc-eyebrow">
          Summary
        </p>

        {/* Assignment Summary */}

        <div className="mt-10">
          <div className="flex items-center gap-3 text-purple-300">
            <Info size={18} />

            <h2 className="text-xl font-semibold">
              Assignment Highlights
            </h2>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            {assignmentSummary.map((item) => (
              <div
                key={item}
                className="
                  rounded-xl
                  border
                  border-purple-900/40
                  bg-purple-950/10
                  px-5
                  py-4
                  text-zinc-300
                  leading-7
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Documentation */}

        <div className="mt-14">
          <div className="flex items-center gap-3 text-blue-300">
            <FolderOpen size={18} />

            <h2 className="text-xl font-semibold">
              Documentation Assets
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 mt-6">
            {documentationAssets.map((item) => (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-blue-900/40
                  bg-blue-950/10
                  p-5
                "
              >
                <h3 className="font-semibold text-blue-300">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-400 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Note */}

        <div
          className="
            mt-14
            rounded-2xl
            border
            border-emerald-900/40
            bg-emerald-950/10
            p-6
          "
        >
          <div className="flex items-center gap-3 text-emerald-300">
            <FileText size={18} />

            <h3 className="font-semibold">
              Final Outcome
            </h3>
          </div>

          <p className="mt-4 text-zinc-400 leading-8">
            Although assigned as a frontend-focused implementation exercise,
            the solution evolved into a complete full-stack system involving
            frontend architecture design, backend development, workflow
            orchestration, lifecycle management, persistence mechanisms,
            reusable engineering patterns and supporting technical
            documentation. The resulting implementation demonstrates practical
            software engineering principles, system-level thinking and the
            ability to design maintainable applications beyond isolated UI
            development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SummarySection;