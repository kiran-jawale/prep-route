interface Props {
  value: string;

  onChange: (value: string) => void;

  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="
        h-12
        w-full
        rounded-xl
        border
        border-zinc-300
        px-4
        outline-none
        focus:border-[#6475F7]
      "
    />
  );
}
