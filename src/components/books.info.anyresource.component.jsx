import React from "react";
import { ListWrapper } from "../styledcomponents/styled.components";
import useResource from "./custom.hook.anyresource.pattern.current.user";

/**react-design-patterns-app - version 4.13 - BookInfo
 * - Features: 
 * 
 *     --> Adding 'BookInfoAnyResource' component.
 * 
 * Note: this end component will handle the props destructuring and 
 * rendering 
 */

const BookInfoAnyResource = ({ bookUrl }) => {

    const book = useResource( bookUrl)
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
  
  export default BookInfoAnyResource;
