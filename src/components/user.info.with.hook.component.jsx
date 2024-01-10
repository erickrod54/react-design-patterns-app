import React from "react";
import { ListWrapper } from "../styledcomponents/styled.components";
import useCurrentUser from "./custom.hook.pattern.current.user";

/**react-design-patterns-app - version 4.11 - UserInfoWithHook
 * - Features: 
 * 
 *     --> Building 'UserInfoWithHook'
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
 */

const UserInfoWithHook = () => {

  /**only by invoking the hook in a variable will fetch the 
   * user*/  
  const user = useCurrentUser();

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

export default UserInfoWithHook;