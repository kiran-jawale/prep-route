import StatCard from "../../../components/shared/StatCard";

interface Props {
  stats: {
    total: number;
    live: number;
    draft: number;
    scheduled: number;
    expired: number;
  };

  onSelect: (
    filter: "all" | "live" | "draft" | "scheduled" | "expired"
  ) => void;
}

export default function DashboardStats({ stats, onSelect }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      <StatCard
        title="All Tests"
        value={stats.total}
        onClick={() => onSelect("all")}
      />

      <StatCard
        title="Live Tests"
        value={stats.live}
        color="text-green-600"
        onClick={() => onSelect("live")}
      />

      <StatCard
        title="Scheduled"
        value={stats.scheduled}
        color="text-blue-600"
        onClick={() => onSelect("scheduled")}
      />

      <StatCard
        title="Drafts"
        value={stats.draft}
        color="text-orange-600"
        onClick={() => onSelect("draft")}
      />

      <StatCard
        title="Expired"
        value={stats.expired}
        color="text-red-600"
        onClick={() => onSelect("expired")}
      />
    </div>
  );
}
