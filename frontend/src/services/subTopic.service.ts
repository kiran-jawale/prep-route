import { AxiosPromise } from "axios";
import api from "../constants/api";

// ============================================================================
// SubTopic Service - Type-safe sub-topic data operations
// ============================================================================

/**
 * SubTopicService interface - type for sub-topic response
 */
interface SubTopic {
  _id: string;
  name: string;
  topicId: string;
}

interface SubTopicResponse {
  success: boolean;
  message: string;
  data: SubTopic | SubTopic[];
}

/**
 * SubTopicService class - retrieves sub-topics within a specific topic
 * Hierarchy level: Subject > Topic > SubTopic > Questions
 */
class SubTopicService {
  /**
   * Fetch all sub-topics belonging to a specific topic
   * @param topicId - MongoDB ID of the parent topic
   * @returns Promise containing array of sub-topics
   */
  getByTopic(topicId: string): AxiosPromise<SubTopicResponse> {
    return api.get<SubTopicResponse>(`/sub-topics/topic/${topicId}`);
  }
}

export default new SubTopicService();
