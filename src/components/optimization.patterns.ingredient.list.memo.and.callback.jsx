import { memo } from "react";
import styled from "styled-components";
import { StyledButtonOptimized, StyledContainerOptimized, StyledListItemOptimized, StyledListOptimized } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 46.05 - IngredientsListOptimized  
 * - Features: 
 * 
 *     --> Migrating 'StyledButtonOptimized' 
 * 
 * Note: Pending to make responsive design
 */


const IngredientsListOptimized = (props) => {
    console.log("IngredientsList rendered");
    const { ingredients, deleteIngredient } = props;
    return (
      <StyledContainerOptimized>
        <StyledListOptimized>
          {ingredients.map((ingredient) => (
            <StyledListItemOptimized key={ingredient.id}>
              <span>{ingredient.name}</span>
              <StyledButtonOptimized onClick={() => deleteIngredient(ingredient.id)}>
                X
              </StyledButtonOptimized>
            </StyledListItemOptimized>
          ))}
        </StyledListOptimized>
      </StyledContainerOptimized>
    );
  };
  
  export default memo(IngredientsListOptimized);