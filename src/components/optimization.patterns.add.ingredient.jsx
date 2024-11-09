import styled from "styled-components";
import { StyledButtonContainerIngredients, StyledFieldsetIngredients } from "../styledcomponents/styled.components";


/**react-design-patterns-app - version 45.15 - AddIngredient  
 * - Features: 
 * 
 *     --> Migrating  'StyledButtonContainerIngredients' styles 
 * 
 * Note: Pending to make responsive design
 */



const StyledButton = styled.button`
  background-color: #1f6feb;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  min-width: 5rem;
`;

const AddIngredient = (props) => {
    console.log("AddIngredient rendered");
    const { addIngredient, ingredient, setIngredient } = props;
  
    return (
      <form className="">
        <StyledFieldsetIngredients>
          <label>Add ingredient</label>
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
        </StyledFieldsetIngredients>
        <StyledButtonContainerIngredients>
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              if (!ingredient) return;
              addIngredient(ingredient);
              setIngredient("");
            }}
          >
            Add
          </StyledButton>
        </StyledButtonContainerIngredients>
      </form>
    );
  };
  
  export default AddIngredient;
