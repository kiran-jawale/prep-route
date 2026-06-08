import type { ZodSchema } from "zod";

export const validate = <T>(schema: ZodSchema, data: T): string | null => {
  const result = schema.safeParse(data);

  if (!result.success) {
    return result.error.issues[0]?.message ?? "Validation Failed";
  }

  return null;
};
