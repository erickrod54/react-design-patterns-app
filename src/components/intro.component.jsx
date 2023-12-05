import React from "react";
import CustomTitle from "./custom.title.component";

/**react-design-patterns-app - version 1.13 - IntroComponent 
 * - Features: 
 * 
 *     --> Building 'IntroComponent'
 * 
 * Note: This is the first topic
 */

const IntroComponent = () => {

    return(
        <div className="flex justify-center items-center text-red-300 m-4 p-4">
            <CustomTitle title={'Introduction to React Pattterns'} />
        </div>
    )
}

export default IntroComponent;