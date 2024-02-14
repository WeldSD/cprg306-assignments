"use client";
import { useState } from "react"; // Import the useState hook from React

export default function NewItem() {
  const [name, setName] = useState(""); // Create a state variable for the name
  const [quantity, setQuantity] = useState(0); // Create a state variable for the quantity
  const [category, setCategory] = useState(""); // Create a state variable for the category

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(name, quantity, category); // Log the name, quantity, and category to the console
    alert(`name: ${name}, quantity: ${quantity}, category: ${category}`); // Show an alert with the name, quantity, and category
  };

  return (
    <div>
      <h2 className="text-green-500 text-xl">Add a new item</h2>
      <form onSubmit={handleSubmit}>
        <label className="text-green-500">Name</label>
        <input
          className="border-2 border-stroke-lime-900 outline-offset-4 text-black"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)} // Update the name state variable when the input changes
        />
        <label className="text-green-500">Quantity</label>
        <input
          className="border-2 border-stroke-lime-900 outline-offset-4 text-black"
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)} // Update the quantity state variable when the input changes
        />
        <label className="text-green-500">Category</label>
        <input
          className="border-2 border-stroke-lime-900 outline-offset-4 text-black"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)} // Update the category state variable when the input changes
        />
        <br />
        <button on onClick={handleSubmit} className="bg-green-500 text-black">Add</button>
      </form>

    </div>
  );
}