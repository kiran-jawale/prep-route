import { AxiosPromise } from "axios";
import api from "../constants/api";
import type {
  Test,
  CreateTestPayload,
  UpdateTestPayload,
  TestResponse,
  TestListResponse
} from "../types/test.types";

// ============================================================================
// Test Service - Type-safe test/quiz data operations
// ============================================================================

/**
 * TestService class - manages test CRUD operations via API
 * All methods use proper TypeScript generics for response typing
 */
class TestService {
  /**
   * Fetch all tests available to the current user
   * @returns Promise containing array of tests
   */
  getAll(): AxiosPromise<TestListResponse> {
    return api.get<TestListResponse>("/tests");
  }

  /**
   * Fetch a specific test by its ID
   * @param id - MongoDB test ID
   * @returns Promise containing the requested test
   */
  getById(id: string): AxiosPromise<TestResponse> {
    return api.get<TestResponse>(`/tests/${id}`);
  }

  /**
   * Create a new test with provided configuration
   * @param data - Test details (name, category, difficulty, etc.)
   * @returns Promise containing the newly created test
   */
  create(data: CreateTestPayload): AxiosPromise<TestResponse> {
    return api.post<TestResponse>("/tests", data);
  }

  /**
   * Update existing test details
   * @param id - MongoDB test ID
   * @param data - Updated test fields (all optional)
   * @returns Promise containing the updated test
   */
  update(id: string, data: UpdateTestPayload): AxiosPromise<TestResponse> {
    return api.put<TestResponse>(`/tests/${id}`, data);
  }
}

// Export singleton to maintain single API service instance
export default new TestService();
