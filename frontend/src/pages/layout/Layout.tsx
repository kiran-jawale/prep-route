import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AxiosError } from "axios";

import { login, logout } from "../../redux/slices/authSlice";
import type { RootState, AppDispatch } from "../../redux/redux";
import type { User } from "../../types/auth.types";

import authService from "../../services/auth.service";

import Sidebar from "../../components/Sidebar";

// ============================================================================
// Layout Component - Main app layout with auth initialization
// ============================================================================

// Error response interface for proper error typing
interface ApiErrorResponse {
  message?: string;
  [key: string]: unknown;
}

/**
 * Layout component - main app wrapper
 * Handles initial auth state restoration and conditional sidebar rendering
 */
const Layout: FC = () => {
  // Properly typed dispatch with AppDispatch
  const dispatch = useDispatch<AppDispatch>();

  // Properly typed selector for auth status
  const authStatus = useSelector((state: RootState) => state.auth.status);

  const [loading, setLoading] = useState<boolean>(true);

  /**
   * Initialize authentication state on app load
   * Restores user session from server if available
   */
  useEffect(() => {
    const initializeAuth = async (): Promise<void> => {
      try {
        const response = await authService.getMe();

        // Validate response structure before dispatching
        if (response.data.success && response.data.data) {
          const userData: User = response.data.data;
          dispatch(login(userData));
        }
      } catch (error) {
        // Properly typed error - clear auth on any error
        const axiosError = error as AxiosError<ApiErrorResponse>;

        // Logout on error (could be 401 Unauthorized, network error, etc.)
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, [dispatch]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-lg font-semibold text-zinc-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Render sidebar only if user is authenticated */}
      {authStatus && <Sidebar />}

      {/* Main content area with dynamic margin if sidebar is visible */}
      <main className={`flex-1 transition-all ${authStatus ? "ml-72" : ""}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
