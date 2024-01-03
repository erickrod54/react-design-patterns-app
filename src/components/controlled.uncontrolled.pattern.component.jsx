import React from "react";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import UncontrolledPattern from "./uncontrolled.pattern.component";

/**react-design-patterns-app - version 4.05 - ControlledUnControlledPattern
 * - Features: 
 * 
 *     --> Develioping 'UnControlledPattern' concepts.
 * 
 * Note: this component will explain concepts of controlled and 
 * uncontrolled pattern
 */

const ControlledUnControlledPattern = () => {

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
            the <span className="text-white font-semibold"> predictability </span> provides of this pattern
            <span className="text-white font-semibold"> explicit control over form data </span>, making it easier 
            to implement features like validation, resetting fields, or 
            manipulating values before submission.
        </p>
        
    
        </SectionWrapper>
        </div>
    )
}

export default ControlledUnControlledPattern;