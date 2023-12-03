import React from "react";

/**react-design-patterns-app - version 1.09 - SharedLayout 
 * - Features: 
 * 
 *     --> Builting 'SharedLayout'
 * 
 * Note: This is the first topic
 */

const SharedLayout = ({ children }) => {

    return(
        <div className="flex justify-center items-center">
            {children}
        </div>
    )
}

export default SharedLayout;