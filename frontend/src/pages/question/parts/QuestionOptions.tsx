

/**
 * Question options management section.
 *
 * Props:
 * - question: Current question state.
 * - onChange: Handles option and correct answer updates.
 */


import Input from "../../../components/ui/Input";

import type { Question, OptionKey } from "../../../types/question.types";

interface Props {
  question: Question;

  onChange: (
    field: "option1" | "option2" | "option3" | "option4" | "correctOption",
    value: string
  ) => void;
}

export default function QuestionOptions({ question, onChange }: Props) {
  const options = [
    {
      key: "option1",
      value: question.option1,
    },
    {
      key: "option2",
      value: question.option2,
    },
    {
      key: "option3",
      value: question.option3,
    },
    {
      key: "option4",
      value: question.option4,
    },
  ];

  return (
    <div>
      <h3 className="mb-5 text-lg font-medium">Type the options below</h3>

      <div className="space-y-5">
        {options.map((option) => (
          <div key={option.key} className="flex items-center gap-4">
            <input
              type="radio"
              checked={question.correctOption === option.key}
              onChange={() => onChange("correctOption", option.key)}
              className="h-5 w-5"
            />

            <div className="flex-1">
              <Input
                value={option.value}
                placeholder="Type Option here"
                onChange={(e) =>
                  onChange(option.key as OptionKey, e.target.value)
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
