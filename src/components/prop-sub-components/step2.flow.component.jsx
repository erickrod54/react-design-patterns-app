import React from "react";
import { ButtonGeneral, StepFlowWrapper } from "../../styledcomponents/styled.components";

/**react-design-patterns-app - version 4.08 - Step2Flow
 * - Features: 
 * 
 *     --> Building 'Step2Flow' 
 * 
 * Note: this step #2 will be part of the uncontrolled 
 * flow.
 */

const Step2Flow = ({ goNext }) => {

    return(
        <StepFlowWrapper>
            <h2>the Step #2</h2>
            <ButtonGeneral>
                <button onClick={goNext}>Next</button>
            </ButtonGeneral>
        </StepFlowWrapper>
    )
}

export default Step2Flow;