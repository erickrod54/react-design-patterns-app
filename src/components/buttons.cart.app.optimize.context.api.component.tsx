import React from "react";
import { useCartContext } from "./shopping.cart.app.optimize.context.api.component.tsx";

/**react-design-patterns-app - version 17.13 - Buttons
 * - Features: 
 * 
 *     --> Building 'Buttons' Component 
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const Buttons = () => {
  const { dispatch } = useCartContext();
  return (
    <div className="buttons">
      <button
        className="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        ➖
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        ➕
      </button>
    </div>
  );
};

export default Buttons;
