import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import  PackingList from "./PackingList";
import  Stats  from "./Stats";

// const initialItems = [
//   { id: 1, desc: "Passports", quantity: 2, packed: false },
//   { id: 2, desc: "Socks", quantity: 12, packed: false },
//   { id: 3, desc: "Charger", quantity: 1, packed: true },
// ];


export default function App() {
  const [items, setItems] = useState([]);

  //THERE IS NO NEED OF THIS BECAUSE IT WILL ALSO CAUSE THE RERENDERING OF THE COMPONENT
  // const [numitems,setNumItems]=useState(0);

  // you can instead use like this

  // const numitems = items.length;

  function handleAddItem(item) {
    //this is not allowed
    // items.push(item); //because in react all the state are immutable

    setItems((prevItems) => [...prevItems, item]);
    // console.log(items);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}


