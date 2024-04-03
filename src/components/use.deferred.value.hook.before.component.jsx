import React, { useId, useState } from "react";
import HeavyComponentBefore from "./heavy.deferred.before.component";
import { FormWrapperDeferred } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 14.13 - UseDeferredBeforeValueHookPattern  
 * - Features: 
 * 
 *     --> Wrapping using 'FormWrapperDeferred' to style
 * 
 * Note: Pending to make responsive design
 */

const UseDeferredBeforeValueHookPattern = () => {

    const id = useId();

    const [ keyword, setKeyword ] = useState("")

    const handleChange = (e) => {
        e.preventDefault();

        setKeyword(e.target.value)
    }

    return(
        <FormWrapperDeferred>
            <label htmlFor={`${id}-type`}>Type here your entry</label>
            <input 
                id={`${id}-type`}
                value={keyword}
                onChange={handleChange}
            />
            <HeavyComponentBefore keyword={keyword}/>
        </FormWrapperDeferred>
    )
}

export default UseDeferredBeforeValueHookPattern;