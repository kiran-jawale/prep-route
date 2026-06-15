

/**
 * Breadcrumb Component
 *
 * Displays the current navigation path as a sequence of items
 * separated by forward slashes.
 *
 * Props:
 * @param items Ordered list of breadcrumb labels.
 *
 * Purpose:
 * Provides simple navigation context to the user.
 */


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
