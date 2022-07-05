import React, { Component, createContext } from "react";
import cx from "classnames";
import styles from "./SignInForm.module.scss";
const initialState = {
  email: "",
  pwd: "",
  emailIsValid: true,
  pwdIsValid: true,
};
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  render() {
      return null;
  }
}

export default SignInForm;
