import { z, ZodError } from "zod";

export const TodoSchema = z.object({
  id: z.number().or(z.string()).optional(),
  title: z.string(),
  completed: z.boolean().optional(),
});

export type Todo = z.infer<typeof TodoSchema>;
