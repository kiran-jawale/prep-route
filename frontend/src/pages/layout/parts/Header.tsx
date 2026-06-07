import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import authService from "../../../services/auth.service";

import { logout } from "../../../state/slices/authSlice";

import Button from "../../../components/ui/Button";

import { useTheme } from "../../../contexts/themeContext";

export default function Header() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { theme, font, toggleTheme, toggleFont } = useTheme();

  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch {}

    dispatch(logout());

    localStorage.removeItem("accessToken");

    navigate("/");
  };

  return (
    <header
      className="
        flex
        h-20
        items-center
        justify-between
        border-b
        bg-white
        px-8
      "
    >
      <div>
        <h2 className="text-xl font-semibold">TestDash</h2>
      </div>

      <div className="flex gap-3">
        <Button variant="secondary" onClick={toggleTheme}>
          {theme}
        </Button>

        <Button variant="secondary" onClick={toggleFont}>
          {font}
        </Button>

        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
}
