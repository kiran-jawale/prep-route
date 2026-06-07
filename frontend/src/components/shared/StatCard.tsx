interface Props {
  title: string;

  value: string | number;

  color?: string;
}

export default function StatCard({
  title,
  value,
  color = "text-[#6475F7]",
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <p className="text-sm text-zinc-500">{title}</p>

      <h3 className={`mt-3 text-3xl font-bold ${color}`}>{value}</h3>
    </div>
  );
}
