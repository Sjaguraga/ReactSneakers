import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">Sneakers</a>
        </li>
        <li>
          <a href="/">
            <HeaderCartButton />
          </a>
        </li>
        <li>
          <button>Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
