import React from 'react'

const { v4: uuidv4 } = require('uuid');
const RecipeDetails = ({ ingredients }) => {


    return ingredients.map(ingredient => {


        return (

            <ul key={uuidv4()} className="ingredient-list">

                <li className="ingredient-text">{ingredient.text}</li>

                <li className="ingredient-weight">Weight:{ingredient.weight}</li>

            </ul>
        );
    });

};

export default RecipeDetails;

//start with test to see how it looks in the browser<div> Recipe Details </div>
//The ingredients from each recipe is stored in an array, so you have to loop through it to get the data
//const unique = numbers.filter((value, index) => {
    //return numbers.indexOf(value) === index;
//});
//array.filter((item, index) => {
    // array.indexOf(item) === index
    //return array.indexOf(item) === index;
//});