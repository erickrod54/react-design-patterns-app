import React, { useId, useState } from "react";
import { FormWrapperDeferred } from "../styledcomponents/styled.components";
import { HeavyComponentAfterFirst } from "./heavy.deferred.after.memo.component";

/**react-design-patterns-app - version 14.18 - UseDeferredAfterMemo  
 * - Features: 
 * 
 *     --> Building 'UseDeferredAfterMemo' Component
 * 
 * Note: Pending to make responsive design
 */

const UseDeferredAfterMemo = () => {

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
            <HeavyComponentAfterFirst keyword={keyword}/>
        </FormWrapperDeferred>
    )
}

export default UseDeferredAfterMemo;