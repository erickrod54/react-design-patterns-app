import React, { useDeferredValue, useId, useState } from "react";
import { FormWrapperDeferred } from "../styledcomponents/styled.components";
import { HeavyComponentAfterFirst } from "./heavy.deferred.after.memo.component";

/**react-design-patterns-app - version 15.02 - UseDeferredAfterHook  
 * - Features: 
 * 
 *     --> Building 'UseDeferredAfterHook' Component
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
            <HeavyComponentAfterFirst keyword={deferredKeyword}/>
        </FormWrapperDeferred>
    )
}

export default UseDeferredAfterHook;