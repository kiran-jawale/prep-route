import Select from "../../../components/ui/Select";

import type { Topic } from "../../../types/topic.types";
import type { SubTopic } from "../../../types/subTopic.types";

interface Props {
  difficulty: string;

  topicId: string;

  subTopicId: string;

  topics: Topic[];

  subTopics: SubTopic[];

  onChange: (field: string, value: string) => void;
}

export default function QuestionSettings({
  difficulty,
  topicId,
  subTopicId,
  topics,
  subTopics,
  onChange,
}: Props) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Question settings</h3>

      <div>
        <label className="mb-3 block text-base font-medium">
          Level of Difficulty
        </label>

        <Select
          value={difficulty}
          onChange={(value) => onChange("difficulty", value)}
          options={[
            {
              label: "Easy",
              value: "easy",
            },
            {
              label: "Medium",
              value: "medium",
            },
            {
              label: "Difficult",
              value: "difficult",
            },
          ]}
        />
      </div>

      <div>
        <label className="mb-3 block text-base font-medium">Topic</label>

        <Select
          value={topicId}
          onChange={(value) => onChange("topicId", value)}
          options={topics.map((topic) => ({
            label: topic.name,
            value: topic._id,
          }))}
        />
      </div>

      <div>
        <label className="mb-3 block text-base font-medium">Sub-topic</label>

        <Select
          value={subTopicId}
          onChange={(value) => onChange("subTopicId", value)}
          options={subTopics.map((subTopic) => ({
            label: subTopic.name,
            value: subTopic._id,
          }))}
        />
      </div>
    </div>
  );
}
