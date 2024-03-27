import React, { forwardRef, useImperativeHandle, useRef } from "react";

/**react-design-patterns-app - version 13.18 - ForwardingImperativeFocusRefInput 
 * - Features: 
 * 
 *     --> Building 'ForwardingImperativeFocusRefInput' component 
 * 
 * Note: the 'ForwardingImperativeFocusRefInput' will implementent 
 * 'useImperativeHandle' to limit access to the 'focus method'
 * reference in a diferent scope od the Component
*/
const IngRefInput = (props, ref) => {

    const inputRef = useRef()
    
    /**here is the hook and i give access to the ref, and the 
     * function 'focus'*/
    useImperativeHandle(ref, () => {
        return{ 
            stayFocus: () => inputRef.current.focus() 
         }
    })

    return <input {...props} ref={inputRef}/>
}

/**the second component use the 'forwardRef' hook to pass the reference */
export const ForwardingImperativeFocusRefInput = forwardRef(IngRefInput);