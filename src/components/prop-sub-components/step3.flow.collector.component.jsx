import React from "react";
import { ButtonGeneral, StepFlowWrapper } from "../../styledcomponents/styled.components";

/**react-design-patterns-app - version 4.08 - Step3FlowCollector
 * - Features: 
 * 
 *     --> Building 'Step3FlowCollector' 
 * 
 * Note: this step #3 will be part of the uncontrolled 
 * flow collector.
 */

const Step3FlowCollector = ({ goNext }) => {

    return(
        <StepFlowWrapper>
            <h2>the Step #3: Enter Your Country: </h2>
            <ButtonGeneral>
                <button onClick={() => goNext({country: 'Venezuela'})}>Next</button>
            </ButtonGeneral>
        </StepFlowWrapper>
    )
}

export default Step3FlowCollector;