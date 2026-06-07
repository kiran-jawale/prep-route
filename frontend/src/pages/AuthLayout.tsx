import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import type { RootState } from "../state/store";

interface Props {
  authenticationRequired: boolean;
}

const AuthLayout = ({ authenticationRequired }: Props) => {
  const authStatus = useSelector((state: RootState) => state.auth.status);

  if (authenticationRequired && !authStatus) {
    return <Navigate to="/" replace />;
  }

  if (!authenticationRequired && authStatus) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default AuthLayout;
