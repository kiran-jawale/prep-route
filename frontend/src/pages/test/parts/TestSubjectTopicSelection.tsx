

/**
 * Subject, topic and subtopic selection section.
 *
 * Props:
 * - subjects: Available subject options.
 * - topics: Available topic options.
 * - subTopics: Available subtopic options.
 * - subjectId: Selected subject identifier.
 * - topicValues: Selected topic identifiers.
 * - subTopicValues: Selected subtopic identifiers.
 * - onChange: Handles selection updates.
 */


import Select from "../../../components/ui/Select";
import MultiSelect from "../../../components/ui/MultiSelect";

import type { Subject } from "../../../types/subject.types";
import type { Topic } from "../../../types/topic.types";
import type { SubTopic } from "../../../types/subTopic.types";

interface Props {
  subjects: Subject[];
  topics: Topic[];
  subTopics: SubTopic[];
  subjectId: string;
  topicValues: string[];
  subTopicValues: string[];
  onChange: (field: string, value: any) => void;
}

export default function TestSubjectTopicSection({
  subjects,
  topics,
  subTopics,
  subjectId,
  topicValues,
  subTopicValues,
  onChange,
}: Props) {
  return (
    <>
      <div>
        <label className="mb-3 block">Subject</label>

        <Select
          value={subjectId}
          onChange={(value) => onChange("subjectId", value)}
          options={subjects.map((subject) => ({
            label: subject.name,
            value: subject._id,
          }))}
        />
      </div>

      <div>
        <label className="mb-3 block">Topic</label>

        <MultiSelect
          values={topicValues}
          onChange={(value) => onChange("topics", value)}
          options={topics.map((topic) => ({
            label: topic.name,
            value: topic._id,
          }))}
        />
      </div>

      <div>
        <label className="mb-3 block">Sub Topic</label>

        <MultiSelect
          values={subTopicValues}
          onChange={(value) => onChange("subTopics", value)}
          options={subTopics.map((topic) => ({
            label: topic.name,
            value: topic._id,
          }))}
        />
      </div>
    </>
  );
}
