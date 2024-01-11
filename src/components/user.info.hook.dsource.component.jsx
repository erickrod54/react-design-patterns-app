import React from "react";
import { ListWrapper } from "../styledcomponents/styled.components";
import useDataSource from "./custom.hook.data.source.pattern";
import axios from "axios";

/**react-design-patterns-app - version 4.12 - UserInfoDataSource
 * - Features: 
 * 
 *     --> Building 'UserInfoDataSource'
 * 
 *     --> Bulding 'fetchFromServer' util function
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoDataSource'  
 */

const fetchFromServer = (resourceUrl) => async () => {
    const response = await axios.get(resourceUrl)
    return response.data;
  }

const UserInfoDataSource= ({userId}) => {

  const user = useDataSource(fetchFromServer(`/users/${userId}`))

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

export default UserInfoDataSource;