import { useState } from "react";

import { AxiosError } from "axios";

import authService from "../../../services/auth.service";

import Button from "../../../components/ui/Button";

import { useDom } from "../../../contexts/domContext";

export default function Register() {
  const { addToast } = useDom();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    userId: "",

    fullName: "",

    email: "",

    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await authService.register(form);

      addToast("User registered successfully");
    } catch (error) {
      const axiosError = error as AxiosError<any>;

      addToast(
        axiosError.response?.data?.message || "Registration failed",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        placeholder="User ID"
        className="w-full rounded-xl border px-4 py-3"
        value={form.userId}
        onChange={(e) =>
          setForm({
            ...form,
            userId: e.target.value,
          })
        }
      />

      <input
        placeholder="Full Name"
        className="w-full rounded-xl border px-4 py-3"
        value={form.fullName}
        onChange={(e) =>
          setForm({
            ...form,
            fullName: e.target.value,
          })
        }
      />

      <input
        placeholder="Email"
        className="w-full rounded-xl border px-4 py-3"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-xl border px-4 py-3"
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
