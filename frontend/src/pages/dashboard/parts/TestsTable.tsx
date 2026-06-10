import { useNavigate } from "react-router-dom";

import Button from "../../../components/ui/Button";
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
            <th className="px-5 py-4 text-left">Actions</th>
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

              <td className="px-5 py-4">
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="secondary"
                    onClick={() =>
                      navigate("/tests/create", {
                        state: {
                          testId: test._id,
                        },
                      })
                    }
                  >
                    Edit
                  </Button>

                  <Button
                    onClick={() => navigate(`/tests/${test._id}/questions`)}
                  >
                    Questions
                  </Button>

                  {test.status !== "live" && (
                    <Button
                      variant="secondary"
                      onClick={() => navigate(`/tests/${test._id}/publish`)}
                    >
                      Publish
                    </Button>
                  )}
                  
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
