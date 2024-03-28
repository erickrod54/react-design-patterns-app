import React, { forwardRef, useImperativeHandle, useRef } from "react";

/**react-design-patterns-app - version 14.02 - ForwardingImperativeMultipleFocus 
 * - Features: 
 * 
 *     --> Building 'ForwardingImperativeMultipleFocus' component 
 * 
 * Note: the 'ForwardingImperativeMultipleFocus' is to hold 
 *  'inputRef' and 'inputRef2' refs
*/
const IngRefInput = (props, ref) => {

    const inputRef = useRef()
    const inputRef2 = useRef()
    
    /**here i am using two different references*/
    useImperativeHandle(ref, () => {
        return{ 
            input1: inputRef.current,
            input2: inputRef2.current,
         }
    })

    return(
        <>
            <input {...props} ref={inputRef}/>
            <input {...props} ref={inputRef2}/>
        </>
    )
}

/**the second component use the 'forwardRef' hook to pass the reference */
export const ForwardingImperativeMultipleFocus = forwardRef(IngRefInput);