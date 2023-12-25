import React from "react";
import { CustomTitle } from "./index.components";

/**react-design-patterns-app - version 3.07 - ContainerPattern
 * - Features: 
 * 
 *     --> Building basic 'CustomTitle'
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */

const ContainerPattern = () => {

    return(
        <CustomTitle  title={<span className="container-pattern">Container Pattern</span>} />
    )
}

export default ContainerPattern;