import SearchBar from "../../../components/shared/SearchBar";
import Button from "../../../components/ui/Button";

interface Props {
  search: string;

  onSearch: (value: string) => void;

  onRefresh: () => void;
}

export default function TestsFilters({ search, onSearch, onRefresh }: Props) {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <SearchBar
          value={search}
          onChange={onSearch}
          placeholder="Search tests..."
        />
      </div>

      <Button variant="secondary" onClick={onRefresh}>
        Refresh
      </Button>
    </div>
  );
}
