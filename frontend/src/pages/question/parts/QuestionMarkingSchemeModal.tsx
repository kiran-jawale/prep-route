

/**
 * Test marking scheme configuration modal.
 *
 * Props:
 * - test: Active test being updated.
 */


import { useState } from "react";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

import testService from "../../../services/test.service";

import { useDom } from "../../../contexts/domContext";
import { useTest } from "../../../contexts/testContext";

interface Props {
  test: any;
}

export default function QuestionMarkingSchemeModal({ test }: Props) {
  const { addToast, setModal } = useDom();

  const [loading, setLoading] = useState(false);

  const {setTest} = useTest()

  const [form, setForm] = useState({
    correctMarks: test.correctMarks,

    wrongMarks: test.wrongMarks,

    unattemptMarks: test.unattemptMarks,

    totalQuestions: test.totalQuestions,
  });

  const totalMarks = Number(form.correctMarks || 0) * Number(form.totalQuestions);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await testService.updateMarkingScheme(test._id, {
        ...form,
        totalMarks,
      });

      const updatedTest = response.data.data;

      setTest(updatedTest);

      addToast("Marking Scheme Updated");

      setModal(null);
    } catch (error) {
      console.error(error);

      addToast("Unable to update test", "error");
    } finally {
      setLoading(false);
    }
  };

  if (!test) {
  return null;
}

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">MCQ Configuration</h2>

      <div className="rounded-xl bg-zinc-100 p-4">
        <p className="font-semibold">Total Marks: {totalMarks}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Correct Marks
          </label>

          <Input
            type="number"
            value={form.correctMarks}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                correctMarks: Number(e.target.value),
              }))
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Wrong Marks</label>

          <Input
            type="number"
            value={form.wrongMarks}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                wrongMarks: Number(e.target.value),
              }))
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Unattempt Marks
          </label>

          <Input
            type="number"
            value={form.unattemptMarks}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                unattemptMarks: Number(e.target.value),
              }))
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Total Questions
          </label>

          <Input
            type="number"
            value={form.totalQuestions}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                totalQuestions: Number(e.target.value),
              }))
            }
          />
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="secondary" onClick={() => setModal(null)}>
          Cancel
        </Button>

        <Button loading={loading} onClick={handleSubmit}>
          Update
        </Button>
      </div>
    </div>
  );
}
