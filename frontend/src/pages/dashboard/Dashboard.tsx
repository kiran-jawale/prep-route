import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import testService from "../../services/test.service";

import DashboardActions from "./parts/DashboardActions";
import DashboardStats from "./parts/DashboardStats";
import RecentTests from "./parts/RecentTests";
import TestsFilters from "./parts/TestFilters";
import TestsTable from "./parts/TestsTable";

import OverviewSkeleton from "./parts/OverviewSkeleton";
import TestsSkeleton from "./parts/TestsSkeleton";

export default function Dashboard() {
  const location = useLocation();

  const navigate = useNavigate();

  const currentHash = location.hash || "#overview";

  const [loading, setLoading] = useState(true);

  const [tests, setTests] = useState<any[]>([]);

  const [search, setSearch] = useState("");

  const loadTests = async () => {
    try {
      setLoading(true);

      const response = await testService.getAll();

      setTests(response.data.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTests();
  }, []);

  const filteredTests = useMemo(() => {
    return tests.filter((test) =>
      test.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [tests, search]);

  const stats = {
    total: tests.length,

    live: tests.filter((item) => item.status === "live").length,

    draft: tests.filter((item) => item.status === "draft").length,

    scheduled: tests.filter((item) => item.publishMode === "scheduled").length,

    expired: tests.filter((item) => item.status === "expired").length,
  };

  const handleCardClick = (
    filter: "all" | "live" | "draft" | "scheduled" | "expired"
  ) => {
    navigate("/dashboard#tests");

    if (filter === "all") {
      return;
    }

    setSearch(filter);
  };

  return (
    <div className="space-y-8 p-8">
      {currentHash === "#overview" && (
        <>
          {loading ? (
            <OverviewSkeleton />
          ) : (
            <>
              <DashboardActions />

              <DashboardStats stats={stats} onSelect={handleCardClick} />

              <RecentTests tests={tests.slice(0, 5)} />
            </>
          )}
        </>
      )}

      {currentHash === "#tests" && (
        <>
          {loading ? (
            <TestsSkeleton />
          ) : (
            <>
              <TestsFilters
                search={search}
                onSearch={setSearch}
                onRefresh={loadTests}
              />

              <TestsTable tests={filteredTests} />
            </>
          )}
        </>
      )}
    </div>
  );
}
