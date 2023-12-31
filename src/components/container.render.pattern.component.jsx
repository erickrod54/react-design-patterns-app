import axios from "axios";
import React, { useEffect, useState } from "react";

/**react-design-patterns-app - version 3.16 - ContainerRender
 * - Features: 
 * 
 *     --> Building 'ContainerRender' pattern.
 * 
 * Note: the container 'ContainerRender' pattern is a variation
 * of the ContainerDataSource, that use the render prop to pass 
 * the end component and his props, this variation has technical 
 * reasons
 * 
 */

const ContainerRender = ({ getData = () => {}, render }) => {
    
    const [ resource, setResource ] = useState(null)

    useEffect(() => {
        (async () => {
            const data = await getData()
            setResource(data)
        })();
    }, [getData])

    return render(resource);
}

export default ContainerRender;