

/**
 * CSV question import modal.
 *
 * Props:
 * - test: Active test configuration.
 * - questions: Existing workflow questions.
 * - setQuestions: Updates workflow questions state.
 */


import { useState } from "react";

import Button from "../../../components/ui/Button";

import { useDom } from "../../../contexts/domContext";

import { parseCsvFile } from "../../../utils/csvParser";

interface Props {
  test: any;

  questions: any[];

  setQuestions: (questions: any[]) => void;
}

export default function QuestionCsvImportModal({
  test,
  questions,
  setQuestions,
}: Props) {
  const { addToast, setModal } = useDom();

  const [file, setFile] = useState<File | null>(null);

  const [mode, setMode] = useState<"append" | "replace">("append");

  

  const handleImport = async () => {
    try {
      if (!file) {
        addToast("Select CSV File", "error");

        return;
      }

      const rows = await parseCsvFile(file);



      if (
        mode === "append" &&
        questions.length + rows.length > test.totalQuestions
      ) {
        addToast(
          `Cannot append. Test allows only ${test.totalQuestions} questions`,
          "error"
        );

        return;
      }

      

      const mappedQuestions = rows.map((row) => ({
        type: "mcq",

        topicId: "",

        subTopicId: "",

        question: row.question,

        option1: row.option1,

        option2: row.option2,

        option3: row.option3,

        option4: row.option4,

        correctOption: row.correctOption,

        difficulty: row.difficulty.toLowerCase(),

        explanation: row.explanation || "",
      }));

      if (mode === "replace") {
        setQuestions(mappedQuestions);
      } else {
        setQuestions([...questions, ...mappedQuestions]);
      }

      addToast(`${mappedQuestions.length} Questions Imported`);

      setModal(null);
    } catch (error: any) {
      addToast(error.message || "Invalid CSV", "error");
    }
  };


  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Import CSV</h2>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <div className="space-y-2">
        <label className="flex gap-2">
          <input
            type="radio"
            checked={mode === "append"}
            onChange={() => setMode("append")}
          />
          Append
        </label>

        <label className="flex gap-2">
          <input
            type="radio"
            checked={mode === "replace"}
            onChange={() => setMode("replace")}
          />
          Replace All
        </label>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="secondary" onClick={() => setModal(null)}>
          Cancel
        </Button>

        <Button onClick={handleImport}>Import</Button>
      </div>
    </div>
  );
}
