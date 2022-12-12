import React from "react";
import AvailableSneakers from "./AvailableSneakers";

import classes from "./Sneakers.module.css";

const Sneakers = (props) => {
  return (
    <div className={classes.display}>
      {props.items.map((sneakers) => (
        <AvailableSneakers
          key={sneakers.id}
          title={sneakers.name}
          description={sneakers.description}
          image={sneakers.image}
          price={sneakers.price}
        />
      ))}
    </div>
  );
};

export default Sneakers;
