import { AxiosPromise } from "axios";
import api from "../constants/api";
import type { TopicResponse } from "../types/topic.types";

// ============================================================================
// Topic Service - Type-safe topic data operations
// ============================================================================

/**
 * TopicService class - retrieves topics within a specific subject
 * Part of hierarchy: Subject > Topic > SubTopic
 */
class TopicService {
  /**
   * Fetch all topics belonging to a specific subject
   * @param subjectId - MongoDB ID of the parent subject
   * @returns Promise containing array of topics
   */
  getBySubject(subjectId: string): AxiosPromise<TopicResponse> {
    return api.get<TopicResponse>(`/topics/subject/${subjectId}`);
  }
}

export default new TopicService();
