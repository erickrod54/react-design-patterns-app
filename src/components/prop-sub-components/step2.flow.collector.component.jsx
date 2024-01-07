import React from "react";
import { ButtonGeneral, StepFlowWrapper } from "../../styledcomponents/styled.components";

/**react-design-patterns-app - version 4.09 - Step2FlowCollector
 * - Features: 
 * 
 *     --> Changing 'Age' by 'age' to control the data flow  
 * 
 * Note: this step #2 will be part of the uncontrolled 
 * flow collector and controlled flow, setting the base
 * condition for this last one.
 */

const Step2FlowCollector = ({ goNext }) => {

    return(
        <StepFlowWrapper>
            <h2>the Step #2: Enter your age: </h2>
            <ButtonGeneral>
                <button onClick={() => goNext({ age: 39 })}>Next</button>
            </ButtonGeneral>
        </StepFlowWrapper>
    )
}

export default Step2FlowCollector;