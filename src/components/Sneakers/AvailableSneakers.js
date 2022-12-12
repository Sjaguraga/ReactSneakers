import React from "react";

import classes from "./AvailableSneakers.module.css";

const AvailableSneakers = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.image} alt={props.title} />
      <div className={classes.container}>
        <h4>{props.title}</h4>
        <p>{props.price}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default AvailableSneakers;
