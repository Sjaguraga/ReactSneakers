import { useState } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

import classes from "./Signup.module.css";

const Signup = (props) => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const firstNameChangeHandler = (e) => {
    setFirstNameValue(e.target.value);
  };

  const lastNameChangeHandler = (e) => {
    setLastNameValue(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmitHandler = (e) => {
    e.preventDefault();

    console.log(firstNameValue, lastNameValue, emailValue, passwordValue);

    setFirstNameValue("");
    setLastNameValue("");
    setEmailValue("");
    setPasswordValue("");
  };

  return (
    <Card className={classes.signup}>
      <form onSubmit={handleSubmitHandler}>
        <div>
          <div>
            <label htmlFor="first">First Name</label>
            <input
              type="text"
              id="first"
              placeholder="Enter first name..."
              onChange={firstNameChangeHandler}
              value={firstNameValue}
            />
          </div>
          <div>
            <label htmlFor="last">Last Name</label>
            <input
              type="text"
              id="last"
              placeholder="Enter last name..."
              onChange={lastNameChangeHandler}
              value={lastNameValue}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter email..."
              onChange={emailChangeHandler}
              value={emailValue}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password..."
              onChange={passwordChangeHandler}
              value={passwordValue}
            />
          </div>
          <div className={classes.button}>
            <Button type="submit">Signup</Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default Signup;
