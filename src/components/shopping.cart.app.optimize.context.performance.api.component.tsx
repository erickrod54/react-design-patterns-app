import React from "react";
import { SectionItemCenterWrapper, ShoppingCounterWrapper } from "../styledcomponents/styled.components.js";
import { ButtonsPerformance, DisplayPerformance } from "./index.components.js";
import { CartProviderPerformance } from "./optimize.context.api.performance.tsx";


/**react-design-patterns-app - version 18.18 - ShoppingCounterPerformance
 * - Features: 
 *
 *     --> Rendering 'ButtonsPerformance'
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
                <ButtonsPerformance />
            </ShoppingCounterWrapper>
        </SectionItemCenterWrapper>
    </CartProviderPerformance>
  );
}

export default ShoppingCounterPerformance;
