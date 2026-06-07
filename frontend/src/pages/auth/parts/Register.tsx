import { useState } from "react";

import { AxiosError } from "axios";

import authService from "../../../services/auth.service";

import { useDom } from "../../../contexts/domContext";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

interface ApiError {
  message?: string;
}

export default function Register() {
  const { addToast } = useDom();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await authService.register(form);

      addToast("Account Created Successfully", "success");
    } catch (error) {
      const err = error as AxiosError<ApiError>;

      addToast(err.response?.data?.message || "Registration Failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Full Name"
        value={form.fullName}
        onChange={(e) =>
          setForm({
            ...form,
            fullName: e.target.value,
          })
        }
      />

      <Input
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
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

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Please wait..." : "Register"}
      </Button>
    </form>
  );
}
