import React, { useState } from "react";
import { ButtonGeneral, CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import BashCode from "./bash.higlight.component";
import { usePatternsAppContext } from "../context";
import { Step1Flow,
         Step1FlowCollector,
         Step2Flow,
         Step2FlowCollector, Step3Flow, Step3FlowCollector, Step4Flow } from "./prop-sub-components/prop.components.index";

import { ControlledFlowPatternCollector,
         ControlledPattern,
         TheOutSideControlled,
         UncontrolledFlowPattern, UncontrolledFlowPatternCollector, UncontrolledPattern, } from './index.components'

/**react-design-patterns-app - version 6.10 - ControlledUnControlledPattern
 * - Features: 
 * 
 *     --> Adding 'step2Flowcollectorrender' code
 * 
 * Note: this component will explain concepts of controlled and 
 * uncontrolled pattern
*/

const ControlledUnControlledPattern = () => {

    
    /**controlled collector flow states */
    const [data, setData ] = useState({});
    const [currentStepIndex, setCurrentStepIndex ] = useState(0);
   
    const { CodeData } = usePatternsAppContext();

    const modalcode = CodeData[7].code;
    const uncontrolledcomponent = CodeData[22].code;
    const modalcontrolled = CodeData[23].code;
    const uncontrolledflow = CodeData[24].code;
    const outsidecomponent = CodeData[35].code;
    const uncontrolledflowcollector = CodeData[36].code;
    const uncontrolledflowcollectorrender = CodeData[37].code;
    const step1flowcomponent = CodeData[38].code;
    const controlledflowpattern = CodeData[39].code;
    const controlledflowrender = CodeData[40].code;
    const step2Flowcollectorrender = CodeData[41].code;


    /**controlled collector flow handlers */
    const goNext = (dataFromStep) => {

        setData({...data, ...dataFromStep})
        setCurrentStepIndex(currentStepIndex + 1)
    }
    

    return(
        <div>
        <CustomTitleStyle>
                <CustomTitle  title={<p className="controlled-uncontrolled-pattern"><span >controlled and uncontrolled pattern</span></p>} />
        </CustomTitleStyle>

        <SectionWrapper>

        <p> 
            <span className="text-white font-semibold"> controlled and uncontrolled components patterns </span> 
            are highly frequent use in most react codebases, so is essenttial to understand their differences
            and use cases, their differences focus in three aspects 
        </p>

        <ul>
            <li>
                <span className="text-white font-semibold"> state handling </span> 
            </li>
            <li>
                <span className="text-white font-semibold"> daata flow </span>
            </li>
            <li>
                <span className="text-white font-semibold"> flexibility vs. predictability </span>
            </li>
        </ul>

        <p>
            generally the <span className="text-white font-semibold"> controlled component pattern </span>
            is the preffered choice for some reasons reated with 
            easier <span className="text-white font-semibold"> testing and rehusability </span>
            eliminating the event outside triggered and behavioral testing  
        </p>

        <CustomTitleStyle>
                <CustomTitle  title={<p className="sub-title"><span >uncontrolled component patterns</span></p>} />
        </CustomTitleStyle>

        <p>
            this pattern has the following characteristics:
        </p>

        <ul>
            <li>
                <span className="text-white font-semibold"> state handling </span> the 
                <span className="text-white font-semibold"> component managing itself its own internal state </span>
            </li>
            <li>
                for the <span className="text-white font-semibold"> data flow </span> becuase 
                data flows <span className="text-white font-semibold"> directly between the DOM and the form elements without passing through React's state </span>
            </li>
            <li>
                <span className="text-white font-semibold"> flexibility vs. predictability </span> offer <span className="text-white font-semibold"> more flexibility </span>
            </li>
        </ul>    

        <p> 
            By the <span className="text-white font-semibold"> component managing itself its own internal state </span> 
            and the data within the component is accesed only when a specific outside events happen, a common use case 
            of an uncontrolled component can be when the values from a form are known to the outside components 
            only when it triggers the submit event, <span className="text-white font-semibold"> data flow </span> 
            typically retrieval data from form elements when necessary, like during form submission, using refs or other 
            DOM manipulation methods.
        </p>

        <p>
            this pattern offers <span className="text-white font-semibold"> more flexibility </span> 
            because they don't rely on React state for managing form data however, 
            it might be more challenging to <span className="text-white font-semibold"> maintain consistency 
            and perform complex operations on form data </span> 
        </p>

        <p>
            let's see a practical exercise about this pattern:
        </p>

        <UncontrolledPattern />

        <p>
            so the code for the form above is as follows:
        </p>

        <BashCode code={uncontrolledcomponent}/>

        <p>
            by not having explicit control over the state, due to the use of refs or 
            direct manipulation of the DOM or a different use case, makes the form 
            not than flexible ( but usefull for some use cases like searches results,
            or maybe access level use cases and more )
        </p>

        <CustomTitleStyle>
                <CustomTitle  title={<p className="sub-title"><span >controlled component patterns</span></p>} />
        </CustomTitleStyle>

        <p>
        this pattern has the following characteristics: 
        </p>

        <ul>
            <li>
                <span className="text-white font-semibold"> the parent component is responsible for managing the state </span>
                relies on React state to manage form data
            </li>
            <li>
                for the <span className="text-white font-semibold"> data flow </span> flows from the component's state to
                 the form elements and vice versa.
            </li>
            <li>
                <span className="text-white font-semibold"> flexibility vs. predictability </span> provides 
                <span className="text-white font-semibold"> more control and predictability </span>
            </li>
        </ul>

        <p> 
            By the <span className="text-white font-semibold"> the parent component is responsible for managing the state </span> 
            so  relies on React state to manage form data a use case example can be when a form value changes, 
            <span className="text-white font-semibold"> it triggers a state update via an onChange event handler </span>,
            the <span className="text-white font-semibold"> data flow </span> flows from the component's state to
            the form elements and vice versa an use case can be Whenever the state changes, the UI updates accordingly. 
            Similarly, when the user interacts with the form element, it triggers an onChange event that updates the state.
        </p>

        <p>
            now lets see an example of a controlled pattern:
        </p>

        <ControlledPattern />

        <p>
            let check the modal code from the previous layout pattern, that also is an uncontrolled modal ( it is uncontrolled 
            cause outside components cannot access directly to his state )
        </p>

        <BashCode code={modalcode}/>

        <p>
            so following this code if i want to control this component for example to close and open from 
            <span className="text-white font-semibold"> outside of it </span>,
            it wont be possible unless i convert this <span className="text-white font-semibold"> uncontrolled pattern
            </span> into a <span className="text-white font-semibold"> controlled pattern </span> as follows:
        </p>

        <p>
            by modifying the <span className="text-white font-semibold"> state handling </span> will be like this:
        </p>

        <BashCode code={modalcontrolled}/>

        <TheOutSideControlled />

        <p>
            so the complete functionality of the component will live somewhere 
            <span className="text-white font-semibold"> outside of ControlledModal </span> 
            ( depending on the use case that is needed ) as it follows:
        </p>
        
        <BashCode code={outsidecomponent}/>


        <p>
            the <span className="text-white font-semibold"> predictability </span> provides of this pattern
            <span className="text-white font-semibold"> explicit control over form data </span>, making it easier 
            to implement features like validation, resetting fields, or 
            manipulating values before submission.
        </p>
        
        <a href="https://whimsical.com/react-design-patterns-Cujb8SpzYCZJay6VbMPCkb" target="_blank"> Controlled Flow Chart </a>

        <CustomTitleStyle>
                <CustomTitle  title={<p className="sub-title"><span >uncontrolled flow patterns: ( <span className="text-white font-semibold"> for each check the flow in the Chrome Java Console </span>)</span></p>} />
        </CustomTitleStyle>
    
        <p>
            uncontrolled flows is in specific related with <span className="text-white font-semibold"> onboarding flows </span>
            ( an onboarding flow is a pattern that is always present <span className="text-white font-semibold"> registration apps, 
            or form filling, or an online job application </span> and this flow is compose 
            of steps that can be from few to several steps on <span className="text-white font-semibold"> each step asking for specific 
            information </span>, and the final step will be the finish of the flow ), let's see an example: 
            (<span className="text-white font-semibold"> anonymous uncontrolled flow - does not collect data- </span>)
        </p>

        <UncontrolledFlowPattern>
            <Step1Flow />
            <Step2Flow />
            <Step3Flow />
        </UncontrolledFlowPattern>

        <p>
            the code for this exersice is as follows:
        </p>

        <BashCode code={uncontrolledflow}/>

        <p>
            as in the comments from the code sometimes in some cases it is only necessary the flow to
            make for example a navigation experience for end users, is leave it open like this one to 
            connect with another flows or parts of the application
        </p>

        <p>
            onboarding flows usually <span className="text-white font-semibold"> collects data </span> by 
            the flow of every step, let's check this flow collecting  data in every step: ( <span className="text-white font-semibold"> 
            uncontrolled flow - does collect data </span>) 
        </p>

        <p>
            the conde for the <span className="text-white font-semibold"> {`<UncontrolledFlowPatternCollector>`} </span>, will be as 
            follows:
        </p>

        <BashCode code={uncontrolledflowcollector}/>

        <p>
            rendering the component as follows: 
        </p>

        <BashCode code={uncontrolledflowcollectorrender}/>

        <p>
            and the steps components are defined as 
            follows ( this is an extract of <span className="text-white font-semibold"> {`<Step1FlowCollector />`} </span>)
        </p>

        <BashCode code={step1flowcomponent}/>        

        <p>
            resulting in: (<span className="text-white font-semibold"> check the JavaConsole to see the data collection </span>)    
        </p>            

        <UncontrolledFlowPatternCollector onDone={data => {
            console.log({data})
            alert('you made to the final step :)')
        }}>
            <Step1FlowCollector />
            <Step2FlowCollector />
            <Step3FlowCollector />
        </UncontrolledFlowPatternCollector>

        <p>
            so this last uncontrolled data flow collector can be convert in a controlled data flow
            collector, as follows: (<span className="text-white font-semibold"> controlled flow </span>)
        </p>

        <BashCode code={controlledflowpattern}/> 

        <p>
            and in order to <span className="text-white font-semibold"> control flow </span>, 
            i use a an external data to alternate the code between steps 
            <span className="text-white font-semibold">{` <Step4Flow /> `}</span> and 
            <span className="text-white font-semibold">{` <Step3FlowCollector /> `}</span> 
        </p>

        <BashCode code={controlledflowrender}/>

        <p>
            in the step flow, the data is <span className="text-white font-semibold"> being collected from this component </span>:
        </p>

        <BashCode code={step2Flowcollectorrender}/>
        
        <p>
            resulting in the following:
        </p>

        <ControlledFlowPatternCollector
            currentIndex={currentStepIndex}
            onNext={goNext}
        >
            <Step1FlowCollector />
            <Step2FlowCollector />
            {data.age > 25 ? <Step4Flow /> : <Step3FlowCollector />}
        </ControlledFlowPatternCollector>
      

        </SectionWrapper>
        </div>
    )
}

export default ControlledUnControlledPattern;