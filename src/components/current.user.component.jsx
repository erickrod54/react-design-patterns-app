import axios from "axios";
import React, { useEffect, useState } from "react";

/**react-design-patterns-app - version 3.16 - CurrentUser 
 * - Features: 
 * 
 *     --> Adding comments to the 'useEffect' handler
 * 
 * Note: the porpuse iod this component is to be the source
 * of data to multiple 'user' and 'books', and this
 * 
 * the use of this pattern covers:
 * 
 *      --> useEffect ( is going to received data once 
 *                     the component mounts )
 *      
 *      --> useState ( is going to mutate the data from 
 *                      null to the data received )
 * 
 */

const CurrentUser = ({ children }) => {
    
    const [ user, setUser ] = useState(null)

    /**is handling on mount the data mutation */
    useEffect(() => {
        (async () => {
            const response = await axios.get("/current-user");
            setUser(response.data)
        })();
    }, [])

    return(
        <>
        {/**React.Children.map() to iterate over each child passed to the component.
         * once verified is valid react elemnent provide the 'user' data source
         */}
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { user });
          }
          return child;
        })}
      </>
    )
}

export default CurrentUser;