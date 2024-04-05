import React, { memo } from "react";
import { HeavyComponentWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 14.18 - HeavyComponentAfterFirst  
 * - Features: 
 * 
 *     --> Building 'HeavyComponentAfterFirst'
 * 
 * Note: the 'HeavyComponentAfterFirst' is the memo version of 
 * 'HeavyComponentBefore' to prove that memo alone cannot solve the problem
 */


const HeavyComponentAfterMemo = ({ keyword }) => {

    const init = performance.now();

    while ( init > performance.now() - 200){

    }

    return(
        <HeavyComponentWrapper>
            <h2>
                <span>
                "
                </span>
                I am a slow  Component ( check your slow entry bellow )
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

export const HeavyComponentAfterFirst = memo(HeavyComponentAfterMemo);