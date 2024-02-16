import React from "react";
import ChildComponent from "./error.boundaries.child.component";
import { ChildWrapper, MasterWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 8.09 - MasterComponent
 * - Features: 
 * 
 *     --> Adding 'ChildWrapper' style component
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */

const MasterComponent = () => {
    
    return (
        <MasterWrapper>
            <h1>Parent Component</h1>
            <ChildWrapper>
                <ChildComponent />
            </ChildWrapper>
        </MasterWrapper>
      );

}

export default MasterComponent