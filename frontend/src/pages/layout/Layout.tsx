import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import authService from "../../services/auth.service";
import { login, logout } from "../../state/slices/authSlice";
import type { AppDispatch, RootState } from "../../state/store";
import Sidebar from "./parts/Sidebar";
import Header from "./parts/Header";

export default function Layout() {
  const dispatch = useDispatch<AppDispatch>();
  const authStatus = useSelector((state: RootState) => state.auth.status);

  const location = useLocation();
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

  const protectedRoutes = ["/dashboard", "/tracking", "/tests"];

  const showSidebar =
    authStatus &&
    protectedRoutes.some((route) => location.pathname.startsWith(route));

 return (
  <div className="flex min-h-screen bg-zinc-50">
    {showSidebar && <Sidebar />}

    <main
      className={` flex flex-1 flex-col
        ${showSidebar ? "ml-[286px]" : ""}
      `}
    >
      {authStatus && <Header />}

      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </main>
  </div>
);
}
