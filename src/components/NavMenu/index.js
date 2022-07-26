import React, { useContext, useRef, useEffect, useId } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import styles from "./NavMenu.module.scss";
import { MenuContext } from "../../context";

const NavMenu = () => {
  const {
    state: { isMenuOpen },
    closeNavMenu,
    openNavMenu,
  } = useContext(MenuContext);
  const classNames = cx(styles.container, {
    [styles.open]: isMenuOpen,
  });
  const idNav = useId();
  //const navRef = useRef(null);
  useEffect(() => {
    const handlerClickMenu = ({ target }) => {
      if (isMenuOpen && document.getElementById(idNav).contains(target) === false) {
        closeNavMenu();
      }
    };
    window.addEventListener("click", handlerClickMenu);
    return () => window.removeEventListener("click", handlerClickMenu);
  }, [isMenuOpen]);
  const tabOpen = (event) => {
    if (event.key === "Enter") {
      openNavMenu();
    }
  };
  const tabClose = (event) => {
    if (event.key === "Enter") {
      closeNavMenu();
    }
  };
  return (
    <nav className={classNames} id={idNav}>
      <MenuOpenIcon
        onClick={openNavMenu}
        className={styles.openBtn}
        tabIndex="1"
        onKeyDown={tabOpen}
      />
      <CancelPresentationIcon
        className={styles.closeBtn}
        onClick={closeNavMenu}
        tabIndex="1"
        onKeyDown={tabClose}
      />
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
