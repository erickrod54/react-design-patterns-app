import styled from "styled-components";

/**react-design-patterns-app - version 43.08 - AddIngredient  
 * - Features: 
 * 
 *     --> writting  'AddIngredient' styles
 * 
 * Note: Pending to make responsive design
 */


const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 1.5rem;

  label {
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
