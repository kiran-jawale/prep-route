import { getStorage, setStorage } from "./localStorage";

import { STORAGE_KEYS } from "../constants/storage";

import type { RememberedTest } from "../state/slices/rememberSlice";

export const saveRememberedTests = (tests: RememberedTest[]) => {
  setStorage(STORAGE_KEYS.REMEMBERED_TESTS, tests);
};

export const getRememberedTests = (): RememberedTest[] => {
  return getStorage<RememberedTest[]>(STORAGE_KEYS.REMEMBERED_TESTS) || [];
};

export const getRememberedTest = (testId: string) => {
  return getRememberedTests().find((item) => item.testId === testId);
};
