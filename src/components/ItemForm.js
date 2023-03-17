import React from "react";

function ItemForm({ onItemFormSubmit, onHandleNameChange, onHandleNewCategory, nameInput, categoryInput }) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input onChange={onHandleNameChange}type="text" name="name" value={nameInput} />
      </label>

      <label>
        Category:
        <select onChange={onHandleNewCategory} value={categoryInput} name="category">
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
