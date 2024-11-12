import styled from "styled-components";
import { StyledContainerIngredient, StyledListIngredient, StyledListItemIngredient } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 45.20 - components > index  
 * - Features: 
 * 
 *     --> Migrating 'StyledListItemIngredient' 
 * 
 * Note: Pending to make responsive design
 */


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
            <StyledListItemIngredient key={ingredient.id}>
              <span>{ingredient.name}</span>
              <StyledButton onClick={() => deleteIngredient(ingredient.id)}>
                X
              </StyledButton>
            </StyledListItemIngredient>
          ))}
        </StyledListIngredient>
      </StyledContainerIngredient>
    );
  };
  
  export default IngredientsList;

