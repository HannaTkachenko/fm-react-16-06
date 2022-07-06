import React from "react";
import { Field, ErrorMessage } from "formik";
import cx from "classnames";
import styles from "./WrappedInput.module.scss";

const WrappedInput = (props) => {
  const { name, ...rest } = props;
  return (
    <label className={styles.label}>
      <span className={styles.span}>{name}:</span>
      <Field name={name}>
        {({ field, meta }) => {
          const inputStyles = cx(styles.input, {
            [styles.valid]: !meta.error,
            [styles.invalid]: meta.error,
          });
          return <input {...field} {...rest} className={inputStyles} />;
        }}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

export default WrappedInput;
