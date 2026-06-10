import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import StatusBadge from "../../../components/shared/StatusBadge";

interface Props {
  tests: any[];
}

export default function RecentTests({ tests }: Props) {
  return (
    <div className="rounded-2xl border bg-white">
      <div className="flex items-center justify-between border-b p-5">
        <h3 className="text-lg font-semibold">Recent Tests</h3>

        <Link
          to="/dashboard#tests"
          className="
            flex
            items-center
            gap-2
            text-sm
            font-medium
            text-[#6475F7]
          "
        >
          View All
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-5 py-4 text-left">Name</th>

              <th className="px-5 py-4 text-left">Subject</th>

              <th className="px-5 py-4 text-left">Status</th>

              <th className="px-5 py-4 text-left">Questions</th>
            </tr>
          </thead>

          <tbody>
            {tests.map((test) => (
              <tr key={test._id} className="border-b">
                <td className="px-5 py-4">{test.name}</td>

                <td className="px-5 py-4">{test.subjectId?.name}</td>

                <td className="px-5 py-4">
                  <StatusBadge status={test.status} />
                </td>

                <td className="px-5 py-4">{test.totalQuestions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
