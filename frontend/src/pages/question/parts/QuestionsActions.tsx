

/**
 * Question workflow navigation controls.
 *
 * Props:
 * - currentQuestion: Current question number.
 * - totalQuestions: Total configured questions.
 * - loading: Submission loading state.
 * - onPrevious: Navigate to previous question.
 * - onNext: Navigate to next question.
 * - onSaveDraft: Save workflow draft.
 * - onSubmit: Submit all questions.
 */


import { ChevronLeft, ChevronRight } from "lucide-react";

import Button from "../../../components/ui/Button";

interface Props {
  currentQuestion: number;

  totalQuestions: number;

  loading: boolean;

  onPrevious: () => void;

  onNext: () => void;

  onSaveDraft: () => void;

  onSubmit: () => void;
}

export default function QuestionActions({
  currentQuestion,
  totalQuestions,
  loading,
  onPrevious,
  onNext,
  onSubmit,
}: Props) {
  const isLastQuestion = currentQuestion === totalQuestions;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-center gap-60">
        <button
          type="button"
          disabled={currentQuestion === 1}
          onClick={onPrevious}
          className="text-zinc-400 disabled:opacity-40"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          disabled={isLastQuestion}
          onClick={onNext}
          className="text-zinc-400 disabled:opacity-40"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="flex justify-end">
        {!isLastQuestion ? (
          <Button onClick={onNext}>Next</Button>
        ) : (
          <Button loading={loading} onClick={onSubmit}>
            Continue To Publish
          </Button>
        )}
      </div>
    </div>
  );
}
