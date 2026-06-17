import { ExternalLink, GitBranchIcon } from "lucide-react";

export const profile = {
  name: "Kiran Jawale",
  degree: "Mca'26",
  college: "GECA",
  location: "MH",
  github: "https://github.com/kiran-jawale",
  linkedin: "https://linkedin.com/in/kiran-jawale",
};

export const project = {
  title: "Prep Route",
  subtitle: "CUET Preparation Based Examination Platform",
  started: "04 June 2026",
  completed: "17 June 2026",
  application: "https://prep-route-kiran.up.railway.app",
  repository: "https://github.com/kiran-jawale/prep-route",
  frontend: "https://github.com/kiran-jawale/prep-route/tree/main/frontend",
  backend: "https://github.com/kiran-jawale/prep-route/tree/main/backend",
};

export const techStack = {
  frontend: [
    "React",
    "TypeScript",
    "React Router",
    "Axios",
    "TailwindCSS",
    "Zod",
  ],

  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
  ],

  tools: [
    "Git",
    "GitHub",
    "Railway",
    "MongoDB Atlas",
    "Postman",
  ],
};

export const sections = [
  {
    id: "hero",
    label: "Overview",
  },
  {
    id: "tech-decisions",
    label: "Tech Decisions",
  },
  {
    id: "architecture",
    label: "Architecture",
  },
  {
    id: "major-challenges",
    label: "Challenges",
  },
  {
    id: "summary",
    label: "summary",
  },
];

export const pillClass =
  "rounded-full border border-purple-900/60 bg-purple-950/20 px-4 py-2 text-sm text-purple-200 transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20";

export const cardClass =
  "relative rounded-3xl border border-purple-900/50 bg-zinc-950/20 backdrop-blur-xl shadow-[inset_0_0_60px_rgba(88,28,135,0.15)] transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]";
export { ExternalLink, GitBranchIcon };