import React from 'react'
import "./RecipeTile.css"
export default function RecipeTile({recipe}) {
  return (
    <div className='recipeTile'>

        <img className='recipe_img' src = {recipe["recipe"]["image"]}></img>
        <p className='recipe_name'>{recipe["recipe"]["label"]}</p>


    </div>
  )
}
