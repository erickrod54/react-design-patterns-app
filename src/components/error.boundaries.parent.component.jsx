import React from "react";
import ChildComponent from "./error.boundaries.child.component";
import { ChildWrapper, MasterWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 8.10 - MasterComponent
 * - Features: 
 * 
 *     --> Renaming h1 tag to 'Master Component'
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */

const MasterComponent = () => {
    
    return (
        <MasterWrapper>
            <h1>Master Component</h1>
            <ChildWrapper>
                <ChildComponent />
            </ChildWrapper>
        </MasterWrapper>
      );

}

export default MasterComponent