

/**
 * Dashboard module page.
 *
 * Purpose:
 * Coordinates overview metrics, test listing, filtering and dashboard navigation workflows.
 */


import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import testService from "../../services/test.service";
import subjectService from "../../services/subject.service";

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

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("all");

  const [subjectFilter, setSubjectFilter] = useState("all");

  const [tests, setTests] = useState<any[]>([]);

  const [subjects, setSubjects] = useState<any[]>([]);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const [initialLoading, setInitialLoading] = useState(true);

  const [loadingMore, setLoadingMore] = useState(false);

  const [stats, setStats] = useState({
    total: 0,
    live: 0,
    draft: 0,
    scheduled: 0,
    expired: 0,
  });

  const loadStats = async () => {
    try {
      const response = await testService.getDashboardStats();

      setStats(response.data.data);
    } catch {}
  };

  const loadSubjects = async () => {
    try {
      const response = await subjectService.getAll();

      setSubjects(response.data.data);
    } catch {}
  };

  const loadTests = async (
    nextPage = 1,
    replace = false
  ) => {
    try {
      if (replace) {
        setInitialLoading(true);
      } else {
        setLoadingMore(true);
      }

      const response =
        await testService.getAll(nextPage, 20);

      const data = response.data.data;

      setPage(nextPage);

      setTotalPages(data.totalPages);

      setTests((prev) => {
        if (replace) {
          return data.items;
        }

        const map = new Map();

        [...prev, ...data.items].forEach((item: any) => {
          map.set(item._id, item);
        });

        return Array.from(map.values());
      });
    } finally {
      setInitialLoading(false);
      setLoadingMore(false);
    }
  };

  const handlePageChange = useCallback(
    (nextPage: number) => {
      if (
        loadingMore ||
        nextPage > totalPages
      ) {
        return;
      }

      loadTests(nextPage);
    },
    [loadingMore, totalPages]
  );

  useEffect(() => {
    loadStats();

    loadSubjects();

    loadTests(1, true);
  }, []);

  const filteredTests = useMemo(() => {
    return tests.filter((test) => {
      const matchesSearch =
        test.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        test.subjectId?.name
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all"
          ? true
          : statusFilter === "scheduled"
            ? test.publishMode === "scheduled"
            : test.status === statusFilter;

      const matchesSubject =
        subjectFilter === "all"
          ? true
          : test.subjectId?._id ===
            subjectFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesSubject
      );
    });
  }, [
    tests,
    search,
    statusFilter,
    subjectFilter,
  ]);

  const handleCardClick = (
    filter:
      | "all"
      | "live"
      | "draft"
      | "scheduled"
      | "expired"
  ) => {
    navigate("/dashboard#tests");

    setStatusFilter(filter);
  };

  return (
    <div className="space-y-8 p-8">
      {currentHash === "#overview" && (
        <>
          {initialLoading ? (
            <OverviewSkeleton />
          ) : (
            <>
              <DashboardActions />

              <DashboardStats
                stats={stats}
                onSelect={handleCardClick}
              />

              <RecentTests
                tests={tests.slice(0, 5)}
              />
            </>
          )}
        </>
      )}

      {currentHash === "#tests" && (
        <>
          {initialLoading ? (
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
                onRefresh={() => {
                  loadTests(1, true);
                }}
              />

              <TestsTable
                tests={filteredTests}
                page={page}
                totalPages={totalPages}
                isLoading={loadingMore}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}