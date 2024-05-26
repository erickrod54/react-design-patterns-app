/**react-design-patterns-app - version 21.04 - constants array 
 * - Features: 
 * 
 *     --> Building 'defaultApiStatus' 
 * 
 * Note: this component will use a helper function
*/

export const IDLE = "IDLE";
export const PENDING = "PENDING";
export const SUCESS = "SUCESS";
export const ERROR = "ERROR";

/**from the previous individual states to  'defaultApiStatus' */
export const defaultApiStatuses = ["IDLE", "PENDING", "SUCESS", "ERROR"]

export const apiStatus = {
    IDLE,
    PENDING,
    SUCESS,
    ERROR
}