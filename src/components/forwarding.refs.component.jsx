import React from "react";
import CustomTitle from "./custom.title.component";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import BashCode from "./bash.higlight.component";
import { usePatternsAppContext } from "../context";
import { ForwardingHookRefForm, ForwardingRefForm } from "./index.components";

/**react-design-patterns-app - version 8.06 - ForwardingRefs 
 * - Features: 
 * 
 *     --> Rendering 'ForwardingHookRefForm' code 
 * 
 * Note: 'UserInfoFormAnyResource' taking as base code the
 * 'UserInfoForm', with few modifications can render any 
 * resource given
 * 
 */

const ForwardingRefs = () => {

    const { CodeData } = usePatternsAppContext();

    const forwardingrefformcode = CodeData[62].code;
    const forwardingrefinputcode = CodeData[63].code;
    const ingrefinputcode = CodeData[64].code;
    const useforwardrefs = CodeData[65].code;
    const forwardinghookrefformcode = CodeData[66].code;

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

            <p>
                resulting in: <span className="text-white font-semibold"> ( values will be accesed in the console ) </span>
            </p>

            <ForwardingRefForm />

            <p>
                so let's say from the code above i have the input as a separate custom component, extracting this logic:
            </p>

            <BashCode  code={forwardingrefinputcode} />

            <p>
                resulting in a custom component <span className="text-white font-semibold"> IngRefInput </span>, as follows:
            </p>

            <BashCode  code={ingrefinputcode} />

            <p>
                so in order to use the <span className="text-white font-semibold"> Refs </span> in this custom component
                <span className="text-white font-semibold"> IngRefInput </span>, i use the hook, as follows: 
            </p>

            <BashCode  code={useforwardrefs} />

            <p>
                so let make the refactor of the previous form <span className="text-white font-semibold"> ForwardingRefForm </span>  
                to use refs through a custom component <span className="text-white font-semibold"> ForwardingRefInput ( previously 
                an input tag ) </span> resulting in the new form <span className="text-white font-semibold"> ForwardingHookRefForm </span>
                as follows:
            </p>

            <BashCode  code={forwardinghookrefformcode} />

            <p>
                and rendering this form <span className="text-white font-semibold"> ForwardingHookRefForm </span> will result 
                as follows:
            </p>

            <ForwardingHookRefForm />

            <p>
                so by <span className="text-white font-semibold"> accessing for values directly simplifying form handling logic </span> 
                it open a lot of opportinuties to handle inside of <span className="text-white font-semibold"> IngRefInput </span> for 
                example <span className="text-white font-semibold"> adding validations easily, or concerns separations, or managing data 
                </span> that is being accessed and all of these opportunities <span className="text-white font-semibold"> once implemented 
                won't affect the innner logic of the original component </span>, because the <span className="text-white font-semibold"> 
                form </span> is in a <span className="text-white font-semibold"> scope </span>, and the <span className="text-white font-semibold"> 
                input </span> is receiving the <span className="text-white font-semibold"> ref </span> in a <span className="text-white font-semibold"> 
                different scope </span> 
            </p>

        </SectionWrapper>
        
        </div>
    )
}

export default ForwardingRefs