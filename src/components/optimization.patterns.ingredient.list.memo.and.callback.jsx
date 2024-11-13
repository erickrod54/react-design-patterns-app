import { memo } from "react";
import styled from "styled-components";
import { StyledContainerOptimized, StyledListOptimized } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 46.03 - IngredientsListOptimized  
 * - Features: 
 * 
 *     --> Migrating 'StyledListOptimized' 
 * 
 * Note: Pending to make responsive design
 */



const StyledListItem = styled.li`
  padding-top: 0.75rem; /* Adjust as needed */
  padding-bottom: 0.75rem; /* Adjust as needed */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
            <StyledListItem key={ingredient.id}>
              <span>{ingredient.name}</span>
              <StyledButton onClick={() => deleteIngredient(ingredient.id)}>
                X
              </StyledButton>
            </StyledListItem>
          ))}
        </StyledListOptimized>
      </StyledContainerOptimized>
    );
  };
  
  export default memo(IngredientsListOptimized);