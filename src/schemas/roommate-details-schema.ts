import { z } from "zod";

export const roommateDetailsSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." })
    .max(50, { message: "First name must be at most 50 characters." }),

  middleInitial: z
    .string()
    .optional()
    .refine((val) => !val || /^[A-Z]$/.test(val), {
      message: "Middle initial must be a single uppercase letter.",
    }),

  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." })
    .max(50, { message: "Last name must be at most 50 characters." }),

  gender: z.enum(["Male", "Female", "Other"], {
    message: "Gender must be Male, Female, or Other.",
  }),

  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{9,14}$/, {
      message: "Invalid phone number. Must be 10-15 digits long.",
    }),

  email: z
    .string()
    .email({ message: "Invalid email address." }),

  university: z
    .string()
    .min(2, { message: "University/College name must be at least 2 characters." })
    .max(100, { message: "University/College name must be at most 100 characters." }),

  registrationNumber: z
    .string()
    .min(5, { message: "Registration number must be at least 5 characters." })
    .max(20, { message: "Registration number must be at most 20 characters." }),
});

