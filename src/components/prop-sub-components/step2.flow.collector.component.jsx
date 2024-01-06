import React from "react";
import { ButtonGeneral, StepFlowWrapper } from "../../styledcomponents/styled.components";

/**react-design-patterns-app - version 4.08 - Step2FlowCollector
 * - Features: 
 * 
 *     --> Building 'Step2FlowCollector' 
 * 
 * Note: this step #2 will be part of the uncontrolled 
 * flow collector.
 */

const Step2FlowCollector = ({ goNext }) => {

    return(
        <StepFlowWrapper>
            <h2>the Step #2: Enter your age: </h2>
            <ButtonGeneral>
                <button onClick={() => goNext({ Age: 39 })}>Next</button>
            </ButtonGeneral>
        </StepFlowWrapper>
    )
}

export default Step2FlowCollector;