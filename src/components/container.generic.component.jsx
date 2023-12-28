import axios from "axios";
import React, { useEffect, useState } from "react";

/**react-design-patterns-app - version 3.14 - ContainerGeneric 
 * - Features: 
 * 
 *     --> Building 'ContainerGeneric' pattern.
 * 
 * Note: this container generic is based on 'CurrentUser'
 * component, but will render any user or book ( or any
 * resource name ) given, by catching 3 parameters:
 * 
 * the use of this pattern covers:
 * 
 *      --> resourceUrl ( will handle the data source endpoint )
 *      
 *      --> resourceUrlName ( will hanlder the data source name )
 * 
 *      --> children ( will manage the child component ) 
 * 
 */

const ContainerGeneric = ({ resourceUrl, resourceName, children }) => {
    
    const [ resource, setResource ] = useState(null)

    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl);
            setResource(response.data)
        })();
    }, [resourceUrl])

    return(
        <>
        {/**React.Children.map() to iterate over each child passed to the component.
         * once verified is valid react elemnent provide the 'user' data source
         */}
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { [resourceName]: resource });
          }
          return child;
        })}
      </>
    )
}

export default ContainerGeneric;