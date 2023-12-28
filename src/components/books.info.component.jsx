import React from "react";
import { ListWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 3.14 - BookInfo
 * - Features: 
 * 
 *     --> Adding 'book-name' style class.
 * 
 * Note: this end component will handle the props destructuring and 
 * rendering
 */

const BookInfo = ({ book }) => {
    const { name, price, title, pages } = book || {};
  
    return book ? (
      <ListWrapper>
          <h2 className="book-name"><span> {name}</span></h2>
          <p><span>Price: </span>{price}</p>
          <h3><span>Title: </span> {title}</h3>
          <p><span>Number of Pages: </span>{pages}</p>
      </ListWrapper>
    ) : (
      <h1>Loading</h1>
    );
  };
  
  export default BookInfo;
