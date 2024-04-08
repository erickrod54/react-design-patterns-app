import React, { useDeferredValue, useId, useState } from "react";
import { FormWrapperDeferred } from "../styledcomponents/styled.components";
import { HeavyComponentAfterHook } from "./heavy.deferred.after.hook.component";

/**react-design-patterns-app - version 15.03 - UseDeferredAfterHook  
 * - Features: 
 * 
 *     --> Adding 'HeavyComponentAfterHook' sub component
 * 
 * Note: Pending to make responsive design
 */

const UseDeferredAfterHook = () => {

    const id = useId();

    const [ keyword, setKeyword ] = useState("")

    const deferredKeyword = useDeferredValue(keyword)

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
            <HeavyComponentAfterHook keyword={deferredKeyword}/>
        </FormWrapperDeferred>
    )
}

export default UseDeferredAfterHook;