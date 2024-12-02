import { searchMeals } from "../api/api.layer.index";
import React, { useMemo, useState } from "react";

/**react-design-patterns-app - version 49.09 - Search
 * - Features: 
 * 
 *     --> Building  'Search ' 
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

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
    <div>
      <form>
        <label>Search meals</label>
        <input type="text" value={query} onChange={onChangeQuery} />
      </form>
      <ul>
        {meals?.map((meal) => {
          return <li key={meal.idMeal}>{meal.strMeal}</li>;
        })}
      </ul>
    </div>
  );
};

export default Search;