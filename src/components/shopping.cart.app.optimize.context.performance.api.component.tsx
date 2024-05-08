import React from "react";
import { SectionItemCenterWrapper, ShoppingCounterWrapper } from "../styledcomponents/styled.components.js";
import { DisplayPerformance } from "./index.components.js";
import { CartProviderPerformance } from "./optimize.context.api.performance.tsx";


/**react-design-patterns-app - version 18.17 - ShoppingCounterPerformance
 * - Features: 
 * 
 *     --> Building 'ShoppingCounterPerformance'
 * 
 *     --> Rendering 'DisplayPerformance'
 * 
 * Note: this component hide the context api logic make in 
 * it more secure  
*/

const ShoppingCounterPerformance = () => {

  return (
    <CartProviderPerformance>
        <SectionItemCenterWrapper>
            <ShoppingCounterWrapper>
                <DisplayPerformance />

            </ShoppingCounterWrapper>
        </SectionItemCenterWrapper>
    </CartProviderPerformance>
  );
}

export default ShoppingCounterPerformance;
