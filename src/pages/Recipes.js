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
    <div className="recipes-page p-4">
      <h2 className="text-2xl font-bold mb-4">Recipes</h2>
      <img className="underline-image mb-4" src={underline1} alt="Underline" />

      {/* Filter Buttons */}
      <div className="filter-buttons flex justify-center space-x-2 mb-6">
        <button className={`px-4 py-2 rounded ${selectedFilter === '' ? 'bg-green-600 text-white' : 'bg-gray-300'}`} onClick={() => handleFilter('')}>All</button>
        <button className={`px-4 py-2 rounded ${selectedFilter === 'Dessert' ? 'bg-green-600 text-white' : 'bg-gray-300'}`} onClick={() => handleFilter('Dessert')}>Dessert</button>
        <button className={`px-4 py-2 rounded ${selectedFilter === 'Soup' ? 'bg-green-600 text-white' : 'bg-gray-300'}`} onClick={() => handleFilter('Soup')}>Soup</button>
      </div>

      {/* Recipe Table */}
      <table className="min-w-full table-auto bg-white text-black shadow-md rounded-lg overflow-hidden w-full">
        <thead>
          <tr className="bg-gray-800 text-white text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Ingredients</th>
            <th className="p-3">Instructions</th>
            <th className="p-3">Category</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecipes.map(recipe => (
            <tr key={recipe.id} className="hover:bg-gray-100">
              <td className="p-3">{recipe.name}</td>
              <td className="p-3">{recipe.ingredients}</td>
              <td className="p-3">{recipe.instructions}</td>
              <td className="p-3">{recipe.category}</td>
              <td className="p-3 space-x-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleEdit(recipe)}>Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(recipe.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Recipe Form */}
      {editingRecipe && (
        <div className="edit-form bg-gray-100 p-4 mt-6 rounded">
          <h3 className="text-xl mb-4">Edit Recipe</h3>
          <input
            type="text"
            className="border p-2 mb-2 w-full"
            value={editingRecipe.name}
            onChange={(e) => setEditingRecipe({ ...editingRecipe, name: e.target.value })}
          />
          <input
            type="text"
            className="border p-2 mb-2 w-full"
            value={editingRecipe.ingredients}
            onChange={(e) => setEditingRecipe({ ...editingRecipe, ingredients: e.target.value })}
          />
          <input
            type="text"
            className="border p-2 mb-2 w-full"
            value={editingRecipe.instructions}
            onChange={(e) => setEditingRecipe({ ...editingRecipe, instructions: e.target.value })}
          />
          <input
            type="text"
            className="border p-2 mb-2 w-full"
            value={editingRecipe.category}
            onChange={(e) => setEditingRecipe({ ...editingRecipe, category: e.target.value })}
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>
        </div>
      )}

      {/* Add New Recipe Form */}
      <div className="add-form bg-gray-100 p-4 mt-6 rounded">
        <h3 className="text-xl mb-4">Add New Recipe</h3>
        {errorMessage && <div className="text-red-500 mb-2">{errorMessage}</div>}
        <input
          type="text"
          className="border p-2 mb-2 w-full"
          placeholder="Name"
          value={newRecipe.name}
          onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
        />
        <input
          type="text"
          className="border p-2 mb-2 w-full"
          placeholder="Ingredients"
          value={newRecipe.ingredients}
          onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
        />
        <input
          type="text"
          className="border p-2 mb-2 w-full"
          placeholder="Instructions"
          value={newRecipe.instructions}
          onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
        />
        <input
          type="text"
          className="border p-2 mb-2 w-full"
          placeholder="Category"
          value={newRecipe.category}
          onChange={(e) => setNewRecipe({ ...newRecipe, category: e.target.value })}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default Recipes;
