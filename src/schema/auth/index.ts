("use client");
import { z } from "zod";

export const loginUserSchema = z.object({
  email: z.string().email({
    message: "Please enter valid email",
  }),
  password: z.string().nonempty({ message: "Please enter your password" }),
});

export const signupUserSchema = z.object({
  email: z.string().email({
    message: "Please enter valid email",
  }),
  firstName: z.string().min(3, {
    message: "First name must be 3 character long",
  }),
  lastName: z.string().optional(),
  confirmPassword: z
    .string()
    .nonempty({ message: "Please confirm your password" }),
  password: z
    .string()
    .min(5, {
      message: "Password must be at least 5 characters long",
    })
    .regex(/(?=.*[!@#$%^&*(),.?":{}|<>])/, {
      message: "Password must contain at least one special character",
    })
    .regex(/(?=.*[A-Z])/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/(?=.*[a-z])/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/(?=.*\d)/, {
      message: "Password must contain at least one number",
    }),
});

export type RegisterUserPayloadType = Omit<
  z.infer<typeof signupUserSchema>,
  "confirmPassword"
>;

export type LoginUserPayloadType = z.infer<typeof loginUserSchema>;
