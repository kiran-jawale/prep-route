import PageHeader from "../../components/shared/PageHeader";

export default function Tracking() {
  const steps = [
    {
      title: "Test Created",
      description: "Basic test details saved",
      completed: true,
    },
    {
      title: "Questions Added",
      description: "Questions linked to test",
      completed: false,
    },
    {
      title: "Review & Publish",
      description: "Ready for publication",
      completed: false,
    },
  ];

  return (
    <div className="p-8">
      <PageHeader
        title="Test Tracking"
        description="Track current test progress"
      />

      <div className="mt-8 space-y-6">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-start gap-4">
            <div
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-white
                ${step.completed ? "bg-emerald-500" : "bg-zinc-300"}
              `}
            >
              {index + 1}
            </div>

            <div className="flex-1 rounded-2xl border bg-white p-5">
              <h3 className="font-semibold">{step.title}</h3>

              <p className="mt-1 text-sm text-zinc-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
