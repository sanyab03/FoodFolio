import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './InventoryWithRecipe.css';

export default function InventoryWithRecipes() {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("inventory") || "[]"));
  const [formData, setFormData] = useState({ name: "", quantity: "", expires: "", category: "" });

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [ingredientTarget, setIngredientTarget] = useState("");
  const [isVegOnly, setIsVegOnly] = useState(false); // ✅ new

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((v) => !v.trim())) return;
    const updated = [...items, formData];
    setItems(updated);
    localStorage.setItem("inventory", JSON.stringify(updated));
    setFormData({ name: "", quantity: "", expires: "", category: "" });
  };

  const handleDelete = (idx) => {
    const updated = items.filter((_, i) => i !== idx);
    setItems(updated);
    localStorage.setItem("inventory", JSON.stringify(updated));
  };

  const generateRecipes = async (ingredient) => {
    setIngredientTarget(ingredient);
    if (!ingredient) return;
    setLoading(true);
    setError("");
    setRecipes([]);
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (!data.meals) throw new Error("No recipes found");

      const detailPromises = data.meals.slice(0, 15).map((m) =>
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${m.idMeal}`).then((res) => res.data.meals[0])
      );
      const detailed = await Promise.all(detailPromises);
      const accurate = detailed.filter((meal) => {
        return Array.from({ length: 20 }).some((_, i) => {
          const ing = meal[`strIngredient${i + 1}`]?.toLowerCase() || "";
          return ing && ing.includes(ingredient.toLowerCase());
        });
      });
      setRecipes(accurate.slice(0, 12));
    } catch (err) {
      setError("Sorry, no matching recipes right now.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Filter out non-veg recipes if toggle is on
  const displayedRecipes = isVegOnly
    ? recipes.filter((meal) => {
        const allIngredients = Array.from({ length: 20 })
          .map((_, i) => meal[`strIngredient${i + 1}`]?.toLowerCase())
          .filter(Boolean);

        return !allIngredients.some((ing) =>
          ["meat", "chicken", "mutton", "pork", "beef", "egg", "bacon", "turkey", "lamb"].some((nonVeg) =>
            ing.includes(nonVeg)
          )
        );
      })
    : recipes;

  return (
    <div className="inventory-container">
      <h1 className="inventory-title">Inventory & Recipes</h1>

      {/* ─ Inventory Table ─ */}
      <div className="inventory-table-container">
        {items.length === 0 ? (
          <p className="no-items">No items yet.</p>
        ) : (
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Expires</th>
                <th>Category</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.expires}</td>
                  <td>
                    <span className={`tag ${item.category.toLowerCase()}`}>{item.category}</span>
                  </td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDelete(idx)}>Delete</button>
                    <button
                      className="edit-btn"
                      style={{ marginLeft: 6 }}
                      onClick={() => generateRecipes(item.name.trim().toLowerCase())}
                    >
                      Recipes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ─ Add Item Form ─ */}
      <div className="add-form">
        <h2>Add New Item</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input name="quantity" type="number" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
          <input name="expires" type="date" value={formData.expires} onChange={handleChange} />
          <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
          <button type="submit">Add</button>
        </form>
      </div>

      {/* ─ Recipes ─ */}
      <section className="recipes-container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <h2 className="recipes-title">
            Recipes using <span className="highlight">{ingredientTarget || "your items"}</span>
          </h2>

          {/* ✅ Toggle */}
          <label className="veg-toggle">
            <div className="neumorphic-toggle">
              <input type="checkbox" checked={isVegOnly} onChange={() => setIsVegOnly((v) => !v)} />
              <span className="slider" />
            </div>
            <span className="toggle-text">{isVegOnly ? "Veg Only" : "All"}</span>
          </label>
        </div>

        {loading && <p className="loader">Finding tasty ideas…</p>}
        {error && <p className="error-message">{error}</p>}

        <div className="recipes-grid">
          {displayedRecipes.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </section>
    </div>
  );
}

function RecipeCard({ meal }) {
  return (
    <div className="recipe-card">
      <img className="recipe-img" src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="recipe-info">
        <h3>{meal.strMeal}</h3>
        <Link className="recipe-link" to={`/recipe/${meal.idMeal}`}>View</Link>
      </div>
    </div>
  );
}
