import React from "react";
import { UseIdBeforeForm } from "./index.components";
import { MultipleFormWrapper } from "../styledcomponents/styled.components";


/**react-design-patterns-app - version 11.08 - UseIdMultipleFormBefore
 * - Features: 
 * 
 *     --> Wrapping using 'MultipleFormWrapper'  
 * 
 * Note: the 'UseIdMultipleFormBefore' will hold multiple
 * forms in the same component scope
 */

const UseIdMultipleFormBefore = () => {

    return (
        <MultipleFormWrapper>
            <UseIdBeforeForm />
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
            <UseIdBeforeForm />
        </MultipleFormWrapper>
      );
}

export default UseIdMultipleFormBefore;