import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './components/Recipe'

const App = () => {
  const APP_ID = "ea436473";
  const APP_API_KEY = "020a1c3ed0be2e0f400578682134877a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(()=> {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_API_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };

    getRecipes();
  }, [query]);

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form 
        onSubmit={getSearch} 
        className="search-form"
      >
        <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch}
          placeholder='Type here'
        />
        <button 
          className="search-button" 
          type="submit" 
        >
          Search 
        </button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}  
          calorie = {recipe.recipe.calories}
          image = {recipe.recipe.image}
          time = {recipe.recipe.totalTime}
          ingredients = {recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
