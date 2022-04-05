import * as yup from "yup"

// @ts-ignore
export const loginFormSchema = yup.object().shape({
    password: yup.string()
        .min(8, "Must be longer than 8 characters")
        .required("Required"),
});

