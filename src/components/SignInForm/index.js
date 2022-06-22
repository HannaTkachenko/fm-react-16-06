import React, { Component } from "react";
import styles from "./SignInForm.module.css";
const initialState ={
      email:'',
      pwd:'',
      emailIsValid: false,
      pwdIsValid: false,
    } ;
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...initialState};
  }

  handleForm =(event) =>{
    event.preventDefault();
    event.target.reset();
    this.setState({...initialState});
  }

  handlerInput = ({target:{name, value}}) => 
  this.setState({[name]: value, [`${name}IsValid`]:!value.includes(' ')});

  render() {
    const {email, pwd, emailIsValid, pwdIsValid} = this.state;
    const emailClass = `${styles.input} ${emailIsValid?styles.valid:styles.invalid}`;
    const pwdlClass = `${styles.input} ${pwdIsValid?styles.valid:styles.invalid}`;
    return (
      <form className={styles.form} onSubmit={this.handleForm}>
        <input
          onChange = {this.handlerInput}
          value={email}
          className={emailClass}
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          onChange = {this.handlerInput}
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
