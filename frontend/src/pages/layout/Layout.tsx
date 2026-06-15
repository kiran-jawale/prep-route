

/**
 * Root application layout.
 *
 * Purpose:
 * Initializes authenticated session state and renders shared application shell.
 */


import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import authService from "../../services/auth.service";

import { login, logout } from "../../state/slices/authSlice";

import type {
  AppDispatch,
  RootState,
} from "../../state/store";

import Sidebar from "./parts/Sidebar";
import Header from "./parts/Header";

export default function Layout() {
  const dispatch =
    useDispatch<AppDispatch>();

  const authStatus =
    useSelector(
      (
        state: RootState
      ) =>
        state.auth.status
    );

  const location =
    useLocation();

  const [loading, setLoading] =
    useState(true);

  const [
    mobileSidebarOpen,
    setMobileSidebarOpen,
  ] = useState(false);

  useEffect(() => {
    const initialize =
      async () => {
        try {
          const response =
            await authService.getCurrentUser();

          dispatch(
            login(
              response.data.data
            )
          );
        } catch {
          dispatch(logout());
        } finally {
          setLoading(false);
        }
      };

    initialize();
  }, [dispatch]);

  useEffect(() => {
    setMobileSidebarOpen(
      false
    );
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  const protectedRoutes = [
    "/dashboard",
    "/tracking",
    "/tests",
  ];

  const showSidebar =
    authStatus &&
    protectedRoutes.some(
      (route) =>
        location.pathname.startsWith(
          route
        )
    );

  return (
    <div className="flex min-h-screen bg-zinc-50">
      {showSidebar && (
        <Sidebar
          mobileOpen={
            mobileSidebarOpen
          }
          onClose={() =>
            setMobileSidebarOpen(
              false
            )
          }
        />
      )}

      <main
        className={`flex flex-1 flex-col ${
          showSidebar
            ? "sm:ml-[286px]"
            : ""
        }`}
      >
        {authStatus && (
          <Header
            onMenuClick={() =>
              setMobileSidebarOpen(
                true
              )
            }
          />
        )}

        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}