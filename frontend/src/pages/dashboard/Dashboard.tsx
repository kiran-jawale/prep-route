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

  const [statusFilter, setStatusFilter] = useState("all");

  const [subjectFilter, setSubjectFilter] = useState("all");

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
    return tests.filter((test) => {
      const matchesSearch =
        test.name.toLowerCase().includes(search.toLowerCase()) ||
        test.subjectId?.name?.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all"
          ? true
          : statusFilter === "scheduled"
            ? test.publishMode === "scheduled"
            : test.status === statusFilter;

      const matchesSubject =
        subjectFilter === "all" ? true : test.subjectId?._id === subjectFilter;

      return matchesSearch && matchesStatus && matchesSubject;
    });
  }, [tests, search, statusFilter, subjectFilter]);

  const stats = {
    total: tests.length,
    live: tests.filter((item) => item.status === "live").length,
    draft: tests.filter((item) => item.status === "draft").length,
    scheduled: tests.filter((item) => item.publishMode === "scheduled").length,
    expired: tests.filter((item) => item.status === "expired").length,
  };

  const subjects = useMemo(() => {
    const map = new Map();

    tests.forEach((test) => {
      if (test.subjectId?._id) {
        map.set(test.subjectId._id, test.subjectId);
      }
    });

    return Array.from(map.values());
  }, [tests]);

  const handleCardClick = (
    filter: "all" | "live" | "draft" | "scheduled" | "expired"
  ) => {
    navigate("/dashboard#tests");

    setStatusFilter(filter);
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
                status={statusFilter}
                subject={subjectFilter}
                subjects={subjects}
                onSearch={setSearch}
                onStatusChange={setStatusFilter}
                onSubjectChange={setSubjectFilter}
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
