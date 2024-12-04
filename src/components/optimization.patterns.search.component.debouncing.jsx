import styled from "styled-components";
import { searchMeals } from "../api/api.layer.index";
import React, { useMemo, useState } from "react";

/**react-design-patterns-app - version 49.15 - Search
 * - Features: 
 * 
 *     --> writting  'SearchContainer '  styles
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
      <form>
        <label>Search meals</label>
        <input type="text" value={query} onChange={onChangeQuery} />
      </form>
      <ul>
        {meals?.map((meal) => {
          return <li key={meal.idMeal}>{meal.strMeal}</li>;
        })}
      </ul>
    </SearchContainer>
  );
};

export default Search;