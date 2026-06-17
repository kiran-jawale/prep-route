import { cardClass } from "./data";

function ArchitectureSection() {
 
     const frontendLayers = [
    {
      title: "Pages",
      description: "Route level workflows and screens.",
    },
    {
      title: "Components",
      description: "Reusable UI and business components.",
    },
    {
      title: "Context / Redux",
      description: "Application state and workflow state.",
    },
    {
      title: "Services",
      description: "Axios based API communication.",
    },
  ];

  const backendLayers = [
    {
      title: "Router",
      description: "Maps endpoints to controllers.",
    },
    {
      title: "Controller",
      description: "Request and response handling.",
    },
    {
      title: "Service",
      description: "Business rules and workflows.",
    },
    {
      title: "Model",
      description: "Database persistence layer.",
    },
  ];
    


  return (
    <section id="architecture" className="mt-20">
      <div className={`${cardClass} p-8`}>
        <p className="doc-eyebrow">Architecture</p>

        <div
          className="
            mt-8
            rounded-2xl
            border
            border-purple-900/40
            bg-purple-950/10
            p-8
          "
        >
          <p className="doc-eyebrow">
            Layered Architecture
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              mt-8
            "
          >
            <span className="doc-pill">
              Components
            </span>

            <span className="text-purple-500">
              →
            </span>

            <span className="doc-pill">
              Frontend Services
            </span>

            <span className="text-purple-500">
              →
            </span>

            <span className="doc-pill">
              API Routes
            </span>

            <span className="text-purple-500">
              →
            </span>

            <span className="doc-pill">
              Middlewares
            </span>

            <span className="text-purple-500">
              →
            </span>

            <span className="doc-pill">
              Controllers
            </span>

            <span className="text-purple-500">
              →
            </span>

            <span className="doc-pill">
              Backend Services
            </span>

            <span className="text-purple-500">
              →
            </span>

            <span className="doc-pill">
              MongoDB
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <div
            className="
              rounded-2xl
              border
              border-purple-900/40
              bg-purple-950/10
              p-8
            "
          >
            <p className="doc-eyebrow">
              Frontend Architecture
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {frontendLayers.map((layer) => (
                <div
                  key={layer.title}
                  className="
                    rounded-xl
                    border
                    border-purple-900/30
                    bg-black/20
                    p-4
                  "
                >
                  <h4 className="font-semibold text-purple-300">
                    {layer.title}
                  </h4>

                  <p className="mt-2 text-sm text-zinc-400 leading-7">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-purple-900/40
              bg-purple-950/10
              p-8
            "
          >
            <p className="doc-eyebrow">
              Backend Architecture
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {backendLayers.map((layer) => (
                <div
                  key={layer.title}
                  className="
                    rounded-xl
                    border
                    border-purple-900/30
                    bg-black/20
                    p-4
                  "
                >
                  <h4 className="font-semibold text-purple-300">
                    {layer.title}
                  </h4>

                  <p className="mt-2 text-sm text-zinc-400 leading-7">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchitectureSection;