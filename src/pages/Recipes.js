import React, { useState } from 'react';
import underline1 from "../assets/underline-heading.png";

const Recipes = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, name: 'Apple Pie', ingredients: 'Apples, Sugar, Pie Crust', instructions: 'Bake at 350F for 45 minutes', category: 'Dessert' },
    { id: 2, name: 'Carrot Soup', ingredients: 'Carrots, Onion, Garlic, Broth', instructions: 'Boil for 20 minutes', category: 'Soup' },
  ]);

  const [editingRecipe, setEditingRecipe] = useState(null);
  const [newRecipe, setNewRecipe] = useState({ name: '', ingredients: '', instructions: '', category: '' });
  const [filter, setFilter] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
  };

  const handleSave = () => {
    setRecipes(recipes.map(recipe => (recipe.id === editingRecipe.id ? editingRecipe : recipe)));
    setEditingRecipe(null);
  };

  const handleDelete = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  const handleAdd = () => {
    if (!newRecipe.name || !newRecipe.ingredients || !newRecipe.instructions || !newRecipe.category) {
      setErrorMessage('Please fill out all fields before adding a new recipe.');
      return;
    }
    setRecipes([...recipes, { ...newRecipe, id: Date.now() }]);
    setNewRecipe({ name: '', ingredients: '', instructions: '', category: '' });
    setErrorMessage('');
  };

  const handleFilter = (category) => {
    setFilter(category);
    setSelectedFilter(category);
  };

  const filteredRecipes = filter ? recipes.filter(recipe => recipe.category === filter) : recipes;

  return (
    <div className="recipes-page">
      <h2>Recipes</h2>
      <img className="underline-image" src={underline1} alt="Underline" />
      <div className="filter-buttons">
        <button className={selectedFilter === '' ? 'active' : ''} onClick={() => handleFilter('')}>All</button>
        <button className={selectedFilter === 'Dessert' ? 'active' : ''} onClick={() => handleFilter('Dessert')}>Dessert</button>
        <button className={selectedFilter === 'Soup' ? 'active' : ''} onClick={() => handleFilter('Soup')}>Soup</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecipes.map(recipe => (
            <tr key={recipe.id}>
              <td>{recipe.name}</td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.instructions}</td>
              <td>{recipe.category}</td>
              <td>
                <button onClick={() => handleEdit(recipe)}>Edit</button>
                <button onClick={() => handleDelete(recipe.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingRecipe && (
        <div className="edit-form">
          <h3>Edit Recipe</h3>
          <input
            type="text"
            value={editingRecipe.name}
            onChange={(e) => setEditingRecipe({ ...editingRecipe, name: e.target.value })}
          />
          <input
            type="text"
            value={editingRecipe.ingredients}
            onChange={(e) => setEditingRecipe({ ...editingRecipe, ingredients: e.target.value })}
          />
          <input
            type="text"
            value={editingRecipe.instructions}
            onChange={(e) => setEditingRecipe({ ...editingRecipe, instructions: e.target.value })}
          />
          <input
            type="text"
            value={editingRecipe.category}
            onChange={(e) => setEditingRecipe({ ...editingRecipe, category: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}

      <div className="add-form">
        <h3>Add New Recipe</h3>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <input
          type="text"
          placeholder="Name"
          value={newRecipe.name}
          onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingredients"
          value={newRecipe.ingredients}
          onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
        />
        <input
          type="text"
          placeholder="Instructions"
          value={newRecipe.instructions}
          onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newRecipe.category}
          onChange={(e) => setNewRecipe({ ...newRecipe, category: e.target.value })}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default Recipes;
