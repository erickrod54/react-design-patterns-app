import React from "react";
import { UseIdAfterMathForm, UseIdBeforeForm } from "./index.components";
import { MultipleFormWrapper } from "../styledcomponents/styled.components";


/**react-design-patterns-app - version 11.12 - UseIdMultipleFormAfterMath
 * - Features: 
 * 
 *     --> Building 'UseIdMultipleFormAfterMath'  
 * 
 * Note: this component will be the one to apply the math
 * version
 */

const UseIdMultipleFormAfterMath = () => {

    return (
        <MultipleFormWrapper>
            <UseIdAfterMathForm />
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
            <UseIdAfterMathForm />
        </MultipleFormWrapper>
      );
}

export default UseIdMultipleFormAfterMath;