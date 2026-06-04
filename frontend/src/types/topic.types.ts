// ============================================================================
// Topic Types - Topic within a subject typing
// ============================================================================

// Topic represents a subtopic within a subject (hierarchy: Subject > Topic > SubTopic)
export interface Topic {
  _id: string;
  name: string;
  subjectId: string; // Reference to parent subject
}

// Payload for creating a topic
export type CreateTopicPayload = Omit<Topic, "_id">;

// Update payload - all fields optional
export type UpdateTopicPayload = Partial<Omit<Topic, "_id">>;

// API response wrapper
export interface TopicResponse {
  success: boolean;
  message: string;
  data: Topic | Topic[];
}