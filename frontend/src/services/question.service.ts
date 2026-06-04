import { AxiosPromise } from "axios";
import api from "../constants/api";
import type {
  BulkCreateQuestionsPayload,
  QuestionResponse
} from "../types/question.types";

// ============================================================================
// Question Service - Type-safe question data operations
// ============================================================================

/**
 * QuestionService class - handles question data operations
 * Focuses on batch operations for efficiently managing multiple questions
 */
class QuestionService {
  /**
   * Create multiple questions in a single API call
   * @param payload - Contains array of questions and test ID
   * @returns Promise containing created questions
   */
  bulkCreate(payload: BulkCreateQuestionsPayload): AxiosPromise<QuestionResponse> {
    return api.post<QuestionResponse>("/questions/bulk", payload);
  }
}

export default new QuestionService();
