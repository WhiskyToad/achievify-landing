import { z } from 'zod';

export const passwordSchema = z.object({
  password: z.string()
    .min(1, { message: 'Password is required' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
      message: 'Password must contain at least one lowercase letter, one uppercase letter, and one number'
    }),
  confirmPassword: z.string()
    .min(1, { message: 'Confirm Password is required' })
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match",
      path: ['confirmPassword']
    });
  }
});
