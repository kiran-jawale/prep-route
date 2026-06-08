import { z } from "zod";

export const loginSchema = z.object({
  identifier: z.string().min(3, "User ID is required"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z.object({
  userId: z.string().min(3, "User ID is required"),

  fullName: z.string().min(3, "Full Name is required"),

  email: z.email("Invalid Email"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const testSchema = z.object({
  name: z.string().min(3),

  category: z.string().min(1),

  subjectId: z.string().min(1),

  topics: z.array(z.string()).min(1),

  subTopics: z.array(z.string()).min(1),

  difficulty: z.string().min(1),

  correctMarks: z.number(),

  wrongMarks: z.number(),

  unattemptMarks: z.number(),

  totalTime: z.number().min(1),

  totalMarks: z.number().min(1),

  totalQuestions: z.number().min(1),
});

export const questionSchema = z.object({
  topicId: z.string().min(1),

  subTopicId: z.string().min(1),

  type: z.string().min(1),

  question: z.string().min(5),

  option1: z.string().min(1),

  option2: z.string().min(1),

  option3: z.string().min(1),

  option4: z.string().min(1),

  correctOption: z.string().min(1),

  difficulty: z.string().min(1),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export type RegisterFormData = z.infer<typeof registerSchema>;

export type TestFormData = z.infer<typeof testSchema>;

export type QuestionFormData = z.infer<typeof questionSchema>;
