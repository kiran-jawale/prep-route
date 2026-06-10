interface Props {
  value: string;
  onChange: (value: string) => void;
}

const tabs = [
  {
    label: "Chapter Wise",
    value: "chapterWise",
  },
  {
    label: "PYQ",
    value: "pyq",
  },
  {
    label: "Mock Test",
    value: "mockTest",
  },
];

export default function TestCategoryTabs({ value, onChange }: Props) {
  return (
    <div className="inline-flex rounded-2xl border bg-white p-1">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onChange(tab.value)}
          className={`rounded-xl px-8 py-3 transition ${
            value === tab.value
              ? "bg-[#6475F7]/10 text-[#6475F7]"
              : "text-zinc-500"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
