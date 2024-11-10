import styled from "styled-components";
import { StyledButtonContainerIngredients, StyledButtonIngredients, StyledFieldsetIngredients } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 45.16 - AddIngredient  
 * - Features: 
 * 
 *     --> Migrating  'StyledButtonContainerIngredients' styles 
 * 
 * Note: Pending to make responsive design
 */


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
          <StyledButtonIngredients
            onClick={(e) => {
              e.preventDefault();
              if (!ingredient) return;
              addIngredient(ingredient);
              setIngredient("");
            }}
          >
            Add
          </StyledButtonIngredients>
        </StyledButtonContainerIngredients>
      </form>
    );
  };
  
  export default AddIngredient;
