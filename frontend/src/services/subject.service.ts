import { AxiosPromise } from "axios";
import api from "../constants/api";
import type { SubjectResponse } from "../types/subject.types";

// ============================================================================
// Subject Service - Type-safe subject/course data operations
// ============================================================================

/**
 * SubjectService class - retrieves subject/course categories from backend
 * Subjects are top-level organizational units (e.g., "Mathematics", "Physics")
 */
class SubjectService {
  /**
   * Fetch all available subjects for the user
   * @returns Promise containing array of subjects
   */
  getAll(): AxiosPromise<SubjectResponse> {
    return api.get<SubjectResponse>("/subjects");
  }
}

export default new SubjectService();
