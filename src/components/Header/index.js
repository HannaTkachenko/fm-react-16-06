import React, { Component } from "react";
import cx from "classnames";
import styles from "./Header.module.scss";
import { UserContext, ThemeContext } from "../../context/index";
import CONSTANTS from "../../constants";
const { THEMES } = CONSTANTS;

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => {
          const classNames = cx(styles.header, {
            [styles.light]: theme === THEMES.LIGHT,
            [styles.dark]: theme === THEMES.DARK,
          });
          return (
            <UserContext.Consumer>
              {(user) => (
                <header className={classNames}>
                  <button onClick={()=>{
                    const newTheme = theme===THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
                    setTheme(newTheme);
                  }}>switch theme</button>
                  <p>
                    Hi, {user.fname} {user.lname}
                  </p>
                </header>
              )}
            </UserContext.Consumer>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

//Header.contextType = UserContext;

export default Header;
