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

/**react-design-patterns-app - version 9.02 - AdvancedHooks
 * - Features: 
 * 
 *     --> Building 'AdvancedHooks'  
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
 */

const AdvancedHooks = () => {

    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="advanced-hooks-patterns"><span > Advanced Hooks </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>

                <p>
                    this will be a compilation of a wide advanced hooks patterns used to solve a variaty of problems:
                </p>
            </SectionWrapper>
        </div>)

}

export default AdvancedHooks;