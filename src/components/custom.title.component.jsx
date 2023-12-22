import React from "react";

/**react-design-patterns-app - version 3.02 - CustomTitle  
 * - Features: 
 * 
 *     --> Get rid of 'p' tag to fix wrap p > p error
 * 
 * Note: Pending to make responsive design
 */

const CustomTitle = ({ title }) => {

    return(
        <span className="text-4xl capitalize">
            {title}
        </span>
    )
}

export default CustomTitle