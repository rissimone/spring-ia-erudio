import  { useState } from "react";
import  ReactMarkDown from "react-markdown";

import api from "../../services/api";

function RecipeGenerator() {

    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('Any');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');

    const [recipe, setRecipe] = useState('');

    const generateRecipes = async () => {
        try {
            const response = await api.get(`create-recipe`, {
                params: {ingredients, cuisine, dietaryRestrictions}
            });
            const data =  await response.data;
            console.log(data);
            setRecipe(data)
        } catch (error) {
            console.log("Error Generating response: ", error);
        }
    }

    return (
        <div>
            <h2>Genetate Recipes</h2>
            <input
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Enter Ingredients (comma separated)"
            />
            <input
                type="text"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                placeholder="Enter Cuisine type"
            />
            <input
                type="text"
                value={dietaryRestrictions}
                onChange={(e) => setDietaryRestrictions(e.target.value)}
                placeholder="Enter Dietary Resptrictions (comma separated)"
            />
            <button onClick={generateRecipes}>Generate Recipe</button>
            <div className="output">
                <ReactMarkDown>{recipe}</ReactMarkDown>
            </div>
        </div>
    );
}
export default RecipeGenerator;