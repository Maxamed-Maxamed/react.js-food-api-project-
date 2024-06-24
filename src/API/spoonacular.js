const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com';

export const fetchRecipes = async (query) => {
  const response = await fetch(`${BASE_URL}/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.results;
};
