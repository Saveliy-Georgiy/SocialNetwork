import * as React from 'react';
import {ErrorMessage, Field, Form, Formik,} from 'formik';
import {loginFormSchema} from "./FormValidation/LoginFormSchema";

export const LoginForm = () => {
    const initialValues = {email: '', password: '', rememberMe: false}
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validate={values => {
                    const errors = {} as { email: string };
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    } else if (values.email.length >= 30) {
                        errors.email = 'Too long email';
                    }
                    return errors;
                }}

                onSubmit={(values, actions) => {
                    console.log({values, actions});
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
                validationSchema={loginFormSchema}
            >
                <Form>
                    <div>
                        <Field placeholder={"login"} type="email" name="email"/>
                    </div>
                    <ErrorMessage name="email" component="div"/>
                    <div>
                        <Field placeholder={"password"} type="password" name="password"/>
                    </div>
                    <ErrorMessage name="password" component="div"/>
                    <div>
                        <Field type={'checkbox'} name={'rememberMe'}/>
                        <label htmlFor={'rememberMe'}> remember me </label>
                    </div>
                    <button type="submit">Login</button>
                </Form>
            </Formik></div>
    );
};

