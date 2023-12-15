import React from "react";
import { Container, Panel } from "../styledcomponents/styled.components.index";

/**react-design-patterns-app - version 2.11 - components > index  
 * - Features: 
 * 
 *     --> Building 'SplitScreenVariation'
 * 
 * Note: Pending to make responsive design
 */

const SplitScreenVariation = ({ children, leftWidth = 1, rightWidth = 1 }) => {

    const [ left, right ] = children;
    
    return(
    <Container>
            <Panel flex={leftWidth} className="bg-red-400">
               {left}
            </Panel>
            <Panel flex={rightWidth} className="bg-red-500">
                {right}
            </Panel>
    </Container>
    )
}

export default SplitScreenVariation;