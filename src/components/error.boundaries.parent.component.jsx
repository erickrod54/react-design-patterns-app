import React from "react";
import ChildComponent from "./error.boundaries.child.component";
import { MasterWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 8.07 - MasterComponent
 * - Features: 
 * 
 *     --> Building 'MasterComponent'
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */

const MasterComponent = () => {
    
    return (
        <MasterWrapper>
            <h1>Parent Component</h1>
                <ChildComponent />
        </MasterWrapper>
      );

}

export default MasterComponent