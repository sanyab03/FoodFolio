import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setMeal(response.data.meals[0]);
      } catch {
        alert('Failed to fetch recipe.');
      }
    };

    fetchMeal();
  }, [id]);

  if (!meal) return <p className="loading-text">Loading...</p>;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={() => navigate(-1)}>
          &times;
        </button>
        <div
          className="modal-header"
          style={{ backgroundImage: `url(${meal.strMealThumb})` }}
        >
          <h2>{meal.strMeal}</h2>
        </div>
        <div className="modal-body">
          <div className="ingredients-column">
            <h3>Ingredients</h3>
            <ul>
              {Array.from({ length: 20 }).map((_, i) => {
                const ing = meal[`strIngredient${i + 1}`];
                const measure = meal[`strMeasure${i + 1}`];
                return ing && ing.trim() ? (
                  <li key={i}>
                    {measure} {ing}
                  </li>
                ) : null;
              })}
            </ul>
          </div>
          <div className="instructions-column">
            <h3>Instructions</h3>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
