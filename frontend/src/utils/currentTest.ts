

/**
 * Current test workflow persistence utilities.
 *
 * Responsibilities:
 * - Persist active workflow state
 * - Restore workflow state
 * - Clear workflow state
 *
 * Purpose:
 * Supports TestContext state restoration across page refreshes and navigation.
 */


import { getStorage, setStorage, removeStorage } from "./localStorage";

import { STORAGE_KEYS } from "../constants/storage";

import type { Test } from "../types/test.types";
import type { Question } from "../types/question.types";
import type { Subject } from "../types/subject.types";
import type { Topic } from "../types/topic.types";
import type { SubTopic } from "../types/subTopic.types";

export interface CurrentTestStorage {
  test: Test | null;
  questions: Question[];
  activeQuestion: number;
  completedQuestions: number[];
  subjects: Subject[];
  topics: Topic[];
  subTopics: SubTopic[];
  updatedAt: string;
}

export const saveCurrentTest = (data: CurrentTestStorage) => {
  setStorage(STORAGE_KEYS.CURRENT_TEST, data);
};

export const getCurrentTest = (): CurrentTestStorage | null => {
  return getStorage<CurrentTestStorage>(STORAGE_KEYS.CURRENT_TEST);
};

export const clearCurrentTest = () => {
  removeStorage(STORAGE_KEYS.CURRENT_TEST);
};
