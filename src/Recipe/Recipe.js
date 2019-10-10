import React from 'react';
import './recipe.modules.css';

const Recipe = ({ title, calories, image, ingredients }) => {

    return (
        <div className="recipe">
            <h1>{title}</h1>
            <ul className="ingredients">
                {ingredients.map(ingredient => (
                    <li className="ingredients-list">
                    {ingredient.text}
                </li>
                ))}
            </ul>
            <p className="calories">{`Calories: ${Math.floor(calories)}`}</p>
            <img className="image" src={image} alt="" />
        </div>

    );
}

export default Recipe;