import React from 'react';
import {Field, Form, Formik} from "formik";

interface Values {
    newMessageBody: string;
}

type AddMessageFormPropsType = {
    sendMessage: (message: string) => void
}

export const AddMessageForm: React.FC<AddMessageFormPropsType> = (props) => {
    const initialValues = {newMessageBody: ''}
    const submit = (values: Values, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) =>
    {
        props.sendMessage(values.newMessageBody)
        values.newMessageBody = ''
        setSubmitting(false);
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
            >
                <Form>
                    <Field
                        placeholder={"Enter your message"}
                        component={"textarea"} type="newMessageBody" name="newMessageBody"/>
                    <button type="submit">Send</button>
                </Form>
            </Formik>
        </div>
    );
};