function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-zinc-900 via-zinc-900 to-zinc-800">
      {/* Main Purple Glow */}
     <div className="absolute left-1/2 top-[-10%] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-purple-500/30 blur-[220px] animate-pulse" />

<div className="absolute bottom-[-15%] left-[-10%] h-[700px] w-[700px] rounded-full bg-fuchsia-500/20 blur-[220px]" />

<div className="absolute top-[-10%] right-[-10%] h-[700px] w-[700px] rounded-full bg-violet-500/20 blur-[220px]" />
      {/* Animated SVG Waves */}
     <svg
  viewBox="0 0 1600 900"
  preserveAspectRatio="none"
  className="absolute inset-0 h-full w-full opacity-70"
>
  <path
    d="M300 0C200 200 450 400 300 900"
    fill="none"
    stroke="#8b5cf6"
    strokeWidth="6"
    strokeLinecap="round"
  >
    <animate
      attributeName="d"
      dur="8s"
      repeatCount="indefinite"
      values="
        M300 0C200 200 450 400 300 900;
        M350 0C150 250 500 450 250 900;
        M300 0C200 200 450 400 300 900
      "
    />
  </path>

  <path
    d="M800 0C600 250 1000 500 800 900"
    fill="none"
    stroke="#a855f7"
    strokeWidth="5"
    strokeLinecap="round"
    opacity="0.8"
  >
    <animate
      attributeName="d"
      dur="15s"
      repeatCount="indefinite"
      values="
        M800 0C600 250 1000 500 800 900;
        M850 0C550 300 1050 550 750 900;
        M800 0C600 250 1000 500 800 900
      "
    />
  </path>

  <path
    d="M1300 0C1100 300 1450 600 1300 900"
    fill="none"
    stroke="#c084fc"
    strokeWidth="4"
    strokeLinecap="round"
    opacity="0.7"
  >
    <animate
      attributeName="d"
      dur="18s"
      repeatCount="indefinite"
      values="
        M1300 0C1100 300 1450 600 1300 900;
        M1250 0C1050 350 1500 650 1350 900;
        M1300 0C1100 300 1450 600 1300 900
      "
    />
  </path>
</svg>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise Layer */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}

export default Background;