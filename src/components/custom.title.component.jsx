import React from "react";

/**react-design-patterns-app - version 1.13 - CustomTitle  
 * - Features: 
 * 
 *     --> Get rid of 'underline' prop
 * 
 * Note: Pending to make responsive design
 */

const CustomTitle = ({ title }) => {

    return(
        <p className="text-4xl capitalize">
            {title}
        </p>
    )
}

export default CustomTitle