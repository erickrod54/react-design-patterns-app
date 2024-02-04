import React from "react";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import UserInfoWithHook from "./user.info.with.hook.component";
import UserInfoWithHookGen from "./user.info.generic.hook.component";
import UserInfoAnyResource from "./user.info.anyresource.hook.component";
import BookInfoAnyResource from "./books.info.anyresource.component";
import UserInfoDataSource from "./user.info.hook.dsource.component";
import { usePatternsAppContext } from "../context";
import BashCode from "./bash.higlight.component";

/**react-design-patterns-app - version 7.04 - CustomHookPattern
 * - Features: 
 * 
 *     --> Adding 'userinfowithhookcode' code 
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
 */

const CustomHookPattern = () => {

    const { CodeData } = usePatternsAppContext();

    const includeupdatableanyresource = CodeData[52].code;
    const userinfowithhookcode = CodeData[53].code;

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
                    following of the hook name with camel case, as follows:
                </p> 

                <BashCode code={includeupdatableanyresource}/>

                <p>
                    so refactoring the previous <span className="text-white font-semibold"> UserInfo </span> in order 
                    to use this hook will be like this:
                </p>

                <BashCode code={userinfowithhookcode}/>

                <p>
                    let's see an example of a fetch data hook:
                </p> 

                <UserInfoWithHook />  

                <p>
                    a more generic version of this hook can take an specific id, and render for example two different 
                    users from a dataset, as follows:
                </p>

                <p>
                    for an user with a userId of 2:         
                </p>

               <UserInfoWithHookGen userId={'2'}/>

                <p>
                    for an user with a userId of 1:         
                </p>

                <UserInfoWithHookGen userId={'1'}/>

                <p>
                    and if want to fetch data from any resource, let's start 
                    with books for this case the record number 2 by using the 
                    path will be like as follows:
                </p>

                <BookInfoAnyResource bookUrl={'/books/2'}/>

                <p>
                    now the first ( record with the id 1 ) record:
                </p>

                <BookInfoAnyResource bookUrl={'/books/1'}/>

                <p>
                    and then by users:
                </p>

                <UserInfoAnyResource />

                <p>
                    there is a variation of this custom hook that can be combine
                    the data source pattern, adding this indepence of the data 
                    source make in it more flexible:  
                </p>

                <p>
                    for an user with a userId of 3:         
                </p>

                <UserInfoDataSource userId={'3'}/>
                    
            </SectionWrapper>
        </div>
    )
}

export default CustomHookPattern;