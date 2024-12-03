import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 49.10 - DebouncingExecutions
 * - Features: 
 * 
 *     --> Developing 'Debouncing Executions' Advantages
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

            <p>
                some important <span className="text-white font-semibold"> Advantages </span> are:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Prevents Unnecessary Function Executions </span> ( Ensures that a function runs only once after user stops triggering it, reducing overhead )
                </li>
                <li>
                    <span className="text-white font-semibold"> Optimizes API Requests </span> ( Reduces the number of calls to external services - e.g., search API -, making applications more efficient. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Improves Performance </span> ( Reduces excessive computations, making UI interactions smoother. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Enhances User Experience </span> ( Prevents lag or delays caused by multiple function executions )
                </li>
            </ul>

            </ SectionWrapper>
        </div>
        )

}

export default DebouncingExecutions;
