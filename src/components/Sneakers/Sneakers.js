import { Fragment } from "react";
import AvailableSneakers from "./AvailableSneakers";

import classes from "./Sneakers.module.css";

const Sneakers = (props) => {
  const sneakersList = props.items.map((sneakers) => (
    <AvailableSneakers
      key={sneakers.id}
      title={sneakers.name}
      description={sneakers.description}
      image={sneakers.image}
      price={sneakers.price}
    />
  ));

  return (
    <Fragment>
      <ul className={classes.display}>{sneakersList}</ul>
    </Fragment>
  );
};

export default Sneakers;
