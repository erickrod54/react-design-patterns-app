import React from "react";
import { useDispatchContext } from "./optimize.context.api.performance.tsx";
import { ButtonsOptContextStyle, SingleButtonWrapper } from "../styledcomponents/styled.components.js";

/**react-design-patterns-app - version 18.17 - ButtonsPerformance
 * - Features: 
 * 
 *     --> Building 'ButtonsPerformance' 
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const ButtonsPerformance = () => {
  const dispatch = useDispatchContext();

  return (
    <ButtonsOptContextStyle >
      <SingleButtonWrapper
        className="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        ➖
      </SingleButtonWrapper>
      <SingleButtonWrapper
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        ➕
      </SingleButtonWrapper>
    </ButtonsOptContextStyle>
  );
};

export default ButtonsPerformance;
