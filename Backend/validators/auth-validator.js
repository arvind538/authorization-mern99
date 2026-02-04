
const { z } = require("zod");

const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email format" })
        .max(225, { message: "Email must not be more than 225 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters" })
        .max(1024, { message: "Password can't be greater than 1024 characters" }),

})

const signupSchema = loginSchema.extend({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters" })
        .max(225, { message: "Name must not be more than 225 characters" }),



    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be at least 10 characters" })
        .max(20, { message: "Phone must not be more than 20 characters" }),


});

module.exports = { signupSchema, loginSchema };
