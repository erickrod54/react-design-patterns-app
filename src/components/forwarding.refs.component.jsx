import React from "react";
import CustomTitle from "./custom.title.component";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import BashCode from "./bash.higlight.component";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 7.19 - ForwardingRefs 
 * - Features: 
 * 
 *     --> Developing 'ForwardingRefs' example. 
 * 
 * Note: 'UserInfoFormAnyResource' taking as base code the
 * 'UserInfoForm', with few modifications can render any 
 * resource given
 * 
 */

const ForwardingRefs = () => {

    const { CodeData } = usePatternsAppContext();

    const forwardingrefformcode = CodeData[62].code;

    return(
        <div>
        <CustomTitleStyle>
                    <CustomTitle  title={<p className="forwarding-refs"><span >Forwarding Refs</span></p>} />
        </CustomTitleStyle>

        <SectionWrapper>
            <p>
            <span className="text-white font-semibold">references or Refs </span> is widely use in react in order to provide multiple solutions related with 
                <span className="text-white font-semibold"> access DOM elements, integrating third 
                party libraries, managing form data ( about the example for this section ), dynamic 
                content updates, optimizing performance, working with legacy code </span> 
            </p>

            <p>
                in this case let focus on <span className="text-white font-semibold"> managing form data </span>, 
                this is made in order to achieve multiple goals for example to handle <span className="text-white font-semibold"> 
                user input, or performing form validation or simply to acces for values directly simplifying form handling logic 
                 ( about this example of data managing ) </span>
            </p>

            <p>
                so i have the following <span className="text-white font-semibold"> form </span> in a react component, and i am 
                <span className="text-white font-semibold"> accessing </span> to the <span className="text-white font-semibold"> 
                user input </span> using a <span className="text-white font-semibold"> useRef hook </span> form directly in 
                this component:
            </p>

            <BashCode  code={forwardingrefformcode} />

        </SectionWrapper>
        
        </div>
    )
}

export default ForwardingRefs