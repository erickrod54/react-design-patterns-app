import axios from "axios";
import { useEffect, useState } from "react";

/**react-design-patterns-app - version 4.12 - useDataSource
 * - Features: 
 * 
 *     --> Building 'useDataSource'
 * 
 * Note: an error like this:
 * 
 *      Request failed with status code 404
 *      AxiosError: Request failed with status code 404
 *  
 * can be related with the 'endpoint' path
 */

const useDataSource = (getData) => {

    const [resource, setResource ] = useState()

    useEffect(() => {
        (async () => {
            const data = await getData();
            setResource(data)
        })()
    },[getData])

    return resource;
}

export default useDataSource;