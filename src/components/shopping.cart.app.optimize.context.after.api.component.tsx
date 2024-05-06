import React from "react";
import { SectionItemCenterWrapper, ShoppingCounterWrapper } from "../styledcomponents/styled.components.js";
import { CartProvider } from "./optimize.context.api.after.tsx";
import { ButtonsAfter, DisplayAfter } from "./index.components.js";


/**react-design-patterns-app - version 18.10 - ShoppingCounterAfter
 * - Features: 
 * 
 *     --> Adding 'ButtonsAfter'
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
                <ButtonsAfter />
            </ShoppingCounterWrapper>
        </SectionItemCenterWrapper>
    </CartProvider>
  );
}

export default ShoppingCounterAfter;
