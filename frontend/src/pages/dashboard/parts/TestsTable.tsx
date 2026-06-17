/**
 * Dashboard test listing table.
 *
 * Props:
 * - tests
 * - page
 * - totalPages
 * - onPageChange
 * - isLoading
 *
 * Purpose:
 * Displays paginated test data and workflow navigation actions.
 */

import { useNavigate } from "react-router-dom";
import { Pencil, CircleHelp, Send } from "lucide-react";
import { useEffect, useRef } from "react";

import StatusBadge from "../../../components/shared/StatusBadge";
import Loader from "../../../components/ui/Loader";

interface Props {
  tests: any[];
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

export default function TestsTable({
  tests,
  page,
  totalPages,
  onPageChange,
  isLoading = false,
}: Props) {
  const navigate = useNavigate();
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading && page < totalPages) {
        onPageChange(page + 1);
      }
    });

    observer.observe(node);
    return () => { observer.unobserve(node); };
  }, [page, totalPages, isLoading, onPageChange]);

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-200 bg-zinc-50">
            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">Name</th>
            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">Subject</th>
            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">Status</th>
            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">Questions</th>
            <th className="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-zinc-500">Edit</th>
            <th className="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-zinc-500">Questions</th>
            <th className="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-zinc-500">Publish</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-zinc-100">
          {tests.map((test) => (
            <tr
              key={test._id}
              className="group transition-colors duration-100 hover:bg-zinc-50"
            >
              <td className="px-5 py-3.5 font-medium text-zinc-800">{test.name}</td>
              <td className="px-5 py-3.5 text-zinc-500">{test.subjectId?.name}</td>
              <td className="px-5 py-3.5">
                <StatusBadge status={test.status} />
              </td>
              <td className="px-5 py-3.5 text-zinc-600">{test.totalQuestions}</td>

              <td className="px-5 py-3.5 text-center">
                <button
                  onClick={() => navigate(`/tests/${test._id}/edit`)}
                  className="inline-flex items-center justify-center rounded-lg p-1.5 text-zinc-400 transition-colors duration-150 hover:bg-zinc-100 hover:text-zinc-700"
                  title="Edit test"
                >
                  <Pencil size={15} />
                </button>
              </td>

              <td className="px-5 py-3.5 text-center">
                <button
                  onClick={() => navigate(`/tests/${test._id}/questions`)}
                  className="inline-flex items-center justify-center rounded-lg p-1.5 text-zinc-400 transition-colors duration-150 hover:bg-zinc-100 hover:text-zinc-700"
                  title="Manage questions"
                >
                  <CircleHelp size={15} />
                </button>
              </td>

              <td className="px-5 py-3.5 text-center">
                <button
                  onClick={() => navigate(`/tests/${test._id}/publish`)}
                  className="inline-flex items-center justify-center rounded-lg p-1.5 text-zinc-400 transition-colors duration-150 hover:bg-blue-50 hover:text-blue-600"
                  title="Publish test"
                >
                  <Send size={15} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isLoading && <Loader />}

      {!isLoading && page < totalPages && (
        <div ref={sentinelRef} className="h-1" />
      )}
    </div>
  );
}