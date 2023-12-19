import React from "react";

/**react-design-patterns-app - version 2.15 - AuthorLargeListItems
 * - Features: 
 * 
 *     --> Building 'AuthorLargeListItems' to display a large list
 * 
 * Note: This component is made in order to display large list of 
 * authors
 */

const AuthorLargeListItems = ({ author }) => {
    
    const { name, age, country, books } = author;

    return(
        <>
            <h2><span className="author-name"><span>{name}</span></span></h2>
            <p><span>Age:</span> {age}</p>
            <p><span>Country:</span> {country}</p>
            <h2><span>Books:</span></h2>
            <ul>
            {books.map((book) => {

                return(
                    <li key={book}>{book}</li>
                )
            })}
            </ul>
        </>
    )
}

export default AuthorLargeListItems;