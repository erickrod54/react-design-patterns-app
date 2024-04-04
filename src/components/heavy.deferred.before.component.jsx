import React from "react";
import { HeavyComponentWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 14.14 - UseDeferredBeforeValueHookPattern  
 * - Features: 
 * 
 *     --> Wrapping using 'HeavyComponentWrapper'
 * 
 * Note: the 'HeavyComponentBefore' will simulate a heavy performance
 * component that needs to be improve
 */

const HeavyComponentBefore = ({ keyword }) => {

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

export default HeavyComponentBefore;