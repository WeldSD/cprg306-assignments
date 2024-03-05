import React, { useState } from 'react';
import Item from './Item'; // Adjust the path as necessary

// Directly including the provided items data
const itemsData = [
  {"id": "1h2GJKH12gkHG31h1H", "name": "milk, 4 L 🥛", "quantity": 1, "category": "dairy"},
  {"id": "2KJH3k2j3H1k2J3K1H", "name": "bread 🍞", "quantity": 2, "category": "bakery"},
  {"id": "3h2KJH3k2j3H1k2J3", "name": "eggs, dozen 🥚", "quantity": 2, "category": "dairy"},
  {"id": "4k2J3K1H2GJKH12gk", "name": "bananas 🍌", "quantity": 6, "category": "produce"},
  {"id": "5H1h1H2KJH3k2j3H", "name": "broccoli 🥦", "quantity": 3, "category": "produce"},
  {"id": "6j3H1k2J3K1H2GJK", "name": "chicken breasts, 1 kg 🍗", "quantity": 1, "category": "meat"},
  {"id": "7k2J3K1H2GJKH12g", "name": "pasta sauce 🍝", "quantity": 3, "category": "canned goods"},
  {"id": "8H1h1H2KJH3k2j3H", "name": "spaghetti, 454g 🍝", "quantity": 2, "category": "dry goods"},
  {"id": "9H2GJKH12gkHG31h1", "name": "toilet paper, 12 pack 🧻", "quantity": 1, "category": "household"},
  {"id": "0k2J3K1H2GJKH12g", "name": "paper towels, 6 pack 🧻", "quantity": 1, "category": "household"},
  {"id": "11k2J3K1H2GJKH12", "name": "dish soap 🍽️", "quantity": 1, "category": "household"},
  {"id": "12GJKH12gkHG31h1", "name": "hand soap 🧼", "quantity": 4, "category": "household"}

];

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <button
        style={{ backgroundColor: sortBy === "name" ? "lightgray" : "white" }}
        onClick={() => setSortBy("name")}
      >
        Sort by Name
      </button>
      <button
        style={{ backgroundColor: sortBy === "category" ? "lightgray" : "white" }}
        onClick={() => setSortBy("category")}
      >
        Sort by Category
      </button>
      
      <div>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
