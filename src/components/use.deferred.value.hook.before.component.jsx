import React, { useState } from "react";
import HeavyComponentBefore from "./heavy.deferred.before.component";

/**react-design-patterns-app - version 14.11 - UseDeferredBeforeValueHookPattern  
 * - Features: 
 * 
 *     --> Building 'UseDeferredBeforeValueHookPattern'
 * 
 * Note: Pending to make responsive design
 */

const UseDeferredBeforeValueHookPattern = () => {

    const [ keyword, setKeyword ] = useState("")

    const handleChange = (e) => {
        e.preventDefault();

        setKeyword(e.target.value)
    }

    return(
        <>
            <input 
                value={keyword}
                onChange={handleChange}
            />
            <HeavyComponentBefore keyword={keyword}/>
        </>
    )
}

export default UseDeferredBeforeValueHookPattern;