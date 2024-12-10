import styled from "styled-components";
import { searchMeals } from "../api/api.layer.index";
import React, { useMemo, useState } from "react";
import { SearchContainer, SearchForm, SearchLabelNoDebounce } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 50.13 - Search
 * - Features: 
 * 
 *     --> Migrating  'SearchLabelNoDebounce ' 
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

 
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

const SearchResults = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`

const SearchItem = styled.li`
padding: 10px;
margin: 5px 0;
background-color: #444; /* Slightly lighter gray */
border-radius: 5px;
transition: background 0.3s;
cursor: pointer;
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
        <SearchLabelNoDebounce>Search meals</SearchLabelNoDebounce>
        <SearchInput type="text" value={query} onChange={onChangeQuery} placeholder="Type a meal here"/>
      </SearchForm>
      <SearchResults>
        {meals?.map((meal) => {
          return <SearchItem key={meal.idMeal}>{meal.strMeal}</SearchItem>;
        })}
      </SearchResults>
    </SearchContainer>
  );
};

export default Search;