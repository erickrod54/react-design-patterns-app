import React from "react";
import CustomTitle from "./custom.title.component";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 7.18 - ForwardingRefs 
 * - Features: 
 * 
 *     --> Building 'ForwardingRefs' component. 
 * 
 * Note: 'UserInfoFormAnyResource' taking as base code the
 * 'UserInfoForm', with few modifications can render any 
 * resource given
 * 
 */

const ForwardingRefs = () => {

    return(
        <div>
        <CustomTitleStyle>
                    <CustomTitle  title={<p className="forwarding-refs"><span >Forwarding Refs</span></p>} />
        </CustomTitleStyle>

        <SectionWrapper>

        </SectionWrapper>
        
        </div>
    )
}

export default ForwardingRefs