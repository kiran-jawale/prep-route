interface Props {
  title: string;

  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold">{title}</h2>

      {subtitle && <p className="mt-1 text-zinc-500">{subtitle}</p>}
    </div>
  );
}
