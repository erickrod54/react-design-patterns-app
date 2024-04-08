import React, { memo } from "react";
import { HeavyComponentWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 15.03 - HeavyComponentAfter  
 * - Features: 
 * 
 *     --> Building 'HeavyComponentAfterHook'
 * 
 * Note: the 'HeavyComponentAfterFirst' is the memo version of 
 * 'HeavyComponentBefore' to prove that memo alone cannot solve the problem
 */


const HeavyComponentAfter= ({ keyword }) => {

    const init = performance.now();

    while ( init > performance.now() - 200){

    }

    return(
        <HeavyComponentWrapper>
            <h2>
                <span>
                "
                </span>
                I am a fast Component ( check your fast entry bellow )
                <span>
                "
                </span>
            </h2>
            <p>
                { keyword }
            </p>
        </HeavyComponentWrapper>
    )
}

export const HeavyComponentAfterHook = memo(HeavyComponentAfter);