import React, { useEffect, useState } from "react"
import { fetchUsers } from "../api/api.users.before"
import { ButtonGeneral, ButtonWrapper, OutsideTable, TableTitleWrapper } from "../styledcomponents/styled.components"

/**react-design-patterns-app - version 20.15 - UsersApiStates
 * - Features: 
 * 
 *     --> Building 'UsersApiStates' 
 * 
 * Note: 'UsersApi' will render the users information
 * from an API  
*/

const ApiStatus = "IDLE" | "PENDING" | "SUCESS" | "ERROR";

const useFecthUsers = () => {
    const [ users, setUsers ] = useState([])
    const [ fetchUsersStatus, setFetchUsersStatus ] = useState("IDLE")

    const initFetchUsers = async () => {
        try {
            setFetchUsersStatus("PENDING");
           const response = await fetchUsers();
           setFetchUsersStatus("SUCESS");
           setUsers(response.data); 
        } catch (err) {
            setFetchUsersStatus("ERROR")
        }
    };

    const CleanUpUsers = () => {
        return setUsers([])
    }

    return {
        users,
        fetchUsersStatus,
        initFetchUsers,
        CleanUpUsers
    }
}


const UsersApiStates = () => {
    const { users, fetchUsersStatus, initFetchUsers, CleanUpUsers } = useFecthUsers();

    useEffect(() => {
        initFetchUsers();
    }, []);

    return(
        <OutsideTable>
           <ButtonWrapper>
                <ButtonGeneral>
                    <button onClick={() => initFetchUsers()}
                        >{fetchUsersStatus === "PENDING" ? "Loading..." : "Fetch Users"}
                    </button>    
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

export default UsersApiStates;