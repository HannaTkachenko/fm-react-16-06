import React, { Component } from 'react';
import styles from './SignInForm.module.css';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <form className={styles.form}>
        <input className={styles.input} type="text" name="email"/>
        <input className={styles.input} type="password" name="pwd"/>
        <input className={styles.input} type="submit" value="Send"/>
      </form>
    );
  }
}

export default SignInForm;
