import React from "react";
import ReactDOM from "react-dom/client";

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
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// function name should be in PascalCase

function Pizza() {
  return (
    <div>
      {/* It wil automatically add the public/ */}
      <img src="pizzas/spinaci.jpg" alt="Pizzaphoto"></img>
      <h2>Pizza</h2>

      <p>Tomato, mozarella, spinach and ricotta Cheese</p>
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza co.</h1>;
}

function Menu() {
  return (
    <>
      <h2>Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </>
  );
}
function Footer() {
  //   return React.createElement("footer", null, "We're currently open!");
  return (
    <footer>{new Date().toLocaleTimeString()} We're currently open!</footer>
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
