import React from "react";
import CustomTitle from "./custom.title.component";

/**react-design-patterns-app - version 1.12 - LayoutComponentPattern 
 * - Features: 
 * 
 *     --> Adding Custom Color
 * 
 * Note: This is the first topic
 */

const LayoutComponentPattern = () => {

    return(
        <div className="text-yellow-100">
            <CustomTitle title={'layout component pattern'} />
        </div>
    )
}

export default LayoutComponentPattern;