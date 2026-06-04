// ============================================================================
// Test/Quiz Types - Complete typing for test management
// ============================================================================

// Valid status values for a test - using type literal union for better type checking
export type TestStatus = "draft" | "published" | "archived";

// Difficulty levels with clear options
export type DifficultyLevel = "easy" | "medium" | "hard";

// Test interface - represents a single quiz/test with its metadata
export interface Test {
  _id: string;
  name: string;
  category: string;
  status: TestStatus; // Now properly typed instead of generic string
  difficulty: DifficultyLevel;
  totalQuestions: number;
  totalMarks: number;
  totalTime: number; // in minutes
}

// Create test request - what client sends to backend (without _id)
export type CreateTestPayload = Omit<Test, "_id">;

// Update test request - all fields optional except _id
export type UpdateTestPayload = Partial<Omit<Test, "_id">>;

// API response wrapper for test endpoints
export interface TestResponse {
  success: boolean;
  message: string;
  data: Test;
}

// List response for multiple tests
export interface TestListResponse {
  success: boolean;
  message: string;
  data: Test[];
  total: number;
}