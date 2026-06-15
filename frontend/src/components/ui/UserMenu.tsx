

/**
 * User Menu Component
 *
 * Dropdown menu displayed from the user profile section.
 *
 * Props:
 * @param open Controls menu visibility.
 * @param onClose Reserved menu close callback.
 *
 * Purpose:
 * Provides account-level actions such as logout.
 */


import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import authService from "../../services/auth.service";

import { logout } from "../../state/slices/authSlice";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function UserMenu({ open }: Props) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch {}

    localStorage.removeItem("accessToken");

    dispatch(logout());

    navigate("/");
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className=" absolute right-0 top-14  z-50  w-48
        overflow-hidden  rounded-2xl  border   border-slate-100
        bg-white  shadow-lg "
    >
      <button
        onClick={handleLogout}
        className="w-full px-5 py-3.5 text-left text-sm text-red-500 transition hover:bg-red-50"
      >
        Logout
      </button>
    </div>
  );
}
