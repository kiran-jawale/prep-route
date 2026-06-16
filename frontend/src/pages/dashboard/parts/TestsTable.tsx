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

    return () => {
      observer.unobserve(node);
    };
  }, [page, totalPages, isLoading, onPageChange]);

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-500 bg-white">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-zinc-50">
            <th className="px-5 py-4 text-left">Name</th>

            <th className="px-5 py-4 text-left">Subject</th>

            <th className="px-5 py-4 text-left">Status</th>

            <th className="px-5 py-4 text-left">Questions</th>

            <th className="px-5 py-4 text-center">Edit</th>

            <th className="px-5 py-4 text-center">Questions</th>

            <th className="px-5 py-4 text-center">Publish</th>
          </tr>
        </thead>

        <tbody>
          {tests.map((test) => (
            <tr key={test._id} className="border-b border-b-zinc-500 hover:bg-zinc-100 duration-150">
              <td className="px-5 py-4">{test.name}</td>

              <td className="px-5 py-4">{test.subjectId?.name}</td>

              <td className="px-5 py-4">
                <StatusBadge status={test.status} />
              </td>

              <td className="px-5 py-4">{test.totalQuestions}</td>

              <td className="px-5 py-4 text-center">
                <button onClick={() => navigate(`/tests/${test._id}/edit`)}>
                  <Pencil size={18} className="mx-auto" />
                </button>
              </td>

              <td className="px-5 py-4 text-center">
                <button
                  onClick={() => navigate(`/tests/${test._id}/questions`)}
                >
                  <CircleHelp size={18} className="mx-auto" />
                </button>
              </td>

              <td className="px-5 py-4 text-center">
                <button onClick={() => navigate(`/tests/${test._id}/publish`)}>
                  <Send size={18} className="mx-auto" />
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
