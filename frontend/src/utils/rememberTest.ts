import { getStorage, setStorage } from "./localStorage";
import { STORAGE_KEYS } from "../constants/storage";
import type { RememberedTest } from "../state/slices/rememberSlice";

export const saveRememberedTests = (tests: RememberedTest[]) => {

  setStorage(STORAGE_KEYS.REMEMBERED_TESTS, tests);
};

export const getRememberedTests = (): RememberedTest[] => {
  const data = getStorage<any[]>(STORAGE_KEYS.REMEMBERED_TESTS) || [];

  return data.filter(
    (item) =>
      item?.userId &&
      item?.testId &&
      item?.test &&
      Array.isArray(item?.questions)
  );
};

export const getRememberedTest = (userId: string, testId: string) => {
  return getRememberedTests().find(
    (item) => item.userId === userId && item.testId === testId
  );
};
