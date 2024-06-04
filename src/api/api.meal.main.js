import api from "./api.layer.use.case.meal.search";

/**react-design-patterns-app - version 22.02 - searchMeals
 * - Features: 
 * 
 *     --> Refactoring 'searchMeals" Api request 
 * 
 * Note: 'URLS' will hold the name of the resource 
 * i want to get for this case will be 'users'
 * 
 *'fetchUsers' will hold the baseUrl from the 
 * from the remote API from 'typicode.com'  
*/

const URLS = {
  getMeal: "search.php",
};

export const searchMeals = (query, config) => {
  return api
    .get(URLS.getMeal, {
      baseURL: "https://www.themealdb.com/api/json/v1/1/",
      params: {
        s: query,
      },
      ...config,
    })
    .then((res) => res.data.meals);
};