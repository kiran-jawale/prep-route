import SearchBar from "../../../components/shared/SearchBar";
import Select from "../../../components/ui/Select";
import Button from "../../../components/ui/Button";

interface Subject {
  _id: string;
  name: string;
}

interface Props {
  search: string;

  status: string;

  subject: string;

  subjects: Subject[];

  onSearch: (value: string) => void;

  onStatusChange: (value: string) => void;

  onSubjectChange: (value: string) => void;

  onRefresh: () => void;
}

export default function TestsFilters({
  search,
  status,
  subject,
  subjects,
  onSearch,
  onStatusChange,
  onSubjectChange,
  onRefresh,
}: Props) {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <SearchBar
          value={search}
          onChange={onSearch}
          placeholder="Search test or subject..."
        />
      </div>

      <div className="w-48">
        <Select
          value={status}
          onChange={onStatusChange}
          options={[
            {
              label: "All Status",
              value: "all",
            },
            {
              label: "Live",
              value: "live",
            },
            {
              label: "Scheduled",
              value: "scheduled",
            },
            {
              label: "Draft",
              value: "draft",
            },
            {
              label: "Expired",
              value: "expired",
            },
          ]}
        />
      </div>

      <div className="w-56">
        <Select
          value={subject}
          onChange={onSubjectChange}
          options={[
            {
              label: "All Subjects",
              value: "all",
            },

            ...subjects.map((subject) => ({
              label: subject.name,
              value: subject._id,
            })),
          ]}
        />
      </div>

      <Button
        variant="secondary"
        onClick={onRefresh}
      >
        Refresh
      </Button>
    </div>
  );
}