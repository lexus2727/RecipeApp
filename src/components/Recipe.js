//rafce creates a functional component
//component should receive a recipe as a prop
//we're structuring what it should look like
//displays recipes to browser
import React, { useState } from 'react'

import RecipeDetails from './RecipeDetails';

const Recipe = ({ recipe }) => {
    const [show, setShow] = useState(false); //used to show and hide ingredients list/false is hide
    const { label, image, url, ingredients } = recipe.recipe;
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target="_blank" rel="noopener noreferrer">URL</a>
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients} />}
        </div>
    );
};

export default Recipe
//target="_blank" opens up a new window in the browser
//Ingredients button will allow us to display the ingredients of the food
//onClick attribute button code means: if show is set to false then it will be updated to true on click
//line 18 is a react conditional if show is set to true the display ingredients list