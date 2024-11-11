import styled from "styled-components";
import { StyledContainerIngredient, StyledListIngredient } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 45.19 - components > index  
 * - Features: 
 * 
 *     --> Migrating 'StyledListIngredient' 
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

const IngredientsList = (props) => {
    console.log("IngredientsList rendered");
    const { ingredients, deleteIngredient } = props;
    return (
      <StyledContainerIngredient>
        <StyledListIngredient>
          {ingredients.map((ingredient) => (
            <StyledListItem key={ingredient.id}>
              <span>{ingredient.name}</span>
              <StyledButton onClick={() => deleteIngredient(ingredient.id)}>
                X
              </StyledButton>
            </StyledListItem>
          ))}
        </StyledListIngredient>
      </StyledContainerIngredient>
    );
  };
  
  export default IngredientsList;

