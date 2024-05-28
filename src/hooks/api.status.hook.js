import { useMemo, useState } from "react";
import { defaultApiStatuses } from "../constants/index.constants";
import { IDLE } from "../constants/api.status";


/**react-design-patterns-app - version 21.07 - api.status.hook
 * - Features: 
 * 
 *     --> Building 'prepareStatuses' 
 * 
 * Note: this component will use a helper function
*/

/**Error => error  will be Error => isError*/
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/**here will be calculated the current status */
const prepareStatuses =  ( currentStatus ) => {
    const statuses = {};
    for ( const status of defaultApiStatuses ) {
        /**this line creates the state as this shape Error */
        const normalizedStatus = capitalize(status.toLowerCase());
        /**the line below creates the state as this shape isError */
        const normalizedStatusKey = `is${normalizedStatus}`;
        /**this line compares to get the resulting status */
        statuses[normalizedStatusKey] = status === currentStatus;
    }

    return statuses;
}

/**then the calculation get memoized, so the calculation does not 
 * afect the app performance */

/**i define 'IDLE'  as a constant initial param*/
export const useApiStatus = (currentStatus = IDLE ) => {
    const [ status, setStatus ] = useState(currentStatus);
    const statuses = useMemo(() => prepareStatuses(status), [status])

    return{
        status,
        setStatus,
        ...statuses,
    }
}