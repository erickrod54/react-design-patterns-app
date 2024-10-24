import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";


/**react-design-patterns-app - version 43.03 - RenderingOptimization
 * - Features: 
 * 
 *     --> Building 'RenderingOptimization'     
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const RenderingOptimization = () => {

    const { CodeData } = usePatternsAppContext();
    
    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="rendering-optimization"><span > Rendering Optimization </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>

    

            </SectionWrapper>
        </div>
)

}

export default RenderingOptimization;