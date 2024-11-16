import { useCallback, useMemo, useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { AddIngredient, IngredientsInfoHelper, IngredientsListOptimized } from "./index.components";
import { StyledContainerOptimal, StyledHeading2Optimized, StyledSpaceY4Optimized } from "../styledcomponents/styled.components";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 46.10 - IngredientsComponentOptimizedTwo  
 * - Features: 
 * 
 *     --> Building  'IngredientsComponentOptimizedTwo'
 * 
 * Note: 'IngredientsComponentOptimizedTwo' is a 
 * variant of 'IngredientsComponentOptimized' 
 * where 'memo' optimize state values
 */


  const IngredientsComponentOptimizedTwo = (props) => {

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
      
    const ingredientsText = useMemo(
        () => {
            console.log("createIngredientsHeaderText called");
            return <StyledHeading2Optimized>Ingredients ({ingredients.length})</StyledHeading2Optimized>;
          }
        , [ingredients.length]) 
  
    return (
      <StyledContainerOptimal>
        <div>
          {ingredientsText}
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
  
  export default IngredientsComponentOptimizedTwo;