import api from "./api.layer.use.case.meal.search.error.loging";

/**react-design-patterns-app - version 22.08 - searchMealsErrorLogin
 * - Features: 
 * 
 *     --> Building 'searchMealsErrorLogin" Api request 
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

export const searchMealsErrorLogin = (query, config) => {
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