import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 49.09 - DebouncingExecutions
 * - Features: 
 * 
 *     --> Developing 'Debouncing Executions'
 *
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const DebouncingExecutions = () => {

    const { CodeData } = usePatternsAppContext();
    
    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="debouncing-executions"><span > Debouncing Executions </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper> 
                <p>
                    The main goal of implementing <span className="text-white font-semibold"> debouncing </span> is to optimize performance and reduce 
                    <span className="text-white font-semibold"> unnecessary function executions when handling high-frequency events </span>, such as user 
                     ensuring that the functions runs only after a specified time duration (e.g., 500ms).
                </p>

            </ SectionWrapper>
        </div>
        )

}

export default DebouncingExecutions;
