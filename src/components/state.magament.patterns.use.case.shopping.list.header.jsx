import styled from "styled-components";

/**react-design-patterns-app - version 36.06 - ShoppingListHeaderBefore
 * - Features: 
 * 
 *     -->  Refactoring 'ShoppingListHeaderBefore' styles
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
  //justify-content: space-between;
  background-color: blueviolet;
  color: aliceblue;
  padding: 4rem;
  border-radius: 1rem;
  font-size: 1.5rem;

  span{
    color: yellow;
    font-weight: 700;
    font-size: 1.25rem;
  }
  `;

const StyledHeading = styled.h2`
  font-weight: bold;
  margin-right: 2rem;
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
