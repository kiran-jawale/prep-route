import { useState } from "react";
import Login from "./parts/Login";
import Register from "./parts/Register";

export default function Auth() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#6475F7] to-[#7C8BFF] p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-[#6475F7]">TestDash</h1>

          <p className="mt-2 text-zinc-500">Test Management System</p>
        </div>

        {mode === "login" ? <Login /> : <Register />}

        <button
          type="button"
          onClick={() =>
            setMode((prev) => (prev === "login" ? "register" : "login"))
          }
          className="mt-6 w-full text-sm font-medium text-[#6475F7]"
        >
          {mode === "login" ? "Create Account" : "Already have an account?"}
        </button>
      </div>
    </div>
  );
}
