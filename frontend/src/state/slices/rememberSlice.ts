import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import {
  saveRememberedTests,
  getRememberedTests,
} from "../../utils/rememberTest";

export interface RememberedTest {
  testId: string;

  lastPage: "test" | "questions" | "publish";

  updatedAt: string;
}

interface RememberState {
  rememberedTests: RememberedTest[];
}

const initialState: RememberState = {
  rememberedTests: getRememberedTests(),
};

const rememberSlice = createSlice({
  name: "remember",

  initialState,

  reducers: {
    rememberTest: (
      state,
      action: PayloadAction<{
        testId: string;

        lastPage: "test" | "questions" | "publish";
      }>
    ) => {
      const existing = state.rememberedTests.find(
        (item) => item.testId === action.payload.testId
      );

      if (existing) {
        existing.lastPage = action.payload.lastPage;

        existing.updatedAt = new Date().toISOString();
      } else {
        state.rememberedTests.push({
          ...action.payload,

          updatedAt: new Date().toISOString(),
        });
      }

      saveRememberedTests(state.rememberedTests);
    },

    forgetTest: (state, action: PayloadAction<string>) => {
      state.rememberedTests = state.rememberedTests.filter(
        (item) => item.testId !== action.payload
      );

      saveRememberedTests(state.rememberedTests);
    },
  },
});

export const { rememberTest, forgetTest } = rememberSlice.actions;

export default rememberSlice.reducer;
