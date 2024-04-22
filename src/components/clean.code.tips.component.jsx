import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import BashCode from "./bash.higlight.component";

/**react-design-patterns-app - version 16.19 - CleanCodeTips
 * - Features: 
 * 
 *     --> Adding 'buttonascleancodepatterncode' code
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const CleanCodeTips = () => {
    
    const { CodeData } = usePatternsAppContext();
    
    const buttonascleancodepatterncode = CodeData[114].code;
    
    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="clean-code-tips"><span > Clean Code Tips </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>
                <p>
                    clean code practices are essential in order to make code <span className="text-white font-semibold"> readable and rehusable </span>,
                    here i will cover some practices that make easier to achieve clean code: 
                </p>

                <ul className="list-white-space">
                    <li>
                        <span className="text-white font-semibold"> 'As' Prop </span> ( the use of As prop in order to access component properties )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> Context API Optimization </span> ( this is related with components access valitions, logic separations, and state and actions managing by usage )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> useEffect </span> ( a look into useEffect use cases and posible problems due to overuse )
                    </li>
                </ul>

                <CustomTitleStyle>
                    <CustomTitle  title={<p className="as-prop-clean-code-tip"><span > 'As' Prop </span></p>} />
                </CustomTitleStyle>

                <p>
                    let's say i have a component with different kinds of buttons, and i use a pattern <span className="text-white font-semibold"> ButtonAsCleanCode </span>
                    as follows:
                </p>

                <BashCode code={buttonascleancodepatterncode}/>

               

            </SectionWrapper>


        </div>
    )

}

export default CleanCodeTips;

