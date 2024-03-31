import React, { forwardRef, useImperativeHandle, useState } from "react";

/**react-design-patterns-app - version 14.07 - ForwardingImperativeRefState 
 * - Features: 
 * 
 *     --> Building 'ForwardingImperativeRefState' component 
 * 
 * Note: the 'ForwardingImperativeRefState' will implementent 
 * the dependency array and will capture the user entry using
 * the 'useImperativeHandle' hook and setting as depency array
 * the 'value' state ( will behave kind like useEffect )
*/
const IngRefInput = (props, ref) => {

    const [ value, setValue ] = useState("");

    /**here is the hook and i give access to the ref, and the 
     * function 'sayType'*/
    useImperativeHandle(ref, () => {
        return{ value }
    }, [value])

    return (
    <>
        <input 
            {...props}
            type="text"
            value={value}
            onChange={ (e) => setValue(e.target.value) }
        />
    </>
    
    )
}

/**the second component use the 'ForwardingImperativeRefState' hook to pass the reference */
export const ForwardingImperativeRefState = forwardRef(IngRefInput);