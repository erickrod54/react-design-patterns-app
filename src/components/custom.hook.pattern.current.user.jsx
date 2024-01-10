import axios from "axios";
import React, { useEffect, useState } from "react";

/**react-design-patterns-app - version 4.11 - useCurrentUser
 * - Features: 
 * 
 *     --> Building 'useCurrentUser'
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
 */

const useCurrentUser = () => {

    const [user, setUser ] = useState()

    useEffect(() => {
        (async () => {
            const response = await axios.get("/current-user")
            setUser(response.data)
        })()
    },[])

    return user;
}

export default useCurrentUser;