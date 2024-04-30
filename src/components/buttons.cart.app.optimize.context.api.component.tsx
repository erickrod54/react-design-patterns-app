import React from "react";
import { useCartContext } from "./shopping.cart.app.optimize.context.api.component.tsx";
import { ButtonsOptContextStyle, SingleButtonWrapper } from "../styledcomponents/styled.components.js";

/**react-design-patterns-app - version 17.20 - Buttons
 * - Features: 
 * 
 *     --> Wrraping using 'SingleButtonWrapper' Styles 
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const Buttons = () => {
  const { dispatch } = useCartContext();
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

export default Buttons;
