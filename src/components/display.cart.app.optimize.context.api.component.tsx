import React from "react";
import { useCartContext } from "./shopping.cart.app.optimize.context.api.component.tsx";

/**react-design-patterns-app - version 18.01 - Display
 * - Features: 
 * 
 *     --> Building 'Display' Component 
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const Display = () => {
  const {
    state: { count },
  } = useCartContext();
  return <span className="span">{count}</span>;
};

export default Display;
