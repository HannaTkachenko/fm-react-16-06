import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SCHEMA_SIGN_IN } from "../../utils/schemaValidation";
import styles from "./SignInForm.module.scss";

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
    <Formik
      initialValues={initialValues}
      validationSchema={SCHEMA_SIGN_IN}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        console.log("formikProps:", formikProps);
        return (
          <Form className={styles.form}>
            <label>
              <span>email</span>
              <Field name="email" />
              <ErrorMessage name="email" component="em" />
            </label>
            <label>
              <span>password</span>
              <Field name="password" />
              <ErrorMessage name="password" component="em" />
            </label>
            <input type="submit" value="send" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
