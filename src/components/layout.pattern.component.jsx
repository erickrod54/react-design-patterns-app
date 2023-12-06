import React from "react";
import CustomTitle from "./custom.title.component";

/**react-design-patterns-app - version 1.13 - LayoutComponentPattern 
 * - Features: 
 * 
 *     --> Adding 'underline' prop
 * 
 * Note: This is the first topic
 */

const LayoutComponentPattern = () => {

    return(
        <div className="text-yellow-100 underline">
            <CustomTitle title={'layout component pattern'} />
        </div>
    )
}

export default LayoutComponentPattern;