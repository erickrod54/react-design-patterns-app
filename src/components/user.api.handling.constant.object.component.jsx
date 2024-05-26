import React, { useEffect, useState } from "react"
import { fetchUsers } from "../api/api.users.before"
import { ButtonGeneral, ButtonWrapper, OutsideTable, TableTitleWrapper } from "../styledcomponents/styled.components"
import { withAsync } from "../helpers/with.async";
import { apiStatus } from "../constants/api.status.object";

/**react-design-patterns-app - version 21.04 - UsersApiStatesObject
 * - Features: 
 * 
 *     --> Building 'UsersApiStatesObject' 
 * 
 * Note: this component will use a helper function
*/

const useFecthUsers = () => {
    const [ users, setUsers ] = useState([])
    const [ fetchUsersStatus, setFetchUsersStatus ] = useState(apiStatus.IDLE)

    const initFetchUsers = async () => {
        setFetchUsersStatus(apiStatus.PENDING);
        console.log("resulting state ==> ", apiStatus.PENDING)
        const { response, error } = await withAsync(() => fetchUsers())

        if (error) {

            setFetchUsersStatus(apiStatus.ERROR)
            console.log("resulting state => ", apiStatus.ERROR)

        }else if (response) {

            setFetchUsersStatus(apiStatus.SUCESS);
            console.log("resulting state => ", apiStatus.SUCESS)
            setUsers(response); 
            
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


const UsersApiStatesObject = () => {
    const { users, fetchUsersStatus, initFetchUsers, CleanUpUsers } = useFecthUsers();

    useEffect(() => {
        initFetchUsers();
    }, []);

    return(
        <OutsideTable>
           <ButtonWrapper>
                <ButtonGeneral>
                    <button onClick={() => initFetchUsers()}
                        >{fetchUsersStatus === apiStatus.PENDING ? "Loading..." : "Fetch Users"}
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

export default UsersApiStatesObject;