import React, { useEffect, useState } from "react"
import { fetchUsers } from "../api/api.users.before"
import { ButtonGeneral, ButtonWrapper, OutsideTable, TableTitleWrapper } from "../styledcomponents/styled.components"
import { withAsync } from "../helpers/with.async";
import { ERROR, PENDING, SUCESS } from "../constants/api.status";

/**react-design-patterns-app - version 20.19 - UsersApiStatesConstants
 * - Features: 
 * 
 *     --> Building 'UsersApiStatesConstants' 
 * 
 * Note: this component will use a helper function
*/

const useFecthUsers = () => {
    const [ users, setUsers ] = useState([])
    const [ fetchUsersStatus, setFetchUsersStatus ] = useState("IDLE")

    const initFetchUsers = async () => {
        setFetchUsersStatus(PENDING);
        console.log("resulting state ==> ", PENDING)
        const { response, error } = await withAsync(() => fetchUsers())

        if (error) {

            setFetchUsersStatus(ERROR)
            console.log("resulting state => ", ERROR)

        }else if (response) {

            setFetchUsersStatus(SUCESS);
            console.log("resulting state => ", SUCESS)
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


const UsersApiStatesConstants = () => {
    const { users, fetchUsersStatus, initFetchUsers, CleanUpUsers } = useFecthUsers();

    useEffect(() => {
        initFetchUsers();
    }, []);

    return(
        <OutsideTable>
           <ButtonWrapper>
                <ButtonGeneral>
                    <button onClick={() => initFetchUsers()}
                        >{fetchUsersStatus === PENDING ? "Loading..." : "Fetch Users"}
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

export default UsersApiStatesConstants;