import { memo } from "react";
import styled from "styled-components";
import { StyledContainerOptimized, StyledListItemOptimized, StyledListOptimized } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 46.04 - IngredientsListOptimized  
 * - Features: 
 * 
 *     --> Migrating 'StyledListItemOptimized' 
 * 
 * Note: Pending to make responsive design
 */


const StyledButton = styled.button`
  cursor: pointer;
`;

const IngredientsListOptimized = (props) => {
    console.log("IngredientsList rendered");
    const { ingredients, deleteIngredient } = props;
    return (
      <StyledContainerOptimized>
        <StyledListOptimized>
          {ingredients.map((ingredient) => (
            <StyledListItemOptimized key={ingredient.id}>
              <span>{ingredient.name}</span>
              <StyledButton onClick={() => deleteIngredient(ingredient.id)}>
                X
              </StyledButton>
            </StyledListItemOptimized>
          ))}
        </StyledListOptimized>
      </StyledContainerOptimized>
    );
  };
  
  export default memo(IngredientsListOptimized);