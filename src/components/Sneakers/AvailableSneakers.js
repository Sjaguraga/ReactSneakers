import React from "react";

import classes from "./AvailableSneakers.module.css";

const AvailableSneakers = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.cards}>
      <div className={classes["image-box"]}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.details}>
        <p>{props.title}</p>
        <p>{price}</p>
        <div className={classes.actions}>
          <button>Add to cart</button>
        </div>
      </div>
    </li>
  );
};

export default AvailableSneakers;
