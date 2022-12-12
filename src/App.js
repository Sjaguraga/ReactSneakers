// import Signup from "./components/Signup/Signup.js";
// import Login from "./components/Login/Login.js";
import Sneakers from "./components/Sneakers/Sneakers";

import classes from "./App.module.css";

import MainHeader from "./components/MainHeader/MainHeader";

const sneakers = [
  {
    id: "s1",
    name: "Air Jordan 1",
    description: "Air Jordan 1 Description",
    image: "https://cdn.flightclub.com/3000/TEMPLATE/010352/1.jpg",
    price: 199.99,
  },
  {
    id: "s2",
    name: "Air Jordan 2",
    description: "Air Jordan 2 Description",
    image: "https://cdn.flightclub.com/3000/TEMPLATE/307018/1.jpg",
    price: 299.99,
  },
  {
    id: "s3",
    name: "Air Jordan 3",
    description: "Air Jordan 3 Description",
    image: "https://cdn.flightclub.com/3000/TEMPLATE/010022/1.jpg",
    price: 399.99,
  },
  {
    id: "s4",
    name: "Air Jordan 4",
    description: "Air Jordan 4 Description",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/010029/1.jpg",
    price: 499.99,
  },
];

const App = () => {
  return (
    <div className={classes.app}>
      <MainHeader />
      <Sneakers items={sneakers} />
      {/* <Signup /> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;
