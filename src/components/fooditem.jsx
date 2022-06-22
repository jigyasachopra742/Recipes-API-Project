import React from 'react'
import './fooditem.css'
function Fooditem(getFood) {
  
    console.log(getFood.data)
    return (
    <>
        <div className="card">
            
            <img src ={getFood.data.strMealThumb}/>
           
            <div className = "description">
                <h2>{getFood.data.strMeal}</h2>
                <p>{getFood.data.strArea}</p>
            </div>

            <div className="recipe">
                <h2>Recipe</h2>
                <p>{getFood.data.strInstructions}</p>
                <img src={getFood.data.strMealThumb}></img>
                <a href={getFood.data.strSource}>Watch Video</a>
            </div>
        
        </div>

    </>
  )
}

export default Fooditem;