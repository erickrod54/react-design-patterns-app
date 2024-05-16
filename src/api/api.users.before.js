import apiLayerAsyncOperationsBefore from "./api.layer.async.operations.before"

/**react-design-patterns-app - version 19.22 - fetchUsers
 * - Features: 
 * 
 *     --> Building 'URLS' object
 *  
 *     --> Building 'fetchUsers' object 
 * 
 * Note: 'URLS' will hold the name of the resource 
 * i want to get for this case will be 'users'
 * 
 *'fetchUsers' will hold the baseUrl from the 
 * from the remote API from 'typicode.com'  
*/

const URLS = {
    fetchUsersUrl: "users"
}

export const fetchUsers = () => {
    return apiLayerAsyncOperationsBefore.get(
        URLS.fetchUsersUrl, {
            baseURL:"https://jsonplaceholder.typicode.com/"
        }
    )
}