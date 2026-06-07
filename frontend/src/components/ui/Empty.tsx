interface Props {
  title: string;

  subtitle?: string;
}

export default function Empty({ title, subtitle }: Props) {
  return (
    <div className="py-16 text-center">
      <h3 className="text-xl font-medium">{title}</h3>

      {subtitle && <p className="mt-2 text-zinc-500">{subtitle}</p>}
    </div>
  );
}
