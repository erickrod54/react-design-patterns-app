import React from "react";
import { UseIdAfterMathForm, UseIdAfterTwoOrMoreInputs } from "./index.components";
import { MultipleFormWrapper } from "../styledcomponents/styled.components";


/**react-design-patterns-app - version 12.01 - UseIdAfterMultipleInputs
 * - Features: 
 * 
 *     --> Building 'UseIdAfterMultipleInputs'  
 * 
 * Note: this component 'UseIdAfterMultipleInputs'
 * will render forms with multiple inputs
 */

const UseIdAfterMultipleInputs = () => {

    return (
        <MultipleFormWrapper>
            <UseIdAfterTwoOrMoreInputs />
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
            <UseIdAfterTwoOrMoreInputs />
        </MultipleFormWrapper>
      );
}

export default UseIdAfterMultipleInputs;