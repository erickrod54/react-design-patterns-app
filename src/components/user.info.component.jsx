import React from "react";
import { ListWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 3.18 - UserInfo
 * - Features: 
 * 
 *     --> Adding comments to the 'user' destructuring 
 * 
 * Note: the porpuse of this component will be under to verify
 * the 'user' and render the 'data' 
 */

const UserInfo = ({ user }) => {

  /**can be destructure as this on user or by implementing spread 
   * operator in case we want to use more props */  
  const { name, age, country, books } = user || {};

  /**here i verify the user in order to set the data */
  return user ? (
    <ListWrapper>
      <h2 className="author-name"><span>{name}</span></h2>
      <p><span>Age: </span> {age} years</p>
      <p><span>Country: </span> {country}</p>
      <h2><span>Books: </span></h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </ListWrapper>
  ) : (
    <h1>Loading...</h1>
  );
}

export default UserInfo;