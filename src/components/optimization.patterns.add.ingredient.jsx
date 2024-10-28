import styled from "styled-components";

/**react-design-patterns-app - version 43.17 - AddIngredient  
 * - Features: 
 * 
 *     --> Building  'StyledFieldset' 
 * 
 * Note: Pending to make responsive design
 */


const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 1.5rem;

  label {
    color: white;
  }

  input {
    width: 100%;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

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
        <StyledFieldset>
          <label>Add ingredient</label>
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
        </StyledFieldset>
        <StyledButtonContainer>
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
        </StyledButtonContainer>
      </form>
    );
  };
  
  export default AddIngredient;
