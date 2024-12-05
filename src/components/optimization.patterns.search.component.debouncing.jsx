import styled from "styled-components";
import { searchMeals } from "../api/api.layer.index";
import React, { useMemo, useState } from "react";

/**react-design-patterns-app - version 49.18 - Search
 * - Features: 
 * 
 *     --> writting  'SearchInput '  styles
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

  const SearchContainer = styled.div`
    width: 50%;
    margin: 50px auto;
    padding: 20px;
    background-color: #222; /* Dark gray for contrast */
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    text-align: center;
  `

const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const SearchLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: #ffcc00; /* Bright yellow for contrast */
`
const SearchInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ffcc00; /* Bright yellow border */
  border-radius: 5px;
  background-color: #333; /* Dark gray */
  color: white;
  outline: none;

  .search-input::placeholder {
  color: #bbb;
  }
`
  
const Search = () => {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);

  const initSearchApiRequest = useMemo(() => {
    return async (q) => {
      setMeals(await searchMeals(q));
    };
  }, []);

  const onChangeQuery = (e) => {
    const q = e.target.value;
    setQuery(q);
    initSearchApiRequest(q);
  };

  return (
    <SearchContainer>
      <SearchForm>
        <SearchLabel>Search meals</SearchLabel>
        <SearchInput type="text" value={query} onChange={onChangeQuery} />
      </SearchForm>
      <ul>
        {meals?.map((meal) => {
          return <li key={meal.idMeal}>{meal.strMeal}</li>;
        })}
      </ul>
    </SearchContainer>
  );
};

export default Search;