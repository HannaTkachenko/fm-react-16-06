import React, { Component } from "react";
import cx from "classnames";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
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
                  <div onClick={()=>{
                    const newTheme = theme===THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
                    setTheme(newTheme);
                  }}>{theme===THEMES.LIGHT ? <WbSunnyIcon fontSize="large" /> : <DarkModeIcon fontSize="large" />}</div>
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
