import React from "react";
import { CustomTitle } from "./index.components";
import { CustomTitleStyle } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 3.08 - ContainerPattern
 * - Features: 
 * 
 *     --> Importing 'CustomTitleStyle'
 * 
 *     --> Adding 'container-pattern"' class
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */

const ContainerPattern = () => {

    return(
        <CustomTitleStyle>
            <CustomTitle  title={<p className="container-pattern"><span >Container Pattern</span></p>} />
        </CustomTitleStyle>
    )
}

export default ContainerPattern;