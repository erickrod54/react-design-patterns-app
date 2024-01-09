import React from "react";

/**react-design-patterns-app - version 4.10 - hocLogProps 
 * - Features: 
 * 
 *     --> Building 'hocLogProps'.
 * 
 * Note: 'hocLogProps' will serve as an exercise to check
 * the data flow from a HOC to the component destination
 * to create
 * 
 */

const hocLogProps = (Component) => {
    return (props) => {
        console.log({props})
        return <Component {...props}/>
    }
}

export default hocLogProps;