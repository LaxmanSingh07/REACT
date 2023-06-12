import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    //we are not using class because it is already a keyword in JS
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// function name should be in PascalCase

function Pizza(props) {
  return (
    <li className="pizza">
      {/* It wil automatically add the public/ */}
      <img src={props.photoName} alt="Pizzaphoto"></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </li>
  );
}

function Header() {
  //   const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  //   return <h1 style={style}>Fast React Pizza co.</h1>;
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas >0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza {...pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

function Footer() {
  //   return React.createElement("footer", null, "We're currently open!");
  const hour = new Date().getHours();
  const openHour = 5;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {/* second will be render if first is true */}
      {isOpen && (
        <div className="order">
          <p>
            We're currently open! until {closeHour}:00. Come Visit us or order
            online
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

const Test = () => {};

// each component returns a single element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Before React 18

// React.render(<App/>)
