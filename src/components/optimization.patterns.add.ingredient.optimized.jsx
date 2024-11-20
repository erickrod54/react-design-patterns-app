import styled from "styled-components";
import { StyledButtonContainerIngredients, StyledButtonIngredients, StyledFieldsetIngredients } from "../styledcomponents/styled.components";
import { useState } from "react";

/**react-design-patterns-app - version 47.03 - AddIngredientOptimized  
 * - Features: 
 * 
 *     --> Building  'AddIngredientOptimized'  
 * 
 * Note: Pending to make responsive design
 */


const AddIngredientOptimized = (props) => {
    console.log("AddIngredient rendered");

    const [ingredient, setIngredient] = useState("");
    const { addIngredient } = props;
  
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
  
  export default AddIngredientOptimized;
