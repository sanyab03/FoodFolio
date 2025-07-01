import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const [ingredient, setIngredient] = useState('');
  const [allMeals, setAllMeals] = useState([]);
  const [displayedMeals, setDisplayedMeals] = useState([]);
  const [error, setError] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [loading, setLoading] = useState(false);

  const nonVegKeywords = [
    'chicken', 'beef', 'pork', 'fish', 'lamb', 'shrimp',
    'crab', 'bacon', 'duck', 'meat', 'mutton', 'turkey', 'salami' , 'egg', 'sausage'
  ];

  const isVegetarian = (mealName) => {
    const name = mealName.toLowerCase();
    return !nonVegKeywords.some(keyword => name.includes(keyword));
  };

  const fetchRecipes = async () => {
    if (!ingredient.trim()) {
      setError('Please enter an ingredient.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = response.data;

      if (data.meals) {
        setAllMeals(data.meals);

        const filtered = vegOnly
          ? data.meals.filter(meal => isVegetarian(meal.strMeal))
          : data.meals;

        setDisplayedMeals(filtered);
        setError(filtered.length === 0 ? 'No vegetarian recipes found for this ingredient.' : '');
      } else {
        setAllMeals([]);
        setDisplayedMeals([]);
        setError('No recipes found for this ingredient.');
      }
    } catch {
      setError('Error fetching recipes.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (allMeals.length === 0) return;

    const filtered = vegOnly
      ? allMeals.filter(meal => isVegetarian(meal.strMeal))
      : allMeals;

    setDisplayedMeals(filtered);
    setError(filtered.length === 0 ? 'No vegetarian recipes found for this ingredient.' : '');
  }, [vegOnly]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') fetchRecipes();
  };

  return (
    <div className="recipes-container">
      <h1 className="recipes-title">
        <span className="highlight">Discover Recipes</span>{'  '}
      </h1>
      <p className="recipes-description">
        Discover recipes using your available inventory. From chicken to chickpeas, we’ve got you covered!
      </p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter an ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={fetchRecipes}>
          <FaSearch /> Search
        </button>

        <div style={{ marginLeft: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <label className="neumorphic-toggle">
          <input
            type="checkbox"
            checked={vegOnly}
            onChange={() => setVegOnly(!vegOnly)}
          />
        <span className="slider"></span>
        </label>
        <span style={{ fontWeight: '500' }}>Veg Only</span>
      </div>

      </div>

      {error && <p className="error-message">{error}</p>}
      {loading && <div className="loader">Loading recipes...</div>}

      <div className="recipes-grid">
        {displayedMeals.map((meal) => (
          <div className="recipe-card" key={meal.idMeal}>
            <Link to={`/recipe/${meal.idMeal}`}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="recipe-img"
              />
            </Link>
            <div className="recipe-info">
              <h3>{meal.strMeal}</h3>
              {vegOnly && isVegetarian(meal.strMeal) && (
                <span className="veg-badge">🌱 Veg</span>
              )}
              <Link to={`/recipe/${meal.idMeal}`} className="recipe-link">
                See Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
