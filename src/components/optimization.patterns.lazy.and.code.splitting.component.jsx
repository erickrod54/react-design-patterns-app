import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";

 
/**react-design-patterns-app - version 40.06 - LazyAndCodeSplittingPerformance
 * - Features: 
 * 
 *     --> Starting Lazy and Code Splitting Optimization     
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const LazyAndCodeSplittingPerformance = () => {

    const { CodeData } = usePatternsAppContext();
    
    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="lazy-and-code-splitting-performance"><span > Lazy and Code Splitting Optimization </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>

            </SectionWrapper>

        </div>
    )
}

export default LazyAndCodeSplittingPerformance;