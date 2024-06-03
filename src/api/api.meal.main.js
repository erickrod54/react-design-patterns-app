import apiMealSearch from "./api.layer.use.case.meal.search"


/**react-design-patterns-app - version 22.01 - searchMeals
 * - Features: 
 * 
 *     --> Building 'searchMeals" Api request 
 * 
 * Note: 'URLS' will hold the name of the resource 
 * i want to get for this case will be 'users'
 * 
 *'fetchUsers' will hold the baseUrl from the 
 * from the remote API from 'typicode.com'  
*/

const URLS = {
    fetchMeal: "search.php"
}

export const searchMeals = () => {
    return apiMealSearch.get(
        URLS.fetchMeal, {
            baseURL:"https://www.themealdb.com/api/json/v1/1/",
            params:{
                s: query
            },
            ...config
        }
    )
    .then((res) => res.data.meals)
}