import styled from "styled-components";
import { searchMeals } from "../api/api.layer.index";
import React, { useMemo, useState } from "react";
import { debounce } from "../utils/debouncing";
import { SearchContainerDebouncing, SearchFormDebounce, SearchInputDebounce, SearchLabelDebounce, SearchResultsDebounce } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 51.00 - SearchDebounce
 * - Features: 
 * 
 *     --> Migrating  'SearchResultsDebounce '  
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const SearchItem = styled.li`
padding: 10px;
margin: 5px 0;
background-color: #444; /* Slightly lighter gray */
border-radius: 5px;
transition: background 0.3s;
cursor: pointer;
`

const SearchDebounce = () => {
    const [query, setQuery] = useState("");
    const [meals, setMeals] = useState([]);
  
    const initSearchApiRequest = useMemo(() => {
      return debounce(async (q) => {
        setMeals(await searchMeals(q));
      }, 500);
    }, []);
  
    const onChangeQuery = (e) => {
      const q = e.target.value;
      setQuery(q);
      initSearchApiRequest(q);
    };
  
    return (
      <SearchContainerDebouncing>
        <SearchFormDebounce>
          <SearchLabelDebounce>Search meals</SearchLabelDebounce>
          <SearchInputDebounce type="text" value={query} onChange={onChangeQuery} placeholder="Type a meal here"/>
        </SearchFormDebounce>
        <SearchResultsDebounce>
          {meals?.map((meal) => {
            return <SearchItem key={meal.idMeal}>{meal.strMeal}</SearchItem>;
          })}
        </SearchResultsDebounce>
      </SearchContainerDebouncing>
    );
  };
  
  export default SearchDebounce;

  
