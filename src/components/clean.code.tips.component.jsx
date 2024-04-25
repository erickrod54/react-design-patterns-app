import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import BashCode from "./bash.higlight.component";
import ButtonAsCleanCodeApp from "./buttons.as.clean.code.tip.app.component";
import ButtonAsCleanCodeAppAfter from "./buttons.as.clean.code.tip.after.app.component";


/**react-design-patterns-app - version 17.06 - CleanCodeTips
 * - Features: 
 * 
 *     --> Rendering 'buttonascleancodeappafterwrapcode' Compoennt
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const CleanCodeTips = () => {
    
    const { CodeData } = usePatternsAppContext();
    
    const buttonascleancodepatterncode = CodeData[114].code;
    const modulecsscode = CodeData[115].code;
    const buttonascleancodeappcode = CodeData[116].code;
    const buttonascleanCodeappaftercode = CodeData[117].code;
    const buttonascleancodeappafterwrapcode = CodeData[118].code;
    
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

                <p>
                    the styles for this pattern will be in a <span className="text-white font-semibold"> module css file </span> as 
                    follows ( this is an extract of the file ):
                </p>

                <BashCode code={modulecsscode}/>

                <p>
                    an the  <span className="text-white font-semibold"> pattern will mount </span> in the 
                    <span className="text-white font-semibold"> end component </span> as follows:
                </p>

                
                <BashCode code={buttonascleancodeappcode}/>

                <p>
                    the  <span className="text-white font-semibold"> ButtonAsCleanCodeApp  </span> will result in:
                </p>

                <ButtonAsCleanCodeApp />

                <p>
                    let's say i have an <span className="text-white font-semibold"> anchor tag  </span> in this same app 
                    as follows:
                </p>

                <BashCode code={buttonascleanCodeappaftercode}/>

                <p>
                    the  <span className="text-white font-semibold"> ButtonAsCleanCodeAppAfter  </span> will result in:
                </p>

               <ButtonAsCleanCodeAppAfter /> 

               <p>
                    let's refactor to wrap with the pattern <span className="text-white font-semibold"> ButtonAsCleanCode </span> the 
                    <span className="text-white font-semibold"> anchor tag  </span> as follows:
                </p>

                <BashCode code={buttonascleancodeappafterwrapcode}/>

            </SectionWrapper>


        </div>
    )

}

export default CleanCodeTips;

