import { createSlice } from "@reduxjs/toolkit";

import {
  saveRememberedTests,
  getRememberedTests,
} from "../../utils/rememberTest";

import type { Test } from "../../types/test.types";
import type { Question } from "../../types/question.types";

export interface RememberedTest {
  userId: string;

  testId: string;

  lastPage: "test" | "questions" | "publish";

  test: Test;

  questions: Question[];

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
    rememberTest: (state, action) => {
      console.log("SAVING REMEMBERED TEST", action.payload);

      const existing = state.rememberedTests.find(
        (item) =>
          item.testId === action.payload.testId &&
          item.userId === action.payload.userId
      );

      if (existing) {
        Object.assign(existing, action.payload);
      } else {
        state.rememberedTests.push(action.payload);
      }

      console.log(
        "FINAL STORAGE DATA",
        JSON.stringify(state.rememberedTests, null, 2)
      );

      saveRememberedTests(state.rememberedTests);
    },

    forgetTest: (state, action) => {
      console.log("FORGET TEST", action.payload);

      state.rememberedTests = state.rememberedTests.filter(
        (item) =>
          !(
            item.userId === action.payload.userId &&
            item.testId === action.payload.testId
          )
      );

      console.log("AFTER DELETE", state.rememberedTests);

      saveRememberedTests(state.rememberedTests);
    },
  },
});

export const { rememberTest, forgetTest } = rememberSlice.actions;

export default rememberSlice.reducer;
