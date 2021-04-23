

import React, { useState } from 'react'; //library for react
import Axios from 'axios'; //library for Axios
//import { v3 as uuidv3 } from 'uuid'; //this will generate a unique id for each recipe in the list
//import { v3 as uuidv3 } from 'uuid'; doesn't work

import "./App.css"; //use css for page
import Recipe from './components/Recipe';
import Alert from './components/Alert';


const App = () => {
  const [query, setQuery] = useState(""); //q- piece of food(data)/ setQuery will update the food data(state)
  const [recipes, setRecipes] = useState([]); //show recipes in browser
  const [alert, setAlert] = useState("");

  const APP_ID = "114ec9af";
  const APP_KEY = "175edd223511645e99f3ea5c8525c2a3";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  //create a function to get data
  const getData = async () => {
    if (query !== "") {//if query is not empty make the call
      const result = await Axios.get(url); //makes call to the api and response is saved to the result variable/ .get() is used to make the request
      if (!result.data.more) { //more in query returns true if the recipe exists and false if it doesn't
        return setAlert('No recipes by that name');
      }
      setRecipes(result.data.hits); //results-data is stored here/q- is the data/hits- is the array for the food
      console.log(result);
      setAlert("");//if we search for food by the right name the alert will go away
      setQuery(""); //clears input after response
    } else {
      setAlert('Please fill out the form')
    }
  };

  const onChange = (e) => { //allow us to grab the target value from field
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();

  };
  const { v4: uuidv4 } = require('uuid');
  return (
    //center our heading
    <div className="App">
      <h1>Serenrecipe!</h1>

      <form className="search-form" onSubmit={onSubmit}>
        {alert !== "" && <Alert alert={alert} />}

        <input type="text" placeholder="Search Food Recipes" autoComplete="off"
          onChange={onChange}
          value={query} />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] && recipes.map(recipe =>
          <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default App;

//return displays to the browser
//value={query} is part of clearing the input after 
//Alert component is placed inside the form below the onSubmit
//line 49 condition to display message if the alert doesnt have a value then we should display the message
//Alert message will display if search bar is left blank