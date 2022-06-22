import React, { Component, createContext } from "react";
import cx from "classnames";
import styles from "./SignInForm.module.css";
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

  handleForm = (event) => {
    event.preventDefault();
    event.target.reset();
    this.setState({ ...initialState });
  };

  handlerInput = ({ target: { name, value } }) =>
    this.setState({ [name]: value, [`${name}IsValid`]: value.includes(" ") });

  render() {
    const { email, pwd, emailIsValid, pwdIsValid } = this.state;
    const emailClass = cx(styles.input, styles.email, {
      [styles.invalid]: emailIsValid,
    });
    const pwdlClass = cx(styles.input, { [styles.invalid]: pwdIsValid });
    return (
      <form className={styles.form} onSubmit={this.handleForm}>
        <input
          onChange={this.handlerInput}
          value={email}
          className={emailClass}
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          onChange={this.handlerInput}
          value={pwd}
          className={pwdlClass}
          type="password"
          name="pwd"
          placeholder="password"
        />
        <input className={styles.input} type="submit" value="Send" />
      </form>
    );
  }
}

export default SignInForm;
