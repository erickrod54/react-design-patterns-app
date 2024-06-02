import React, { useEffect, useState } from "react"
import { fetchUsers } from "../api/api.users.before"
import { ButtonGeneral, ButtonWrapper, OutsideTable, TableTitleWrapper } from "../styledcomponents/styled.components"
import { withAsync } from "../helpers/with.async";
import { apiStatus } from "../constants/api.status.object.js";
import { useApi, useApiStatus } from "../hooks/index.hooks";
import { LazyLoader } from "./index.components.js";
import { use } from "react";

/**react-design-patterns-app - version 22.00 - UsersApiHookLogicAndDataAbs
 * - Features: 
 * 
 *     --> Building 'UsersApiHookLogicAndDataAbs' 
 * 
 * Note: this component will use a helper function
*/

const useFetchUsers = () => {

    const {
        data: users,
        exec: initFetchUsers,
        status: fetchUsersStatus,
        isIdle: isFetchUsersStatusIdle,
        isPending: isFetchUsersStatusPending,
        isError: isFetchUsersStatusError,
        isSuccess: isFetchUsersStatusSuccess,
      } = useApi(() => fetchUsers().then((response) => response.data));

    return {
        users,
        isFetchUsersStatusIdle,
        isFetchUsersStatusPending,
        isFetchUsersStatusError,
        isFetchUsersStatusSuccess,
        initFetchUsers
    }
}


const UsersApiHookLogicAndDataAbs = () => {

    const {
        users,
        initFetchUsers,
        isFetchUsersStatusError,
        isFetchUsersStatusIdle,
        isFetchUsersStatusPending,
        isFetchUsersStatusSuccess } = useFetchUsers();

        useEffect(() => {
            initFetchUsers();
            console.log("resulting users ==> ", users)
        }, []);
    
        return(
            <OutsideTable>
           <ButtonWrapper>
                <ButtonGeneral>
                    <button onClick={() => initFetchUsers() && console.log("fetching users...")}
                        > 
                        {/**instead of the condition the LazyLoader with the props to data flow control */}
                        <LazyLoader show={isFetchUsersStatusPending} delay={500} default="Fetch Users"/>
                    </button>    
                </ButtonGeneral>
            </ButtonWrapper> 
        <TableTitleWrapper>
            <label>name:</label>
            <label>email:</label>
        </TableTitleWrapper>
        {
            users && users.map((user) => {
                const { name, id, email } = user;
                
                return (
                    <ul key={id}>
                        <li>{name}</li>
                        <li>{email}</li>
                    </ul>
                )
            })
        }
        </OutsideTable>
    )
}

export default UsersApiHookLogicAndDataAbs;
