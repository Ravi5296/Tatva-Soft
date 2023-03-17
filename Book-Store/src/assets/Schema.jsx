import * as yup from "yup"

export const basicSchema = yup.object({
    firstName: yup.string().min(3).max(10).required("First name is required"),
    lastName: yup.string().min(3).max(10).required("Last name is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });