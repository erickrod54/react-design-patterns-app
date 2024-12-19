import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";


/**react-design-patterns-app - version 52.03 - FetchingDataWitReactQuery
 * - Features: 
 * 
 *     --> Starting 'DesignSystemCore' 
 * 
 * Note: This is the introduction to design systems
*/

const DesignSystemCore = () => {

    const { CodeData } = usePatternsAppContext();
    

    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="design-system-core"><span > Design System Core </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>
                
                <p>
                    the design and development of robust systems, along wiht cohesive design systems is by understanding and 
                    <span className="text-white font-semibold"> integrating all these 4 pillars </span>
                </p>
            </SectionWrapper>
        </div>
    )
}

export default DesignSystemCore;