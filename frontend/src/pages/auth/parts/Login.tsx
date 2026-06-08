import { useState } from "react";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import authService from "../../../services/auth.service";
import { login } from "../../../state/slices/authSlice";
import { useDom } from "../../../contexts/domContext";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

import { loginSchema } from "../../../utils/validation";

import type { AppDispatch } from "../../../state/store";

interface ApiError {
  message?: string;
}

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { addToast } = useDom();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse(form);

    if (!result.success) {
      addToast(result.error.issues[0]?.message || "Validation Failed", "error");

      return;
    }

    try {
      setLoading(true);

      const response = await authService.login({
        identifier: form.identifier,
        password: form.password,
      });

      localStorage.setItem("accessToken", response.data.data.accessToken);

      dispatch(login(response.data.data.user));

      addToast("Login Successful", "success");

      navigate("/dashboard");
    } catch (error) {
      const err = error as AxiosError<ApiError>;

      addToast(err.response?.data?.message || "Login Failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="User ID or Email"
        value={form.identifier}
        onChange={(e) =>
          setForm({
            ...form,
            identifier: e.target.value,
          })
        }
      />

      <Input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />

      <Button type="submit" loading={loading} className="w-full">
        Login
      </Button>
    </form>
  );
}
