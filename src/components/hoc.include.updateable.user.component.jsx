import { useEffect, useState } from "react";
import axios from "axios";

/**react-design-patterns-app - version 4.10 - includeUpdatableUser 
 * - Features: 
 * 
 *     --> Building 'includeUpdatableUser'.
 * 
 * Note: taking as base code 'includeUser' with few modifications 
 * 'includeUpdatableUser' will get and update ( post ) a single 
 * user based in two props:
 * 
 *      --> 'Component' - (the component that will be create it).
 * 
 *      --> 'UserId' - (the userId of the specific dataset).
 * 
 */

const includeUpdatableUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);
    const [updatableUser, setUpdatableUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
        setUpdatableUser(response.data);
      })();
    }, []);

    const userChangeHandler = (updates) => {
      setUpdatableUser({ ...updatableUser, ...updates });
    };

    const userPostHandler = async () => {
      const response = await axios.post(`/users/${userId}`, {
        user: updatableUser,
      });
      setUser(response.data);
      setUpdatableUser(response.data);
    };

    const resetUserHandler = () => {
      setUpdatableUser(user);
    };

    return (
      <Component
        {...props}
        updatableUser={updatableUser}
        changeHandler={userChangeHandler}
        userPostHandler={userPostHandler}
        resetUserHandler={resetUserHandler}
      />
    );
  };
};

export default includeUpdatableUser;