import React from "react";

/**react-design-patterns-app - version 4.09 - ControlledFlowPatternCollector
 * - Features: 
 * 
 *     --> Building 'ControlledFlowPatternCollector' 
 * 
 * Note: This variation 'ControlledFlowPatternCollector' is used more 
 * frequently than 'UncontrolledFlowPatternCollector' because is more
 * flexible and gives more control over the data flow.
 */

const ControlledFlowPatternCollector = ({ children, onDone, currentIndex, onNext }) => {
   
    const goNext = (dataFromStep) => {
        onNext(dataFromStep)
    }

    /** in this line i create an array of children and use the index*/
    const currentChild = React.Children.toArray(children)[currentIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goNext })
    }

    return currentChild;
}

export default ControlledFlowPatternCollector;