import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import s from './AddNewPostForm.module.css'

interface Values {
    newPostElement: string;
}

type AddNewPostFormPropsType = {
    onAddPost: (message: string) => void
}

export const AddNewPostForm: React.FC<AddNewPostFormPropsType> = (props) => {
    const initialValues = {newPostElement: ''}
    const submit = (values: Values, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) =>
    {
        props.onAddPost(values.newPostElement)
        values.newPostElement = ''
        setSubmitting(false);
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validate={values => {
                    const errors = {} as {newPostElement: string};
                    if (!values.newPostElement) {
                        errors.newPostElement = 'your message is empty';
                    }
                    return errors;
                }}
                onSubmit={submit}
            >

                {({isValid}) => (
                <Form>
                    <div className={s.textareaWrapper}>
                    <Field
                        placeholder="your news..."
                        component={"textarea"} type="newPostElement" name="newPostElement"/>
                    </div>
                    <ErrorMessage className={s.errorMessage} name="newPostElement" component="div"/>
                    <div  className={s.buttonWrapper}>
                    <button disabled={!isValid} type="submit">Add post</button>
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    );
};