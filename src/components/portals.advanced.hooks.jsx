import React from "react";
import CustomTitle from "./custom.title.component";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 5.16 - PortalsAdvHooks
 * - Features: 
 * 
 *     --> Developing 'Portals' concepts 
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
 */

const PortalsAdvHooks = () => {

    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="advanced-hooks-portals"><span >Portals </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>

            
            </SectionWrapper>
        </div>
    )
}

export default PortalsAdvHooks;