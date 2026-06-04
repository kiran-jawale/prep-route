import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

// ============================================================================
// Redux Store Configuration - Centralized state management with full typing
// ============================================================================

// Configure Redux store with all slices
// Centralized state management for global app state (authentication, user data, etc.)
export const store = configureStore({
  reducer: {
    // Authentication state slice handling user login/logout and user data
    auth: authReducer,
  },
});

// Root state type - used for type-safe state selectors
// Automatically inferred from store configuration
export type RootState = ReturnType<typeof store.getState>;

// Dispatch type - used for type-safe action dispatchers
export type AppDispatch = typeof store.dispatch;

// AppThunk type - for creating async thunks with proper typing
// Example: const myThunk = (id: string): AppThunk => async (dispatch) => { ... }
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
