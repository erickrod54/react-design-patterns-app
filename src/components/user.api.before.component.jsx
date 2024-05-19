import React, { useEffect, useState } from "react"
import { fetchUsers } from "../api/api.users.before"
import { OutsideTable } from "../styledcomponents/styled.components"

/**react-design-patterns-app - version 20.07 - UsersApi
 * - Features: 
 * 
 *     --> Wrapping using 'OutsideTable' 
 * 
 * Note: 'UsersApi' will render the users information
 * from an API  
*/

const useFecthUsers = () => {
    const [ users, setUsers ] = useState([])

    const initFetchUsers = async () => {
        const response = await fetchUsers()
        setUsers(response.data)
    };

    return {
        users,
        initFetchUsers
    }
}

const UsersApi = () => {
    const { users, initFetchUsers } = useFecthUsers();

    useEffect(() => {
        initFetchUsers();
    }, []);

    return(
        <OutsideTable>
        <button onClick={() => initFetchUsers()}>Fetch Users</button>    
        {users.map((user) => {
            const { name, id, email } = user;
            return( 
                <ul key={id}>
                    <li>
                        {name}  
                    </li>
                    <li>
                        {email} 
                    </li>
                 </ul>
            )
        })}
        </OutsideTable>
    )
}

export default UsersApi;