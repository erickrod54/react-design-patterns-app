import styled from "styled-components";
import { StyledContainerBefore, StyledHeadingBefore } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 39.02 - ShoppingListHeaderBefore
 * - Features: 
 * 
 *     -->  Migrating 'StyledHeadingBefore' styles
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



const ShoppingListHeaderBefore = (props) => {
  return (
    <StyledContainerBefore>
        <StyledHeadingBefore>Shopping List</StyledHeadingBefore>
        <span>{props.shoppingList.length} items 🛒</span>
    </StyledContainerBefore>
  );
};
export default ShoppingListHeaderBefore;
