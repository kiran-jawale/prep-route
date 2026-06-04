import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/redux";

interface Props {
  authenticationRequired: boolean;
}

const AuthLayout = ({ authenticationRequired }: Props) => {
  const authStatus = useSelector((state: RootState) => state.auth.status);

  const location = useLocation();

  if (authenticationRequired) {
    return authStatus ? (
      <Outlet />
    ) : (
      <Navigate
        to="/"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  return authStatus ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default AuthLayout;
