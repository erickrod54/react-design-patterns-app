import React from "react";

/**react-design-patterns-app - version 1.11 - CustomTitle  
 * - Features: 
 * 
 *     --> Adding 'custom' tailwind css
 * 
 * Note: Pending to make responsive design
 */

const CustomTitle = ({ title }) => {

    return(
        <p className="text-4xl underline capitalize">
            {title}
        </p>
    )
}

export default CustomTitle