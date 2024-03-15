import React from "react";
import {  UseIdCleanAfterTwoOrMoreInputs } from "./index.components";
import { MultipleFormWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 12.07 - UseIdAfterCleanMultipleInputs
 * - Features: 
 * 
 *     --> Building 'UseIdAfterCleanMultipleInputs'  
 * 
 * Note: this component 'UseIdAfterMultipleInputs'
 * will render forms with multiple inputs
 */

const UseIdAfterCleanMultipleInputs = () => {

    return (
        <MultipleFormWrapper>
            <UseIdCleanAfterTwoOrMoreInputs />
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
            <UseIdCleanAfterTwoOrMoreInputs />
        </MultipleFormWrapper>
      );
}

export default UseIdAfterCleanMultipleInputs;