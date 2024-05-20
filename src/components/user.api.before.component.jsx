import React, { useEffect, useState } from "react"
import { fetchUsers } from "../api/api.users.before"
import { ButtonGeneral, ButtonWrapper, OutsideTable, TableTitleWrapper } from "../styledcomponents/styled.components"

/**react-design-patterns-app - version 20.13 - UsersApi
 * - Features: 
 * 
 *     --> Destructring and using 'CleanUpUsers' 
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

    const CleanUpUsers = () => {
        return setUsers([])
    }

    return {
        users,
        initFetchUsers,
        CleanUpUsers
    }
}

const UsersApi = () => {
    const { users, initFetchUsers, CleanUpUsers } = useFecthUsers();

    useEffect(() => {
        initFetchUsers();
    }, []);

    return(
        <OutsideTable>
           <ButtonWrapper>
                <ButtonGeneral>
                    <button onClick={() => initFetchUsers()}>Fetch Users</button>    
                </ButtonGeneral>
                <ButtonGeneral>
                    <button onClick={() => CleanUpUsers()}>Clean Up Users</button>    
                </ButtonGeneral>
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