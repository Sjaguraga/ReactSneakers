import { useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import classes from "./Login.module.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(enteredEmail, enteredPassword);

    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter email..."
              onChange={emailChangeHandler}
              value={enteredEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password..."
              onChange={passwordChangeHandler}
              value={enteredPassword}
            />
          </div>
          <div className={classes.button}>
            <Button type="submit">Login</Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default Login;
