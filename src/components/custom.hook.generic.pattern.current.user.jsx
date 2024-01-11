import axios from "axios";
import React, { useEffect, useState } from "react";

/**react-design-patterns-app - version 4.12 - useUser
 * - Features: 
 * 
 *     --> Building 'useUser'
 * 
 * Note: an error like this:
 * 
 *      Request failed with status code 404
 *      AxiosError: Request failed with status code 404
 *  
 * can be related with the 'endpoint' path
 */

const useUser = (userId) => {

    const [user, setUser ] = useState()

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`)
            setUser(response.data)
        })()
    },[userId])

    return user;
}

export default useUser;