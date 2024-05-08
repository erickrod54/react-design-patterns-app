import React from "react";

import { DisplayWrapper } from "../styledcomponents/styled.components.js";
import { useValueContext } from "./optimize.context.api.performance.tsx";

/**react-design-patterns-app - version 18.17 - Display
 * - Features: 
 * 
 *     --> Building 'DisplayPerformance'
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const DisplayPerformance = () => {
  const  { count } = useValueContext();

  return (
    <DisplayWrapper>
        {count < 0 ? 0 : count}
    </DisplayWrapper>
  );
};

export default DisplayPerformance;
