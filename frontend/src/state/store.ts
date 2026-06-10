import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import rememberReducer from "./slices/rememberSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    remember: rememberReducer,
  },
});

store.subscribe(() => {
  const remember = store.getState().remember;

  localStorage.setItem(
    "remembered-tests",
    JSON.stringify(remember.rememberedTests)
  );
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
