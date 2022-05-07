import React, {useState}from 'react'

import "./App.css"
import Axios from "axios"
import RecipeTile from './RecipeTile';

function App(){
const [query, setquery] = useState(" ");
const [recipes, setrecipes] = useState([ ])

var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=46105c59&app_key=e1962ed25b4e1cec6660d6421a5a4a86`;

async function getRecipes(){
var result =  await Axios.get(url);
setrecipes(result.data.hits)
console.log(result.data);

}

const onSubmit = (e) => {
  e.preventDefault();
  getRecipes();
}

  return(
    <div className="App">
      <h1>Chicken Hub</h1>
      <form  className='app_search' onSubmit={onSubmit}>
        <input type="text" 
        className='app_input'
        placeholder="enter chicken"
        value={query} 
        onChange={(e) => setquery(e.target.value)} 
        />
        <input className='app_submit' type="submit" value="search" />
      </form>
      <div className='app_recipe'>
       {recipes.map(recipe => {
        return <RecipeTile recipe={recipe}/>;
       })}
      </div>
     </div>
  );
}
export default App;
