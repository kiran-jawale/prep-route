import { createSlice } from "@reduxjs/toolkit";

interface RememberedTest {
  testId: string;

  lastPage: string;

  updatedAt: string;
}

interface RememberState {
  rememberedTests: RememberedTest[];
}

const initialState: RememberState = {
  rememberedTests: [],
};

const rememberSlice = createSlice({
  name: "remember",

  initialState,

  reducers: {
    rememberTest: (state, action) => {
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
    },

    forgetTest: (state, action) => {
      state.rememberedTests = state.rememberedTests.filter(
        (item) => item.testId !== action.payload
      );
    },
  },
});

export const { rememberTest, forgetTest } = rememberSlice.actions;

export default rememberSlice.reducer;
