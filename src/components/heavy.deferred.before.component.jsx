import React, { useState } from "react";

/**react-design-patterns-app - version 14.11 - UseDeferredBeforeValueHookPattern  
 * - Features: 
 * 
 *     --> Building 'HeavyComponentBefore'
 * 
 * Note: the 'HeavyComponentBefore' will simulate a heavy performance
 * component that needs to be improve
 */

const HeavyComponentBefore = ({ keyword }) => {

    const init = performance.now();

    while ( init > performance.now() - 200){

    }

    return(
        <>
          <h2>I am a slow component</h2>
          { keyword } 
        </>
    )
}

export default HeavyComponentBefore;