import React from "react";
import { UseIdAfterForm } from "./index.components";
import { MultipleFormWrapper } from "../styledcomponents/styled.components";


/**react-design-patterns-app - version 11.18 - UseIdMultipleFormAfter
 * - Features: 
 * 
 *     --> Building using 'UseIdMultipleFormAfter'  
 * 
 * Note: the 'UseIdMultipleFormBefore' will hold multiple
 * forms in the same component scope
 */

const UseIdMultipleFormAfter = () => {

    return (
        <MultipleFormWrapper>
            <UseIdAfterForm />
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
            <UseIdAfterForm />
        </MultipleFormWrapper>
      );
}

export default UseIdMultipleFormAfter;