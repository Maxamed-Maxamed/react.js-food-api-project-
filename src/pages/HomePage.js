import React, { useContext, useEffect } from 'react';
import { fetchRecipes } from '../API/spoonacular';
import RecipeCard from '../components/RecipeCard';
import { RecipesContext } from '../context/RecipesContext';

const HomePage = () => {
  const { recipes, setRecipes } = useContext(RecipesContext);

  useEffect(() => {
    fetchRecipes('pasta').then(setRecipes);
  }, [setRecipes]);

  return (
    <div>
      <h1>Food Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
