import React from "react";
import { Formik, Form } from "formik";
import WrappedInput from "../WrappedInput";
import { SCHEMA_SIGN_IN } from "../../../utils/schemaValidation";
import styles from "./SignInForm.module.scss";



const initialValues = { email: "", password: "", passconfirm:"" };
const SignInForm = (props) => {
  const onSubmit = (value, formikBag) => {
    // console.group();
    console.log("value: ", value);
    // console.log("formikBag: ", formikBag);
    // console.groupEnd();
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
            <WrappedInput name="email" placeholder="Enter email"/>
            <WrappedInput name="password" type="password" placeholder="Enter password"/>
            <WrappedInput name="passconfirm" type="password" placeholder="Repeat password"/>
            <input type="submit" value="send" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
