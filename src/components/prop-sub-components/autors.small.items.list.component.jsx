import React from "react";

/**react-design-patterns-app - version 2.15 - AuthorSmallListItems
 * - Features: 
 * 
 *     --> Building 'AuthorSmallListItems' to display a small list
 * 
 * Note: This component is made in order to display small list of 
 * authors
 * 
 * this is also called 'source component' as the 'AuthorSmallListItems'
 * and 'AuthorLargeListItems' are treated in the same way
 */

const AuthorSmallListItems = ({ author }) => {
    
    const { name, age } = author;

    return(
        <>
            <p><span></span> <span className="author-name"><span>{name}</span></span></p>
            <p><span>Age:</span> { age }</p>
        </>
    )
}

export default AuthorSmallListItems;