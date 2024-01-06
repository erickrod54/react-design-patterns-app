import React, { useState } from "react";
import { StepFlowWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 4.08 - UncontrolledFlowPattern
 * - Features: 
 * 
 *     --> Building 'UncontrolledFlowPattern' 
 * 
 * Note: this flow pattern i directly related with how data can 
 * flow in an uncontrolled way in a component
 */

const UncontrolledFlowPattern = ({ children }) => {
   
    /**this state to track the index of the step */
    const [currentStepIndex, setCurrentStepIndex ] = useState(0);

    const goNext = () => {
        setCurrentStepIndex(currentStepIndex + 1)
    }

    /** in this line i create an array of children and use the index*/
    const currentChild = React.Children.toArray(children)[currentStepIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goNext })
    }

    return( 
        <StepFlowWrapper>
            <h2>Uncontrolled flow done !! Refresh :) </h2>
        </StepFlowWrapper>
    )
}

export default UncontrolledFlowPattern;