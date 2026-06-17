import { cardClass } from "./data";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function TechDecisionsSection() {
  const [openCard, setOpenCard] = useState<number | null>(0);
  const decisions = [
    {
      title: "React 19 + TypeScript Frontend",
      description:
        "React was selected to build a component-driven single-page application with reusable UI patterns and predictable rendering. TypeScript was introduced across the codebase to improve type safety, reduce runtime defects, provide stronger IDE tooling and simplify long-term maintenance as the project grew into multiple modules such as Dashboard, Test Management, Question Management, Publishing and Tracking.",
    },

    {
      title: "Feature Driven Frontend Architecture",
      description:
        "The frontend follows a modular feature-oriented structure where pages, components, hooks, contexts, services, state slices, utilities and type definitions are separated into dedicated layers. This organization minimizes coupling between modules, improves discoverability, simplifies onboarding and enables independent development of business features without affecting unrelated parts of the application.",
    },

    {
      title: "Redux Toolkit + React Context Hybrid State Management",
      description:
        "Redux Toolkit manages persistent application state including authentication and draft restoration, while React Context manages workflow-specific state such as active tests, question editing, hierarchy selection and UI interactions. Combining both approaches reduces unnecessary global state while maintaining predictable data flow and persistence capabilities.",
    },

    {
      title: "Centralized Service Layer",
      description:
        "All API communication is abstracted through dedicated service modules built on Axios. Service abstraction removes networking logic from UI components, centralizes endpoint management, standardizes request and response processing, improves testability and simplifies future backend migrations or API version upgrades.",
    },

    {
      title: "Node.js + Express Backend",
      description:
        "Node.js and Express were selected to provide a lightweight, scalable and event-driven API layer capable of handling authentication, hierarchy management, question processing, publishing workflows and lifecycle tracking. Express middleware architecture enabled modular routing, authentication handling, metrics collection and centralized error processing.",
    },

    {
      title: "Layered Backend Architecture",
      description:
        "The backend follows Router → Controller → Service → Model architecture. Routers define API contracts, controllers process requests and responses, services contain business rules and workflow logic, while models manage persistence. This separation improves maintainability, testing and scalability by isolating responsibilities across independent layers.",
    },

    {
      title: "MongoDB Document-Oriented Database",
      description:
        "MongoDB was selected because the platform contains naturally hierarchical and evolving data structures including Subjects, Topics, SubTopics, Tests and Questions. The flexible document model simplified relationship management, reduced schema rigidity and enabled rapid iteration during API development.",
    },

    {
      title: "JWT Authentication with Refresh Token Rotation",
      description:
        "Authentication is implemented using access tokens, refresh tokens, HttpOnly cookies and token rotation mechanisms. This design improves security while providing persistent sessions, automatic reauthentication and controlled session invalidation during logout or token refresh operations.",
    },

    {
      title: "Multi-Layer Validation Strategy",
      description:
        "Validation is enforced across frontend forms, API endpoints and database models. Zod validation on the frontend provides immediate user feedback, backend validation protects business workflows and persistence validation ensures long-term data integrity throughout the application lifecycle.",
    },

    {
      title: "Draft Persistence Workflow",
      description:
        "A dedicated persistence strategy was implemented using Redux and browser storage to allow incomplete tests and question sets to be restored after navigation, refreshes or interrupted workflows. This significantly improves user experience during lengthy examination creation processes.",
    },

    {
      title: "Rich Text Question Authoring",
      description:
        "TinyMCE integration was selected to support advanced question authoring and explanation management. Rich text editing enables complex MCQ formatting, detailed explanations and future extensibility for multimedia educational content.",
    },

    {
      title: "Publishing Automation & Lifecycle Tracking",
      description:
        "The platform supports draft, scheduled, live and expired states through dedicated publishing workflows. Automated synchronization services update lifecycle states based on scheduling and expiry rules, reducing manual administration while providing complete visibility into assessment availability.",
    },

    {
      title: "Metrics & Insights Engine",
      description:
        "A custom monitoring system records API requests, database operations, service execution metrics and response times into a dedicated insights engine. These analytics support performance analysis, optimization reporting and future scalability planning while providing visibility into system behaviour.",
    },
  ];



  return (
    <>
      <section id="tech-decisions" className="mt-20">
        <div className={`${cardClass} p-8`}>
          <p className="doc-eyebrow">Tech Decisions</p>

          <div className="mt-10 flex flex-col gap-3">
            {decisions.map((decision, index) => {
              const isOpen = openCard === index;

              return (
                <div
                  key={decision.title}
                  className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className="
            w-full max-w-3xl
            rounded-2xl
            border border-purple-900/50
            bg-purple-950/10
            backdrop-blur-md
            overflow-hidden
            transition-all duration-300
            hover:border-purple-400
            hover:shadow-lg hover:shadow-purple-500/20
          "
                  >
                    <button
                      onClick={() => setOpenCard(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="shrink-0 w-6 h-6 rounded-full border border-purple-700/60 bg-purple-900/40 flex items-center justify-center text-[11px] font-semibold text-purple-400">
                          {index + 1}
                        </span>
                        <h3 className="font-semibold text-purple-300 truncate">
                          {decision.title}
                        </h3>
                      </div>

                      <span
                        className={`
                shrink-0 flex items-center justify-center
                w-6 h-6 rounded-full
                border border-purple-700/40
                bg-purple-900/30
                text-purple-300
                transition-transform duration-300
                ${isOpen ? "rotate-180" : "rotate-0"}
              `}
                      >
                        <ChevronDown size={14} />
                      </span>
                    </button>

                    <div
                      className={`
              grid transition-all duration-300 ease-in-out
              ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
            `}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-purple-900/40 px-6 py-5 pl-[3.75rem]">
                          <p className="text-sm text-zinc-400 leading-7">
                            {decision.description}
                          </p>
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

    </>
  );
}

export default TechDecisionsSection;
