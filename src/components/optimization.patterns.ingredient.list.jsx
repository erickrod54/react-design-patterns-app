import styled from "styled-components";
import { StyledButtonIngredientList, StyledContainerIngredient, StyledListIngredient, StyledListItemIngredient } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 46.00 - components > index  
 * - Features: 
 * 
 *     --> Migrating 'StyledButtonIngredientList' 
 * 
 * Note: Pending to make responsive design
 */


const IngredientsList = (props) => {
    console.log("IngredientsList rendered");
    const { ingredients, deleteIngredient } = props;
    return (
      <StyledContainerIngredient>
        <StyledListIngredient>
          {ingredients.map((ingredient) => (
            <StyledListItemIngredient key={ingredient.id}>
              <span>{ingredient.name}</span>
              <StyledButtonIngredientList onClick={() => deleteIngredient(ingredient.id)}>
                X
              </StyledButtonIngredientList>
            </StyledListItemIngredient>
          ))}
        </StyledListIngredient>
      </StyledContainerIngredient>
    );
  };
  
  export default IngredientsList;

