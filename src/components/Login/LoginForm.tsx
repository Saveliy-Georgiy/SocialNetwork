import * as React from 'react';
import {ErrorMessage, Field, Form, Formik,} from 'formik';
import {loginFormSchema} from "./FormValidation/LoginFormSchema";
import s from './LoginForm.module.css'
import Button from "../universal/Button";
export const LoginForm = () => {
    const initialValues = {email: '', password: '', rememberMe: false}
    //const finalStyleInput =
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
                        <Field placeholder={"login"} type="email" name="email" className={s.input}/>
                    </div>
                    <ErrorMessage name="email" component="div" className={s.errorMessage}/>
                    <div>
                        <Field placeholder={"password"} type="password" name="password" className={s.input}/>
                    </div>
                    <ErrorMessage name="password" component="div" className={s.errorMessage}/>
                    <div>
                        <Field type={'checkbox'} name={'rememberMe'}/>
                        <label htmlFor={'rememberMe'}> remember me </label>
                    </div>
                    <Button type="submit">Login</Button>
                   {/* <button type="submit">Login</button>*/}
                </Form>
            </Formik>
        </div>
    );
};

