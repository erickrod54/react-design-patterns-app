import React from "react";
import { useCartContext } from "./optimize.context.api.after.tsx";
import { DisplayWrapper } from "../styledcomponents/styled.components.js";

/**react-design-patterns-app - version 18.09 - DisplayAfter
 * - Features: 
 * 
 *     --> Building 'DisplayAfter'
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const DisplayAfter = () => {
  const {
    state: { count },
  } = useCartContext();
  return (
    <DisplayWrapper>
        {count < 0 ? 0 : count}
    </DisplayWrapper>
  );
};

export default DisplayAfter;
