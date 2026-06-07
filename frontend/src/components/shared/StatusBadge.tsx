interface Props {
  status: "draft" | "live" | "scheduled" | "expired";
}

export default function StatusBadge({ status }: Props) {
  const colors = {
    draft: "bg-zinc-100 text-zinc-700",

    live: "bg-green-100 text-green-700",

    scheduled: "bg-blue-100 text-blue-700",

    expired: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`
        rounded-full
        px-3
        py-1
        text-sm
        font-medium
        ${colors[status]}
      `}
    >
      {status}
    </span>
  );
}
