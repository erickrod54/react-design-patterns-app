import axios from "axios";
import React, { useEffect, useState } from "react";

/**react-design-patterns-app - version 3.16 - ContainerDataSource 
 * - Features: 
 * 
 *     --> Building 'ContainerDataSource' pattern.
 * 
 * Note: 'ContainerDataSource' its an even more custom version
 * of 'container.generic.component', making this component unware
 * of the 'axios call' ( so at this point the data source can be customize 
 * independently of the behavior of the source component ) by 
 * the following:
 * 
 *      --> getting a prop 'getData' that will handle the data.
 * 
 */

const ContainerDataSource = ({ getData = () => {}, resourceName, children }) => {
    
    const [ resource, setResource ] = useState(null)

    useEffect(() => {
        (async () => {
            const data = await getData()
            setResource(data)
        })();
    }, [getData])

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

export default ContainerDataSource;