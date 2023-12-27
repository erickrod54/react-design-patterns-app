import React from "react";
import { ListWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 3.13 - BookInfo
 * - Features: 
 * 
 *     --> Building 'BookInfo' end component
 * 
 * Note: this end component will handle the props destructuring and 
 * rendering
 */

const BookInfo = ({ book }) => {
    const { name, price, title, pages } = book || {};
  
    return book ? (
      <ListWrapper>
          <h3 className="author-name"><span> {name}</span></h3>
          <p><span>Price: </span>{price}</p>
          <h3><span>Title: </span> {title}</h3>
          <p><span>Number of Pages: </span>{pages}</p>
      </ListWrapper>
    ) : (
      <h1>Loading</h1>
    );
  };
  
  export default BookInfo;
