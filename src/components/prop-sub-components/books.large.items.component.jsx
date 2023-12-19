import React from "react";

/**react-design-patterns-app - version 2.16 - BookLargeListItems
 * - Features: 
 * 
 *     --> Building 'BookLargeListItems' to display a large list
 * 
 * Note: This component is made in order to display large list of 
 * authors
 */

const BookLargeListItems = ({ book }) => {
    
    const { name, pages, title, price } = book;

    return(
        <>
            <h2><span className="author-name"><span>{name}</span></span></h2>
            <p><span>Pages:</span> {pages}</p>
            <p><span>Written by:</span> {title}</p>
            <p><span>Price:</span> {price}</p>
        </>
    )
}

export default BookLargeListItems;