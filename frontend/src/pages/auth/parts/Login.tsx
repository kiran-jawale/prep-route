import type { FC, ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

import authService from "../../../services/auth.service";
import { login } from "../../../redux/slices/authSlice";
import Button from "../../../components/Button";
import { useDom } from "../../../contexts/domContext";

import type { AppDispatch } from "../../../redux/redux";

// ============================================================================
// Login Component - Authentication form with proper TypeScript typing
// ============================================================================

// Form state interface
interface LoginFormState {
  identifier: string;
  password: string;
}

// API Error response structure
interface ApiErrorResponse {
  message?: string;
  [key: string]: unknown;
}

/**
 * Login component - user authentication form
 * Handles login submission, error handling, and navigation
 */
const Login: FC = () => {
  // Properly typed dispatch with AppDispatch
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const { addToast } = useDom();

  // Form state with explicit type
  const [form, setForm] = useState<LoginFormState>({
    identifier: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Handle form input changes
   * @param e - Input change event
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handle form submission with error handling
   * @param e - Form submission event
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await authService.login({
        email: form.identifier,
        password: form.password,
      });

      // Dispatch login action with proper typing
      dispatch(login(response.data.data.user));

      addToast("Login Successful", "success");

      navigate("/dashboard");
    } catch (error) {
      // Properly typed error handling
      const axiosError = error as AxiosError<ApiErrorResponse>;
      const errorMessage =
        axiosError?.response?.data?.message || "Login Failed";

      addToast(errorMessage, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="identifier"
        placeholder="User ID"
        value={form.identifier}
        onChange={handleInputChange}
        className="w-full border rounded-xl px-4 py-3"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleInputChange}
        className="w-full border rounded-xl px-4 py-3"
        required
      />

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Please wait..." : "Login"}
      </Button>
    </form>
  );
};

export default Login;
