import { useState } from "react";

import Login from "./parts/Login";

import Register from "./parts/Register";

export default function Auth() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">TestDash</h1>

          <p className="mt-2 text-zinc-500">Test Management System</p>
        </div>

        {mode === "login" ? <Login /> : <Register />}

        <button
          onClick={() =>
            setMode((prev) => (prev === "login" ? "register" : "login"))
          }
          className="mt-6 w-full text-sm text-blue-600"
        >
          {mode === "login" ? "Create Account" : "Already have an account?"}
        </button>
      </div>
    </div>
  );
}
