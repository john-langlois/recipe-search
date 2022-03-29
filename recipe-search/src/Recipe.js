import React from "react";
import style from "./recipe.module.css"

const Recipe= ({title, calories, image, ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p> Ingredients</p>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
            <p>Calories: {calories.toFixed(2)}</p>
            <img className={style.image} src = {image}></img>
            
        </div>
    )
}
export default Recipe;