import { useState, useEffect } from 'react';
import { fetchRecipes } from '../API/spoonacular';

const useFetchRecipes = (query) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes(query).then(setRecipes);
  }, [query]);

  return recipes;
};

export default useFetchRecipes;