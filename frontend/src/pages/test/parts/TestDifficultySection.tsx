

/**
 * Test difficulty selection section.
 *
 * Props:
 * - value: Selected difficulty level.
 * - onChange: Handles difficulty updates.
 */


interface Props {
  value: string;
  onChange: (value: string) => void;
}

const difficulties = ["easy", "medium", "difficult"];

export default function TestDifficultySection({ value, onChange }: Props) {
  return (
    <div>
      <label className="mb-4 block text-xl font-medium">
        Test Difficulty Level
      </label>

      <div className="flex justify-between">
        {difficulties.map((difficulty) => (
          <label key={difficulty} className="flex items-center gap-3">
            <input
              type="radio"
              checked={value === difficulty}
              onChange={() => onChange(difficulty)}
            />

            <span className="capitalize">{difficulty}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
