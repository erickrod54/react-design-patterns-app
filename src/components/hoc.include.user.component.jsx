import axios from "axios";
import { useEffect, useState } from "react";

/**react-design-patterns-app - version 4.10 - includeUser 
 * - Features: 
 * 
 *     --> Building 'includeUser'.
 * 
 * Note: 'includeUser' will create a single user based in two
 * props:
 * 
 *      --> 'Component' - (the component that will be create it).
 * 
 *      --> 'UserId' - (the userId of the specific dataset).
 * 
 */

const includeUser = (Component, UserId ) => {

    return props => {
        const [user, setUser ] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${UserId}`)
                setUser(response.data)
            })()
        }, [])
        
        return <Component {...props} user={user}/>
    };

};

export default includeUser;