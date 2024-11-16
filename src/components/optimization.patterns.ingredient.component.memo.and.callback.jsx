import { useCallback, useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { AddIngredient, IngredientsInfoHelper, IngredientsListOptimized } from "./index.components";
import { StyledContainerOptimal, StyledHeading2Optimized, StyledSpaceY4Optimized } from "../styledcomponents/styled.components";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 46.09 - IngredientsComponent  
 * - Features: 
 * 
 *     --> Migrating  'initialIngredientstwo'
 * 
 * Note: Pending to make responsive design
 */


  const IngredientsComponentOptimized = (props) => {

    const { initialIngredientstwo } = usePatternsAppContext();
    
    console.log("Ingredient rendered");
    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState(initialIngredientstwo);
  
    const addIngredient = (ingredient) => {
      setIngredients((ingredients) => [
        ...ingredients,
        {
          name: ingredient,
          id: nanoid(),
        },
      ]);
    };
  
    /**useCallback will received two arguments, the function to memoized
     * and a dependency array*/
    const deleteIngredient = useCallback(
        (id) => {
            setIngredients((ingredients) => ingredients.filter((ing) => ing.id !== id));
          }
        ,[])
  
    const createIngredientsHeaderText = () => {
      console.log("createIngredientsHeaderText called");
      return <StyledHeading2Optimized>Ingredients ({ingredients.length})</StyledHeading2Optimized>;
    };
  
    return (
      <StyledContainerOptimal>
        <div>
          {createIngredientsHeaderText()}
          <IngredientsInfoHelper />
        </div>
  
        <StyledSpaceY4Optimized>
          <IngredientsListOptimized
            ingredients={ingredients}
            deleteIngredient={deleteIngredient}
          />
  
          <AddIngredient
            addIngredient={addIngredient}
            ingredient={ingredient}
            setIngredient={setIngredient}
          />
        </StyledSpaceY4Optimized>
      </StyledContainerOptimal>
    );
  };
  
  export default IngredientsComponentOptimized;