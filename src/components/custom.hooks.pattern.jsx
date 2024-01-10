import React from "react";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import UserInfoWithHook from "./user.info.with.hook.component";


/**react-design-patterns-app - version 4.11 - CustomHookPattern
 * - Features: 
 * 
 *     --> Building 'CustomHookPattern'
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
 */

const CustomHookPattern = () => {

    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="custom-hook-pattern"><span >Custom Hooks Pattern </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>
                <p>
                    customs hooks is a design pattern that <span className="text-white font-semibold"> combines 
                    multiple React built-in hooks </span> like <span className="text-white font-semibold"> 
                    useSate or useEffect and many more </span> depending on the use case to create tailored 
                    <span className="text-white font-semibold">  rehusable hooks </span> for specific 
                    functionalities
                </p>

                <p>
                    so the core goal of this design pattern is to <span className="text-white font-semibold"> encapsulate 
                    the logic to use across multiple components </span>, this allows to extract complex behavior into 
                    <span className="text-white font-semibold"> rehusable units </span>, an example can be
                     a custom hook that combines useState and useEffect to fetch an user information from a server 
                     and render it
                </p>

                <p>
                    a custom hooks must start with the word <span className="text-white font-semibold"> 'use' </span> 
                    following of the hook name with camel case
                </p> 

                <p>
                    let's see an example of a fetch data hook:
                </p> 

                <UserInfoWithHook />  

            </SectionWrapper>
        </div>
    )
}

export default CustomHookPattern;