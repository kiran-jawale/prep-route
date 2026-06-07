import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../../services/auth.service";
import { login, logout } from "../../state/slices/authSlice";
import Sidebar from "./parts/Sidebar";

import type { AppDispatch } from "../../state/store";

export default function Layout() {
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        const response = await authService.getCurrentUser();

        dispatch(login(response.data.data));
      } catch {
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <Sidebar />

      <main className="lg:ml-72">
        <Outlet />
      </main>
    </div>
  );
}
