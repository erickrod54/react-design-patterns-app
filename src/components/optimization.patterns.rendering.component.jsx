import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";


/**react-design-patterns-app - version 43.20 - RenderingOptimization
 * - Features: 
 * 
 *     --> Starting  'memo and useCallback'     
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

            <p>
            <span className="text-white font-semibold"> Fast Rendering </span>  is part of a rich user experience, in order to achieve this experience 
                it will be covered two patterns:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> memo </span> (  Optimizes React components by memoizing them, preventing unnecessary re-renders if their props haven't changed. )
                </li>
                <li>
                    <span className="text-white font-semibold"> useCallback </span> ( Memoizes a function to maintain its reference between renders, preventing it from being recreated unless dependencies change. )
                </li>
            </ul>

    
            </SectionWrapper>
        </div>
)

}

export default RenderingOptimization;