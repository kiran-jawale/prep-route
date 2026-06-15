

/**
 * Stat Card Component
 *
 * Displays a single dashboard metric value with
 * optional click interaction.
 *
 * Props:
 * @param title Metric label.
 * @param value Metric value.
 * @param color Tailwind color classes.
 * @param onClick Optional click handler.
 *
 * Purpose:
 * Visualizes dashboard statistics consistently.
 */


interface Props {
  title: string;
  value: string | number;
  color?: string;
  onClick?: () => void;
}

export default function StatCard({
  title,
  value,
  color = "text-[#6475F7]",
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer   rounded-2xl border border-zinc-300  bg-white  p-6
        shadow-sm   transition-all  hover:border-[#6475F7]  hover:shadow-md
      "
    >
      <p className="text-sm text-zinc-500">{title}</p>

      <h3 className={`mt-3 text-3xl font-bold ${color}`}>{value}</h3>
    </div>
  );
}
