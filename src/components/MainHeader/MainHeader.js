import React from "react";

import classes from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>ReactSneakers</h1>
      <Navigation onShowCart={props.onShowCart} />
    </header>
  );
};

export default MainHeader;
