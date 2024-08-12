import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 31.12 - StateManagementPatterns
 * - Features: 
 * 
 *     --> Building 'StateManagementPatterns' 
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const StateManagementPatterns = () => {

    const { CodeData } = usePatternsAppContext();
    
    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="state-management-patterns"><span > State Management Patterns </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>

            <p>
                Before approaching the <span className="text-white font-semibold"> State management Patterns </span>, lets dive in a 
                important Concept in React that its <span className="text-white font-semibold"> Immutability Paradigm </span> where 
                data structures are <span className="text-white font-semibold"> not directly modified </span>, instead of 
                altering the original object a new object is created with the desired changes.
            </p>


            </SectionWrapper>
        </div>
    )
}

export default StateManagementPatterns;