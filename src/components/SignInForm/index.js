import React from "react";
import { Formik, Form, Field } from "formik";

const initialValues = { email: "", password: "" };
const SignInForm = (props) => {
  const onSubmit = (value, formikBag) => {
    console.group();
    console.log("value: ", value);
    console.log("formikBag: ", formikBag);
    console.groupEnd();
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps) => {
        console.log("formikProps:", formikProps);
        return (
          <Form>
            <Field name="email"/>
            <Field name="password"/>
            <input type="submit" value="send" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
