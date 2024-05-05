import React from "react";
import { SectionItemCenterWrapper, ShoppingCounterWrapper } from "../styledcomponents/styled.components.js";
import { CartProvider } from "./optimize.context.api.after.tsx";
import { DisplayAfter } from "./index.components.js";


/**react-design-patterns-app - version 18.09 - ShoppingCounterAfter
 * - Features: 
 * 
 *     --> Building 'ShoppingCounterAfter'
 *
 * 
 * Note: this component hide the context api logic make in 
 * it more secure  
*/

const ShoppingCounterAfter = () => {

  return (
    <CartProvider>
        <SectionItemCenterWrapper>
            <ShoppingCounterWrapper>
                <DisplayAfter />
                
            </ShoppingCounterWrapper>
        </SectionItemCenterWrapper>
    </CartProvider>
  );
}

export default ShoppingCounterAfter;
