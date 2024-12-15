import styled from "styled-components";
import { searchMeals } from "../api/api.layer.index";
import React, { useMemo, useState } from "react";
import { debounce } from "../utils/debouncing";
import { SearchContainerDebouncing, SearchFormDebounce, SearchInputDebounce, SearchItemDebounce, SearchLabelDebounce, SearchResultsDebounce } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 51.01 - SearchDebounce
 * - Features: 
 * 
 *     --> Migrating  'SearchItemDebounce '  
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

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
            return <SearchItemDebounce key={meal.idMeal}>{meal.strMeal}</SearchItemDebounce>;
          })}
        </SearchResultsDebounce>
      </SearchContainerDebouncing>
    );
  };
  
  export default SearchDebounce;

  
