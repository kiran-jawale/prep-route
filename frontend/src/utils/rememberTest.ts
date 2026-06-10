import {
  getStorage,
  setStorage,
} from "./localStorage";

import { STORAGE_KEYS } from "../constants/storage";

export const saveRememberedTests = (
  tests: any[]
) => {
  setStorage(
    STORAGE_KEYS.REMEMBERED_TESTS,
    tests
  );
};

export const getRememberedTests =
  () => {
    return (
      getStorage<any[]>(
        STORAGE_KEYS.REMEMBERED_TESTS
      ) || []
    );
  };