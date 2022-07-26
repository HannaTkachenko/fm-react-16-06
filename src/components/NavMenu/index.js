import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import styles from "./NavMenu.module.scss";
import { MenuContext } from "../../context";

const NavMenu = () => {
  const {
    state: { isMenuOpen },
    closeNavMenu,
  } = useContext(MenuContext);
  const classNames = cx(styles.container,{
    [styles.open]:isMenuOpen
  });
  return (
    <nav className={classNames}>
      <CancelPresentationIcon  className={styles.closeBtn} onClick={closeNavMenu} />
      <ul className={styles.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/chat">Chat</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
