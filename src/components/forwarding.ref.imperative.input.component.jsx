import React, { forwardRef, useImperativeHandle } from "react";

/**react-design-patterns-app - version 13.15 - ForwardingImperativeRefInput 
 * - Features: 
 * 
 *     --> Building 'ForwardingImperativeRefInput' component 
 * 
 * Note: the 'ForwardingImperativeRefInput' will implementent 
 * 'useImperativeHandle' to limit access to the 'focus method'
 * reference in a diferent scope od the Component
*/
const IngRefInput = (props, ref) => {

    /**here is the hook and i give access to the ref, and the 
     * function 'sayType'*/
    useImperativeHandle(ref, () => {
        return{ sayType: () => alert("Type your name") }
    })

    return <input {...props}/>
}

/**the second component use the 'forwardRef' hook to pass the reference */
export const ForwardingImperativeRefInput = forwardRef(IngRefInput);