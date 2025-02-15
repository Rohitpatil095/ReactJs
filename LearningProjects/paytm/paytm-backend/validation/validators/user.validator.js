const z = require("zod");

const signUpRequestValidateSchema = z.object({
  userName: z
    .string()
    .min(2, { message: "userName must be at least 2 characters" })
    .max(36, { message: "userName must be max 36 characters" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  firstName: z
    .string()
    .min(2, { message: "firstName must be at least 2 characters" })
    .max(50, { message: "firstName must be at least 50 characters" }),
  lastName: z
    .string()
    .min(2, { message: "lastName must be at least 2 characters" })
    .max(50, { message: "lastName must be at least 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
});

const signUpResponseValidateSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
});

const loginRequestValidateSchema = z.object({
  email: z.string().email(),
});

const loginUpResponseValidateSchema = z.object({
  userName: z
    .string()
    .min(2, { message: "userName must be at least 2 characters" })
    .max(36, { message: "userName must be max 36 characters" }),
  id: z.string().uuid(),
});

module.exports = {
  signUpRequestValidateSchema,
  signUpResponseValidateSchema,
  loginRequestValidateSchema,
  loginUpResponseValidateSchema,
};
