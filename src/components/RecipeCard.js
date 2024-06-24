import React from 'react';
import '../App.css'; // Assuming you have CSS for styling

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <img src={recipe.image} alt={recipe.title} />
    <h3>{recipe.title}</h3>
  </div>
);

export default RecipeCard;
