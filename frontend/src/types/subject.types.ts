//  -----------------------------------------------------------
// Subject Types - Top-level course category typing
// ============================================================================

// Subject represents a main course subject
export interface Subject {
  _id: string;
  name: string;
}

// Payload for creating a subject
export type CreateSubjectPayload = Omit<Subject, "_id">;

// API response wrapper
export interface SubjectResponse {
  success: boolean;
  message: string;
  data: Subject | Subject[];
}