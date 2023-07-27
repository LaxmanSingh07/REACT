import React from 'react'
import { useState } from "react";

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

export default Form