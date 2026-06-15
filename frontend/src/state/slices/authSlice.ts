

/**
 * Authentication state slice.
 *
 * Responsibilities:
 * - Store authenticated user data
 * - Manage login state
 * - Manage logout state
 *
 * Purpose:
 * Provides application-wide authentication state.
 */


import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { AuthState, User } from "../../types/auth.types";

const initialState: AuthState = {
  status: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.status = true;
      state.user = action.payload;
    },

    logout: (state) => {
      state.status = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
