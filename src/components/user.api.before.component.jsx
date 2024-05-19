import React, { useEffect, useState } from "react"
import { fetchUsers } from "../api/api.users.before"
import { ButtonWrapper, OutsideTable, TableTitleWrapper } from "../styledcomponents/styled.components"

/**react-design-patterns-app - version 20.10 - UsersApi
 * - Features: 
 * 
 *     --> Wrapping using 'ButtonWrapper' 
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
           <ButtonWrapper>
                <button onClick={() => initFetchUsers()}>Fetch Users</button>    
            </ButtonWrapper> 
        <TableTitleWrapper>
            <label>name:</label>
            <label>email:</label>
        </TableTitleWrapper>
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