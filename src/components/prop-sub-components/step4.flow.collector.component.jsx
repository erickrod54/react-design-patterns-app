import React from "react";
import { ButtonGeneral, StepFlowWrapper } from "../../styledcomponents/styled.components";

/**react-design-patterns-app - version 4.09 - Step4Flow
 * - Features: 
 * 
 *     --> Building 'Step4Flow' 
 * 
 * Note: this step #3 will be part of the controlled flow
 * collector in order to display a message in a base 
 * condition ( age )
 */

const Step4Flow = ({ goNext }) => {

    return(
        <StepFlowWrapper>
            <h2>Congratulations your age calify!!!!</h2>
        </StepFlowWrapper>
    )
}

export default Step4Flow;