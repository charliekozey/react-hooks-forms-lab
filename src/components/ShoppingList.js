import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleNewNameChange(event){
    setNewName(event.target.value)
  }

  function handleNewCategoryChange(event){
    setNewCategory(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newItem = {
      name: newName,
      category: newCategory
    }

    setItemList([...itemList, newItem])
    console.log(newItem)
  }

  const itemsToDisplay = itemList
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    })
    .filter((item) => {
      if (search === "") return true;
      console.log(item.name.toLowerCase().includes(search.toLowerCase()))
      return item.name.toLowerCase().includes(search.toLowerCase());
    })

  return (
    <div className="ShoppingList">
      <ItemForm onSetNewName={handleNewNameChange} onSetNewCategory={handleNewCategoryChange} newCategory={newCategory} newName={newName} onItemFormSubmit={handleSubmit}/>
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
