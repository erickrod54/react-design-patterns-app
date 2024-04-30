import React from "react";
import { useCartContext } from "./shopping.cart.app.optimize.context.api.component.tsx";
import { SingleButtonWrapper } from "../styledcomponents/styled.components.js";

/**react-design-patterns-app - version 17.19 - Buttons
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
    <div className="buttons">
      <SingleButtonWrapper
        className="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        ➖
      </SingleButtonWrapper>
      <SingleButtonWrapper
        className="button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        ➕
      </SingleButtonWrapper>
    </div>
  );
};

export default Buttons;
