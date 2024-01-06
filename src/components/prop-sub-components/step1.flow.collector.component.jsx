import React from "react";
import { ButtonGeneral, StepFlowWrapper } from "../../styledcomponents/styled.components";

/**react-design-patterns-app - version 4.08 - Step1FlowCollector
 * - Features: 
 * 
 *     --> Building 'Step1FlowCollector' 
 * 
 * Note: this step #1 will be part of the uncontrolled 
 * flow collector.
 */

const Step1FlowCollector = ({ goNext }) => {

    return(
        <StepFlowWrapper>
            <h2>the Step #1: Enter Your name:</h2>
            <ButtonGeneral>
                <button onClick={() => goNext({ name: 'MyName' })}>Next</button>
            </ButtonGeneral>
        </StepFlowWrapper>
    )
}

export default Step1FlowCollector;