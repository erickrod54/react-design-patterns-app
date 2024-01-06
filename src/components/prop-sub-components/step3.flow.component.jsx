import React from "react";
import { ButtonGeneral, StepFlowWrapper } from "../../styledcomponents/styled.components";

/**react-design-patterns-app - version 4.08 - Step3Flow
 * - Features: 
 * 
 *     --> Building 'Step3Flow' 
 * 
 * Note: this step #3 will be part of the uncontrolled 
 * flow
 */

const Step3Flow = ({ goNext }) => {

    return(
        <StepFlowWrapper>
            <h2>the Step #3</h2>
            <ButtonGeneral>
                <button onClick={goNext}>Next</button>
            </ButtonGeneral>
        </StepFlowWrapper>
    )
}

export default Step3Flow;