import React, { useEffect, useState } from "react"
import { fetchUsers } from "../api/api.users.before"

/**react-design-patterns-app - version 19.22 - UsersApi
 * - Features: 
 * 
 *     --> Building 'UsersApi' Component 
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
        <section>
        <button onClick={() => initFetchUsers()}>Fetch Users</button>    
        {users.map((user) => {
            const { name, id, email } = user;
            return(
                <div key={id}>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            )
        })}
        </section>
    )
}

export default UsersApi;