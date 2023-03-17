import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onSetNewName, onSetNewCategory, newName, newCategory, onItemFormSubmit }) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onSetNewName} value={newName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onSetNewCategory} value={newCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;