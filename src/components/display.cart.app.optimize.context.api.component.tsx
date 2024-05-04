import React from "react";
import { useCartContext } from "./shopping.cart.app.optimize.context.api.component.tsx";
import { DisplayWrapper } from "../styledcomponents/styled.components.js";

/**react-design-patterns-app - version 18.07 - Display
 * - Features: 
 * 
 *     --> Validating 'count' to avoid negative values
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const Display = () => {
  const {
    state: { count },
  } = useCartContext();
  return (
    <DisplayWrapper>
        {count < 0 ? 0 : count}
    </DisplayWrapper>
  );
};

export default Display;
