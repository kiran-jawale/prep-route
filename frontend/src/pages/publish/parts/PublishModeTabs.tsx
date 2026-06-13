interface Props {
  value: "immediate" | "scheduled";
  onChange: (value: "immediate" | "scheduled") => void;
}

export default function PublishModeTabs({ value, onChange }: Props) {
  return (
    <div className="inline-flex rounded-xl border border-zinc-200 bg-white p-1">
      <button
        type="button"
        onClick={() => onChange("immediate")}
        className={`rounded-lg px-8 py-3 font-medium transition ${
          value === "immediate"
            ? "bg-[#6475F7]/10 text-[#6475F7]"
            : "text-zinc-400"
        }`}
      >
        Publish Now
      </button>

      <button
        type="button"
        onClick={() => onChange("scheduled")}
        className={`rounded-lg px-8 py-3 font-medium transition ${
          value === "scheduled"
            ? "bg-[#6475F7]/10 text-[#6475F7]"
            : "text-zinc-400"
        }`}
      >
        Schedule Publish
      </button>
    </div>
  );
}
