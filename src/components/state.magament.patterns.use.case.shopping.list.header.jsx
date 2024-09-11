import styled from "styled-components";

/**react-design-patterns-app - version 36.05 - ShoppingListHeaderBefore
 * - Features: 
 * 
 *     -->  Adding 'ShoppingListHeaderBefore' styles
 * 
 * Note: the macro 'tw' in order to work and use has to be installed
 * there is around 4 or 5 libraries and this is oen of the most active
 * and recent
 * 
 *          https://www.npmjs.com/package/twin.macro
 * 
 * i have to create a root access custom color palette in order 
 * to use them in the custom titles
 */

const StyledContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const StyledHeading = styled.h2`
  font-weight: bold;
`;

const ShoppingListHeaderBefore = (props) => {
  return (
    <StyledContainer>
      <StyledHeading>Shopping List</StyledHeading>
      <span>{props.shoppingList.length} items 🛒</span>
    </StyledContainer>
  );
};
export default ShoppingListHeaderBefore;
