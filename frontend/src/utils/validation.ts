

/**
 * Application validation schemas.
 *
 * Responsibilities:
 * - Authentication validation
 * - Test validation
 * - Question validation
 * - Form type inference
 *
 * Purpose:
 * Centralizes frontend validation rules using Zod schemas.
 */


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
  name: z.string().min(3, "Test name must contain at least 3 characters"),

  category: z.string().min(1, "Please select test category"),

  subjectId: z.string().min(1, "Please select subject"),

  topics: z.array(z.string()).min(1, "Select at least one topic"),

  subTopics: z.array(z.string()).min(1, "Select at least one sub topic"),

  difficulty: z.string().min(1, "Please select difficulty"),

  correctMarks: z.number().positive("Correct marks must be greater than zero"),

  wrongMarks: z.number(),

  unattemptMarks: z.number(),

  totalTime: z.number().min(1, "Duration must be at least 1 minute"),

  totalMarks: z.number().min(1, "Total marks must be greater than zero"),

  totalQuestions: z.number().min(1, "At least one question is required"),
});

export const questionSchema = z.object({
  topicId: z.string().optional(),

  subTopicId: z.string().optional(),

  type: z.string().min(1, "Question type is required"),

  question: z.string().min(5, "Question must contain at least 5 characters"),

  option1: z.string().min(1, "Option 1 is required"),

  option2: z.string().min(1, "Option 2 is required"),

  option3: z.string().min(1, "Option 3 is required"),

  option4: z.string().min(1, "Option 4 is required"),

  correctOption: z.string().min(1, "Please select correct option"),

  difficulty: z.string().min(1, "Please select difficulty"),
});
export type LoginFormData = z.infer<typeof loginSchema>;

export type RegisterFormData = z.infer<typeof registerSchema>;
export type TestFormData = z.infer<typeof testSchema>;
export type QuestionFormData = z.infer<typeof questionSchema>;
