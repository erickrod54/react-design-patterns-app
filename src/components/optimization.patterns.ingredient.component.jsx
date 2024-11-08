import { useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { AddIngredient, IngredientsInfoHelper, IngredientsList } from "./index.components";
import { StyledContainerIngredients, StyledHeadingIngredients, StyledSpaceY4Ingredients } from "../styledcomponents/styled.components";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 45.13 - IngredientsComponent  
 * - Features: 
 * 
 *     --> Migrating  'initialIngredientsone' data
 * 
 * Note: Pending to make responsive design
 */

  const IngredientsComponent = (props) => {

    const { initialIngredientsone } = usePatternsAppContext();
    
    
    console.log("Ingredient rendered");
    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState(initialIngredientsone);
  
    const addIngredient = (ingredient) => {
      setIngredients((ingredients) => [
        ...ingredients,
        {
          name: ingredient,
          id: nanoid(),
        },
      ]);
    };
  
    const deleteIngredient = (id) => {
      setIngredients((ingredients) => ingredients.filter((ing) => ing.id !== id));
    };
  
    const createIngredientsHeaderText = () => {
      console.log("createIngredientsHeaderText called");
      return <StyledHeadingIngredients>Ingredients ({ingredients.length})</StyledHeadingIngredients>;
    };
  
    return (
      <StyledContainerIngredients>
        <div>
          {createIngredientsHeaderText()}
          <IngredientsInfoHelper />
        </div>
  
        <StyledSpaceY4Ingredients>
          <IngredientsList
            ingredients={ingredients}
            deleteIngredient={deleteIngredient}
          />
  
          <AddIngredient
            addIngredient={addIngredient}
            ingredient={ingredient}
            setIngredient={setIngredient}
          />
        </StyledSpaceY4Ingredients>
      </StyledContainerIngredients>
    );
  };
  
  export default IngredientsComponent;
