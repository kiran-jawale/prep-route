interface Props {
  items: string[];
}

const Breadcrumb = ({ items }: Props) => {
  return (
    <div className="flex gap-2 text-zinc-500">
      {items.map((item, index) => (
        <div key={item} className="flex items-center gap-2">
          <span>{item}</span>

          {index < items.length - 1 && <span>/</span>}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
