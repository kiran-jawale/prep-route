import { useState } from "react";

import AuthIllustration from "./parts/AuthIllustration";
import Login from "./parts/Login";
import Register from "./parts/Register";

export default function Auth() {
  const [mode] = useState<"login" | "register">("login");

  return (
    <div className="flex min-h-screen bg-[#fafcff]">
      <AuthIllustration />

      <div className="flex flex-1 items-center justify-center p-10">
        <div className="w-full max-w-xl rounded-2xl border border-[#D8E4FF] bg-white p-14">
          {mode === "login" ? <Login /> : <Register />}

          {/* Future Registration Toggle */}

          {/*
          <button
            type="button"
            onClick={() =>
              setMode((prev) =>
                prev === "login" ? "register" : "login"
              )
            }
            className="mt-6 text-[#6475F7]"
          >
            Register
          </button>
          */}
        </div>
      </div>
    </div>
  );
}
