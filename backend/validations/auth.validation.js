const { z, email } = require("zod");

const registerSchema = z.object({
  name: z.string().min(3, "name must be at least  3 characters "),
  email: z.email("incvalid email address "),
  password: z.string().min(6, "password must be at least 6 charcters"),
  role: z.enum(["USER", "ADMIN"]),
});

const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

module.exports = {
  registerSchema,
  loginSchema,
};
