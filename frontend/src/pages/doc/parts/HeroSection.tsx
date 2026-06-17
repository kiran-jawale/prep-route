import { profile, project, techStack, sections, ExternalLink } from "./data";

function HeroSection() {
  const allTech = [
    ...techStack.frontend,
    ...techStack.backend,
    ...techStack.tools,
  ];

  return (
    <section id="hero">
      <div className="doc-hero-grid">
        <div className="doc-cell-assignment">
          <div className="doc-card-nav h-full p-8">
            <p className="doc-eyebrow">Assignment</p>

            <h1 className="text-5xl font-bold mt-4 text-white">
              {project.title}
            </h1>

            <h2 className="text-xl text-zinc-400 mt-3">{project.subtitle}</h2>

            <div className="flex flex-wrap gap-4 mt-5 text-xs text-zinc-500 tracking-wide">
              <span>Started : {project.started}</span>
              <span>·</span>
              <span>Completed : {project.completed}</span>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={project.application}
                target="_blank"
                rel="noreferrer"
                className="doc-pill"
              >
                Application <ExternalLink size={13} />
              </a>
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="doc-pill"
              >
                Repository <ExternalLink size={13} />
              </a>
              <a
                href={project.frontend}
                target="_blank"
                rel="noreferrer"
                className="doc-pill"
              >
                Frontend <ExternalLink size={13} />
              </a>
              <a
                href={project.backend}
                target="_blank"
                rel="noreferrer"
                className="doc-pill"
              >
                Backend <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        <div className="doc-cell-profile">
          <div className="doc-card-profile h-full p-8">
            <h3 className="text-3xl font-bold text-white">{profile.name}</h3>
            <p className="text-zinc-400 mt-4">MCA'26 @ GECA | MH</p>

            <div className="flex gap-4 mt-8">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="doc-social-btn"
              >
                <img
                  src="/github.png"
                  alt="GitHub"
                  className="h-7 w-7 transition-transform duration-300"
                />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="doc-social-btn"
              >
                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="h-7 w-7 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="doc-cell-summary">
          <div className="doc-card h-full p-8">
            <p className="doc-eyebrow">PROJECT SUMMARY</p>
          
            <p className="mt-6 text-zinc-400 leading-8">
              PrepRoute is a full-stack MCQ examination management platform
              built to streamline the complete assessment lifecycle from test
              creation to publication and status tracking. The system organizes
              educational content through a Subject → Topic → SubTopic hierarchy
              and provides structured workflows for authentication, dashboard
              analytics, test configuration, rich-text question management,
              CSV-based bulk imports, draft persistence, publishing automation
              and lifecycle monitoring. The platform follows a modular React +
              TypeScript frontend architecture integrated with a layered Node.js
              + Express backend through REST APIs, enabling scalable feature
              development, maintainable business workflows and production-ready
              deployment.
            </p>
          </div>
        </div>

        <div className="doc-cell-index">
          <div className="doc-card-nav h-full p-8">
            <p className="doc-eyebrow">Navigation</p>

            <div className="flex flex-col gap-1 mt-8">
              {sections.map((section, i) => (
                <div key={section.id}>
                  <button
                    className="text-sm text-purple-400 cursor-pointer duration-200 hover:text-purple-200"
                    onClick={() =>
                      document.getElementById(section.id)?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    {section.label}
                  </button>
                  {i < sections.length - 1 && (
                    <div className="doc-nav-divider" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="doc-cell-stack" id="stack">
          <div className="doc-card h-full p-8">
            <p className="doc-eyebrow">Tech Stack</p>

            <div className="flex flex-wrap gap-3 mt-8">
              {allTech.map((item) => (
                <span key={item} className="doc-tech-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
