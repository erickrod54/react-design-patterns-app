import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import BashCode from "./bash.higlight.component";
import ButtonAsCleanCodeApp from "./buttons.as.clean.code.tip.app.component";
import ButtonAsCleanCodeAppAfter from "./buttons.as.clean.code.tip.after.app.component";
import ButtonAsCleanCodeAppAfterWrap from "./button.as.clean.code.tip.after.wrap.component";
import ButtonAsCleanCodeAppAfterPattern from "./button.as.clean.code.tip.after.new.pattern.component";
import { ShoppingCounter, ShoppingCounterAfter, ShoppingCounterPerformance } from "./index.components";


/**react-design-patterns-app - version 19.13 - CleanCodeTips
 * - Features: 
 * 
 *     --> Wrapping 'ShoppingCounterPerformance' cconcepts
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
    const buttonascleancodeascode = CodeData[119].code;
    const ascleanCodeappafterpattern = CodeData[120].code;
    const shoppingcountercode = CodeData[121].code;
    const buttonscountercode = CodeData[122].code;
    const displaycode = CodeData[123].code;
    const optimizecontextapicode = CodeData[124].code;
    const buttonsaftercode = CodeData[125].code;
    const displayaftercode = CodeData[126].code;
    const cartproviderperformancecode = CodeData[127].code;
    const displayperformancecode = CodeData[128].code;
    const buttonsperformancecode = CodeData[129].code;
    const shoppingcounterperformance = CodeData[130].code;
    
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

                <p>
                    the  <span className="text-white font-semibold"> ButtonAsCleanCodeAppAfterWrap   </span> will result in:
                </p>

                <ButtonAsCleanCodeAppAfterWrap />

                <p>
                    the main goal of this pattern is to have full <span className="text-white font-semibold"> styles + functionality </span>,
                    so i will start by refactoring the pattern as follows:
                </p>

                <BashCode code={buttonascleancodeascode}/>

                <p>
                    so refactoring to wrap with the new pattern <span className="text-white font-semibold"> ButtonAsCleanCodeAs  </span> the 
                    <span className="text-white font-semibold"> anchor tag  </span> as follows ( this time i have have 
                    full <span className="text-white font-semibold"> styles + functionality </span>) :
                </p>

                <BashCode code={ascleanCodeappafterpattern}/>

                <p>
                    the  <span className="text-white font-semibold"> ButtonAsCleanCodeAppAfterPattern    </span> will result in:
                </p>

                <ButtonAsCleanCodeAppAfterPattern />

                <br />
                <br />

                <CustomTitleStyle>
                    <CustomTitle  title={<p className="context-api-optimization"><span > Context API Optimization </span></p>} />
                </CustomTitleStyle>        

                <p>
                    the  context api is use to provide resources in a centralized way to the application that is going to be build, 
                    and this pattern is focous to the problem that comes when is the need to <span className="text-white font-semibold"> 
                    ensure that components accessing the context are wrapped within the context </span> provider to <span className="text-white font-semibold"> 
                    avoid null values </span> 
                </p>

                <p>
                    this pattern will combine the following technologies and techniques:
                </p>

                <ul className="list-white-space">
                    <li>
                        <span className="text-white font-semibold"> Separation of logic </span> ( startpoint of migration to <span className="text-white font-semibold"> Redux </span>)
                    </li>
                    <li>
                        <span className="text-white font-semibold"> Context API Encapsulation </span> (this technique will help to make a rehusable context code without repeating the context setup )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> Improving Performance by Context Splitting </span> ( this technique will make context usage efficient )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> TypeScript Implementation </span> ( by using strong typing can help to validate numerous features of a context )
                    </li>
                </ul>

                <p>
                    let's say a have an <span className="text-white font-semibold"> initial main component </span> that ha some sort of functionality 
                    as a shopping Cart with the name of <span className="text-white font-semibold"> ShoppingCounter </span>, as follows: 
                </p>

                <BashCode code={shoppingcountercode}/> 

                 <p>
                    so this main component will be compose for <span className="text-white font-semibold"> Buttons </span>, sub component that will be as follows: 
                 </p>      

                <BashCode code={buttonscountercode}/> 

                <p>
                    and a <span className="text-white font-semibold"> Display </span> sub component, that will be as follows: 
                 </p>

                <BashCode code={displaycode}/> 

                <p>
                    resulting <span className="text-white font-semibold"> ShoppingCounter  </span> as follows:
                </p>

                <ShoppingCounter />

                <p>
                    this context can be even more optimized, let's start by the <span className="text-white font-semibold"> Separation of logic </span> 
                    and in this case i am taking some <span className="text-white font-semibold"> context API code </span> in:
                </p>

                <BashCode code={optimizecontextapicode}/> 

                <p>
                    so this main component will be compose for <span className="text-white font-semibold"> ButtonsAfter  </span>, sub component
                    with small re factor in the imports (<span className="text-white font-semibold"> this components can be rehuse, - i create a new one because 
                    i want to show them both cases in the same codebase -</span>), and will be as follows: 
                </p>

                <BashCode code={buttonsaftercode}/> 

                <p>
                    and with <span className="text-white font-semibold"> DisplayAfter  </span>, sub component
                    the same refactor, and will be as follows: 
                </p>

                <BashCode code={displayaftercode}/> 

                <p>
                    resulting in:
                </p>

                <ShoppingCounterAfter />

                <p>
                    and this is a good approach when it is a small application because  <span className="text-white font-semibold"> actions ( dispatch)  </span>, 
                    and <span className="text-white font-semibold"> states ( values )</span> can be together without implications in performance
                </p>

                <p>
                    so by <span className="text-white font-semibold"> Improving Performance by Context Splitting </span> this technique will make context usage efficient,
                    and very convinient to separate concern when <span className="text-white font-semibold"> scaling becomes imperative </span>, and will be done 
                    by refactoring the Context focusing in performance adding a <span className="text-white font-semibold"> StateContext ( for the value/s )</span>, 
                    <span className="text-white font-semibold"> DispatchContext ( for the action/s )</span>, and a 
                    <span className="text-white font-semibold"> CartProviderPerformance </span> as follows:     
                </p>

                <BashCode code={cartproviderperformancecode}/> 

                <p>
                    and refactoring <span className="text-white font-semibold"> DisplayPerformance  </span> to pull from the context only 
                    <span className="text-white font-semibold"> StateContext ( for the value/s ) </span>, as follows:     
                </p>

                <BashCode code={displayperformancecode}/> 

                <p>
                    and refactoring <span className="text-white font-semibold"> ButtonsPerformance  </span> to pull from the context only 
                    <span className="text-white font-semibold"> DispatchContext  ( for the action/s ) </span>, as follows:     
                </p>

                <BashCode code={buttonsperformancecode}/> 

                <p>
                    and refactoring the main component <span className="text-white font-semibold"> ButtonsPerformance  </span> to mount the 
                    two sub components <span className="text-white font-semibold">  DisplayPerformance  </span> and 
                    <span className="text-white font-semibold">  ButtonsPerformance   </span> , will be as follows:     
                </p>

                <BashCode code={shoppingcounterperformance}/> 

                <p>
                    rendering the main component <span className="text-white font-semibold"> ShoppingCounterPerformance   </span> 
                     will result as follows:     
                </p>

                <ShoppingCounterPerformance />

                <p>
                    this way the main component <span className="text-white font-semibold"> ShoppingCounterPerformance   </span> 
                     will be more performant, by inspecting in <span className="text-white font-semibold"> Chrome ${`>`} Profiler   </span>
                     the component will re-render only the sub-components that are interacting with the user, improving highly the user
                     experience and the app performance while it scales     
                </p>

            </SectionWrapper>


        </div>
    )

}

export default CleanCodeTips;

