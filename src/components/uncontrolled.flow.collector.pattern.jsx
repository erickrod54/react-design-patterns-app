import React, { useState } from "react";
import { StepFlowWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 4.08 - UncontrolledFlowPatternCollector
 * - Features: 
 * 
 *     --> Building 'UncontrolledFlowPatternCollector' 
 * 
 * Note: simiLar to the 'UncontrolledFlowPattern' but in the
 * uncontrolled flow this pattern will collect data.
 */

const UncontrolledFlowPatternCollector = ({ children, onDone }) => {
   

    const [data, setData ] = useState({});
   
    /**this state to track the index of the step */
    const [currentStepIndex, setCurrentStepIndex ] = useState(0);

    const goNext = (dataFromStep) => {

        const nextStepIndex = currentStepIndex + 1;

        const newData = {
            ...data,
            ...dataFromStep
        }
        
        console.log('the new data is being collected ==>', newData);

        if (nextStepIndex < children.length) {
            setCurrentStepIndex(nextStepIndex)
        }else{
            onDone()
        }

        setData(newData)

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

export default UncontrolledFlowPatternCollector;