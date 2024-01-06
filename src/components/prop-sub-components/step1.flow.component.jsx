import React from "react";
import { ButtonGeneral, StepFlowWrapper } from "../../styledcomponents/styled.components";

/**react-design-patterns-app - version 4.08 - Step1Flow
 * - Features: 
 * 
 *     --> Building 'Step1Flow' 
 * 
 * Note: this step #1 will be part of the uncontrolled 
 * flow.
 */

const Step1Flow = ({ goNext }) => {

    return(
        <StepFlowWrapper>
            <h2>the Step #1</h2>
            <ButtonGeneral>
                <button onClick={goNext}>Next</button>
            </ButtonGeneral>
        </StepFlowWrapper>
    )
}

export default Step1Flow;