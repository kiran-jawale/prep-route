interface Props {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export default function PageHeader({ title, description, action }: Props) {
  return (
    <div className="mb-8 flex items-start justify-between">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>

        {description && <p className="mt-2 text-zinc-500">{description}</p>}
      </div>

      {action}
    </div>
  );
}
