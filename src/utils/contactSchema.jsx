import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be atleast 2 characters long."),
  lastName: z.string().min(2, "Last name must be atleast 2 characters long."),
  company: z
    .string()
    .min(2, "Your company name should be atleast 2 characters long."),
  email: z.string().email("Invalid email address."),
  phone: z.string().regex(/^\+?\d{7,15}$/, {
    message: "Phone number must be 7 to 15 digits and may start with '+'.",
  }),
  message: z
    .string()
    .min(20, "Your message must be at least 20 characters long.")
    .max(500, "Your message must not exceed 500 characters."),
});
