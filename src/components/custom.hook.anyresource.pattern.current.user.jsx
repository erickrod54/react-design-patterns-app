import axios from "axios";
import { useEffect, useState } from "react";

/**react-design-patterns-app - version 4.12 - useResource
 * - Features: 
 * 
 *     --> Building 'useResource'
 * 
 * Note: an error like this:
 * 
 *      Request failed with status code 404
 *      AxiosError: Request failed with status code 404
 *  
 * can be related with the 'endpoint' path
 */

const useResource = (resourceUrl) => {

    const [resource, setResource ] = useState()

    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl)
            setResource(response.data)
        })()
    },[resourceUrl])

    return resource;
}

export default useResource;