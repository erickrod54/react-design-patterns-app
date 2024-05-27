import React, { useEffect, useState } from "react"
import { fetchUsers } from "../api/api.users.before"
import { ButtonGeneral, ButtonWrapper, OutsideTable, TableTitleWrapper } from "../styledcomponents/styled.components"
import { withAsync } from "../helpers/with.async";
import { apiStatus } from "../constants/api.status.object.js";
import { useApiStatus } from "../hooks/index.hooks";

/**react-design-patterns-app - version 21.07 - UsersApiStatesHookAndObject
 * - Features: 
 * 
 *     --> Building 'UsersApiStatesHookAndObject' 
 * 
 * Note: this component will use a helper function
*/

const useFetchUsers = () => {
    const [ users, setUsers ] = useState([])
    
    const {
        status: fetchUsersStatus,
        setStatus: setFetchUsersStatus,
        isIdle:isFetchUsersStatusIdle,
        isPending: isFetchUsersStatusPending,
        isError: isFetchUsersStatusError,
        isSuccess: isFetchUsersStatusSUCCESS,
    } = useApiStatus(apiStatus.IDLE);

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
        isFetchUsersStatusIdle,
        isFetchUsersStatusPending,
        isFetchUsersStatusError,
        isFetchUsersStatusSUCCESS,
        initFetchUsers,
        CleanUpUsers
    }
}


const UsersApiStatesHookAndObject = () => {
    const { users,
            initFetchUsers,
            isFetchUsersStatusError,
            isFetchUsersStatusIdle,
            isFetchUsersStatusPending,
            isFetchUsersStatusSUCCESS,
            CleanUpUsers } = useFetchUsers();

    useEffect(() => {
        initFetchUsers();
    }, []);

    return(
        <OutsideTable>
           <ButtonWrapper>
                <ButtonGeneral>
                    <button onClick={() => initFetchUsers()}
                        >{isFetchUsersStatusIdle ? "Loading..." : "Fetch Users"}
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

export default UsersApiStatesHookAndObject;