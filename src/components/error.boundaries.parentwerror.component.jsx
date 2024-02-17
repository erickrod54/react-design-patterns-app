import React from "react";
import ChildComponent from "./error.boundaries.child.component";
import { ChildWrapper, MasterWrapper } from "../styledcomponents/styled.components";
import ChildWithErrorComponent from "./error.boundaries.childwerror.component";

/**react-design-patterns-app - version 8.13 - MasterWithErrorComponent
 * - Features: 
 * 
 *     --> Building 'MasterWithErrorComponent'
 * 
 * Note: this component goal is to show an error
 */

const MasterWithErrorComponent = () => {
    
    return (
        <MasterWrapper>
            <h1>Master Component</h1>
            <ChildWrapper>
                <ChildWithErrorComponent />
            </ChildWrapper>
        </MasterWrapper>
      );

}

export default MasterWithErrorComponent