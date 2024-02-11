import React, { forwardRef } from "react";

/**react-design-patterns-app - version 8.00 - ForwardingRefInput 
 * - Features: 
 * 
 *     --> Building 'IngRefInput' component 
 * 
 *     --> Building 'ForwardingRefInput' component 
 * 
 * Note: the logic extracted from:
 * 
 *  '<input ref={inputRef}/>'
 * 
 * i pass the reference and the props in order 
 * to keep functionality
 */

/** i create this two components  */

/**the first component is to extract the logic */

/**I pass the reference and the props in order  to keep functionality 
 *  
 *   -- very important the 'props', and 'ref' are two parameters 
 *      need it by 'forwardRef'
*/
const IngRefInput = (props, ref) => {

    return <input ref={ref} {...props}/>
}

/**the second component use the 'forwardRef' hook to pass the reference */
export const ForwardingRefInput = forwardRef(IngRefInput);