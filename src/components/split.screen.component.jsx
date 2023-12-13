import React from "react";
import { Container, Panel } from "../styledcomponents/styled.components.index";

/**react-design-patterns-app - version 2.07 - components > index  
 * - Features: 
 * 
 *     --> Adding 'flex' prop dynamicly
 * 
 * Note: Pending to make responsive design
 */

const SplitScreen = ({ Left, Right, leftWidth, rightWidth }) => {

    return(
    <Container>
            <Panel flex={leftWidth} className="bg-red-400">
                <Left />
            </Panel>
            <Panel flex={rightWidth} className="bg-red-500">
                <Right />
            </Panel>
    </Container>
    )
}

export default SplitScreen;