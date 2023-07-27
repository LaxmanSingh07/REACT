import { useState } from "react";
const initialItems = [
  { id: 1, desc: "Passports", quantity: 2, packed: false },
  { id: 2, desc: "Socks", quantity: 12, packed: false },
  { id: 3, desc: "Charger", quantity: 1, packed: true },
];

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
    const confirmed = window.confirm('Are you sure you want to clear the list?');
   if(confirmed) setItems([]);
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
function Logo() {
  return <h1>🌴Far away💼</h1>;
}
function Form({ onAddItems }) {
  const [desc, setDesc] = useState("Testing");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // guard clause

    if (!desc) return;
    const newItem = { desc, quantity, packed: false, id: Date.now() };
    // console.log(newItem);

    onAddItems(newItem);
    setDesc("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      {/* onSubmit will work for both 1.hitting Enter key 2.click Submit Button */}
      {/* onClick only work with the click Event */}
      <h3>What do you need for your 😍 trip</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList({ items, onDeleteItem, onToggleItem ,onClearList}) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') {
    sortedItems = items;
  }

  if (sortBy === 'description') {
    sortedItems=items.slice().sort((a,b)=>a.desc.localeCompare(b.desc))
  }

  if (sortBy === 'packed') {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={e => {
          setSortBy(e.target.value);
        }}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by Description</option>
          <option value='packed'>Sort by Packed Status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.desc}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round(numPackedItems / numItems) * 100;
  return (!items.length) ? (
    <p className="footer">
      <em>🚀 Start Adding some items to your packing list</em>
    </p>
  ):(
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to Go"
          : `😎 You have ${numItems} items in your list, and you already packed ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
