import { memo } from "react";
import styled from "styled-components";
import { StyledContainerOptimized } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 46.02 - IngredientsListOptimized  
 * - Features: 
 * 
 *     --> Migrating 'StyledContainerOptimized' 
 * 
 * Note: Pending to make responsive design
 */


const StyledList = styled.ul`
  border-color: #d1d5db; /* Replace with your desired color */
  border-width: 0;
  border-style: solid;
  border-top-width: 1px; /* Add this line for the first item */
`;

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
        <StyledList>
          {ingredients.map((ingredient) => (
            <StyledListItem key={ingredient.id}>
              <span>{ingredient.name}</span>
              <StyledButton onClick={() => deleteIngredient(ingredient.id)}>
                X
              </StyledButton>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledContainerOptimized>
    );
  };
  
  export default memo(IngredientsListOptimized);