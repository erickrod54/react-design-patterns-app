import styled from "styled-components";
import { StyledContainerIngredient } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 45.18 - components > index  
 * - Features: 
 * 
 *     --> Migrating 'StyledContainerIngredient' 
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

const IngredientsList = (props) => {
    console.log("IngredientsList rendered");
    const { ingredients, deleteIngredient } = props;
    return (
      <StyledContainerIngredient>
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
      </StyledContainerIngredient>
    );
  };
  
  export default IngredientsList;

