import React from "react";
import { UseIdBeforeForm } from "./index.components";


/**react-design-patterns-app - version 11.05 - UseIdMultipleFormBefore
 * - Features: 
 * 
 *     --> Switching import  
 * 
 * Note: the 'UseIdMultipleFormBefore' will hold multiple
 * forms in the same component scope
 */

const UseIdMultipleFormBefore = () => {

    return (
        <>
          <UseIdBeforeForm />
          <p>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
          <UseIdBeforeForm />
        </>
      );
}

export default UseIdMultipleFormBefore;