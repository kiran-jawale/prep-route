import { useNavigate } from "react-router-dom";
import { Pencil, CircleHelp, Send } from "lucide-react";
import StatusBadge from "../../../components/shared/StatusBadge";

interface Props {
  tests: any[];
}

export default function TestsTable({ tests }: Props) {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-2xl border bg-white">
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
            <tr key={test._id} className="border-b">
              <td className="px-5 py-4">{test.name}</td>

              <td className="px-5 py-4">{test.subjectId?.name}</td>

              <td className="px-5 py-4">
                <StatusBadge status={test.status} />
              </td>

              <td className="px-5 py-4">{test.totalQuestions}</td>

              <td className="px-5 py-4 text-center">
                <button
                  type="button"
                  onClick={() => navigate(`/tests/${test._id}/edit`)}
                >
                  <Pencil
                    size={18}
                    className="mx-auto text-zinc-600 hover:text-[#6475F7]"
                  />
                </button>
              </td>

              <td className="px-5 py-4 text-center">
                <button
                  type="button"
                  onClick={() => navigate(`/tests/${test._id}/questions`)}
                >
                  <CircleHelp
                    size={18}
                    className="mx-auto text-zinc-600 hover:text-[#6475F7]"
                  />
                </button>
              </td>

              <td className="px-5 py-4 text-center">
                {test.status !== "live" ? (
                  <button
                    type="button"
                    onClick={() => navigate(`/tests/${test._id}/publish`)}
                  >
                    <Send
                      size={18}
                      className="mx-auto text-zinc-600 hover:text-[#6475F7]"
                    />
                  </button>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
