import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";

 
/**react-design-patterns-app - version 40.07 - LazyAndCodeSplittingPerformance
 * - Features: 
 * 
 *     --> Adding Lazy and code splitting and lazy loading goal     
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

            <p>
                The main goal is how to optimize a React applications by implementing <span className="text-white font-semibold"> code splitting and lazy loading </span> 
                to improve <span className="text-white font-semibold"> loading performance. </span> These techniques can help by loading only the <span className="text-white font-semibold"> 
                code that is necessary </span> for the current page, <span className="text-white font-semibold"> instead of downloading the entire application bundle upfront</span> ,
                 which can be inefficient and slow down the initial page load.
            </p>

            </SectionWrapper>

        </div>
    )
}

export default LazyAndCodeSplittingPerformance;