import React from "react";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";

/**react-design-patterns-app - version 4.04 - ControlledUnControlledPattern
 * - Features: 
 * 
 *     --> Building 'ControlledUnControlledPattern' component.
 * 
 * Note: this component will explain concepts of controlled and 
 * uncontrolled pattern
 */

const ControlledUnControlledPattern = () => {

    return(
        <div>
        <CustomTitleStyle>
                <CustomTitle  title={<p className="controlled-uncontrolled-pattern"><span >controlled uncontrolled pattern</span></p>} />
        </CustomTitleStyle>

        <SectionWrapper>
            
        </SectionWrapper>
        </div>
    )
}

export default ControlledUnControlledPattern;