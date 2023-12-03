import React from "react";
import { Link } from "react-router-dom";

/**react-design-patterns-app - version 1.10 - SharedLayout 
 * - Features: 
 * 
 *     --> Adding link to back Home
 * 
 * Note: This is the first topic
 */

const SharedLayout = ({ children }) => {

    return(
        <>
            <Link to='/' className="bg-black-600 p-6 flex justify-center items-center shadow-md border border-green-500 border-6 rounded-xl w-fit m-16 hover:bg-blue-500">Back Home</Link>
            <div className="flex justify-center items-center mt-10">
                {children}
            </div>
        </>
    )
}

export default SharedLayout;