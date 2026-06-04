import { useState } from "react";

import Login from "./parts/Login";
import Register from "./parts/Register";

const Auth = () => {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8">
        <h1 className="text-3xl font-bold text-center">PrepRoute</h1>

        <p className="text-center mt-2 text-zinc-500">Test Management System</p>

        <div className="mt-8">
          {mode === "login" ? <Login /> : <Register />}
        </div>

        <button
          onClick={() =>
            setMode((prev) => (prev === "login" ? "register" : "login"))
          }
          className="w-full mt-6 text-sm text-blue-600"
        >
          {mode === "login" ? "Create Account" : "Already have account?"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
