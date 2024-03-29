import React from "react";
import { ListWrapper } from "../styledcomponents/styled.components";
import useResource from "./custom.hook.anyresource.pattern.current.user";

/**react-design-patterns-app - version 4.12 - UserInfoAnyResource
 * - Features: 
 * 
 *     --> Building 'UserInfoAnyResource'
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoAnyResource'  
 */

const UserInfoAnyResource = () => {

  /**only by invoking the hook in a variable will fetch the 
   * user with the specific userId*/  
  const user = useResource('/users/3')

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

export default UserInfoAnyResource;