

/**
 * Local storage helper utilities.
 *
 * Responsibilities:
 * - Read values from local storage
 * - Write values to local storage
 * - Remove stored values
 *
 * Purpose:
 * Provides a reusable abstraction over browser local storage operations.
 */


export const getStorage = <T>(key: string): T | null => {
  try {
    const data = localStorage.getItem(key);
    if (!data) {
      return null;
    }

    return JSON.parse(data);
  } catch {
    return null;
  }
};

export const setStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};
