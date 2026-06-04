import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "../../types/auth.types";

// ============================================================================
// Auth Slice - Redux state management for authentication
// ============================================================================

// Initial authentication state - user starts as logged out with no data
const initialState: AuthState = {
  status: false,  // false = not authenticated
  user: null,     // no user data until login
};

/**
 * Redux slice for authentication state management
 * Handles login/logout state updates and user data synchronization
 *
 * TypeScript typing explanation:
 * - PayloadAction<User> ensures login action receives User type
 * - PayloadAction<void> means logout action receives nothing
 */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login action - updates state when user successfully authenticates
    /**
     * @param state - current auth state
     * @param action - contains user data as payload
     */
    login: (state, action: PayloadAction<User>) => {
      state.status = true;         // mark user as authenticated
      state.user = action.payload;  // store user information with proper typing
    },

    // logout action - clears user data and resets to unauthenticated state
    /**
     * @param state - current auth state
     * No payload needed for logout
     */
    logout: (state) => {
      state.status = false;  // mark user as logged out
      state.user = null;     // remove user data
    },
  },
});

// Export actions for use in components with proper types
export const { login, logout } = authSlice.actions;

// Export reducer for store configuration
export default authSlice.reducer;
